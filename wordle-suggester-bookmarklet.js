// https://stackoverflow.com/questions/4570333/string-compression-in-javascript
// function en(c){var x='charCodeAt',b,e={},f=c.split(""),d=[],a=f[0],g=256;for(b=1;b<f.length;b++)c=f[b],null!=e[a+c]?a+=c:(d.push(1<a.length?e[a]:a[x](0)),e[a+c]=g,g++,a=c);d.push(1<a.length?e[a]:a[x](0));for(b=0;b<d.length;b++)d[b]=String.fromCharCode(d[b]);return d.join("")};
function de(b){var a,e={},d=b.split(""),c=f=d[0],g=[c],h=o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join("")};
const words=de("aboutadapĄdoĈąoreąulĄfteragainęenĄgďĐhĐĆlarmalbuīliğĬikĐıvķlowĬonķphaĬĖĘmusĐnĢyannoŎpplŎĪeĆudioavoidbacĿŤdgeŤŪĭaĶţůėŤŊűsicbĐrţegĜźĜgźrrybiblūĵųƂoƈrthƈtcƔĨckƊąūĨmƞastƊeřƥnţıƩƊissƊoƚƱoƪļnāĩţŞƣāoƽooƓāwlưoxųĘŢbǋƸĘƬďąǍƦţrĲfǍƂǍŞǖoĶǍŉƔrăūśdƇuilţǪēĮnƗǰnǩyėcĀĜǸdǨǸƩyǸrgƲaƖhƗěǱŃirȈƒƗĐpȐǷĥƯȐƣȐwȀhŸkƗǘȟmȒȜĝƗšȍŢǷivŸcĨsȇȯȒƋĩȮimbȮƲȞĻŀȺŊȺƓŦƢƖȻȀĎĬŦugȇĂǬɊȏoĹȍĘƚcĘĕɗaǅɚzeɗƦȒǗsɢƿsɗuelɨȰcupŢcȀƋĆǫyɵsɷŏcřĩtsdĐƓʁǸɷɪĉeȬǬȌtɷƮŦŜɓĊlŖĊubtdɘʙǎʚaīʞwƩǒmʚeƯʚiĕʩʔʚǁǬǤgʀǤmʳunkdįmɷŉʍǨƂŻƓeiɌĖǬėeīǫˊĈǶŀʼğņėrĎʧsaǶĹĠexťĖxɼƋxƮˠtɘťřfěƓ˫ĒtfĐƣfĲǬ˴ĕy˴ˆ˴ĝl˴ǉdfȯĥƂ̂ǁr̂uf̌luĶ̊Ȱ̊ĖfĎɼ̕ʷ́ǐkfĘś̝ʧ̄˕Ġ̝ƷfĒŖ̧Ʃs̪ǴŪĪsɌƿtgĨď̵Ƣ̱Ĩɞ̵ƐžĻƆ̽ƯȃƵ̱ǁfyĢćžĘł͊̓ĘĹ͊v͉ǒ̴˕͐ĂpĢļlguƺ͟˗͢ƣ͟ȩgypɹŃƕŃǿŃŔyŃʷƓaɞlĥąȰ˂͹͔ĥũeĥʔoĥǱ΁ųȰȌřȜȆȜĹȰƐbͲĿeΓrǴhǂɪΙŉ΁įĎhuƅͲŉkyŸƂĜʁˤŐėĜpăiȆyjewɪjǟėjśŪμŸeοɲμȢykĩīkőƚϊƷĨźʔĩŭaɋhȴĹɴŭʉɪıƠsϝβƫkϟȫřĸėĻbΒĻſȺǟϟǁŊĻŊrĻɓ̎ĝϵʷƗŖƂī˴ʟęŸωėīȍhīȆīyĎƠŏsЎĠƠŜʟǷyƠǗtИƆƠĄlmˌА˥ЗìРǉĪƵɪmšƣЬŀЗϱˊĂВĂŊЬăЈɒĲňŷcĝŐyŀřsn˅htőƮğĎƓőȆяřnνğ΢ŊƲɮ˕̌ėoĕьˌʓϥĿŝőrƕĎĚőϻeɒĩЌʢėpȉɤŏŸѲĠѴpѱɾͩɄćɄeѲȆ҂ŝѲΝѺ˩҈ϵѺОłƢҁΙŀɰɟҁ˅ͨɰĻtɰѺrɰǉlŕ҉ĨίĨҒҥҚ̎ȢpšĠҫĶҝo̶ҫηҝ̛pǗƚҷȩҺƠҷΔҾѝҾśΰǆҁϻhΰҘӉpͩіeqɩğӐƦrӓƣӐΚĘŜɈĜyǐ̯ćŢĘtŝǒƗďĨӞhЗήˆǗvĬ˕Ʉ˕oʵ˕Ѻs˕ϕ˕wǨ˘ĨdӿĿ˘uɼ˘ĹԁǸƋɧĩʧȁyɧǁͪŦďɧďwԖʗŊnŊȰŲԞϞŃԕԢͪŃΏĥҁͻeɿ΂fͻʔΉŀΉƒΐƚΐăŷʁƯчɿǫŖŷɞԁkԾsՃԴƙϣҥʲҧϟƦՉɡϤԺІɿīȰАϜТԋЬĶхťϣĝǫхļԐұĩsұŢէΣէйѴԕѲrϣ҈ղǕɤ՘Ѻ̫ոɿҜʵɰԆվԐɰ՜ҘǆɰԲҮʧҫԃҫԴҷ˙ƣԟОϣОǆĄ̫ĄԴĄՖĄĖƣĐ֓ԩ֞ΗƣՄtȻƣ˖̰֦֨Ɔ֨Ώ˧֏˧iͪtśԐֵ̌ƣʷʲʍԋɋզǪ֝ɯės΢Ūsηզηԫ׈ʪɿwȌǆw֩Ӟɯ֚ĖחyĖҏĖǼךƦԜĖԫшğŊ˃ďƓȝשeĕȤgשʸƓĿׯΙΗײצhģƓįʘԼӤͪךΊdӤtƋ֦ĆךΔ؃ǁƓ֬Ɨ֬է֦ԅшļʇؕƒɕԫǋēǎְȢְȰ˧ʂֲƚֲř˧Ԓبă˧ĒךǤƣج؍Ēֳֵmʼֵŀ؃אɼtאԜϻƋɯҜŉĞŉ͠lӰıdىɩ˛ٍȩлҜȬĘوȄٕ͢ŠπŠРtŠηdĽׇĽņĽ̀׉ƆٟŪwŃƋ٫ʂٮɪٮԗȜƗאȆٶʍדīnדձ׈Ď٨эhד̙wɣʍ˲ʍдͨĂƓɞǍť͹ɿĨĹĀэďѲӞɟćŤȂṛ̌ƦƋcКӇׅΉٻiƢц̌אҜηȊ֨ȢĀΝȅ̃׬ʍѷĆǚźɠȘʗŸɣΦՅĲ֤ГƥҁƗʷ̜ѨƞŞʍ˵dŦϞĨt֝Ńĕ̝ěĭҥk̸ʣʧ׌ogͨŜŀģǗ΁ͩќźŊӐǫ؅˲hТձȫĎЗŏԿχ֝ҩ͛ĻӵƓԗѷɪѴʸȺĹŎ؏ėז͜Џ֬ʹɪ˙ΙѺdГĬуӾ܊İ֘ƭtzљƆ٠ϜρɟĖĠƆ̕ƒhŪn̷ǗʔͽʧכʵӤʸʂėɛˬƊ̋fΙƺϞɹнӫۮ԰ҙ۲Şӌƣ͍ɯצվΦӦɿɊԽxƓբƒǢųğƗȐƚӺĖǄ΋şğȩĬІȰҡ֝iɞɹĂr˘āĹɚĖȷĞ֐Ĝܥ؍ĂɌŤ֦ǱӵԫĊ̆˔ӪĜĎʪƋĮ΀ĮݭƖӎΰȰךĬܱȜˆΔrؾĶ̌ƯтƐƋոƮҜƗҡʸď˱ދĞāعǾo׬Ň۫Ĝ˕āݐğζŢļ˴ďdՃەѽɼdŕԅkďЧԑǬϐļƭʸĮυќʁιʔͩ˕xyӐ՞ŷݓԐϝܱԍηȌ٠ΙɀıɖӵЃŏȃѲݶϴΏߡϣߔەȷė͒ŏڐŠȈĠc˅ƺβƗΡȊƫğӚĩz؊Ȉl̜ХϨǫťňםҷ˗ΰ̌ߓǪձ׉ĹچȅƔąŖݻݚ͑ɽՁРɗӵǧ۪޻׍ѺȬ۬ٽŊ̇ƚŪeΦĢįŕгnЬƵтěĹֈʚĒׄȉ׏ĎnӰ͢ϐʕǒʁ΀ũѳֆƗ֤Ō˃ĕťǥ̧΀ΜƩЬˇɰzzܸԈŏkڢĻʢ̇ȩ̏ΣƀǈεЏƼޟްʧƫּΔӤРߞƮƛĒΦܶnŖҸҜݎɆ֨ͅؾgٞܐȃǴć̣ȺůɚȢĢǕ׵Ŋ֌ࡍϛԜԢϣ׵ܱڡʷβɟĘz͉ϔ̼ǮײߏۦǨҺѸɚͪۮ؋ĶټěƣچΚܸďǔࢌĘȰ͊ĜőϘҫ̙Ԟ԰ѲА݉ɛĄƥĄࢯ߷ʊĝŰĎʁݭѲʢ׈ψֵ֬א޸ࢵ́ϳƯѣڣɕkؽ˥ŴԎĩƆɠ࠯޷ͥҬۣвĝƣޛƮ۪ڑҞۄ̾ދ࠲ְִ΢Ԝ١ŧҸȞϔɀۨࣛЕ̊Ţ̕ࠅ֐ŌдӤl٣ȈƮއɦȀĀɴکƆ࣯ӱ΢ĬՅ̨Аߕη԰ηČܔβࣦ߇ࠝȈƿɰŏoۮԶ࠙ԐŀůכࠄėƖЕˈŅʁĈĥɓ˹ԋ̄u࡛͕ǁmԢȰŀɓژŖࣉसȜż֦ˤŹĿŉȦĶȮěʥoɞƩĽ̉ī࠳ۮۻπ࢜ĿٽǬɛ̧ı̣yȴࢲҀƢȕʩܵęƋεߏȴۂĄƚʖ̲ɼŏࡳܱċŸٓŉ٫ˌƮׅɪƵŪłǂлОѿƒԍȥǗƠࠡʢҺݪȩ؃ďƩֲĬڐȖȜͪҺڀࢱ܊ࣰ֦ɄȟʔɚуࢹҁċӌҺɼӨaxӯׄ࣍ɟȯϰŎēࣞƾɞ˱ɓЯƓۮ׌Ļܓ়۔ѱߺ׹дԁŃԺʷǴٿ॒Ӛ঍Ԋ׋ԉıԓ΢Ĺ̇ͅŅƇĘĶ࢏ğۦΏİǆ৔Ѵؼ঺řࢳŌźڑԞӸȜĕƜ৆ěƆȴΗچׁ̝࢝ࠪО׳ܺՖ׵ƤƢƮƴmȺśğι͕ƝȋƆȬȬũ϶Ξٻո৙ޑ̬࠿Рˆ˟ɈŌɪ˕ূ˫Ǳ͕ǘӏه̎ƚ˹ǒȞȜɏȴࡻԼΐǂć࠳˫ӅȟҰࠂŀϻăɰŠɿζसΟȍұĿНϨȅ˝ɤڍ̪ſРۦࠝѓnzֳঁзڑɈߏצɯǶĩ࣯ȩਜ਼ŉӣђĲ৳ݶҙʾ৓b˫ү˴ēܪƵŖȥߟǫۂĝͪŤnιн࠰ي΁ƍϵޕݪʍƾʍȮڷʁƕ̝Ĳ޾Ǥ࣐޳wĚɋ׬ԫࡍЎǤǗŀউદɒğʄŒѴકӼŌŢǨ͜࠺ɽŖaΙѝȯࡠ࠲ԐȅĜאʁ˽˅ǱৣȀα࠯ऴdƙђ९ĿؙǤ؜ࡒϵॆѺjʪ͈˕ʁƿĜʾǋەǤʸՃʸӬȽȰԗુȷȯϨĐ͈ގɹ૦ɋ˫ƥ߾৕޸sߔট࠲ד࠷ȦżʁЯਜ਼Ԇϔĝ١řȮ࠲͜ʢѓ޻ࢉǫʷ˴ړҁɿұĹŴǫܺʧਮǴ̂Ʀ˰̥߫ƣֆΦΰ޻ǐࡍɮŤĴƢĮߏ̵ɩ޾ĂࡍΙΏɰ֝Ą؟ǗڼЕƿझڪԒǚʄدʙŏޘэਗসۢɩ੗ۯĥʌࡇƁ࠮Ʃř͊Ġߔǫࢶɪ΢અউҋѠϒɩǚՅר͘Ԋɢ׼ұ࣐࣢ϵӰ֌ʟƄߥއęۤݩࢠ˫О୔dŃ֞Ь̣Ԍ̉Ľ՜Ёɞɪ࢝ʉκ̂ŲŢŝҚૠףˊζɎ٠ŅzچɟȞચ׬୴˹ۢͨʠʟ॓ΪƆė˫Šƅ˅ǌž̙਀Ƈډɗͩ؅ȅϼ̪ؗΦцĠhߔ՜̃֞झӤƚ̹ԫݟĭؙȶ̌Ćמ˘ޚā̙ʩřτāňضȀӼǼढ़୓થॵŊߜɌૻԉ୺žکĠſ˛ԞƚીǃԋԞࣰīιƆʻɇضȧ΢Ўڊקԇ͔նɾ˕ʔ˱ΆƋɓ֐ֵֹॾĿ࣏યɪݟȬࣟĦ९˲ѬҜାژɣܳ֏ŷΆܺ߶ʤʠԿؾ͌ʹ୼झ׋ͪ׉ɅʹɃƗȬŷரǶrιݶϊʪŋ̯઩ƒ܀ļĽਵ٫ұǦࣰੂԝୄַĩkؾɼā૶Ι࣓ؒآૃǚʸ˴પਜ਼ԎΡƚݾĚѺǾࠡůફݭԊħĂରձЌĈŸɤģǹ૿ބĘſŌЋź୙࣐Ͷ੥͇ȡɟΙȢଖסκ࢜ʍȬեȎmƋĚɫɽ੐నӴϣঋސߏĖȢǂघć̎Ֆল಍Ĉƥů̵Đैవҡ࡜А֧ϹأѶɄɷ˕Ĺף౥ݡŘŜcѷɹದė͊ݲ̽ӵեӺӮŢׇȤ˹׎̄Ďʻजēʷėʁ॓gőƠ͊फ़ݡɫࡁӬبΰڞؽ֟ణ˘ǼƧࡰǜӵ̅ƒ̝భŷঠ̇ʢ͏ҎЊȷѶСȬǉϹыޙ΋Э؅Зłٿॖګy఻ď૽࢞࡟Ģ߯ࡘ֦ߔПࢁĨʔΕ˃ŊƜƩ̂భІƆԃԫҫϴԑԲૻΰ୒Ѧ̎ƒͦǬǴȢ۲ŦҌ՞ŗƿū୉ƯഖkىକĘǅ۾ӌиƩӸݎɋΒŦڐʟ׳ϝā੗ď˛ӵউĖग़ȢĐ̯jͶࢠǂņԞǨુŊŻԿ֊ഩƵχઓپעż঎΁੕ݭϹ֕૗ೈͺ֦فە߰ϔēхֳ̡ͼ࡟אɤͩұχԪޖɡʎſଞԍґĎϟǢ֞ҁ˝Ѻǆ৐ൻҝجி஀౶ՎΡࡴૠǴ׻ȢǾĬŜಁƇˁګʍɤıదƗϊ՞ҡŢӓܧƲŉƈɼ֎ѸբйതʦΝىԫאυઑƣӫН࢜Źɋͨ͜ĜиΗ˱Ƚ࠳ąΰඤԑǂǸŪd।֨Ōưăӧ౨ȶŌ਴ŢզĿĆԣşƲՕ੒ЪʵસՏԫ֦ОܺѦࣨʁوʧ͟௒нڸĞؘ˟દશſڢƝʙǦ˰ȅʍɛஇƮӫҾͪ௣ׄ֊˱ި્౬অį֐އɪȐˤಂבΧܦŞέxĒୈʋ̿ێĸඟuਿǒПȃڞ׮гఁɼѸĄȌ೽Ѻǧܷ˕īƵ૊Ԑࡸʎەļ࣏ސżǶ্঴ыǗֺ࣐Ġపחةଃࡳŕ೷฻ϰԘࡎɿرǜƓҫଥ൚bԢǽߟˊԅŉИŪ୼ҎȢƋদ഑Ľ๝൉ѝہߔച׺ڨଇਪɧܻ๟९ʾ؁Ӡ΃્ǅןѮĝىࡴƣȬ෱٫՞˫ࡈнଆŃࢎԀܐrӰஈʌċͶపĎĻŉց۔ୣͲΪΥۊȟĹٻൺϔɲŊݩԫ୚వׇٜ۲ѓ̌ҫ৹׹ԚଯެȻಷř঴آಃఁг֬߼ϣെࡈࡰƿĿɾѠȈͪˉڣԞഭƟʟઁӞӵѵӛʵ͠କĒŪʊϏǢुۊઞĠƋ౶੠ͱιʾεౢতܪՄԑɜĩұȁݰϜƲΔՅ˙ůՃƿղʯ೓ுࣼ෶Г߾Ѧ໧n̥ɞҾɜӵāຸฏޥʞʸԑ΢Ӥħ఻ċɗĲȂΜ͸˄݉ы࢖९ߐವӫĳцȐژɪ͟ɿ༙ࠕৼfਜ਼෸ıƈͪݤѲѩʺΆ࠱ਫ஄ȁĘ˹˩tkś̳ध࠵භ൯ı଼ۣخک́Şʼ೚ًәy߀ԐԔǱ༟ǸӸԞΦۉΗږʁೇĩຐņӴ฾ӤĐśβെڹċΕාȞ೛௓଒Ūౕʡڔۚ˱֒Ń޺͋ຈ˅ޅԜഐƦɓŞӧؕԁ఼੗Ʋ۲wֻඇ๸सĜ଒उŖϊʇӴʼ̠اږċ΢ଝьٔĚ۠ƠƩƂ९ږ̉ƫКྃćґyŠؓ๾̉ĀԐԌȐЬҴ͹ִߥઽ෦̈́Ε̥ƓۜցઘྎɪஶെԞʸྜԁ˱ňϵɻ։஖՗ēَϟт࢔ř༶םĚИϬƿ়ʙǫĊՅ۪ɤۯЕƩଇƚӫʮޱǲಈčΗқ೘ȷĈఞĊם౐Ɔ഑ϴ฻ƑȟϟʟʞৎԒvĒࡃʛʷٟ൨ʁץɩďĜϰ˸࢒کťࡁŦ̀අڛŵߥͥ੕dőത࿇ΦƈȸƿǾ༸ΕřҜǫǺ༊য়Ċག΅๸ӝ͸෌ڃ෬č߆ࠗעǴāϪѽĠඔէਪцಚঋ౯͈ψѨݝݻȕңĠΚ౒ƒЬޚμૣ̊Ōى˖ҏ͸ļǨǗո̧ݼગ௽ŒϨ΢ࡍՃǷුѝэ˲Ķw๪kkŞƟӵʼȃߏǈȩെఠęīࣰ͟ʄ௲˝सϤ༈ŖŖŦĹ෴ԅԫฏ̸ໂ޿ঙඊpЬܓࠡƚ˼ಱʌ۲Ĳׇעԉѝ༦ěɞȈАԕݶɛ့˕աϝकőŌʟīԢˊ˴Ώި૫˸޳Љ঺ޟɹଲנЬǬԐၿًჀīuɓཷȍϸgԔ༫ĠٚƝīࠡőŊཌྷŇʺυ஼ʞ൮ȅΔňēȌĀƈĽ༆ųɷĎΦ˴Ƅֆřʁޥຆʣ༐ŀ͜ƈȃੌɓ΂Х̕ԊʴĎஈʸĚޚ͟੦౉ͲӬਫ਼඙۾࢈̕ǂފʕƏƱĶΡ္̈́ˀࡻԫ͟ͱҌ৑ѓpဪஞʹԀෲك໽ັࡂၠȸ˪ǺhۥΦӓ୊ՃȢકɋ༏Ȣ௑ͪďૠĊଋцͱৡිऽ֘༢࠶ࠜć֐˕ԬǢ೽ɿӺൎᄦޖ਷ญ࣢ɪ౟ܷۘ͞ݩ၎෗ڞѸ୮ޝνಋĿŀчϫɛȁȅĊچकņƾΒŤβưബnѲɴɲ༝͟şůƵಘϔǨРϴྯཥ֪෷ߐႥӼண̀ćκ೷ǁࢠܐĖ೽ط׋ࡻ͋ǬჄԫཱŉગ࡛ϰȰ౎ມĊޖಪၻൢžͨ߷ȍaਲֳѺĿδȷʼǾ৙ѝઐۢΕಬആܱѽձńϪΕ່őŏʊŜܝ͉඙z္ֵႍbҾ௚Ѝޛŵׅ૓য়޼ணڛՌךĽŌҺ;࡟؁ਪŤП೷಻ɊѺ٬Ϙǹᆇăœೱ˘ᄻɯŉ֤ēထŸஈཔįƂǤ̌ȃટڙಱǤbΉޚउŸĄ׃ࡘʪၻ༛ȥК႗֨Ÿȴा఍Ќ෥ɮޏĜөഽϜ෬ۉĖ඿ଷๅЉݲࣞஈҹĳɫՊऋ̜ȵઠૃპܥβӴăĊܷ̅zྖƄડ˖ۑʗവࢹ໥ணǗĩľŃΡޚహၮǸࠥĬŖ˝ਔΡࠐӌgʼדૣīˤʥ˄ʍĚƥɤ༊ຐŵेӹᆳক္ĐΏຊǆ๓˘ٟ̙ӑƾ̜ڢk҂ֽβȕǸȢ׍ȰϻćǸڣޟɟƯ჈ݻʿਁyШǈĚɞ࣑Ίʷֆࡅ૬˿Ҿ්ظँܓę͋ნઢ࢝ިȃ˝Ņaэѿǆ˹መ݉į௼˝ٻ̡ԾࠑϜ࿰ࣔʸᅱ෧ޕĀ੕ࢻሥڍͦԝւƇȽ́ଃസຑ֦ǂӹుࠡĿΙሓĮಙլӌڒӈȵ۲߼̴ɛࡹƩļěԺ߂ᅭ॑˄ྜྷʧ୮ષќʸ༝k࿥Ęμ˕ᆟعňਵ೓ҝ৸ޘˌĪߥĳͱĔ͈ᇁቘ਻ᇻ۱ĳਦŞѦɈĽ࿂ၻʮʔƕसҕ௕ढ़۪Άસൌᅭ൯ΗoεсΐऴȂĿȴࠜ֟Ьᄀʺ࿝೅ܷು઻ܝąਜ਼Ĝŏ࠯઱ļኃŦ༘ᅼɹᇹ૾঎ƇҀʺਵԌႄۜပԜखҁޑżɪΏĲ଴Ǘȃዱ෨ā࠼઱৩܊מၽ͞ლ੐Ⴌֲ඀ϥƸጐףྟնȊ͡ྡྷɰቐդǂϖ๖ƅ׼Ʉᆫ೹΢ශʧढԠ̹ŀณʀжūɛǨၮǟбߏΒĽɇ˛ףƿীຌמගĹύጆຽैě༹ıࢯΙĶͩŝŉᅦӾ̨࠸Оܡ፵̽ઝೌగŪࡔҗĒ቏࣯кൺғ෫༢ႳΖફȊǸ֞਄౭ťɛસࡍĀ૫ޠۗিʂǠख௓ਏቐڑĜŰʪळ߀ܡǯဘ੺ݿšࠚݹh྾ƻጋļƂׅǛሿഘԍᅦǴঠĬąĲɩҫƗܫŉĻߏߔŷœӌใтࢼț௲ྐྵΠĿΦχࠂ˖ଐǡచȝഋΒէǂΓ፹ଷሾ֏˱ԆŢƋᆦᄑ຾টԾֲˇƉΛǂႃ׳ƯĀרׄಚݬī௱ශঋߔwֆᄊඑ͉Ǯ޴ڰ೑ĠאʔΨᏍགܨߦታ۪ͱɓĹఋ߹সąĞඞؽ΂Ĉၨ୬թ࿐hȬبٻͨ׍ϑŴкĒઙנࣁĐ༏૊Ӕ؁ƈᎲŪߘċɧਹi໠٨࠹࢞ҿྖࢹŦҨƢȢiӓేԲၤԁ੍ĆȬ܍ݡಟۂֆ໖НĽညᎌk௑ā੠ɫƘʂŦީिȀᄨЉΕ૖৖గζᇹே௖ݭ୍ƛપțȩ̙ŢˋԜε޻࢕ᏽഞग़࠭͋ͻƒɞק͔ǛƢझདઠضҁঘࢱ؆۔ĥχତቻኞኳிĚכŐĒቸౕˈܬડ۲آᄛ׬ۢਆ౸ᅟಥžಟ௱ሁ΄ࣦӍ΀༵ĿĄࣃ࿕ΕƄƓƠ໚݉ζبକ۠ԬȌ߁βࢠĮxӵ౷ആ຾ƋࡘǦᆹᐚāయȘЪؘဈၺĝʷࣕɈƔங؅ජ፳፮ߔ๒įᆗǫᆮѨဦņਗ਼ӌૻશpऴࠡɯདăങŢֆݼޜኄьᅰऄնē˧ַԔΦৡዌ઩ၗѝݮ׵ࢶثȤɡǈŗᆞే঺ŤЌǪᄦཅࠅѽᅱטŇዟཛྷ଍ቶ٣ӫԅǸƕ඗঵᎑Ĩfˢūܨ໯цҽϸ߁௯āſρᏂӹ൩ƒނӌȽŪֵᄛᆩδɛဤಪĽ࣐ਂʆ၎ఀƦັİ˙ɯ๦ࠆߏȁם፥࿱ቲᄁࡁřሂʷצܚΓИȟѥ׃žۚकࡸࣃ੧ƄĚћઅণƦƗ௳Ƥϛო˃ź޻ྜ˘ንକǫŪ੠ŌŎˤľ੯৸uˡڍhΡᔹაɺ੦ۮĮᇏpچֻ˱ݶҫŖᔏ߰ᔵᑛლמ׼ѱ֟९ల̉௭૊˩φಊԙmجƯഽɩ၎ആťβˇྍቀɿȅӞჟ൉சગܝᆐ஛࠷඘˙੺ޡąᔫ͞ळ،љၥΫኋžҌβЬħӷೄŝԺऎ࢚ࢼ୲ԐĶᄕࢢןŀջ˵źᕟݶėܒӌι᎐ʼƅۗၕł੬ė༶࣐౎೷ѼɧѤƢүŢ९ϙܷ޷ັம׿ӌࠝ؜ƍϩاҸƦณē቙ᏼܽĭᖆƤܻԐጂ႘֘ʑਿያ༹࿿ᕊ΢Ɉˤӵ߁ϔƖњ൤ѺĐĮ࡛࣐ၺʟԸ͹຀୩ǝخ˗۬ǂࠖƚࡴŪᏧĥx҂רę֌˪ɋɩѵŊĶ؟ᐚʼǈǄ̈́ᘥж؅႙ᒬŸཋոǼኪֵഅљŝԊڕൢုഞՃמ߂ćχးٮПĆൊɮʔЎࠚ૪٥ĳࣤŜޏۙǱᘑࣁ࣐கذᗵʺߏ܂ԁᓭŜڞݟȂ̎Εྃʤβඔҫ༯НԤᘗޏɒ࠽ܴଛȅէትӌଘݭᐆڡ˼ƈፏᏯඔໞȺᕁѳ֦īvྐᓣ԰ؗڽƯȜັ࢏෴ૃְ๵κˈᏄȜ࣐ǒĪȓ႐ߥńֆʲȅ˙μޝĊҜӚ૎ǁ࠰ᅟƢтݔśɹϔˆŻɽή૬Ɏᇽɴļኹ૗֭̀҂ጿΣңż೹׳Ѕཪሱϥϵ߯ຕᄶউۅ඀ྎ݄ԒȷĮ۠ǗfѓŜѬǅථ୓Ŏőʄ዇࣡אݓేЃɈߘۊႏ൯ࡕ఼ౣྊۻኳǿໞƋྒݖᇞჩᆉޫᆦ᎐ွǴҩğڐՁᛰ؆Ɨٻઃզᕼv;ᖽȹ໧Ũᑑǥ᜜ԫईᆳǩϪޑపڐǫᄉʍ֜ᝣྊ෇̌͠ϐ˙ᅦၥԈڝѱᓿᛁԫ቉ᄊࡢཋnদ਻߮ࡈĜۙĮ൤߷ıĞЪŊ͢ಱᙘષे֩࿗ټ॑Щᆫ̹໯ΙǬՕԝᓔȇᗧ঴ΆѲͱ՝ᇴᕆᓏഠ࿶সΡ૓̕˥ଏХ౦ᚸฦܔe࡛ƼņͿͨᛶėࣘ߰ሤۃᝩഥᛤዂĶĜϘΟڣᆕ̣ᚢψڛżᇹᝣĥ֖ᆁۮெȫ߲ᗂ௑ɹٙ٭׵Ϗᐇȃޥମಱᖹш൛ేׄݷ̘చ࠲ϴᙜ͠ᛯ੟ƿăɕᎢۚکcٜ൥ʹǚϑϑʆƮm೽֞ഗᗵښ๏ᒲѲɪž᏿ΕģǨˊɼѬӰ̔႗ᇞ˘ЬˤנѓiܽМ൛˫ჳ˫ᘓ֨ற਀࠵ݡ਼үΉ౓ܻ͘Ⴄᔹ༪řዿັݓұאགᓔȌЌᔹᝢƯģ̂౗सᅅhદɹᑄវ˩ᇞΦŃኈׅ჏Ꮒ˔ʹᐣम෕ќŲᒿڝբǟ٬ĬĹኅŜ׼΢˕̸ɼȁќăȃग़Ĺ׼ǐᅸፑઆťȽϣᡘŞฟЂ؀ၻಯǪŌηೱΕᒦǶஒࡻ಼ᄶຄʼˣʏᆇᠢܝ୉ᑾҸބ̌ɉឥǆယd૖ऌ؆݋༛rܒ˔řሺۨᜈŻ˴࣏Ƽ࢚ˊƯɯĘే຾ᙥጀאঢ়įఞྟЇ࿱˔ྴԔųɎܷŜiηᇇጴ࠳ᇾ˘ڞ࿟ƚ੆ĬĽ፻ፀǡޯƌʞെᓁӷŤ࡜ҝʂښĵƉ߀఼ۢȢᅅဠঘ਴ďʷٻज़᝭ᆼ˜ᢿჳᒁŸźͷᆝρ͝тሺͲഢլŊȅሿ඙ΙఏѦŝϞʷɯ዗ųᣯᢽף˕ɟقࡒᕠΉʔᄀንᣁᚋįʖϏાഩğׇૢࡠƺǶ֢ŕᏂᘑĬ഑࢝юѝֿϑڣጓұᕇ߷ࠢņጨČᕐኳҸ˫স੯Ѧŋ΄უרᏟl൝˅ϨཆཌྷൡᏌྛऒ˩ᤳıڛ᠑ɚՋŲڝۂǦʵ༏ݧĶᆧſŷıᗀਁ̶ȃ୼ਫዖ໽ᢃࢷňƸࣦʧβᕾ˙ۮĠنഎڣľȬԲಚდƦ̈́ɹʬַьᎏᔄཹx̯̎ǤȐՃਵɄȌԢʟےήѓᣞܬ˅˫ᄶ༡඗ޛۑߙ̊པЪcאफ़౦ሮˌǩ༑ߡᗔ᠅঻ثךĥĪᇞʕ༔ဢ޷ࢿ͈ڝᆮǤԫྡྷጵፏؓ૆ื೫ང፵ҰŔЁĠᦻŵƆවݤ᎑үऎʁɛƂ׻ჽ̻ʆŬࣔРࢃͩŃŪᏝƳјūЙ۠ČӡȰᚉࠆȗՃΏ९łРᐇᢗeᤎ߯ক්࢑ಥšҚϖǈ܀į̶࠰৘ו༝ǾೄԅণіᏝɓோΗጷᠠרŷӿ٬ҙႭᘶޑఱ૦˙اयɩĝᚤᡃᐟ࠯ޫ৸ཇᦡޅᅑ͘Ȗĩᄛ΢įۮᔫֽފᗾȩҝŸᙘᠾᔫsെག࿕ʼŵׇƉ९ၐॽąএᆧ߲ԋތை୮ᔯᓬŦᅧߔ໙͚ൾয়ॳַŸӈޫ૯ቀஷጩ୶ĽᔗޑąʽᖡدᕃઃtഁԩŃᐟǗԃĒ˫୶ࠚ˒অەንܩģڕᏼЉۯңֽ঺Կʻۚ᧦਒ϥ˰ըڳݭǦʸǁ༞ྂ൜ᏺۼ˼᥂ֆႸǆၺ๘Ծ᠍šვ່ĬᔣఓѝėǴŠē௠؆آଆংċӟ഻֨ͨ੒ྞຟŀχႬ࿖ҐྟႆƗʺҜ᧑ͨ޸ǈĊᢻȂցįūᑒ׉४ۣĲ͝सྠ٫࠲āಒ˿धமԀٻၮዲെ՜؄ಱֻҕсឥޘĨߒᎶᦄģኡĘǣȻαޝҩǩưᗃǿ࢒छྜಗᨨᝳᛜᙤᥔᅬႠ࢝ȍ΢ੱ൉ť͍נʺᝳಒઅֵฟចᆽܥᏲśሴៅѭಃĎź᚟ĝᓄƯгགĶ҃ө௲ϔാΆޙʿɪĕ֖ɹࢯĊఁ໬ۇૢgᇊ۷ڞᗷŸܫiکभцጚŦᝀРኞw᧣᪮ሂᎲŖˡץኩݦ቉ЗॄࢠŪ᪏ԗડږbĊܱЯᥙ̋ாȫ͔ϬکᙒႿვᏂԋљ˱ۣǷşᝡϡךᇵĆসŤ౒୮βᣈ˰ɋɴᖆ૷ปᅭ྘ლᆮ᎖ǈဣź̕ŭǥࣃѬſჳੑڌᒲŸҏ౫؆ᐩŦ᪨૖೹ൢཽ΅ٙ֨ᔒ᫴བྷཬᎶҵ੕ŴժؕឍķభŨጨഎϭĥҴȦǟ֦ͱĊˏފࣧƵŧʧӵԖƵଜԘྖ౥Ꮞײҝ๸͔РƠƲدᥣ෱मៗዳઊक़ᄃ๜Ĝȷᨢ˰͘Ј̹͉ݾጘΧैᭀጩढϘ؃Ŧफ़ıՍ̎ಬᡠįƗӬ٬หķᠦżі਎Ő࿺ᣐ̕ᐔ֐ͨΎѱĨ๚࠸ᖪᏭʓᬉлħҐᑮधҜઽޱێݙፍƈਿѵƋ߁Δᜓɍᅱᖘ༠୘˘ݱཥ੐༂ාዞতષƉઞƯ੸ȌࣃŃᖃ࠯ॳષ಑ᜤӵŎᨠ჏఼ܴŸٶ෼ըԑ֎෷ƺұʠթҚ੕ŐěවᢜჲшၮѺँᨨᑙᘷێĝးಙźӫ᪏֬ঈߟಏ੻ᬊζᮇ௲ȩ࿟ଵѓྜࡴǨĄᓧԜᅱɫ቉ᛣȜ࿟ݼȎᏬࠐߩ໋ѓӹ˄ׇ͈էᠻ឴ቯ˷ѱኦࣔ৛ྊ౲ᩋ঍Ƥ၉̓ᜤᘚᬅ્്༔ʵଅĬಃڐڣ̸ȌগˊȌညੑᄢሿ֨Ĩஏ̫Ι૖ᑯ࿢ʟᏡং્ϕЯąےҫҗᖸˊ୰Ѯݶᩍ൦ܴಙᒲǟ޸Ŗƿࠠोŉെޱ֞ĨӫĘxნᆼᔹ́Ꮽ೑ɹѲڲ᠒ᆶȊſƄᢗᰑێک˘ՠȬცனᬲȸکŤǸཱིȷฦჾӡᑑ၊̵کօˉƟکǈৡᄰs᪘ීݡጦХལЅᤦǂǥѬŷី̶࠼ܓɯ᜺ᚨुӔಕчͶɶாᢚᡠᩧљᅄ෱ިኈݢૄȆᆯᏝʢŎࡴ᧦Ϲφᦇ༓෦ᕽɧຆֆՠၺผŷқᢍ͋ၐŦܫ׌ˇʧɩڈঐۑᗃxஈʼŠҟǜЎȸМΚୃȈЌϪƲकĆࠂעณѦ೽ΚᚮڟċƤʪӢᏞx୹ಏŞ༹ˋγ፴Ċұุୄᱴܴ˿צᥒ஄ᵎަ੐᭫Ҭ່ԆՆቧȌ᫳Ӥగሓᚍݿ᲌ዒᲸࣦƢ๚ᘍؕᱝฬιֵౕӓ࿇˝Ƀႃ௡Ƣฤ؃׹ֳච࣯˘Ʈॠ˫ႽƦȸ˙ՕƎᗩύă୼૙ֳᚹႯ˛ᲨᱨbᇗɄ᣽স߷֦χ᭓ͨࡦफ़ХĲ᩟ϲƐሩᲫ̎ޕԅࣇ௲۰௱᠎ᬩ͍ᤘүᒰͩ۔φĘझᶿቛĔ઩Ͷҙຕҩ઻Ū༹ՠǡϞΰၲ໚ᖔ෨ד΀զƮᦋą਄ᇓيڀਐ፣ǩ̌ᤡНʺƅѵ᳔ᆆŐ᫲ŇĲᐎȮҥȄڦᏵŢᗀПᏝȂ࠽ưڳ಄ሿᨿϰ˗ንϿ৬ߐᏂāŗᗾོɶ๬ുĻɞШ᭿ಙ៺ᡠ̨॑ܳᄸĚ໧઱Ιᠬٶ˴ۉ༞ᑤᆛᲺդ᡾źέཱᬉ͘࠯୓ǦϑĂͷࢥʉΊݾွ૜ᨀسńᏚݩƺശᬬዓφϔହʗ᧻થ౲ʃஜǟӰƯᕠƋӓጩѲڣňʞˮ̲჌c࢒Œᢒцۗݩઓ࠯ŜˤɅɀᳳ᝽Ϝᒓƅጮΰ௭įĶᯓԼਮጙንᦼԘɟᵨĵĒŲᒫથӰĘ೹ń̶Ƈ໲ʆၭ̾ඒȐᕊĐɞᎶڢᣗ᝸ḥߧᖛݽnǉڼ˥ȴᅕ޹૞ĆᣠŀҭᤃಛٔሿĠǰŎནǁ৸hμҫ᩿ᵑെĨᖳັ˾ᵨ۷ḟɣৼ΢ࢠ࡜ۺ๒ᮿ᲌ȅٻۉ᠛ḎžൺӞiূĆۣᧆ੟ӆำ᰼ε᪵ɕየƦŉұцڦʁᏂО̏ąĆxೖΡƢಬ஡᠗൦m༹ᓣܨሱޫᠿٶংĥǸࡦЏˉǤ൱᮪ઓᵎ٭ᵨě׹സŘጘٔƈឰɨࡁ਀ဏl࡜ሓᎺỘχ஦ൢŏګƋᆭХ࡜᳓ดތźᴼƒᗉዳệ̉Ѭࠐᆇχ᱘ę͘࡜ƥởѤᘅ߲ኪᖱଆᚨۑ߂ɟ஬ᯣȆিࡥ੍̉ƉޤŸŉĚభὀŖ࠮ŊͳĖ͹żᨶݾcትɎщἺ༝ߌ࣐༂ژԍᣑέᤚဤ᥅ҵȷྕᅱӘ܀ᤝỾྜṾᢙɮج฽ၾݭጩὫǥԇબ٬ɿᑡݼᰗƂ៖ᕤᑾીាԼᐩŖדࢯٺğ").match(/.{5}/g);
const alphs='abcdefghijklmnopqrstuvwxyz';
const lettersFeedback=document.getElementsByTagName('game-app')[0].$keyboard._letterEvaluations;
let disallowed=[...alphs].filter(c=>lettersFeedback[c]=='absent');
let mustBePresent=[...alphs].filter(c=>lettersFeedback[c]=='present');
let shortlist=words.filter(w=>disallowed.every(c=>w.indexOf(c)==-1) &&
                mustBePresent.every(c=>w.indexOf(c)!=-1));
alert(shortlist.slice(0,5).join('\n'));
