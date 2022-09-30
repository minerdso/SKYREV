#!/bin/bash
ip_server3="168.138.151.165"
senha_server3="151741@"


    if sshpass -p "$senha_server3" ssh -o ConnectTimeout=2 -o StrictHostKeyChecking=no root@$ip_server3 echo "ok" 1>/dev/null 2>/dev/null; then
		sshpass -p "$senha_server3" ssh -o ConnectTimeout=2 -o StrictHostKeyChecking=no root@$ip_server3 << EOF2
menu << EOF
4

00
EOF
EOF2
exit
else
	echo -e "Erro Tente novamente Mais tarde!)"
	exit
fi