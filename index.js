// importing the fs for creating a file & inquirer for the prompt
const fs = require('fs');
const inquirer = require('inquirer');

var langaugeList = "" ; 

// questions for making a profile
const questions = [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'checkbox',
      message: 'Languages that you are aware of',
      name: 'languages',
      choices: ['Python', 'JavaScript', 'Java', 'C#', 'C', 'C++', 'GO', 'R', 'Swift', 'PHP']
    },
    {
      type: 'list',
      message: 'Level of your Coding Skill?',
      name: 'level',
      choices: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
    },
    {
        type: 'input',
        message: 'What you want to do after finishing BootCamp?',
        name: 'future'
    },
    {
        type: 'input',
        message: 'Animal you like?',
        name: 'animal'
    },
    {
        type: 'input',
        message: 'What is your Contact information?',
        name: 'contact'
    }
  ]

inquirer
    .prompt(questions)
    .then((response) => {
        fs.writeFile('ex.html', createHtml(response), (err) => 
        err ? console.error(err) : console.log('saved!'))
    })

function createHtml(data) {
    gettinglanguage(data.languages);
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <header>
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Language</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Level</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Future</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Contact</a>
            </li>
        </ul>
    </header>
    <main class="container">
        <h1 class="mt-5">${data.username}</h1>
        <div>
            <br>
            <h2 class="d-inline">Program Languages: 
                <ul class="d-inline d-flex">
                    ${langaugeList}
                </ul>
            </h2>
            <h2>Skill Level: ${data.level}</h2>
            <h2>After finishing the Bootcamp, my future plan is ${data.future}.</h2>
            <h2>My favorite Animal is ${data.animal}.</h2>
        </div>
    </main>
    <footer class="text-center">
    <h3>If you have any questions please contact through here :)</h3>
    <h4>${data.contact}</h4>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
</body>
</html>
    `
}

function gettinglanguage(langaugeinfo) {
    for(let i = 0; i < langaugeinfo.length; i++) {
        langaugeList += `<li>${langaugeinfo[i]}</li>`
    }
    return langaugeList;
}
