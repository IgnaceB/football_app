import express from 'express'
import client from '../helpers/db.mjs'
const app = express()
const router = express.Router()
import ejs from 'ejs'
const playerColl=client.db('football').collection('player')
app.set('view engine','ejs')


router.get('/:page',(req,res)=>{

	res.render('player.ejs')
})

router.post('/:page',async (req,res)=>{
	const whoToShow=req.params.page*50
	const whoToSkip=(req.params.page-1)*50
	console.log(`whoToShow : ${whoToShow}`)
	console.log(`whoToSkip : ${whoToSkip}`)


	const allPlayer= await playerColl.find({}).sort({name:1}).limit(whoToShow).skip(whoToSkip).toArray()
	console.log(`allPlayers ${JSON.stringify(allPlayer,null,2)}`)

	res.send(allPlayer)

})



export default router