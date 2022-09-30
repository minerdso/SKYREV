const fs = require ('fs')
const { prefix } = JSON.parse(fs.readFileSync('./dono/settings.json'))

module.exports = configMsg = async (conn, body, reply, from, msg) => {

if(from.endsWith('@g.us'))return

switch(body.toLowerCase()){
       case 'menu ssh':
       case 'menussh':
texto = `☎️📱SKYNERD MANANGER SSH📱☎️\n\n
📱 *GERAR TESTE 24HS* - ${prefix}sshgratis \n
📱 *LISTA USUARIOS* - ${prefix}sshlista\n
📱 *RENOVAR USUARIOS* - ${prefix}renovarssh\n
📱 *LIMITE DE USUARIOS* - ${prefix}sshlimit\n
📱 *USUARIOS ONLINE* - ${prefix}sshonline\n
📱 *ACESSO 31 DIAS* - ${prefix}sshlogin`
conn.sendBT(from, texto, "",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'LOGIN SSH 31 DIAS', id: `${prefix}sshlogin`}},    
{index: 3, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id:`${prefix}sshgratis`}},
{index: 2, quickReplyButton: {displayText: 'MAIS OPÇÕES', id: `${prefix}menussh 2`}}
])
break
case 'menussh2':
case 'menu ssh2':
texto = `☎️📱SKYNERD MANANGER SSH📱☎️\n\n
📱 *GERAR TESTE 24HS* - ${prefix}sshgratis \n
📱 *LISTA USUARIOS* - ${prefix}sshlista\n
📱 *RENOVAR USUARIOS* - ${prefix}renovarssh\n
📱 *LIMITE DE USUARIOS* - ${prefix}sshlimit\n
📱 *USUARIOS ONLINE* - ${prefix}sshonline\n
📱 *ACESSO 31 DIAS* - ${prefix}sshlogin`
conn.sendBT(from, texto, "",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'LISTA DE USUÁRIOS', id: `${prefix}sshlista`}},    
{index: 2, quickReplyButton: {displayText: 'SSH STATUS', id: `${prefix}statusssh`}},    
{index: 3, quickReplyButton: {displayText: 'LIMITES SSH USUÁRIOS', id:`${prefix}sshlimit`}}
])

    break
    case "aa":
texto = ` Ok entendi, bom como prefere que eu te explique? 

DIGITE : 

A2 PARA TEXTOS 
A3 PARA AUDIO OU VIDEO
`
conn.sendBT(from, texto, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'Textos', id: `a2`}},    
{index: 2, quickReplyButton: {displayText: 'Audio/Video', id: `a3`}},  
])
break 

case "bb":
reply(`Ok entendi vamos la!
       
PARA USAR FAVOR PEGAR SEU TESTE ANTES OK TEXTOS ABAIXO PEGUE TESTE   
PARA REVENDER ABAIXA PEGUE OS VALORES
`)
break
case "a2":
reply(`
🚨PARA QUEM  QUER SER REVENDEDOR
 https://youtu.be/orR57-t0NAA⚠️🔺
  40$=10 ACESSOS
  80$=20 ACESSOS
  150$=40 ACESSOS 
 APOS PAGAMENTO VC E COLOCADO EM UM GRUPO DE SUPORTE SÃO MAIS DE 10 PESSOAS Q PODEM TE AUXILIAR EM QUALQUER DÚVIDA APESAR DE SER MTO FÁCIL TODO O PROCESSO.
🚨 COMIGO VC APRENDE A FAZER TRÁFEGO PAGO SO FICA SEM CLIENTES SE FOR PREGUIÇOSO 💸
 # VC PAGA 4 REAIS EM CADA USUÁRIO E VENDE A 10$ OU A 20$ ou 30$ ...

👨🏻‍💻digite a palavra *MENU* para voltar📌

`)
break 

case "a3":
reply(`SIGA OS PASSOS


1️⃣MANDA PRINT DA PARTE Q VC POE USUARIO E SENHA NO APP TELA COMPLETA
2️⃣REINICIA SEU CELULAR
3️⃣LIMPA CACHÊ NO APP E FORCA PARADA
4️⃣ATIVA E DESATIVA O MODO AVIÃO NO SEU CELULAR
5️⃣VERIFIQUE USURIO E SENHA
6️⃣ DIGITE O NUMERO 5 PRE VER VIDEOS DE COMO USAR O APP

👨🏻‍💻digite a palavra *MENU* para voltar📌

`)
break

case "a5":
reply(`

LINK DO VIDEO DE COMO USAR O APP ➡️https://youtu.be/T7JjtIKoMhY

LINK DO VIDEO DE COMO USAR O PAINEL DE REVENDA➡️https://youtu.be/orR57-t0NAA

LINK DO VIDEO DE COMO ATUALIZAR O APP➡️https://youtube.com/shorts/NhFlOkcR0do?feature=share

LINK DO VIDEO DE COMO FORCA PARADA NO APP E LIMPA CACHÊ➡️https://youtu.be/VdZ6YG2WfCc

👨🏻‍💻digite a palavra *MENU* para voltar📌
`)
break 

case "a6":
reply(`Situação Brasil 🇧🇷 

VIVO 🟣 - Funcionando em poucos DDD'S, tem um macete de ir colocando modo avião até achar um IP vulnerável a conexão, tbm tem o método Vivo Easy funcionando em alguns lugares.

TIM 🔵 - Funcionando normalmente, sem nada de anormal.

CLARO 🔴 - Morreu em vários lugares, só está funcionando com planos através das conexões 🔴 SSL 38, 39, 40, 41

OI 🟡 - Do mesmo jeito, funcionando em alguns lugares.

Lembrando que essas quedas não tem nada a ver com o app, as operadoras que simplesmente derrubam, sempre que tiver novidades eu irei avisar aqui, recomendo que fique de olho no nosso canal!")

👨🏻‍💻digite a palavra *MENU* para voltar📌
`)
break 

case "a7":
reply(`TERMO PARA AQUISIÇAO DO SERVIÇO ESTEJA CIENTE
Garantimos Servidores sempre online,  nossas rede vpn é um MÉTODO  para usar Internet ilimitada no chip, se ouver queda das vpn por parte da operadora como as vezes acontece uma ou duas vezes por ano, não fazemos reembolso, se o motivo for por conta de erro do nosso servidor e não conseguimos resolver imediatamente, iremos fazer os estorno do valor descontando os dias usado!

REGRAS PARA USSAR O SERVIÇO

  NUNCA MAIS NUNCA, confie no ehi, isso é um túnel construído entre o computador e seu celular. Tem falhas e tem mistérios envolvidos. Não pode acreditar que é confiável porque não é, é bom pacaraio, mas em 3 anos que uso posso garantir isso te larga na mão. Duas coisas não me deixa confiar nisso: A primeira seria o servidor alugado onde não tenho nenhum controle caiu lá caiu nos tudo. A outra é que usamos a rede das operadoras sem autorização e elas num tão afim de deixar isso barato. Reconectar é basicamente isso a operadora derrubando seu Ip. Reconectar é um sorteio atrás de um ip que ainda não foi bloqueado.
  Não use em seu chip pessoal porque vai achar que a vida é flores e esquecer de colocar credito. Coloque credito mensalmente se for esse o caso.  Vai funcionar o mês todo? Sim e depende! Sim, enquanto aparecer aquela mensagem de rede da vivo quando está sem credito é o convite para entrar na rede, aquilo ali é a porta de entrada. O depende fica por conta do bloqueio total como aconteceu com outras operadoras ou manutenção na rede que acontece por região. 
  Use e abuse, não está roubando ninguém não é crime isso. Pega a visão imagine que você tem internet na sua casa e não quer pagar internet móvel pra que? Você já tem em casa aí você é meio ninja no computador e faz um TUNELAMENTO que manda internet da sua casa pro celular bingo. Ainda não é crime no brasil creio que outro país sim. 
  O uso de tunelamento está ligado ao perfil do freguês. Porque? Exige dele características peculiares como paciência e a persistência. Se não tem, não rouba onda vai colocar credito e viver sua vida feliz, aceite isso não foi feito pra todos.


Como fazer Atendimento ao cliente de internet.

 Pedir print do erro apresentado (pois pelo app ja se dedus)
 Indentificar revenda ou usuario.
 Certificar que login na rede esta aparecendo no cliente, mostrar imagem do mesmo.
 Testa login do mesmo no seu aparelho, revendas tem ter todos chips para poder vender com qualidade.
 Teste sendo positivo, grave um video testando seu acesso. 
 Modo avião até cair o dedo ensinie se for ou caso

Contra fato não há argumentos

Termos e Condições  para Usuário de  VPN .

- Você usa este tipo de app como "alternativa" para ter acesso a conteudos bloqueados na sua rede|internet, o serviço de internet funciona bem,porém é sujeito a vários problemas,como lentidão,quedas e etc,por ser um meio "barato" de conexão,esteja ciente disso ao usar!

- Não somos responsáveis pela rede na qual você acessa nosso serviço,qualquer problema no chip/rede/sinal/wi-fi não é de nossa responsabilidade

 - Problemas de conexão por bloqueio da rede,problemas de sinal e afins

- Você é responsável por manter sua rede no qual faz a conexão ativa

 - Você é responsável por manter seu app/arquivo atualizados para sempre ter melhor funcionamento

 - Reembolso por arrependimento de compra,somente após 1 …

 👨🏻‍💻digite a palavra *MENU* para voltar📌
`)
break 
     
     case "avohai":
conn.sendMessage(from, {document:{url:'https://app.minerdso.com.br/INTERNET/AVOHAI_NEW.apk'}, mimetype:'apk', fileName: 'AVOHAI_NEW.apk'})
break

case "apkmamute":
conn.sendMessage(from, {document:{url:'https://app.minerdso.com.br/INTERNET/mamute.apk'}, mimetype:'apk', fileName: 'mamute.apk'})
break

case "apkrocket":
conn.sendMessage(from, {document:{url:'https://app.minerdso.com.br/INTERNET/therocket_29_07.apk'}, mimetype:'apk', fileName: 'therocket_29_07.apk'})
break

case "apkcinetop":
conn.sendMessage(from, {document:{url:'https://app.minerdso.com.br/INTERNET/cinetop_29_07.apk'}, mimetype:'apk', fileName: 'cinetop_29_07.apk'})
break



case "pix":
reply("1 PIX minerd@minerdso.com.br\n\nObrigado desde já")
break 

case "nada ainda":
reply(`Houve uma queda no sistema. 

Estamos verificando. 
Aguarde por favor`)
break

case "110":
reply(`MATERIAL DE APOIO MINERD TV

CANAL COM TUTORIAIS
\nT.me/minerdtv\n

URL PARA XCIPTV\n
http://minerdnet.xyz:80

\nURL SMARTERS TV
http://minerdkatu.xyz\n

STB V3 
177.54.144.41
\n

PLAYSTORE IPTV
\n
Minerd player  (XCIPTV)
https://play.google.com/store/apps/details?id=com.customized.batmonn

CINETOP PLAY  (MODELO LXTREAM)
https://play.google.com/store/apps/details?id=com.itreanplay.nw
\n
EPG : http://epgpainel.ddns.net/epg.xml
\n
WEBPLAY
Http://w1.minerdso.com.br
\n 
http://wp4.me
\nPara Computador 
MEGA CUBO 👇
http://app.minerdso.com.br/TV/megacubo_setup.exe
\nSMARTERS PLAYER 👇
https://apk2.appsonwindows.com/4103001/91/
Vídeos
\nCOMO FAZER O CHATBOT 
https://youtu.be/xbaefsxcLnk
COMO USAR O PAINEL
\n
http://www.youtube.com/watch?v=DLXioII381s
\nCOMO USAR IPTV NO PC
https://youtu.be/Fqd81vF4zag
OTT
\n XCIPTV NO MINERD+
\nhttps://youtu.be/dg0JRNJO2PY
Xtream no Minerd+
https://youtu.be/bv-cWxrUywQ
\n 
SMARTERS PLAYER NO MINERD+
https://youtu.be/jVo5xaifpZI
\n 
✅Minerd 📺 aqui Ocê num fica sem ver 👀`)
break


case "aula":
reply(`*ERRO - ALTERE O PROTOCOLO DE APN + ERRO DE NAO APARECER CHAVE VPN QUANDO CONECTADO.*
https://youtu.be/4-f6Q2ExX4k\n
*COMO IDENTIFICO PORQUE NÃO CONECTA?
https://youtu.be/_C9L5Zwjbvs\n
*CONHECENDO OS APLICATIVOS*
https://youtu.be/DtYT2yxAf3Q\n
*COMO USAR PAINEL SSH COMPLETO*
https://www.youtube.com/watch?v=G_rPTNb3WnQ\n
*COMO TROCAR O HOST DO V2RAY*
https://youtu.be/9MH2ud7HV3w\n
*COMO FUNCIONA HTTP INJECTOR*
https://youtu.be/aedf2ITaHIc\n
*COMO SE RECONECTAR A  INTERNET EXEMPLO HTTP INEJCTOR*
https://youtu.be/-TtyoapnUy4\n
*APK NAO INSTALA PELO WHATSAPP*
https://www.youtube.com/shorts/B-PFfdYJ2EI\n`)
break

case "mamu":
reply(` ↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️
POR UMA MIXARIA R$ 15.00 POR MES, MANTENHO SEU SERVIDOR CONECTANDO NAS OPERADORAS DO MOMENTO.\n
✅O MODELO DO APP É CONECTA4G DO KIRITO.\n

🗣VANTAGENS
 🎯NÃO PRECISA CORRER ATRAS DE PAYLOADS
 🎯NÃO PRECISA COMPRAR CONTA DO GOOGLE 25$\n\n

🦣APP  MANUTE🐘
https://play.google.com/store/apps/details?id=com.mamut.vps.vpn\n
↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️↘️`)
break

case "servico":
reply(` 
🌍 *COMBO PARA REVENDA DE INTERNET* \n\n

🕹 VPS ( Capacidade de MAXIMA 🕹150  login)
🕹 App mod Conecta4g do kirito ou App Mamute na playstore com seu servidor
🕹 Painel Bot Telegram ou Web\n\n

Garantia da vps e de 31 dias, nesse período suporte a mesma. 
Não é curso que estou vendendo, favor não mexer no vps.\n\n

🗣 PAGA R$ 80.00 PARA LHE SER ENTREGUE CONFIGURADO E TESTADO. 

🗣 R$ 60.00 MENSAL PARA ATUALIZAÇÃO DE PAYLOADS E MANUTENÇÃO DO VPS

SUPORTE FEITO APENAS NO GRUPO!!!!!!!`)
break









case "comandosadm":
case "comandoadm":
reply(`╭───────────────
╎
┝  ⎙ Menu De Administradores
╎
╰──────────
╎
╎⩺ /Kick [@] (pra-remover) 
╎⩺ /Ban (responder-mensagem)
╎⩺ /Promover [@] (Ser-ADM)
╎⩺ /Rebaixar [@] (rebaixar-adm)
╎⩺ /Totag (menciona-algo)
╎⩺ /Grupo f/a
╎⩺ /Status
╎⩺ /Limpar (texto-invisível-gp)
╎⩺ /Atividades (DO-GRUPO)
╎⩺ /Linkgp
╎⩺ /Grupoinfo
╎⩺ /Hidetag (txt) (marcação)
╎⩺ /Marcar (marca tds do gp)
╎⩺ /Marcar2 (Marca-tds-Wa.me/)
╎⩺ /Anagrama 1 / 0
╎⩺ /Autofigu 1 / 0
╎⩺ /Antidocumento 1 / 0  
╎⩺ /Antipalavra 1 / 0
╎⩺ /Antiloc 1 / 0  
╎⩺ /Anticontato 1 / 0  
╎⩺ /Antilink 1 / 0
╎⩺ /Antilinkhard 1 / 0
╎⩺ /AntiCatalogo 1 / 0
╎⩺ /Antifake 1 / 0
╎⩺ /Bemvindo 1 / 0
╎⩺ /Antiimg 1 / 0
╎⩺ /Antiaudio 1 / 0
╎⩺ /Antivideo 1 / 0
╎⩺ /Fotogp (Marca)
╎⩺ /Descgp (TXT)
╎⩺ /Nomegp (Nome)
╎⩺ /Criartabela (ESCREVA-ALGO)
╎⩺ /Tabelagp
╎
╰─────────────╯`)
break
}
}

let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update '${__filename}'`)
	delete require.cache[file]
	require(file)
})