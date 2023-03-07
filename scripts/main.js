// adding fields:

const input = document.querySelector('.top__input');
const plus = document.querySelector('.top__button');
const insert = function() {
    const parent = document.querySelector('.top__box');
    const field = document.createElement('div');
    field.classList.add('top__field')
    parent.appendChild(field);
    field.innerHTML = ` <div class="top__checkbox">
                            <img class="top__tick top__hide" src="./assets/tick.svg" />
                        </div>
                        <p class="top__todo">${input.value}</p>
                        <div class="top__minus">X</div>`;

// resetting input's placeholder

    input.value = null

// checking boxes:

const box = field.querySelector('.top__checkbox');
const tick = field.querySelector('.top__tick');

    box.addEventListener("click", function() {
        tick.classList.toggle('top__hide')
    })

// removing task:

const minus = field.querySelector('.top__minus');

minus.addEventListener("click", function() {
    minus.parentElement.remove();
})
};

plus.addEventListener("click", insert);

