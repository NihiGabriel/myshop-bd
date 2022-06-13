const mongoose = require('mongoose');


const connectdb = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    }).then(con => {
        console.log(`mongoDB Database connected with HOST: ${con.connection.host}`)
    })

}

module.exports = connectdb;