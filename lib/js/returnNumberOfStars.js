const returnNumberOfStars = (props) => {
  if (!props.rating) {
    return {
      numberOfFullStars: null, 
      numberOfHalfStars: null,
      numberOfEmptyStars: null
    }
  }


  let arraySwitch = true;
  let arrayCounter = 0;
  const arrayOfNumber = props.rating.toString().split("")

  arrayOfNumber.forEach(val => {
    if (arraySwitch && parseInt(val)) {
      arrayCounter++
    } else {
      arraySwitch = false
    }
  })


  let numberOfFullStars = 0
  const arrayOfNumbersPriorToDecimal = []
  for (let i=0; i<arrayCounter; i++){
    arrayOfNumbersPriorToDecimal.push(arrayOfNumber[i])
  }

  if(arrayOfNumbersPriorToDecimal.length != 0){
    numberOfFullStars = parseInt(arrayOfNumbersPriorToDecimal.join(""))
  }

  
  let addOn = 0;
  let roundedFirstDecimal = 0;
  const arrayOfNumbersAfterDecimal = []
  for (let i = arrayOfNumber.length; i > arrayCounter; i--) {
    arrayOfNumbersAfterDecimal.unshift(arrayOfNumber[i])
    roundedFirstDecimal = parseInt(arrayOfNumber[i]) + addOn
    if (parseInt(arrayOfNumber[i]) + addOn >= 5) {
      addOn = 1
    } else {
      addOn = 0
    }
  }


  let numberOfHalfStars = 0;
  if(!parseInt(arrayOfNumbersAfterDecimal.join(""))){
    arrayOfNumbersAfterDecimal.shift()
  }
  if(parseInt(arrayOfNumbersAfterDecimal.join("")) > (.75*(Math.pow(10, arrayOfNumbersAfterDecimal.length-1)))){
    numberOfFullStars++
  }else if(parseInt(arrayOfNumbersAfterDecimal.join("")) > 2.5*(Math.pow(10, arrayOfNumbersAfterDecimal.length-2))){
    numberOfHalfStars++
  }

  const numberOfEmptyStars = 5-(numberOfFullStars + numberOfHalfStars);
  
 
  return {
    numberOfFullStars: numberOfFullStars, 
    numberOfHalfStars: numberOfHalfStars,
    numberOfEmptyStars: numberOfEmptyStars
  }
}

export default returnNumberOfStars;