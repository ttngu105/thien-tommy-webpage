const login = document.getElementById('login')
const register = document.getElementById('register')
const user = document.getElementById('user')
const url = "https://loginandregister.herokuapp.com/users/login"
const get_user = function(){
    const request = inintRequest('GET',url);
    sendReq(request)
    .then(resEventGet);
}
const inintRequest = function(verb,url,mode="cors"){
    const init = new Object();
    init.method = verb;
    init.mode = mode;
    return new Request(url,init);
}
const sendReq = async function(request){
	const response = await fetch(request);
	return response;
}
const resEventGet = async function(response){
    var data = await response.json();
    display_user(data);
    console.log(data);
}
const display_user= function(data){
    console.log(data)
}
get_user()