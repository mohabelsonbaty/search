function search() {
  let searchBar = document.querySelector(".search-input").value.toUpperCase();
  let product = document.querySelectorAll(".product");

  for (let i = 0; i < product.length; i++) {
    let productName = product[i].getElementsByTagName("h2")[0];
    if (productName.innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
  }
}
