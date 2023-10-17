import mongoose from "mongoose";

// Define a schema for the Hotspot
const hotspotSchema = new mongoose.Schema({
  number: Number,
  product: {
    productId: String,
    productName: String,
    productImage: String,
  },
  position: {
    top: Number,
    left: Number,
  },
});

// Define a schema for the MainItem
const lookbookSchema = new mongoose.Schema({
  mainItem: String,
  mainItemImage: String,
  hotspots: [hotspotSchema], // Embed the Hotspot schema
});

// Create a model based on the MainItem schema
const LookBook = mongoose.model("LookBook", lookbookSchema);

// Export the LookBook model
export default LookBook;
