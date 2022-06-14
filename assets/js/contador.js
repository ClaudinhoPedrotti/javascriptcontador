let count = 0;

const CURRENT_NUMBER = document.getElementById('contador');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    document.body.style.backgroundColor = 'pink';
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    document.body.style.backgroundColor = 'yellow';
}
