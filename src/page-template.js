// function to check right role and edit the template.
const checkTheRole = (data) => {
    switch (data.getRole()) {
      case 'Manager':
        return `Office: ${data.officeNumber}`;
      case 'Engineer':
        return `GitHub: <a href="https://github.com/${data.getGithub()}"
        target="_blank">${data.getGithub()}</a>`;
      case 'Intern':
        return `School: ${data.getSchool()}`;
    }
  }
  
  // function to add icons for right role
  const addIcon = (data) => {
    switch (data.getRole()) {
      case 'Manager':
        return `<i class="fa-solid fa-people-roof"></i>`;
      case 'Engineer':
        return `<i class="fa-solid fa-brain"></i>`;
      case 'Intern':
        return `<i class="fa-solid fa-graduation-cap"></i>`;
    }
  };
  
  // create a card section
  const generateCard = data => {
    if (!data) {
      return '';
    }
  
    return `
  <div class="card m-2 shadow-sm" id="" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h2 class="">${data.getName()}</h2>
        <h3 class="">${data.getRole()} ${addIcon(data)}</h3>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group bg-white">
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
            </li>
            <li class="list-group-item">${checkTheRole(data)}</li>
        </ul>
    </div>
  </div>
    `;
  };
  
  
  // create a html using bootstrap for css framework
  const templateData = (dataArr) => {
    // will store all the cards div 
    let cards = ''
    // iterate through the array of data we got after prompt
    for (let i = 0; i < dataArr.length; i++) {
      cards += generateCard(dataArr[i]);
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <nav class="navbar navbar-dark bg-danger text-center">
            <span class="navbar-header mb-0 w-100 h1 text-white">My Team</span>
        </nav>
        <main class="container my-5">
    
            <div class="row justify-content-center">
            ${cards}
            </div>
    
        </main>
    
    </body>
    
    </html>
    `;
  };
  
  module.exports = templateData;