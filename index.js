let readlineSync = require('readline-sync');
let fs = require('fs');
let fileContent;
let students = [];

//Load data from json file
function loadData(){
    fileContent = fs.readFileSync('./data.json');
    //parse JSON -> Object
    students = JSON.parse(fileContent);       
}

function showListStudent(){
    for(let vals of students){
        console.log('Name: ' + vals.name + ' - Age: ' + vals.age);
    }
}

function showCreateStudent(){
    let name = readlineSync.question('Name: ');
    let age = readlineSync.question('Age: ');

    let student = {
        name: name,
        age: Number.parseInt(age)
    }

    students.push(student);
}

function saveAndExit(){
    // Object -> JSON
    let content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, { endcoding: 'utf8' });
}

function showMenu(){
    console.log('Please choose option: ');
    console.log('1: Show list student');
    console.log('2: Create a new student');
    console.log('3: Save and Exit Program');
    let option = readlineSync.question('> ');
    switch(option){
        case '1':
            showListStudent();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong option, please enter again!');
            showMenu();
            break;    
    }

}

function main(){
    loadData();
    showMenu();

}

main();

