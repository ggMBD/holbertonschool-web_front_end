function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    const spookyBtn = document.createElement('button');
    spookyBtn.textContent = 'Spooky';
    document.body.appendChild(spookyBtn);
    spookyBtn.addEventListener('click', spooky);

    const darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = 'Dark mode';
    document.body.appendChild(darkModeBtn);
    darkModeBtn.addEventListener('click', darkMode);

    const screamModeBtn = document.createElement('button');
    screamModeBtn.textContent = 'Scream mode';
    document.body.appendChild(screamModeBtn);
    screamModeBtn.addEventListener('click', screamMode);

}
main();
