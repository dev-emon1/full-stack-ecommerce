const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  addProductController,
  viewProductController,
  singleProductController,
} = require("../../controllers/productController");
const {
  addCategoryController,
  viewCategoryController,
  approveCategoryController,
  deleteCategoryController,
  editCategoryController,
} = require("../../controllers/categoryController");
const {
  addSubCategoryController,
  viewSubCategoryController,
  deleteSubCategoryController,
  approveSubCategoryController,
} = require("../../controllers/subcategoryController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/createproduct", upload.single("avatar"), addProductController);
router.get("/allproduct", viewProductController);
router.get("/singleproduct/:slug", singleProductController);

router.post("/createcategory", upload.single("avatar"), addCategoryController);
router.get("/allcategory", viewCategoryController);
router.post("/approvecategory", approveCategoryController);
router.delete("/deletecategory/:id", deleteCategoryController);
router.post("/editcategory", editCategoryController);

router.post("/createsubcategory", addSubCategoryController);
router.get("/allsubcategory", viewSubCategoryController);
router.post("/approvesubcategory", approveSubCategoryController);
router.delete("/deletesubcategory/:id", deleteSubCategoryController);

module.exports = router;
