const date = new Date();
document.getElementById("year").innerText = date.getFullYear();

const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("site-nav");

if (menuButton && nav) {
	const closeMenu = () => {
		menuButton.setAttribute("aria-expanded", "false");
		nav.classList.remove("is-open");
	};

	menuButton.addEventListener("click", () => {
		const expanded = menuButton.getAttribute("aria-expanded") === "true";
		menuButton.setAttribute("aria-expanded", String(!expanded));
		nav.classList.toggle("is-open", !expanded);
	});

	nav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	document.addEventListener("click", (event) => {
		const clickIsOutside = !nav.contains(event.target) && !menuButton.contains(event.target);
		if (clickIsOutside) {
			closeMenu();
		}
	});
}