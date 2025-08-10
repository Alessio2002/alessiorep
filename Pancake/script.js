function getPrice() {
    let price = 0;

    price += parseFloat(document.getElementById("type").value);

    document.querySelectorAll(".topping").forEach(element => {
        if (element.checked){
            price += parseFloat(element.value);
        }
    })
    document.querySelectorAll(".extra").forEach(element => {
        if (element.checked){
            price += parseFloat(element.value);
        }
    
    });

    // Extras
    document.querySelectorAll(".extra").forEach(element => {
        if (element.checked){
            price += parseFloat(element.value);
        }
    });

    // Delivery (add selected delivery cost)
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
    if (selectedDelivery) {
        price += parseFloat(selectedDelivery.dataset.price);
    }

    // Total price displays
    document.querySelectorAll(".totalPrice").forEach(element => {
        element.textContent = `${price.toFixed(2)}€`;
    });

    //total price display
    const totalPriceDisplay = document.getElementById("totalPriceDisplay");
    if (totalPriceDisplay) {
        totalPriceDisplay.textContent = `${price.toFixed(2)}€`;
    }
}

// Event listeners
document.getElementById("type").addEventListener("change", getPrice);
document.querySelectorAll("input").forEach(input => input.addEventListener("input", getPrice));

// Initialize on page load
getPrice();

//check delivery info button below

const checkDeliveryButton = document.getElementById('checkDeliveryButton'); // Ensure this ID matches your button in the HTML
checkDeliveryButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior

    // Gather customer information and pancake type
    const customerName = document.getElementById('customerName').value.trim();
    const typeSelect = document.getElementById('type');
    const selectedPancake = typeSelect.options[typeSelect.selectedIndex].text;

    // Gather selected filling
    const selectedFillings = [];
    document.querySelectorAll('.topping:checked').forEach(filling => {
        selectedFillings.push(filling.parentElement.textContent.trim());
    });
    const fillingText = selectedFillings.length > 0 ? selectedFillings.join(', ') : "Not selected";

    // Gather selected extras
    const selectedExtras = [];
    document.querySelectorAll('.extra:checked').forEach(extra => {
        selectedExtras.push(extra.parentElement.textContent.trim());
    });
    const extrasText = selectedExtras.length > 0 ? selectedExtras.join(', ') : "No extras selected";

    // Gather selected delivery method
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
    const deliveryText = selectedDelivery ? selectedDelivery.parentElement.textContent.trim() : "No delivery method selected";

    // Get the summary container (assume it's a <ul>)
    const summaryList = document.getElementById('summaryList'); // Ensure this ID matches your <ul> in the HTML
    summaryList.innerHTML = ''; // Clear any previous summary

    // Add customer name to the list
    const customerNameItem = document.createElement('li');
    customerNameItem.textContent = customerName
        ? `Customer Name: ${customerName}`
        : `Customer Name: Not provided`;
    summaryList.appendChild(customerNameItem);

    // Add chosen pancake to the list
    const pancakeItem = document.createElement('li');
    pancakeItem.textContent = `Chosen Pancake: ${selectedPancake}`;
    summaryList.appendChild(pancakeItem);

    // Add selected filling to the list
    const fillingItem = document.createElement('li');
    fillingItem.textContent = `Chosen Filling: ${fillingText}`;
    summaryList.appendChild(fillingItem);

    // Add selected extras to the list
    const extrasItem = document.createElement('li');
    extrasItem.textContent = `Extras: ${extrasText}`;
    summaryList.appendChild(extrasItem);

    // Add selected delivery method to the list
    const deliveryItem = document.createElement('li');
    deliveryItem.textContent = `Delivery Method: ${deliveryText}`;
    summaryList.appendChild(deliveryItem);

    // Add total price to the list
    const totalPriceDisplay = document.getElementById('totalPriceDisplay');
    if (totalPriceDisplay) {
        const priceItem = document.createElement('li');
        priceItem.textContent = `Total Price: ${totalPriceDisplay.textContent}`;
        summaryList.appendChild(priceItem);
    }
});