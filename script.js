function loadSiteInfo() {
  document.getElementById("siteLogo").src = localStorage.getItem("logo") || "assets/logo.png";
  document.getElementById("siteEmail").textContent = localStorage.getItem("email") || "eshop@example.com";
  document.getElementById("sitePhone").textContent = localStorage.getItem("phone") || "+91-9999999999";
}

function loadAdminData() {
  document.getElementById("logoUrl").value = localStorage.getItem("logo") || "assets/logo.png";
  document.getElementById("contactEmail").value = localStorage.getItem("email") || "eshop@example.com";
  document.getElementById("contactPhone").value = localStorage.getItem("phone") || "+91-9999999999";
  loadProducts(true);
}

function saveSiteInfo() {
  localStorage.setItem("logo", document.getElementById("logoUrl").value);
  localStorage.setItem("email", document.getElementById("contactEmail").value);
  localStorage.setItem("phone", document.getElementById("contactPhone").value);
  alert("Site info saved!");
}

function loadProducts(forAdmin = false) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const container = document.getElementById(forAdmin ? "adminProductList" : "productList");
  container.innerHTML = '';
  products.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <strong>₹${p.price}</strong><br>
      ${forAdmin ? `<button onclick="deleteProduct(${i})">Delete</button>` : ""}
    `;
    container.appendChild(card);
  });
}

function addProduct() {
  const name = document.getElementById("pname").value;
  const desc = document.getElementById("pdesc").value;
  const price = document.getElementById("pprice").value;

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({ name, description: desc, price });
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts(true);
}

function deleteProduct(i) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts(true);
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("adminLoggedIn");
  location.href = "login.html";
}
