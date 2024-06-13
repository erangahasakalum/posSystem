export default class OrderModel {
    constructor(orderId, date, customerId, cusName, city, tel, itemCode, QtyOnHand, itemName, orderQTY, discount, price) {
        this._orderId = orderId;
        this._date = date;
        this._customerId = customerId;
        this._cusName = cusName;
        this._city = city;
        this._tel = tel;
        this._itemCode = itemCode;
        this._QtyOnHand = QtyOnHand;
        this._itemName = itemName;
        this._orderQTY = orderQTY;
        this._discount = discount;
        this._price = price;
    }


    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get customerId() {
        return this._customerId;
    }

    set customerId(value) {
        this._customerId = value;
    }

    get cusName() {
        return this._cusName;
    }

    set cusName(value) {
        this._cusName = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get tel() {
        return this._tel;
    }

    set tel(value) {
        this._tel = value;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get QtyOnHand() {
        return this._QtyOnHand;
    }

    set QtyOnHand(value) {
        this._QtyOnHand = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get orderQTY() {
        return this._orderQTY;
    }

    set orderQTY(value) {
        this._orderQTY = value;
    }

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}