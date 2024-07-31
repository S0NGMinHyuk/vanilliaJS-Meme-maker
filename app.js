// HTML 파일에서 canvas 태그 불러오기
const canvas = document.querySelector("canvas");

// 캔버스에 그림그릴 때 사용하는 것이 context. 마치 붓과 같다.
const ctx = canvas.getContext("2d");

// 캔버스 크기 지정
canvas.width = 800;
canvas.height = 800;

// 집 그리기

// 기둥 부분
ctx.fillRect(200, 200, 50, 200);    // 왼쪽
ctx.fillRect(400, 200, 50, 200);    // 오른쪽

// 문 부분
ctx.lineWidth = 2;
ctx.strokeRect(300, 300, 50, 100);

// 천장 부분
ctx.fillRect(200, 200, 200, 20);

// 지붕 부분
ctx.moveTo(200, 200);
ctx.lineTo(450, 200);
ctx.lineTo(325, 100);
ctx.lineTo(200, 200);
ctx.fill();