const coding = document.getElementById("codingblog-txt")

coding.addEventListener('mouseenter',codingtxt())

/*
crypto.addEventListener('mouseenter',function(){crypto.innerHTML+= "<div class=\"carousel-caption text-center p-100\"><font color = white><strong><h1>Cryptography blog</h1></strong></font></div>"})
digitalforensics.addEventListener('mouseenter',function(){digitalforensics.innerHTML+= "<div class=\"carousel-caption text-center p-100\"><font color = white><strong><h1>Digital Forensics blog</h1></strong></font></div>"})
*/
const codingtxt =function(){
	coding.innerHTML+= "<div class=\"carousel-caption text-center p-100\"><font color = white><strong><h1>Coding blog</h1></strong></font></div>"
}