function slide1() {
    document.getElementById('slide').src='./images/riodejaneiro.jpg';
    setTimeout("slide2()", 2000);
}

function slide2() {
    document.getElementById('slide').src='./images/destinosnacionais.jpg';
    setTimeout("slide3()", 2000);
}

function slide3() {
    document.getElementById('slide').src='./images/londres.jpg';
    setTimeout("slide1()", 2000);
}

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,    
    }
    let convertData = JSON.stringify(data);
    
    localStorage.setItem('lead', convertData);

    nome.value = '';
    email.value = '';
});