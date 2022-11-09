import "express-async-errors";
import express from 'express'
import { AppDataSource } from './data-source'
import { errorMidleware } from './middlewares/error'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.get('/', async (req, res) => {

        return res.json('Server Online')
    })

    app.use(errorMidleware)


    return app.listen(3000)
})