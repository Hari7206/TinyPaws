import { Document } from "mongoose";



export interface ICat extends Document {
    name: string;
    breed: string;
    description?: string;
    kidsFriendly: boolean;
    apartmentFriendly: boolean;
    lifeSpan: number;
    color: string;
    energyLevel: number;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;

}