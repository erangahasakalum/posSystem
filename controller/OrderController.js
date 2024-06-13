import {orderArray} from "../db/db.js";
import OrderModel from "../model/OrderModel.js";


$('#add-to-cart').on('action',()=>{
    addToCart();
})

function addToCart() {
    let oId = $('#OrderID').val();
    let date = $('#date').val();
    let customerId = $('#customer-idO').val();
    let customerName = $('#customer-nameO').val();
    let city = $('#city-name').val();
    let mobile = $('#mobile').val();
    let itemCode = $('#item-code').val();
    let itemName = $('#item-name').val();
    let qtyOnHand = $('#item-qty-on-hand').val();
    let orderQty = $('#order-qty').val();
    let price = $('#t-price').val();
    let discount = $('#t-discount').val();


}