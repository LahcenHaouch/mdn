const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawRectangle(ctx, config) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const { x, y, width, height, color } = config;

  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawRectangle(ctx, {
  x: 10,
  y: 10,
  width: 300,
  height: 300,
  color: 'hotpink'
});
