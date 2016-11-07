	function clock(){
		console.log(1);
		canvas=document.getElementById("canvas");
		ctx=canvas.getContext("2d");
		width=ctx.canvas.width;
		height=ctx.canvas.height;
		r=width/2;
		rem=width/200;
	}

	clock.prototype={
		initClock:function(hour,minute,second){
			ctx.clearRect(0,0,width,height);
			this.drawBackground();
			this.drawHour(hour,minute);
			this.drawMinute(minute);
			this.drawSecond(second);
			this.drawDot();
			ctx.restore();

		},
		drawBackground:function(){
			console.log(width);
			ctx.save();
			ctx.translate(r,r);
			ctx.beginPath();
			ctx.lineWidth=10*rem;
			ctx.strokeStyle="black";
			ctx.fillStyle="black";
			ctx.arc(0,0,r-(ctx.lineWidth/2),0,Math.PI*2,false);
			ctx.stroke();

			var hourNumber=[3,4,5,6,7,8,9,10,11,12,1,2];
			hourNumber.forEach(function(node,i){
				var rad=2*Math.PI/12*i;
				var x=Math.cos(rad)*(r-30*rem);
				var y=Math.sin(rad)*(r-30*rem);
				ctx.fontWeight="bold";
				ctx.font=18*rem+"px Arial";
				ctx.textAlign="center";
				ctx.textBaseline="middle";
				ctx.fillText(node,x,y);
			});
			//话60个点
			for(var i=0;i<60;i++){
				var rad=Math.PI*2/60*i;
				var x=Math.cos(rad)*(r-18*rem);
				var y=Math.sin(rad)*(r-18*rem);
				ctx.beginPath();
				if(i%5==0){
					ctx.fillStyle="black";
				}else{
					ctx.fillStyle="#eee";
				}
				ctx.arc(x,y,2*rem,0,2*Math.PI,false);
				ctx.fill();
			}
			// ctx.closePath();

		},

		drawHour:function(hour,minute){
			ctx.beginPath();
			ctx.save();
			var mrad=Math.PI*2/12/60*minute;
			ctx.rotate(((Math.PI*2/12)*hour)+mrad);
			ctx.lineWidth=6*rem;
			ctx.lineCap="round";
			ctx.moveTo(0,10*rem);
			ctx.lineTo(0,-r/2);
			ctx.stroke();
			ctx.restore();

		},
		drawMinute:function(minute){
			ctx.beginPath();
			ctx.save();
			ctx.rotate((Math.PI*2/60)*minute);
			ctx.lineWidth=3*rem;
			ctx.lineCap="round";
			ctx.moveTo(0,10);
			ctx.lineTo(0,-r+18*rem);
			ctx.stroke();
			ctx.restore();
		},
		drawSecond:function(second){
			ctx.beginPath();
			ctx.save();
			ctx.rotate((Math.PI*2/60)*second);
			ctx.fillStyle="red";
			ctx.lineWidth=3*rem;
			ctx.lineCap="round";
			ctx.moveTo(-2,20*rem);
			ctx.lineTo(2,20*rem);
			ctx.lineTo(1,-r+18*rem);
			ctx.lineTo(-1,-r+18*rem);
			ctx.fill();
			ctx.restore();
		},
		drawDot:function(){
			ctx.beginPath();
			ctx.fillStyle="white";
			ctx.arc(0,0,3*rem,0,2*Math.PI,false);
			ctx.fill();
			ctx.restore();
		}
		
	}