
const embeddedText = document.getElementById("embedded");
const hidden = document.querySelectorAll("div.hidden");
const option = document.querySelectorAll("div.option-box");
 

for(let i = 0; i < option.length; i++){
    option[i].addEventListener("mouseover", function onHover () {
            hidden[i].style.display='block';
            option[i].style.height = '600px';
    });
}


for(let i = 0; i < option.length; i++){
    option[i].addEventListener("mouseout", function onHoverExit () {
            hidden[i].style.display='none';

            option[i].style.height = '400px';
    });
}

function copyLink () {
    navigator.clipboard.writeText(embeddedText.textContent);

    //SweetAlert popup
    swal("Link Copied!");
}

