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
arr[1][9] = ' ';
arr[2][0] = 'Z';
arr[2][1] = 'X';
arr[2][2] = 'C';
arr[2][3] = 'V';
arr[2][4] = 'B';
arr[2][5] = 'N';
arr[2][6] = 'M';
arr[2][7] = ' ';
arr[2][8] = ' ';
arr[2][9] = ' ';
/*for (i=0; i < 3; i++)
{
	for (j=0; j < 10; j++)
	{
		console.log(arr[i][j] + "\t");
	}
	console.log();
}*/
//console.log("Enter a word");
const words = ["HOMIE", "LESS", "GO", "MOYAI", "EMOJI", "DANK"];
var st = "HOMIE";
st = st.toUpperCase();
document.getElementById("inputcomesherexd").innerHTML = st;
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
					document.getElementById("textinput").placeholder = "That's all for now. Thanks for using Blind Keyboard.";
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
		document.getElementById("txtInput").value = document.getElementById("output").innerHTML;
		document.getElementById("btnSpeak").click();

		try {
			st = words[sessionStorage.getItem('l')];
			st = st.toUpperCase();
			document.getElementById("inputcomesherexd").innerHTML = st;
		}
		catch (err) {
			catchingerr = 1;
			document.getElementById("inputcomesherexd").innerHTML = "!!YOU'VE COMPLETED THE SET!!"
		}

		if (document.getElementById("output").innerHTML == "!!Completed!!") {
			if (catchingerr == 1) {
				document.getElementById("txtInput").value = document.getElementById("inputcomesherexd").innerHTML;
			}
			else {
				document.getElementById("txtInput").value = "TYPE " + document.getElementById("inputcomesherexd").innerHTML;
			}
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