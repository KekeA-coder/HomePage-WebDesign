const shapes = ['circle','rectangle','star','triangle','emoji'];
const emojis = ['🐶','🐱','🐸','🦊','🐼','🐵'];

const grid = document.getElementById('grid');

for (let i = 0; i < 16; i++) {
  const card = document.createElement('div');
  card.classList.add('card');

  const front = document.createElement('div');
  front.classList.add('face','front');

  const back = document.createElement('div');
  back.classList.add('face','back');

  const shape = shapes[Math.floor(Math.random() * shapes.length)];

  if (shape === 'emoji') {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    back.appendChild(emoji);
  } else {
    back.classList.add(shape);
  }

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });

  grid.appendChild(card);
}
