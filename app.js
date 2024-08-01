// HTML 파일에서 필요한 요소 불러오기
const canvas = document.querySelector("canvas");   
const ctx = canvas.getContext("2d");                
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.getElementById("mode-btn");
const resetBtn = document.getElementById("reset-btn");
const fileInput = document.getElementById("file");

// 캔버스 크기 지정
canvas.width = 800;
canvas.height = 800;

// 선 굵기와 색상 지정
ctx.lineWidth = lineWidth.value;
ctx.strokeStyle = color.value;

let isPainting = false;
let isFilling = false;

function onMove(event) {
    if(isPainting) {
        // 마우스 클릭중이면 선 그리기
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
    else {
        // 마우스 클릭중이 아니면 좌표만 변경 및 새로운 패스 생성
        ctx.beginPath();      
        ctx.moveTo(event.offsetX, event.offsetY);
    }
}

// isPainting 변수를 마우스가 눌리면 true, 떼면 false로 변경
function startPainting() {
    isPainting = true;
}
function stopPainting() {
    isPainting = false;
}

// 선 굵기 변경 함수
function onWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

// 선 색상 변경 함수
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

// 색상 클릭시 해당 색상으로 설정
function onColorClick(event) {
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
}

// 모드 클릭시 fill, draw 스왑 기능
function onModeClick() {
    if(isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    }
    else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

// fill 모드일 때 캔버스를 클릭하면 전체를 채우는 함수
function onCanvasClick() {
    if(isFilling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

// 캔버스 전체를 하얀색으로 채우는 함수
function onResetClick() {
    let currColor = ctx.fillStyle;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = currColor;
}

function onFileChange(event) {
    const photo = event.target.files[0];
    const url = URL.createObjectURL(photo);
    const image = new Image();
    image.src = url;
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        fileInput.value = null;
    }
}

// 이벤트 함수 연결
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
document.addEventListener("mouseup", stopPainting);
lineWidth.addEventListener("change", onWidthChange);
color.addEventListener("change", onColorChange);
colorOption.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
canvas.addEventListener("click", onCanvasClick);
resetBtn.addEventListener("click", onResetClick);
fileInput.addEventListener("change", onFileChange);