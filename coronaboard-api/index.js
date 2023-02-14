const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./database');

async function launchServer() {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.json({message:"hello coronaboard!"});
    });

    try {
        await  sequelize.sync();
        console.log('Database is ready!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error);
        process.exit(1);
    }

    const port = process.env.port || 8080;
    app.listen(port, () => {
        console.log(`server is running on port ${port}.`);
    });
}

launchServer();
