import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

   location: {
    type: String,
    required: true

    },
    noOfRooms: {
        type: Number,
        required: true
    },
    parking: {
        type: Boolean,
        required: true,
        enum:  ['true','false'],
        default: true
    },

}, {timestamps: true});


export default mongoose.model('Hotel', hotelSchema);

