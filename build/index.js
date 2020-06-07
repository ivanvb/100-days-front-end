const fs = require('fs');

const BASE_PATH = './days/';
const directoriesMetadata = [];

(function main() {
    const daysDirectories = fs.readdirSync(BASE_PATH);
    setDirectoriesMetadata(daysDirectories);
    createDirectoriesScript();
})();

function setDirectoriesMetadata(daysDirectories) {
    for (const directory of daysDirectories) {
        const path = `${BASE_PATH}/${directory}/index.html`;
        const html = fs.readFileSync(path, 'utf8');
        const [title] = /(?<=<title>).*(?=<\/title>)/.exec(html);

        directoriesMetadata.push({
            title,
            day: directory.split('-')[1],
            path: setRelativeDirectoryToParentDirectory(path),
        });
    }
}

function setRelativeDirectoryToParentDirectory(relativeDirectory) {
    return `.${relativeDirectory}`;
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
