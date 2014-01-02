var btn320=document.getElementById('btn-320'),
btn480=document.getElementById('btn-480'),
btn600=document.getElementById('btn-600'),
btn768=document.getElementById('btn-768'),
iframe=document.getElementById('iframe');

btn320.addEventListener('click',function(e){
	e.preventDefault();
	resize(320);	
});
btn480.addEventListener('click',function(e){
	e.preventDefault();
	resize(480);	
});
btn600.addEventListener('click',function(e){
	e.preventDefault();
	resize(600);	
});
btn768.addEventListener('click',function(e){
	e.preventDefault();
	resize(768);	
});
function resize (w) {
	iframe.style.width=w+"px";
}
resize(320);