//Node Filesystem module (callback)

import fs from "node:fs";

fs.readFile('./data/employeeData.json', 'utf8', (err, data) => {
    if (err){
        console.log('Error reading the file');
        throw err;
    }

    try {
        const resultSet = JSON.parse(data);
        console.log(resultSet);
        console.log("Complete");
    }
    catch{
        console.error("Cannot parse JSON from the file");
        throw err;
    }
});

//
// fs.readFile('./data/x.json', 'utf8', (err, data) => {
//     if (err){
//         console.log('Error reading the file');
//         throw err;
//     }

//     const resultSet = JSON.parse(data);
//     console.log(resultSet);
//     console.log("Complete");
// });