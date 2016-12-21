var lra = new Array();
lra.push(new RegExp(/\s/g))
lra.push(new RegExp(/[àáâãäå]/g))
lra.push(new RegExp(/æ/g))
lra.push(new RegExp(/ç/g))
lra.push(new RegExp(/[èéêë]/g))
lra.push(new RegExp(/[ìíîï]/g))
lra.push(new RegExp(/ñ/g))
lra.push(new RegExp(/[òóôõö]/g))
lra.push(new RegExp(/œ/g))
lra.push(new RegExp(/[ùúûü]/g))
lra.push(new RegExp(/[ýÿ]/g))
lra.push(new RegExp(/\W/g))
lra.push(new RegExp(/["']/g))

function removeAccents(s){
	var r=s.toLowerCase();
	r = r.replace(lra[0],"");
	r = r.replace(lra[1],"a");
	r = r.replace(lra[2],"ae");
	r = r.replace(lra[3],"c");
	r = r.replace(lra[4],"e");
	r = r.replace(lra[5],"i");
	//r = r.replace(lra[6],"n");                
	r = r.replace(lra[7],"o");
	r = r.replace(lra[8],"oe");
	r = r.replace(lra[9],"u");
	r = r.replace(lra[10],"y");
	//r = r.replace(lra[11],"");
	r = r.replace(lra[12],"");
	return r;
};
