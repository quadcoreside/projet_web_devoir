/******************************************* MENU RESPONSIVE DROPDOWN *************************************************/
function dropdownmenu() {
	var x = document.getElementById("mainnav");
	if (x.className === "mainnav") {
		x.className += " responsive";
	} else {
		x.className = "mainnav";
	}
}


/******************************************* BIG SLIDER *************************************************/
var slides = new Array();

/* Initilisation de tous nos controller */
function init() {
	sliderInit();
	cardinit();
}

/* Permettre l'utilisation de plusieurs un slider dans la npage */

function sliderInit() {
	slides = [];
	var itm = document.getElementById("ctnslide");
	itm.style.display = "none";

	var img = document.createElement("img");
	img.setAttribute('id', 'current_play');
	img.setAttribute('class', 'fill cur_slider');

	var d = document.createElement("div");
	d.setAttribute('id', 'slide_scene');

	document.getElementById("slider").append(img);
	document.getElementById("slider").append(d);

	var childDivs = itm.getElementsByClassName('bg-slider');
	console.log(childDivs);
	for(i = 0; i < childDivs.length; i++) {
		console.log(childDivs[i].parentNode);

		slides.push({
			src: childDivs[i].src,
			html: childDivs[i].parentNode.getElementsByClassName("slide-content")[0].innerHTML
		});
	}

	updateSlider();
}

var index_slide = 0;
function playSlider(sens) {
    index_slide += sens;
    index_slide = (index_slide < 0) ? slides.length - 1 : index_slide;
    index_slide = (index_slide > slides.length - 1) ? 0 : index_slide;
    updateSlider();
}

function updateSlider() {
    document.getElementById("current_play").src = slides[index_slide].src;
   	document.getElementById("slide_scene").innerHTML = slides[index_slide].html;
}

function prevSlide() {
	playSlider(-1)
}
function nextSlide() {
	playSlider(1)
}

setInterval("playSlider(1)", 10000);


/******************************************* CARD DYNAMIC *************************************************/
/* card background-image injecter */
function cardinit() {
	var cards = document.getElementsByClassName("picbg");
	for (var i = 0; i < cards.length; i++) {
		/* Récupere le src de l'img cacher */
		cards.item(i).parentNode.style.backgroundImage = "url('"+cards.item(i).src+"')";
    	/* Add listenner click */
    	cards.item(i).parentNode.addEventListener('click', cardClick, false);
	}
}
function cardClick() {
	this.getElementsByTagName('a')[0].click()
}
