const fs = require('fs');
const path = require('path');

fs.readdir('./HomeWork1/assets', (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log("\Filenames with the .txt extension:");
        files.forEach(file => {
            console.log(file + '\t+\t' + path.extname(file));
        })
    }
}) 