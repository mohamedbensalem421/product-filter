import {products} from "./data.js"
const company = document.querySelectorAll("li")
const section = document.querySelector("section")
const input = document.querySelector("input")

function getProducts (products){
  if(products.length == 0){
    return section.innerHTML = "<h6>Sorry, no products matched you search</h6>"
  }
  section.innerHTML = products.map(({img, title, price ,company}) =>{
    return `
    <article class= ${company}>
      <img src=${img} alt="">
      <p class="title">${title}</p>
      <p class="price">${price}</p>
    </article>
    `
  }).join("")
}
getProducts(products)

company.forEach((e) =>{
  e.onclick = () => {
    input.value = ""
    if(e.textContent === "All"){
      return getProducts(products)
    }
    const filterdProducts = products.filter(({company}) => company.includes(e.textContent));
    getProducts(filterdProducts)
  }
})

input.addEventListener("keyup", () =>{
  const filterdProducts = products.filter(({title}) => title.toLowerCase().includes(input.value));
  getProducts(filterdProducts)
})
