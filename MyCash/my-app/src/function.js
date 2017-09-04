let day = {
  day: 'numeric'  
};

function getDate (dt) {
	dt = dt * 1000;
	let date = new Date(dt).toLocaleString("en-US", day)
	return date;	
}

export {getDate};