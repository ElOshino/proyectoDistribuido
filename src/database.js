const mongoose = require('mongoose');

const {BIBLIOTECA_UC_MONGODB_HOST, BIBLIOTECA_UC_MONGODB_DATABASE } = process.env;
//const MONGODB_URI = `mongodb://${BIBLIOTECA_UC_MONGODB_HOST}/${BIBLIOTECA_UC_MONGODB_DATABASE}`
const MONGODB_URI = `mongodb+srv://Admin:TXIFNvpUFTg8s9F5@cluster0.u2yo7.mongodb.net/biblioteca?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(db => console.log('Database is conected'))
.catch(err =>  console.error(`Error connecting to the database. \n${err}`));




