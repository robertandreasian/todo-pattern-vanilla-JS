const arrayHistory = [];
const input = document.createElement('input');
const button = document.createElement('button');
const list = document.createElement('ul');
button.textContent = 'search';

document.body.append(input,button, list)

function adding() {
    if (input.value !== '') {
        arrayHistory.push(input.value);
        input.value = '';
        list.innerHTML = '';
    }
        arrayHistory.forEach(item => {
            const li = document.createElement('li');
            list.append(li);
            li.textContent = item;
        })
        if (arrayHistory.length > 9) {
            arrayHistory.shift();
        }
}

button.addEventListener('click', adding);