let userinfo =document.querySelector("#user-info")
let userdata =document.querySelector("#user")
let links =document.querySelector("#links")
let shop =document.querySelector(".shopping")
if (localStorage.getItem("username")){
   links.remove()
   shop.style.display= "block"
   userinfo.style.display= "flex"
   userdata.innerHTML =localStorage.getItem("username")
}
// log out from website
let logoutbtn=document.querySelector("#logout")
logoutbtn.addEventListener("click",function (){
   localStorage.clear();
   setTimeout(() => {
      window.location="login.html";
   },1500)
})
// taskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk oop
class Shape {
   constructor() {
       if (new.target === Shape) {
           throw new Error("Cannot instantiate Shape directly");
       }
   }
}
class Rectangle extends Shape {
   static count = 0;

   constructor(width, height) {
       super();
       this.width = width;
       this.height = height;
       Rectangle.count++;
   }
   area() {
       return this.width * this.height;
   }
   perimeter() {
       return 2 * (this.width + this.height);
   }
   displayInfo() {
       const area = this.area();
       const perimeter = this.perimeter();
       return `Rectangle: Width = ${this.width}, Height = ${this.height}, Area = ${area}, Perimeter = ${perimeter}`;
   }
   toString() {
       const area = this.area();
       const perimeter = this.perimeter();
       return `Rectangle: Width = ${this.width}, Height = ${this.height}, Area = ${area}, Perimeter = ${perimeter}`;
   }
   static getCount() {
       return Rectangle.count;
   }
}
class Square extends Rectangle {
   constructor(side) {
       super(side, side);
   }
}
// Example usage
try {
   const rect = new Rectangle(10, 5);
   console.log(rect.displayInfo()); // Displays rectangle info
   console.log(rect.toString());     // Displays rectangle info

   const square = new Square(4);
   console.log(square.displayInfo()); // Displays square info
   console.log(square.toString());     // Displays square info

   console.log(`Total Rectangles Created: ${Rectangle.getCount()}`); // Displays total counts
} catch (error) {
   console.error(error);
}
