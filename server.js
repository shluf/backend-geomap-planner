const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const connectDB = require('./api/config/connectDB')
const port = process.env.PORT || 3000;

//IMPORT ROUTE
const missionRoutes = require('./api/routes/missionRoute')

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//MISSION ROUTES
app.use('/api/mission', missionRoutes)

mongoose.connection.once('open', () => {
    // Replace app.listen with Vercel's function
    const vercel = require('@vercel/serverless/next')
    app.listen(port, () => {
        console.log(`listening on port http://localhost:${port} Gamaforce`)
    })
    vercel.start(app, {
        port: process.env.PORT,
        serverless: true,
        routes: [
            {
                src: '/api/mission',
                dest: '/api/mission'
            }
        ]
    })
})