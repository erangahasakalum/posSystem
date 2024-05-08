// customer array
var customerAr =[];

// save customer
$("#customer-save").on('click',()=>{
    let customer_id = $("#customer_id").val();
    let customer_name = $("#customer_name").val();
    let city = $("#city").val();
    let telephone = $("#telephone").val();

    let customerObj = new Customer(customer_id,customer_name,city,telephone);

    // customerObj push array
   // customerAr.push(customerObj);
    console.log(customerObj.id);

});

