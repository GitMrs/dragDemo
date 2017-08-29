var rangmod=(function(){
	function rand(n,min,max){
		if(n<min){n=min}
		if(n>max){n=max}
		return n
	}
	return {
		rand:rand
	}
}())