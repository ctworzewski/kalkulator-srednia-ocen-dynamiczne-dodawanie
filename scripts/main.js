let $addSubject = document.querySelector('.addSubject');
let $myList = document.querySelector('.myList');

function addSubject() {
    let li = document.createElement('li');
    let input = document.createElement('input');
    $myList.appendChild(li);
    input.type = 'Number';
    li.appendChild(input);
    console.log(typeof input)
}

$addSubject.addEventListener('click', addSubject);