

/*
for(const elem in arr){
  sym = arr[elem].mintSymbol;
  console.log(`<option value='${sym}'>${sym}</option>`)
}
*/

getSym = "USDC";

printSym(getSym)


function printSym(getSym){
  getPrice(getSym).then(data=>console.log(data))
}

async function getPrice(sym){
  priceData = "";
  try{
  await fetch(`https://price.jup.ag/v4/price?ids=${sym}`)
  .then(res=>res.text())
    .then(data=>priceData=data);
  }catch(error){
    priceData = "ERROR"
  }
  return priceData;
}
