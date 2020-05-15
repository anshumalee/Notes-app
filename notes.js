const fs = require('fs')
const chalk = require('chalk')

const removeNote = (title) => {
    const notes = loadNotes()
    const NotesToKeep = notes.filter((note) => note.title !== title)
    
    if(NotesToKeep.length !== notes.length)
    {
    console.log(chalk.green('Note removed'))
    saveNotes(NotesToKeep)}
    else
    console.log(chalk.red.inverse('No note found'))
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added !'))
    }
    else{
        console.log(chalk.red.inverse('Note title taken !'))
    }
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

const saveNotes = (notes)=>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const listNotes = ()=>
{
    console.log(chalk.inverse('Your notes '))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title)=> {

    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)
    if(note){
        console.log(chalk.red.bold(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.inverse.red('Unable to find note'))
    }
} 

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}