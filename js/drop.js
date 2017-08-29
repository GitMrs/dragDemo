var mod=(function(){
 	function move(ele,isRang){
		var obj=(typeof ele === "string" ? document.getElementById(ele) : ele);
		var x,y;
			obj.onmousedown=Down
			function Down(e){
				e.stopPropagation();
				var event=e || window.event;
				x=e.clientX-this.offsetLeft;
				y=e.clientY-this.offsetTop;
				document.onmousemove=Move
			}
			function Move(e){
				var event=e || window.event;
				var X=e.clientX,
					Y=e.clientY;
				if(isRang){
					var l=X-x,
						t=Y-y,
						maxl=window.innerWidth-obj.offsetWidth,
						maxt=window.innerHeight-obj.offsetHeight,
					l=rangmod.rand(l,0,maxl)
					t=rangmod.rand(t,0,maxt)
				}
				obj.style.left=l+"px";
				obj.style.top=t+"px";
				document.onmouseup=function(){
					document.onmousemove=null;
					document.onmouseup=null;
				}
			}

	}
	function size(ele,isRang){
			var obj=(typeof ele === "string" ? document.getElementById(ele) : ele);
		var x,y,w,h,box;
			obj.onmousedown=Down
			function Down(e){
				e.stopPropagation();
				box=this.parentNode;
				w=box.offsetWidth;
				h=box.offsetHeight;
				var event=e || window.event;
				x=e.clientX-this.offsetLeft;
				y=e.clientY-this.offsetTop;
				document.onmousemove=Move
			}
			function Move(e){
				var event=e || window.event;
				var X=e.clientX,
					Y=e.clientY;
				if(isRang){
					var w=X-x,
						h=Y-y;
					w=rangmod.rand(w,isRang[0],isRang[1])
					h=rangmod.rand(h,isRang[0],isRang[1])
				}
				box.style.width=w+"px";
				box.style.height=h+"px";
				document.onmouseup=function(){
					document.onmousemove=null;
					document.onmouseup=null;
				}
			}

	}
	return {
		move:move,
		size:size
	}
}())