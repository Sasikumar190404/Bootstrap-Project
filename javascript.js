
const authBtn = document.getElementById("authBtn");

// Check login state from localStorage
function checkAuth() {
  if (localStorage.getItem("loggedIn") === "true") {
    authBtn.textContent = "Sign In";
  } else {
    authBtn.textContent = "Sign Out";
  }
}


// Handle button click
authBtn.addEventListener("click", function () {
  if (localStorage.getItem("loggedIn") === "true") {
    // If logged in → log out
    localStorage.removeItem("loggedIn");
    window.location.href = "signin.html"; // Redirect to your login page
    
  } else {
    // If logged out → go to login page
    window.location.href = "signin.html";
      window.alert(" You're Signed out")
  }
});


checkAuth();


let cart = [];
let total = 0;

function addToCart(productName, price, img) {
  cart.push({ name: productName, price, image: img });
  total += price;
  updateCart();
  openCart();
}

function updateCart() {
  let cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    cartList.innerHTML += `
      <li class="list-group-item d-flex align-items-center">
        <img src="${item.image}" alt="${item.name}" width="50" height="50" class="me-2 rounded">
        <div class="flex-grow-1">
          <strong>${item.name}</strong><br>
          $${item.price}
        </div>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">x</button>
      </li>
    `;
  });

  document.getElementById("cartTotal").innerText = total;
  document.getElementById("cartCount").innerText = cart.length; // update count badge
}


function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Sidebar controls
function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
}
