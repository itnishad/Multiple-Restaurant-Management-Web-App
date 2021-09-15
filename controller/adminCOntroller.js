//Schema path
const mongoose = require('mongoose')
const restaurantSchema = require('../models/restaurantSchema')
const categorySchema = require('../models/categorySchema')
const foodSchema = require('../models/foodSchema')
//Create Model
const Rastaurant = mongoose.model("Restaurant", restaurantSchema)
const Category = mongoose.model("Category", categorySchema)
const Food = mongoose.model("Food", foodSchema)


const addRestaurant = async (req, res, next)=>{
    

    const rest = new Rastaurant(req.body);

    try{
        await rest.save()
        res.status(200).json({
            success: "Data Successfully Inserted"
        })
    }catch(err){
        res.status(500).json({
            error: "There was a server side error"
        })
    }
}

const addCategory = async (req, res, next)=>{

    const cat = new Category(req.body);
    //req.params.id
    try{
       const dat =  await cat.save()
       
       await Rastaurant.updateOne({_id:req.params.id}, {
           $push:{
            categoryID: cat._id
           }
       })

        res.json({
            message:"Category inserted sussessfully"
        })
    }catch(err){
        console.log(err)
        res.json({
            message:"There was a server side error",
            err: err
        })
    }
}

const addFood= async (req, res, next)=>{

    const food = new Food(req.body);

    try{
        const data = await food.save();
        await Category.updateOne({_id:req.params.id}, {
            $push:{
             foodID: data._id
            }
        })
    
        res.json({
            message:"Category inserted sussessfully"
        })

    }catch(err){
        console.log(err);
        res.json({
            message:"There was a server side error",
            err: err
        })
    }

}

module.exports = {
    addRestaurant,
    addCategory,
    addFood
}