let generatedICCID ;
 let ICCIDgenerator =()=>{
     generatedICCID = []
    while(generatedICCID.length < 20) {
        generatedICCID.push(Math.floor(Math.random() * (9 - 0)) + 0)
    }
     console.log(generatedICCID.join(""))
 }
 for(var i=0;i<100;i++){
      ICCIDgenerator()
 }