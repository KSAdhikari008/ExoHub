import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv/config';

export const app = express();

// Middleware configurations.
app.use(cors({origin: `${process.env.CORS_ORIGIN}`}));
app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({extended: true, limit: "20kb"}));
app.use(express.static("public"));
app.use(cookieParser());