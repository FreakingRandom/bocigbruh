const {noise} = require('./noise');
module.exports.config = {
	scale:1,
	layers:100,
	seed:420
};
module.exports.calculate = (x)=>{
	let value = 0;
	for(let i =1;i< this.config.layers + 1;i++){
		const pn = ((noise.simplex2(this.config.seed + i,x)+1)/2 ) * this.config.scale * (i/this.config.layers);
		value += pn;
	}
	return value;
};