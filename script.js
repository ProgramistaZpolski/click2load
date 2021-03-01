"use strict";

window._click2loadHandler = function(obj, func) {
	func(obj.parentNode);
	obj.parentNode.innerHTML = "";
};

window.onload = function () {
	document.querySelectorAll("[data-click2load]").forEach(el => {
		el.outerHTML = `<div>
		<style>$_PHP{STYLE}</style>
		<div class="js-click2load-overlay" onclick="window._click2loadHandler(this, (e) => {${el.dataset.click2load}});">
			<img src="${el.dataset.click2loadImage ?? "plugin.png"}" alt="Plugin" aria-hidden="true" loading="lazy" decoding="async">
			<p>Run ${el.dataset.click2loadTitle ?? "Flash Player"}</p>
		</div></div>`;
	});
};