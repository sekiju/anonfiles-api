const { uploadAnonFile } = require("../index")

async function main() {
    return uploadAnonFile(`./tests/TEST.txt`)
}

main().then(res => console.log(res))