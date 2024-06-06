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


function saveItem() {
    let iId = $('#item_id').val();
    let iName = $('#item_name').val();
    let iQuantity = $('#quantity').val();
    let iPrice = $('#price').val();

    if (validation(iId, iName, iQuantity, iPrice)) {
        let itemObj = new ItemModel(iId, iName, iQuantity, iPrice);
        itemArray.push(itemObj);
        loadItem();
        saveItemClearField();
    }
}

function validation(id, name, quantity, price) {
    let isValid = true;

    let idError = document.getElementById('i-id-error');
    let nameError = document.getElementById('i-name-error');
    let quantityError = document.getElementById('i-quantity-error');
    let priceError = document.getElementById('i-price-error');

    // Validate Item Id
    if (!id.match(/^C00-\d{3}$/)) {
        idError.style.display = 'inline';

        idError.innerHTML = "Item Id format is incorrect";
        isValid = false;
    } else {
        idError.style.display = 'none';
    }

    // Validate Item Name
    if (name.trim() ==='') {
        nameError.style.display = 'inline';
        nameError.innerHTML = "Item Name is required";
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validate Quantity
    if (quantity.trim() === '' ||/1/) {
        quantityError.style.display = 'inline';
        quantityError.innerHTML = "Quantity is required";
        isValid = false;
    } else {
        quantityError.style.display = 'none';
    }

    // Validate Price
    if (price.trim() === '') {
        priceError.style.display = 'inline';
        priceError.innerHTML = "Price is required";
        isValid = false;
    } else {
        priceError.style.display = 'none';
    }

    return isValid;
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


