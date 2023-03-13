/* Creating an object that contains all of the elements in the HTML document. */
const elements = {
    one: {
        one: document.getElementById("1-1"),
        two: document.getElementById("1-2"),
        three: document.getElementById("1-3"),
        four: document.getElementById("1-4"),
    },
    two: {
        one: document.getElementById("2-1"),
        two: document.getElementById("2-2"),
        three: document.getElementById("2-3"),
        four: document.getElementById("2-4"),
    },
    three: {
        one: document.getElementById("3-1"),
        two: document.getElementById("3-2"),
        three: document.getElementById("3-3"),
        four: document.getElementById("3-4"),
    },
    four: {
        one: document.getElementById("4-1"),
        two: document.getElementById("4-2"),
        three: document.getElementById("4-3"),
        four: document.getElementById("4-4"),
    },
/* Creating an array of the elements in the HTML document. */
    elarray: [
        document.getElementById("1-1"),
        document.getElementById("1-2"),
        document.getElementById("1-3"),
        document.getElementById("1-4"),
        document.getElementById("2-1"),
        document.getElementById("2-2"),
        document.getElementById("2-3"),
        document.getElementById("2-4"),
        document.getElementById("3-1"),
        document.getElementById("3-2"),
        document.getElementById("3-3"),
        document.getElementById("3-4"),
        document.getElementById("4-1"),
        document.getElementById("4-2"),
        document.getElementById("4-3"),
        document.getElementById("4-4"),
    ],
/* An array of the names of the cubes. */
    namarr: [
        "1-1",
        "1-2",
        "1-3",
        "1-4",
        "2-1",
        "2-2",
        "2-3",
        "2-4",
        "3-1",
        "3-2",
        "3-3",
        "3-4",
        "4-1",
        "4-2",
        "4-3",
        "4-4",
    ],
/* Creating a dictionary of the elements in the HTML document. */
    namedict: {
        "1-1": document.getElementById("1-1"),
        "1-2": document.getElementById("1-2"),
        "1-3": document.getElementById("1-3"),
        "1-4": document.getElementById("1-4"),
        "2-1": document.getElementById("2-1"),
        "2-2": document.getElementById("2-2"),
        "2-3": document.getElementById("2-3"),
        "2-4": document.getElementById("2-4"),
        "3-1": document.getElementById("3-1"),
        "3-2": document.getElementById("3-2"),
        "3-3": document.getElementById("3-3"),
        "3-4": document.getElementById("3-4"),
        "4-1": document.getElementById("4-1"),
        "4-2": document.getElementById("4-2"),
        "4-3": document.getElementById("4-3"),
        "4-4": document.getElementById("4-4"),
    }

}

/* Defining the colors that the cubes will be. */
const colors = {
    default: "#2b3851",
    clicked: "#C4C4C4"
}

/* Declaring two variables. The first is an array of cubes, and the second is a boolean that determines
if the user can click. */
let cubes = []
let canclick = false;






/*
    It loops through the array of elements and sets the background color of each element to the default.
*/
const clearcubes = () => {
    for (let i = 0; i < elements.elarray.length; i++) {

        elements.elarray[i].style.backgroundColor = colors.default;
    }
}




/*
    It takes a random number between 0 and the length of the array of elements, and if that element is
    not already in the array of cubes, it adds it to the array of cubes
*/
const getrandomcube = () => {
    let random = Math.floor(Math.random() * elements.namarr.length);
    if (cubes.indexOf(elements.namarr[random]) == -1) {
        cubes.push(elements.namarr[random])
    } else {
        getrandomcube()
    }
}


/*
    It creates an array of 7 random cubes
*/
function setcubearr() {
    cubes = [];
    for (let i = 0; i < 7; i++) {
        getrandomcube()
    }
}



/*
    It removes the clicked cube from the array of cubes, and changes the color of the cube to clicked
    @param [number=1-1] - the number of the cube that was clicked
*/
function clickhandler(number = "1-1") {
    if (canclick) {
        if (cubes.indexOf(number) != -1) {
            // it is a clickable cube
            // remove the cube from the array
            cubes.splice(cubes.indexOf(number), 1);
            // change the color of the cube to clicked
            elements.namedict[number].style.backgroundColor = colors.clicked;
        } else {
            // you managed to fail
            alert("You failed")
            window.location.reload(true)
        }
    }
}


/*
    Sleep() returns a promise that resolves after a given number of milliseconds.
    @param milliseconds - The number of milliseconds to be delayed.
    @returns A promise that will resolve after the setTimeout function has been called.
*/
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/*
It changes the background color of all the cubes to the color of a clicked cube
*/
const showcubes = () => {
    for (let i = 0; i < cubes.length; i++) {
        elements.namedict[cubes[i]].style.backgroundColor = colors.clicked;
    }
}


/*
It prints the cubes array to the console in a table format.
*/
const debug = () => {
    console.table(cubes);
}


/*
If the cubes array is empty, the player wins. If not, the player loses.
*/
const winchecker = () => {
    if (cubes.length == 0) {
        alert("You win!")
        window.location.reload(true)
    } else {
        alert("You failed")
        window.location.reload(true)
    }
}


/*
It sets the array of cubes, clears the cubes, shows the cubes, waits 10 seconds, clears the cubes,
allows the user to click, waits 5 seconds, and checks if the user won
*/
async function start() {
    setcubearr();
    clearcubes();
    showcubes()
    await sleep(10000);
    clearcubes();
    canclick = true;
    await sleep(5000);
    winchecker();
}
