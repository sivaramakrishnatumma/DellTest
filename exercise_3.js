// Change tiles position
var alienTile = document.querySelector('.slick-list [data-catid="#alienware-laptops"]').parentNode;
var list = document.querySelector('.slick-track');
list.removeChild(alienTile);
list.insertBefore(alienTile, list.childNodes[1])

// Change sections position
var alienSection = document.querySelector('.cat-off-screen-pane [data-catid="alienware-laptops"]');
var sectionsList = document.querySelector('.cat-off-screen-pane');
sectionsList.removeChild(alienSection);
sectionsList.insertBefore(alienSection, sectionsList.children[1])

// Append over the first section a dynamic list of links
var list = document.createElement('div');
var filtersList = document.querySelector('.anav ul').children;
for (var i = 0; i < filtersList.length; i++) {
    (function(i) {
        var text = filtersList[i].querySelector('a span').innerText;
        var dataRef = filtersList[i].querySelector('a span').getAttribute('data-ref');
        var link = document.createElement('a');
        link.innerHTML = text;
        link.style.marginRight = '10px';
        link.style.marginBottom = '8px';
        link.style.display = 'inline-block';
        link.style.cursor = 'pointer';

        link.addEventListener('click', function(e) {
            e.preventDefault();

            var el = document.querySelector(`[data-ref="${dataRef}"]`).parentNode;
            if (filtersList[i].querySelectorAll('a span')[1].classList.contains('anav-collapse')) {
                el.click();
            }
            // Scroll to that filter 
            el.parentNode.parentNode.scrollIntoView(false);
        })
        list.appendChild(link);
    })(i);
}

sectionsList.insertAdjacentElement('afterBegin', list);