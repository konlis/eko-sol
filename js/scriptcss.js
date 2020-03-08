(function () {
    "use strict"; 
    
   
    var content = Array.from(document.querySelector('#pages').children);
    var container = document.querySelector('.card-header');
   

    function requestContent(file) { 
        $('.content').load(file + ' .content'); 
    }

    
    function addCurrentClass(elem) { 

        var element = document.querySelector("." + elem); 
        element.classList.add('active'); }
        container.addEventListener('click', function (e) {

        if (e.target != e.currentTarget) { 
            e.preventDefault(); 
            var data = e.target.getAttribute('data-tab-for'), 
            url = data + ".php"; addCurrentClass(data); 
            history.pushState(data, null, url); 
            requestContent(url); 
        }
        e.stopPropagation();
    }, false); 
    
    window.addEventListener('popstate', function (e) {
         var character = e.state; 
         if (character == null) { 
             content.innerHTML = " "; 
            } else { 
                requestContent(character + ".php"); 
                addCurrentClass(character); 
            } })
})();