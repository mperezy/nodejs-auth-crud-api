import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    title: String,
    description: String,
    userId: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks', TaskSchema);