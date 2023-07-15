 // Obtener referencias a los elementos del DOM
 const gameForm = document.getElementById('gameForm');
 const gameNameInput = document.getElementById('gameNameInput');
 const gameDescriptionInput = document.getElementById('gameDescriptionInput');
 const gameCategoryInput = document.getElementById('gameCategoryInput');
 const gameCodeInput = document.getElementById('gameCodeInput');
 const gamesTable = document.getElementById('gamesTable');
 
 // Cargar los registros almacenados en el Local Storage
 function loadGames() {
   const games = JSON.parse(localStorage.getItem('games')) || [];
 
   for (let i = 0; i < games.length; i++) {
     const game = games[i];
     addGameToTable(game);
   }
 }
 
 // Agregar un juego a la tabla y almacenarlo en el Local Storage
 function addGameToTable(game) {
   const row = document.createElement('tr');
 
   const nameCell = document.createElement('td');
   nameCell.textContent = game.name;
   row.appendChild(nameCell);
 
   const descriptionCell = document.createElement('td');
   descriptionCell.textContent = game.description;
   row.appendChild(descriptionCell);
 
   const categoryCell = document.createElement('td');
   categoryCell.textContent = game.category;
   row.appendChild(categoryCell);
 
   const codeCell = document.createElement('td');
   codeCell.textContent = game.code;
   row.appendChild(codeCell);
   const editCell = document.createElement('td');

  /* const editButton = document.createElement('button');
   editButton.textContent = 'Editar';
   editButton.className = 'btn btn-primary btn-sm';
   editButton.addEventListener('click', () => editGame(game));
   actionsCell.appendChild(editButton);
   
   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Eliminar';
   deleteButton.className = 'btn btn-danger btn-sm';
   deleteButton.addEventListener('click', () => deleteGame(game));
   actionsCell.appendChild(deleteButton);
   
   const actionsCell = document.createElement('td');*/
   const editIcon = document.createElement('i');
   editIcon.className = 'fas fa-edit';
   editIcon.addEventListener('click', () => editGame(game));
   editCell.appendChild(editIcon);
   row.appendChild(editCell);

 
   const actionsCell = document.createElement('td')
   const deleteIcon = document.createElement('i');
   deleteIcon.className = 'bi bi-trash3';
   deleteIcon.addEventListener('click', () => deleteGame(game));
   actionsCell.appendChild(deleteIcon);
   
   row.appendChild(actionsCell);
 
   gamesTable.querySelector('tbody').appendChild(row);
 }
 
 // Guardar un nuevo juego en el Local Storage
 function saveGame(game) {
   const games = JSON.parse(localStorage.getItem('games')) || [];
   games.push(game);
   localStorage.setItem('games', JSON.stringify(games));
 }
 
 // Eliminar un juego de la tabla y del Local Storage
 function deleteGame(game) {
   const games = JSON.parse(localStorage.getItem('games')) || [];
   const index = games.findIndex(g => g.code === game.code);
   if (index !== -1) {
     games.splice(index, 1);
     localStorage.setItem('games', JSON.stringify(games));
     gamesTable.querySelector('tbody').innerHTML = '';
     loadGames();
     
   }
   
 }
 
 // Cargar los datos de un juego en el formulario para editar
 function editGame(game) {
   gameNameInput.value = game.name;
   gameDescriptionInput.value = game.description;
   gameCategoryInput.value = game.category;
   gameCodeInput.value = game.code;
   gameForm.removeEventListener('submit', addGame);
   gameForm.addEventListener('submit', updateGame.bind(null, game));
 }
 
 // Actualizar un juego en la tabla y en el Local Storage
 function updateGame(game, event) {
   event.preventDefault();
   const games = JSON.parse(localStorage.getItem('games')) || [];
   const index = games.findIndex(g => g.code === game.code);
   if (index !== -1) {
     games[index] = {
       name: gameNameInput.value,
       description: gameDescriptionInput.value,
       category: gameCategoryInput.value,
       code: gameCodeInput.value
     };
     localStorage.setItem('games', JSON.stringify(games));
     resetForm();
     gamesTable.querySelector('tbody').innerHTML = '';
     loadGames();
   }
 }
 
 // Limpiar el formulario
 function resetForm() {
   gameNameInput.value = '';
   gameDescriptionInput.value = '';
   gameCategoryInput.value = '';
   gameCodeInput.value = '';
   gameForm.removeEventListener('submit', updateGame);
   gameForm.addEventListener('submit', addGame);
 }
 
 // Agregar un nuevo juego
 function addGame(event) {
   event.preventDefault();
   const game = {
     name: gameNameInput.value,
     description: gameDescriptionInput.value,
     category: gameCategoryInput.value,
     code: gameCodeInput.value
   };
   addGameToTable(game);
   saveGame(game);
   resetForm();
 }
 
 // Cargar los juegos al cargar la página
 document.addEventListener('DOMContentLoaded', () => {
   loadGames();
   gameForm.addEventListener('submit', addGame);
 });
 const addGameBtn = document.getElementById('addGameBtn');

