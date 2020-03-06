/* eslint-disable no-undef */

/*Change pages without reloading*/

const navlinks = document.querySelectorAll('.navbar-nav a'),
    link = document.querySelectorAll('.link a'),
    content = document.querySelectorAll('section'),
    pages = Array.from(document.querySelector('#pages').children);

    document.addEventListener('DOMContentLoaded', () => {
    history.pushState(null, null, null)
    
    for (let navlink of navlinks) {
        navlink.addEventListener('click', currentHref);
    }

    window.addEventListener('hashchange', haschChange);
    window.addEventListener('popstate', popstate);
});


    function currentHref(ev) {
        ev.preventDefault();
            let href = ev.currentTarget.href;
            console.log(href, 'href');

            for (let page of pages) {


            
            if (page.getAttribute('id') == href) {
                page.classList.toggle('active');
            }
       
        }
            //show();
    }

    function haschChange(ev) {
        console.log(ev)
        //show(e);
    }

    function popstate(e) {
    console.log(e)
    //show(e);
    }   

    // function show() {
    //     for (let page of pages) {
            
            
    //         console.log('page', page);
    //         if (page.getAttribute('id') !== currentHref(show)) {
    //             page.classList.remove('active');
    //         }
    //         else {
    //              page.classList.add('active')
    //         }
    //     }
    // }



/*Contact form*/

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
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("contact");
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


// const tabs = 
// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//     console.log("tab shown...");
//     localStorage.setItem('activeTab', $(e.target).attr('href'));
// });

// // read hash from page load and change tab
// var activeTab = localStorage.getItem('activeTab');
// if (activeTab) {
//     $('.nav-tabs a[href="' + activeTab + '"]').tab('show');
//     console.log("tab ", activeTab);
// }

/*Dynamic Contact form*/

    
window.onload = function(){

    function toggleModal() {
        
        //const form = document.querySelector('.modal-content');
        
        const modal = document.querySelector('.dynamicForm');

        modal.classList.toggle('modal-hidden');
    }

    const closeForm = document.querySelector('.fa-times');
    const btn = document.querySelector('.actionbtn');

    btn.addEventListener('click', toggleModal);
    closeForm.addEventListener('click', toggleModal);

// closeModal(e);
//     function closeModal(e) {
//     if (e.target.modal != 'modal') {
//         closeForm.addEventListener('click', toggleModal);
//         console.log(target, 'target')
//     }
// }
    
}


