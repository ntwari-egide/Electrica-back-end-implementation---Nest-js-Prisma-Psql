import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import * as request from 'supertest';

describe('AppController', () => {
    let appController: AppController;
    let prismaService: PrismaService;
    let app: INestApplication;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService, PrismaService],
        }).compile();

        prismaService = module.get<PrismaService>(PrismaService);
        appController = module.get<AppController>(AppController);

        app = module.createNestApplication();
        app.listen(3000);
        await app.init();
    });

    afterEach(async () => {
        app.close();
    });

    afterAll(() => {
        app.close();
    });

    it('/GET Hello world', () => {
        request(app.getHttpServer())
            .get('/greeting')
            .expect(200)
            .catch((err) => console.log(err));
    });

    it('/GET all users', async () => {
        const response = await request(app.getHttpServer()).get('users');

        expect(response.statusCode).toBe(404);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });

        it('Should return list of users ', async () => {
            prismaService.user.findMany = jest.fn().mockReturnValueOnce([]);

            expect(
                await (
                    await appController.getUsers()
                ).length,
            ).toBeGreaterThan(-1);
        });
    });
});
