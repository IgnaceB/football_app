import express from 'express'
import client from '../helpers/db.mjs'
import Player from '../helpers/mongoose.mjs'
const app = express()
const router = express.Router()
import ejs from 'ejs'
const playerColl=client.db('football').collection('player')
app.set('view engine','ejs')


router.get('/thisPlayer/:playerId', async (req,res)=>{
	try {
		console.log(req.params.playerId)
	const thisPlayer=await Player.findById(req.params.playerId)
	/*res.json(thisPlayer)*/

/*	console.log(thisPlayer)*/
	res.render('onePlayer.ejs',{content :thisPlayer})
}
catch (err){
	console.log(err)
}

})

router.post('/page=:page',async (req,res)=>{
	const whoToShow=req.params.page*50
	const whoToSkip=(req.params.page-1)*50
	console.log(`whoToShow : ${whoToShow}`)
	console.log(`whoToSkip : ${whoToSkip}`)


	const allPlayer= await playerColl.find({}).sort({name:1}).limit(whoToShow).skip(whoToSkip).toArray()
/*	console.log(`allPlayers ${JSON.stringify(allPlayer,null,2)}`)*/

	res.send(allPlayer)

})

router.get('/page=:page',(req,res)=>{

	res.render('player.ejs')
	

})
export default router