// Cargar tema guardado al iniciar
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const switcher = document.getElementById('theme-switcher');
    if (switcher) {
        switcher.checked = (savedTheme === 'dark');
    }
});

// Cambiar tema
const themeSwitcher = document.getElementById('theme-switcher');
if (themeSwitcher) {
    themeSwitcher.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Actualizar valor del slider
const volSlider = document.getElementById('volumen');
const volValue = document.querySelector('.range-value');
if (volSlider && volValue) {
    volSlider.addEventListener('input', function() {
        volValue.textContent = this.value + '%';
    });
}