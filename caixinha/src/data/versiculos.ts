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
			},
			{
				index: 21,
				versiculo: "E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo réptil que se move sobre a terra.",
				fonte: "Gênesis 1:26",
			},
			{
				index: 22,
				versiculo: "E disse o Senhor, em visão, a Paulo: Não temas, mas fala e não te cales.",
				fonte: "Atos 18:9",
			},
			{
				index: 23,
				versiculo: "E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo para perdão dos pecados, e recebereis o dom do Espírito Santo.",
				fonte: "Atos 2:38",
			},
			{
				index: 24,
				versiculo: "E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo.",
				fonte: "2 Coríntios 12:9",
			},
			{
				index: 25,
				versiculo: "E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos.",
				fonte: "Atos 4:12",
			},
			{
				index: 26,
				versiculo: "E ficou ali um ano e seis meses, ensinando entre eles a palavra de Deus.",
				fonte: "Atos 18:11",
			},
			{
				index: 27,
				versiculo: "E Jesus disse-lhe: Amarás o Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento.",
				fonte: "Mateus 22:37",
			},
			{
				index: 28,
				versiculo: "E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.",
				fonte: "Romanos 12:2",
			},
			{
				index: 29,
				versiculo: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto.",
				fonte: "Romanos 8:28",
			},
			{
				index: 30,
				versiculo: "E, chegando-se Jesus, falou-lhes, dizendo: É-me dado todo o poder no céu e na terra.",
				fonte: "Mateus 28:18",
			},
			{
				index: 31,
				versiculo: "E, tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens.",
				fonte: "Colossenses 3:23",
			},
			{
				index: 32,
				versiculo: "Ele te declarou, ó homem, o que é bom; e que é o que o Senhor pede de ti, senão que pratiques a justiça, e ames a beneficência, e andes humildemente com o teu Deus?",
				fonte: "Miquéias 6:8",
			},
			{
				index: 33,
				versiculo: "Ensinando-as a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até à consumação dos séculos. Amém!",
				fonte: "Mateus 28:20",
			},
			{
				index: 34,
				versiculo: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim; e a vida que agora vivo na carne vivo-a na fé do Filho de Deus, o qual me amou e se entregou a si mesmo por mim.",
				fonte: "Gálatas 2:20",
			},
			{
				index: 35,
				versiculo: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
				fonte: "1 Pedro 5:7",
			},
			{
				index: 36,
				versiculo: "Levando ele mesmo em seu corpo os nossos pecados sobre o madeiro, para que, mortos para os pecados, pudéssemos viver para a justiça; e pelas suas feridas fostes sarados.",
				fonte: "1 Pedro 2:24",
			},
			{
				index: 37,
				versiculo: "Mas a todos quantos o receberam deu-lhes o poder de serem feitos filhos de Deus: aos que creem no seu nome",
				fonte: "João 1:12",
			},
			{
				index: 38,
				versiculo: "Mas buscai primeiro o Reino de Deus, e a sua justiça, e todas essas coisas vos serão acrescentadas.",
				fonte: "Mateus 6:33",
			},
			{
				index: 39,
				versiculo: "Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.",
				fonte: "Romanos 5:8",
			},
			{
				index: 40,
				versiculo: "Mas ele foi ferido pelas nossas transgressões e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e, pelas suas pisaduras, fomos sarados.",
				fonte: "Isaías 53:5",
			},
			{
				index: 41,
				versiculo: "Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.",
				fonte: "Gálatas 5:22",
			},
			{
				index: 42,
				versiculo: "Mas os que esperam no Senhor renovarão as suas forças e subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.",
				fonte: "Isaías 40:31",
			},
			{
				index: 43,
				versiculo: "Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas tanto em Jerusalém como em toda a Judeia e Samaria e até aos confins da terra.",
				fonte: "Atos 1:8",
			},
			{
				index: 44,
				versiculo: "Meus irmãos, tende grande gozo quando cairdes em várias tentações",
				fonte: "Tiago 1:2",
			},
			{
				index: 45,
				versiculo: "Na verdade, na verdade vos digo que quem ouve a minha palavra e crê naquele que me enviou tem a vida eterna e não entrará em condenação, mas passou da morte para a vida.",
				fonte: "João 5:24",
			},
			{
				index: 46,
				versiculo: "Não deixando a nossa congregação, como é costume de alguns; antes, admoestando-nos uns aos outros; e tanto mais quanto vedes que se vai aproximando aquele dia.",
				fonte: "Hebreus 10:25",
			},
			{
				index: 47,
				versiculo: "Não estejais inquietos por coisa alguma; antes, as vossas petições sejam em tudo conhecidas diante de Deus, pela oração e súplicas, com ação de graças.",
				fonte: "Filipenses 4:6",
			},
			{
				index: 48,
				versiculo: "Não se aparte da tua boca o livro desta Lei; antes, medita nele dia e noite, para que tenhas cuidado de fazer conforme tudo quanto nele está escrito; porque, então, farás prosperar o teu caminho e, então, prudentemente te conduzirás.",
				fonte: "Josué 1:8",
			},
			{
				index: 49,
				versiculo: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te esforço, e te ajudo, e te sustento com a destra da minha justiça.",
				fonte: "Isaías 41:10",
			},
			{
				index: 50,
				versiculo: "Não te mandei eu? Esforça-te e tem bom ânimo; não pasmes, nem te espantes, porque o Senhor, teu Deus, é contigo, por onde quer que andares.",
				fonte: "Josué 1:9",
			},
			// {
			// 	index: 50,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 50,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 50,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 50,
			// 	versiculo: "",
			// 	fonte: "",
			// },
			// {
			// 	index: 50,
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
