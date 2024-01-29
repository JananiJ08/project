const express = require("express");
const PORT = 4002;
const app = express();
const bodyParser = require('body-parser');
const http = require('http');

app.get("/", (req, res) => {
    res.json({ message: "Crud Application is running...." });

    res.end();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


require("./routes/auth.routes.js")(app);
require("./routes/cat.routes.js")(app);
require("./routes/sub.cat.routes.js")(app);
require("./routes/product.routes.js")(app);




const server = http.createServer(app);
server.listen(PORT, function() {
    console.log('Node app is running on port 4002');
});