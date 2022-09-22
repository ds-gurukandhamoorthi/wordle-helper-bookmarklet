let cmd='cat /usr/share/dict/american-english';
cmd+="|awk 'length($0) == 5'";
const alphs='abcdefghijklmnopqrstuvwxyz';
let disallowedKeys=document.querySelectorAll('[data-state="absent"][data-key]');
let disallowed=[...disallowedKeys].map(k=>k.getAttribute('data-key'));
let allowed=[...alphs].filter(c=>!disallowed.includes(c)).join('');
cmd+=`|grep -v '[^${allowed}]'`
let mustBePresentKeys=document.querySelectorAll('[data-state="present"][data-key],[data-state="correct"][data-key]');
let mustBePresent=[...mustBePresentKeys].map(k=>k.getAttribute('data-key')).map(c=>`/${c}/`).join(' && ');
if(mustBePresent.length > 0){
    cmd+=`|awk '${mustBePresent}'`
}
let positionalConstraints=[];
let forceCharAt=(ch, ind) => '/' + '.'.repeat(ind)+ch+'.'.repeat(5-ind-1) + '/';
const tiles=document.querySelectorAll('div[data-state]');
for(let i=0; i<6; i++){//rows: each attempt
    const WORD_LEN=5;
    for (let j=0; j<WORD_LEN; j++){//columns: each character
            let currTile = tiles[i*WORD_LEN + j];
            if (currTile.getAttribute('data-state') == 'present'){
                //present but must not be in this position (at this index)
                positionalConstraints.push('!'+ forceCharAt(currTile.textContent, j));
            }else if (currTile.getAttribute('data-state') == 'correct'){
                //must be present at this index
                positionalConstraints.push(forceCharAt(currTile.textContent, j));
            }
    }
}
if(positionalConstraints.length > 0){
    cmd+=`|awk '${positionalConstraints.join(" && ")}'`;
}
prompt('Copy paste in bash prompt',cmd);
