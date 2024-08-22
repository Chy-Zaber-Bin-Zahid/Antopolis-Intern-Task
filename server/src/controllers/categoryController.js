const Category = require("../models/categoryModel");
const { successResponse } = require("./responseController");

// Crete new category
const addCategory = async (req, res, next) => {
  try {
    console.log("object");
    // const createUser = await Category.create(req.body);

    // return successResponse(res, {
    //   statusCode: 200,
    //   message: "Category created successfully",
    //   payload: {
    //     category: createUser,
    //   },
    // });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addCategory
};
