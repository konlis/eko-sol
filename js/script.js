/* eslint-disable no-undef */

/*Contact forms*/

/*Dynamic form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("ajax-contact");
    //var button = document.getElementById("submit-button");
    var status = document.getElementById("form-messages");

   // Success and Error functions for after the form is submitted

    // function validate() {
    //     var num = document.form.kwpln.value;
    //     console.log(num,'num')
    //     if (isNaN(num)) {
    //         document.getElementById("numloc").innerHTML = "Enter Numeric value only";
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }   

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy. Oddzwonimy o wskazanej porze.";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

/*O-nas form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("onas-contact");
    console.log("onas form", form)
    //var button = document.getElementById("contact-button");
    var status = document.getElementById("form-onas-contact");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy za wypełnienie formularza";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

/*Wspolpraca form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("wspolpraca-contact");
    console.log("form-wspolpraca", form);
    //var button = document.getElementById("contact-button");
    var status = document.getElementById("form-wspolpraca-contact");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy za wypełnienie formularza";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

/*Fotowoltaika form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("foto-contact");
    console.log("contact", form)
    //var button = document.getElementById("contact-button");
    var status = document.getElementById("form-foto-contact");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy za wypełnienie formularza";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

/*Pompy form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("pompy-contact");
    //var button = document.getElementById("contact-button");
    var status = document.getElementById("form-pompy-contact");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy za wypełnienie formularza";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

/*Folie form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("folie-contact");
    //var button = document.getElementById("contact-button");
    var status = document.getElementById("form-folie-contact");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy za wypełnienie formularza";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

/*Folie form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("termo-contact");
    //var button = document.getElementById("contact-button");
    var status = document.getElementById("form-termo-contact");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy za wypełnienie formularza";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

/*Wycena form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var formWycena = document.getElementById("wycena-contact");
    //var buttonWycena = document.getElementById("submit-button-wycena");
    var statusWycena = document.getElementById("wycena-status");

    // Success and Error functions for after the form is submitted

    function success() {
        formWycena.reset();
        //buttonWycena.style = "display: none ";
        statusWycena.style = "display: block";
        statusWycena.innerHTML = "Dziękujemy za wypełnienie formularza. Zadzwonimy do Ciebie z informacją o wycenie."
    }

    function error() {
        statusWycena.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    formWycena.addEventListener("submit", function (ev) {
        ev.preventDefault();

        const moc = document.getElementById("moc");
        moc.addEventListener("input", function () {
            if (moc.validity.typeMismatch) {
                moc.setCustomValidity("I am expecting an e-mail address!");
            } else {
                moc.setCustomValidity("");
            }
        });
        var data = new FormData(formWycena);
        ajax(formWycena.method, formWycena.action, data, success, error);
    });
});

/*Disable if check value*/

const checkedOption = document.getElementById('grunt');
const disableSelect = document.getElementById('poszycie');
const choiceSelected = document.getElementById('montaz');

choiceSelected.addEventListener('click', function(){
    if (checkedOption.selected) {
        disableSelect.disabled=true; 
    } else {
        disableSelect.disabled = false; 
    }
});

/*Kontakt form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("contact");
    console.log("kontakt from dcript js", form);
    //var button = document.getElementById("contact-button");
    var status = document.getElementById("form-contact");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy za wypełnienie formularza";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

/*Moj prad form*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("prad-contact");
    //var button = document.getElementById("contact-button");
    var status = document.getElementById("form-prad-contact");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy za wypełnienie formularza";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

/*Czyste powietrze form*/
window.addEventListener("DOMContentLoaded", function (event) {
    console.log("czyste powietrze", event)
    // get the form elements defined in your form HTML above
    var form = document.getElementById("powietrze-contact");
    //var button = document.getElementById("contact-button");
    var status = document.getElementById("form-powietrze-contact");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        //button.style = "display: none ";
        status.style = "display: block";
        status.innerHTML = "Dziękujemy za wypełnienie formularza";
    }

    function error() {
        status.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

 // helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

/*Dynamic Contact form*/

    
// window.onload = function(){

//     function toggleModal() {
        
//         const modal = document.querySelector('.dynamicForm');

//         modal.classList.toggle('modal-hidden');
//     }

//     const closeForm = document.querySelector('.fa-times');
//     const btn = document.querySelector('.actionbtn');

//     btn.addEventListener('click', toggleModal);
//     closeForm.addEventListener('click', toggleModal);
    
//     }

window.addEventListener("DOMContentLoaded", function (ev) {
    console.log(ev , "loaded")

    function toggleModal() {
        
        const modal = document.querySelector('.dynamicForm');

        modal.classList.toggle('modal-hidden');
    }

    const closeForm = document.querySelector('.fa-times');
    const btn = document.querySelector('.actionbtn');
    

    btn.addEventListener('click', toggleModal);
    console.log("click", btn);
    
    
    closeForm.addEventListener('click', toggleModal);
    
    })

