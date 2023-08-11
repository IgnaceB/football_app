

const getAllPlayers =async (x)=>{
	const res = await fetch(window.location.href,{
		method :'POST',
		headers:{
			"Content-Type": "application/json",
			'Content-Type': 'application/x-www-form-urlencoded',
		}
		body:{page:x}

	})
	const data=await res.json()
	console.log(`data ${data}`)
	return data
}

const introduceData=async()=>{
	let allPlayers = await getAllPlayers(page)
	console.log(`allPlayers ${JSON.stringify(allPlayers,null,2)}`)
	allPlayers.forEach((element)=>{
		document.getElementById('test').innerText=`${document.getElementById('test').innerText}
		${element.name}`
	})

	
	
}
