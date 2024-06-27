class Product {
    static count = 0;

    constructor(name, description, price, available = true) {
        this.id = this.getId();
        this.name = name;
        this.description = description;
        this.price = price;
        this.available = available;
    }

    getId() {
        return ++Product.count;
    }
}

export default Product;