const initControllers = function (){
	const submitButton = document.getElementById("submit");
	submit.addEventListener('click', submitEvent);
}
const submitEvent = function(){
    const commentData = new Object();
    commentData[title] = document.title;
	commentData[name] = document.getElementById('name').innerHTML;
	commentData[message] = document.getElementById('message').value;

	postToGoogleDB(commentData);
}

initControllers();