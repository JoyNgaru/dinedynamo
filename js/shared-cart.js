// shared-cart.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the mini-cart and related elements
    var miniCart = document.querySelector('.mini-cart');
    var cartItemsList = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');
    var payNowButton = document.getElementById('pay-now-button');
  
    // Create an empty shopping cart array
    var shoppingCart = [];
  
    // Function to update the mini-cart UI
    function updateMiniCartUI() {
        console.log('Update Mini Cart UI called');
      // Update the cart items list
      cartItemsList.innerHTML = ''; // Clear the previous content
      shoppingCart.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
      });
  
      // Update the cart total
      var totalAmount = shoppingCart.reduce((total, item) => total + item.price, 0);
      cartTotal.textContent = totalAmount.toFixed(2);
  
      // Display the mini-cart
      miniCart.style.display = 'block';
    }
  
    // Function to handle the click event on the "Pay Now" button
    function payNowHandler() {
      // You can customize this function to implement payment processing logic
      console.log('Payment processed! Items:', shoppingCart);
  
      // Clear the shopping cart after payment (you may want to implement server-side logic)
      shoppingCart = [];
      updateMiniCartUI();
    }
  
    // Add click event listener to the "Pay Now" button
    if (payNowButton) {
      payNowButton.addEventListener('click', payNowHandler);
    }
  });
  