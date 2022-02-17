import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateMeter } from './dto/create-meter';
import { MetersService } from './meters.service';

@Controller('/api/v1/meters')
export class MetersController {
    constructor(private readonly metersService: MetersService) {}

    @Post()
    create(@Body() createMeterDto: CreateMeter) {
        return this.metersService.create(createMeterDto);
    }

    @Get()
    findAll() {
        return this.metersService.findAll();
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateMeterDto: Prisma.MeterUpdateInput,
    ) {
        return this.metersService.update(+id, updateMeterDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.metersService.remove(+id);
    }
}
