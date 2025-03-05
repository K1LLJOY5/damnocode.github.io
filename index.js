document.querySelector('.menu').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
            
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, behavior: 'smooth'
            });
     }
    }
});

document.querySelector('.logo-link').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perpindahan default
    const target = document.querySelector('#menu');
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 50, // Sesuaikan offset jika ada navbar tetap
            behavior: 'smooth'
        });
    }
});

// tombol burger
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');

// on off menu
tombol.addEventListener('click', () => {
    menu.classList.toggle('aktif');
});
