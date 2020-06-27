const fs = require('fs');
const path = require('path');

const BASE_PATH = './public/days/';
const directoriesMetadata = [];

(function main() {
    const daysDirectories = fs.readdirSync(BASE_PATH);
    setDirectoriesMetadata(daysDirectories);
    createDirectoriesScript();
})();

function setDirectoriesMetadata(daysDirectories) {
    for (const directory of daysDirectories) {
        const indexPath = `${BASE_PATH}${directory}/index.html`;
        const html = fs.readFileSync(indexPath, 'utf8');
        const [title] = /(?<=<title>).*(?=<\/title>)/.exec(html);

        directoriesMetadata.push({
            title,
            day: directory.split('-')[1],
            path: indexPath.replace('public/', ''),
        });
    }
}

function createDirectoriesScript() {
    const projectsHTML = directoriesMetadata.map((day) => {
        return `<div class="project"><h2 class="title">${day.title}</h2><h3 class="day">Day ${day.day}</h3><a class="project-link" href="${day.path}">View Project</a></div>`;
    });
    let htmlIndex = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
    htmlIndex = htmlIndex.replace('<div id="container">', (match) => {
        return `${match}\n${projectsHTML.join('')}\n`;
    });

    fs.writeFileSync(path.resolve(__dirname, '../src/index.build.html'), htmlIndex, 'utf8');
}
