const toggle = document.querySelector(".toggle .show");
const close = document.querySelector(".toggle .close");
const site_off = document.querySelector(".site-off");
const search = document.querySelectorAll(".search");
const search_box = document.querySelector(".search-box");
const overlay = document.querySelector(".overlay");
const close_search = document.querySelector(".close-search");

if (toggle != null && toggle != undefined) {
	toggle.addEventListener("click", () => {
		site_off.classList.add("active");
		toggle.style.display = "none";
		close.style.display = "block";
	});
}
if (close != null && close != undefined) {
	close.addEventListener("click", () => {
		site_off.classList.remove("active");
		toggle.style.display = "block";
		close.style.display = "none";
	});
}
if (search != null && search != undefined) {
	search.forEach((s) => {
		s.addEventListener("click", () => {
			search_box.classList.add("active-box-search");
			overlay.classList.add("show");
		});
	});
}
if (close_search != null && close_search != undefined) {
	close_search.addEventListener("click", () => {
		search_box.classList.remove("active-box-search");
		overlay.classList.remove("show");
	});
}
