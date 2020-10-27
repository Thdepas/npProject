import express from 'express'
import session from 'express-session'
import Redis from 'ioredis'
import connectRedis from 'connect-redis'

const RedisStore = connectRedis(session)
const client = new Redis({
port : 6379
host :
}) 

const app = express()

app.use(
    session({
        store: new RedisStore({client}),
        secret: 'keyboard cat',
        resave: false,
    })
)

app.get('/',(req,res) => res.json({message: 'OK'}))
app.listen(3000, ()=> console.log(`http: //localhost:${3000}`))