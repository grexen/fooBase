const fs = require('fs');
const glob = require('glob');
const fm = require('front-matter');
const mdFiles = glob.sync("./content/**/*.md");



function getCollections() {
    let jsonData = {};

    for (let mdFile of mdFiles) {
        const filePathParts = mdFile.split('/');
        const collectionName = filePathParts[2];
        const fileName = filePathParts[3].split('.')[0];

        if (!(collectionName in jsonData)) {
            jsonData[collectionName] = []
        }
        const fileContent = fs.readFileSync(mdFile).toString();
        const frontMatter = fm(fileContent);

        let fooCollectionItem = {
            slug: fileName,
            attributes: frontMatter.attributes,
            body: frontMatter.body
        };


        jsonData[collectionName].push(fooCollectionItem);
    }
    return jsonData;
}

function getFooVideoBySlug(slug) {
    const collections = getCollections();

    for (let fooVideo of collections.fooVideos) {
        if (fooVideo.slug === slug) {
            return fooVideo
        }
    }
}

module.exports = {
    getCollections: getCollections,
    getFooVideoBySlug: getFooVideoBySlug
};
