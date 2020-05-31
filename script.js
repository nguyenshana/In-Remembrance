var flower1state = false;
var flower2state = false;
var colornum = 0;

function headBob() {
  var head = document.getElementById("head");   
  var id = setInterval(frame, 1);
  var radius = 5;
  var date;
  var turn = 1;
  function frame() {
    date = Date.now() * 0.001;
    head.style.top = -1 + 'px';  
    if(Math.sin(date) * radius < -2) {
      head.style.transform = "rotate(-"+ 15 +"deg)"
    }
    else if(Math.sin(date) * radius > 2)
    {
      head.style.transform = "rotate("+ 15 +"deg)"
    }
    else if(Math.sin(date) * radius <= 2 && Math.sin(date) * radius > -2)
    {
      head.style.transform = "rotate("+ 0 +"deg)"
    }
  }
  moveArrow();
}

function clickperson() {
  var personpop = document.getElementById("person-popup");
  personpop.classList.toggle("show");
}

function clickflower1() {
  var petal1 = document.getElementById("petal1");   
  var petal2 = document.getElementById("petal2"); 
  var petal3 = document.getElementById("petal3"); 
  var petal4 = document.getElementById("petal4"); 
  var radius = 5;
  var date;
  var steps = 5;

  if(!flower1state)
  {
    date = Date.now() * 0.00000000001;
    // console.log(date);
    petal1.style.top = -360 + 'px';  
    petal1.style.left = 260 + 'px'; 
    petal1.style.width = 300 + "px";
    petal1.style.height = 400 + "px";
    petal1.style.transform = "rotate(" + 3 +"deg)";

    petal2.style.top = -240 + 'px';  
    petal2.style.left = 230 + 'px'; 
    petal2.style.width = 430 + "px";
    petal2.style.height = 220 + "px";
    petal2.style.transform = "rotate(" + 70 +"deg)";
    
  }
  else 
  {
    date = Date.now() * 0.00000000001;
    // console.log(date);
    petal1.style.top = -10 + 'px';  
    petal1.style.left = 5 + 'px'; 
    petal1.style.width = 10 + "px";
    petal1.style.height = 30 + "px";
    petal1.style.transform = "rotate(-" + 32 +"deg)";

    petal2.style.top = -1 + 'px';  
    petal2.style.left = 30 + 'px'; 
    petal2.style.width = 10 + "px";
    petal2.style.height = 30 + "px";
    petal2.style.transform = "rotate(" + 45 +"deg)";
    
  }
  if(flower2state)
  {
    petal21.style.top = -10 + 'px';  
    petal21.style.left = -20 + 'px'; 
    petal21.style.width = 10 + "px";
    petal21.style.height = 39 + "px";
    petal21.style.transform = "rotate(-" + 52 +"deg)";

    petal22.style.top = -5 + 'px';  
    petal22.style.left = 4 + 'px'; 
    petal22.style.width = 10 + "px";
    petal22.style.height = 30 + "px";
    petal22.style.transform = "rotate(" + 25 +"deg)";

    var personpop1 = document.getElementById("persondesc2-popup");
    personpop1.classList.toggle("show");
    flower2state = !flower2state;
  }
  var personpop = document.getElementById("persondesc-popup");
  personpop.classList.toggle("show");
  flower1state = !flower1state;
  
}

function clickflower2() {
  var petal1 = document.getElementById("petal1");  
  var petal2 = document.getElementById("petal2"); 
  var petal21 = document.getElementById("petal21"); 
  var petal22 = document.getElementById("petal22"); 
  var radius = 5;
  var date;
  var steps = 5;

  if(!flower2state)
  {
    petal21.style.top = -237 + 'px';  
    petal21.style.left = 343 + 'px'; 
    petal21.style.width = 400 + "px";
    petal21.style.height = 200 + "px";
    petal21.style.transform = "rotate(-" + 52 +"deg)";

    petal22.style.top = -297 + 'px';  
    petal22.style.left = 340 + 'px'; 
    petal22.style.width = 200 + "px";
    petal22.style.height = 300 + "px";
    petal22.style.transform = "rotate(-" + 50 +"deg)";
  }
  else
  {
    petal21.style.top = -10 + 'px';  
    petal21.style.left = -20 + 'px'; 
    petal21.style.width = 10 + "px";
    petal21.style.height = 39 + "px";
    petal21.style.transform = "rotate(-" + 52 +"deg)";

    petal22.style.top = -5 + 'px';  
    petal22.style.left = 4 + 'px'; 
    petal22.style.width = 10 + "px";
    petal22.style.height = 30 + "px";
    petal22.style.transform = "rotate(" + 25 +"deg)";
  }
  if(flower1state)
  {
    date = Date.now() * 0.00000000001;
    // console.log(date);
    petal1.style.top = -10 + 'px';  
    petal1.style.left = 5 + 'px'; 
    petal1.style.width = 10 + "px";
    petal1.style.height = 30 + "px";
    petal1.style.transform = "rotate(-" + 32 +"deg)";

    petal2.style.top = -1 + 'px';  
    petal2.style.left = 30 + 'px'; 
    petal2.style.width = 10 + "px";
    petal2.style.height = 30 + "px";
    petal2.style.transform = "rotate(" + 45 +"deg)";
    

    var personpop1 = document.getElementById("persondesc-popup");
    personpop1.classList.toggle("show");
    flower1state = !flower1state;
  }
  var personpop = document.getElementById("persondesc2-popup");
  personpop.classList.toggle("show");
  flower2state = !flower2state;
}

function changeSkin() {
  var colorArray = ["rgb(255, 240, 156)","rgb(255, 240, 156)","rgb(255, 210, 186)","rgb(255, 210, 186)","rgb(125, 46, 66)", "rgb(125, 46, 66)","rgb(227, 177, 91)","rgb(227, 177, 91)"];
  var head = document.getElementById("head");   
  var body = document.getElementById("body"); 
  var leftarm = document.getElementById("leftarm"); 
  var rightarm = document.getElementById("rightarm"); 

  head.style.backgroundColor = colorArray[colornum];
  body.style.backgroundColor = colorArray[colornum];
  leftarm.style.backgroundColor = colorArray[colornum];
  rightarm.style.backgroundColor = colorArray[colornum];

  colornum++;
  if(colornum == 8)
  {
    colornum = 0;
  }
}

function moveArrow() {
  var arrow = document.getElementById("arrow");   
  var id = setInterval(frame, 50);
  var pos = 730;
  var state = "down";
  var turn = 1;
  function frame() {
    if(state == "down")
    {
      if(pos > 750)
      {
        state = "up";
      }
      arrow.style.top = pos + 'px';
      pos++;
    }
    else
    {
      if(pos < 730)
      {
        state = "down";
      }
      arrow.style.top = pos + 'px';
      pos--;
    }
  }
}
