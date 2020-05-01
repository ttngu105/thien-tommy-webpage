

const sendtoRequest =async function(request){
	const response = await fetch(request);
	return response;
}
const inittoRequest = function(verb,url, mode='cors'){
	const init = new Object();
	init.method = verb;
	init.mode = mode;
	return new Request(url,init);
}
const getfromGithub = function (){ 
	const request = inittoRequest("GET","https://api.github.com/users/ttngu105/events")
	sendtoRequest(request)
		.then(responseEventGET)
}
var responseEventGET= async function(response){
	var data = await response.json();
	responseEventPOST(data)
}

var responseEventPOST = async function(data){
	var count  = 0
	for(i =0; i <= 6; i++){
		const payloads = data[i]
		var {type} = payloads
		var {payload} = payloads
		if (type == "PushEvent"){
		var time = new Date(payloads.created_at)
		commits = payload.commits[0]
		repos = payloads.repo
		repo = repos.name
		displaynews(time.toUTCString(),repo,commits.message,count)
				count += 1
		}
		else{
			i +=1
		}
	}
}
var displaynews = function(time,repo,message,i){
	const newslist = document.getElementById("news"+i)
	newslist.innerHTML += `<div class="carousel-caption text-center p-100"><font color = "black"><strong><li class ='no-bullets'>Time: ${time}</li><li class ='no-bullets'>Updated repository: ${repo}</li><li class ='no-bullets'>Message: "${message}"</li></strong></font></div>`;
}

getfromGithub()