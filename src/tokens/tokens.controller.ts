/**
 * @author: ntwari egide
 * @description: token controller endpoints
 */

import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { TokensService } from './tokens.service';

import { Prisma } from '@prisma/client';
import { CreateTokenDto } from './dto/create-token.dto';

@Controller('/api/v1/tokens')
export class TokensController {
    constructor(private readonly tokensService: TokensService) {}

    @Post()
    create(@Body() createTokenDto: CreateTokenDto) {
        return this.tokensService.create(createTokenDto);
    }

    @Get()
    findAll() {
        return this.tokensService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tokensService.findOne(+id);
    }

    @Get('/meter-number/:id')
    findByMeterNumber(@Param('id') id: string) {
        return this.tokensService.findByMeterNumber(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTokenDto: CreateTokenDto) {
        return this.tokensService.update(+id, updateTokenDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.tokensService.remove(+id);
    }
}
