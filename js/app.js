window.addEventListener("load" ,()=>{
    if(!localStorage.getItem("user")){
      window.location.replace("../pages/login.html")
    }
  });

import{
    addDoc,
    collection,
    db,
    deleteDoc,
    updateDoc,


}from "./firebase.js"






const logOutbtn = document.getElementById("logOut")
 logOutbtn.addEventListener("click" , ()=>{
    console.log("hello")
    localStorage.removeItem("user")
    window.location.replace("../pages/login.html")
 });



