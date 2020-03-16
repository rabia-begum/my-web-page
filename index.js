window.addEventListener('DOMContentLoaded', function(event){
    console.log(event.type, event);
    var helloLink = document.getElementById('hello-link');
    helloLink.addEventListener('click', function(linkEvent){
        linkEvent.preventDefault();
        console.log('Hello world!');
    })
})
