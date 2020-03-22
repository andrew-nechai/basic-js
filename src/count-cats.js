module.exports = function countCats(a) {
  let otv = 0;

  a.forEach(x => {
  	x.forEach(i => {
    	if (i == "^^") otv++;
  	});
  });		
  
  return otv;
};
