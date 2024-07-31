// HTML 파일에서 canvas 태그 불러오기
const canvas = document.querySelector("canvas");

// 캔버스에 그림그릴 때 사용하는 것이 context. 마치 붓과 같다.
const ctx = canvas.getContext("2d");

// 캔버스 크기 지정
canvas.width = 800;
canvas.height = 800;

// 브러쉬의 시작 위치는 왼쪽 위 부분이 0, 0이다.
ctx.fillRect(50, 50, 100, 100);


// 파란색 네모
// 위의 네모는 검정색, 아래 네모는 파란색으로 하기 위해 PATH를 새로 생성해야 한다.
ctx.beginPath();                
ctx.fillStyle = "blue";
ctx.fillRect(50, 200, 100, 100);

// .fillRect 함수의 내부 작동구조
ctx.rect(200, 200, 100, 100);       // 네모 지정
ctx.fill();                         // 네모 색 채우기


// 초록색 네모
ctx.beginPath();
ctx.fillStyle = "green";

// .rect 함수의 내부 작동구조
ctx.moveTo(50, 350);                // 시작 좌표
ctx.lineTo(150, 350);               // 네모 그리기
ctx.lineTo(150, 450);
ctx.lineTo(50, 450);
ctx.lineTo(50, 350);

ctx.fill();