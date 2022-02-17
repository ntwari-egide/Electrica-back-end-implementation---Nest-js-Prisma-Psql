import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TokensService {
    constructor(private readonly prisma: PrismaService) {}

    create(_createTokenDto: Prisma.TokenCreateInput) {
        return this.prisma.token.create({
            data: _createTokenDto,
        });
    }

    findAll() {
        return this.prisma.token.findMany();
    }

    findOne(id: number) {
        return this.prisma.meter.findUnique({
            where: { id: id },
        });
    }

    findByMeterNumber(id: number) {
        return this.prisma.meter.findFirst({
            where: { meterNumber: id },
        });
    }

    update(id: number, _updateTokenDto: Prisma.TokenUpdateInput) {
        return this.prisma.token.update({
            data: _updateTokenDto,
            where: { id: id },
        });
    }

    remove(id: number) {
        return `This action removes a #${id} token`;
    }
}
