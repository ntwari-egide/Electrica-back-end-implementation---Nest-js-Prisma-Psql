/**
 * @author: ntwari egide
 * @description: meter controller model
 */

import { ApiProperty } from '@nestjs/swagger';

export class PurchaseElectricityDto {
    @ApiProperty({})
    price: number;
    @ApiProperty({})
    meterNumber: number;
}
