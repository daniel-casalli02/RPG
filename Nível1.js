let nome = `Stark`;
let classe = `ladino`;
let nivel = 12;
let vida = 75;
let ouro = 100;
let xp = 0;

const NOME_ARMA = `Adaga putrida`;
let DANO_BASE = 60;

const NOME_ARMADURA = `Penumbra`;
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
let podeEnfrentarGuardião = vidaSuficiente && (ataqueForte||nivelAvançado);

let amigo =`arcanus`;
//
console.log(`LORE DO HERÓI: Stark`);
console.log(``);
console.log(`${nome}, o ${classe} anda furtivamente pelas ruas do reino dos elfos`);
console.log(`Com sua ${NOME_ARMA}, que pode desferir ataques mortais contra qualquer coisa que ameaçe sua paz`);
console.log(`Seu nível ${nivel} e com um ataque total de ${ataqueTotal} não é temido por não saberem que mata na calada da noite`);
console.log(`Suas defesas, que são potencionalizadas pela sua companheira ${NOME_ARMADURA} sua incrivel armadura leve que o deixa com ${defTotal}`);
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
console.log(`Logo após esses acontecimentos nosso herói ${nome} decide seguir seu caminho em busca de mais`);