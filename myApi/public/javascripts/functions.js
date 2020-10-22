const arrayNombres = require('../../public/data/data')


const check = (element)=>{
  element = element.toUpperCase()
  arrayResult = [];
  for(i=0; i<arrayNombres.nombres.length; i++){
    if(arrayNombres.nombres[i].charAt(1) == element.charAt(0)){
      arrayResult.push(arrayNombres.nombres[i]);
    }
  }
  return arrayResult
}

module.exports = check