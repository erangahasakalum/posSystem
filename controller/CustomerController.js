import CustomerModel from "../model/CustomerModel.js";
import {customerArray} from "../db/db.js";

var recodeIndex;
// save customer
/*$("#customer-save").on('click', () => {
    console.log('clicked')
    saveCustomer();
});

$('#customer-update').on('click',()=>{
    updateCustomer();
});

function saveCustomer(){
    console.log("customer method")
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
}

function loadTable() {
    $("#customer-table").empty();

    customerArray.map((item) => {
        let customerRecode = `<tr> 
            <td>${item.customer_id}</td>
            <td>${item.customer_name}</td>
            <td>${item.city}</td>
            <td>${item.telephone}</td>
        </tr>`

        $("#customer-table").append(customerRecode);

    });
}

function updateCustomer(){
        let customer_id = $("#customer_id").val();
        let customer_name = $("#customer_name").val();
        let city = $("#city").val();
        let telephone = $("#telephone").val();

        let customerObj = customerArray[recodeIndex];

        customerObj.id = customer_id;
        customerObj.name =customer_name;
        customerObj.city =city;
        customerObj.telephone = telephone;

        console.log(customerArray[recodeIndex])

        loadTable();
}

$('#customer-table-tbody').on('click','tr',function (){
        let index = $(this).index();
        recodeIndex =index;

        console.log(recodeIndex);
})*/

$('#customer-save').on('click',()=>{
   saveCustomer();
})



function saveCustomer() {
    let customer_id = $('#customer_id').val();
    let customer_name = $('#customer_name').val();
    let city = $('#city').val();
    let telephone = $('#telephone').val();

    let customerObj = new CustomerModel(
        customer_id,
        customer_name,
        city,
        telephone
    );

    customerArray.push(customerObj);
    loadCustomer();
}

function loadCustomer(){
    $('#customer-table-tbody').empty();

    customerArray.map((item)=>{
        let customerRecodes = `<tr> 
            <td>${item.customer_id}</td>
            <td>${item.customer_name}</td>
            <td>${item.city}</td>
            <td>${item.telephone}</td>
        </tr>`
        $('#customer-table-tbody').append(customerRecodes);
    })

}


