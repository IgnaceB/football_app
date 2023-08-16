import express from 'express'
import client from '../helpers/db.mjs'
import Player from '../helpers/mongoose.mjs'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()
const router = express.Router()
import ejs from 'ejs'
const userColl=client.db('football').collection('user')

app.use(bodyParser.urlencoded({extended :true}))
app.set('view engine','ejs')


router.get('/login', async (req,res)=>{

	res.render('login.ejs')

})

router.post('/login',async(req,res)=>{
	console.log(req.body)
	const thisusername=req.body.username
	const thispassword=req.body.password
	console.log(thisusername)
	console.log(thispassword)

	const checkValidUser= await userColl.find({username:thisusername,password:thispassword}).toArray()
   let connectedUser=(checkValidUser[0])
   console.log(connectedUser)
	if(connectedUser!=undefined){
		console.log('utilisateur trouvé')

		const accessToken=jwt.sign(connectedUser,process.env.ACCESS_TOKEN_SECRET)

		res.cookie('authorization',accessToken,{httpOnly : true})
		res.status(200).send('authorization')
	}
	else {
		console.log('utilisateur pas trouvé')
	res.cookie('authorization',0,{httpOnly : true})
	return res.status(401).send("no user")
	}
})


/*router.post('/page=:page',async (req,res)=>{
	const whoToShow=req.params.page*50
	const whoToSkip=(req.params.page-1)*50
	console.log(`whoToShow : ${whoToShow}`)
	console.log(`whoToSkip : ${whoToSkip}`)


	const allPlayer= await playerColl.find({}).sort({name:1}).limit(whoToShow).skip(whoToSkip).toArray()
/*	console.log(`allPlayers ${JSON.stringify(allPlayer,null,2)}`)*/

/*	res.send(allPlayer)
*/
/*})

router.get('/page=:page',(req,res)=>{

	res.render('player.ejs')
	

})*/
export default router