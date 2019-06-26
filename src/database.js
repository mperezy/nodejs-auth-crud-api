const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.set('useFindAndModify', false);
mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('Database is ON!! ' + db))
    .catch(err => console.log('Error in mongo ' + err));