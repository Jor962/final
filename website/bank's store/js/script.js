let offset = 0;
const sliderLine = document.querySelector('.slider_line');

function getwidthOfSliderImg(){
	let widthOfSliderImg = document.querySelector('.slider_img').offsetWidth;
	return widthOfSliderImg;
}

document.querySelector('.slider_next').addEventListener('click', function(){
	offset = offset + getwidthOfSliderImg();
	if(offset > (getwidthOfSliderImg()*4)){
		offset = 0;
	}
	sliderLine.style.left = -offset + "px";

});

function showMenu(){
	let a = document.getElementById('mob_header');
	a.style.display = "block";
}
function hideMenu(){
	let a = document.getElementById('mob_header');
	a.style.display = "none";
}

document.querySelector('.slider_back').addEventListener('click', function(){
	offset = offset - getwidthOfSliderImg();
	if(offset < 0){
		offset = (getwidthOfSliderImg()*4);
	}
	sliderLine.style.left = -offset + "px";

});
function move_slide_1(){
	offset = 0;
	sliderLine.style.left = -offset + "px";
}
function move_slide_2(){
	offset = (getwidthOfSliderImg());
	sliderLine.style.left = -offset + "px";
}
function move_slide_3(){
	offset = (getwidthOfSliderImg() * 2);
	sliderLine.style.left = -offset + "px";
}
function move_slide_4(){
	offset = (getwidthOfSliderImg() * 3);
	sliderLine.style.left = -offset + "px";
}
function move_slide_5(){
	offset = (getwidthOfSliderImg() * 4);
	sliderLine.style.left = -offset + "px";

}

