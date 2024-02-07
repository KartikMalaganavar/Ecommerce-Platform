const Category = require("../models/category.model");
const Product = require("../models/product.model");

async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
    await topLevel.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
    await secondLevel.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });
    await thirdLevel.save();
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountedPercent: reqData.discountedPercent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.size,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });
  const createdProd = await product.save();

  return createdProd;
}

async function deleteProduct(productId) {
  const product = await findProductById(productId);
  const delItem = await Product.findByIdAndDelete(productId);
  return "Product deleted successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(id) {
  const product = await Product.findById(id).populate("category").exec();
  if (!product) {
    throw new Error("No product with this id found", id);
  }
  return product;
}

// async function getAllProducts(reqQuery) {
//   let {
//     category,
//     color,
//     sizes,
//     minPrice,
//     maxPrice,
//     minDiscount,
//     sort,
//     stock,
//     pageNumber,
//     pageSize,
//   } = reqQuery;

//   console.log("getAllProducts :", reqQuery)

//   pageSize = pageSize || 10;
//   let query = Product.find().populate("category");

//   // if (category) {
//   //   const existCategory = await Category.findOne({ name: category });
//   //   if (existCategory) {
//   //     query = query.where("category").equals(existCategory._id);
//   //   } else {
//   //     return { content: [], currentPage: 1, totalPage: 0 };
//   //   }
//   // }

//   if (color) {
//     const colorSet = new Set(
//       color.split(",").map((color) => color.trim().toLowerCase())
//     );
//     const colorRegex =
//       colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

//     query = query.where("color").regex(colorRegex);
//   }
//   if (sizes) {
//     const sizeSet = new Set(sizes);
//     query.query.where("sizes.name").in([...sizeSet]);
//   }

//   if (minPrice && maxPrice) {
//     query = await query.where("discountedPrice").gte(minPrice).lte(maxPrice);
//   }

//   if (minDiscount) {
//     query = query.where("discontedPercent").gt(minDiscount);
//   }

//   if (stock) {
//     if (stock == "in_stock") {
//       query = query.where("quantity").gt(0);
//     }
//     if (stock == "out_of_stock") {
//       query = query.where("quantity").gt(1);
//     }
//   }

//   if (sort) {
//     const sortDirection = sort === "price_high" ? -1 : 1;
//     query = query.sort({ discountedPrice: sortDirection });
//   }

//   const totalProducts = await Product.countDocuments(query);

//   // const skip = (pageNumber - 1) * pageSize;

//   // query = query.skip(skip).limit(pageSize);

//   const products = await query.exec();
//   const totalPages = Math.ceil(totalProducts / pageSize);

//   return { content: products, currentPage: pageNumber, totalPages };
// }

async function getAllProducts(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;


  pageSize = pageSize || 10;

  // Ensure pageNumber is a positive integer
  pageNumber = Math.max(pageNumber, 1);

  let query = Product.find().populate("category");

  // if (category) {
  //   const existCategory = await Category.findOne({ name: category });
  //   if (existCategory) {
  //     query = query.where("category").equals(existCategory._id);
  //   } else {
  //     return { content: [], currentPage: 1, totalPage: 0 };
  //   }
  // }

  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );
    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

    query = query.where("color").regex(colorRegex);
  }

  if (sizes) {
    const sizeSet = new Set(sizes);
    query = query.where("size.name").in([...sizeSet]);
  }

  if (minPrice && maxPrice) {
    query = await query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }

  if (minDiscount) {
    query = query.where("discountedPrice").gt(minDiscount);
  }

  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gt(0);
    }
    if (stock == "out_of_stock") {
      query = query.where("quantity").eq(0);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }
  const totalProducts = await Product.countDocuments(query);

  const skip = Math.max(pageNumber - 1, 0) * pageSize;

  query = query.skip(skip).limit(pageSize);

  const products = await query.exec();

  const totalPages = Math.ceil(totalProducts / pageSize);

  return { content: products, currentPage: pageNumber, totalPages };
}

async function createMultipleProduct(products) {
  products.forEach(async (product) => {
    await createProduct(product);
  });
}
module.exports = {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
  findProductById,
  createMultipleProduct,
};
