//Import Node filesystem module (promises)
import fs from 'node:fs/promises';
import fsCallback from 'node:fs';

// Read the file with the promises API
fs.readFile('./data/employeeData.json', 'utf8')
    .then(data => {
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log('Complete');
    })
    .then(() => readfile('employeeData.json'))
    .then(data => console.log(data))
    .catch(err => {
        console.log("Error reading / parsing the file");
        throw err;
    });


//Creating the custom promise with the callback api
const readfile = async (filename) => {
    return new Promise((resolve, reject) => {
        fsCallback.readFile(`./data/${filename}`, 'utf8', (err, data) => {
            if (err){
                reject(err);
            }        
            resolve(data);
        });
    });
}

//concurrent promises
/*
Promise.all() : 
The method takes an collection of promises as an input and returns a single Promise.
The single promise fulfills when all the input promises resolve individually with an array of the fulfillment values
It rejects when any of the promise rejects with the rejection reason of the first input promise that got rejected

It is typically used when 
    - the tasks are dependent on each other
    - if one needs to immediately reject upon any of them rejecting
*/
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const inputPromises = [promise1, promise2, promise3];

Promise.all(inputPromises).then((values) => {
    console.log(values);
  });

/*  
Promise.allSettled()
This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed).
It returns an array of objects that describe the outcome of each promise in the order of the promises passed, regardless of completion order.

Each outcome object has the following properties
  - status  => string, either "fulfilled" or "rejected", indicating the eventual state of the promise.
  - value => only present if status is "fulfilled". The value that the promise was fulfilled with.  
  - reason => Only present if status is "rejected". The reason that the promise was rejected with.

It's typically used when 
    - we have multiple asynchronous tasks that are not dependent on one another to complete successfully
    - we need like to know the result of each promise.
*/

Promise.allSettled(inputPromises).
  then((results) => results.forEach((result) => console.log(result.status)));

/*
Promise.any()
The Promise.any() static method takes an iterable of promises as input and returns a single Promise. 
The single promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 
It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.
*/

Promise.any(inputPromises).then((value) => console.log(value));

/*
Promise.race()
It takes an iterable of promises as input and returns a single Promise. 
This returned promise settles with the eventual state of the first promise that settles.

*/
const racePromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const racePromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
Promise.race([racePromise1, racePromise2]).then((value) => {
    console.log(value);
  });

  /*
  Promise.prototype.catch() : catch(onRejected)
  The method defines the function to be called when the given promise is rejected
  It returns an equivalent Promise object, allowing you to chain calls to other promise methods.
  */
  const catchPromise = new Promise( (resolve, reject) => {
    throw new Error("Some exception occurred!!")
  })
  catchPromise.catch((err) => {
    console.log(err.message);
  });


  /*
  Promise.prototype.then()
  Syntax :      then(onFulfilled)
                then(onFulfilled, onRejected)
 The method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. 
 It returns an equivalent Promise object, allowing to chain calls to other promise methods.
  */
 const thenPromise = new Promise((resolve, reject) => {
    resolve('Success!');
  });
  
  thenPromise.then((value) => {
    console.log(value);
    // Expected output: "Success!"
  });
  