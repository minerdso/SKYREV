#!/usr/bash
ip_server3="168.138.151.165"
senha_server3="151741@"


    usuario=$(echo teste$(( RANDOM% + 250 )))
    senha=$((RANDOM% + 99999))
    limite='1'
    tempo='1'
    tuserdate=$(date '+%C%y/%m/%d' -d " +1 days")
    if sshpass -p "$senha_server3" ssh -o ConnectTimeout=2 -o StrictHostKeyChecking=no root@$ip_server3 echo "ok" 1>/dev/null 2>/dev/null; then
		sshpass -p "$senha_server3" ssh -o ConnectTimeout=2 -o StrictHostKeyChecking=no root@$ip_server3 << EOF
cat /root/usuarios.db
EOF
exit
else
	echo -e "Erro Tente novamente Mais tarde!)"
	exit
fi