/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById("aqi-city-input").value.trim();
	var aqi = document.getElementById("aqi-value-input").value.trim();
	var RegExp_city = /^[a-zA-Z\u4E00-\u9FA5]+$/;//这里正则表达式不能直接使用a-Z，为什么？
	var RegExp_aqi = /^[0-9]+$/;
	//注意正则表达式的使用方法
	if(RegExp_city.test(city)&&RegExp_aqi.test(aqi)){
		aqiData[city] = aqi;		
	}
	else{
		alert("城市名只能为中英文字符，空气质量只能为一个整数");
		//除了alert还可以自己在html添加一个标签来显示报错信息
	}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var tableinner = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for(city in aqiData){
		tableinner+= "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td></tr>";
	}
	document.getElementById("aqi-table").innerHTML = tableinner;
	
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").onclick = addBtnHandle;

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  //事件委托，委托给父元素，然后侦听特定事件类型来自什么节点来判断
  document.getElementById("aqi-table").addEventListener("click",function(e){
  	if(e.target.nodeName =="BUTTON"){
  		//上面的button必须大写，button的父节点的父节点的子节点是tr标签，但是city的名字在tr中的innerhtml，相当于再一个子节点
  		var temp =e.target.parentNode.parentNode.firstChild.firstChild.nodeValue;
  		// document.getElementById("test").innerHTML = temp; 测试用
  		delBtnHandle(temp);

  	}
  },false);
}

init();

