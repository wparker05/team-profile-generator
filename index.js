const inqurier = require('inquirer');
const fs = require('fs');

const choices = (choice) =>{
  switch(choice){
    case 'Engineer':

      break;
    case 'Intern':

      break;
    case 'Finish building team':

      break;
  }
}

const engineer = () =>{
  inqurier
  .prompt([
      {
          message: 'What is your engineer name?',
          name:'manager'
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
}

const intern = () =>{
  
}

const finished = () =>{
  
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