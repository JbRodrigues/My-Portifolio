const selected_buttons = document.querySelector('.exp-buttons');
const btns = document.querySelectorAll('.btns');

const soft = document.querySelector('.exp-soft');
const zazz = document.querySelector('.exp-zazz');

selected_buttons.addEventListener('click', e => {

    btns.forEach(btn => {

        if (btn.getAttribute('id') === e.target.getAttribute('id')) {
            alert(btn.getAttribute('id'))
            btn.classList.add('active');

            if(btn.getAttribute('id') == 'zazz'){
                soft.style.display = 'none'
                zazz.style.display = 'block'
            }else{
                soft.style.display = 'block'
                zazz.style.display = 'none'
            }
        } else {
            btn.classList.remove('active');
        }

        if (btn.getAttribute('id') == "exp-2") {
            btn.getAttribute('id').style.display = "block"
        }
    });
});
