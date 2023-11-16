// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {
    for (let key in data) {
        
        let value = +data[key];
        value = value.toFixed(2);

        newKey = key.toLowerCase();

        data[newKey] = value;        
        delete data[key];

    }
    return data;
};

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}