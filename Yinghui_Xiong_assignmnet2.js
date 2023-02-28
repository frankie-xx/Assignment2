/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
  ];

let doubleItem = itemsObject.map((item) => {
    return {quantity: item.quantity * 2, price: item.price * 2}
});
console.log("new array which doubles the quantity and price in each object:");
console.table(doubleItem);

let filteredItem = itemsObject.filter((item) => {
    return item.quantity > 2 && item.price > 300
});
console.log("new array which contains item quantity > 2 and price > 300 only:");
console.table(filteredItem);

let total = itemsObject.reduce((acc, item)=>{
    return acc + item.price * item.quantity;
}, 0)
console.log("total value:" + total);

/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/

const string =
' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';
const expectedReturnString =
'perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array';


let resString = string.trim()
                      .replace(/(\s)+|[^a-zA-Z]/g, " ")
                      .toLowerCase();

console.log("result string:" + resString);
console.log(resString === expectedReturnString);




/*
Question 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/

const first = [
{ uuid: 2, name: 'test' },
{ uuid: 5, name: 'test5' },
{ uuid: 3, name: 'test3' },
];

const second = [
{ uuid: 6, role: 'pm' },
{ uuid: 4, role: 'engineer' },
{ uuid: 1, role: 'manager' },
{ uuid: 2, role: 'associate' },
];

const expectedReturnArray = [
{ uuid: 1, role: 'manager', name: null },
{ uuid: 2, role: 'associate', name: 'test' },
{ uuid: 3, role: null, name: 'test3' },
{ uuid: 4, role: 'engineer', name: null },
{ uuid: 5, role: null, name: 'test5' },
{ uuid: 6, role: 'pm', name: null },
];

const findUuidIndex = (uuid, resArray) => {
    for(let i=0; i < resArray.length; i++) {
        if(resArray[i].uuid === uuid) {
            return i;
        }
    }
    return -1;
}

// deep copy object from first array
let resArray = first.map((ele) => {
    let newEle = JSON.parse(JSON.stringify(ele));
    newEle.role = null;
    return newEle;
});

console.table(resArray);

for(let i=0; i < second.length; i++) {
    let curEle = second[i];
    let curIndex = findUuidIndex(curEle.uuid, resArray);
    if(curIndex !== -1) {
        resArray[curIndex].role = curEle.role;
    } else {
        let newEle = JSON.parse(JSON.stringify(curEle));
        newEle.name = null;
        resArray.push(newEle);
    }
}


/* 
    when we return 1, 
    b takes precedences in sorting over a, otherwise, 
    it would do the opposite 
*/
resArray.sort((a, b) => (a.uuid > b.uuid ? 1 : -1));

console.table(resArray);




