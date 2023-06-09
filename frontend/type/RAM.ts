export default interface RAM {
    _id?: string;
    model?: string;
    first_word_latency?: string;
    capacity?: number;
    cas_latency?: number;
    modules?: number;
    type?: {
        name: string;
    }
    brand?: {
        name: string;
    }
}
