const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

async function drawLSystem(lsystem) {
  ctx.reset();

  const generate = (x) => {
    if (x <= 1) return lsystem.start;
    let output = "";
    for (const c of generate(x - 1)) {
      if (lsystem.variables.includes(c)) output += lsystem.rules[c];
      else output += c;
    }
    return output;
  }

  const pattern = generate(lsystem.options.n);
  ctx.strokeStyle = "green";

  const pos = [], r = lsystem.options.r;
  let curr = { x: lsystem.options.x, y: lsystem.options.y, rad: lsystem.angle };
  ctx.moveTo(curr.x, curr.y);

  // drawing the pattern
  for (const c of pattern) {
    if (lsystem.drawForward.includes(c)) {
        curr.y += r * Math.cos(curr.rad);
        curr.x += r * Math.sin(curr.rad);

        ctx.lineTo(curr.x, curr.y);
        ctx.stroke();
        await sleep(10);
    } else {
      switch (c) {
        case 'F':
         break;
        case '+':
          curr.rad += lsystem.angle;
          break;
        case '-':
          curr.rad -= lsystem.angle;
          break;
        case '[':
          pos.push({ ...curr });
          break
        case ']':
          if (!pos.length) console.error("pop error");
          curr = pos.pop();
          ctx.moveTo(curr.x, curr.y);
          break;
      }
    }
  }
}

function sleep(n) {
  return new Promise((resolve) => setTimeout(resolve, n));
}

export default drawLSystem;
export { sleep };
