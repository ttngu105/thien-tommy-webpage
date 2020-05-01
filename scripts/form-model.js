const formId = "1FAIpQLSdt9A58NMv-QNl89U1TfEPD5NwLKva-9W-VijOQ3eLeNX4b-w"
const entry1 = "entry.215189773";
const entry2 = "entry.1400375195";
const entry3 = "entry.1221757881";
const entry4 = "entry.784376181";
const getPath = formId =>`https://docs.google.com/forms/d/e/${formId}/formResponse`;
const sendToGoogleForm = function(data){
	const path = getPath(formId);
	const url = getUrl(path,data);
	sendRequest('POST',url)
	 .then(respondEvent);
}
const getUrl = function(path, params){
	const url = new URL(path);
	for (let key in params){
		url.searchParams.set(key,params[key]);
	}
	return url;
}
const sendRequest =async function(verb,url){
	const request = initRequest(verb,url);
	const response = await fetch(request);
	return response;
}
const initRequest = function(verb,url){
	const init = new Object();
	init.method = verb;
	init.mode = "no-cors";
	return new Request(url,init);
}
const respondEvent = response => alert("You will be contacted between 1 to 3 days form now")
