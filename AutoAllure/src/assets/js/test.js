// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let child = [
    {
      "id": 4141,
      "name": "Limassol Office",
      "address": "Leoforos Amathous 32 Zanna Complex Block 1 Shop 8 Limassol 4532 Cyprus",
      "longitude": "34.7046733",
      "latitude": "33.1122467"
    },
    {
        "id": 7515,
        "name": "Larnaca Airport",
        "address": "Airport Loop, Dromolaxia, Larnaca, Cyprus",
        "longitude": "34.872957",
        "latitude": "33.6053053"
      },
      {
        "id": 7515,
        "name": "Larnaca Airport",
        "address": "Airport Loop, Dromolaxia, Larnaca, Cyprus",
        "longitude": "34.872957",
        "latitude": "33.6053053"
      },
    {
      "id": 7515,
      "name": "Larnaca Airport",
      "address": "Airport Loop, Dromolaxia, Larnaca, Cyprus",
      "longitude": "34.872957",
      "latitude": "33.6053053"
    },
    {
      "id": 7517,
      "name": "Paphos Airport",
      "address": "Airport Loop, Acheleia, Paphos, Cyprus",
      "longitude": "34.7117444",
      "latitude": "32.4891391"
    },
    {
      "id": 4141,
      "name": "Limassol Office",
      "address": "Leoforos Amathous 32 Zanna Complex Block 1 Shop 8 Limassol 4532 Cyprus",
      "longitude": "34.7046733",
      "latitude": "33.1122467"
    }
  ]
  let data = []
  for(let i=0;i<child.length;i++){
      let res = true;
  // 	console.log(data.length)
      for(let j=0;j<=data.length;j++){
         // console.log("data[j]",data[j])
          if(data[j]===undefined){
              res=true
          }
          else{
              console.log(data[j].name === child[i].name)
              if(data[j].name === child[i].name){
                  res=false
                  break
              }    
          }
          
      }
      if(res){
          data.push(child[i])
      }
      res=true
  }
  
  
test(data,child)

  function test(...locations){
    console.log(locations)
  }