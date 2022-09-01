interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "weird looking square";
  width: number;
  height: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type Shape = Square | Rectangle | Triangle;

function area(s: Shape) {
  if (s.kind === "weird looking square") {
    return s.height * s.width;
  } else if (s.kind === "triangle") {
    return 0.5 * s.base * s.height;
  } else {
    return s.size * s.size;
  }
}

const rectangle: Rectangle = {
  kind: "weird looking square",
  height: 10,
  width: 5,
};

console.log(area({ kind: "square", size: 3 }));
console.log(area({ kind: "weird looking square", height: 2, width: 3 }));
console.log(area({ kind: "triangle", base: 5, height: 10 }));
