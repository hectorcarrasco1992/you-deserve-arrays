function getFirstItemFrom(num) {
  let items = num

  return items[0]

}

function getLastItemFrom(num) {
  let items = num

  return items[num.length -1]
}

function getIndex3(arry) {
  let sample = arry

  if(sample.length >= 4){
    return sample[3]
  } else if (sample.length < 4){
    return sample[sample.length -1]
  }
   

}

function firstItemIsNumber(arry) {
  let sample = arry
  let result = true
  let result2 = false
    if (typeof sample[0] === 'number'){
       return result
    } else if( typeof sample[0] !== String){
      return result2
    }
      

}

function isLongList(arry) {
  let sample = arry
  
  if(sample.length >= 10){
    return true
  } else if (sample.length < 10){
    return false
  }

}



module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
}