import black from "./images/black.png"
import pink from "./images/pink.png"
import purple from "./images/purple.png"

const datas = [
    
    {
        "id":1,
        "name":"Iphone 11",
        "color":"Black",
       "image":black,
        "price":30000
    },
    
    {
        "id":2,
        "name":"Iphone 12",
        "color":"Pink",
       "image":pink,
        "price":50000
    },
    
    {
        "id":3,
        "name":"Iphone 12 Pro max",
        "color":"Purple",
        "image":purple,
        "price":70000
    },
    {
        "id":4,
        "name":"Iphone 13",
        "color":"Black",
        "image":black,
        "price":40000
    },
    
    {
        "id":5,
        "name":"Iphone 15",
        "color":"Black",
        "image":black,
        "price":120000
    },
    
    {
        "id":6,
        "name":"Iphone 15 pro max", 
        "color":"Black",
        "image":black,
        "price":150000
    }
    
    ]

     
//////////For Addd to cart
    const Cart = [];

    //For total
    const Total = [];

     //Call the container attribute from Div in section tag for appending the childs
     const Container = document.querySelector(".container");     

    const Items = () =>{
        datas.forEach((inso,index)=>{
    
              // Create Div forPics
    const createDiv = document.createElement("div");

    createDiv.setAttribute("class","container");

    //Create Div for Text
    const createDiv1 = document.createElement("div");
    const H3 = document.createElement("h3");
    const H4 = document.createElement("h4");

    H3.textContent = inso.name;
    H4.textContent =`P${inso.price}`

    //create iamge for imagee
    const Image = document.createElement("img");

    //create Buttons
 const Button = document.createElement("button");
 Button.setAttribute("class","buttons")
 Button.textContent ="Buy"
     
     //set The Images
    Image.setAttribute("src",`${inso.image}`);

    //Append Pics
   createDiv.appendChild(Image);

   createDiv1.appendChild(H3);
   createDiv1.appendChild(H4);
   createDiv1.appendChild(Button)
   createDiv.appendChild(createDiv1)
   Container.appendChild(createDiv);

   Clicked(Button,index,inso)
     
     })
     
    }


    const Clicked = (Button,index,inso) =>{

Button.addEventListener("click",()=>{

    alert("Add Items")
    //initialized
    const MContainer = document.querySelector(".MContainer");
    MContainer.innerHTML = ''; // Clear the container
   Cart.push({name:inso.name, color:inso.color, images:inso.image, price:inso.price})

   Cart.forEach((inso,index)=>{
        
    const createDivs = document.createElement("div");

      const createP = document.createElement("p")

      const creatP1 = document.createElement("h4")
   const cretateImage = document.createElement("img");

   cretateImage.setAttribute("src",`${inso.images}`);
   cretateImage.setAttribute("class","imgs")
   createP.textContent = `${inso.name}`

   creatP1.textContent = inso.price

    createDivs.appendChild(cretateImage);
    createDivs.appendChild(createP);
    createDivs.appendChild(creatP1)

   MContainer.appendChild(createDivs)


})
   
Total.push(inso.price)


const Totals = Total.reduce((inso1,inso2)=>  inso1 + inso2,0);
const create3 = document.createElement("h3");
create3.textContent = `Total: ${Totals}`;

document.querySelector(".Price").appendChild(create3)

console.log(Totals)

console.log(Total)
    console.log(Cart)
 
})


    }




export{
   Items,
   Cart
};