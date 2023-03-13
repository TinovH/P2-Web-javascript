//boilerplate
// create a random number between min and max
function getRandomInt(min=11111, max=99999) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// sleep function
function sleep(ms = 3000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const number = getRandomInt();





/* Setting the variables to false. */
let eltoggle = false;
let failed = false;

/* Getting the elements from the HTML file. */
const elements = {
    backgrounds: {
        remember: document.getElementById('remember'),
        invullen: document.getElementById('invullen'),
    },

    numbers: {
        numbers: document.getElementById('numbers'),
        input: document.getElementById('input'),
    }

}



/**
 * If the variable eltoggle is false, then the remember screen is hidden and the invullen screen is
 * shown. If the variable eltoggle is true, then the remember screen is shown and the invullen screen
 * is hidden.
 */
function togglescreens() {
    if (eltoggle == false) {
        elements.backgrounds.remember.style.display = 'none';
        elements.backgrounds.invullen.style.display = 'block';
        eltoggle = true;
    } else {
        elements.backgrounds.remember.style.display = 'block';
        elements.backgrounds.invullen.style.display = 'none';
        eltoggle = false;
    }
}

/**
 * It checks if the user has entered the correct number, and if they have, it alerts them that they
 * won, and if they haven't, it alerts them that they failed.
 */
function plasmhandler() {
    if (eltoggle == true) {
        if (elements.numbers.input.value == number && failed == false) {
            alert('You won');
            window.location.reload(true)
        } else {
            failed = true
            alert('You failed');
            window.location.reload(true)
        }
    }
}


/**
 * If the key pressed is the enter key, then run the plasmhandler function.
 * @param e - the event object
 */
function enterhandler(e) {
    // check if key is enter
    if (e.keyCode == 13) {
        plasmhandler();
    }
}



/**
 * It displays a number on the screen, waits 3 seconds, then switches to a different screen, waits 4
 * seconds, then calls a function called plasmhandler.
 */
async function start() {
    elements.numbers.numbers.innerHTML = number;
    await sleep(3000);
    togglescreens();
    await sleep(4000);
    plasmhandler()

}


/* Setting the onkeypress event to the enterhandler function. */
document.onkeypress = enterhandler

