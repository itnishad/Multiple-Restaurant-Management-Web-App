const mongoose = require('mongoose')
const restauantSchema = mongoose.Schema({

    title:{
        type:String,
        require:true,
        trim: true
    },
    location:{
        type:String,
        require:true,
        trim:true
    },
    image:{
        type:String,
        require:true,
        trim:true
    },
    categoryID:[{ 
        type: mongoose.Types.ObjectId, ref: 'Category'
    }]
})

module.exports = restauantSchema;