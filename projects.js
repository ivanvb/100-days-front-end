const container = document.getElementById("container");
const links = [
  '<div class="project"><h2 class="title">Text Vertical Scroller</h2><h3 class="day">Day 001</h3><a class="project-link" href="./days/Day-001/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Spinning Circles</h2><h3 class="day">Day 002</h3><a class="project-link" href="./days/Day-002/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Day Cycle 🌞</h2><h3 class="day">Day 003</h3><a class="project-link" href="./days/Day-003/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Pulse Loading Animation</h2><h3 class="day">Day 004</h3><a class="project-link" href="./days/Day-004/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Click and Squeeze</h2><h3 class="day">Day 005</h3><a class="project-link" href="./days/Day-005/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Random Roulette 🎲</h2><h3 class="day">Day 006</h3><a class="project-link" href="./days/Day-006/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Traffic Light 🚦</h2><h3 class="day">Day 007</h3><a class="project-link" href="./days/Day-007/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Card Rotation [First Try]</h2><h3 class="day">Day 008</h3><a class="project-link" href="./days/Day-008/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Pacman 🎮</h2><h3 class="day">Day 009</h3><a class="project-link" href="./days/Day-009/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Animated Sidebar</h2><h3 class="day">Day 010</h3><a class="project-link" href="./days/Day-010/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Responsive animated navbar</h2><h3 class="day">Day 011</h3><a class="project-link" href="./days/Day-011/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">New Messages 📧</h2><h3 class="day">Day 012</h3><a class="project-link" href="./days/Day-012/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Eyes 👀</h2><h3 class="day">Day 013</h3><a class="project-link" href="./days/Day-013/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Collapsible</h2><h3 class="day">Day 014</h3><a class="project-link" href="./days/Day-014/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Tic Tac Toe ❎🅾</h2><h3 class="day">Day 015</h3><a class="project-link" href="./days/Day-015/index.html">View Project</a></div>',
  '<div class="project"><h2 class="title">Carousel First Iteration</h2><h3 class="day">Day 016</h3><a class="project-link" href="./days/Day-016/index.html">View Project</a></div>',
];
container.innerHTML = links.join("\n");
