import ItemModel from "../model/ItemModel.js";
import {itemArray} from "../db/db.js";


$("#item-save").on('click', () =>{
    console.log('click')
    let item_id = $('#item_id').val();
    let item_name = $("#item-name").val();
    let quantity = $("#quantity").val();
    let price = $("#price").val();

    let itemObj = new ItemModel(item_id,
        item_name,
        quantity,
        price
    );

    itemArray.push(itemObj);
    console.log(itemObj)
    loadItemTable();
})

function loadItemTable() {
    $("#item-table").empty();

    itemArray.map((item) => {

        let itemRecode = `<tr>
            <td>${item.item_id}</td>
            <td>${item.item_name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            </tr>`

        $("#item-table").append(itemRecode);
    });

}