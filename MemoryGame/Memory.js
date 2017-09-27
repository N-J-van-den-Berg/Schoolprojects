var points= 0;
            var moves= 0;
           
	var aangeklickt = [];
	var img = new Array(15);
		img[0] = "Images/Banaan.jpg";
		img[1] = "Images/Banaan.jpg";
		img[2] = "Images/aardbei.jpg";
		img[3] = "Images/aardbei.jpg";
		img[4] = "Images/ananas.jpg";
		img[5] = "Images/ananas.jpg";
		img[6] = "Images/Appel.jpg";
		img[7] = "Images/Appel.jpg";
		img[8] = "Images/citroen.jpg";
		img[9] = "Images/citroen.jpg";
		img[10] = "Images/framboos.jpg";
		img[11] = "Images/framboos.jpg";
		img[12] = "Images/meloen2.jpg";
		img[13] = "Images/meloen2.jpg";
		img[14] = "Images/perzik.jpg";
		img[15] = "Images/perzik.jpg";

//shuffle's the array with parameter array
	function shuffleArray() { 
		for(var i = img.length - 1; i > 0; i--) { 
			var j = Math.floor(Math.random() * (i + 1));
			var temp = img[i];
			img[i] = img[j];
			img[j] = temp; 
		}
		return img;
	}
	img = shuffleArray(img);
		console.log(img);
			shuffleArray();
//array with images when turned around
	
		function tileclick(tileID) { 
			var x = document.getElementById("tile" + tileID);

			x.src = img[tileID];

			aangeklickt.push(tileID);
			checkTiles();
					}

					//terugdraai functie
					function turnBack() { 
						var img1 = document.getElementById("tile" + aangeklickt[0]);
						var img2 = document.getElementById("tile" + aangeklickt[1]);
							img1.src = "Images/marley.jpg";
							img2.src = "Images/marley.jpg";
							aangeklickt = [];
					}

					//function checktiles
						function checkTiles() { 
							if (aangeklickt.length == 2) { 
								if (img[aangeklickt[0]] != img[aangeklickt[1]]) { 
									setTimeout(function() { 
										turnBack();
									},500)	
								}
								else { 
									aangeklickt = [];
								}
							}
						}

						//timer functie
		setInterval(Timer, 1000)//triggers function every time it hits 100 Ms that's equal to 1 second 
		 var Time = 0;
         var TimeMin = 0;

	function Timer() {
						Time++ // increments +1
						if (Time > 59) { //here we set the condition if its true, if the condition is true-
							Time = Time - 60//there will be set a new value because we side -60 and add 1 to the variable timeMin
							TimeMin++ // increments +1 
						}
							if (Time < 10)	{ // here we set another condition if time is less than 10 seconds excute the following 
							document.getElementById("Time").innerHTML = "Time: " + TimeMin + ":0"+ Time;
						}
								else	{
							document.getElementById("Time").innerHTML = "Time: " + TimeMin + ":"+ Time;
						}
					}
		//reload function 
		function refresh() { 
			location.reload();
		}