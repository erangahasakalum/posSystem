import CustomerModel from "../model/CustomerModel.js";
import {customerArray} from "../db/db.js";

var recodeIndex;
$('#customer-save').on('click',()=>{
   saveCustomer();
})

$('#customer-update').on('click',()=>{
    updateCustomer();
})

$('#delete-customer').on('click',()=>{
    deleteCustomers();
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
    clearSaveFields();
}

function loadCustomer(){
    $('#customer-table-tbody').empty();

    customerArray.map((item)=>{
        let customerRecodes = `<tr> 
            <td class="c-id">${item.customer_id}</td>
            <td class="c-name">${item.customer_name}</td>
            <td class="c-city">${item.city}</td>
            <td class="c-telephone">${item.telephone}</td>
        </tr>`
        $('#customer-table-tbody').append(customerRecodes);
    })
}

$('#customer-table').on('click','tr',function (){
    let idC = $(this).find('.c-id').text();
    let nameC =$(this).find('.c-name').text();
    let cityC =$(this).find('.c-city').text();
    let telephoneC =$(this).find('.c-telephone').text();

    recodeIndex = $(this).index();

    $("#c_id").val(idC);
    $("#c_name").val(nameC);
    $("#c_city").val(cityC);
    $("#c_telephone").val(telephoneC);

    $('#delete-id').val(idC);
    $('#delete-name').val(nameC);
})

function updateCustomer() {
    let idU = $('#c_id').val();
    let nameU = $('#c_name').val();
    let cityU = $('#c_city').val();
    let telephoneU = $('#c_telephone').val();

    let customerArrayElement = customerArray[recodeIndex];
    customerArrayElement.customer_id =idU;
    customerArrayElement.customer_name =nameU;
    customerArrayElement.city =cityU;
    customerArrayElement.telephone =telephoneU;

    loadCustomer();
    clearUpdateFields();
}

function clearSaveFields(){
    $('#customer_id').val('');
    $('#customer_name').val('');
    $('#city').val('');
    $('#telephone').val('');
}

function clearUpdateFields() {
    $('#c_id').val('');
    $('#c_name').val('');
    $('#c_city').val('');
    $('#c_telephone').val('');
}

function deleteCustomers() {
    customerArray.splice(recodeIndex,1);
    loadCustomer();

}

