document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('.section');
    let index = 0;
    let scrolling = false;

    function scrollToSection(index) {
        window.scrollTo({
            top: sections[index].offsetTop,
            behavior: 'smooth'
        });
    }

    document.addEventListener('wheel', function (event) {
        if (!scrolling) {
            scrolling = true;

            if (event.deltaY > 0 && index < sections.length - 1) {
                index++;
                scrollToSection(index);
            } else if (event.deltaY < 0 && index > 0) {
                index--;
                scrollToSection(index);
            }

            setTimeout(function () {
                scrolling = false;
            }, 1000); 
        }
    });
});