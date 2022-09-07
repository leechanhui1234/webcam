let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let myImage = document.querySelector("#myImage");
let load = document.querySelector("#load");
let image_data_url = '';

camera_button.addEventListener('click', async function() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false }); //video에 대한 권한 요청
    video.srcObject = stream; //id, 권한 허용 상태와 같은 객체를 반환하여 srcObject에 저장
    camera_button.disabled = true;
});

click_button.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); //canvas에 2d 이미지를 그림.
    image_data_url = canvas.toDataURL('image/jpeg'); //canvas 이미지와 똑같은 그림의 url을 image_data_url에 저장
    canvas.style.display = 'inline';
    myImage.style.display = 'none';
    console.log(image_data_url); //image_url 출력
});

load.addEventListener('click', function() {
    myImage.src = image_data_url; //테스트를 위해 image에 canvas 이미지를 띄워봄
    canvas.style.display = 'none';
    myImage.style.display = 'inline';
});