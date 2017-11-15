// declare your functions here...
var document = "index.html"

$('selector-goes-here')
function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
  return $('img:last')
}

function ninjaBabySelector() {
  return document.$('#baby-ninja')
}

function divSelector() {
  return document.$('div.pics')
}

function firstListItem() {
  return document.$("ul li:first-child #pic-list")
}
