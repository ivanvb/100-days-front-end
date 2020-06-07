const fs = require('fs');

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
    const script = `
        const container = document.getElementById('container');
        const links = [${directoriesMetadata.map((day) => {
            return '\'<a href="' + day.path + '">' + day.title + "</a>',";
        })}]
        container.innerHTML = links.join("\\n")
    `;
    fs.writeFileSync('./public/projects.js', script, 'utf8');
}
