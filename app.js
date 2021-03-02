import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter.js';
import videoRouter from './routers/videoRouter.js';
import globalRouter from './routers/globalRouter.js';
import routes from './routes.js';
import { localsMiddleware } from "./middlewares.js";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users , userRouter);
app.use(routes.videos , videoRouter);


export default app;