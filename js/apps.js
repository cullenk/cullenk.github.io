

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var movies = document.getElementById("movies");
var iceCream = document.getElementById("ice-cream");
var tv = document.getElementById("tv");
var travel = document.getElementById("travel");
var artists = document.getElementById("artists");
var games = document.getElementById("games");

// When the user clicks on the button, open the modal...

// MOVIES
movies.onclick = function() {
  modal.style.display = "block";
  modal.innerHTML = `
  <div class="container-flex">
    <div class="modal-content mx-auto row">
      <span class="close">&times;</span>
        <div class="images-container text-center d-block d-lg-flex">
          <img src="img/media/titanic.jpg" alt="Titanic Poster">
          <img src="img/media/lotr.jpg" alt="Return of the King Poster">
          <img src="img/media/callme.jpg" alt="Call Me By Your Name Poster">
          <img src="img/media/jurassic-park.jpg" alt="Jurassic Park Poster">
        </div>
      <p class="text-center text-white display-4 mt-3 bg-secondary">Movies</p>
    </div>
  </div>
  `;
};

// ICE CREAM
iceCream.onclick = function() {
  modal.style.display = "block";
  modal.innerHTML = `
  <div class="container-flex">
    <div class="modal-content mx-auto row">
      <span class="close">&times;</span>
        <div class="images-container text-center d-block d-lg-flex">
          <img src="img/media/mintchip.jpg" alt="Mint Chocolate Chip Ice Cream">
          <img src="img/media/benjerry.jpg" alt="Ben and Jerry's Ice Cream">
          <img src="img/media/softserve.jpg" alt="Soft Serve Cone">
          <img src="img/media/sorbet.jpg" alt="Raspberry Sorbet">
        </div>
      <p class="text-center text-white display-4 mt-3 bg-secondary">Ice Cream</p>
    </div>
  </div>
  `;
};

// TV
tv.onclick = function() {
  modal.style.display = "block";
  modal.innerHTML = `
  <div class="container-flex">
    <div class="modal-content mx-auto row">
      <span class="close">&times;</span>
        <div class="images-container text-center d-block d-lg-flex">
          <img src="img/media/got.jpg" alt="Game of Thrones">
          <img src="img/media/bll.jpg" alt="Big Little Lies">
          <img src="img/media/snl2.jpg" alt="Saturday Night Live">
          <img src="img/media/parks.jpg" alt="Parks and Recreation">
        </div>
      <p class="text-center text-white display-4 mt-3 bg-secondary">TV Shows</p>
    </div>
  </div>
  `;
};

// TRAVEL
travel.onclick = function() {
  modal.style.display = "block";
  modal.innerHTML = `
  <div class="container-flex">
    <div class="modal-content mx-auto row">
      <span class="close">&times;</span>
        <div class="images-container text-center d-block d-lg-flex">
          <img src="img/media/beach.jpg" alt="Carribbean Island">
          <img src="img/media/bethany.jpg" alt="Bethany Beach, DE">
          <img src="img/media/village.jpg" alt="Big Bear Lake, CA">
          <img src="img/media/cabin.jpg" alt="Snowy Cabin">
        </div>
      <p class="text-center text-white display-4 mt-3 bg-secondary">Vacation Spots</p>
    </div>
  </div>
  `;
};

// SONGS
artists.onclick = function() {
  modal.style.display = "block";
  modal.innerHTML = `
  <div class="container-flex">
    <div class="modal-content mx-auto row">
      <span class="close">&times;</span>
        <div class="images-container text-center d-block d-lg-flex">
          <img src="img/media/adele.jpg" alt="Adele">
          <img src="img/media/fleetwood.jpg" alt="Fleetwood Mac">
          <img src="img/media/dragons.jpg" alt="Imagine Dragons">
          <img src="img/media/samsmith.jpg" alt="Sam Smith">
        </div>
      <p class="text-center text-white display-4 mt-3 bg-secondary">Music Artists</p>
    </div>
  </div>
  `;
};

// GAMES
games.onclick = function() {
  modal.style.display = "block";
  modal.innerHTML = `
  <div class="container-flex">
    <div class="modal-content mx-auto row">
      <span class="close">&times;</span>
        <div class="images-container text-center d-block d-lg-flex">
          <img src="img/media/pokemon.jpg" alt="Pokemon">
          <img src="img/media/smash.jpg" alt="Super Smash Brothers">
          <img src="img/media/scattergories.jpg" alt="Scattergories">
          <img src="img/media/quiplash.jpg" alt="Quiplash">
        </div>
      <p class="text-center text-white display-4 mt-3 bg-secondary">Games</p>
    </div>
  </div>
  `;
};

//When the user clicks on the modal's x (with a class of close), close the modal
modal.onclick = function(e) {
  var target = event.target;
  if ( target.classList.contains('close') ) {
    modal.style.display = 'none';
  }
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  var target = event.target;
  if ( target.classList.contains('container-flex')) {
    modal.style.display = 'none';
  }
};
