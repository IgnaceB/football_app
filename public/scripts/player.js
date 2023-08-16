
const getAllPlayers =async ()=>{
	const res = await fetch(window.location.href,{
		method :'POST',
		headers:{
	
		}

	})
	const data=await res.json()

	return data
}

const introduceData=async()=>{
	let allPlayers = await getAllPlayers()

	allPlayers.forEach((element)=>{

		const newPlayer = document.createElement('p')
		const newContainer=document.createElement('a')
		const newImage=document.createElement('img')
		newImage.src=element.picture
		newPlayer.innerText=element.name
		newContainer.href=window.location.href.substring(0,window.location.href.lastIndexOf('/'))+'/thisPlayer/'+element._id

		newContainer.target='blank'
		newContainer.appendChild(newPlayer)
		document.getElementById('test').appendChild(newImage)
		document.getElementById('test').appendChild(newContainer)

	})

	
	
}


introduceData()

const previous=document.getElementById('previous')
const next=document.getElementById('next')
const actualPage=window.location.href

if (actualPage.substring(actualPage.lastIndexOf('=')+1)>1){
previous.addEventListener('click',(event)=>{

	const reduceUrl=actualPage.substring(0,actualPage.lastIndexOf('='))
	const page=actualPage.substring(actualPage.lastIndexOf('=')+1)
	const newPage=page-1
	window.location.replace(reduceUrl+'='+newPage)

})}
else {
	previous.style.display='none'	
}
next.addEventListener('click',(event)=>{
	const actualPage=window.location.href
	const reduceUrl=actualPage.substring(0,actualPage.lastIndexOf('='))
	const page=actualPage.substring(actualPage.lastIndexOf('=')+1)
	const newPage=parseInt(page)+1
	window.location.replace(reduceUrl+'='+newPage)

})
