// Store Managment

class Product {
  #name;
  #price;
  #quantity;
  constructor(name, price, quantity) {
    this.#name = name;
    this.#price = price;
    this.#quantity = quantity;
  }
  get name() {
    return this.#name || "Unnamed Product";
  }
  get price() {
    return this.#price;
  }
  get quantity() {
    return this.#quantity;
  }

  set price(newPrice) {
    if (typeof newPrice !== "number" || newPrice <= 0)
      throw new Error("Price must a positive number");
    this.#price = newPrice;
  }
  set quantity(newQuantity) {
    if (typeof newQuantity !== "number" || newQuantity <= 0)
      throw new Error("Quantity must a positive number");
    this.#quantity = newQuantity;
  }
}

class Store {
  #products = [];
  constructor() {}

  addProduct(product) {
    this.#products.push(product);
  }

  getInventory() {
    return this.#products;
  }

  getTotalValue() {
    return this.#products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
}

const store = new Store();

const product1 = new Product("TUF-GAMING F15 FX507ZC", 61800000, 5);
const product2 = new Product("iphone 16 promax", 149000000, 3);

store.addProduct(product1);
store.addProduct(product2);
store.getInventory().forEach((product) => console.log(product.name));
console.log(store.getTotalValue());
