const express = require('express');
const app = express();
const server = app.listen(300, encender);
function encender() {
  console.log('servidor encnedido');
}

app.use(express.static('public'));
