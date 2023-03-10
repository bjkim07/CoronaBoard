const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message:"Hello CoronaBoard!"});
});

const port = process.env.Port || 8080;
app.listen(port, () => {
    console.log(`Server is Running on port ${port}.`);
});
