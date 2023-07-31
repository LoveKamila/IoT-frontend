var is_on = false;
var IntervalTime = 3000;
var auto_control = 1;


function setScale() {
  let designWidth = 1440;
  let designHeight = 1024;
  let scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designWidth / designHeight 
    ? document.documentElement.clientWidth / designWidth : document.documentElement.clientHeight / designHeight;
  // document.querySelector("#screen").style.transform = `scale(${scale})`;
}

function sendMessage(msg){
  // 曝气控制信号发送
  $.ajax({
    url: baseUrl+msg,  //后台接口地址
    type:"get",  //get请求方式
    dataType:'json',
    async: true,
    // contentType:'application/json;charset=utf-8',
    // data:JSON.stringify(s_data),
    success:function(data){
      console.log('请求成功');

    },
    error:function(){
      console.log(url)
    }
  })
}

// function recvMessage(ModeTime){
//   let controlInterval;
//   controlInterval = setInterval(function () {
//     $.ajax({
//       url: baseUrl+"data", //后台请求的数据
//       dataType: "json", // 预期返回的数据类型，如果是json格式，在接收到返回时会自动封装成json对象
//       type: "get", // 请求方式
//       async: true, // 是否异步请求
//       success: function (data) {
//         sf1 = data.LED0_STATE;
//         sf2 = data.LED1_STATE;
//         sb1 = data.LED2_STATE;
//         sb2 = data.LED3_STATE;
//         sb3 = data.LED4_STATE;
//         sb4 = data.LED5_STATE;
//         sb5 = data.LED6_STATE;
//         sb6 = data.LED7_STATE;
//       },
//       error: function (arg1) {
//         console.log('请求云数据失败');
//       },
//     });
//   }, IntervalTime);
//   if(controlInterval > ModeTime)
//     clearInterval(controlInterval);
//   // 点击曝气控制按钮后就会停止变化
//   const button = document.getElementById("曝气控制");
//   button.addEventListener("click",function(){clearInterval(controlInterval);});
  
// }


function gpioControlFan1(){
  const button = document.getElementById("桨叶1");
  if(sf1==0){
    button.style.backgroundColor='#FF0000';
    sf1=1;
    var sdata='ctrl_switch0/ON';
    sendMessage(sdata);
  }
  else{
    button.style.backgroundColor='#EEE';
    sf1=0;
    var sdata='ctrl_switch0/OFF';
    sendMessage(sdata);
  }
}


function gpioControlFan2(){
  const button = document.getElementById("桨叶2");
  if(sf2==0){
    button.style.backgroundColor='#FF0000';
    sf2=1;
    var sdata='ctrl_switch1/ON';
    sendMessage(sdata);
  }
  else{
    button.style.backgroundColor='#EEE';
    sf2=0;
    var sdata='ctrl_switch1/OFF';
    sendMessage(sdata);
  }
}

function gpioControlStoneGroup1(){
  const button = document.getElementById("曝气石组1");
  if(ssg1==0){
    button.style.backgroundColor='#FF0000';
    ssg1=1;
    var sdata='ctrl_switch2/ON';
    sendMessage(sdata);
  }
  else{
    button.style.backgroundColor='#EEE';
    ssg1=0;
    var sdata='ctrl_switch2/OFF';
    sendMessage(sdata);
  }
}

function gpioControlStoneGroup2(){
  const button = document.getElementById("曝气石组2");
  if(ssg2==0){
    button.style.backgroundColor='#FF0000';
    ssg2=1;
    var sdata='ctrl_switch3/ON';
    sendMessage(sdata);
  }
  else{
    button.style.backgroundColor='#EEE';
    ssg2=0;
    var sdata='ctrl_switch3/OFF';
    sendMessage(sdata);
  }
}

function gpioControlStoneGroup3(){
  const button = document.getElementById("曝气石组3");
  if(ssg3==0){
    button.style.backgroundColor='#FF0000';
    ssg3=1;
    var sdata='ctrl_switch4/ON';
    sendMessage(sdata);
  }
  else{
    button.style.backgroundColor='#EEE';
    ssg3=0;
    var sdata='ctrl_switch4/OFF';
    sendMessage(sdata);
  }
}

function gpioControlStoneGroup4(){
  const button = document.getElementById("曝气石组4");
  if(ssg4==0){
    button.style.backgroundColor='#FF0000';
    ssg4=1;
    var sdata='ctrl_switch5/ON';
    sendMessage(sdata);
  }
  else{
    button.style.backgroundColor='#EEE';
    ssg4=0;
    var sdata='ctrl_switch5/OFF';
    sendMessage(sdata);
  }
}

function gpioControlPump1(){
  const button = document.getElementById("回流泵1");
  if(sp1==0){
    button.style.backgroundColor='#FF0000';
    sp1=1;
    var sdata='ctrl_pump0/ON';
    sendMessage(sdata);
  }
  else{
    button.style.backgroundColor='#EEE';
    sp1=0;
    var sdata='ctrl_pump0/OFF';
    sendMessage(sdata);
  }
}

function gpioControlPump2(){
  const button = document.getElementById("回流泵2");
  if(sp2==0){
    button.style.backgroundColor='#FF0000';
    sp2=1;
    var sdata='ctrl_pump1/ON';
    sendMessage(sdata);
  }
  else{
    button.style.backgroundColor='#EEE';
    sp2=0;
    var sdata='ctrl_pump1/OFF';
    sendMessage(sdata);
  }
}

function gpioControlPump3(){
  const button = document.getElementById("回流泵3");
  if(sp3==0){
    button.style.backgroundColor='#FF0000';
    sp3=1;
    var sdata='ctrl_pump2/ON';
    sendMessage(sdata);
  }
  else{
    button.style.backgroundColor='#EEE';
    sp3=0;
    var sdata='ctrl_pump2/OFF';
    sendMessage(sdata);
  }
}

function dataDetection(){
  const button = document.getElementById("数据监测");
  if(is_on==0){
    button.style.backgroundColor='#FF0000';
    is_on=1;
  }
  else{
    button.style.backgroundColor='#EEE';
    is_on=0;
  }
}

function pwmControlPlate1(){
  // 目前尚未知道如何获取触发物体的特性
  var value=document.getElementById('曝气盘1拉条').value/10;
  // 使用ES6模板字符串
  var sdata=`ctrl_motor0/${value}`;
  sendMessage(sdata);
}

function pwmControlPlate2(){
  var value=document.getElementById('曝气盘2拉条').value/10;
  var sdata=`ctrl_motor1/${value}`;
  sendMessage(sdata);
}

function pwmControlPlate3(){
  var value=document.getElementById('曝气盘3拉条').value/10;
  var sdata=`ctrl_motor2/${value}`;
  sendMessage(sdata);
}

function pwmControlPlate4(){
  var value=document.getElementById('曝气盘4拉条').value/10;
  var sdata=`ctrl_motor3/${value}`;
  sendMessage(sdata);
}

function pwmControlPlate5(){
  var value=document.getElementById('曝气盘5拉条').value/10;
  var sdata=`ctrl_motor4/${value}`;
  sendMessage(sdata);
}

function pwmControlPlate6(){
  var value=document.getElementById('曝气盘6拉条').value/10;
  var sdata=`ctrl_motor5/${value}`;
  sendMessage(sdata);
}

function controlReset(){
  const button1 = document.getElementById("桨叶1");
  const button2 = document.getElementById("桨叶2");
  const button3 = document.getElementById("曝气石组1");
  const button4 = document.getElementById("曝气石组2");
  const button5 = document.getElementById("曝气石组3");
  const button6 = document.getElementById("曝气石组4");
  const button7 = document.getElementById("曝气石组1");
  const button8 = document.getElementById("回流泵1");
  const button9 = document.getElementById("回流泵2");
  const button10 = document.getElementById("回流泵3");
  const drag1 = document.getElementById("曝气盘1拉条");
  const drag2 = document.getElementById("曝气盘2拉条");
  const drag3 = document.getElementById("曝气盘3拉条");
  const drag4 = document.getElementById("曝气盘4拉条");
  const drag5 = document.getElementById("曝气盘5拉条");
  const drag6 = document.getElementById("曝气盘6拉条");
  button1.style.backgroundColor='#EEE';
  button2.style.backgroundColor='#EEE';
  button3.style.backgroundColor='#EEE';
  button4.style.backgroundColor='#EEE';
  button5.style.backgroundColor='#EEE';
  button6.style.backgroundColor='#EEE';
  button7.style.backgroundColor='#EEE';
  button8.style.backgroundColor='#EEE';
  button9.style.backgroundColor='#EEE';
  button10.style.backgroundColor='#EEE';
  drag1.value=0;
  drag2.value=0;
  drag3.value=0;
  drag4.value=0;
  drag5.value=0;
  drag6.value=0;
  sf1=0;
  sf2=0;
  ssg1=0;
  ssg2=0;
  ssg3=0;
  ssg4=0;
  sp1=0;
  sp2=0;
  sp3=0;
  sb1=0;
  sb2=0;
  sb3=0;
  sb4=0;
  sb5=0;
  sb6=0;
  
}

// function boilControl() {
//   const button = document.getElementById("曝气控制");
//   button.style.display='none';
//   const button1 = document.getElementById("自动");
//   const button2 = document.getElementById("手动");
//   button1.style.display='inline-block';
//   button2.style.display='inline-block';
//   button1.addEventListener("click",selectMode);
//   button2.addEventListener("click",selectMode);
// }

// function selectMode(obj){
//   const targetElement = obj.target;
//   const button1 = document.getElementById("自动");
//   const button2 = document.getElementById("手动");
//   button1.style.display='none';
//   button2.style.display='none';
//   if (targetElement.id=='自动'){
//     const buttonMode1 = document.getElementById("模式1");
//     const buttonMode2 = document.getElementById("模式2");
//     const buttonMode3 = document.getElementById("模式3");
//     buttonMode1.style.display='inline-block';
//     buttonMode2.style.display='inline-block';
//     buttonMode3.style.display='inline-block';
//     buttonMode1.addEventListener("click",selectModeorDevice);
//     buttonMode2.addEventListener("click",selectModeorDevice);
//     buttonMode3.addEventListener("click",selectModeorDevice);
//   }
//   else {
//     const buttonDevice1 = document.getElementById("桨叶1");
//     const buttonDevice2 = document.getElementById("桨叶2");
//     const buttonDevice3 = document.getElementById("气盘1");
//     const buttonDevice4 = document.getElementById("气盘2");
//     const buttonDevice5 = document.getElementById("气盘3");
//     const buttonDevice6 = document.getElementById("气盘4");
//     const buttonDevice7 = document.getElementById("气盘5");
//     const buttonDevice8 = document.getElementById("气盘6");
//     buttonDevice1.style.display='inline-block';
//     buttonDevice2.style.display='inline-block';
//     buttonDevice3.style.display='inline-block';
//     buttonDevice4.style.display='inline-block';
//     buttonDevice5.style.display='inline-block';
//     buttonDevice6.style.display='inline-block';
//     buttonDevice7.style.display='inline-block';
//     buttonDevice8.style.display='inline-block';
//     buttonDevice1.addEventListener("click",selectModeorDevice);
//     buttonDevice2.addEventListener("click",selectModeorDevice);
//     buttonDevice3.addEventListener("click",selectModeorDevice);
//     buttonDevice4.addEventListener("click",selectModeorDevice);
//     buttonDevice5.addEventListener("click",selectModeorDevice);
//     buttonDevice6.addEventListener("click",selectModeorDevice);
//     buttonDevice7.addEventListener("click",selectModeorDevice);
//     buttonDevice8.addEventListener("click",selectModeorDevice);
//   }
// }

// function selectModeorDevice(obj){
//   const targetElement = obj.target;
//   if(targetElement.id =='模式1' || targetElement.id =='模式2'|| targetElement.id =='模式3')
//   {
//     const buttonMode1 = document.getElementById("模式1");
//     const buttonMode2 = document.getElementById("模式2");
//     const buttonMode3 = document.getElementById("模式3");
//     buttonMode1.style.display='none';
//     buttonMode2.style.display='none';
//     buttonMode3.style.display='none';
//     const button = document.getElementById("曝气控制");
//     button.style.display='inline-block';
//     switch(targetElement.id)
//     {
//       case '模式1': 
//         sendMessage(string_mode_data.mode1);
//         recvMessage(38);
//         break;
//       case '模式2': 
//         sendMessage(string_mode_data.mode2);
//         recvMessage(50);
//         break;
//       case '模式3': 
//         sendMessage(string_mode_data.mode3);
//         recvMessage(60);
//         break;
//     }
//   }
//   else{
//     current_device = targetElement.id;
//     const buttonDevice1 = document.getElementById("桨叶1");
//     const buttonDevice2 = document.getElementById("桨叶2");
//     const buttonDevice3 = document.getElementById("气盘1");
//     const buttonDevice4 = document.getElementById("气盘2");
//     const buttonDevice5 = document.getElementById("气盘3");
//     const buttonDevice6 = document.getElementById("气盘4");
//     const buttonDevice7 = document.getElementById("气盘5");
//     const buttonDevice8 = document.getElementById("气盘6");
//     buttonDevice1.style.display='none';
//     buttonDevice2.style.display='none';
//     buttonDevice3.style.display='none';
//     buttonDevice4.style.display='none';
//     buttonDevice5.style.display='none';
//     buttonDevice6.style.display='none';
//     buttonDevice7.style.display='none';
//     buttonDevice8.style.display='none';
//     const buttonOn = document.getElementById("开启");
//     const buttonOff = document.getElementById("关闭");
//     buttonOn.style.display='inline-block';
//     buttonOff.style.display='inline-block';
//     buttonOn.addEventListener("click",selectOn);  // 注意这里应该填入句柄，否则是调用了该函数
//     buttonOff.addEventListener("click",selectOn);
//   }
// }

// function selectOn(obj){
//   const targetElement = obj.target;
//   const buttonOn = document.getElementById("开启");
//   const buttonOff = document.getElementById("关闭");
//   buttonOn.style.display='none';
//   buttonOff.style.display='none';
//   const button = document.getElementById("曝气控制");
//   button.style.display='inline-block';
//   switch (current_device)
//   {
//     case '桨叶1':
//       if(targetElement.id=='开启'){
//         sdata='ctrl_switch2/ON';
//         sf1 = 1;
//       }
//       else{
//         sdata='ctrl_switch2/OFF';
//         sf1 = 0;
//       }
//       break;
//     case '桨叶2':
//       if(targetElement.id=='开启'){
//         sdata='ctrl_switch3/ON';
//         sf2 = 1;
//       }
//       else{
//         sdata='ctrl_switch3/OFF';
//         sf2 = 0;
//       }
//       break;
    
//     case '气盘1':
//       if(targetElement.id=='开启'){
//         sdata='ctrl_motor0/2';
//         sb1 = 1;
//       }
//       else{
//         sdata='ctrl_motor0/0';
//         sb1 = 0;
//       }
//       break;
//     case '气盘2':
//       if(targetElement.id=='开启'){
//         sdata='ctrl_motor1/2';
//         sb2 = 1;
//       }
//       else{
//         sdata='ctrl_motor1/0';
//         sb2 = 0;
//       }
//       break;
//     case '气盘3':
//       if(targetElement.id=='开启'){
//         sdata='ctrl_motor2/2';
//         sb3 = 1;
//       }
//       else{
//         sdata='ctrl_motor2/0';
//         sb3 = 0;
//       }
//       break;
//     case '气盘4':
//       if(targetElement.id=='开启'){
//         sdata='ctrl_motor3/2';
//         sb4 = 1;
//       }
//       else{
//         sdata='ctrl_motor3/0';
//         sb4 = 0;
//       }
//       break;
//     case '气盘5':
//       if(targetElement.id=='开启'){
//         sdata='ctrl_motor4/2';
//         sb5 = 1;
//       }
//       else{
//         sdata='ctrl_motor4/0';
//         sb5 = 0;
//       }
//       break;
//     case '气盘6':
//       if(targetElement.id=='开启'){
//         sdata='ctrl_motor5/2';
//         sb6 = 1;
//       }
//       else{
//         sdata='ctrl_motor5/0';
//         sb6 = 0;
//       }
//       break;
//   }
//   sendMessage(sdata);
// }

function onlineDetection() {
  bton = document.getElementById("在线监测");
  if (!is_on) {
    bton.innerHTML = "暂停监测";
    is_on = true;
  } else {
    bton.innerHTML = "继续监测";
    is_on = false;
  }
}

window.onload = function () {
  setScale();
};
window.onresize = function () {
  setScale();
};



// 通过 jQuery，您可以选取（查询，query） HTML 元素，并对它们执行"操作"（actions）。
$(document).ready(function () {
  $.ajax({
    url: baseUrl, //首先请求一次后台，再进行其他操作
    dataType: "json", // 预期返回的数据类型，如果是json格式，在接收到返回时会自动封装成json对象
    type: "get", // 请求方式
    async: true, // 是否异步请求
    success: function (data) {
      console.log("成功！");
    },
    error: function (arg1) {
    },
  });
  $.ajax({
    url: baseUrl+'start_get', //首先请求一次后台，再进行其他操作
    dataType: "json", // 预期返回的数据类型，如果是json格式，在接收到返回时会自动封装成json对象
    type: "get", // 请求方式
    async: true, // 是否异步请求
    success: function (data) {
      console.log("成功！");
    },
    error: function (arg1) {
    },
  });
  $(function () {
    let text = $("#fTbody:first");
    let status = $("#在线监测");
    // 请求数据完成时，更改temp的值，可以更新页面时，再将temp的值给页面
    let requestInterval; // 定义请求间隔句柄
    let updateInterval; // 定义需要清除动画的部分
    let tr_tmp1 = "<tr><td>2023-07-21 13:07:38</td><td>25.48</td><td>123.28</td><td>9.7</td><td>129.11</td></tr>";
    let tr_tmp2 = "<tr><td>2023-07-21 13:07:41</td><td>25.52</td><td>123.78</td><td>10.2</td><td>128.98</td></tr>";
    let tr_tmp3 = "<tr><td>2023-07-21 13:07:44</td><td>26.28</td><td>123.54</td><td>9.9</td><td>128.76</td></tr>";
    let tr_tmp4 = "<tr><td>2023-07-21 13:07:47</td><td>24.53</td><td>123.23</td><td>10.1</td><td>129.68</td></tr>";
    // 添加鼠标悬停事件，悬停时页面数据暂时不会更新，但是悬停结束后会变成最新数据
    text
      .hover(
        // 参数为鼠标移入和移出的句柄函数
        function () {
          clearInterval(requestInterval);
        },
        function () {
          // 请求&页面更新数据，用两个计时器实现，鼠标移入只会暂停页面更新数据
          requestInterval = setInterval(function () {
            if (is_on)
              $.ajax({
                url: baseUrl+"/query1", //后台请求的数据
                dataType: "json", // 预期返回的数据类型，如果是json格式，在接收到返回时会自动封装成json对象
                type: "get", // 请求方式
                async: true, // 是否异步请求
                success: function (data) {
                  data=data[0]
                  let td;
                  td = "<td>" + data['datetime'] + "</td>";
                  td += "<td>" + (Number(data['temperature'])+Math.random()).toFixed(2) + "</td>";
                  td += "<td>" + (Number(data['DO'])+Math.random()*5).toFixed(2) + "</td>";
                  td += "<td>" + (Number(data['PH'])+Math.random()).toFixed(1) + "</td>";
                  td += "<td>" + (Number(data['TDS'])+Math.random()*3).toFixed(2) + "</td>";
                  tr_tmp1 = tr_tmp2;
                  tr_tmp2 = tr_tmp3;
                  tr_tmp3 = tr_tmp4;
                  tr_tmp4 = "<tr>" + td + "</tr>";
                  console.log(td);
                },
                error: function (arg1) {
                  console.log(arg1);
                  alert("加载数据失败");
                },
              });
              text.html(tr_tmp1 + tr_tmp2 + tr_tmp3 + tr_tmp4);
          }, IntervalTime);
          // updateInterval = setInterval(function () {
          //   if (is_on) text.html(tr_tmp1 + tr_tmp2 + tr_tmp3+tr_tmp4);
          // }, IntervalTime); // 滚动间隔时间
        }
      )
      .trigger("mouseleave");
  });
});
