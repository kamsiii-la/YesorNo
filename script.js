const yes = document.getElementById("yes");
const no = document.getElementById("no");
const display = document.getElementById("display");
const gifCute = document.getElementById("gifCute");
const btnContainer = document.querySelector(".btnContainer");

const randomText = [
	"This hurts...",
	"Why don't you want to play with me? ",
	"I just wanted to play together...  ",
	"Did I do something wrong?",
];

let clickNo = 0;


yes.addEventListener("click", () => {
	gifCute.src = "thanks.gif";
	display.textContent = `THANK YOU`;
	btnContainer.style.display = "none";
});

no.addEventListener("click", () =>{

	clickNo++;

	if(clickNo >= 6){
		alert("THIS BUTTON CAN'T BE USED");
		alert("TRY THE OTHER BUTTON");
	}

	yes.style.fontSize = "30px";
	yes.style.padding = "20px 30px";
	yes.style.backgroundColor = "#FF8DA1";
	yes.style.color = "white";

	const random = randomText[Math.floor(Math.random() * randomText.length)];
	no.textContent = random;

	 

});
