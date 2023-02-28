import { StatusCodes } from '../models/enums/status_codes';

export interface ResponseInterface {
    status: StatusCodes;
    results: number;
    data: {
        data: Array<object>;
    };
}
