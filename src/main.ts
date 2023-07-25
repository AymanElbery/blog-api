import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cors from "cors";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigins = ["https://asker-blog-51935e59f69c.herokuapp.com/"];



  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  }
    // cors({
    //   origin: (origin, callback) => {
    //     if (!origin || allowedOrigins.includes(origin)) {
    //       callback(null, true);
    //     } else {
    //       callback(new Error("Not allowed by CORS"));
    //     }
    //   },
    // })
  );

  //app.enableCors();

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
