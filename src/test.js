const xhr = new XMLHttpRequest;
xhr.open('GET', '../../quiz.json', true);

xhr.onload = function () {
    if (this.status === 200) {
        const tests = JSON.parse(this.responseText);
        console.log(tests);
        console.log(this.responseText);
    }
}
xhr.send()
