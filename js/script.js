let signin = document.getElementById('signin');

let signup = document.getElementById('signup');

let overlay = document.querySelector('.modal_overlay');

let modal = document.getElementsByClassName('modal');

function show__modal(modal) {
    modal.classList.add('active');
    overlay.classList.add('show_overlay');
}

function close__modal() {
    for (let index = 0; index < modal.length; index++) {
        modal[index].classList.remove("active");
    }
    overlay.classList.remove('show_overlay');
}

overlay.addEventListener("click", function () {
    close__modal();
})

let allLinks = document.getElementsByTagName('a');

let emptyHrefLinks = [];

for (let i = 0; i < allLinks.length; i++) {
    if (allLinks[i].getAttribute('href') === '') {
        emptyHrefLinks.push(allLinks[i]);
    }
}

for (let i = 0; i < emptyHrefLinks.length; i++) {
        emptyHrefLinks[i].href = "404.html";
}