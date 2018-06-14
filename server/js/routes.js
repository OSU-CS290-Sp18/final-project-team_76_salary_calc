const bodyParser = require('body-parser');
const server = require('../server.js');
const eventManagement = require('../js/salaryManagement.js');

routes = function () {
    var externalRoutes = require('express').Router();

    externalRoutes.use(bodyParser.urlencoded({
        extended: true
    }));

    externalRoutes.post('/search', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        var searchText = req.body.searchText;
        eventManagement.searchEvent(searchText)
            .then(
                (data) => {
                    res.status(200).send(data);
                }
            )
            .catch(
                (err) => {
                    res.status(500).send(err);
                }
            );
    });

    externalRoutes.route('/salary')
        .post((req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            var data = req.body;
            eventManagement.addEvent(data)
                .then(
                    () => {
                        res.status(200).send({status:200, data:"Document added successfully!"});
                    })
                .catch(
                    (err) => {
                        res.status(500).send(err);
                    }
                );
        })
        .put((req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            var data = req.body;
            eventManagement.updateEvent(data)
                .then(
                    () => {
                        res.status(200).send({status:200, data:"Document updated successfully!"});
                    })
                .catch(
                    (err) => {
                        res.status(500).send(err);
                    }
                );
        })
        .delete((req, res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            var id = req.body.id;
            eventManagement.deleteEvent(id)
                .then(
                    () => {
                        res.status(200).send({status:200, data:"Document deleted successfully!"});
                    })
                .catch(
                    (err) => {
                        res.status(500).send(err);
                    }
                );
        });

    return externalRoutes;
};

module.exports = routes();
