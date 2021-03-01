"use strict";

window._click2loadHandler = function(obj, func) {
	func(obj.parentNode);
	obj.parentNode.innerHTML = "";
};

window.onload = function () {
	document.querySelectorAll("[data-click2load]").forEach(el => {
		el.outerHTML = `<div>
		<style>.js-click2load-overlay {
	cursor: pointer;
	text-align: center;
	background-color: #38383d;
	width: 30rem;
	height: 20rem;
	color: white;
	font-size: 3rem;
	padding: 1rem;
	box-sizing: content-box;
}

.js-click2load-overlay img {
	margin-top: 25px;
}

.js-click2load-overlay p {
	margin: 0;
}</style>
		<div class="js-click2load-overlay" onclick="window._click2loadHandler(this, (e) => {${el.dataset.click2load}});">
			<img src="${el.dataset.click2loadImage ?? "plugin.png"}" alt="Plugin" aria-hidden="true" loading="lazy" decoding="async">
			<p>Run ${el.dataset.click2loadTitle ?? "Flash Player"}</p>
		</div></div>`;
	});
};