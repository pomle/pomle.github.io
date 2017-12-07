function disclose(event) {
	const props = [];
	for (let key in event) {
		try {
			props.push([key, JSON.stringify(event[key])]);
		} catch (e) {
			console.log(e);
		}
	}

	const table = document.getElementById("keys");
	table.innerHTML = "";
	props.forEach(points => {
		const row = document.createElement("tr");
		points.forEach(text => {
			const col = document.createElement("td");
			col.textContent = text;
			row.appendChild(col);
		});
		table.appendChild(row);
	});
}

var element = document;
element.addEventListener("touchstart", disclose, false);
element.addEventListener("touchmove", disclose, false);
element.addEventListener("touchend", disclose, false);
element.addEventListener("touchcancel", disclose, false);
element.addEventListener("touchforcechange", disclose, false);
