import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMeter } from './dto/create-meter';

@Injectable()
export class MetersService {
    constructor(private readonly prisma: PrismaService) {}

    create(createMeter: Prisma.MeterCreateInput) {
        return this.prisma.meter.create({
            data: createMeter,
        });
    }

    findAll() {
        return this.prisma.meter.findMany();
    }

    update(id: number, updateMeterDto: Prisma.MeterUpdateInput) {
        return this.prisma.meter.update({
            data: updateMeterDto,
            where: { id: id },
        });
    }

    remove(id: number) {
        return this.prisma.meter.delete({
            where: { id: id },
        });
    }
}
