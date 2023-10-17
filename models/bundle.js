import mongoose from "mongoose";

const postBundleSchema = new mongoose.Schema({
  mainItem: {
    text: String,
    productImages: [String],
  },

  relatedItems: [
    {
      text: String,
      image: String,
    },
  ],
});

let PostBundle = mongoose.model("Bundle", postBundleSchema);

export default PostBundle;
