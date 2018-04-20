function showPic(whichpic){
				var source = whichpic.getAttribute("href");
				var img = document.getElementById("placeholder");
				img.setAttribute("src",source);
			}