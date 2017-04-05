var addListButton = document.getElementById("add-list");
addListButton.addEventListener("click", function() {
	var addListPopUp = document.getElementById("add-list-popup");
	addListPopUp.style.display = "flex";
	
});

var removeListButton = document.getElementById("remove-list-popup");
removeListButton.addEventListener("click", function() {
	var addListPopUp = document.getElementById("add-list-popup");
	addListPopUp.style.display = "none";
});

var addItemButton = document.getElementById("add-item");
addItemButton.addEventListener("click", function() {
	var addItemPopUp = document.getElementById("add-item-popup");
	addItemPopUp.style.display = "flex";
	
});

var removeItemButton = document.getElementById("remove-item-popup");
removeItemButton.addEventListener("click", function() {
	var addItemPopUp = document.getElementById("add-item-popup");
	addItemPopUp.style.display = "none";
});