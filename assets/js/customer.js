import Customer from "../../model/customer.model.js";
import {customerar} from "../../db/db.js";


// save customer
$("#customer-save").on('click',()=>{
    let customer_id = $("#customer_id").val();
    let customer_name = $("#customer_name").val();
    let city = $("#city").val();
    let telephone = $("#telephone").val();

    let customerObj = new Customer(customer_id,customer_name,city,telephone);

    customerar.push(customerObj);
    console.log(customerObj.id);

});

