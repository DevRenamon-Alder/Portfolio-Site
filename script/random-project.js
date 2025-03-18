let projectNum = 0;
let title = document.getElementById("title");
let description = document.getElementById("description");
let link = document.getElementById("link");

const randomizeProject = () => {
    projectNum = Math.floor(Math.random() * 0);
    if (projectNum === 0) {
        title.innerHTML = "Random Girl Generator";
        description.innerHTML = "This project generates a random girl, complete with a physical description and personality description.";
        link.innerHTML = "<a href='https://devrenamon-alder.github.io/Random-Girl-Generator/'>Random Girl Generator</a>"
    } else {
        console.log("invalid projectNum");
    }
}

randomizeProject();