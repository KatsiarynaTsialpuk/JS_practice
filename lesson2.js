//задание 1
const element = document.createElement('div');
document.body.appendChild(element);
element.textContent = 'Этот элемент создан при помощи DOM API';

//задание 2
const element2 = document.createElement('div');
element2.classList.add('inner');
element2.textContent = 'Этот элемент тоже создан при помощи DOM API';
element.appendChild(element2);

//задание 3
element2.style.color = 'red';

//задание 4
element.addEventListener('click', function () {
    console.log('Этот текст говорит о том, что я всё сделал правильно');
});

//задание 5
const link = document.createElement('a');
document.body.appendChild(link);
link.textContent = 'Ссылка';
link.addEventListener('click', function(e) {
// e.preventDefault();
console.log('Я кликнул на ссылку' +  location.href('https://loftschool.com'));
});