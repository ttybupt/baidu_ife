function left_in(){
	var numlist = document.getElementById("numlist");
	var li = document.createElement('li');
  var num = document.getElementById("input").value.trim();
  var Reg = /^[0-9]+$/;
  if(!Reg.test(num)){
    alert("请输入一个整数");
  }else{
    li.innerHTML = num;
    var first_li = numlist.firstChild;
    document.getElementById("numlist").insertBefore(li,first_li);
  }
  
}

function right_in(){
  var numlist = document.getElementById("numlist");
  var li = document.createElement('li');
  var num = document.getElementById("input").value;
  var Reg = /^[0-9]+$/;
  if(!Reg.test(num)){
    alert("请输入一个整数");
  }else{
    li.innerHTML = num;
    numlist.appendChild(li);
  }
}

function left_out(){
  var numlist = document.getElementById("numlist");
  var first_li = numlist.firstChild ;
  numlist.removeChild(first_li);
}

function right_out(){
  var numlist = document.getElementById("numlist");
  var last_li = numlist.lastChild;
  numlist.removeChild(last_li);
}


function init(){
	
  document.getElementById("left_in").onclick = left_in;
  document.getElementById("right_in").onclick = right_in;
  document.getElementById("left_out").onclick = left_out;
  document.getElementById("right_out").onclick = right_out;

  document.getElementById("numlist").addEventListener("click",function(e){
    if(e.target.nodeName =="LI"){
      numlist.removeChild(e.target);
        // document.getElementById("test").innerHTML = temp; 测试用
    }
  },false);
}
init();