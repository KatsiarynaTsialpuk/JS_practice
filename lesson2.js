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
e.preventDefault();
console.log('Я кликнул на ссылку ' +  link.setAttribute('href', 'https://loftschool.com'));
});

//задание 6
const btn = document.createElement('button');
const input = document.createElement('input');
document.body.appendChild(btn);
document.body.appendChild(input);

input.classList.add('Form')

btn.textContent = 'Btn';
btn.addEventListener('click', function(e) {
    e.preventDefault();

console.log(input.value);
});

//задание 7
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computed = getComputedStyle(items);

right.addEventListener("click", function(e) {
  e.preventDefault();
  let curentRight = parseInt(computed.right);
  if (!curentRight) {
      curentRight = 0;
  }

  if (curentRight < 500) {
      items.style.right = curentRight + 100 + 'px';
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  let curentRight = parseInt(computed.right);
  if (!curentRight) {
      curentRight = 0;
  }

  if (curentRight > 0) {
      items.style.right = curentRight - 100 + 'px';
  }
});
