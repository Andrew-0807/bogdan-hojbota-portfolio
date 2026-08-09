---
name: release
description: Release a new version of the project and ship updates. Bumps the version, builds release assets (such as signed Tauri MSIs), pushes to GitHub, tags the commit, and publishes a GitHub release (with updater files like latest.json for Tauri apps).
metadata:
  trigger: Releasing a new version of the application or library
---

# Release

Ship a new version of the current project. This skill dynamically adapts to the project type (e.g., Tauri desktop apps, standard Node.js/npm packages, Rust Cargo crates, etc.) and avoids hardcoded repositories or paths.

## Before you start

1. **Identify the Project Type:**
   - **Tauri App:** Look for `src-tauri/tauri.conf.json`.
   - **Node.js/NPM:** Look for `package.json` (without Tauri).
   - **Rust Crate:** Look for `Cargo.toml` (without Tauri).
   - **Other:** Look for relevant version-controlled config files (e.g., `pyproject.toml`, `setup.py`, etc.).

2. **Determine Project Metadata:**
   - Run `git remote get-url origin` or check the repository field in `package.json` to get the GitHub owner and repository (`<owner>/<repo>`).
   - Get the application/package name from `package.json` (`name`) or `tauri.conf.json` (`productName`).

3. **Decide the New Version:**
   - Default: bump the patch version of the current version (e.g., `X.Y.Z` -> `X.Y.Z+1`). Confirm with the user if unsure.

4. **Write Release Notes:**
   - Generate release notes from `git log <last-tag>..HEAD --oneline` (or `git log -n 10 --oneline` if there are no previous tags).

5. **Preconditions & Secrets:**
   - Ensure the GitHub CLI (`gh`) is installed and authenticated (`gh auth status`).
   - **For Tauri Apps:** A signing key is required for auto-updates. Locate the private key path (e.g., in a gitignored `tmp/` folder, such as `tmp/<app-name>-update.key`, or check the environment variable `TAURI_SIGNING_PRIVATE_KEY` if already set). If the key is missing and this is a production update, stop and notify the user — updates cannot be signed without it.

## Steps (run in order, stop on any failure)

### 1. Bump version
Bump the version to `X.Y.Z` in the project's configuration files:
- **Tauri App:** Update `src-tauri/tauri.conf.json` (`package.version`), `package.json` (`version`), and `src-tauri/Cargo.toml` (under `[package]`, `version = "X.Y.Z"`).
- **Node.js/NPM:** Update `package.json` (`version`).
- **Rust Crate:** Update `Cargo.toml` (`version`).
- **Other:** Update the appropriate configuration file.

### 2. Build the project
Compile or bundle the release assets:
- **Tauri App (Windows MSI):**
  Locate the absolute path to the signing private key (`$KEY_PATH`). In PowerShell, set the signing environment variables and build:
  ```powershell
  $env:TAURI_SIGNING_PRIVATE_KEY = (Get-Content "$KEY_PATH" -Raw)
  $env:TAURI_SIGNING_PRIVATE_KEY_PASSWORD = "" # Prompt the user if the key is password-protected
  npm run tauri build -- --bundles msi
  ```
  Verify that the built `.msi` and its signature `.msi.sig` exist in `src-tauri/target/release/bundle/msi/`. If `.msi.sig` is missing, the build was not signed — stop and troubleshoot the key path.
- **Node.js/NPM:** Run build and/or package tasks (e.g., `npm run build` or `npm pack`).
- **Rust Crate:** Run `cargo build --release` or `cargo package`.

### 3. Commit + Push
Stage only the modified release/config files to avoid committing untracked files or secrets:
- Stage files explicitly (e.g., `git add package.json src-tauri/tauri.conf.json src-tauri/Cargo.toml src-tauri/Cargo.lock`). Do NOT run `git add -A` or `git add .` blindly.
- Check staged files with `git status --short`. If any secret file (like a `.key` or files in `tmp/`) is staged, **stop and unstage it immediately**.
- Commit the changes (e.g., `git commit -m "Release vX.Y.Z"`) and push to the remote branch (`git push origin <branch>`).
  > [!TIP]
  > You can add a Co-authored-by trailer to the commit if working as a pair programmer, e.g.:
  > `Co-Authored-By: Antigravity <noreply@google.com>`

### 4. Tag the release
Tag the git commit and push the tag:
```bash
git tag vX.Y.Z
git push origin vX.Y.Z
```

### 5. Write `latest.json` (Tauri only)
If releasing a Tauri app with auto-update, generate/update `tmp/latest.json` for the Tauri updater:
```json
{
  "version": "X.Y.Z",
  "notes": "<release notes>",
  "pub_date": "<UTC ISO-8601, e.g., 2026-07-06T17:30:00Z>",
  "platforms": {
    "windows-x86_64": {
      "signature": "<full contents of the .msi.sig file>",
      "url": "https://github.com/<owner>/<repo>/releases/download/vX.Y.Z/<msi-filename>"
    }
  }
}
```
*Note: Replace `<owner>`, `<repo>`, and `<msi-filename>` with the actual repository and built file details.*

### 6. Publish the GitHub Release
Create the release and upload the assets:
- **Tauri App:**
  ```bash
  gh release create vX.Y.Z <path-to-msi> tmp/latest.json --repo <owner>/<repo> --title "<app-name> vX.Y.Z" --notes "<notes>"
  ```
- **Other Projects:**
  ```bash
  gh release create vX.Y.Z [assets...] --repo <owner>/<repo> --title "<project-name> vX.Y.Z" --notes "<notes>"
  ```

### 7. Confirm and Report
Provide the release URL and verify that the release was successful. For Tauri apps, confirm that client auto-updates will now fetch the new version.

## Notes

- **Tauri Signature:** The `signature` in `latest.json` is the raw base64 string contained within the `.msi.sig` file, not the path/filename itself.
- **Key Safety:** The signing key (e.g. `*.key`) is a critical credential and must be listed in `.gitignore`. It should never be checked into git or uploaded to public CI services. Keep a secure backup copy.
- **Local Release:** This process is local-only so the signing key never touches CI/GitHub.
