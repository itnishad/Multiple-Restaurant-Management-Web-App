const mongoose = require('mongoose')
const foodSchema = mongoose.Schema({

    title:{
        type:String,
        require:true,
        trim: true
    },
    text:{
        type:String,
        require:true,
        trim: true
    },
    price:{
        type:Number,
        require:true,
    }
})

module.exports = foodSchema;