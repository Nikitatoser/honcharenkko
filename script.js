// JavaScript для перевертання карточок навичок
function toggleCard(folder) {
    folder.classList.toggle('flipped');
}

// Додавання з'єднань між блоками
function createLine(x1, y1, x2, y2) {
    const line = document.createElement("div");
    line.className = "line";
    line.style.height = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) + "px";
    line.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI}deg)`;
    line.style.top = y1 + "px";
    line.style.left = x1 + "px";
    document.body.appendChild(line);
  }

  window.onload = () => {
    const center = document.querySelector(".center-block");
    const leftBlocks = document.querySelectorAll(".column:first-child .column-block");
    const rightBlocks = document.querySelectorAll(".column:last-child .column-block");
    
    leftBlocks.forEach(block => {
      createLine(center.offsetLeft + center.offsetWidth / 2, center.offsetTop + center.offsetHeight, 
                 block.offsetLeft + block.offsetWidth / 2, block.offsetTop);
    });
    
    rightBlocks.forEach(block => {
      createLine(center.offsetLeft + center.offsetWidth / 2, center.offsetTop + center.offsetHeight, 
                 block.offsetLeft + block.offsetWidth / 2, block.offsetTop);
    });
  };// Додавання з'єднань між блоками
  function createLine(x1, y1, x2, y2) {
    const line = document.createElement("div");
    line.className = "line";
    line.style.height = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) + "px";
    line.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI}deg)`;
    line.style.top = y1 + "px";
    line.style.left = x1 + "px";
    document.body.appendChild(line);
  }

  window.onload = () => {
    const center = document.querySelector(".center-block");
    const leftBlocks = document.querySelectorAll(".column:first-child .column-block");
    const rightBlocks = document.querySelectorAll(".column:last-child .column-block");
    
    leftBlocks.forEach(block => {
      createLine(center.offsetLeft + center.offsetWidth / 2, center.offsetTop + center.offsetHeight, 
                 block.offsetLeft + block.offsetWidth / 2, block.offsetTop);
    });
    
    rightBlocks.forEach(block => {
      createLine(center.offsetLeft + center.offsetWidth / 2, center.offsetTop + center.offsetHeight, 
                 block.offsetLeft + block.offsetWidth / 2, block.offsetTop);
    });
  };

  function changeContent(folder) {
    const fileView = document.getElementById('file-view');
    fileView.innerHTML = ''; // Очищуємо вміст

    let files = [];
    switch (folder) {
        case 'lang':
            files = [
                { name: 'Python', img: 'foto/filtered-downscaled-image (1).png' },
                { name: 'Kotlin', img: 'foto/filtered-downscaled-image (2).png' },
                { name: 'JavaScript', img: 'foto/filtered-downscaled-image.png' }
            ];
            break;
        case 'frem':
            files = [
                { name: 'Django', img: 'foto/filtered-downscaled-image (11).png' },
                { name: 'Jetpack Compose', img: 'foto/filtered-downscaled-image (10).png' }
            ];
            break;
        case 'web':
            files = [
                { name: 'CSS', img: 'foto/filtered-downscaled-image (3).png' },
                { name: 'CSS', img: 'foto/filtered-downscaled-image (4).png' },
                { name: 'Bootstrap', img: 'foto/filtered-downscaled-image (5).png' }
            ];
            break;
        case 'tech':
            files = [
                { name: 'Git', img: 'foto/filtered-downscaled-image (6).png' },
                { name: 'Docker', img: 'foto/filtered-downscaled-image (13).png' }
            ];
            break;
        case 'data':
            files = [
                { name: 'Redis', img: 'foto/filtered-downscaled-image (7).png' },
                { name: 'PostgreSQL', img: 'foto/filtered-downscaled-image (8).png' },
                { name: 'MySQL', img: 'foto/filtered-downscaled-image (9).png' },
                { name: 'Firebase', img: 'foto/filtered-downscaled-image (12).png' }
            ];
            break;
        case 'pictures':
            files = [
                { name: 'Image 1', img: 'foto/filtered-downscaled-image (14).png' },
                { name: 'Image 2', img: 'foto/filtered-downscaled-image (16).png' },
                { name: 'Image 3', img: 'foto/filtered-downscaled-image (15).png' },
            ];
            break;
        default:
            break;
    }

    // Додаємо файли до вікна
    files.forEach(file => {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'file';
        fileDiv.innerHTML = `<img src="${file.img}" alt="${file.name} Icon"><div class="file-name">${file.name}</div>`;
        fileView.appendChild(fileDiv);
    });
}
// Встановлюємо стандартний вигляд при завантаженні
window.onload = function() {
  changeContent('lang'); // Відображаємо вміст папки "lang" за замовчуванням
};
document.getElementById("more-info").addEventListener("click", function() {
    const extraInfo = document.getElementById("extra-info");
    extraInfo.classList.toggle("hidden");
});
