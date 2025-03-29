/*------------------------------------------------------------------*\
  Author: Haraldo Filho
  Date: Mar 29, 2025
  Project name: Friendly Film Length for Letterboxd
  Description: Convert film length from minutes to hours and minutes
\*------------------------------------------------------------------*/

(function () {
  "use strict";

  try {
    var text = document.getElementsByClassName('text-link text-footer')[0].innerHTML;
    var filmLengthText = text.match(/[0-9]+&nbsp;mins/)[0];
    var minutes = filmLengthText.match(/[0-9]+/)[0];
    var newText = text.replace(filmLengthText, getHoursMinsText(minutes));
    document.getElementsByClassName('text-link text-footer')[0].innerHTML = newText.replace("More at", "More at:");
  } catch (e) {
    console.log("ERROR: Unable to get film length");
    console.log(e);
  }

  function getHoursMinsText(mins) {
    var hours = Math.floor(mins/60);
    var mins = mins%60;
    var hoursMins = hours + " h&nbsp;" + mins + " min";
    return hoursMins;
  }

})();
