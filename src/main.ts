
declare const module: any;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  await app.init();
  
  const expressApp = app.getHttpAdapter().getInstance();
  server = serverlessExpress({ app: expressApp });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

export const handler: Handler = (event: any, context: Context, callback: Callback) => {
  if (!server) {
    bootstrap().then(() => server(event, context, callback));
  } else {
    server(event, context, callback);
  }
};

bootstrap();
