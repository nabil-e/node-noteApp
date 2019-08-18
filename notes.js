const fs       = require('fs')
const chalk    = require('chalk')
const succes  = chalk.bgGreen
const erreur   = chalk.bgRed
// function exported
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
                title: title,
                body: body
            })
            saveNotes(notes)
            console.log(succes('New note added!'));
    }else{
        console.log(erreur('Note title taken!'));     
    }
    
}
const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)
    
    if(notes.length > noteToKeep.length){
        console.log(succes(`${title} are removed`))
        saveNotes(noteToKeep)
    }else{
        console.log(erreur(`${title} not found`))
    }
}

const listNotes = () => {
    console.log(chalk.bgBlue('Yours notes'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(`${note.title}: ${note.body}`)        
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const search = notes.find((note) => note.title === title)

    if(search){
        console.log(succes(`Your request: ${search.title} => ${search.body}`))         
    }else{
        console.log(erreur('Note not found'))        
    }
}

// utility function
const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))
const loadNotes = () => {
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

// export
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
// module.exports = {getNotes, deleteFile}