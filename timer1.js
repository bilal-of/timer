const beep = () => {
  let times = process.argv.slice(2)  
  for (let element of times) {  
    if (Number.isInteger(parseInt(element)) && element > 0) { 
      let newTime = element * 1000 
      setTimeout(() => { 
        process.stdout.write('\x07');
          }, newTime)
    }
    }
    

} 

beep()
