import CustomerModel from "../model/CustomerModel.js";
import {customerArray} from "../db/db.js";


// save customer
$("#customer-save").on('click', () => {
    let customer_id = $("#customer_id").val();
    let customer_name = $("#customer_name").val();
    let city = $("#city").val();
    let telephone = $("#telephone").val();

    let customerObj = new CustomerModel(
        customer_id,
        customer_name,
        city,
        telephone
    );
    customerArray.push(customerObj);
    loadTable();

});

function loadTable() {
    $("#customer-table").empty();

    customerArray.map((item,) => {
        let customerRecode = `<tr> 
            <td>${item.customer_id}</td>
            <td>${item.customer_name}</td>
            <td>${item.city}</td>
            <td>${item.telephone}</td>
        </tr>`

        $("#customer-table").append(customerRecode);

    });
}

