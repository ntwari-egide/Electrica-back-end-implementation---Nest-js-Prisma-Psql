/**
 * @author: ntwari egide
 * @description: meter not found exception handler implementation
 */

import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomizedBadRequestException extends HttpException {
    constructor(message: string) {
        super(
            {
                status: HttpStatus.BAD_REQUEST,
                error: message,
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
