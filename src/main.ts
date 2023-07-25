import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cors from "cors";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigins = ["https://asker-blog-51935e59f69c.herokuapp.com/"];



  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS, FETCH"
    );
    
    next();
  });


  //app.enableCors();

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
