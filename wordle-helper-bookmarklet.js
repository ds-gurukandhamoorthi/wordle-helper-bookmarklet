cmd='cat /usr/share/dict/american-english';
cmd+="|awk 'length($0) == 5'";
lettersfeedback=document.getElementsByTagName('game-app')[0]["$keyboard"]['_letterEvaluations'];
alphs='abcdefghijklmnopqrstuvwxyz';
allowed=[...alphs].filter(c=>lettersfeedback[c]!='absent').join('');
cmd+=`|grep -v '[^${allowed}]'`
prompt('Copy paste in bash prompt',cmd);
