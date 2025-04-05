/*----------------------------------------------------------------------*\
  Author: Haraldo Filho
  Date: Mar 23, 2025
  Project name: Show Original Title for Letterboxd
  Description: Show original title on main title field of a film's page.
\*----------------------------------------------------------------------*/

(function () {
  "use strict";

  var mainTitle = document.getElementsByClassName('name js-widont prettify')[0].innerText;

  try {
    var originalTitle = document.getElementsByClassName('quoted-creative-work-title')[0].innerText;
  } catch {
    var originalTitle = "";
  }

  if (originalTitle != "") {
    var temp = mainTitle;
    document.getElementsByClassName('name js-widont prettify')[0].innerText = originalTitle;
    document.getElementsByClassName('quoted-creative-work-title')[0].innerText = temp;
  }

})();
