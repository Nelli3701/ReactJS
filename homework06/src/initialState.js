import Product from "./entity/product";

export const initialState = {
    productList: [
        new Product("Product1", "Description1", 1000),
        new Product("Product2", "Description2", 2000),
        new Product("Product3", "Description3", 3000),
        new Product("Product4", "Description4", 4000),
    ]
};