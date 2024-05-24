const main = document.querySelector("#main");
const aboutMe = document.querySelector("#aboutMe");
const dream = document.querySelector("#dream");
const plan = document.querySelector("#plan");

function mainStart(){
    main.style.display="block";
    aboutMe.style.display="none";
    dream.style.display="none";
    plan.style.display="none";
}

function aboutMeStart(){
    main.style.display="none";
    aboutMe.style.display="block";
    dream.style.display="none";
    plan.style.display="none";
}

function dreamStart(){
    main.style.display="none";
    aboutMe.style.display="none";
    dream.style.display="block";
    plan.style.display="none";
}
function planStart(){
    main.style.display="none";
    aboutMe.style.display="none";
    dream.style.display="none";
    plan.style.display="block";
}