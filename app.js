// HTML 파일에서 canvas 태그 불러오기
const canvas = document.querySelector("canvas");

// 캔버스에 그림그릴 때 사용하는 것이 context. 마치 붓과 같다.
const ctx = canvas.getContext("2d");

// 캔버스 크기 지정
canvas.width = 800;
canvas.height = 800;

// BMW 그리기

// 검정 바탕 부분
ctx.arc(400, 400, 300, 0, 2*Math.PI);
ctx.fill();

// 파란 바탕 부분
ctx.beginPath();
ctx.fillStyle = "#16588E";
ctx.arc(400, 400, 230, 0, 2*Math.PI);
ctx.fill();

// 하얀 바탕 부분
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(400, 400, 230, 1.5*Math.PI, 0);
ctx.moveTo(400, 400);
ctx.lineTo(400+230, 400);
ctx.lineTo(400, 400-230);
ctx.lineTo(400, 400);
ctx.fill();

ctx.beginPath();
ctx.arc(400, 400, 230, 0.5*Math.PI, Math.PI);
ctx.moveTo(400, 400);
ctx.lineTo(400-230, 400);
ctx.lineTo(400, 400+230);
ctx.lineTo(400, 400);
ctx.fill();