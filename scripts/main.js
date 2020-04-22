let $addSubject = document.querySelector('.addSubject');
let $myList = document.querySelector('.myList');

function addSubject() {
    let $nameSubject = document.querySelector('.nameSubject').value;
    let li = document.createElement('li');
    let input = document.createElement('input');
    li.textContent = $nameSubject;
    f
    $myList.appendChild(li);
    input.type = 'Number';
    li.appendChild(input);
    console.log(typeof input)
}

$addSubject.addEventListener('click', addSubject);