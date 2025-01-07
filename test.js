var i = 0, j = 0, k = 0, l = 0;
var arr = Array(3).fill(' ').map(() => new Array(10).fill(' '));
arr[0][0] = 'Q';
arr[0][1] = 'W';
arr[0][2] = 'E';
arr[0][3] = 'R';
arr[0][4] = 'T';
arr[0][5] = 'Y';
arr[0][6] = 'U';
arr[0][7] = 'I';
arr[0][8] = 'O';
arr[0][9] = 'P';
arr[1][0] = 'A';
arr[1][1] = 'S';
arr[1][2] = 'D';
arr[1][3] = 'F';
arr[1][4] = 'G';
arr[1][5] = 'H';
arr[1][6] = 'J';
arr[1][7] = 'K';
arr[1][8] = 'L';
arr[1][9] = ';';
arr[2][0] = 'Z';
arr[2][1] = 'X';
arr[2][2] = 'C';
arr[2][3] = 'V';
arr[2][4] = 'B';
arr[2][5] = 'N';
arr[2][6] = 'M';
arr[2][7] = ',';
arr[2][8] = '.';
arr[2][9] = '?';
/*for (i=0; i < 3; i++)
{
	for (j=0; j < 10; j++)
	{
		console.log(arr[i][j] + "\t");
	}
	console.log();
}*/
//console.log("Enter a word");

var words;
var st;
var isitletter = 0;
var isitsentence = 0;
//words = ["HOMIE", "LESS", "GO", "MOYAI", "EMOJI", "DANK"];
/*words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "spade", "shake", "insidious", "tendency", "type", "fanatical", "clip", "hate", "surprise", "irate", "launch", "record", "follow", "inexpensive", "iron", "try", "art", "aloof", "roasted", "puffy", "panoramic", "abusive", "grade", "normal", "birth", "sable", "gigantic", "smell", "kick", "town", "minute", "rhyme", "whole", "tart", "distribution", "allow", "ants", "snow", "best", "hover", "educate", "strengthen", "learn", "squirrel", "advocate", "receive", "listen", "parcel", "vacuous", "bag"];

st = words[l];
st = st.toUpperCase();
document.getElementById("inputcomesherexd").innerHTML = st;*/

function closepopup() {
	document.getElementById("popUpMain").style.display = "none";
	document.getElementById("txtInput").value = "WELCOME TO VISUALLY IMPAIRED KEYBOARD - A website which helps visually imapired people type. A structured course will be given to you to type. Or you can click on the menu button to practice different levels.";
	document.getElementById("btnSpeak").click();
	document.getElementById("txtInput").value = "Right click the red output box to move onto the next course. Left click to retry the current course. Assigning Beginner Course...";
	document.getElementById("btnSpeak").click();
	/*document.getElementById("textinput").focus();
	document.getElementById("txtInput").value = "TYPE " + document.getElementById("inputcomesherexd").innerHTML;
	document.getElementById("btnSpeak").click();*/
	toggleSidebar();
	feedletters();
}

function feedletters() {
	toggleSidebar();
	sessionStorage.setItem("l", 0);
	sessionStorage.setItem("i", 0);
	l = 0;
	i = 0;

	document.getElementById("txtInput").value = "YOU HAVE CHOSEN LETTERS. RIGHT CLICK ON THE TEXT BOX TO TYPE. LEFT CLICK TO RE-LISTEN.";
	document.getElementById("btnSpeak").click();

	document.getElementById("textinput").disabled = false;
	document.getElementById("textinput").focus();

	//document.getElementById("textinput").placeholder = "-Click here to start typing\n-Text in Blue is to be typed\n-Text in Red shows Key Placement\n-Keyboard below shows Keystrokes\n-It is Not for Typing";
	words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	st = words[0];
	st = st.toUpperCase();
	document.getElementById("inputcomesherexd").innerHTML = st;

	document.getElementById("txtInput").value = "TYPE " + document.getElementById("inputcomesherexd").innerHTML;
	document.getElementById("btnSpeak").click();

	document.getElementById("output").innerHTML = "OUTPUT COMES HERE";
	isitletter = 1;
	isitsentence = 0;
}

function feedwords() {
	toggleSidebar();
	sessionStorage.setItem("l", 0);
	sessionStorage.setItem("i", 0);
	l = 0;
	i = 0;

	document.getElementById("txtInput").value = "YOU HAVE CHOSEN WORDS. RIGHT CLICK ON THE TEXT BOX TO TYPE. LEFT CLICK TO RE-LISTEN.";
	document.getElementById("btnSpeak").click();

	document.getElementById("textinput").disabled = false;
	document.getElementById("textinput").focus();

	//document.getElementById("textinput").placeholder = "-Click here to start typing\n-Text in Blue is to be typed\n-Text in Red shows Key Placement\n-Keyboard below shows Keystrokes\n-It is Not for Typing";
	words = ["spade", "shake", "insidious", "tendency", "type", "fanatical", "clip", "hate", "surprise", "irate", "launch", "record", "follow", "inexpensive", "iron", "try", "art", "aloof", "roasted", "puffy", "panoramic", "abusive", "grade", "normal", "birth", "sable", "gigantic", "smell", "kick", "town", "minute", "rhyme", "whole", "tart", "distribution", "allow", "ants", "snow", "best", "hover", "educate", "strengthen", "learn", "squirrel", "advocate", "receive", "listen", "parcel", "vacuous", "bag"];
	st = words[0];
	st = st.toUpperCase();
	document.getElementById("inputcomesherexd").innerHTML = st;

	document.getElementById("txtInput").value = "TYPE " + document.getElementById("inputcomesherexd").innerHTML;
	document.getElementById("btnSpeak").click();

	document.getElementById("output").innerHTML = "OUTPUT COMES HERE";
	isitletter = 0;
	isitsentence = 0;
}

function feedphrases() {
	toggleSidebar();
	sessionStorage.setItem("l", 0);
	sessionStorage.setItem("i", 0);
	l = 0;
	i = 0;

	document.getElementById("txtInput").value = "YOU HAVE CHOSEN PHRASES. RIGHT CLICK ON THE TEXT BOX TO TYPE. LEFT CLICK TO RE-LISTEN.";
	document.getElementById("btnSpeak").click();

	document.getElementById("textinput").disabled = false;
	document.getElementById("textinput").focus();

	//document.getElementById("textinput").placeholder = "-Click here to start typing\n-Text in Blue is to be typed\n-Text in Red shows Key Placement\n-Keyboard below shows Keystrokes\n-It is Not for Typing";
	words = ["Cut To The Chase", "Curiosity Killed The Cat", "Jack of All Trades Master of None", "A Lot on His Plate", "Man of Few Words", "Down To The Wire", "Lickety Split", "Wild Goose Chase", "Under the Weather", "Back to Square One"];
	st = words[0];
	st = st.toUpperCase();
	document.getElementById("inputcomesherexd").innerHTML = st;

	document.getElementById("txtInput").value = "TYPE " + document.getElementById("inputcomesherexd").innerHTML;
	document.getElementById("btnSpeak").click();

	document.getElementById("output").innerHTML = "OUTPUT COMES HERE";
	isitletter = 0;
	isitsentence = 1;
}

function feedsentences() {
	toggleSidebar();
	sessionStorage.setItem("l", 0);
	sessionStorage.setItem("i", 0);
	l = 0;
	i = 0;

	document.getElementById("txtInput").value = "YOU HAVE CHOSEN SENTENCES. RIGHT CLICK ON THE TEXT BOX TO TYPE. LEFT CLICK TO RE-LISTEN.";
	document.getElementById("btnSpeak").click();

	document.getElementById("textinput").disabled = false;
	document.getElementById("textinput").focus();

	//document.getElementById("textinput").placeholder = "-Click here to start typing\n-Text in Blue is to be typed\n-Text in Red shows Key Placement\n-Keyboard below shows Keystrokes\n-It is Not for Typing";
	words = ["Twin four month olds slept in the shade of the palm tree.", "Despite multiple complications she survived.", "They finished building the road they knew no one would ever use.", "That is an appealing treasure map that I can not read.", "There is no reason a hula hoop can not also be a circus ring.", "My secretary is the only person who truly understands my stamp collecting obsession.", "I trust everything that is written in purple ink.", "It turns out you do not need all that stuff you insisted you did.", "He was an introvert that extroverts seemed to love.", "Some bathing suits just should not be worn by some people."];
	st = words[0];
	st = st.toUpperCase();
	document.getElementById("inputcomesherexd").innerHTML = st;

	document.getElementById("txtInput").value = "TYPE " + document.getElementById("inputcomesherexd").innerHTML;
	document.getElementById("btnSpeak").click();

	document.getElementById("output").innerHTML = "OUTPUT COMES HERE";
	isitletter = 0;
	isitsentence = 1;
}

function feedparagraphs() {
	toggleSidebar();
	sessionStorage.setItem("l", 0);
	sessionStorage.setItem("i", 0);
	l = 0;
	i = 0;

	document.getElementById("txtInput").value = "YOU HAVE CHOSEN PARAGRAPHS. RIGHT CLICK ON THE TEXT BOX TO TYPE. LEFT CLICK TO RE-LISTEN.";
	document.getElementById("btnSpeak").click();

	document.getElementById("textinput").disabled = false;
	document.getElementById("textinput").focus();

	//document.getElementById("textinput").placeholder = "-Click here to start typing\n-Text in Blue is to be typed\n-Text in Red shows Key Placement\n-Keyboard below shows Keystrokes\n-It is Not for Typing";
	words = ["They say you only come to peace with yourself when you know yourself better than those around you. Derick knew nothing about this. He thought he had found peace but this was an illusion as he was about to find out with an unexpected occurrence that he actually knew nothing about himself.", "The answer was within her reach. It was hidden in a box and now that box sat directly in front of her. She had spent years searching for it and could hardly believe she had finally managed to find it. She turned the key to unlock the box and then gently lifted the top. She held her breath in anticipation of finally knowing the answer she had spent so much of her time in search of. As the lid came off she could see that the box was empty.", "The lone lamp post of the one-street town flickered, not quite dead but definitely on its way out. Suitcase by her side, she paid no heed to the light, the street or the town. A car was coming down the street and with her arm outstretched and thumb in the air, she had a plan.", "He was after the truth. At least, that was what he told himself. He believed it, but any rational person on the outside could see he was lying to himself. It was apparent he was really only after his own truth that he had already decided and was after this truth because the facts did not line up with the truth he wanted.", "He wondered if he should disclose the truth to his friends. It would be a risky move. Yes, the truth would make things a lot easier if they all stayed on the same page, but the truth might fracture the group leaving everything in even more of a mess than it was not telling the truth. It was time to decide which way to go."];
	st = words[0];
	st = st.toUpperCase();
	document.getElementById("inputcomesherexd").innerHTML = st;

	document.getElementById("txtInput").value = "TYPE " + document.getElementById("inputcomesherexd").innerHTML;
	document.getElementById("btnSpeak").click();

	document.getElementById("output").innerHTML = "OUTPUT COMES HERE";
	isitletter = 0;
	isitsentence = 1;
}

function feedrandom() {
	toggleSidebar();
	sessionStorage.setItem("l", 0);
	sessionStorage.setItem("i", 0);
	l = 0;
	i = 0;

	document.getElementById("txtInput").value = "YOU HAVE CHOSEN RANDOM SENTENCES AND PHRASES. RIGHT CLICK ON THE TEXT BOX TO TYPE. LEFT CLICK TO RE-LISTEN.";
	document.getElementById("btnSpeak").click();

	document.getElementById("textinput").disabled = false;
	document.getElementById("textinput").focus();

	//document.getElementById("textinput").placeholder = "-Click here to start typing\n-Text in Blue is to be typed\n-Text in Red shows Key Placement\n-Keyboard below shows Keystrokes\n-It is Not for Typing";
	words = ["Then they made fifty loops along the edge of the end curtain in one set and also along the edge of the end curtain in the other set.", "The reason I left you in Crete was that you might put in order what was left unfinished and appoint elders in every town, as I directed you.", "Give an order now to bring your livestock and everything you have in the field to a place of shelter, because the hail will fall on every person and animal that has not been brought in and is still out in the field, and they will die.", "I am as you are, my people as your people, my horses as your horses.", "For they will prolong your life many years and bring you peace and prosperity.", "Who has saved us and called us to a holy life, not because of anything we have done but because of his own purpose and grace. This grace was given us in Christ Jesus before the beginning of time.", "This is good, and pleases God our Savior."];
	st = words[0];
	st = st.toUpperCase();
	document.getElementById("inputcomesherexd").innerHTML = st;

	document.getElementById("txtInput").value = "TYPE " + document.getElementById("inputcomesherexd").innerHTML;
	document.getElementById("btnSpeak").click();

	document.getElementById("output").innerHTML = "OUTPUT COMES HERE";
	isitletter = 0;
	isitsentence = 1;
}

function WhichButton(event) {
	if (event.button == 2) {
		document.getElementById("txtInput").value = document.getElementById("inputcomesherexd").innerHTML;
		document.getElementById("btnSpeak").click();
	}
}

function RetryNext(event) {
	toggleSidebar();
	if (event.button == 0) {
		if (words[0] == "A")
		feedletters();
		else if(words[0] == "spade")
		feedwords();
		else if(words[0] == "Cut To The Chase")
		feedphrases();
		else if(words[0] == "Twin four month olds slept in the shade of the palm tree.")
		feedsentences();
		else if(words[0] == "They say you only come to peace with yourself when you know yourself better than those around you. Derick knew nothing about this. He thought he had found peace but this was an illusion as he was about to find out with an unexpected occurrence that he actually knew nothing about himself.")
		feedparagraphs();
		else if(words[0] == "Then they made fifty loops along the edge of the end curtain in one set and also along the edge of the end curtain in the other set.")
		feedrandom();
	}
	else if (event.button == 2) {
		if (words[0] == "A")
		feedwords();
		else if(words[0] == "spade")
		feedphrases();
		else if(words[0] == "Cut To The Chase")
		feedsentences();
		else if(words[0] == "Twin four month olds slept in the shade of the palm tree.")
		feedparagraphs();
		else if(words[0] == "They say you only come to peace with yourself when you know yourself better than those around you. Derick knew nothing about this. He thought he had found peace but this was an illusion as he was about to find out with an unexpected occurrence that he actually knew nothing about himself.")
		feedrandom();
		else if(words[0] == "Then they made fifty loops along the edge of the end curtain in one set and also along the edge of the end curtain in the other set.")
		feedletters();
	}
}

var row = 0;
var col = 0;
var row2 = 0;
var col2 = 0;
var catchingerr = 0;

sessionStorage.setItem("i", i);
sessionStorage.setItem("l", l);

function read() {
	if (document.getElementById("textinput").value != '') {
		document.getElementById("textinput").placeholder = "";
		var charno = sessionStorage.getItem('i');
		var ch = st.charAt(charno);
		for (j = 0; j < 3; j++) {
			for (k = 0; k < 10; k++) {
				if (arr[j][k] === ch) {
					row = j;
					col = k;
				}
				else if (ch === ' ') {
					row = 3;
					col = 2;
				}
			}
		}
		//console.log("Enter character " + (i + 1));
		var userinput = document.getElementById("textinput").value;
		userinput = userinput.toUpperCase();
		var ch2 = userinput.charAt(0);

		for (j = 0; j < 3; j++) {
			for (k = 0; k < 10; k++) {
				if (arr[j][k] === ch2) {
					row2 = j;
					col2 = k;
				}
				else if (ch2 === ' ') {
					row2 = 3;
					col2 = 2;
				}
			}
		}
		if (row < row2 && col < col2) {
			document.getElementById("output").innerHTML = ((row2 - row) + " UP " + (col2 - col) + " LEFT");
		}
		else if (row < row2 && col > col2) {
			document.getElementById("output").innerHTML = ((row2 - row) + " UP " + (col - col2) + " RIGHT");
		}
		else if (row < row2 && col == col2) {
			document.getElementById("output").innerHTML = ((row2 - row) + " UP ");
		}
		else if (row == row2 && col < col2) {
			document.getElementById("output").innerHTML = ((col2 - col) + " LEFT");
		}
		else if (row == row2 && col > col2) {
			document.getElementById("output").innerHTML = ((col - col2) + " RIGHT");
		}
		else if (row == row2 && col == col2) {
			document.getElementById("output").innerHTML = ("GOT IT!!");
			sessionStorage.setItem("i", ++i);

			if (sessionStorage.getItem('i') == st.length) {
				document.getElementById("output").innerHTML = ("!!Completed!!");
				sessionStorage.setItem("l", ++l);
				sessionStorage.setItem("i", 0);
				i = 0;

				if (sessionStorage.getItem('l') == words.length) {
					document.getElementById("textinput").disabled = true;
					document.getElementById("textinput").placeholder = "That's all for now. Thanks for using Visually Impaired Keyboard.";
				}
			}
		}
		else if (row > row2 && col < col2) {
			document.getElementById("output").innerHTML = ((row - row2) + " DOWN " + (col2 - col) + " LEFT");
		}
		else if (row > row2 && col > col2) {
			document.getElementById("output").innerHTML = ((row - row2) + " DOWN " + (col - col2) + " RIGHT");
		}
		else if (row > row2 && col == col2) {
			document.getElementById("output").innerHTML = ((row - row2) + " DOWN ");
		}
		setTimeout(function () { document.getElementById("textinput").value = '' }, 100);
		if (isitsentence == 0) {
			document.getElementById("txtInput").value = document.getElementById("output").innerHTML;
			document.getElementById("btnSpeak").click();
		}
		else {
			if (ch2 == ' ' || document.getElementById("output").innerHTML != ("GOT IT!!")) {
				document.getElementById("txtInput").value = document.getElementById("output").innerHTML;
				document.getElementById("btnSpeak").click();
			}
		}

		try {
			st = words[sessionStorage.getItem('l')];
			st = st.toUpperCase();
			document.getElementById("inputcomesherexd").innerHTML = st;
			catchingerr = 0;
		}
		catch (err) {
			catchingerr = 1;
			document.getElementById("inputcomesherexd").innerHTML = "!!YOU'VE COMPLETED THE SET!!"
			sessionStorage.setItem("l", 0);
		}

		if (document.getElementById("output").innerHTML == "!!Completed!!") {
			if (catchingerr == 1) {
				document.getElementById("txtInput").value = document.getElementById("inputcomesherexd").innerHTML;
			}
			else {
				document.getElementById("txtInput").value = "TYPE " + document.getElementById("inputcomesherexd").innerHTML;
			}
			document.getElementById("btnSpeak").click();
			if (isitletter == 1 && catchingerr == 0) {
				read();
			}
		}

		if(catchingerr == 1) {
			document.getElementById("txtInput").value = "RIGHT CLICK THE RED OUTPUT BOX TO MOVE TO THE NEXT COURSE. LEFT CLICK THE RED OUTPUT BOX TO RETRY THE CURRENT COURSE.";
			document.getElementById("btnSpeak").click();
		}
	}
}

var txtInput = document.querySelector('#txtInput');
var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if (speechSynthesis !== undefined) {
	speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', () => {
	var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
	var selectedVoiceName = 'Google US English';
	//var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
	voices.forEach((voice) => {
		if (voice.name === selectedVoiceName) {
			toSpeak.voice = voice;
		}
	});
	synth.speak(toSpeak);
});

function PopulateVoices() {
	voices = synth.getVoices();
	var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
	voiceList.innerHTML = '';
	voices.forEach((voice) => {
		var listItem = document.createElement('option');
		listItem.textContent = voice.name;
		listItem.setAttribute('data-lang', voice.lang);
		listItem.setAttribute('data-name', voice.name);
		voiceList.appendChild(listItem);
	});

	voiceList.selectedIndex = selectedIndex;
}

var sideopen = 0;

const toggleSidebar = () => {
	document.body.classList.toggle("open");
	sideopen++;
	if (sideopen % 2 == 1) {
		document.getElementById("burgericon").style.display = "none";
		document.getElementById("closeicon").style.display = "block";
		document.getElementById("textinput").placeholder = "";
	}
	else {
		document.getElementById("closeicon").style.display = "none";
		document.getElementById("burgericon").style.display = "block";
		document.getElementById("textinput").placeholder = "-Click here to start typing\n-Text in Blue is to be typed\n-Text in Red shows Key Placement\n-Keyboard below shows Keystrokes\n-It is Not for Typing\n-Click on \u2630 to change difficulty\n-Left Click to relisten";
	}
}

function redirect() {
	window.open("https://sundaramkumar.tk/");
}
