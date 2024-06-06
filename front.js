window.addEventListener('scroll', function() {
    var containerHeight = document.querySelector('.container').offsetHeight;
    var scrollPosition = window.scrollY;

    // Calculate the scroll position at which the image should start scrolling
    var imageScrollStart = containerHeight - window.innerHeight;

    if (scrollPosition >= imageScrollStart) {
        // Adjust the margin-top of text-container to make it scroll over the image
        var textContainer = document.querySelector('.text-container');
        var scrollDistance = scrollPosition - imageScrollStart;
        textContainer.style.marginTop = scrollDistance + 'px';
    } else {
        // Reset the margin-top if scroll is above the image
        document.querySelector('.text-container').style.marginTop = '100vh';
    }
});
