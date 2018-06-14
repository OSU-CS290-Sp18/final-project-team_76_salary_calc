var server = require('./server.js');
server.startServer();
server.connectToDB()
    .then(dbConnectionSuccess)
    .catch(errorHandler);

function dbConnectionSuccess(message) {
    console.log(message);
    const eventManagement = require('./js/salaryManagement.js');

}

function errorHandler(err) {
    console.log(err);
}