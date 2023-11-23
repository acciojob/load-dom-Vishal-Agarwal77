//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	let body=document.querySelector("body");
	if(body.hasChildNodes()){
		body.innerHTML="";
	}
	let text=document.createTextNode("DOM load success");
	body.appendChild(text);
})