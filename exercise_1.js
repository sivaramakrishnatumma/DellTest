"use strict";

// Cloning actual DOM elements of Product Selector and Home Page Resources.
var productSelector = document.querySelector('.product-selector').cloneNode(true);
var homepageResources = document.querySelector('.homepageResources').cloneNode(true);

function changeDOMWhenDesktop() {

    // Transform the icons' row into 2 rows and make it occupy only the left half of the page container
    var resourceTiles = document.querySelector('.resource-tiles');
    resourceTiles.classList.remove('row');
    resourceTiles.classList.add('col-md-6');
    resourceTiles.classList.add('col-lg-6');
    resourceTiles.style.paddingLeft = 0;
    for (var i = 0; i < resourceTiles.children.length; i++) {
        resourceTiles.children[i].classList.remove('col-md-3');
        resourceTiles.children[i].classList.add('col-md-6');
        resourceTiles.children[i].classList.add('col-lg-6');
        if (i % 2 === 0) {
            resourceTiles.children[i].style.paddingLeft = 0;
        } else {
            resourceTiles.children[i].style.paddingRight = 0;
        }
    }

    var homeEntrySelection = document.querySelector('.divHomeEntrySelection');
    homeEntrySelection.classList.remove('col-lg-8');
    homeEntrySelection.classList.remove('col-lg-offset-2');
    homeEntrySelection.classList.remove('col-md-10');
    homeEntrySelection.classList.remove('col-md-offset-1');
    homeEntrySelection.classList.add('col-md-6');
    homeEntrySelection.classList.add('col-lg-6');
    homeEntrySelection.classList.add('product-selector')
    homeEntrySelection.style.width = "50%";
    homeEntrySelection.style.paddingRight = 0;
    homeEntrySelection.style.marginTop = "-90px";

    // Removing Search Box from the Product Selector container
    homeEntrySelection.parentNode.removeChild(homeEntrySelection);

    // Add homeEntrySelection to the left side of the Resource tiles container
    resourceTiles.parentNode.insertAdjacentElement('beforeEnd', homeEntrySelection);
}

function changeDOMWhenNotDesktop() {
    document.querySelector('.product-selector').innerHTML = productSelector.innerHTML;
    document.querySelector('.homepageResources').innerHTML = homepageResources.innerHTML;
}

function onResize(x) {
    if (x.matches) {
        changeDOMWhenDesktop();
    } else {
        changeDOMWhenNotDesktop();
    }
}

// Listen to the window for resize
var x = window.matchMedia("(min-width: 992px)")
onResize(x)
x.addListener(onResize);