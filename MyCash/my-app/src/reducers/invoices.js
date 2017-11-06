let date = new Date();
let year = date.getUTCFullYear();
let month = date.getUTCMonth() + 1;
let day = date.getDate();

let invoiceArray = [{
    type: "car",
    date: day + "/" + month + "/" + year,
    cost: 123,
    expensesType: "car",
    what: "used for emphasis with a followitioning as an adverb.",
    settings: "aaaa"
}];




export default function invoiceList(state = invoiceArray, action) {
    if (action.type === "ADD_INVOICES") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}