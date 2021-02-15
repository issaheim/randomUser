const rootDiv = document.createElement("div");
const userDiv = document.createElement("div");

rootDiv.id = "rootDiv"
userDiv.id = "userDiv"

document.body.appendChild(rootDiv);
rootDiv.appendChild(userDiv);

fetch ('https://randomuser.me/api/')
.then (function (response) {
  return response.json();
})
.then (function (user) {
  console.log(user);

  printRandomUser(user);
})


function printRandomUser (user) {
  console.log(user.results[0]);

  let userPic = user.results[0].picture.large;
  let fName = user.results[0].name.first;
  let lName = user.results[0].name.last;
  let email = user.results[0].email;
  let cell = user.results[0].cell;

  console.log(cell, fName, email);

  userDiv.insertAdjacentHTML("afterbegin", 

  ` <img src="${userPic}" alt="a picture of the user"> 

    <h2>${fName} ${lName}</h2>
    
    <ul>
      <li>Email: ${email}</li>
      <li>Cellphone: ${cell}</li>
    </ul>
  `)
}

