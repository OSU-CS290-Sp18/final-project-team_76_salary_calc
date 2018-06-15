const mongoose = require('mongoose');
const schema = mongoose.Schema;
var eventSchema = {};
var EventModel;

var database = {
    connect: () => {
        return mongoose.connect('mongodb://localhost:27017/', { dbName: 'salarycalc' });
    },
    initialize: () => {
        eventSchema = schema({
            name: String,
            position: String,
            yearincome: Number
        });
        var connection = mongoose.connection;
        EventModel = connection.model('paydata', eventSchema);
    },
    getAllEvents: () => {
        return EventModel.find({}).exec();
    },
    addEvent: (name, position, yearincome) => {
        var newEvent = new EventModel({
            name: name,
            position: position,
            yearincome: yearincome
        });
        return newEvent.save();

    }
};

module.exports = database;