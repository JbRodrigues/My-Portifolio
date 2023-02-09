const selected_buttons = document.querySelector('.exp-buttons');
const btns = document.querySelectorAll('.btns');

selected_buttons.addEventListener('click', e => {

    btns.forEach(btn => {

        if (btn.getAttribute('id') === e.target.getAttribute('id'))
            btn.classList.add('active');
        else
            btn.classList.remove('active');
    });
});
