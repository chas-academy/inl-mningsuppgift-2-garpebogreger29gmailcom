// Definera array av namn
let people = [
    "Owen", 
    "Mason", 
    "Liam", 
    "Ella", 
    "Adam", 
    "Noah",
    "Ava", 
    "Ethan", 
    "Grace", 
    "Lucas", 
    "Zoe", 
    "Jack",
    "Lily", 
    "Henry", 
    "Emma", 
    "Isaac", 
    "Mia", 
    "Caleb",
    "Ruby", 
    "Leo"
];


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const searchBar = document.getElementById("searchInput")
  const searchBtn = document.getElementById("searchBtn")
  const resultHolder = document.getElementById("resultDisplay")
  
  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
  
    const inputText = searchBar.value;

    let found = false;

    for (let person of people) {
      
      if (person === inputText) {
        resultHolder.innerHTML = "Namn hittades: " + inputText;
        found = true;
      }
    } 

    if (!found) {
        resultHolder.innerHTML = "Namn hittades inte.";
    }
    
    });
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});