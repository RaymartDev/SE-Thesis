import express from "express"
import dotenv from "dotenv"
import userRoutes from './routes/userRoutes.js'
dotenv.config()
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// server config
const port = process.env.PORT || 5000
const app = express()
app.use('/api/users', userRoutes)

app.get('/', (req, res) => { 
    res.send('Server is ready')
})

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// - **POST /api/users/register** - REGISTER A USER
// - **POST /api/users/login** - LOGIN A USER
// - **POST /api/users/logout** - LOGOUT A USER