
const getAllPlayers =async ()=>{
	const res = await fetch(window.location.href,{
		method :'POST',
		headers:{
	
		}

	})
	const data=await res.json()
	console.log(`data ${data}`)
	return data
}

const introduceData=async()=>{
	let allPlayers = await getAllPlayers()
	console.log(`allPlayers ${JSON.stringify(allPlayers,null,2)}`)
	allPlayers.forEach((element)=>{
/*		console.log(element)*/
		const newPlayer = document.createElement('p')
		const newContainer=document.createElement('a')
		const newImage=document.createElement('img')
		newImage.src=element.picture
		newPlayer.innerText=element.name
		newContainer.href=window.location.href.substring(0,window.location.href.lastIndexOf('/'))+'/thisPlayer/'+element._id
		console.log(window.location.href.substring(0,window.location.href.lastIndexOf('/'))+'/thisPlayer/'+element._id)
		newContainer.target='blank'
		newContainer.appendChild(newPlayer)
		document.getElementById('test').appendChild(newImage)
		document.getElementById('test').appendChild(newContainer)

	})

	
	
}


introduceData()