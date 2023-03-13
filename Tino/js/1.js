/* Creating a dictionary that has the lockpicks as values, and the names of the lockpicks as keys. */
var lp = {
    first: document.getElementById("first"),
    second: document.getElementById("second"),
    third: document.getElementById("third"),
    fourth: document.getElementById("fourth"),
    fifth: document.getElementById("fifth"),
    sixth: document.getElementById("sixth")
}

/* Creating a dictionary that has the background of the lockpicks as values, and the names of the
lockpicks as keys. */
var lpbackground = {
    first: document.getElementById("first-bg"),
    second: document.getElementById("second-bg"),
    third: document.getElementById("third-bg"),
    fourth: document.getElementById("fourth-bg"),
    fifth: document.getElementById("fifth-bg"),
    sixth: document.getElementById("sixth-bg")
}




/* Creating a dictionary that has the colors that the lockpicks will change to when they are clicked. */
var colors = {
    clicked: "#697E9A",
    notclicked: "#293C59",
    error: "#FF0000"
}



/* Creating an array that has the numbers 0-5 in it. */
var arr = [0, 1, 2, 3, 4, 5]

/* An array that has the names of the lockpicks in it. */
var lparr = ["first", "second", "third", "fourth", "fifth", "sixth"]

/* A dictionary that has the numbers 1-6 as values, and the lockpicks as keys. */
var lpdict = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6

}


/* Creating an object that has a counter, and six objects inside of it. Each of those objects has a
number and a clicked property. */
var lpobj = {
    counter: 0,
    first: {
        number: 0,
        clicked: false
    },
    second: {
        number: 0,
        clicked: false
    },
    third: {
        number: 0,
        clicked: false
    },
    fourth: {
        number: 0,
        clicked: false
    },
    fifth: {
        number: 0,
        clicked: false
    },
    sixth: {
        number: 0,
        clicked: false
    }

};



/*
Sleep() returns a promise that resolves after a given number of milliseconds.
@param ms - The number of milliseconds to wait before resolving the promise.
@returns A promise that will resolve after the given time.
*/
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*
It clears the HTML of the six divs that make up the leaderboard
*/
const clear = function () {
    lp.first.innerHTML = ""
    lp.second.innerHTML = ""
    lp.third.innerHTML = ""
    lp.fourth.innerHTML = ""
    lp.fifth.innerHTML = ""
    lp.sixth.innerHTML = ""
}


/*
It gets a random number from the array, deletes it from the array, and then sets the number to the
correct lockpick
@param number - the lockpick you want to set
*/
const lockpick = function (number) {
    // get a random number from arr and then delete from the arr
    var random = Math.floor(Math.random() * arr.length)
    var num = (arr[random] + 1)
    arr.splice(random, 1)
    // set the number to the correct lockpick
    if (number == "first" || "second" || "third" || "fourth" || "fifth" || "sixth") {
        lp[number].innerHTML = num
        lpobj[number].number = num
    }

}


/*
It clears the screen, then runs the lockpick function on every element in the lparr array
*/
const lockpickall = function () {
    clear()
    lparr.forEach(LP => {
        lockpick(LP)
    })
}






// button click handler

/*
check if the buttons are clicked in the right order
@param {String} button 
*/
function clickhandler(button) {
    if (lpobj[button].clicked == false) {


        if (lpobj[button].number == lpobj.counter + 1) {
            lpbackground[button].style.background = colors.clicked
            console.log("success")
            lpobj.counter += 1
        } else {
            losehandler(lpobj[button].number, lpobj.counter + 1)
        }



        if (lpobj.counter == 6) {
            winhandler()
        }
    }
}

/*
the event for when the player wins
*/
function winhandler() {
    alert("You won")
    window.location.reload(true)
}

/*
the event for when the player runs out of time
*/
function lose() {
    alert("You failed")
    window.location.reload();
}


/*
the event for when the player clicks wrong
@param {Number} num 
@param {Number} err
*/
function losehandler(num, err) {
    lpbackground.first.style.background = colors.error
    lpbackground.second.style.background = colors.error
    lpbackground.third.style.background = colors.error
    lpbackground.fourth.style.background = colors.error
    lpbackground.fifth.style.background = colors.error
    lpbackground.sixth.style.background = colors.error
    alert(`you failed at number: ${num}, the correct number was ${err}`)
    window.location.reload(true)

}


/*
It starts the game by calling the lockpickall() function, which is the main function that runs the
game. 

After that, it waits for 5 seconds, clears the screen, waits for 5 seconds, and then checks if the
player has won or lost. 

If the player has won, it calls the winhandler() function, which is a function that handles the win
condition. 

If the player has lost, it calls the lose() function, which is a function that handles the lose
condition.
*/
const start = async () => {
    lockpickall()
    await sleep(5000);
    clear()
    await sleep(5000);
    if (lpobj.counter == 6) {
        winhandler()
    } else {
        lose();
    }
}