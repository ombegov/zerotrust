// Add your custom javascript here
console.log("");


// assume sidenav headers maps to all in-doc headers
var headers = [];
var headerNames = [];
var sidenavs = document.querySelectorAll(".usa-sidenav__item a");

sidenavs.forEach(function(link) {
  var name = link.getAttribute("href").substring(1);
  headerNames.push(name);
  headers.push(document.getElementById(name));
});

// keep track of current one
var closestHeader;

// Find the header that is just above (or at the top) of the viewport,
// and update the corresponding sidenav link to be styled as current.
function calculateCurrentHeader(event) {

  // flip what's current as it crosses the middle of the window
  var pageFold = window.innerHeight / 2;
  var firstVisibleAboveFold;
  // default to topmost header (even if it starts below)
  var currentClosest = headers[0];

  headers.forEach(function(header) {
    // if we found one visible, no matter how high, just stop;
    if (firstVisibleAboveFold) return;

    var top = header.getBoundingClientRect().top;
    if ((top > 0) && (top < pageFold)) {
      firstVisibleAboveFold = header;
      return;
    }

    if (top < pageFold) currentClosest = header;
  });

  // the topmost one above the fold wins no matter what
  if (firstVisibleAboveFold) currentClosest = firstVisibleAboveFold;


  if (closestHeader != currentClosest) {

    // out with the old current nav
    var currentCurrent = document.querySelector(".usa-sidenav__item a.usa-current");
    if (currentCurrent) currentCurrent.classList.remove("usa-current");

    // long live the new current nav
    var newCurrent = document.querySelector(".usa-sidenav__item a[href='#" + currentClosest.id + "']");
    if (newCurrent) newCurrent.classList.add("usa-current");

    closestHeader = currentClosest;
  }
}


// run once on load
calculateCurrentHeader();

// run as you scroll
window.addEventListener("scroll", calculateCurrentHeader);
