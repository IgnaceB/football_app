


const verifyLogin =async ()=>{

	const thisUsername=document.getElementById('username').value
	const thisPassword=document.getElementById('password').value
	const thisBody={username:thisUsername, password:thisPassword}
	console.log(thisBody)
	try{
		const res = await fetch(window.location.href,{
		method :'POST',
		headers:{
			"Content-Type": "application/json"
		},
		body:JSON.stringify(thisBody)

	})
		console.log(res)
	return res
	}
	catch(err){
		console.log(err)
	}
	

}

document.getElementById('submit').addEventListener('click',(event)=>{
	event.preventDefault()
	verifyLogin()
})
