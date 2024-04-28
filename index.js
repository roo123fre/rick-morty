

const characterList = document.querySelector(".character__list");

function fetchUsers() {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            characters.forEach(character => {
                const characterElement = document.createElement("div");
                characterElement.classList.add("character");
                characterElement.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <p>Status: ${character.status}</p>
                    <p>Species: ${character.species}</p>
                    <p>Gender: ${character.gender}</p>
                `;
                characterList.appendChild(characterElement);
            });
        })
        .catch(error => console.error("Error fetching characters:", error));
}

fetchUsers();



// const renderCharacters = (characters) => {
//     const marcup = characters
//         .map((character) => {
//             const { name, status, species } = character;
//             return `
//                     <li>
//                     <p>Name: ${name}</p>
//                     <p>Email: ${status}</p>
//                     <p>Website: ${species}</p>
//                     </li>`;
//         }).join("");
//     characterList.innerHTML = marcup;
// };

// fetchUsers()
//     .then((characters) => renderCharacters(characters))
//     .catch((error) => console.log(error));




