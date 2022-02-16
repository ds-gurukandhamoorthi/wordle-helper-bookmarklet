cmd='cat /usr/share/dict/american-english';
cmd+="|awk 'length($0) == 5'";
prompt('Copy past in bash prompt',cmd);
