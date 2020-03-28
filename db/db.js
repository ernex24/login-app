var mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://ernex24:Larsulrich3350@cluster0-xl5jg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('connected to db')
});