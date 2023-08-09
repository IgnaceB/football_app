

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
		document.getElementById('test').innerText=`${document.getElementById('test').innerText}
		${element.name}`
	})

	
	
}

introduceData()