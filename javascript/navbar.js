onload = (event) => {
    let path = window.location.pathname
    switch (window.location.pathname) {
        case "/":
            document.querySelector('.indexBtn').firstChild.classList.add('active')
            break;
        case "/index":
            document.querySelector('.indexBtn').firstChild.classList.add('active')
            break;
        case "/lineup":
            document.querySelector('.lineupPage').firstChild.classList.add('active')
            break;
        case "/gallery":
            document.querySelector('.galleryPage').firstChild.classList.add('active')
            break;
        case "/aboutus":
            document.querySelector('.aboutPage').firstChild.classList.add('active')
            break;
        case "/minigame":
            document.querySelector('.miniGame').firstChild.classList.add('active')
            break;
        case "/contactus":
            document.querySelector('.contactPage').firstChild.classList.add('active')
            break;

    }

};