function posttogoogle(){
const id = "1FAIpQLSdt9A58NMv-QNl89U1TfEPD5NwLKva-9W-VijOQ3eLeNX4b-w"
let name = $("#name").val();
let email = $("#email").val();
let subject = $('#subject').val();
let text = $("#message").val();
let button = document.getElementbyId("submit");
button.addEventListener("click", function(){
	var request = new XMLHttpRequest();
	request.open("POST","https://docs.google.com/forms/d/e/1FAIpQLSdt9A58NMv-QNl89U1TfEPD5NwLKva-9W-VijOQ3eLeNX4b-w/formResponse"),
	data : {
			"entry.215189773":name,
			"entry.1221757881":email,
			"entry.1400375195":subject,
			"entry.784376181":text}

});	
}		
