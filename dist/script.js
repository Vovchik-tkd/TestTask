'use strict';

var phoneInput = document.querySelector('.phone__input');
var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var req = new XMLHttpRequest();
    req.open('POST', 'server.php');

    req.setRequestHeader('Content-Type', 'application/json');
    var formData = {};
    formData['phone'] = phoneInput.value;

    var json = JSON.stringify(formData);
    req.send(json);

    req.addEventListener('load', function () {
        if (req.status === 200) {
            alert('Данные успешно отправлены');
            console.log(req.response);
            form.reset();
        } else {
            alert('\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445: ' + req.status);
        }
    });
});