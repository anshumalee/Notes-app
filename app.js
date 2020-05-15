const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note',
            bodyOption: true,
            type: 'string'
        }
    },
    handler: (argv)=> notes.addNote(argv.title,argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=> notes.removeNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: ()=> notes.listNotes()
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title:
        {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
})

yargs.parse()
console.log(chalk.green.bold('Success !'))


