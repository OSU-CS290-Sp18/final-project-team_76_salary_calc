const express = require('express');
const app = express();
const port = 3000;
const httpServer = require('http').Server(app);
const db = require('./js/datastorage.js');

var server = {

    startServer: () => {
        const externalRoutes = require('./js/routes.js');
        app.use('/', externalRoutes);
        httpServer.listen(port, () => {
            console.log('Server started on port ' + port);
        });
    },
    connectToDB: () => {
        return new Promise((resolve, reject) => {
            db.connect()
                .then(
                    () => {
                        db.initialize();
                        resolve("Connected to MongoDB");
                    })
                .catch(
                    (reason) => {
                        reject(reason);
                    }
                );
        });
    },
    getDB: () => {
        return db;
    }
}
module.exports = server;
