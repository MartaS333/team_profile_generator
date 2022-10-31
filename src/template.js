function generateNewCard(data) {
  //generates manager card
  const managerCard = (manager) => {
    return ` <div class="card m-2 employeeCard">
           <div class="card-header bg-secondary">
             <h2 class="card-title text-white text-center">${manager.getName()}</h2>
             <h3 class="card-title text-center text-white">
               <i class="fas fa-mug-hot mr-2 text-white"></i>${manager.getRole()}
             </h3>
           </div>
           <div class="card-body">
             <ul class="list-group">
               <li class="list-group-item">ID: ${manager.getId()}</li>
               <li class="list-group-item">
                 Email:
                 <a href="mailto:${manager.getEmail()}"
                   >${manager.getEmail()}</a
                 >
               </li>
               <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
             </ul>
           </div>
         </div>`;
  };
  //generates engineer card
  const engineerCard = (engineer) => {
    return `          <div class="card m-2 employeeCard">
       <div class="card-header bg-secondary">
         <h2 class="card-title text-center text-white">${engineer.getName()}</h2>
         <h3 class="card-title text-center text-white">
           <i class="fas fa-glasses mr-2 text-white"></i>${engineer.getRole()}
         </h3>
       </div>
       <div class="card-body">
         <ul class="list-group">
           <li class="list-group-item">ID: ${engineer.getId()}</li>
           <li class="list-group-item">
             Email:
             <a href="mailto:${engineer.getEmail()}"
               >${engineer.getEmail()}</a
             >
           </li>
           <li class="list-group-item">
             GitHub:
             <a
               href="https://github.com/${engineer.getGithub()}"
               target="_blank"
               rel="noopener noreferrer"
               >${engineer.getGithub()}</a
             >
           </li>
         </ul>
       </div>
     </div>`;
  };
  //generates intern card
  const internCard = (intern) => {
    return ` <div class="card m-2 employeeCard">
       <div class="card-header bg-secondary">
         <h2 class="card-title text-center text-white">${intern.getName()}</h2>
         <h3 class="card-title text-center text-white">
           <i class="fas fa-user-graduate mr-2 text-white"></i>${intern.getRole()}
         </h3>
       </div>
       <div class="card-body">
         <ul class="list-group">
           <li class="list-group-item">ID: ${intern.getId()}</li>
           <li class="list-group-item">
             Email:
             <a href="mailto:${intern.getEmail()}"
               >${intern.getEmail()}</a
             >
           </li>
           <li class="list-group-item">School: ${intern.getSchool()}</li>
         </ul>
       </div>
     </div>`;
  };

  //Empty array to push all new cards into
  const newHtml = [];

  //pushs all new generated cards based on their names
  newHtml.push(
    data
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );
  newHtml.push(
    data
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
  );
  newHtml.push(
    data
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
  );

  //joins all pushs together without unneeded spaces
  return newHtml.join("");
}

//This will hold all the information that wont be changed
module.exports = (data) => {
  return `<!DOCTYPE html>
       <html lang="en">
         <head>
           <meta charset="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>My Team Page</title>
           <link
             rel="stylesheet"
             href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
             integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
             crossorigin="anonymous"
           />
           <link rel="stylesheet" href="style.css" />
           <script src="https://kit.fontawesome.com/c502137733.js"></script>
         </head>
       
         <body>
           <div class="container-fluid">
             <div class="row">
               <div class="col-12 jumbotron mb-3 bg-info">
                 <h1 class="text-center text-white">My Team</h1>
               </div>
             </div>
           </div>
           <div class="container">
             <div class="row">
               <div class="col-12 d-flex flex-wrap justify-content-center">
               ${generateNewCard(data)}
               </div>
             </div>
           </div>
         </body>
       </html>
       `;
};
