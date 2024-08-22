const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category name is required!"],
      trim: true,
      maxlength: [15, "The length of category can be maximum 15 characters"],
    },
  },
  { timestamps: true }
);

const Category = model("Category", categorySchema);

module.exports = Category;