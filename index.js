import express from 'express'
import { router } from './routes/route.js'


let port = process.env.PORT || 5001
const app = express()


app.use('/sanrio',router)

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));


app.listen(port,()=>{
    console.log('http://localhost:'+ port);
})
