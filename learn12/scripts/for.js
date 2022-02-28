var song = '';

for (c = 99; c > 1; c--) {
    song += "<br>" + c + " bottles of beer on the wall <br>" +
        c + " bottles of beer<br>" +
        " if one of those bottles should happen to fall<br>" +
        (c - 1) + " bottles of beer on the wall! <br>"
}

song += "<br>1 bottle of beer on the wall<br>1 bottle of beer<br> "
song += " if that bottle should happen to fall <br> 0 bottles of beer on the wall!"

document.getElementById("beer").innerHTML = song