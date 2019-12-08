'use strict';

let express = require('express');
let bodyParser = require("body-parser");
let app = express();
app.use(express.static('public'));

const catalogData = [{
    id_product: 1,
    product_name: "Ноутбук",
    price: 45600
  }, {
    id_product: 2,
    product_name: "Мышка",
    price: 1000
  },
  {
    id_product: 3,
    product_name: "Клавиатура",
    price: 1500
  },
  {
    id_product: 4,
    product_name: "Монитор",
    price: 15000
  },
  {
    id_product: 5,
    product_name: "Принтер МФУ",
    price: 25000
  },
  {
    id_product: 5,
    product_name: "Принтер",
    price: 5000
  },
  {
    id_product: 6,
    product_name: "Системный блок",
    price: 125000
  }
]

let basket = {
  //amount: 46600,
  //countGoods: 2,
  contents: [{
      id_product: 1,
      product_name: "Ноутбук",
      price: 45600,
      quantity: 1
    },
    {
      id_product: 2,
      product_name: "Мышка",
      price: 1000,
      quantity: 1
    }
  ]
}

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  //app.set('view engine', 'pug');
  //
let server = app.listen(80, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Application are listening at http://%s:%s", host, port);
})

app.get('/api/catalogData', function(req, res) {
  res.send(catalogData);
});

app.get('/api/getBasket', function(req, res) {
  res.send(basket);
});

app.post('/api/updateBasket', function(req, res) {
  //console.log(req.body);
  basket.contents = req.body;
  console.log("____Состояние корзины____");
  console.log(basket.contents);
  console.log("_____________");
});