const apiUrl = "http://127.0.0.1:8000/api/products/";

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function displayProducts(products) {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = ""; // Clear previous content

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className =
            "shadow-2xl rounded-md text-start max-w-xs border-gray-500 border-1 mx-2 my-4";
        productDiv.innerHTML = `
        <p class="font-semibold text-center" style="font-size: 40px">
          ₹ <span class="mt-2">${parseFloat(product.unit_price).toFixed(
              2
          )}</span>
        </p>
        <p class="text-gray-500 text-center">
          ${product.name}
        </p>
        <div class="text-left mx-10">
          ${product.description}
        </div>
        <div class="flex flex-col items-center">
          <button type="button"
              class="items-center mt-5 my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Build Resume
          </button>
        </div>
      
    `;

        productsContainer.appendChild(productDiv);
    });
}

fetchProducts();
