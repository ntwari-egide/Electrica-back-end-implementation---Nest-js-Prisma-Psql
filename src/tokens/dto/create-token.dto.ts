import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDto {
    @ApiProperty({})
    price: number;
    @ApiProperty({})
    loadedDays: number;
    @ApiProperty({})
    generatedAt: Date | string;
    @ApiProperty({})
    meterId?: number | null;
}
