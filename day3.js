function solvePart1(magicnum) {
  // any length of square
  const closestRoot = Math.round(Math.sqrt(magicnum));
  if (closestRoot % 2 == 0) {
      closestRoot ++;
  }
  // bottom right corner number
  const closestSquared = (closestRoot * closestRoot);
  
  //yellow brick rode style distance from closest Squared to my number
  const pathDfromSqare = closestSquared - magicnum;
  
  // radius
  const maxStepsToMidpoint = Math.floor(closestRoot/2);

  // full spirals around
  //console.log(Math.floor(pathDfromSqare / (closestRoot-1)));
  
  // excess spiral around
  const excessSpiral = pathDfromSqare % (closestRoot-1);

  return (maxStepsToMidpoint+ Math.abs(maxStepsToMidpoint - excessSpiral));
}

solvePart1(347991); //480