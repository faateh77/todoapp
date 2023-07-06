import { auth,createUserWithEmailAndPassword, } from "authconfig.js";
var email = document.getElementById("email");
var username = document.getElementById("username");
var password = document.getElementById("password");

window.signup = function() {
   var obj = {
    name :username.value,
    useremail:email.value,
    userpassword :password.value,
   };


createUserWithEmailAndPassword(auth,obj.email,obj.password).then((res) =>{
    console.log(res.user);
    alert("User has been Created sucessfully");
})
.catch(function(err){
  console.log(err);
});

};






