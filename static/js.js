// Получаем canvas и инициализируем WebGL
const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

// Проверка поддержки
if (!gl) {
    alert("WebGL is not supported by your browser.");
}

// Функция для ресайза canvas под размер окна
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
}

// Сразу вызываем и добавляем обработчик на ресайз
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Простейший рендер: красный фон
function render() {
    gl.clearColor(1.0, 0.0, 0.0, 1.0); // красный
    gl.clear(gl.COLOR_BUFFER_BIT);
    requestAnimationFrame(render);
}

render();
