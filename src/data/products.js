import cheese from "../cheese.png";
import orange from "../orange.png";
import strawberries from "../strawberries.png";
import drink from "../drink.png";
import peach from "../peach.png";

const products = [
    {
        id: 1,
        name: "Yellow Products Whole Fresh, Bio Bag",
        price: 6.5,
        oldPrice: 8.4,
        image: cheese,
        category: "Fruits & Vegetables",
        color: "Yellow",
        brand: "Fresh",
        inStock: true,
    },
    {
        id: 2,
        name: "Large Bagged Oranges",
        price: 3.1,
        oldPrice: 4.0,
        image: orange,
        category: "Fruits & Vegetables",
        color: "Orange",
        brand: "Fresh",
        inStock: true,
    },
    {
        id: 3,
        name: "Strawberries - 1lb",
        price: 1.5,
        oldPrice: 2.5,
        image: strawberries,
        category: "Fruits & Vegetables",
        color: "Red",
        brand: "Fresh",
        inStock: true,
    },
    {
        id: 4,
        name: "Simple Kitchen FD Sliced Strawberries - 1.05B",
        price: 8.5,
        oldPrice: 45.49,
        image: drink,
        category: "Beverages",
        color: "Red",
        brand: "Simple Kitchen",
        inStock: true,
    },
    {
        id: 5,
        name: "Peach - each",
        price: 0.76,
        oldPrice: 1.15,
        image: peach,
        category: "Fruits & Vegetables",
        color: "Orange",
        brand: "Fresh",
        inStock: true,
    },
];

export default products;
