/* eslint-disable no-undef */

/*Change pages without reloading*/

function changePages () {

    this.pages = Array.from(document.querySelector('#pages').children);
    //this.tabs = Array.from(document.querySelector('#tabs').children);
    //this.allpages = this.pages + this.tabs;
    this.navLinks = Array.from(document.querySelectorAll('.nav-link'));
    this.buttons = Array.from(document.querySelectorAll('.link a'));
    //console.log(this.buttons, this.pages, this.navLinks);


    let pagesMatchingHash = [];

    if (window.location.hash.length > 0) {
        const idFromHash = window.location.hash.replace('#/','');
        console.log('idFromHash', idFromHash);

        pagesMatchingHash = this.pages.filter(function (page) {
            return page.id == idFromHash;
        });
        console.log('pagesMatchingHash', pagesMatchingHash);
    }
    this.activatePage(pagesMatchingHash.length ? pagesMatchingHash[0].id : this.pages[0].id);

    for (let link of this.navLinks) {
        link.addEventListener('click', function (event) {
            const clickedElement = this;
            event.preventDefault();
            /* TODO: get page id from href */
            const id = clickedElement.getAttribute('href').replace('#', '');
            console.log('id', id)
            /* TODO: activate page */
            activatePage(id);
        });
    }

    for (let link of this.buttons) {
        link.addEventListener('click', function (event) {
            const clickedElement = this;
            event.preventDefault();
            /* TODO: get page id from href */
            const id = clickedElement.getAttribute('href').replace('#', '');
            /* TODO: activate page */
            activatePage(id);
        });
    }
}

function activatePage (pageId) {

    for (let link of this.navLinks) {
        link.classList.toggle('active', link.getAttribute('href') == '#' + pageId);
        //console.log('link', link);
    }
    for (let page of this.pages) {
        page.classList.toggle('active', page.id == pageId);
        //console.log('page', page);
    }
    window.location.hash = '#/' + pageId;
    //console.log('hash', window.location.hash);
}

changePages();

/*Contact form*/

window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    var form = document.getElementById("ajax-contact");
    var button = document.getElementById("submit-button");
    var status = document.getElementById("form-messages");

   // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
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
    var formWycena = document.getElementById("wycena-contact");
    var buttonWycena = document.getElementById("submit-button-wycena");
    var statusWycena = document.getElementById("wycena-status");

    // Success and Error functions for after the form is submitted

    function success() {
        formWycena.reset();
        buttonWycena.style = "display: none ";
        statusWycena.innerHTML = "Dziękujemy za wypełnienie formularza. Bierzeme się za wycenę."
    }

    function error() {
        statusWycena.innerHTML = "Coś poszło nie tak!";
    }

    // handle the form submission event

    formWycena.addEventListener("submit", function (ev) {
        ev.preventDefault();
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

const btn = document.querySelector('.actionbtn');
const form = document.querySelector('.active-form');
const closeForm = document.querySelector('.fa-times');

    btn.addEventListener('click', function() {
        form.classList.toggle('active-form')
    });
    closeForm.addEventListener('click', function(){
        form.classList.add('active-form')
    });
    


   
