



import{
    signInWithEmailAndPassword,
    auth,
}from "./firebase.js"

const loginHandler = async ()=>{
    try{
        const email = document.querySelector("#email")
        const password = document.querySelector("#password")
        // console.log(email.value , password.value);

        const res = await signInWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );
        // console.log("response", response.user.uid)

        localStorage.setItem("user" , res.user.uid)
        window.location.replace("../index.html")
        
    }catch(error){
        console.log(error.message)
        alert("username or passowrd incorrect")
    }
};
window.loginHandler = loginHandler






