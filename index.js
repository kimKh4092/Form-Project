function update() {
    const select = document.getElementById('q9');
    const option = select.options[select.selectedIndex];
    return option.text;
}
const numberOfQs = 8;
const listOfIds = []
for (let i = 1; i < numberOfQs + 1; i++) {
    listOfIds.push(document.getElementById(`q${i}`))
}


const form = document.getElementById("form");


form.addEventListener('submit', function (e) {
    e.preventDefault();


    let items = [];
    for (let i = 1; i < numberOfQs + 1; i++) {
        items.push(listOfIds[i - 1].value)

    }

    const q9Value = update();
    items.push(q9Value);

    localStorage.setItem('data', JSON.stringify(items))
    location.href = 'results.html';
})