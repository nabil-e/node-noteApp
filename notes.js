const fs    = require('fs')
const chalk = require('chalk')

const getNotes = ()=>{
    return 'Your notes....'
}

const addNote = function(title, body){
    const notes = loadNote()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
                title: title,
                body: body
            })
            saveNotes(notes)
            console.log('New note added!');
    }else{
        console.log('Note title taken!');     
    }
    
}
const removeNote = function(title){
    const notes = loadNote()
    const noteToKeep = notes.filter(function(note){
        return note.title !== title
    })
    
    if(notes.length > noteToKeep.length){
        console.log(chalk.bgGreen(`${title} are removed`))
        saveNotes(noteToKeep)
    }else{
        console.log(chalk.bgRed(`${title} not found`))
    }
}

const saveNotes = function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNote = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (error) {
        return []
    }
    
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
module.exports = {
    deleteFile: deleteFile,
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
// module.exports = {getNotes, deleteFile}