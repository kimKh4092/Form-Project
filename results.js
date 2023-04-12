

const data = JSON.parse(localStorage.getItem('data'))
for (let i = 1; i < 10; i++) {
    document.getElementById(`ans${i}`).textContent = data[i - 1];

}
