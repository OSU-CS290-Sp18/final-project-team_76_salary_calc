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
            Name: String,
            Position: String,
            MonthlySalary: Number,
            HourlySalary: Number
        });
        var connection = mongoose.connection;
        EventModel = connection.model('salary', eventSchema);
    },
    getAllEvents: () => {
        return EventModel.find({}).exec();
    },
    addEvent: (name, position, monthlySalary, hourlySalary) => {
        var newEvent = new EventModel({
            Name: name,
            Position: position,
            MonthlySalary: monthlySalary,
            HourlySalary: hourlySalary
        });
        return newEvent.save();

    },
    getEvent: (id) => {
        return EventModel.findById(id).exec();
    },
    updateEvent: (id, name, position, monthlySalary, hourlySalary) => {
        var updatedEvent = {
            Name: name,
            Position: position,
            MonthlySalary: monthlySalary,
            HourlySalary: hourlySalary
        };
        return EventModel.findByIdAndUpdate(id, updatedEvent).exec();
    },
    deleteEvent: (id) => {
        return EventModel.findByIdAndDelete(id).exec();
    },
    searchEvent: (searchText)=> {
        return EventModel.find({Name: new RegExp(searchText,'i')}).exec();
    }
};

module.exports = database;