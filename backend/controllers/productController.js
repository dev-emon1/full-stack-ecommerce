const Product = require("../models/productModel");

exports.addProductController = async (req, res) => {
  const { name, slug, description, categoryId, price, discount, productType } =
    req.body;

  try {
    let arr = [];
    req.files.map((item) => {
      arr.push(`/uploads/${item.filename}`);
    });

    const product = new Product({
      name: name,
      slug: slug,
      description: description,
      image: arr,
      categoryId: categoryId,
      price: price,
      discount: discount,
      productType: productType,
    });
    product.save();

    res.send({ success: "Product is created" });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

exports.viewProductController = async (req, res) => {
  const productData = await Product.find();
  res.send(productData);
};

exports.singleProductController = async (req, res) => {
  try {
    const { slug } = req.params;

    let data = await Product.find({ slug: slug });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
