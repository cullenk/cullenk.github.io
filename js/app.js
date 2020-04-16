/*jshint esversion: 8 */

const loadingScreen = document.getElementById('loading-screen');

window.addEventListener('load', function () { //Wait until the page loads...
  loadingScreen.className += " loaderHidden"; //then remove the loading
});
