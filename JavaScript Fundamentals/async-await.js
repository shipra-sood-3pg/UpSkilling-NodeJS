import fs from 'node:fs/promises';

async function loadData() {
    try{
        const data = await fs.readFile('./data/employeeData.json', 'utf8');
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log('Complete');
    }
    catch{
        console.log("Error reading / parsing the file");
        throw err;
    }
}

loadData().then(() => console.log("Promise completed"));