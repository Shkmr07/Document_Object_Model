document.getElementById("MovetoHome").addEventListener("click",()=>window.location.href = "./index.html")

let thead = document.getElementById("thead");

let details = JSON.parse(localStorage.getItem("cartItems")) || []

function createCard({ name, email }) {
    let tr = document.createElement("tr");
  
    tr.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td><button class="deleteBtn">Delete</button></td>
    `;
    thead.appendChild(tr);
  
    // Add event listener to delete button
    tr.querySelector(".deleteBtn").addEventListener("click", () => {
      // Remove the row from the DOM
      thead.removeChild(tr);
      // Update localStorage by filtering out the deleted item
      details = details.filter(item => item.name !== name || item.email !== email);
      localStorage.setItem("cartItems", JSON.stringify(details));
    });
  }


details.forEach((el)=>createCard(el));

    