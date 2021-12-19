const inqurier = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const choices = (choice) =>{
  switch(choice){
    case 'Engineer':
      engineer();
      break;
    case 'Intern':
      intern();
      break;
    case 'Finish building team':
      finished();
      break;
  }
}
const arr = [];

const engineer = () =>{
  inqurier
  .prompt([
      {
          message: 'What is your engineer name?',
          name:'eName'
      },
      {
        message: 'What is your engineer employee ID?',
        name:'employeeID'
      },
      { 
        message: 'What is your engineer email address?',
        name:'email'
      },
      {
        message: 'What is your engineer GitHub username?',
        name: 'github'
      },
      {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'member',
        choices: [
          'Engineer',
          'Intern',
          'Finish building team'
        ]
      }   
  ])
  .then((answers) =>{
    const employee = new Engineer(answers.eName, answers.employeeID, answers.email, answers.github)
    arr.push(employee);
    choices(answers.member);
  })
}

const intern = () =>{
  inqurier
  .prompt([
      {
          message: 'What is your intern name?',
          name:'iName'
      },
      {
        message: 'What is your intern ID?',
        name:'internID'
      },
      { 
        message: 'What is your intern email address?',
        name:'email'
      },
      {
        message: 'What school does your intern attend?',
        name: 'school'
      },
      {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'member',
        choices: [
          'Engineer',
          'Intern',
          'Finish building team'
        ]
      } 
  ]) 
  .then((answers) =>{
    const intern = new Intern(answers.iName, answers.internID, answers.email, answers.school);
    arr.push(intern);
    choices(answers.member);
  }) 
}

const finished = () =>{
  console.log(arr);
}

inqurier
    .prompt([
        {
            message: 'What is your name?',
            name:'manager'
        },
        {
          message: 'What is your employee ID?',
          name:'employeeID'
        },
        { 
          message: 'What is your email address?',
          name:'email'
        },
        {
          message: 'What is your office phone number?',
          name: 'phoneNumber'
        },
        {
          type: 'list',
          message: 'Would you like to add another team member?',
          name: 'member',
          choices: [
            'Engineer',
            'Intern',
            'Finish building team'
          ]
        }   
    ])
    .then((answers) =>{
      const manager = new Manager(answers.manager, answers.employeeID, answers.email, answers.phoneNumber);
      arr.push(manager);
      choices(answers.member);
    })