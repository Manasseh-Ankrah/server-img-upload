const express = require("express");
const router = express.Router();
const multer = require("multer");

// Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Filter Configuration
const filterFile = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("The file type is not accepted."), false);
  }
};

// to accept specific file sizes add limits prop to multer
// limits:{fileSize: 1024 * 1024 * 5}
// which only accepts 5MB of image size
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: filterFile,
});

const {
  getProducts,
  addProducts,
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/add", upload.single("productImage"), addProducts);

module.exports = router;
