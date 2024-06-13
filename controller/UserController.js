import UserModel from "../model/UserModel.js";
import {userArray} from "../db/db.js";

$('#save-user-btn').on('click',()=>{
    saveUser();
})

$('#login-btn').on('click',()=>{
    getAllUser();
})


function saveUser() {
    let userName = $('#save-userName').val();
    let password = $('#save-password').val();

   let regUserName = /^[a-zA-Z0-9._-]{3,16}$/;
   let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


   if (regUserName.test(userName)){
       if (regPassword.test(password)){

           let userObj = new UserModel(userName,password);
           userArray.push(userObj);
       }else {
           alert('password')
       }
   }else {
       alert('username')
   }

}

function getAllUser(){

    let user = userArray.indexOf("Password1!");
    console.log(user)
}