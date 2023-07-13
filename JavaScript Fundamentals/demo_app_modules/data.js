import fs from 'node:fs/promises';

//Reading a file and writing data to the file system
export const loadDataFromFile = async () => {
    console.log("Loading Employees...");
    try{
        const fileData = await fs.readFile('./data/employeeData.json', 'utf8');
        return JSON.parse(fileData);
    }
    catch{
        console.log("Error reading / parsing the employee file");
        throw err;
    }
}

//Reading a file and writing data to the file system
export const writeDataToFile = async (employees) => {
    console.log("Saving Employees...");
    try{
        await fs.writeFile('./data/employeeData.json', JSON.stringify(employees, null, 2));
    }
    catch{
        console.log("Error while saving data to the employee file");
        throw err;
    }
}