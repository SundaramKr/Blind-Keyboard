var keyMapping = {
    81: {
        index: 0,
        pressed: false
    },
    65: {
        index: 1,
        pressed: false
    },
    90: {
        index: 2,
        pressed: false
    },
    87: {
        index: 3,
        pressed: false
    },
    83: {
        index: 4,
        pressed: false
    },
    88: {
        index: 5,
        pressed: false
    },
    69: {
        index: 6,
        pressed: false
    },
    68: {
        index: 7,
        pressed: false
    },
    67: {
        index: 8,
        pressed: false
    },
    82: {
        index: 9,
        pressed: false
    },
    70: {
        index: 10,
        pressed: false
    },
    86: {
        index: 11,
        pressed: false
    },
    84: {
        index: 12,
        pressed: false
    },
    71: {
        index: 13,
        pressed: false
    },
    66: {
        index: 14,
        pressed: false
    },
    89: {
        index: 15,
        pressed: false
    },
    72: {
        index: 16,
        pressed: false
    },
    78: {
        index: 17,
        pressed: false
    },
    85: {
        index: 18,
        pressed: false
    },
    74: {
        index: 19,
        pressed: false
    },
    77: {
        index: 20,
        pressed: false
    },
    73: {
        index: 21,
        pressed: false
    },
    75: {
        index: 22,
        pressed: false
    },
    188: {
        index: 23,
        pressed: false
    },
    79: {
        index: 24,
        pressed: false
    },
    76: {
        index: 25,
        pressed: false
    },
    190: {
        index: 26,
        pressed: false
    },
    80: {
        index: 27,
        pressed: false
    },
    186: {
        index: 28,
        pressed: false
    },
    191: {
        index: 29,
        pressed: false
    },
    32: {
        index: 30,
        pressed: false
    },
    8: {
        index: 31,
        pressed: false
    }
}

/*window.onload = function () {
	document.getElementById("textinput").focus();
}*/

function showalert() {
    alert("Keyboard Not For Typing.\nClick on the Textbox to type.");
}

$(document).keydown(event => {
    $(`#key-${keyMapping[event.which].index}`).addClass('active')
})

$(document).keyup(event => {
    if (!keyMapping[event.which]) return;
    keyMapping[event.which].pressed = false
    $(`#key-${keyMapping[event.which].index}`).removeClass('active')
})