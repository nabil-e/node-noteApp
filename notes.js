const fs = require('fs')
const getNotes = ()=>{
    return 'Your notes....'
}

const deleteFile = (file)=>{
    // create file
    fs.writeFileSync(file, 'je suis un fichier cree avec node \net je vais me suprimer dans 10sec')
    setTimeout(()=>{
        // delete file 
        fs.unlinkSync(file, (err) => {
            if (err) throw err;
            console.log('path/file.txt was deleted');
            });
    }, 10000)
    
}
module.exports.deleteFile = deleteFile
module.exports.getNotes = getNotes
// module.exports = {getNotes, deleteFile}