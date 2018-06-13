const array = [4,7,3,6,9,2,5]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray
const map = (array, iteratee) => {
    const mappedArray = [];
    for (let i = 0; i <array.length; i++) {
        mappedArray.push(iteratee(array[i]));
    }
    return mappedArray;
};
map (array, iteratee=>iteratee*2);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
const filter = (array, iteratee) => {
    const filteredArray = [];
    for(let i = 0; i < array.length; i++) {
        if (iteratee(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
filter (array, item => item % 3 === 0);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
const find = (array, fnc) => {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === 5) {
            return array[i];
        }
    }
};
find(array);



//return the last item in theArray
const findLast = (array) => {
    return array[array.length - 1];
}
findLast(array);


//return the first element of the array
const findFirst = (array) => {
    return array[0];
}
findFirst(array);


//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
const reverse = (array) => {
    const newArray = [];
    for(let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray;
}
reverse(array);

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
const tail = (array) => {
    const differentArray = [];
    for(let i = 1; i < array.length; i++) {
        differentArray.push(array[i])
    }
    return differentArray;
}
tail(array);

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
const sortThings = (array) => {
    let sorted = false;
    while(!sorted) {
        sorted = true;
            for(let i = 0; i < array.length - 1; i++) {
                if(array[i] > arr [i + 1]) {
                    let holdingPattern = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = holdingPattern;
                    sorted = false;
                }
            }
    }
    return array;
}
sortThings(array);

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;
