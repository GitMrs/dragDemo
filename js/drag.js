var box=document.getElementById('box');
	box.onmousedown=function(e){
		e.stopPropagation();
		var x=e.clientX - box.offsetLeft,
			y=e.clientY - box.offsetTop;
		document.onmousemove=function(e){
			var X=e.clientX-x,
				Y=e.clientY-y;
			if(X<0){
				X=0
			}
			if(X>window.innerWidth - box.offsetWidth){
				X=window.innerWidth - box.offsetWidth
			}
			if(Y<0){
				Y=0
			}
			if(Y>window.innerHeight - box.offsetHeight){
				Y=window.innerHeight - box.offsetHeight
			}
			console.log(Y)
			box.style.left=X+"px";
			box.style.top=Y+"px";
		}
		document.onmouseup=function(){
			document.onmousemove=null
		}
	}
var bigs=document.getElementById('bigs');
	bigs.onmousedown=function(e){
			e.stopPropagation();
		var x=e.clientX - bigs.offsetLeft,
			y=e.clientY - bigs.offsetTop;
		document.onmousemove=function(e){
			var X=e.clientX-x+bigs.offsetWidth,
				Y=e.clientY-y+bigs.offsetHeight;
			if(X<100){
				X=100
			}
			if(X>600){
				X=600
			}
			if(Y<100){
				Y=100
			}
			if(Y>600){
				Y=600
			}
			box.style.width=X+"px";
			box.style.height=Y+"px";
		}
		document.onmouseup=function(){
			document.onmousemove=null
		}
	}