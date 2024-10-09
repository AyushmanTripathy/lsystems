const degToRad = (x) => (Math.PI * x) / 180;

const fractalPlant = {
  options: { x: 100, y: 100, r: 5, n: 6 },
  variables: ["X", "F"],
  drawForward: ["F"],
  start: "X",
  angle: degToRad(25),
  rules: {
    X: "F+[[X]-X]-F[-FX]+X",
    F: "FF",
  },
};

const dragonCurve = {
  options: { x: 300, y: 300, r: 5, n: 12 },
  variables: ["F", "G"],
  drawForward: ["F", "G"],
  start: "F",
  angle: degToRad(90),
  rules: {
    F: "F+G",
    G: "F-G",
  },
};

const sierpinskiArrowHead = {
  options: { x: 30, y: 30, r: 5, n: 8 },
  variables: ["A", "B"],
  drawForward: ["A", "B"],
  start: "A",
  angle: degToRad(60),
  rules: {
    A: "B-A-B",
    B: "A+B+A",
  },
};

const fractalBinaryTree = {
  options: { x: 30, y: 30, r: 5, n: 8 },
  variables: ["A", "B"],
  drawForward: ["A", "B"],
  start: "B",
  angle: degToRad(45),
  rules: {
    A: "AA",
    B: "A[+B]-B",
  },
};

const sierpinskiTriangle = {
  options: { x: 100, y: 350, r: 20, n: 6 },
  variables: ["F", "G"],
  drawForward: ["F", "G"],
  start: "F-G-G",
  angle: degToRad(120),
  rules: {
    F: "F-G+F+G-F",
    G: "GG",
  },
};

const kochCurve = {
  options: { x: 100, y: 600, r: 5, n: 6 },
  variables: ["F"],
  drawForward: ["F"],
  start: "F",
  angle: degToRad(90),
  rules: {
    F: "F+F-F-F+F",
  },
};

export default {
  fractalPlant,
  fractalBinaryTree,
  kochCurve,
  sierpinskiTriangle,
  sierpinskiArrowHead,
  dragonCurve,
};
