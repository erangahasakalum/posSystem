class Customer{
    constructor(customer_id,customer_name,city,telephone) {
        this.id =customer_id;
        this.name = customer_name;
        this._customer_id = customer_id;
        this._customer_name = customer_name;
        this._city = city;
        this._telephone = telephone;

    }

    get customer_id() {
        return this._customer_id;
    }

    set customer_id(value) {
        this._customer_id = value;
    }

    get customer_name() {
        return this._customer_name;
    }

    set customer_name(value) {
        this._customer_name = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get telephone() {
        return this._telephone;
    }

    set telephone(value) {
        this._telephone = value;
    }
}