document.addEventListener ('DOMContentLoaded',() => {
    const Product=document.getElementById ('Productlist');
    cosnt =categorydocument.getElementById ('category');
    }
)


async function productfetch(){

    try{
        const response =await fetch ('https://fakestoreapi.com/products');
        const data =await response.json();
        productData =data;
        displayProduct (productData);

    }
};


function displayProducts (products){
    const productlist =textContent = `${product.name} ${product.price} ${rates}`
    productlist.innerHTML='';
    product.forEach (Product => {
    cosnt productItems =document.createElement('div');
    productItems.classList.add ('product-item');
    prodductItem.innerHTML=`
    textContent = `${product.name} ${product.price} ${rates}`
    <h2>${products}</h2>
    <h3>${price}</h3>`
    });
}
