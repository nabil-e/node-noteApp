const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'The body of note',
            type: 'String', // select the type
            demandOption: true, // rend option obligatoire
        }
    },
    handler: function (argv) {
        console.log( `Title: ${argv.title}\nBody: ${argv.body}`)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    handler: function () {
        console.log('Note removing');
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note!',
    handler: function () {
        console.log('Reading a note');
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list all note!',
    handler: function () {
        console.log('Listing  notes');
    }
})

yargs.parse()
// console.log(yargs.argv);
