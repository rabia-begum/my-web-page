function initCarousel(width){
    var current = 0;
    var playIntervalID;
    var isPaused = false;

    var carouselContainer = document.querySelector('.carousel-container');
    var images = carouselContainer.querySelectorAll('img[data-image]');
    var imagesContainer = document.querySelector('.images');
    carouselContainer.style.width = (images.length * width) + 'px';
    imagesContainer.style.width = width;

    var prevLink = document.querySelector('.arrow.prev');
    var nextLink = document.querySelector('.arrow.next');
    var state = document.querySelector('.state');

    prevLink.addEventListener('click', function(e){
        e.preventDefault();
        pause();
        prev();
    }); 
    
    nextLink.addEventListener('click', function(e){
        e.preventDefault();
        pause();
        next();
    });

    state.addEventListener('click', function(e){
        e.preventDefault();
        if(isPaused){
            this.classList.remove('paused');
            isPaused = false;
            play();
        }else {
            this.classList.add('paused');
            pause();
            isPaused = true;
        }
       
    });

    document.body.addEventListener('keydown', function(e){
        pause();
        if(e.code === 'ArrowRight'){
            next();
        }else if (e.code === 'ArrowLeft'){
            prev();
        }

    });

    function next(){
        current++;
        current = current >= images.length ? 0 : current;
        carouselContainer.style.marginLeft = (-current * width) + 'px';
    }

    function prev(){
        current--;
        current = current < 0 ? 0 : current;
        carouselContainer.style.marginLeft = (-current * width) + 'px';
    }

    function play(){
        playIntervalID = window.setInterval(function(){
            next();
        }, 1000 * 3);
    }

    function pause(){
        window.clearInterval(playIntervalID);
        state.classList.add('paused');
        isPaused = true;
    }

    play();


};

window.addEventListener('DOMContentLoaded', function(event){
    console.log(event.type, event);
    var helloLink = document.getElementById('hello-link');
    var startOverLink = document.getElementById('start-over-link');
    helloLink.addEventListener('click', function(linkEvent){
        linkEvent.preventDefault();
        this.classList.add('hide');
        var intro = document.querySelector('.intro');
        intro.classList.remove('hide');
        startOverLink.classList.remove('hide');
    });
    var progressLink = document.getElementById('progress-link');
    progressLink.addEventListener('click', function(linkEvent){
        linkEvent.preventDefault();
        this.classList.add('text');
        var detail = document.querySelector('.detail');
        detail.classList.remove('hide');
        document.body.classList.add('font-family');
    })
    var doesItLink = document.getElementById('does-it-link');
    doesItLink.addEventListener('click', function(linkEvent){
        linkEvent.preventDefault();
        this.classList.add('text');
        var pictureText = document.querySelector('.picture-text');
        pictureText.classList.remove('hide');
        document.body.classList.add('layout');
    })
    var picturesLink = document.getElementById('pictures-link');
    picturesLink.addEventListener('click', function(linkEvent){
        linkEvent.preventDefault();
        this.classList.add('text');
        var touchText = document.querySelector('.touch-text');
        touchText.classList.remove('hide');
        document.body.classList.add('flexy');  
    })
    var touchLink = document.getElementById('touch-link');
    touchLink.addEventListener('click', function(linkEvent){
        linkEvent.preventDefault();
        document.body.classList.add('carousel');
        initCarousel(400);
        localStorage.setItem('touched', 'yes');
    });

    var touched = localStorage.getItem('touched');
    if(touched === 'yes'){
        helloLink.click();
        progressLink.click();
        doesItLink.click();
        picturesLink.click();
        touchLink.click();
    }  
    
    startOverLink.addEventListener('click', function(linkEvent){
        localStorage.removeItem('touched');
        window.location.reload();
    });
});
