const phoneInput = document.querySelector('.phone__input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const req = new XMLHttpRequest();
    req.open('POST', 'server.php');

    req.setRequestHeader('Content-Type', 'application/json');
    const formData = {};
    formData['phone'] = phoneInput.value;

    const json = JSON.stringify(formData);
    req.send(json);

    req.addEventListener('load', () => {
        if (req.status === 200) {
            alert('Данные успешно отправлены')
            console.log(req.response);
            form.reset();
        } else {
            alert(`Ошибка отправления данных: ${req.status}`);
        }
    })
})