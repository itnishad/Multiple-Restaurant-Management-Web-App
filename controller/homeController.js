const mongoose = require('mongoose')
//Schema Path
const restaurantSchema = require('../models/restaurantSchema')
const categorySchema = require('../models/categorySchema')
const foodSchema = require('../models/foodSchema')
//Model
const Restaurant = mongoose.model('Restaurant', restaurantSchema)
const Category = mongoose.model("Category", categorySchema)
const Food = mongoose.model("Food", foodSchema)

const homeController = async (req, res, next)=>{

    try{
        const data = await Restaurant.find()
        res.render('home',{
            data
        });

    }catch(err){
        console.log(err);
    }

    
}

const restaurantController = (req, res, next)=>{
    res.render('restaurant');
}

const resController = async (req, res, next)=>{
    
    try{
        const data = await Restaurant.findOne({_id:req.params.id}, {strictPopulate: true})
        .populate({
            path: 'categoryID',
            populate: {path: 'foodID'}
        })
        //console.log(data);
        res.render('restaurant',{
            data
        });
    }catch(err){
        console.log(err);
        res.json({
            message: "There was an serverside error"
        })
    }
}

const addFood = (req,res,next)=>{
    console.log(req.body)
}


module.exports = {
    homeController,
    restaurantController,
    resController,
    addFood
}