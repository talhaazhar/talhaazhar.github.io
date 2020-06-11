var windowHeight;
var aboutElement;
var elements = [];
var animationDict = {
    ".main-heading": "text-animate",
    ".bubble-min": "bubble-animation",
    ".polaroid": "polaroid-animation"
}

function init() {
    windowHeight = window.innerHeight;
    aboutElement = document.getElementById('about');
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    const animationElementNames = Object.keys(animationDict);
    for (const elementName of animationElementNames) {
        const animationElements = Array.from(document.querySelectorAll(elementName));
        elements = elements.concat(animationElements);
    }
}

function containerMargin() {
    $('#content').css('margin-top', windowHeight + 40 + "px");
}

function checkPosition() {
    let completedList = []
    for (var i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = element.getBoundingClientRect().top;
        let elementName = "." + element.classList[0];

        if (positionFromTop - windowHeight <= 0 && element.style.opacity == "") {
            // element.style.opacity = "1";
            // element.classList.add(animationDict[elementName]);
            setTimeout(() => {
                element.style.opacity = "1";
                element.classList.add(animationDict[elementName]);
            }, 80 * i);
        }
    }
}

init();
containerMargin();
// checkPosition();
