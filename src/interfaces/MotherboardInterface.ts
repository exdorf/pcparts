import { Document, Types } from 'mongoose';
export interface MotherboardInterface extends Document {
    model: string;
    ram_slots: number;
    brand: Types.ObjectId;
    socket: Types.ObjectId;
    chipset: Types.ObjectId;
    form_factor: Types.ObjectId;
    graphics_bus: Types.ObjectId;
}
