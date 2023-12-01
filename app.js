function updateChocolateNumber(product, price, isIncreasing) {
    const chocolateInput = document.getElementById(product + '-number');
    let chocolateNumber = chocolateInput.value;

    if (isIncreasing) {
        chocolateNumber = parseInt(chocolateNumber) + 1;
    } else if (chocolateNumber > 0) {
        chocolateNumber = parseInt(chocolateNumber) - 1;
    }
    if (chocolateNumber > 8) { // Ensure maximum limit is 8
        chocolateNumber = 8;
    }

    chocolateInput.value = chocolateNumber;

    
    const chocolateTotal = document.getElementById(product + '-total');
    chocolateTotal.innerText = (chocolateNumber * price).toFixed(2);
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const chocolateTotal1 = getInputValue('chocolate1') * 5.00; 
    const chocolateTotal2 = getInputValue('chocolate2') * 10.00; 
    const chocolateTotal3 = getInputValue('chocolate3') * 15.00;
    const chocolateTotal4 = getInputValue('chocolate4') * 20.00; 
    const chocolateTotal5 = getInputValue('chocolate5') * 50.00; 

    const subTotal = chocolateTotal1 + chocolateTotal2 + chocolateTotal3 + chocolateTotal4 + chocolateTotal5;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;


    document.getElementById('sub-total').innerText = subTotal.toFixed(2);
    document.getElementById('tax-amount').innerText = tax.toFixed(2);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

 
document.getElementById('chocolate1-plus').addEventListener('click', function () {
    updateChocolateNumber('chocolate1', 5.00, true); 
});

document.getElementById('chocolate1-minus').addEventListener('click', function () {
    updateChocolateNumber('chocolate1', 5.00, false);
});

 
document.getElementById('chocolate2-plus').addEventListener('click', function () {
    updateChocolateNumber('chocolate2', 10.00, true); 
});

document.getElementById('chocolate2-minus').addEventListener('click', function () {
    updateChocolateNumber('chocolate2', 10.00, false); 
});

 
document.getElementById('chocolate3-plus').addEventListener('click', function () {
    updateChocolateNumber('chocolate3', 15.00, true); 
});

document.getElementById('chocolate3-minus').addEventListener('click', function () {
    updateChocolateNumber('chocolate3', 15.00, false); 
});


document.getElementById('chocolate4-plus').addEventListener('click', function () {
    updateChocolateNumber('chocolate4', 20.00, true); 
});

document.getElementById('chocolate4-minus').addEventListener('click', function () {
    updateChocolateNumber('chocolate4', 20.00, false); 
});


document.getElementById('chocolate5-plus').addEventListener('click', function () {
    updateChocolateNumber('chocolate5', 50.00, true); 
});

document.getElementById('chocolate5-minus').addEventListener('click', function () {
    updateChocolateNumber('chocolate5', 50.00, false);
});
