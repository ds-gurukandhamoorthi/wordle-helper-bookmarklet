cmd='cat /usr/share/dict/american-english';
cmd+="|awk 'length($0) == 5'";
lettersFeedback=document.getElementsByTagName('game-app')[0]["$keyboard"]['_letterEvaluations'];
alphs='abcdefghijklmnopqrstuvwxyz';
allowed=[...alphs].filter(c=>lettersFeedback[c]!='absent').join('');
cmd+=`|grep -v '[^${allowed}]'`
mustBePresent=[...alphs].filter(c=>lettersFeedback[c]=='present').map(c=>`/${c}/`).join(' && ');
if(mustBePresent.length > 0){
    cmd+=`|awk '${mustBePresent}'`
}
let positionalConstraints=[];
let forceCharAt=(ch, ind) => '/' + '.'.repeat(ind)+ch+'.'.repeat(5-ind-1) + '/';
for(let i=0; i<6; i++){
    feedback=document.getElementsByTagName('game-app')[0]['$board'].childNodes[i]._evaluation;
    letrs=document.getElementsByTagName('game-app')[0]['$board'].childNodes[i]._letters;
    for (let j=0; j<letrs.length; j++){
        if (feedback[j] == 'present'){
            positionalConstraints.push('!'+ forceCharAt(letrs.charAt(j), j)); //not at this place
        }else if(feedback[j] == 'correct'){
            positionalConstraints.push(forceCharAt(letrs.charAt(j), j)); //at this place
        }
    }
}
if(positionalConstraints.length > 0){
    cmd+=`|awk '${positionalConstraints.join(" && ")}'`;
}
prompt('Copy paste in bash prompt',cmd);
