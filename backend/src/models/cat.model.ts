import mongoose, { Schema, Document } from 'mongoose';
import type { ICat } from '../types/cats.types.js';


let catSchema: Schema<ICat> = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: true
    },
    energyLevel: {
        type: Number,
        required: true
    },
    lifeSpan: {
        type: Number,
        required: true
    },
   kidsFriendly: {
        type: Boolean,
        required: true
   },
   apartmentFriendly: {
        type: Boolean,
        required: true
   },
   breed: {
        type: String,
        required: true
   },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


let catModel = mongoose.model("Cat" , catSchema)


export default catModel