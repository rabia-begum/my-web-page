window.addEventListener('DOMContentLoaded', function(event){
    console.log(event.type, event);
    var helloLink = document.getElementById('hello-link');
    helloLink.addEventListener('click', function(linkEvent){
        linkEvent.preventDefault();
        this.classList.add('hide');
        var intro = document.querySelector('.intro');
        intro.classList.remove('hide');
    });
    var progressLink = document.getElementById('progress-link');
    progressLink.addEventListener('click', function(linkEvent){
        linkEvent.preventDefault();
        this.classList.add('text');
        var detail = document.querySelector('.detail');
        detail.classList.remove('hide');
        document.body.classList.add('font-family');
    })
})
