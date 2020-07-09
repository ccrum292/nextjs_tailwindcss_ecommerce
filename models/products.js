const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please Provide a Product Name",
    minlength: 1,
    maxlength: 100
  },
  description: {
    type: String,
    trim: true,
    required: "Please Provide a Product Description",
    minlength: 1,
    maxlength: 500
  },
  listPrice: {
    type: Number,
    required: "Please Enter your Listing Price in Cents",
    minlength:1,
    maxlength:12
  },
  netPrice: {
    type: Number,
    required: "Please Enter your Listing Price in Cents",
    minlength:1,
    maxlength:12
  },
  rating:{
    type: Number,
    default: null
  },
  numberOfRatings:{
    type: Number,
    default: 0
  },
  img: {
    src: {
      type: String,
      default: "coolcat.jpg" 
    },
    alt: {
      type: String,
      default: "Hello World, I am one Cool Cat!"
    }
  }

})

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;