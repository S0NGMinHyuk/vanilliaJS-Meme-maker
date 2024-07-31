// HTML 파일에서 canvas 태그 불러오기
const canvas = document.querySelector("canvas");

// 캔버스에 그림그릴 때 사용하는 것이 context. 마치 붓과 같다.
const ctx = canvas.getContext("2d");

// 캔버스 크기 지정
canvas.width = 800;
canvas.height = 800;

// 사람 그리기

// 팔 부분
ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);

// 몸 부분
ctx.fillRect(232.5, 200, 100, 200);

// 머리 부분
ctx.arc(282.5, 140, 50, 0, 2*Math.PI);  // 원은 동쪽 부분에서 시작한다.
ctx.fill()

// 눈 부분
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(265, 130, 5, Math.PI, 2*Math.PI);  
ctx.arc(300, 130, 5, Math.PI, 2*Math.PI); 
ctx.fill();