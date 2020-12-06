var makeMeLive = document.getElementById("makeMeLive");
makeMeLive.addEventListener('click', makeLive);

var linkName = document.getElementById('linkName');
var newPragraph = document.getElementById('anyLink');


function makeLive() {

    var pLink = document.createElement('a');
    var text = document.createTextNode(linkName.value);
    pLink.appendChild(text);
    pLink.href = 'http://www.' + text.textContent + '.com';

    var paraghraph = document.getElementsByTagName('p');
    for (var i = 0; i < paraghraph.length; i++) {
        if (linkName.value == paraghraph[i].textContent) {
            var pLink = document.createElement('a');
            pLink.textContent = paraghraph[i].textContent
            pLink.setAttribute('href', 'http://www.' + pLink.textContent + '.com');
            document.body.replaceChild(pLink, paraghraph[i]);
        }

        else {
            console.log("<br>");
            newPragraph.appendChild(pLink);

        }
        // else {
        //     var pLink = document.createElement('a');
        //     pLink.setAttribute('href', 'http://www.' + linkName.textContent + '.com');
        //     newPragraph.textContent = linkName.value;
        //     newPragraph.appendChild(pLink);
        // }

    }

}



