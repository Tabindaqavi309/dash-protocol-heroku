const express = require('express')
const app = express()
const port = 80
const fs = require('fs');
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile('public/dash.html', {
  root: __dirname
}));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))