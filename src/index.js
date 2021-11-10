// Scroll Animations
// Info section
const infoText = document.getElementById('info-text');
const infoTitle = document.getElementById('info-title');
const infoImg = document.getElementById('info-img');

// quote section variables
const quotes = Array.from(document.getElementsByClassName('quotes'))

document.addEventListener('scroll', () => {
    if (window.scrollY >= 440) {
        infoText.classList.add('info-fix-text');
        infoTitle.classList.add('info-fix-text');
        infoImg.classList.add('info--img-fix')
    }
})

//admin unlock 
const adminForm = document.getElementById('admin-form');
const adminInput = document.getElementById('admin-key');
const addTestBtn = document.getElementById('add-test-btn');

adminForm.addEventListener('submit', e => {
    e.preventDefault();
    const key = 'shoky'
    const value = adminInput.value;

    if (value == key) {
        addTestBtn.classList.remove('d-none');
        adminInput.classList.add('d-none')
    }
})

// JSON file

const xhr = new XMLHttpRequest;
xhr.open('GET', '../quiz.json', true);

xhr.onload = function () {
    if (this.status === 200) {
        const tests = JSON.parse(this.responseText);
        console.log(tests);
        console.log(this.responseText);
    }
}
xhr.send()