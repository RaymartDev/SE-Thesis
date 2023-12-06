import express from "express"
import dotenv from "dotenv"
import userRoutes from './routes/userRoutes.js'
dotenv.config()
import cookieParser from "cookie-parser"
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// server config
connectDB()
const port = process.env.PORT || 5000
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// - **POST /api/users/register** - REGISTER A USER
// - **POST /api/users/login** - LOGIN A USER
// - **POST /api/users/logout** - LOGOUT A USER