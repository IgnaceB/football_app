import cheerio from 'cheerio'
import axios from 'axios'
import {load} from 'cheerio'
import fs from 'fs'
import client from './helpers/db.mjs'
const playerColl=client.db('football').collection('player')


let arrayData=[]
let thisData={
}

const scrap = async () =>{ 
	for (let j=1;j<606;j++){
		console.log(`page nbr ${j}`)
	try {
		const request = await axios.request({
			method:"GET",
			url : `https://www.fifaindex.com/players/${j}`,
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
			}
		})

		
		const $=load(request.data)

		const html= $('[data-playerid]')



		for (let i = 0 ; i<html.length;i++){
			let thisAttribute=$(html[i])
			const content = thisAttribute
			thisData={
				name: $(html[i].children[3]).text().trim(),
				ovrpot : $(html[i].children[2]).text().trim(),
				country : $(html[i].children[1]).find('img').attr('alt'),
				position : { first : $(html[i]).find('.link-position').attr('title'),
							second : $(html[i]).find('.link-position:nth-child(2)').attr('title'),
							third : $(html[i]).find('.link-position:nth-child(3)').attr('title')
						},
				age : $(html[i]).find('[data-title="Age"]').text().trim(),
				team : $(html[i]).find('.link-team img').attr('alt'),
				picture : $(html[i].children[0]).find('a.link-player img').attr('src'),
				teamPicture : $(html[i]).find('a.link-team img').attr('src')
			}
			

			let alreadyExists=await playerColl.find({name : thisData.name}).toArray()

			

			if(alreadyExists.length>0){
				console.log("already Exists")
  			}
			else {
				await playerColl.insertOne(thisData)
				console.log(`${thisData.name.toString()} added to database`)
			}


	}
	catch(error){
		console.error(error)
	}


}

}
scrap()