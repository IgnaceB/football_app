import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())

app.use(cookieParser())


const authentication=(req,res,next)=>{
	console.log(req.headers.cookie)
	console.log(req.cookies)
	const token=req.cookies.authorization

	console.log(token)
	let id 
	if (token==null){
		return res.sendStatus(401)
	}
	else {
		jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
			if (err) return res.sendStatus(401)
				else 
			console.log(user)
			id=(user.id)
			res.locals.id=id
			console.log(id)
			next()
		})
	}
	return id
}

export default authentication