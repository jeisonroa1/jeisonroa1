const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const path = require('path');
const Product = require("./Product");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('view engine', 'ejs');
//app.set('css', path.join(__dirname, "css"));
app.set('views', path.join(__dirname, "view"));

//create list of products
let productList = [];

//create product objects for the list "productsList"
let tomato = new Product(1,"Tomato", 200, "Magic tomato");
let onion = new Product(2,"Onion", 3, "Basic onion");
let chair = new Product(3,"Chair", 20, "A magic throne");
let goat = new Product(4, "Goat", 0, "It's a free, an annoying goat");

    productList.push(tomato);
    productList.push(onion);
    productList.push(chair);
    productList.push(goat);

//create product objects for shoppingList

//let shoppingList = [];

app.get('/', (req, res) => {

    res.render("products", {
        proList: productList,
    });
});

let cartList = [];

const boughtGoat={
    product:goat,
    num:2
}

const boughtOnion={
    product:onion,
    num:10
}

const boughtChair={
    product:chair,
    num:5
}

cartList.push(boughtChair);
cartList.push(boughtOnion);
cartList.push(boughtGoat);

app.get('/shoppingCart', (req, res) => {
    res.render("ShoppingCart", {
        shopList: cartList,
    });
});



app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})

