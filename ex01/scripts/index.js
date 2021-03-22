var modal = document.getElementById('myModal');
var galleryItems = document.getElementsByClassName("galleryItem");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

    
for (var i=0;i<galleryItems.length;i++){
    galleryItems[i].onclick = function(event){
        
        modal.style.display = "block";
        modalImg.src = event.target.src;
        modalImg.alt = event.target.alt;
        captionText.innerHTML = event.target.alt;
    }
}


var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}