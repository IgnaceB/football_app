import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

import ejs from 'ejs'
import client from './helpers/db.mjs'
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended :true}))

import authentication from './helpers/authentication.mjs'
import loginRouter from './routes/login.mjs'
import playerRouter from './routes/players.mjs'

app.set('views', `./views`);
app.set('view engine','ejs')
app.use('/static',express.static('public'))

app.use(express.json())

const playerColl=client.db('football').collection('player')




app.use('/',loginRouter)
app.use('/players',authentication,playerRouter)


 app.listen(PORT, ()=>{
 	console.log(`server successfully launched on http://localhot:${PORT} !`)
 })