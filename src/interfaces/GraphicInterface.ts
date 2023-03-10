import { Types } from 'mongoose';
export interface GraphicInterface {
    _id: string;
    model: string;
    brand: Types.ObjectId;
    graphics_bus: Types.ObjectId;
    memory_capacity: number;
    clock_speed: number;
    boost_clock: number;
    length: string;
    chipset: string;
}

export interface GraphicArgsInterface {
    _id: string;
    limit: number;
    brand: string;
    graphic_bus: string;
}
