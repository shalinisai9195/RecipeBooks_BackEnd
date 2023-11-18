const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
     
   name:{
    type:String,
    require:true
   },
   author:{
    type:String,
    require:true
   },
   description:{
    type:String,
    require:true
   },
   price:{
    type:Number,
    require:true
   },
   image:{
     type: String,
     require:true
   },
   available:{
     type:Boolean,
   
   }

});

module.exports = mongoose.model('books',bookSchema);