
//setting for slider
var currentSlide = 1;
var interval;//empty var
	
function startSlider() {
//giving the empty variable a value;
//note that the setInterval in this case has a inbuilt value
//the.animate parameters are ({styles},speed,callback());
interval = setInterval(Animate, 3000);
			
function Animate() {
//note here: that we are adding more -margin to the ul .slides not the the pictures
$(".slides").animate({"margin-left": "-="+550},"slow", function() {
//note that the incremenent happens in the if statement javascript whatever is in the()
//but won't run the body if{the condition is false}
if (++currentSlide === $(".slide").length) {
      currentSlide = 1;
	//note here that we are using .css instead of .animate
$(".slides").css({"margin-left": "0"});
}
});
}
}
	  
function pauseSlider() {
 clearInterval(interval());//stop running the function every 3sec
};

startSlider();//triggering the function
//notes:
//{margin-left: '-='+ 550} means everytime the function runs add to the 'value' of margin-left another +550px
//which will make it from 0 to -550 to -1100 etc 