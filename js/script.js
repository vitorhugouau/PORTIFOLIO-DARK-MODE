// const chk = document.getElementById('chk')

// chk.addEventListener('change', () => {
//   document.documentElement.classList.toggle('dark');
// })

const chk = document.getElementById('chk');

// Verifica o tema e o estado dos ícones ao carregar a página
const isDarkMode = localStorage.getItem('theme') === 'dark';
const isIconCharged = localStorage.getItem('iconState') === 'charged';

if (isDarkMode) {
  document.documentElement.classList.add('dark');
  chk.checked = true;
}

if (isIconCharged) {
  document.querySelectorAll('.icon').forEach((element) => {
    element.classList.add('charge');
  });
}

// Evento de mudança no checkbox
chk.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark');

  // Armazena a preferência do tema no localStorage
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  // Altera a classe dos elementos com a classe 'icon' e armazena no localStorage
  var content = document.querySelectorAll('.icon');
  if (chk.checked) {
    content.forEach((element) => {
      element.classList.add('charge');
    });
    localStorage.setItem('iconState', 'charged');
  } else {
    content.forEach((element) => {
      element.classList.remove('charge');
    });
    localStorage.setItem('iconState', 'uncharged');
  }
});

