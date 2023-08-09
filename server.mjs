import express from 'express'
const app = express()
const PORT = 3000

import ejs from 'ejs'
import client from './helpers/db.mjs'


app.set('view engine','ejs')
app.use('/static',express.static('public'))
app.use(express.json())

const playerColl=client.db('football').collection('player')



/*const allPlayer= await playerColl.find(({}))*/

/*console.log(allPlayer)*/

 const testConn = async () =>{
  try {
  await client.connect()
  console.log('Connexion ok')
  const allPlayer= await playerColl.find({}).toArray()
  console.log(allPlayer.length)
}
  catch (err) {
    console.log(err)
  }
};

 testConn()


 app.get('/',(req,res)=>{
 	res.render('main.ejs')
 })



 app.listen(PORT, ()=>{
 	console.log(`server successfully launched on http://localhot:${PORT} !`)
 })