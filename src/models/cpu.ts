import { Schema, model } from 'mongoose';
import { CpuInterface } from '../interfaces';

const schema: Schema = new Schema<CpuInterface>({
    model: {
        type: String,
        required: [true, 'CPU model can not be empty'],
        maxlength: [64, 'CPU model must have less 64 characters'],
    },
    tdp: {
        type: Number,
        required: [true, 'TDP can not be empty'],
    },
    smt: {
        type: Boolean,
        default: false,
        required: [true, 'SMT can not be empty'],
    },
    ram_max: {
        type: Number,
        required: [true, 'RAM max can not be empty'],
    },
    graphics: {
        type: Schema.Types.ObjectId,
        ref: 'CpuGraphic',
        default: null,
    },
    core_clock: {
        type: Number,
        required: [true, 'Core Clock max can not be empty'],
        min: 0,
        max: 100000,
    },
    core_count: {
        type: Number,
        required: [true, 'Core Number can not be empty'],
        min: 1,
        max: 999,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'RAM must have a Brand!'],
    },
    socket: {
        type: Schema.Types.ObjectId,
        ref: 'Socket',
        required: [true, 'CPU must have a socket!'],
    },
    ram_type: {
        type: Schema.Types.ObjectId,
        ref: 'RamType',
        required: [true, 'CPU must have ram type!'],
    },
    ram_speed: {
        type: Schema.Types.ObjectId,
        ref: 'RamSpeed',
        required: [true, 'CPU must have ram speed!'],
    },
});

export default model<CpuInterface>('Cpu', schema);
