function generateArrays(n) {
  let arrays = [];
  let sizes = []; 
  for(let i=0; i<n; i++) {
    let size;
    do {
      size = Math.floor(Math.random() * 10) + 1;
    } while(sizes.includes(size)); 
    sizes.push(size);
    let arr = [];
    for(let j=0; j<size; j++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    arrays.push(arr);
  }

  for(let i=0; i<n; i++) {
    if(i % 2 === 0) {
      arrays[i].sort((a, b) => a - b);
    } else {
      arrays[i].sort((a, b) => b - a);
    }
  }

  return arrays;
}

console.log(generateArrays(5)); 
