const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({

    title:{
        type:String,
        require:true,
        trim: true
    },
    foodID:[{ 
        type: mongoose.Types.ObjectId, ref: 'Food'
    }]
})

module.exports = categorySchema;