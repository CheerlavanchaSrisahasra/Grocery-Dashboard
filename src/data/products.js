import cheese from "../cheese.png";
import orange from "../orange.png";
import strawberries from "../strawberries.png";
import drink from "../drink.png";
import peach from "../peach.png";
import babyFood from "../baby banana.png";
import chicken from "../chicken.png";
import cookies from "../cookies.png";
import bread from "../bread.png";
import milk from "../milk2.png";
import frozenPizza from "../Pizza.png";
import rice from "../rice.png";
import vitamins from "../vitamins.png";
import detergent from "../detergent.png";
import sparklingMineralWater from "../Sparkling Mineral Water.png";

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


    {
        id: 6,
        name: "Organic Baby Food - Apple & Banana",
        price: 2.99,
        oldPrice: 3.50,
        image: babyFood,
        category: "Baby & Pregnancy",
        color: "Yellow",
        brand: "HappyBaby",
        inStock: true,
    },

    {
        id: 7,
        name: "Fresh Chicken Breast - 1lb",
        price: 5.99,
        oldPrice: 6.50,
        image: chicken,
        category: "Meats & Seafood",
        color: "White",
        brand: "FarmFresh",
        inStock: true,
    },

    {
        id: 8,
        name: "Chocolate Chip Cookies - 12oz",
        price: 3.49,
        oldPrice: 4.00,
        image: cookies,
        category: "Biscuits & Snacks",
        color: "Brown",
        brand: "CookieTime",
        inStock: true,
    },

    {
        id: 9,
        name: "Whole Grain Bread - 20oz",
        price: 2.99,
        oldPrice: 3.25,
        image: bread,
        category: "Breads & Bakery",
        color: "Brown",
        brand: "BakeryFresh",
        inStock: true,
    },

    {
        id: 10,
        name: "Organic Whole Milk - 1 Gallon",
        price: 4.49,
        oldPrice: 4.99,
        image: milk,
        category: "Breakfast & Dairy",
        color: "White",
        brand: "Organic Valley",
        inStock: true,
    },

    {
        id: 11,
        name: "Pepperoni Pizza - 14oz",
        price: 5.99,
        oldPrice: 7.49,
        image: frozenPizza,
        category: "Frozen Foods",
        color: "Red",
        brand: "FrozenDelight",
        inStock: true,
    },

    {
        id: 12,
        name: "Jasmine Rice - 5lb",
        price: 6.99,
        oldPrice: 7.50,
        image: rice,
        category: "Grocery & Staples",
        color: "White",
        brand: "GoldenHarvest",
        inStock: true,
    },

    {
        id: 13,
        name: "Multivitamins - 60 Tablets",
        price: 12.99,
        oldPrice: 15.99,
        image: vitamins,
        category: "Healthcare",
        color: "Blue",
        brand: "HealthPlus",
        inStock: true,
    },

    {
        id: 14,
        name: "Laundry Detergent - 50oz",
        price: 8.99,
        oldPrice: 10.49,
        image: detergent,
        category: "Household Needs",
        color: "Blue",
        brand: "CleanHome",
        inStock: true,
    },

    {
        id: 15,
        name: "Organic Baby Spinach - 5oz",
        price: 3.49,
        oldPrice: 3.99,
        image: strawberries,
        category: "Fruits & Vegetables",
        color: "Green",
        brand: "FreshHarvest",
        inStock: true,
    },

    {
        id: 16,
        name: "Sparkling Mineral Water - 12pk",
        price: 4.99,
        oldPrice: 5.50,
        image: sparklingMineralWater,
        category: "Beverages",
        color: "Clear",
        brand: "AquaPure",
        inStock: true,
    }
];

export default products;