cmd='cat /usr/share/dict/american-english';
cmd+="|awk 'length($0) == 5'";
lettersFeedback=document.getElementsByTagName('game-app')[0]["$keyboard"]['_letterEvaluations'];
alphs='abcdefghijklmnopqrstuvwxyz';
allowed=[...alphs].filter(c=>lettersFeedback[c]!='absent').join('');
cmd+=`|grep -v '[^${allowed}]'`
mustBePresent=[...alphs].filter(c=>lettersFeedback[c]=='present').map(c=>`/${c}/`).join(' && ');
cmd+=`|awk '${mustBePresent}'`
prompt('Copy paste in bash prompt',cmd);
