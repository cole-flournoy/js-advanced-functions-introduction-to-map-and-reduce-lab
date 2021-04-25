// Your code here
function mapToNegativize(sourceArray){
  const newArray = []
  for (let element of sourceArray){
    newArray.push(element * -1)
  } 
  return newArray
}

function mapToNoChange(sourceArray){
  return sourceArray.slice()
}

function mapToDouble(sourceArray){
  const newArray = []
  for (let element of sourceArray){
    newArray.push(element * 2)
  } 
  return newArray
}

function mapToSquare(sourceArray){
  const newArray = []
  for (let element of sourceArray){
    newArray.push(element ** 2)
  } 
  return newArray
}

function reduceToTotal(sourceArray, startingPoint=0){
  for (let element of sourceArray){
    startingPoint += element
  }
  return startingPoint
}

function reduceToAllTrue(sourceArray){
  for (let element of sourceArray){
    if (!element){
      return false
    }
  }
  return true
}


function reduceToAnyTrue(sourceArray){
  for (let element of sourceArray){
    if (element){
      return true
    }
  }
  return false
}