const testFolder = './saves/';
const fs = require('fs');
const readFolders = (path)=>{
    let result = {} 
    fs.readdirSync(path).forEach(file => {
        let auxPath = `${path}/${file}`
        if(fs.lstatSync(auxPath).isDirectory()){
            result[file] = readFolders(auxPath,file);
            
        } else {
            const fileData = JSON.parse(fs.readFileSync(auxPath));
            result = {
                chapters:fileData.data.chapters0, 
                latestRespawnID:fileData.data.latestRespawnID0, 
                latestRespawnLevel:fileData.data.latestRespawnLevel0,
                save_activatables:fileData.data.save_activatables0
            }
        }
    });
   
    return result;
    
}
fs.writeFileSync('./app/components/CheckpointSelect/chapterCheckpoints.json',`${JSON.stringify(readFolders(testFolder))}`);
