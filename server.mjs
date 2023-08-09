import express from 'express'
const app = express()
const PORT = 3000

import ejs from 'ejs'
import client from './helpers/db.mjs'

import playerRouter from './routes/players.mjs'


app.set('view engine','ejs')
app.use('/static',express.static('public'))

app.use(express.json())

const playerColl=client.db('football').collection('player')




 app.get('/',(req,res)=>{
  res.render('main.ejs')
 })

app.use('/players',playerRouter)


 app.listen(PORT, ()=>{
 	console.log(`server successfully launched on http://localhot:${PORT} !`)
 })