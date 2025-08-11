import mongoose from "mongoose";

const { Schema } = mongoose;
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "product description is required"],
    },

    price: {
      type: Number,
      required: [true, "product price is required"],
      min: [0, "price cannot be negative"],
    },

    category: {
      type: String,
      required: [true, "product category is required"],
      enum: ["fruit", "vegetable", "dairy", "meat", "grain"],
    },

    stock: {
      type: Number,
      required: [true, "product stock is required"],
      min: [0, "stock cannot be negative"],
    },

    image: {
      type: String,
      required: [true, "product image is required"],
      default: "https://via.placeholder.com/150",
    },
  },

  { timestamps: true }
);


const Product = mongoose.model("Product", productSchema);
export default Product;