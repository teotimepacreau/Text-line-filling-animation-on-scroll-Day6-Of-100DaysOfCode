console.log('connecté !');

// Division en lignes + ajout d'une div lineMask à chaque ligne
function run(){
    let paragraphs = document.querySelectorAll('#paragraph');
    console.log(paragraphs);
    paragraphs = new SplitType (paragraphs, {types: 'lines'});
    console.log("division par lignes ok");
    let lineMask = document.createElement('div');
    console.log("div lineMask créé");
    lineMask.classList.add('line-mask');
    console.log("classe line-mask ajoutée");
    let lines = document.querySelectorAll('.line');
    console.log(lines);
    lines.forEach((line)=> {
        line.appendChild(lineMask.cloneNode(true));
    })  
}

run();



// GSAP
let lines = document.querySelectorAll('.line');
console.log(lines);
function onScroll() {
lines.forEach((line)=> {
    // Prépa triggerElement et targetElement pour GSAP
    let triggerElement = line;
    console.log(triggerElement);
    let targetElement = line.querySelector('.line-mask');
    console.log(targetElement);

    // create a timeline and detect line trigger
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top center",
            end: "bottom center",
            scrub: 3
        }
    });

    tl.to(targetElement, {
        width: "0%",
        duration: 1
    });
    });
}

onScroll();