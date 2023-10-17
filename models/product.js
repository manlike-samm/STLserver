import mongoose from "mongoose";

const PostProductSchema = new mongoose.Schema({
  text: String,
  productImages: [String],
});

let PostProduct = mongoose.model("Product", PostProductSchema);

export default PostProduct;
