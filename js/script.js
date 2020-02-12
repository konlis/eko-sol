function changePages () {

    this.pages = Array.from(document.querySelector('#pages').children);
    this.navLinks = Array.from(document.querySelectorAll('.nav-link'));
    this.buttons = Array.from(document.querySelectorAll('.link a'));
    console.log(this.buttons, this.pages, this.navLinks);


    let pagesMatchingHash = [];

    if (window.location.hash.length > 10) {
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
        console.log('link', link);
    }
    for (let page of this.pages) {
        page.classList.toggle('active', page.id == pageId);
        console.log('page', page);
    }
    window.location.hash = '#/' + pageId;
    console.log('hash', window.location.hash);
}

changePages();