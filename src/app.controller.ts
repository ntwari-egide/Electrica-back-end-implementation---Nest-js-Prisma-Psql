import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PurchaseElectricityDto } from './meters/dto/PurchaseDto';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly prismaService: PrismaService,
    ) {}

    @Post('/purchase-electricity')
    async createUser(@Body() PurchaseElectricityDto) {
        return this.appService.purchaseElectricity;
    }
}
