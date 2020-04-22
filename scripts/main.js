let $addSubject = document.querySelector('.addSubject');
let $myList = document.querySelector('.myList');

function addSubject() {
    let li = document.createElement('li');
    $myList.appendChild(li);
}

$addSubject.addEventListener('click', addSubject);