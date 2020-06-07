let products =[
    {
        name: "pepsi",
        type: "Unit",
        quantity: 100
    },
    
    {
        name: "cola",
        type: "unit",
        quantity: 120
    
    },

    {
        name: "tomato",
        type: "kilo",
        quantity: 120
    
    },
    {
        name: "cucumber",
        type: "kilo",
        quantity: 120
    
    },
    {
        name: "eggs",
        type: "unit",
        quantity: 1000
    
    },
    {
        name: "cheese",
        type: "unit",
        quantity: 120
    
    },
    {
        name: "kiwi",
        type: "kilo",
        quantity: 120
    
    },

]







function getproducts(x){
    console.log(x);
}

getproducts(products);


function addNewProduct(x){
    products.push (x);
    console.log(products);
    
}

addNewProduct({name:"chocolate",
    type:"unit",
     quantity: 120});


function updateQuantity (products,name,quantity) {
    products.forEach(element => {
        if(element.name === name) {
            element.quantity = quantity
        }
        return element;
    });
    console.log (products);
}
updateQuantity(products,"tomato",1000);

