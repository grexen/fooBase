const fs = require('fs');
const glob = require('glob');
const fm = require('front-matter');
const mdFiles = glob.sync("./content/**/*.md");

let jsonData = {};

for (let mdFile of mdFiles) {
    const filePathParts = mdFile.split('/');
    const collectionName = filePathParts[2];
    const fileName = filePathParts[3].split('.')[0];

    if (!(collectionName in jsonData)) {
        jsonData[collectionName] = {}
    }
    if(!fileName in jsonData[collectionName]) {
        jsonData[collectionName][fileName] = {}
    }

	const fileContent = fs.readFileSync(mdFile).toString();
	const frontMatter = fm(fileContent);

    frontMatter.attributes.body = frontMatter.body

    jsonData[collectionName][fileName] = frontMatter.attributes;
}

module.exports = jsonData;
