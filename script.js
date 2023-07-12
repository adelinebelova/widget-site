
const embeddedText = document.querySelectorAll("div.embedded-link");
const hidden = document.querySelectorAll("div.hidden");
const option = document.querySelectorAll("div.option-box");
 

//box expanding for links
for(let i = 0; i < option.length; i++){
    option[i].addEventListener("mouseover", function onHover () {
            hidden[i].style.display='block';
            option[i].style.height = '600px';
    });
}

//box shrinking
for(let i = 0; i < option.length; i++){
    option[i].addEventListener("mouseout", function onHoverExit () {
            hidden[i].style.display='none';

            option[i].style.height = '400px';
    });
}


//copy link popup 
for (let i = 0; i < embeddedText.length; i++){

    embeddedText[i].addEventListener('click', function copyLink() {
        navigator.clipboard.writeText(embeddedText[i].textContent);

            //SweetAlert popup
            swal("Link Copied!");
    });
}
