const fs = require('fs');
const path = require('path');

let builtHtml = fs.readFileSync(path.resolve(__dirname, '../dist/index.build.html'), 'utf8');
builtHtml = builtHtml.replace(/\.\.\/\.\./g, '.');
fs.writeFileSync(path.resolve(__dirname, '../dist/index.html'), builtHtml, 'utf8');
fs.unlinkSync(path.resolve(__dirname, '../dist/index.build.html'));
