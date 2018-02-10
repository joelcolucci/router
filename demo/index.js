import Router from '/assets/router.js';


let router = new Router();


router.route('/:id', (ctx) => {
  let main = document.querySelector('main');

  let elem = document.createElement('h1');
  elem.textContent = `Im the ${ctx.params.id} page.`;

  main.innerHTML = '';
  main.appendChild(elem);
});


router.route('/', (ctx) => {
  let main = document.querySelector('main');

  let elem = document.createElement('h1');
  elem.textContent = 'Im the root page.';

  main.innerHTML = '';
  main.appendChild(elem);
});


router.enable();