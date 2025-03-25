/*----------------------------------------------------------------------*\
  Author: Haraldo Filho
  Date: Mar 23, 2025
  Project name: Show Original Title for Letterboxd
  Description: Show original title on main title field of a film's page.
\*----------------------------------------------------------------------*/

(function () {
  "use strict";

  var mainTitle = document.getElementsByClassName('name js-widont prettify')[0].innerHTML;

  try {
    var originalTitle = document.getElementsByClassName('originalname')[0].innerHTML;
  } catch {
    var originalTitle = "";
  }

  if (originalTitle != "") {
    var temp = mainTitle;
    document.getElementsByClassName('name js-widont prettify')[0].innerHTML = originalTitle;
    document.getElementsByClassName('originalname')[0].innerHTML = temp;
  }

})();
