const inqurier = require('inquirer');
const fs = require('fs');

const choices = (choice) =>{
  switch(choice){
    case 'Engineer':
      engineer();
      break;
    case 'Intern':
      intern();
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
  .then((answers) =>{
    choices(answers.member);
  })
}

const intern = () =>{
  inqurier
  .prompt([
      {
          message: 'What is your intern name?',
          name:'manager'
      },
      {
        message: 'What is your intern ID?',
        name:'employeeID'
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
    choices(answers.member);
  }) 
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
    .then((answers) =>{
      choices(answers.member);
    })