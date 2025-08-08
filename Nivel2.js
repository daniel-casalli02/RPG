let nome = "Stark";
let classe = "ladino";
let nivel = 12;
let vida = 55;
let vidamax = 100;
let mana = 50;
let manamax = 50;
let ouro = 300;
let xp = 0;

let força = 12;
let defesa = 18;
let agilidade = 12;
let combatesvencidos = 1;

let localAtual = "Cidade firewall" //divisa entre o reino dos elfos e o reino do mar da navegação
let Missão = "Adentra o reino do mar da navegação sem muitos problemas "
const NOME_ARMA = "Adaga putrida";
let DANO_BASE = 60;

const NOME_ARMADURA = "Penumbra";
let DEFESA_BASE = 12;

xp += 150;
ouro -= 30;
vida += 40;
DANO_BASE *= 2;

let ataqueTotal = nivel + DANO_BASE;
let defTotal = DEFESA_BASE + (nivel / 2);

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvançado = nivel >= 10;
let podeEnfrentarGuardião = vidaSuficiente && (ataqueForte || nivelAvançado);

let amigo = "Arcanus";
//
console.log(`LORE DO HERÓI: Stark`);
console.log(``);
console.log(`${nome}, o ${classe} anda furtivamente pelas ruas do reino dos elfos`);
console.log(`Com sua ${NOME_ARMA}, que pode desferir ataques mortais contra qualquer coisa que ameaçe sua paz`);
console.log(`Seu nível ${nivel} e com um ataque total de ${ataqueTotal} não é temido por não saberem que mata na calada da noite`);
console.log(`Suas defesas, que são potencionalizadas pela sua companheira ${NOME_ARMADURA} sua incrivel armadura leve que o deixa com ${defTotal} de defesa`);
console.log(`Após andar pelo reino durante um tem um acumulo de ${xp} de xp e cerca de ${ouro} moedas de ouro.`);
console.log(`Satisfeito com sua exploração, decide dar uma descansada na florenta criptografada perto do reino e recuperando e ficando com ${vida} pontos de vida`);
console.log(`Durante uma exploração acaba encontrando um amigo de longa data o ${amigo}, e o amigo logo explica que o reino foi tomado e que estava indo até lá para devolver o trono para o verdadeiro rei.`);
console.log(`Será que eu tenho vida suficiente? ${vidaSuficiente} |meu é ataque forte? ${ataqueForte} | nível avançado? ${nivelAvançado}`);
console.log(`Será que iremos concesguir enfrenta-lo? ${podeEnfrentarGuardião}`);
console.log(`Chegando ao reino tivemos que passar por servos de legolas, o falso rei, mas passamos sem muitas dificuldades`);
console.log(`Após um tempo derrotando os servos dele, finalmente chegamos até os aposentos reais onde residia legolas`);
console.log(`Logo começamos a enfrenta-lo, mas com um golpe de sorte ele acaba conseguindo matar o ${amigo}`);
console.log(`Por sorte ele acaba se distraindo e ${nome} consegue o finalizar.`);
console.log(`Assim conseguindo devolver o trono ao rei original e vingando o seu amigo`);
console.log(`Logo após esses acontecimentos nosso herói ${nome} decide seguir seu caminho em busca de mais.`);

console.log("")
console.log(`********************************************************************************************************************************************************** `);
console.log(`RECAPITULAÇÃO ↓`);
console.log(`VIDA ATUAL = ${vida}`);
console.log(`MANA ATUAL = ${mana}`);
console.log(`NÍVEL ATUAL = ${nivel}`);
console.log(`OURO ATUAL = ${ouro}`);
console.log(`***********************************************************************************************************************************************************`);
console.log("")

console.log(`Começo meu caminho e depois de alguns minutos andando chego ate uma muralha, me aproimo mais um pouco e um guarda diz, 'por favor entre, iremos o inspecionar.`);
console.log(`Logo entro e me perguntam sobre meu nivel de rank de aventura, e eu logo respondo.`);
console.log("")
if (nivel <= 11) {
    console.log("-Por favor de meia volta-");
}
console.log("")

console.log(`Vejo que acenam com a cabeça e sigo, logo aparece outra pessoa para ver meus pertences, eu concordo e entrego minha bolsa de ouro.`);
if (ouro >= 100){
    console.log("-isso atrai olhares curiosos-");
}

console.log(`Pego de volta o meu ouro e sigo enfrente.`);
console.log("")
console.log(`Novamente vejo outra pessoa e parece ser a última.`);
console.log("")
if (classe === "ladino"){
    console.log("-Vejo que você rouba, mas não perversamente, por favor pode seguir seu caminho-");
}
console.log("")
console.log(`Aceno com a cabeça e finalmente consigo seguir meu caminho.`);
console.log("")
console.log("")
//FIM DO CAPÍTULO 1

//INICIO DO CAPÍTULO 2

console.log(`Sigo meu caminho e ercebo que começa a anoitecer, logo vou para uma parte mais fechada da floresta e monto meu acampamento.`);
console.log(`A noite passa tranquilamente e logo levanto e organizo minhas coisas para seguir minha viagem.`);
console.log(`Durante meu caminho eu encontro um comerciante ambulante, logo me interesso e vejo uma agada que parece rodeada de escuridão, e digo que quero compra-la`);
if (ouro >= 180){
    console.log("Foi bom fazr negocio com você, -ele segue-")
    console.log("__Você adiquiriu a adaga sombria__")
    console.log(`Você ganha 35 de xp ficando com ${xp += 35}`)
    console.log("")
}else{
    console.log("Por favor se não vai comprar nada não me atrapalhe, -ele sai-")
}
console.log(`sigo em frente e se passa horas, e anoitece novamente`);


console.log(`Durante a noite, eu medito`);
if( xp >= 100){
    console.log("Você se sente mais forte, durante a meditação você consegue upar de nível");
    nivel ++
    xp -= 100;
    console.log(`Agora você é nivel ${nivel} e está com ${xp} de xp`)
} else {
    console.log("Você meditou durante um tempo, mas nada aconteceu")
}
console.log(`Ao amanhecer, me levanto e sigo meu caminho, andando umas horas, começo a observer um enorme muro no horizonte, e percebo que estou quase chegando`);
console.log(`Chegando mais perto, percebo que não vou ser bem vindo e vou precisar ir furtivamente`);
if(nivel >= 14 && classe == ladino){
    console.log("-Você furtivamente consgue passar por todos os guardas e com muita facilidade e quase chega na saida-")
} else if (nivel >= 13){
    console.log(-"Você quase é pego quando entra na muralha mas consegue se esconder e quase chegar na saida-")
}else{
    console.log("-Você consegue entrar mas eles te acham e te eliminam-")
}
console.log(`Perto da saida foi mais tranquilo para eu sair, mas como eles não imaginam que alguem iria conseguir passar da porta da frente, quase não há guardas aqui.`);
console.log(`Mas como não sou besta nem nada, aproveito a falta de segurança e vou saquear o lugar`);
console.log(`Abro uma porta e encontro pessoas acorrentadas, aparentemente são os que tentaram passar por ali, mas felizmente não me veem`);
console.log(`Vou para uma outra porta, e não há nada na sala.`);
console.log(`Como parece que não há mais nada neste lugar, decido sair`);
console.log(`E então finalmente cumpro a minha missão, finalmente cheguei no reino do mar da navegação.`);

//FIM DO CAPÍTULO 2