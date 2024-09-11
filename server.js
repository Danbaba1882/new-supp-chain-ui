const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'./build', 'index.html'));
})

app.set('port', 4000);

// Listen on provided port, on all network interfaces.
app.listen(process.env.PORT || 4000, () => {
    console.log("server is listening at port 4000");
});



          