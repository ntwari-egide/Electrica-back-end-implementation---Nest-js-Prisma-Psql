import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Hello World!');
    });

    it('/ (GET) all meters', () => {
        return request(app.getHttpServer()).get('/api/v1/meters').expect(200);
    });

    it('/ (GET) all tokens', () => {
        return request(app.getHttpServer()).get('/api/v1/tokens').expect(200);
    });

    it('/ Fail (GET) token with id 8', () => {
        return request(app.getHttpServer()).get('/api/v1/tokens/8').expect(404);
    });

    it('it should fail to get meter with 1', () => {
        return request(app.getHttpServer()).get('/api/v1/meters/1').expect(404);
    });

    it('it should purchase electricity', () => {
        return request(app.getHttpServer())
            .post('/purchase-electricity')
            .send({
                price: 200,
                meterNumber: 343230,
            })
            .expect(200);
    });

    it('it should load the meter', () => {
        return request(app.getHttpServer())
            .get('/load-meter-balance')
            .send({
                token: 333,
            })
            .expect(200);
    });
});
