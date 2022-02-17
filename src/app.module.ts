import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MetersModule } from './meters/meters.module';
import { TokensModule } from './tokens/tokens.module';
import { MetersService } from './meters/meters.service';
import { TokensService } from './tokens/tokens.service';

@Module({
    imports: [MetersModule, TokensModule],
    controllers: [AppController],
    providers: [PrismaService, AppService, MetersService, TokensService],
})
export class AppModule {}
