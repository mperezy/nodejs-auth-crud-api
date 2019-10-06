import mongoose from 'mongoose';
import { mongodb } from './keys';

mongoose.set('useFindAndModify', false);
mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('Database connected in!!'))
    .catch(err => console.log('Error in mongo ' + err));