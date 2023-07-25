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
      "*"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "*"
    );
    
    next();
  });


  //app.enableCors();

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
