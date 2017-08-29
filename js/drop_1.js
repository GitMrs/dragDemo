var mod=(function(){
 	function move(ele,isRang){
		var tit=(typeof ele === "string" ? document.getElementById(ele) : ele);
		var x,y,obj;
			tit.onmousedown=Down
			function Down(e){
				e.stopPropagation();
				obj=tit.parentNode;
				var event=e || window.event;
				x=e.clientX-obj.offsetLeft;
				y=e.clientY-obj.offsetTop;
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
	function size(ele,isRang,dir){
			var obj=(typeof ele === "string" ? document.getElementById(ele) : ele);
		var x,y,w,h,box,curx,cury;
			obj.onmousedown=Down
			function Down(e){
				e.stopPropagation();
				box=this.parentNode;
				w=box.offsetWidth;
				h=box.offsetHeight;
				var event=e || window.event;
				curx=e.clientX;
				cury=e.clientY;
				x=box.offsetLeft;
				y=box.offsetTop;
				document.onmousemove=Move
			}
			function Move(e){
					e.stopPropagation();
				var event=e || window.event;
				var X=e.clientX-curx,
					Y=e.clientY-cury;
				if(dir=="bl"){
					// if(X<0 || Y>0){
					if(Math.abs(X)>w){
						var ws=X
					}else{
						ws=Math.abs(X)
					}
					var W=w+ws,
						H=h+Y;
					if(isRang){
					W=rangmod.rand(W,isRang[0],isRang[1])
					H=rangmod.rand(H,isRang[0],isRang[1])
					}
					box.style.width=W+"px";
					box.style.height=H+"px";
					box.style.left=(x-Math.abs(X))+"px";
					box.style.top=y+"px";
					// }
				}
				
				if(dir=="br"){
					// if(X>0 || Y>0){
					var W=w+X,
						H=h+Y;
					if(isRang){
					W=rangmod.rand(W,isRang[0],isRang[1])
					H=rangmod.rand(H,isRang[0],isRang[1])
					}
					box.style.width=W+"px";
					box.style.height=H+"px";
				// }
				}
				if(dir=="tr"){
				// if(X>0 || Y<0){
					var W=w+Math.abs(X),
						H=h+Math.abs(Y);
					if(isRang){
					
					W=rangmod.rand(W,isRang[0],isRang[1])
					H=rangmod.rand(H,isRang[0],isRang[1])
					}
					box.style.width=W+"px";
					box.style.height=H+"px";
					box.style.left=x+"px";
					box.style.top=(y-Math.abs(Y))+"px";
				// }
			}
				if(dir=="tl"){
					// if(X<0 || Y<0){
					var W=w+Math.abs(X),
						H=h+Math.abs(Y);
					if(isRang){
					W=rangmod.rand(W,isRang[0],isRang[1])
					H=rangmod.rand(H,isRang[0],isRang[1])
					}
					box.style.width=W+"px";
					box.style.height=H+"px";
					box.style.left=(x-Math.abs(X))+"px";
					box.style.top=(y-Math.abs(Y))+"px";
				// }
				}
				
				// 	if(isRang){
				// 	var W=w+Math.abs(X),
				// 		H=h+Math.abs(Y);
				// 	W=rangmod.rand(W,isRang[0],isRang[1])
				// 	H=rangmod.rand(H,isRang[0],isRang[1])
				// 	}
				// box.style.width=W+"px";
				// box.style.height=H+"px";
				// box.style.left=(x-Math.abs(X))+"px";
				// box.style.top=(y-Math.abs(Y))+"px";
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