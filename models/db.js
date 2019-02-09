const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB Connection Successful.');
    }
    else {
        console.log('MongoDB Connection Successful.');
    }
});

require('./employee.model');
