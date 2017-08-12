/*
PEGAR TODOS OS ARTICLE E RETORNA 
*/

var slide = document.querySelectorAll('.slide article');

var current = 0;

var total = slide.leght - 1;

window.setInterval(function(){

	var index = current ? current - 1:total;

	slide [index].className = '';
	slide[current].className = 'active';
	current = current &gt;= total ? 0; current + 1; 
}, 2000);