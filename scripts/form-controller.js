const initControllers = function(){
	const button = document.getElementById("submit");
	button.addEventListener('click',submitEvent);
}
const submitEvent  = function(){
	const formdata = new Object();
	formdata[entry1] = document.getElementById('name').value;
	formdata[entry2] = document.getElementById("email").value;
	formdata[entry3] = document.getElementById("subject").value;
	formdata[entry4] = document.getElementById("message").value;
	sendToGoogleForm(formdata);
}
initControllers();