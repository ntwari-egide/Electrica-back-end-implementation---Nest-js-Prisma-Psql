import { ApiProperty } from '@nestjs/swagger';

export class UpdateMeter {
    @ApiProperty({})
    meterNumber?: number | number;
    @ApiProperty({})
    daysRemaining?: number | number;
    @ApiProperty({})
    createdAt?: Date | Date | string;
    @ApiProperty({})
    updatedAt?: Date | Date | string;
}
