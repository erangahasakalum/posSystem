import ItemModel from "../model/ItemModel.js";
import {itemArray} from "../db/db.js";

let recodeIndex;
$("#item-save").on('click', () => {
    saveItem();
})

$('#update-item').on('click', () => {
    updateItem();
})

$('#delete-item').on('click', () => {
    deleteItem();
})

function focus() {
    
}
function saveItem() {
    let iId = $('#item_id').val();
    let iName = $('#item_name').val();
    let iQuantity = $('#quantity').val();
    let iPrice = $('#price').val();

    function ();

    validation(iId,iName,iQuantity,iPrice);

    let itemObj = new ItemModel(
        iId,
        iName,
        iQuantity,
        iPrice
    );

    itemArray.push(itemObj);
    loadItem();
    saveItemClearField()
}

function validation(id,name,quantity,price) {

}



function loadItem() {
    $('#item-table-tbody').empty();

    itemArray.map((item) => {
        let customerRecode = `<tr>
            <td class="i-id">${item.item_id}</td>
            <td class="i-name">${item.item_name}</td>
            <td class="i-quantity">${item.quantity}</td>
            <td class="i-price">${item.price}</td>
        </tr>`

        $('#item-table-tbody').append(customerRecode);
    })

}

$("#item-table").on('click', 'tr', function () {
    let idI = $(this).find('.i-id').text();
    let nameI = $(this).find('.i-name').text();
    let quantityI = $(this).find('.i-quantity').text();
    let priceI = $(this).find('.i-price').text();

    recodeIndex = $(this).index();
    $('#i_id').val(idI);
    $('#i_name').val(nameI);
    $('#i_quantity').val(quantityI);
    $('#i_price').val(priceI);

    $('#d-id').val(idI);
    $('#d-name').val(nameI);


})

function saveItemClearField() {
    $('#item_id').val('');
    $('#item_name').val('');
    $('#quantity').val('');
    $('#price').val('');
}

function updateItem() {
    let iId = $('#i_id').val();
    let iName = $('#i_name').val();
    let iQuantity = $('#i_quantity').val();
    let iPrice = $('#i_price').val();

    let itemArrayElement = itemArray[recodeIndex];
    itemArrayElement.item_id = iId;
    itemArrayElement.item_name = iName;
    itemArrayElement.quantity = iQuantity;
    itemArrayElement.price = iPrice;

    loadItem();
    clearUpdateField();
}

function clearUpdateField() {
    $('#i_id').val('');
    $('#i_name').val('');
    $('#i_quantity').val('');
    $('#i_price').val('');
}

function deleteItem() {
    itemArray.splice(recodeIndex, 1);
    loadItem();

}


