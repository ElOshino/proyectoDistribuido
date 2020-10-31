const mongoose = require('mongoose');

const {BIBLIOTECA_UC_MONGODB_HOST, BIBLIOTECA_UC_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${BIBLIOTECA_UC_MONGODB_HOST}/${BIBLIOTECA_UC_MONGODB_DATABASE}`
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(db => console.log('Database is conected'))
.catch(err => console.log(MONGODB_URI));