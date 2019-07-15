window.onload = function(){
	var err = 0;
	var right = 0;
	var total;
	var params;
	var flag = 0;
	var numbertext = '';

	var outText = document.getElementById('outText');
	var inText = document.getElementById('inText');
	var finishBtn = document.getElementById('finishBtn');
	var stopBtn = document.getElementById('stopBtn');

	var timeText = document.getElementById('timeText');
	var countText = document.getElementById('countText');
	var numberText = document.getElementById('numberText');


	var startBtn = document.getElementById('startBtn');

	// 按钮初始状态
	stopBtn.disabled = true;
	finishBtn.disabled = true;
	inText.disabled = true;
	

	// 生成随机数函数
	var random = function(){
		var str = "";
		const len = 6;
		for (var i = 0; i < len; i++) {
			if(flag == 1){
				str += String(Math.floor(Math.random()*10));
			}else if(flag == 2){
				str += numbertext[Math.floor(Math.random()*numbertext.length)];
			}
		}
		return str;
	}

	// 计算成绩函数
	var score = function(){
		alert("right:" + right + ",------>err:"+err);
	}
	// 时间结束事件
	var timeFinish = function(){
		timeText.value = "";
		inText.value = "";
		countText.value = "";
		numberText.value = "";
		outText.value = "";
		countText.disabled = false;
		inText.disabled = true;
		startBtn.disabled = false;
		stopBtn.disabled = true;
		numberText.disabled = false;
		finishBtn.disabled = true;
		timeText.disabled = false;
		stopBtn.value == 'stop';
		window.clearInterval(params);
		score();
	}
	// 任务结束事件
	var countFinish = function(){
		timeFinish();
	}

	// 按钮点击事件
	finishBtn.onclick = function(){
		timeFinish();
	}
	stopBtn.onclick = function(){
		var timeRemain = timeText.value;
		// console.log(stopBtn.value);
		if(stopBtn.value == 'stop'){
			stopBtn.value = 'continue';
			inText.disabled = true;
			window.clearInterval(params);
		}else{
			stopBtn.value = 'stop';
			inText.disabled = false;
			inText.focus();
			params = window.setInterval(function(){
				if(timeRemain){
					timeRemain--;
					timeText.value = timeRemain;
				}else{
					timeFinish();
				}
			},1000);
		}

	}
	startBtn.onclick = function(){

		if(numberText.value.length == 0){
			flag = 1;
		}else{
			numbertext = numberText.value;
			flag = 2;
		}
		stopBtn.disabled = false;
		startBtn.disabled = true;
		finishBtn.disabled = false;
		timeText.disabled = true;
		numberText.disabled = true;
		countText.disabled = true;
		inText.disabled = false;
		inText.focus();
		outText.value = random();
		var timeExe = timeText.value * 60 - 1;
		total = countText.value;
		var numberExe = numberText.value;
		params = window.setInterval(function(){
				if(timeExe>=0){
					timeText.value = timeExe;
					timeExe--;
				}else{
					timeFinish();
				}
		},1000);
	}

	// 输入文本事件
	inText.oninput = function(){
		if(inText.value.length == 6 && inText.value === outText.value){
			total--;
			if(total){
				countText.value = total;
				outText.value = random();
				right++;
				// console.log(right,total);
				inText.value = "";
			}else{
				right++;
				countFinish();
			}

			
		}else if(inText.value.length == 6 && inText.value != outText.value){
			total--;
			if(total){
				countText.value = total;
				outText.value = random();
				err++;
				inText.value = "";
			}else{
				err++;
				countFinish();
			}
		}
	}


};