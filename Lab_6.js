// JavaScript Document

function moveRight(){
	$("#box").animate({left:"+=500px"},1000);
		$("#box").animate({left:"-=500px"});
} 

function moveLeft(){
	$("#box").animate({left:"-=500px"},1000);
		$("#box").animate({left:"+=500px"},1000);
}

function moveDown(){
	$("#box").animate({top:"+=500px"},1000);
		$("#box").animate({top:"-=500px"},1000);
}

function moveUp(){
	$("#box").animate({top:"-=500px"},1000);
		$("#box").animate({top:"+=500px"},1000);
}
function disappear(){
	$("#box").animate({opacity:"0"},1000);
		
}
function back(){
	$("#box").animate({opacity:"1"},1000);
		
}
function cricle(){
	$("#box").animate({borderRadius:"100%"},1000);
		
}
function square(){
	$("#box").animate({borderRadius:"0%"},1000);
		
}
function small(){
	$("#box").animate({height:"-=100"},1000);
	$("#box").animate({width: "-=100"},1000);
		
}
function normal(){
	$("#box").animate({height:"200px"},1000);
	$("#box").animate({width: "200px"},1000);
}
function big(){
	$("#box").animate({height:"+=100"},100);
	$("#box").animate({width: "+=100"},100);
	
}
function change(){
	$("#box").css({'backgroundimage':'pikachu.png'},1000);
}
function crazy(){
	$("#box").animate({height:"1000px"},1000);
	$("#box").animate({width: "1000px"},1000);
	$("#box").animate({opacity:"0"},1000);
	$("#box").animate({opacity:"1"},1000);
	$("#box").animate({height:"200px"},1000);
	$("#box").animate({width: "200px"},1000);
	$("#box").animate({opacity:"0"},1000);
	$("#box").animate({opacity:"1"},1000);
	$("#box").animate({left:"-=500px",},1000);
		$("#box").animate({left:"+=500px"},1000);
	$("#box").animate({left:"+=500px",},1000);
		$("#box").animate({left:"-=500px"},1000);
	$("#box").animate({opacity:"0"},1000);
	$("#box").animate({opacity:"1"},1000);
	$("#box").animate({borderRadius:"100%"},1000);
	$("#box").animate({borderRadius:"0%"},1000);
}
function stop(){
	$("#box").stop({});
		
}
function stopAll(){
	$("#box").stop(true);
		
}
function stopEnd(){
	$("#box").stop(true,true);
		
}