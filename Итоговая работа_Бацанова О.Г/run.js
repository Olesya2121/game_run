let canvas = document.getElementById("canvas")
	let ctx = canvas.getContext("2d")
	
	let lives = 5
	let okLeft = false		
	let okRight = false	
	
	let line = new Image()
	line.src = "img/line.png"
	line.X = 180
	line.Y = -140
	
	let line2 = new Image()
	line2.src = "img/line.png"
	line2.X = 180
	line2.Y = 160
	
	let myKarl = new Image()
	myKarl.src = "img/myKarl.png"
	myKarl.X = 50
	myKarl.Y = 400
	
	let enemyKarl1 = new Image()
	enemyKarl1.src = "img/enKarl1.png"
	enemyKarl1.X = 50
	enemyKarl1.Y = -150
	
	let enemyKarl2 = new Image()
	enemyKarl2.src = "img/enKarl2.png"
	enemyKarl2.X = 250
	enemyKarl2.Y = -450

	let enemyKarl3 = new Image()
	enemyKarl3.src = "img/enKarl3.png"
	enemyKarl3.X = 350
	enemyKarl3.Y = -350

	function drawRect(){
		ctx.fillStyle = "Gray"
		ctx.fillRect(0, 0, 400, 500)
	}
	
	function drawLives(){
		ctx.font = "30px Arial"
		ctx.fillStyle = "White"
		ctx.fillText("Lives: "+lives, 235, 48)
	}
	
	function drawLines(){
		ctx.drawImage(line, line.X, line.Y)
		line.Y +=3
		if (line.Y > 500){
			line.Y = -140
		}
		ctx.drawImage(line2, line2.X, line2.Y)
		line2.Y +=3
		if (line2.Y > 500){
			line2.Y = -140
		}
	}
	
	function stop(){
		cancelAnimationFrame(myReq)
		ctx.font = "60px Arial"
		ctx.fillStyle = "Red"
		ctx.fillText("Game over", 40, 200)
		stop = true
	}
	
	function drawMyKarl(){
		if(okLeft === true && myKarl.X > 0) {myKarl.X -=5}
		if(okRight === true && myKarl.X < 335) {myKarl.X +=5}
	
		ctx.drawImage(myKarl, myKarl.X, myKarl.Y)
	}
	
	function drawEnemyKarl1(){
		if (enemyKarl1.Y+100 > myKarl.Y && enemyKarl1.X+65 > myKarl.X && enemyKarl1.X < myKarl.X+65){
			crash = true
			enemyKarl1.Y = enemyKarl2.Y - 300
			lives--
			if(lives <1){
				stop()
			}		
		}else{
			crash = false
		}	
		if (!crash){
			ctx.drawImage(enemyKarl1, enemyKarl1.X, enemyKarl1.Y)
			enemyKarl1.Y +=3
			if (enemyKarl1.Y > 500){
				enemyKarl1.Y = -100
				enemyKarl1.X = Math.floor(Math.random()*335)
			}
		}
	}
	function drawEnemyKarl2(){
	
		if (enemyKarl2.Y+100 > myKarl.Y && enemyKarl2.X+65 > myKarl.X && enemyKarl2.X < myKarl.X+65){
			crash = true
			enemyKarl2.Y = enemyKarl1.Y - 300
			lives--
			if(lives <1){
				stop()}		
		}else{
			crash = false
		}	
	
		if (!crash){
			ctx.drawImage(enemyKarl2, enemyKarl2.X, enemyKarl2.Y)
			enemyKarl2.Y +=3
			if (enemyKarl2.Y > 500){
				enemyKarl2.Y = -100
				enemyKarl2.X = Math.floor(Math.random()*335)
			}
		}
	}   
	
	function drawEnemyKarl3(){
		if (enemyKarl3.Y+100 > myKarl.Y && enemyKarl3.X+65 > myKarl.X && enemyKarl3.X < myKarl.X+65){
			crash = true
			enemyKarl3.Y = enemyKarl2.Y - 300
			lives--
			if(lives <1){
				stop()
			}		
		}else{
			crash = false
		}	
		if (!crash){
			ctx.drawImage(enemyKarl3, enemyKarl3.X, enemyKarl3.Y)
			enemyKarl3.Y +=3
			if (enemyKarl3.Y > 500){
				enemyKarl3.Y = -100
				enemyKarl3.X = Math.floor(Math.random()*335)
			}
		}
	}

	function render(){
		if (stop === true){return}
		drawRect()
		drawLives()
		drawLines()
		drawMyKarl()
		drawEnemyKarl1()
		drawEnemyKarl2()		
		drawEnemyKarl3()
		myReq = requestAnimationFrame(render)
	}
	render()	
	addEventListener("keydown", function(event){
		let newDirect = event.keyCode
		if (newDirect === 37){
			okLeft = true
		}
		
		if (newDirect === 39){
			okRight = true
		}
	})
	
	addEventListener("keyup", function(event){
		let newDirect = event.keyCode
		if (newDirect === 37){
			okLeft = false
		}
		if (newDirect === 39){
			okRight = false
		}
	})