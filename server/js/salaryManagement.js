const server = require('../server.js');
const db = server.getDB();

var eventManagement = {
    getEvents: () => {
        return new Promise((resolve, reject) => {
            db.getAllEvents()
                .then(
                    (data) => {
                        resolve(data);
                    }
                )
                .catch(
                    (err) => {
                        reject(err);
                    }
                );
        });
    },
    getEvent: (id) => {
        return new Promise((resolve, reject) => {
            db.getEvent(id)
                .then(
                    (data) => {
                        resolve(data);
                    }
                )
                .catch(
                    (err) => {
                        reject(err);
                    }
                );
        });

    },
    addEvent: (newEvent) => {
        return new Promise((resolve, reject) => {
            db.addEvent(newEvent.name, newEvent.position,
                newEvent.monthlySalary, newEvent.hourlySalary)
                .then(
                    (data) => {
                        resolve(data);
                    }
                )
                .catch(
                    (err) => {
                        reject(err);
                    }
                );
        });
    },
    updateEvent: (updatedEvent) => {
        return new Promise((resolve, reject) => {
            db.updateEvent(updatedEvent.id, updatedEvent.name,
                	updatedEvent.position, updatedEvent.monthlySalary, 
                    updatedEvent.hourlySalary)
                .then(
                    (data) => {
                        resolve(data);
                    }
                )
                .catch(
                    (err) => {
                        reject(err);
                    }
                );
        });
    },
    deleteEvent: (id) => {
        return new Promise((resolve, reject) => {
            db.deleteEvent(id)
                .then(
                    () => {
                        resolve();
                    }
                )
                .catch(
                    (err) => {
                        reject(err);
                    }
                );
        })
    },
    searchEvent: (searchText) => {
        return new Promise((resolve, reject) => {
            db.searchEvent(searchText)
                .then(
                    (data) => {
                        resolve(data);
                    }
                )
                .catch(
                    (err) => {
                        reject(err);
                    }
                )
        })
    	}
};


module.exports = eventManagement;