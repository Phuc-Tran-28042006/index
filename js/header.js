document.addEventListener('DOMContentLoaded', function() {
    const headerItems = document.querySelectorAll('.header-left h3');
    const headerContainer = document.querySelector('.header-container');

    function applyHoverFunctionality() {
        if (window.innerWidth > 768) {
            headerItems.forEach(item => {
                item.addEventListener('mouseover', showBox);
                item.addEventListener('mouseleave', hideBox);
            });

            const boxes = document.querySelectorAll('.box');
            boxes.forEach(box => {
                box.addEventListener('mouseleave', hideBox);
            });

            headerContainer.addEventListener('mouseleave', hideAllBoxes);
        } else {
            headerItems.forEach(item => {
                item.removeEventListener('mouseover', showBox);
                item.removeEventListener('mouseleave', hideBox);
            });

            const boxes = document.querySelectorAll('.box');
            boxes.forEach(box => {
                box.removeEventListener('mouseleave', hideBox);
            });

            headerContainer.removeEventListener('mouseleave', hideAllBoxes);
        }
    }

    function showBox() {
        const id = this.classList[0].split('-')[1];
        const box = document.querySelector(`#header-${id}`);
        box.style.display = 'block';
    }

    function hideBox() {
        const id = this.classList[0].split('-')[1];
        const box = document.querySelector(`#header-${id}`);
        setTimeout(() => {
            if (!box.matches(':hover')) {
                box.style.display = 'none';
            }
        }, 200);
    }

    function hideAllBoxes() {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.style.display = 'none';
        });
    }

    applyHoverFunctionality();
    window.addEventListener('resize', applyHoverFunctionality);
});