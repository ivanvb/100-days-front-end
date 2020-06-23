const fs = require('fs');
const prettier = require('prettier');

const BASE_PATH = './public/days/';
const directoriesMetadata = [];

(function main() {
    const daysDirectories = fs.readdirSync(BASE_PATH);
    setDirectoriesMetadata(daysDirectories);
    createDirectoriesScript();
})();

function setDirectoriesMetadata(daysDirectories) {
    for (const directory of daysDirectories) {
        const path = `${BASE_PATH}${directory}/index.html`;
        const html = fs.readFileSync(path, 'utf8');
        const [title] = /(?<=<title>).*(?=<\/title>)/.exec(html);

        directoriesMetadata.push({
            title,
            day: directory.split('-')[1],
            path: path.replace('public/', ''),
        });
    }
}

function createDirectoriesScript() {
    const projectsHTML = directoriesMetadata.map((day) => {
        return `
        '<div class="project"><h2 class="title">${day.title}</h2><h3 class="day">Day ${day.day}</h3><a class="project-link" href="${day.path}">View Project</a></div>'
        `;
    });
    const script = `
        const container = document.getElementById('container');
        const links = [${projectsHTML}]
        container.innerHTML = links.join("\\n")
    `;

    let formatted = prettier.format(script, { parser: 'babel' });
    fs.writeFileSync('./public/projects.js', formatted, 'utf8');
}
