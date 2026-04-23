const grupos_iniciais = {
	titulos: ["GRUPO A", "GRUPO B", "GRUPO C"],
	paises: [
		"Mexico", "Africa do sul", "Coreia do sul", "Republica Tcheca",
		"Canada", "Suiça", "Catar", "Vaga Europeia (Bósnia)",
		"Brasil", "Marrocos", "Haiti", "Escócia"
	],
	fatos: [
		"O jogo de abertura será México x África do Sul. Confrontos entre Coreia do Sul e seleções europeias já ocorreram em várias Copas, com histórico equilibrado.",
		"O Canadá joga em casa, fator importante de desempenho. Catar e Suíça já se enfrentaram recentemente em amistosos internacionais.",
		"Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas."
	]
};

const grupos_proximos = {
	titulos: ["GRUPO D", "GRUPO E", "GRUPO F"],
	paises: [
		"Estados Unidos", "Paraguai", "Austrália", "Turquia",
		"Alemanha", "Equador", "Costa do Marfin", "Curaçao",
		"Holanda", "Japão", "Tunísia", "Suécia"
	],
	fatos: [
		"Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.",
		"Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.",
		"Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas."
	]
};

function aplicarGrupos(dados){
	dados.titulos.forEach(function(t, i){
		document.getElementById("titulo-" + (i + 1)).innerText = t;
	});
	dados.paises.forEach(function(p, i){
		document.getElementById("pais-" + (i + 1)).innerText = p;
	});
	dados.fatos.forEach(function(f, i){
		document.getElementById("funfact-" + (i + 1)).innerHTML = "<summary>Saiba Mais</summary><b>Fatos: </b>" + f;
	});
}

function proximo(){
	aplicarGrupos(grupos_proximos);
}

function anterior(){
	aplicarGrupos(grupos_iniciais);
}
