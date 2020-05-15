/*Dynamic form*/

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above
  var form = document.getElementById("ajax-contact");
  //var button = document.getElementById("submit-button");
  var status = document.getElementById("form-messages");

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

window.addEventListener("DOMContentLoaded", function (ev) {
  function toggleModal() {
    const modal = document.querySelector(".dynamicForm");

    modal.classList.toggle("modal-hidden");
  }

  const closeForm = document.querySelector(".fa-times");
  const btn = document.querySelector(".actionbtn");

  btn.addEventListener("click", toggleModal);
  closeForm.addEventListener("click", toggleModal);
});
