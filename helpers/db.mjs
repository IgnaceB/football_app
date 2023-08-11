import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient




export const client = new MongoClient(process.env.uri, { 
    useNewUrlParser: true,});



export default client 