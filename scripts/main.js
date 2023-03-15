const items = [
  {
    text: "do the dishes",
    checked: true,
    dupa: 'tak'
  },
  {
    text: "walk the dog",
    checked: false,
  },
  {
    text: "throw away rubbish",
    checked: false,
  },
  {
    text: "wash the bag",
    checked: true,
  },
  {
    text: "aaa",
    checked: false,
  }
]

// adding fields:
const input = document.querySelector('.top__input');
const plus = document.querySelector('.top__button');
const parent = document.querySelector('.top__box');

const insert = function(text, checked) {
  const field = document.createElement('div');
  field.classList.add('top__field')
  parent.appendChild(field);
  field.innerHTML = `<div class="top__checkbox">
                      <img class="top__tick ${checked === true ? '' : 'top__hide'}" src="./assets/tick.svg" />
                    </div>
                    <p class="top__todo">${text}</p>
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

plus.addEventListener("click", function(){
  insert(input.value, false);
});

items.forEach(function(el) {
  insert(el.text, el.checked);
});
