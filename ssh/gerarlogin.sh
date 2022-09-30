#!/usr/bash
ip_server3="168.138.151.165"
senha_server3="151741@"



    usuario=$(echo teste$(( RANDOM% + 250 )))
    senha=$((RANDOM% + 99999))
    limite='1'
    tempo='31'
    tuserdate=$(date "+%Y-%m-%d" -d "+31 days")
    tuserdate2=$(date "+%d-%m-%Y" -d "+31 days")
		sshpass -p "$senha_server3" ssh -o ConnectTimeout=2 -o StrictHostKeyChecking=no root@$ip_server3 << EOF
		useradd -M -N -s /bin/false $usuario -e $tuserdate > /dev/null 2>&1
    (echo "$senha";echo "$senha") | passwd $usuario > /dev/null 2>&1
    echo "$senha" > /etc/SSHPlus/senha/$usuario
    echo "$usuario $limite" >> /root/usuarios.db
    echo "#!/bin/bash
pkill -f "$usuario"
userdel --force $usuario
grep -v ^$usuario[[:space:]] /root/usuarios.db > /tmp/ph ; cat /tmp/ph > /root/usuarios.db
rm /etc/SSHPlus/senha/$usuario > /dev/null 2>&1
rm -rf /etc/SSHPlus/userteste/$usuario.sh" > /etc/SSHPlus/userteste/$usuario.sh
chmod +x /etc/SSHPlus/userteste/$usuario.sh
at -f /etc/SSHPlus/userteste/$usuario.sh now + $tempo day > /dev/null 2>&1
chage -E $tuserdate $usuario
EOF
    echo -e "✅ Criado com sucesso ✅\n\nUSUARIO: $usuario\nLIMITE: $limite\nSENHA: $senha\n\n⏳ Expira em: $tuserdate2"
exit
