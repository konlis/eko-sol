
/*Change pages without reloading*/

function changePages () {

    this.pages = Array.from(document.querySelector('#pages').children);
    this.navLinks = Array.from(document.querySelectorAll('.nav-link'));
    this.buttons = Array.from(document.querySelectorAll('.link a'));
    //console.log(this.buttons, this.pages, this.navLinks);


    let pagesMatchingHash = [];

    if (window.location.hash.length > 10) {
        const idFromHash = window.location.hash.replace('#/','');
        //console.log('idFromHash', idFromHash);

        pagesMatchingHash = this.pages.filter(function (page) {
            return page.id == idFromHash;
        });
        //console.log('pagesMatchingHash', pagesMatchingHash);
    }
    this.activatePage(pagesMatchingHash.length ? pagesMatchingHash[0].id : this.pages[0].id);

    for (let link of this.navLinks) {
        link.addEventListener('click', function (event) {
            const clickedElement = this;
            event.preventDefault();
            /* TODO: get page id from href */
            const id = clickedElement.getAttribute('href').replace('#', '');
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

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
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