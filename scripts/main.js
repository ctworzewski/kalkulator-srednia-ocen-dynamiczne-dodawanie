let $addSubject = document.querySelector('.addSubject');
let $myList = document.querySelector('.myList');
let $enumerateAverage = document.querySelector('.enumerateAverage')

function addSubject() {
    let $nameSubject = document.querySelector('.nameSubject').value;
    let li = document.createElement('li');
    let input = document.createElement('input');
    li.textContent = $nameSubject;
    $myList.appendChild(li);
    input.type = 'Number';
    li.appendChild(input);
    // console.log(typeof input)
}

function enumerateAverage() {
    let inputLists = document.querySelectorAll('li > input');
    let amount = 0;
    inputLists.forEach(element => {
        console.log(element.value);
        amount = amount + Number(element.value);
        // console.log(amount);
    });
    let average = amount / inputLists.length;
    let p = document.createElement('p');
    p.textContent = `Średnia ocen to: ${average}`;
    document.body.appendChild(p);
    console.log('Średnia ocen to: ', average);
}

$addSubject.addEventListener('click', addSubject);
$enumerateAverage.addEventListener('click', enumerateAverage)