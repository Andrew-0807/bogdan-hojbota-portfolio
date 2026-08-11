const fs = require('fs');
const path = require('path');

const publicLucrari = path.join(__dirname, '../public/lucrari');
const jsonOutputPath = path.join(__dirname, '../lib/data/lucrari-images.json');

// Ensure public/lucrari exists
if (!fs.existsSync(publicLucrari)) {
  fs.mkdirSync(publicLucrari, { recursive: true });
}

// Dynamically scan public/lucrari to build folder -> images map
const folderMap = {};
if (fs.existsSync(publicLucrari)) {
  const folders = fs.readdirSync(publicLucrari).filter(f => {
    return fs.statSync(path.join(publicLucrari, f)).isDirectory();
  });

  folders.forEach(folder => {
    const folderPath = path.join(publicLucrari, folder);
    const files = fs.readdirSync(folderPath);
    const validImages = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .map(f => `/lucrari/${folder}/${f}`);

    if (validImages.length > 0) {
      folderMap[folder] = validImages;
    }
  });
}

// Write the dynamic map to lib/data/lucrari-images.json
fs.mkdirSync(path.dirname(jsonOutputPath), { recursive: true });
fs.writeFileSync(jsonOutputPath, JSON.stringify(folderMap, null, 2));

console.log(`[sync-lucrari] Dynamically scanned ${Object.keys(folderMap).length} folders. Updated lib/data/lucrari-images.json.`);
