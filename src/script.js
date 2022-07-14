const colors = [
	"#FF0000",
	"#00FF00",
	"#0000FF",
	"#F15025",
	"#FF1155",
	"#DFFF00",
	"#FE828C",
	"#008000",
	"#FF4500",
	"#BF00FF",
	"#00FFFF",
	"#7FFFD4",
	"#BDB990",
	"#32CD32",
	"#0067A5",
	"#30D5C8",
	"#A52A2A",
	"#50C878",
	"	#E6E6FA",
	"#EE82EE",
	"#008080",
	"#00FFBF",
	"rgba(133,122,200)"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	// get random no btw o-22
	const randomNumber = getRandomNumber();
	console.log(randomNumber);

	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
