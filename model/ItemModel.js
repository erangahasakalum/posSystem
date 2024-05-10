export default class ItemModel {
    constructor(item_id, item_name, quantity, price) {
        this._item_id = item_id;
        this._item_name = item_name;
        this._quantity = quantity;
        this._price = price;

    }

    get item_id() {
        return this._item_id;
    }

    set item_id(value) {
        this._item_id = value;
    }

    get item_name() {
        return this._item_name;
    }

    set item_name(value) {
        this._item_name = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}