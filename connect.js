const payInput = document.getElementById("payI");
const payOption = document.getElementById("pay");

const recInput = document.getElementById("recI");
const recOption = document.getElementById("rec");

const usdAmount = document.getElementById("usd");

const tData = document.getElementById("totalData");


async function getPrice(symb){
    let priceData = -1;
    try{
    await fetch(`https://price.jup.ag/v6/price?ids=${symb}`)
    .then(res=>res.json())
      .then(data=>priceData = data.data[symb].price);
    }catch(error){
      return priceData;
    }
    return priceData;
  }
  
const changePay = () =>{
    let usdPrice = 1;
    getPrice(payOption.value).then(data=>{
        usdPrice = payInput.value * data;
        usdAmount.textContent = `USD: $${usdPrice.toFixed(2)}`;
        getPrice(recOption.value).then(data=>{
            recInput.value = (usdPrice/data).toFixed(5);
        })
    })
}


const changeRec = () =>{
    let usdPrice = 1;
    getPrice(recOption.value).then(data=>{
        usdPrice = recInput.value * data;
        usdAmount.textContent = `USD: $${usdPrice.toFixed(2)}`;
        getPrice(payOption.value).then(data=>{
            payInput.value = (usdPrice/data).toFixed(5);
        })
    })
}

payOption.addEventListener("change", changeRec);
payInput.addEventListener("input", changePay);
recInput.addEventListener("input", changeRec);
recOption.addEventListener("change", changePay)


