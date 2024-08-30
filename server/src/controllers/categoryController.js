const Categories = require("../models/categoryModel");
const { successResponse } = require("./responseController");

// Crete new category
const addCategory = async (req, res, next) => {
  try {
    console.log(req.body);
    const createCategory = await Categories.create(req.body);

    return successResponse(res, {
      statusCode: 200,
      message: "Category created successfully",
      payload: {
        category: createCategory,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addCategory
};
