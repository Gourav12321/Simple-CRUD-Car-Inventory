const mongoose = require('mongoose');

const Cars = new mongoose.Schema({
    name:{
        type : String,
        require : true,
        unique : true,
    },
    model:{
        type : String,
        require : true,
    },
    pdate:{
        type : String,
        require : true,
    },
    prize:{
        type : Number,
        require : true,
    },
    car_company:{
        type : String,
        require : true,
    },
});

module.exports = mongoose.model("cars" , Cars);