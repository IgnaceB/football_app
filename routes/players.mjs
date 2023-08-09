import express from 'express'
import client from '../helpers/db.mjs'
const app = express()
const router = express.Router()
import ejs from 'ejs'
const playerColl=client.db('football').collection('player')
app.set('view engine','ejs')


router.get('/',(req,res)=>{

	res.render('player.ejs')
})

router.post('/',async (req,res)=>{
	const whoToShow=req.params.page*50
	const whoToSkip=(req.params.page-1)*50
	console.log(whoToShow)
	const allPlayer= await playerColl.find({}).limit(50).toArray()
	console.log(allPlayer)
	res.send(allPlayer)

})



export default router