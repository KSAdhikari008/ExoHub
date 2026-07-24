import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv/config';

const app = express();

// Middleware configurations.
app.use(express.urlencoded({extended: true, limit: "20kb"}));
app.use(express.static("public")); // public folder available on request. 
app.use(express.json({limit: "20kb"}));
app.use(cors({origin: `${process.env.CORS_ORIGIN}`}));
app.use(cookieParser());

export default app;