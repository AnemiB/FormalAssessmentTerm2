displayCheck = () => {

    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');
  
    let checkTotal = 0;
  
    for(let i = 0; i < data.length; i++){
  
      let name = data[i].subwayName;
      let base = data[i].subwayBase;
      let toppings = data[i].subwayToppings;
      let sauce = data[i].subwaySauce;
      let price = data[i].subwayPrice; 
  
      checkTotal += price;
  
      items.innerHTML += `
      <div class="orderLine">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Base:</strong> ${base}</p>
          <p><strong>Toppings:</strong> ${toppings.join(', ')} </p>
          <p><strong>Sauce:</strong> ${sauce.join(' , ')} </p>
         <p><strong>Price:</strong> R${price}.00 </p>
      </div>
      `
  
      totalArea.innerHTML = "R" + checkTotal + ".00";
  }
  
  
  }
  
  resetReturn = () => {
      localStorage.removeItem('order');
      window.location.href = '../index.html';
  }