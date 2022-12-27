const data = [
	{
		versiculos: [
			{
				index: 1,
				versiculo: "A saber: Se, com a tua boca, confessares ao Senhor Jesus e, em teu coração, creres que Deus o ressuscitou dos mortos, serás salvo.",
				fonte: "Romanos 10:9",
			},
			{
				index: 2,
				versiculo: "Antes, santificai a Cristo, como Senhor, em vosso coração; e estai sempre preparados para responder com mansidão e temor a qualquer que vos pedir a razão da esperança que há em vós.",
				fonte:"1 Pedro 3:15",
			},
			{
				index: 3,
				versiculo: "Àquele que não conheceu pecado, o fez pecado por nós; para que, nele, fôssemos feitos justiça de Deus.",
				fonte: "2 Coríntios 5:21",
			},
			{
				index: 4,
				versiculo: "Assim que, se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo.",
				fonte: "2 Coríntios 5:17",
			},
			{
				index: 5,
				versiculo: "Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem o vosso Pai, que está nos céus.",
				fonte: "Mateus 5:16",
			},
			{
				index: 6,
				versiculo: "Bem-aventurado o varão que sofre a tentação; porque, quando for provado, receberá a coroa da vida, a qual o Senhor tem prometido aos que o amam.",
				fonte: "Tiago 1:12",
			},
			{
				index: 7,
				versiculo: "Cheguemos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia e achar graça, a fim de sermos ajudados em tempo oportuno.",
				fonte: "Hebreus 4:16",
			},
			{
				index: 8,
				versiculo: "Como o orvalho do Hermom, que desce sobre os montes de Sião; porque ali o Senhor ordena a bênção e a vida para sempre.",
				fonte: "Salmos 133:3",
			},
			{
				index: 9,
				versiculo: "Confessai as vossas culpas uns aos outros e orai uns pelos outros, para que sareis; a oração feita por um justo pode muito em seus efeitos.",
				fonte: "Tiago 5:16",
			},
			{
				index: 10,
				versiculo: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
				fonte: "Provérbios 3:5",
			},
			{
				index: 11,
				versiculo: "Conhecemos o amor nisto: que ele deu a sua vida por nós, e nós devemos dar a vida pelos irmãos.",
				fonte: "1 João 3:16",
			},
			{
				index: 12,
				versiculo: "Contra essas coisas não há lei.",
				fonte: "Gálatas 5:23",
			},
			{
				index: 13,
				versiculo: "De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.",
				fonte: "Romanos 10:17",
			},
			{
				index: 14,
				versiculo: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
				fonte: "João 14:27",
			},
			{
				index: 15,
				versiculo: "Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração.",
				fonte: "Salmos 37:4",
			},
			{
				index: 16,
				versiculo: "Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá.",
				fonte: "João 11:25",
			},
			{
				index: 17,
				versiculo: "Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.",
				fonte: "João 14:6",
			},
			{
				index: 18,
				versiculo: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.",
				fonte: "Filipenses 4:7",
			},
			{
				index: 19,
				versiculo: "É como o óleo precioso sobre a cabeça, que desce sobre a barba, a barba de Arão, e que desce à orla das suas vestes.",
				fonte: "Salmos 133:2",
			},
			{
				index: 20,
				versiculo: "E criou Deus o homem à sua imagem; à imagem de Deus o criou; macho e fêmea os criou.",
				fonte: "Gênesis 1:27",
			}
			// {
			// 	index: 21,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 22,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 23,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 24,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 25,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 26,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 27,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 28,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 29,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 30,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 31,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 32,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 33,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 34,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 35,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 36,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 37,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 38,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 39,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 40,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 41,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 42,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 43,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 44,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 45,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 46,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 47,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 48,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 49,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 50,
			// 	versiculo: "",
			// 	fonte: "",
			// },
		],
	},
];

export default data;
