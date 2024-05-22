const user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];





const createCard = (el) =>{

  let containerDiv = document.getElementById("container1");
  let card = document.createElement("div"); 
  let names = document.createElement("p");
  let username = document.createElement("p");
  let email = document.createElement("p");

  names.textContent = `Name: ${el.name}`;
  username.textContent = `Username: ${el.username}`;
  email.textContent = `Email: ${el.email}`;
  card.append(names,username,email);
  containerDiv.append(card);
};
user.forEach((el)=>createCard(el));


let profile = document.getElementById("name");
let user_id = document.getElementById("username");
let email_add = document.getElementById("email");
let submitbtn = document.getElementById("submit")

submitbtn.addEventListener("click",(e)=>{
  e.preventDefault();
  let containerDiv = document.getElementById("container1");
  let Card = document.createElement("div");
  let n = document.createElement("p");
  let u_id = document.createElement("p");
  let e_id = document.createElement("p");

  n.textContent = `Name: ${profile.value}`;
  u_id.textContent = `Username: ${user_id.value}`;
  e_id.textContent = `Email: ${email_add.value}`;

  Card.append(n,u_id,e_id);
  containerDiv.append(Card);
  
  profile.value="";
  user_id.value="";
  email_add.value="";
  
});






