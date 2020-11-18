const notesCtrl = {};

const Note = require('../models/Note');
const { request } = require('../server');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};


notesCtrl.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    await newNote.save();
    req.flash('success_msg','Note added successfully');
    res.redirect('/notes');

};

notesCtrl.renderNotes = async (req, res) => {   
    await Note.find().then(notas => {
            const newNotaObject = {
                nota: notas.map(data => {
                    return {
                        id:data.id,
                        title: data.title,
                        description: data.description
                    }
                })
            }
    console.log(newNotaObject.nota)
    res.render('notes/all-notes', {nota: newNotaObject.nota
    })
    }).catch(error => res.status(500).send(error)); 
};

notesCtrl.renderEditForm = async (req, res) => {
    await Note.findById(req.params.id).then( nota => {
        const newNotaObject = {
                    id:nota.id,
                    title: nota.title,
                    description: nota.description
                }
       
                console.log(newNotaObject)
    res.render('notes/edit-note', {nota: newNotaObject})
}).catch(error => res.status(500).send(error))
};

notesCtrl.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg','Note updated successfully');
    res.redirect('/notes');
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Note deleted successfully');
    res.redirect('/notes')
};
module.exports = notesCtrl;