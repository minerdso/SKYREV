case 'sshgratis':
   exec('bash ssh/gerarssh.sh', (err, stdout) => {
					if (stdout) reply(`✅ CRIADO COM SUCESSO ✅\n\nIP${stdout.split('IP')[2]}`)
				    })
        break      
          case 'sshlogin':
   exec('bash ssh/gerarlogin.sh', (err, stdout) => {
					if (stdout) reply(`✅ CRIADO COM SUCESSO ✅\n\nIP${stdout.split('IP')[2]}`)
				    })
        break      
        case 'sshlista':
        case 'sshlist':
   exec('bash ssh/sshlist.sh', (err, stdout) => {
					if (stdout)return reply(`Lista de usuarios:\n${stdout.split('to it.\n\n')[1]}\n\nTotal: ${`${stdout.split('to it.\n\n')[1]}`.trim().split('\n').length} usuários`.replace(new RegExp(".sh", "gi"), ''))
					reply('erro ao consultar lista')
				    })
        break      
        case 'sshlimit':
        exec('bash ssh/sshlimit.sh', (err, stdout) => {
					if (stdout)return reply(`LIMIT DE USERS:\n${stdout.split('to it.\n\n')[1]}\n\nTotal: ${`${stdout.split('to it.\n\n')[1]}`.trim().split('\n').length} usuários`.replace(new RegExp(" 1", "gi"), ' : 1 aparelho'))
					reply('erro ao consultar lista')
				    })

        break

case 'renovarssh':
uss = args[0]
if(!uss)return reply(`Informe o usuário\nFormato correto: ${prefix+command} usuario`)
exec(`bash ssh/alterardata.sh ${uss}`, (err, stdout) => {
					if (err){			
reply('Informe um usuário correto')
					 }else if(stdout){
					reply(`✅ RENOVADO COM SUCESSO ✅
USUÁRIO: ${uss}
DIAS: 31 DIAS`)
}else{
reply('Erroo')
}
				    })
break

case 'menussh':
conn.sendBT(from, `SKYNERD MANAGER - GERENCIAMEDOR DE SSH Olá seja muito bem vindo sou Skynerd e vou atender você agora. Leia os termos nos links abaixo antes de comprar e esteja ciente dos mesmo\n
Termo de compra* - https://paste.anasor.com/paste.php?raw&id=18756\n*termo de uso* - https://paste.anasor.com/paste.php?raw&id=18755\nAgora click no botão desejado.\n\n*NÃO MANDE ÁUDIO, DIGITE OK*?`, 
"",[
{index: 1, urlButton: {displayText: 'CANAL TELEGRAM', url: 'https://t.me/batmonn'}},
{index: 2, quickReplyButton: {displayText: 'LOGIN SSH 31 DIAS', id: `${prefix}sshlogin`}},    
{index: 3, quickReplyButton: {displayText: 'TESTE SSH GRATIS', id:`${prefix}sshgratis`}},
{index: 2, quickReplyButton: {displayText: 'LISTAR USUÁRIOS', id: `${prefix}sshlist`}}
], selo)
break