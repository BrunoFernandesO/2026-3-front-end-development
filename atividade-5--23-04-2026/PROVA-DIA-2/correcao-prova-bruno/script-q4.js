function add(){
	const cards = document.getElementById("Cards");
	const original = cards.querySelector(".card");
	const novo = original.cloneNode(true);
	novo.querySelector("img").src = "../img/Lucas_Paqueta.webp";
	novo.querySelector("img").alt = "Lucas Paquetá";
	novo.querySelector(".card-title span.card-title").innerText = "Lucas Paquetá";
	novo.querySelector("#Rank").innerText = "8,8";
	novo.querySelector("#Data_Nas").innerHTML = "<strong>Nascimento:</strong> 27/08/1997";
	novo.querySelector("#Alutra").innerHTML = "<strong>Altura:</strong> 1,80 m";
	novo.querySelector("[id='Posição ']").innerHTML = "<strong>Posição:</strong> Meio-campista";
	cards.appendChild(novo);
}
