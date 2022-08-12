import dotenv from "dotenv";
dotenv.config();

let ProductDao;
let CartDao;

switch (process.env.DATABASE) {
  case "firebase":
    const { default: ProductDaoFirebase } = await import(
      "./products/productDaoFirebase.js"
    );
    const { default: CartDaoFirebase } = await import(
      "./cart/cartDaoFirebase.js"
    );

    ProductDao = ProductDaoFirebase;
    CartDao = CartDaoFirebase;

    break;
  case "mongo":
    const { default: ProductDaoMongo } = await import(
      "./products/productDaoMongo.js"
    );
    
    const { default: CartDaoMongo } = await import(
      "./cart/cartDaoMongo.js"
      );
      
    ProductDao = ProductDaoMongo;
    CartDao = CartDaoMongo;

    break;
}

export { ProductDao, CartDao };
