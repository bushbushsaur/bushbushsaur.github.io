function showOnClick(imgId,itemId) {
	var imgAhgkD = document.getElementById(imgId);
	imgAhgkD.setAttribute("disp",imgAhgkD.style.display);
	imgAhgkD.style.display = "none";
	document.getElementById(itemId).addEventListener("click",function() {
		imgAhgkD.style.display = imgAhgkD.getAttribute("disp");
	});
}
