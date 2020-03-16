let navItems = document.querySelectorAll("a[href*='#']");
let slides = document.getElementsByClassName("slide");
let slider= document.getElementsByClassName("slider");
let leftArrow = document.querySelectorAll(".left-arrow");
let rightArrow = document.querySelectorAll(".right-arrow");
let activeImages = document.querySelectorAll(".image");
let submitButton = document.getElementsByClassName("button");
let name = document.getElementsByClassName("name");
let email = document.getElementsByClassName("email");
let subject = document.getElementsByClassName("subject");
let description = document.getElementsByClassName("textarea");
let iphoneVertical = document.getElementsByClassName("iphone-vertical");
let iphoneHorizontal = document.getElementsByClassName("iphone-horizontal");

for (let navItem of navItems ) {
	navItem.addEventListener("click", () => {
		navItems.forEach(el => {
			if (el.classList.contains("active-nav-link")) {
				el.classList.remove("active-nav-link");
			}
		})
		navItem.classList.add("active-nav-link");
	});
}

iphoneVertical[0].addEventListener("click", () => {
	iphoneVertical[0].src == "file:///C:/Users/loptop/Desktop/singolo/assets/images/iphone-vertical.png" || 
	iphoneVertical[0].src == "https://github.com/deltapoint/singolo/blob/master/assets/images/iphone-vertical.png" ? 
	iphoneVertical[0].src = "./assets/images/iphone-vertical-off.png" : 
	iphoneVertical[0].src = "./assets/images/iphone-vertical.png";
});

iphoneHorizontal[0].addEventListener("click", () => {
	iphoneHorizontal[0].src == "file:///C:/Users/loptop/Desktop/singolo/assets/images/iphone-horizontal.png" || 
	iphoneHorizontal[0].src == "https://github.com/deltapoint/singolo/blob/master/assets/images/iphone-horizontal.png" ? 
	iphoneHorizontal[0].src = "./assets/images/iphone-horizontal-off.png" : 
	iphoneHorizontal[0].src = "./assets/images/iphone-horizontal.png";
});

let slideIndex = 1;
showSlides(slideIndex);

leftArrow[0].addEventListener("click", () => {
	showSlides(slideIndex -= 1);
	changeBg();
});
rightArrow[0].addEventListener("click", () => {
	showSlides(slideIndex += 1);
	changeBg();
});

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

function changeBg() {
	if (slider[0].style.backgroundColor == "rgb(100, 139, 240)") {
		slider[0].style.backgroundImage = "rgb(240, 108, 100)";
	} else {
		slider[0].style.backgroundColor = "rgb(100, 139, 240)";
	}
}

submitButton[0].addEventListener("click", () => {
	if (name[0].value != "" && email[0].value != "") {
		if (subject[0].value == "" && description[0].value == "") {
			alert("Письмо отправлено\nБез темы\nБез описания\nОК");
		} else if (subject[0].value == "") {
			alert("Письмо отправленo\n" + "Без темы\nОписание: " +
				description[0].value + "\nOK")
		} else if (description[0].value == "") {
			alert("Письмо отправленo\n" + "Тема: " +
				subject[0].value + "\nБез описания\nOK")
		} else {
			alert("Письмо отправленo\n" + "Тема: " +
				subject[0].value + "\nОписание: " +
				description[0].value + "\nOK");
		}
	}
})

for (let activeImage of activeImages) {
	activeImage.addEventListener("click", () => {
		activeImages.forEach(el => {
			if (el.classList.contains("active-image")) {
				el.classList.remove("active-image");
			}
		})
		activeImage.classList.add("active-image");
	});
}
