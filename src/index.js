import "./css/style.css"
import { Items} from "./shop"

//Function
Items();



//Bwakananginamo
class main{
constructor(){
   
}
}

class Elements extends main{

    constructor(){
     super();
this.Modal = document.querySelector(".Modals");
   
     this.Carts = document.querySelector(".Addtocart div:nth-child(3)").addEventListener("click",this.Clicks.bind(this));


     //To x the modals

     document.querySelector(".MContainers button").addEventListener("click",this.Exit.bind(this))

    }

 //Method
 Clicks(){

        this.Modal.style.visibility ="visible";
    
 }

 Exit(){
    this.Modal.style.visibility ="hidden"
 }


}


const Properties = new Elements();









