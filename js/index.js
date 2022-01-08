const fb = document.getElementById('facebook');
const gh = document.getElementById('github');
const ita = document.getElementById('instagram');

const socials = [
  {
    social: fb,
    link: 'https://facebook.com/van.ha.3112/',
  },
  {
    social: gh,
    link: 'https://github.com/HaMa05',
  },
  {
    social: ita,
    link: 'https://instagram.com/hafmaxdev/',
  },
];

socials.forEach((element) => {
  element.social.addEventListener('click', function () {
    view(element);
  });
});

function view(el) {
  window.open(el.link, '_blank');
}
