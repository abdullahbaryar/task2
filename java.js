function bgc(color) {
	document.body.style.background = color;
}


newtxt = document.getElementById('txt');
newmail = document.getElementById('mail');
newkm = document.getElementById('km');
newbt = document.getElementById('bt');
newbt.addEventListener("click", function () {
	if (newmail.value === "") {
		newtxt.innerText = "Enter mile value"
	}
	else {
		newtxt.innerText = ""
		newkm.value = newmail.value * 1.6093
	}
})



newtst = document.getElementById('tst')
newgr = document.getElementById('gr')
newkg = document.getElementById('kg')
newbtn = document.getElementById('btn')
newbtn.addEventListener("click", function () {
	if (newgr.value === "") {
		newtst.innerText = "Enter gram value"
	} else {
		newtst.innerText = ""
		newkg.value = newgr.value * 0.001
	}
})


let screen = document.getElementById('screen');
let calbtn = document.querySelectorAll('#cbtn');
let inval = '';
for (let i of calbtn) {
	i.addEventListener('click', (e) => {
		dfg = e.target.innerText;

		if (dfg == 'x') {
			dfg = '*';
			inval += dfg;
			screen.value += dfg;
		} else if (dfg == 'c') {
			screen.value = " ";
		} else if (dfg == '=') {
			screen.value = eval(inval);
		} else {
			inval += dfg;
			screen.value += dfg;
		}
	})

}


let cel = document.getElementById('cel');
let fah = document.getElementById('fah');

cel.addEventListener('input', function () {
	let c = this.value;
	let f = (c * 9 / 5) + 32;
	fah.value = f;
})

fah.addEventListener('input', function () {
	let f = this.value;
	let c = (f - 32) * 5 / 9;
	cel.value = c;
})


let textarea = document.getElementById('textarea');

textarea.addEventListener('input', function () {
	let x = this.value;
	let z = x.toUpperCase();
	let y = x.length;
	document.getElementById('ch').innerHTML = y;

	x = x.trim();
	let word = x.split(" ");
	let clen = word.filter(function (e) {
		return e != '';
	})
	document.getElementById('wd').innerHTML = clen.length;
})




let flg = 0;
function sid(par) {
	flg = flg + par;
	img(flg);
}
img(flg);
function img(nm) {
	let slider = document.getElementsByClassName('slider');
	if (nm == slider.length) {
		flg = 0;
		nm = 0;
	}
	if (nm < 0) {
		flg = slider.length - 1;
		nm = slider.length - 1;
	}
	for (let y of slider) {
		y.style.display = 'none';
	}
	slider[nm].style.display = 'block';

}


let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start() {
	timer = true;
	seettime();
}
function stop() {
	timer = false;
}
function reset() {
	timer = false;
	hr = 0;
	min = 0;
	sec = 0;
	count = 0;
	document.getElementById('hr').innerHTML = '00';
	document.getElementById('min').innerHTML = '00';
	document.getElementById('sec').innerHTML = '00';
	document.getElementById('count').innerHTML = '00';

}
function seettime() {

	if (timer == true) {
		count = count + 1;
		if (count == 100) {
			count = 0;
			sec = sec + 1;
		}
		if (sec == 60) {
			count = 0;
			sec = 0;
			min = min + 1;
		}
		if (min == 60) {
			sec = 0;
			min = 0;
			hr = hr + 1;
		}
		
		document.getElementById('hr').innerHTML = hr;
		document.getElementById('min').innerHTML = min;
		document.getElementById('sec').innerHTML = sec;
		document.getElementById('count').innerHTML = count;
		setTimeout('seettime()', 10)
	}
}

function setper(){
	let compt=document.getElementById('compt').value;
	let math=document.getElementById('math').value;
	let eng=document.getElementById('eng').value;
	let sci=document.getElementById('sci').value;
	let grade='';

	let total=parseFloat(compt) + parseFloat(math) + parseFloat(eng) + parseFloat(sci) ;
	let percentage = (total/400)*100;
	if (percentage <= 100 && percentage >= 80) {
		 grade='A';
	} else if(percentage <= 79 && percentage >= 60){
		grade='B';
	} else if(percentage <= 59 && percentage >= 40){
		grade='C';
	}else{
		grade='F';
	}
	document.getElementById('pertext').innerHTML=`out of 400 your total is ${total} and percentage is ${percentage}
	your grade is ${grade}.`
}