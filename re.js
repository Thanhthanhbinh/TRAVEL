

  var test=0;
var once=0;
var inp="";
var inp1="";
var bb="";
var btn=document.getElementById('review');
var times=0;
var pressed=0;
var pressed1=0;
var pressed2=0;
var tt=0;
var japan=[0,0,0];
var london=[0,0,0];
var new_y=[0,0,0];

if (typeof(Storage) == "undefined") {
  arr=[];
  window.localStorage.setItem("comments",JSON.stringify(arr));
};
function add1(){
  inp=document.getElementById("Name").value;
  test=test+2;
};
function add2(){
  inp1=document.getElementById("exampleFormControlTextarea1").value;
  test=test+1;
};
function good(){
  rate="Good";
  once=1;
};
function bad(){
  rate="Bad";
  once=1;

};
function ok(){
  rate="OK";
  once=1;
}; 
//luu du lieu
function confirm(){
  if(test==3 && once==1){
  alert("INFORMATION RECIEVED");
  var block=document.getElementById("block");
  block.style.display="none";
  var block1=document.getElementById("block-show");
  block1.style.display="block";
  test=0;
  once=0;
  var obj={
    name:inp,
    comment:inp1,
    rate:rate,
  };
  var arr= JSON.parse(localStorage.getItem("comments"));
  arr.push(obj);
  window.localStorage.setItem("comments",JSON.stringify(arr));
 
  
}else{
  alert("NO INFROMATION");
};
};
function change(){
  btn=document.getElementById('review');
  if (times%2==0){
    btn.innerHTML='<i class="fas fa-chevron-up"></i>';
    times=times+1;
  }
  else {
    btn.innerHTML='<i class="fas fa-chevron-down"></i>';
    times=times+1;
  }
};
function changeGa() {
  var a=document.getElementById('G1');
  a.style.opacity="1";
  a.style.transition="opacity 2s";
  var a=document.getElementById('G2');
  a.style.opacity="1";
  a.style.transition="opacity 2s";
}
function changeG1a() {
  var a=document.getElementById('G1');
  a.style.opacity="0";
  a.style.transition="opacity 2s";
  var a=document.getElementById('G2');
  a.style.opacity="0";
  a.style.transition="opacity 2s";
}
function Larrows_h() {
  var a=document.getElementById('left-a');
  a.style.opacity="1";
  a.style.transition="opacity 1s";
  a.style.marginLeft="30px";
  a.style.transition="margin-left 1s";
}
function Larrows_u() {
  var a=document.getElementById('left-a');
  a.style.opacity="0.1";
  a.style.transition="opacity 1s";
  a.style.marginLeft="20px";
  a.style.transition="margin-left 1s";
}
function Rarrows_h() {
  var a=document.getElementById('right-a');
  a.style.opacity="1";
  a.style.transition="opacity 1s";
  a.style.marginRight="30px";
  a.style.transition="margin-right 1s";
}
function Rarrows_u() {
  var a=document.getElementById('right-a');
  a.style.opacity="0.1";
  a.style.transition="opacity 1s";
  a.style.marginRight="20px";
  a.style.transition="margin-right 1s";
}
//LIKE DESTINATIONS FUNCS
//hover
function opacityC() {
  var pic=document.getElementsByClassName('slide');
  var blank_h=document.getElementById('heart');
  var black_h=document.getElementById('heart1');
  for (c=0;c<pic.length;c++){//TURN EVERY PICS VISIBLE OR NOT
    pic[c].style.opacity="0.5";
    pic[c].style.transition="opacity 1s";
  }
      blank_h.style.display="block";
      black_h.style.display='none';

}
//not hover
function opacityD() {
  var pic=document.getElementsByClassName('slide');
  var blank_h=document.getElementById('heart');
  var black_h=document.getElementById('heart1');
  for (c=0;c<pic.length;c++){//APPLIES TO ALL PICS VISIBLE OR NOT
    pic[c].style.opacity="1";
    pic[c].style.transition="opacity 1s";
  }
  //HIDE BOTH TYPES OF HEART GRAPHICS
  black_h.style.display="none";
  blank_h.style.display="none";
  
}
//click on heart
function changeG1() {
  var blank_h=document.getElementById('heart');
  var black_h=document.getElementById('heart1');
    black_h.style.display="none";
    blank_h.style.display="block";
    var index=time.indexOf(i);
    if (index!=-1){
      time.splice(index,1);
      ratings[i]--;
    }
    window.localStorage.setItem("ratings",JSON.stringify(ratings));
    window.localStorage.setItem("times",JSON.stringify(time));
    //show blank graphic
    //remove pic from time array
} 
//click on heart 1
function changeG() {//SELECTED
  var blank_h=document.getElementById('heart');
  var black_h=document.getElementById('heart1');
  blank_h.style.display="none";
  black_h.style.display="block";
  var index=time.indexOf(i);
  if (index==-1){
    time[time.length]=i;
    ratings[i]++;
  }
  window.localStorage.setItem("times",JSON.stringify(time));
  window.localStorage.setItem("ratings",JSON.stringify(ratings));


    //show black graphic
    //add pic to time array
}
//slide to the right
function slideR() {
  var pic=document.getElementsByClassName('slide');
  if (i<pic.length) {//if the slide was not the last slide
    pic[i+1].style.display="block";//show next slide
    pic[i].style.display="none";// hide current slide
    heart_times=2;//reset heart_times
    i++;
  } 
}
//slide to the left
function slideL() {
  var pic=document.getElementsByClassName('slide');
  if (i>0) {
    pic[i-1].style.display="block";//show previous slide
    pic[i].style.display="none";//hide current slide
    heart_times=2;//reset heart_times
    i--;
  } 
}
function load_top() {
  var time = JSON.parse(localStorage.getItem("times"));
  for (k=0; k<time.length; k++){
    switch (time[k]) {
      case 0:
        document.getElementById('england').style.display="block";
        document.getElementById('top').style.display="block";


        break;
        case 1:
          document.getElementById('russia').style.display="block";
          document.getElementById('top').style.display="block";


          break;
          case 2:
            document.getElementById('tokyo').style.display="block";
            document.getElementById('top').style.display="block";


            break;
            case 3:
              document.getElementById('new york').style.display="block";
              document.getElementById('top').style.display="block";


              break;
              case 4:
        document.getElementById('hanoi').style.display="block";
        document.getElementById('top').style.display="block";


        break;
        case 5:
        document.getElementById('france').style.display="block";
        document.getElementById('top').style.display="block";


        break;
    }
  }
}
//show comment
function quiz_selection () {
  var number=0;
  var name_l=document.getElementsByClassName('name_d');
  var comment_l=document.getElementsByClassName('comment_d');
  var arr_new = JSON.parse(localStorage.getItem("comments"));
  for (k=0; k<4; k++) {
    var name=arr_new[k].name;
    var comment=arr_new[k].comment;
    name_l[number].innerHTML=name;
    comment_l[number].innerHTML=comment;
    number++;
  }
}
//day
function d_long() {
  if (new_y==[0,0,0] && london==[0,0,0]) {
    japan[0]=1;
    pressed++;
  } else {
    london[0]=0;
    new_y[0]=0;
    japan[0]=1;
    pressed++;
  }
  
}
function d_short () {
  if (london==[0,0,0] && japan==[0,0,0]) {
    new_y[0]=1;
    pressed++;
  } else {
    london[0]=0;
    japan[0]=0;
    new_y[0]=1;
    pressed++;
  }

}
function d_med() {
  if (new_y==[0,0,0] && japan==[0,0,0]) {
    london[0]=1;
    pressed++;
  } else {
    japan[0]=0;
    new_y[0]=0;
    london[0]=1;
    pressed++;
  }

}
//money
function m_med() {
  if (new_y==[0,0,0] && japan==[0,0,0]) {
    london[1]=1;
    pressed1++;
  } else {
    japan[1]=0;
    new_y[1]=0;

    london[1]=1;
    pressed1++;
  }

}
function m_long() {
  if (new_y==[0,0,0] && london==[0,0,0]) {
    japan[1]=1;
    pressed1++;
  } else {
    london[1]=0;
    new_y[1]=0;
    japan[1]=1;
    pressed1++;
  }

}
function m_short () {
  if (london==[0,0,0] && japan==[0,0,0]) {
    new_y[1]=1;
    pressed1++;
  } else {
    london[1]=0;
    japan[1]=0;
    new_y[1]=1;
    pressed1++;
  }

}
//people
function p_long() {
  if (new_y==[0,0,0] && japan==[0,0,0]) {
    london[2]=1;
    pressed2++;
  } else {
    japan[2]=0;
    new_y[2]=0;
    london[2]=1;
    pressed2++;
  }


}
function p_med() {
  if (new_y==[0,0,0] && london==[0,0,0]) {
    japan[2]=1;
    pressed2++;
  } else {
    london[2]=0;
    new_y[2]=0;
    japan[2]=1;
    pressed2++;
  }


}
function p_short () {
  if (london==[0,0,0] && japan==[0,0,0]) {
    new_y[2]=1;
    pressed2++;
  } else {
    london[2]=0;
    japan[2]=0;
    new_y[2]=1;
    pressed2++;
  }

}
function quiz_re() {
  window.localStorage.setItem("new_y",JSON.stringify(new_y));
  window.localStorage.setItem("london",JSON.stringify(london));
  window.localStorage.setItem("tokyo",JSON.stringify(japan));



  if(pressed!=0 &&pressed1!=0){
    if(pressed2!=0){
      var tim=[0,0,0];
      for (k=0;k<3; k++) {
        if (japan[k]==1){
          tim[0]++;
        }
        if (london[k]==1){
          tim[1]++;
        }
        if (new_y[k]==1){
          tim[2]++;
        }
      }
      var ma=tim[0];
      
      for (k=0;k<3; k++) {
        if (ma<tim[k]) {
          ma=tim[k];
        }
      }
      for (k=0;k<3; k++) {
        if(ma==tim[k]) {
          var ii=k;
        }
      }
      if(ma==1){
        var ii=3;
      }
    }else {
      alert("QUIZ HAS NOT BEEN DONE");
      var ii=4;
      window.localStorage.setItem("ii",JSON.stringify(ii));
  
    }
  } else {
    alert("QUIZ HAS NOT BEEN DONE");
    var ii=4;
    window.localStorage.setItem("ii",JSON.stringify(ii));
  }
  window.localStorage.setItem("ii",JSON.stringify(ii));
      pressed=0;
      pressed1=0;
      pressed2=0;
      london=[0,0,0];
      japan=[0,0,0];
      new_y=[0,0,0];
}
function nothing() {
  time = JSON.parse(localStorage.getItem("times"));

  document.getElementById('tokyo-r').style.display="none";
  document.getElementById('england-r').style.display="none";
  document.getElementById('new york-r').style.display="none";
    document.getElementById('top').style.display="none";
    document.getElementById('top_1').style.display="block";
    document.getElementById('home-r').style.display="none";
    document.getElementById('hanoi-r').style.display="none";


  



}
function show_re() {
  ii = JSON.parse(localStorage.getItem("ii"));
  document.getElementById('tokyo-r').style.display="none";
  document.getElementById('england-r').style.display="none";
  document.getElementById('new york-r').style.display="none";
  document.getElementById('home-r').style.display="none";
  document.getElementById('hanoi-r').style.display="none";
  switch (ii) {
    case 0:
      document.getElementById('tokyo-r').style.display="block";
      document.getElementById('england-r').style.display="none";
      document.getElementById('new york-r').style.display="none";
      document.getElementById('home-r').style.display="none";
      document.getElementById('hanoi-r').style.display="none";
      break;
      case 1:
        document.getElementById('england-r').style.display="block";
        document.getElementById('new york-r').style.display="none";
        document.getElementById('home-r').style.display="none";
        document.getElementById('hanoi-r').style.display="none";
        document.getElementById('tokyo-r').style.display="none";
        break;
        case 2:
          document.getElementById('new york-r').style.display="block";
          document.getElementById('home-r').style.display="none";
          document.getElementById('hanoi-r').style.display="none";
          document.getElementById('tokyo-r').style.display="none";
          document.getElementById('england-r').style.display="none";
          break;
          case 3:
              document.getElementById('hanoi-r').style.display="block";
              document.getElementById('tokyo-r').style.display="none";
              document.getElementById('england-r').style.display="none";
              document.getElementById('new york-r').style.display="none";
              document.getElementById('home-r').style.display="none";
              break;
              case 4:
                  document.getElementById('home-r').style.display="block";
                  document.getElementById('hanoi-r').style.display="none";
                  document.getElementById('tokyo-r').style.display="none";
                  document.getElementById('england-r').style.display="none";
                  document.getElementById('new york-r').style.display="none";
break;
                

  }
}
