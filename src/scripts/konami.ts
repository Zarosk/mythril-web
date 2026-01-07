// Konami Code Easter Egg: ↑↑↓↓←→←→BA
const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

let position = 0;

function handleKeyDown(e: KeyboardEvent) {
  const key = e.key;

  if (key === KONAMI[position]) {
    position++;

    if (position === KONAMI.length) {
      activateDwarvishMode();
      position = 0;
    }
  } else {
    position = 0;
  }
}

function activateDwarvishMode() {
  document.body.classList.toggle('dwarvish-mode');

  // Show notification
  const notification = document.createElement('div');
  notification.className = 'dwarvish-notification';
  notification.innerHTML = '🪨 You have discovered the secret of the dwarves!';
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);

  console.log('🪨 Dwarvish Mode Activated! The mines of Moria welcome you.');
}

document.addEventListener('keydown', handleKeyDown);
