const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({

    title       : { type: String, required: true },
    description : { type: String, required: true },
    date        : { type: Date, default: Date.now },
    user        : { type: String, required: false }
    
}, { timestamps: true } );

module.exports = mongoose.model("Note", NoteSchema);
