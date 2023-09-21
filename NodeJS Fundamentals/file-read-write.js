import fs from 'node:fs';

const firstOutput = 'Welcome to node.js';
console.log(firstOutput);


//Synchronous File Operations : Blocking code as each step is performed sequentially one after another
//read the content of the files
const fileContent = fs.readFileSync('./SampleFiles/ReadInputData.txt', 'utf-8');
console.log(`The filecontents are:\t ${fileContent} \n`);

//write data to the file
let contentToBeSaved = `${firstOutput} \n\n This is a new file created in nodejs suing the 'node:fs' module`;

//check if the file exists or not 
if (fs.existsSync('./SampleFiles/SaveOutputFile.txt')){
    const currentContents = fs.readFileSync('./SampleFiles/SaveOutputFile.txt', 'utf-8');
    contentToBeSaved = `${currentContents} \n\n ${contentToBeSaved}`;
}
fs.writeFileSync('./SampleFiles/SaveOutputFile.txt', contentToBeSaved);
console.log("filesaved");


//Asynchronous Execution
fs.readFile('./SampleFiles/ReadInputData.txt', 'utf-8', (err, fileContent) =>{
    //console.log(fileContent);
    if (err){
        console.log('Error!!! reading the file1');
    }
    fs.readFile('./SampleFiles/SaveOutputFile.txt', 'utf-8', (err, fileContent1) => {
        //console.log(fileContent1);
        if (err){
            console.log('Error!!! reading the file2');
        }

        try{
            if (fs.existsSync('./SampleFiles/CombinedOutput.txt')){
                throw new Error("File already exists");
            }

            fs.writeFile('./SampleFiles/CombinedOutput.txt', `${fileContent} \n ${fileContent1}`, "utf-8", err => {
                if (err){
                    console.log('Error!!! writing the file');
                }
                console.log("Combined data saved to file.");
            });
        }
        catch(err) {
            console.log("Error : File already exists..");
        }         
    });
});
console.log('I am not blocked.. will output before file content.');

