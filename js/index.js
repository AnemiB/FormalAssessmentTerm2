let subwayOrder = [];

makeSubway = () =>{

    let subwayTotal = 0;

    let subwayName = document.getElementById("subwayName").value;

    let baseOption = document.getElementsByName("baseRadio");
    let baseValue; 
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            baseValue = baseOption[i].value
            subwayTotal = subwayTotal + +baseOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value);
            subwayTotal = subwayTotal + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("sauce");
    let souArray = [];
    for(let i = 0; i < sauceOptions.length; i++){
          if(sauceOptions[i].checked){
            souArray.push(sauceOptions[i].value)
            subwayTotal = subwayTotal + +sauceOptions[i].dataset.cost
          }
    }

    subwayOrder.push({
        subwayName: subwayName,
        subwayBase: baseValue,
        subwayToppings: topArray,
        subwaySauce: souArray,
        subwayPrice: subwayTotal
    });

    console.log(subwayOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subwayForm").reset();

}

realTimeCost = () => {

    realTimePrice = 0; 

    let baseOption = document.getElementsByName("baseRadio"); 
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            realTimePrice = realTimePrice + +baseOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("sauce");
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            realTimePrice = realTimePrice + +sauceOptions[i].dataset.cost
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"

}

displayOrder = () => {

    let area = document.getElementById("orders");
    let total = document.getElementById("orderTotal");

    area.innerHTML = "";

    let overallTotal = 0; 

    for(let i = 0; i < subwayOrder.length; i++){

        let name = subwayOrder[i].subwayName;
        let base = subwayOrder[i].subwayBase;
        let toppings = subwayOrder[i].subwayToppings;
        let sauce = subwayOrder[i].subwaySauce;
        let price = subwayOrder[i].subwayPrice; 

        overallTotal += price;

        area.innerHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text"><strong>Base:</strong> ${base}</p>
                        <p class="card-text"><strong>Toppings:</strong> ${toppings} </p>
                        <p class="card-text"><strong>Sauce:</strong> ${sauce} </p>
                        <p class="card-text"><strong>Cost:</strong> R${price}.00 </p>
                    </div>
                </div>`

        total.innerHTML = "R" + overallTotal + ".00"

    }
}

checkOut = () => {
    let data = JSON.stringify(subwayOrder)
    localStorage.setItem('order',data)
    window.location.href = '/pages/checkout.html';
}