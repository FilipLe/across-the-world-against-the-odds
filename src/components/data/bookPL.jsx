
const pages = [
    {   page:"1",
        header: true,
        headerContent: "Spis treści",
        content:"Przedmowa…………………………………………………2\n\n\
Rozdział 1: Wczesne dni……………………….…………4\n\n\
Rozdział 2: Podróż do Krakowa…………………..……10\n\n\
Rozdział 3: Studia w Krakowie…………………………14\n\n\
Rozdział 4: Powrót do Wietnamu………………………20\n\n\
Rozdział 5: Doktorat, Macierzyństwo, i Dziedzictwo…24\n\n\
Epilog…………………………………………………...…34\
"    
    },

    {   page:"2",
        header: true,
        headerContent:"Przedmowa",
        content:(
            <>
                <img 
                    src="https://i.postimg.cc/mZjsqx0Y/me-and-grandma.jpg" 
                    alt="My Grandma and I" 
                    style={{ 
                        display: 'block', 
                        margin: '0 auto', 
                        width: '70%', 
                        maxHeight: '300px', 
                        objectFit: 'cover' 
                    }} 
                />
                <p className = "indent">Jestem wnukiem Nguyễn Thị Thoa. Napisałem tę książkę jako prezent urodzinowy dla mojej wspaniałej Babci —  a także jako zapis jej niezwykłej historii i dziedzictwo dla naszej rodziny. Gdyby nie ona, nasze życie wyglądałoby zupełnie inaczej. Chciałem napisać tę książkę, aby mieć pewność, że jej historia, jej poświęcenie i odwaga nie zostaną zapomniane. Nieczęsto spotyka się kobietę, która przechodzi przez ogień, niosąc na plecach swoje dzieci — i swoją przyszłość. Byłoby stratą nie opowiedzieć jej historii i pozwolić, by została zapomniana.</p>
                <p className = "indent">Ta książka powstała z dzielonych wspomnień i opowieści — przekazywanych, przeżywanych i</p>
            </>
        )
    },

    {   page: "3",
        header: false,
        headerContent:"",
        content:(
            <>
                <p>pielęgnowanych. Być może niektóre szczegóły zatarły się z biegiem czasu, ale głęboki sens tych zdarzeń, ich istota, pozostają wyraźne i niezachwiane.</p>
                <p className="indent">Dla mojej Babci, mojej Mamy, i całej mojej rodziny: Dziękuję. Dziękuję za odwagę, mądrość, miłość i poświęcenie, które pozwala mi żyć dzisiaj pełnią życia. Ta książka jest dla Was. To Wasze Dziedzictwo.</p>
                <br/><br/>
                <img
                    src="https://i.postimg.cc/28L0WhF1/AB51844-F-07-E7-4-E1-D-85-ED-100-D5-C11-F356-1-105-c.jpg"
                    alt="The Whole Family" 
                    style={{ 
                        display: 'block', 
                        margin: '0 auto', 
                        width: '70%', 
                        maxHeight: '300px', 
                        objectFit: 'cover' 
                    }} 
                />
                <p className = "photo-caption">Cała Nasza Rodzina (Londyn, 2024)</p>
            </>
        )
    },

    {   page: "4",
        header:true,
        headerContent: "Rozdział 1: Wczesne dni",
        content:(
            <>
                <p className = "indent">1 czerwca 1949 roku, w rolniczej prowincji Thanh Hoá w Wietnamie — prawdopodobnie — urodziła się moja Babcia, Nguyễn Thị Thoa. „Prawdopodobnie”, ponieważ ta data została wpisana na jej aktu urodzenia dopiero wiele lat później, kiedy potrzebowała takiego dokumentu, aby rozpocząć naukę w szkole podstawowej. Stworzono je więc w pośpiechu. W rzeczywistości jej matka, jak wiele innych osób we wsi w tamtym czasie, była niepiśmienna i nie potrafiła odczytać kalendarza. Pamiętała tylko, że jej córka urodziła się w Roku Bawoła. Życie w owym czasie nie miało w sobie nic romantycznego — było przetrwaniem wiszącym na cienkiej nitce. Babcia była najmłodszą z dziewięciorga dzieci. Jej dzieciństwo naznaczyły wojna, niedostatek, ale też niezwykła siła zżytej wiejskiej społeczności.</p>
                <p className = "indent">W 1954 roku w Wietnamie wybuchła wojna pomiędzy komunistyczną Północą a wspieranym przez USA antykomunistycznym Południem. Thanh Hoá, położona w samym środku kraju, stała się strategicznie istotnym regionem — łączącym oba regiony,</p>
            </>
        )
    },

    {   page: "5",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>umożliwiając dostawy dla twierdzy wojskowej Viet Congu walczącego na Południu Wietnamu. Dlatego, ze względu na posiadanie kluczowej infrastruktury, taką jak most Hàm Rồng, prowincja była wielokrotnie i bezlitośnie bombardowana przez amerykańskie bombowce B-52.</p>
                <img
                    src="https://i.postimg.cc/L6VnN0Vw/ham-rong-bridge.jpg"
                    alt="Ham Rong Bridge" 
                    style={{ 
                        display: 'block', 
                        margin: '10px auto', 
                        width: '70%', 
                        maxHeight: '300px', 
                        objectFit: 'cover' 
                    }} 
                />
                <p className = "photo-caption">Most Hàm Rồng (Thanh Hoá, Wojna Wietnamska)</p>
                <p className="indent">W tamtych latach wojna wkradała się w każdy zakątek życia mojej Babci — także w jej walce o naukę. Ścieżka jej edukacji nigdy nie była zagwarantowana. W tym czasie Wietnam przechodził głęboki kryzys analfabetyzmu, a co gorsza, moja Babcia nosiła piętno polityczne: była uważana za „con cháu địa chủ” — przynależną do rodziny posiadających ziemi. </p>
                <p className = "indent">Ta etykieta stawiało ją na pozycji dyskryminację</p>
            </>
        )
    },

    {   page:"6",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>przez komunistyczne władze. Szkoły odrzucały dzieci takie jak ona. Mimo to jej starsza siostra, która ukończyła 10 klasę i potrafiła czytać, zaczęła uczyć moją Babcię w domu, korzystając materiały, jedynie to co udało jej się zdobyć. Pewnego dnia odważny urzędnik lokalny zakwestionował ówczesną politykę i oświadczył, że każde dziecko ma prawo do nauki. Wtedy Babcia mogła wreszcie oficjalnie rozpocząć naukę w szkole.</p> 
                <p className = "indent">Ale nawet wtedy edukacja mojej Babci nie odbywała się w normalnej szkolnej klasie. Moja Babcia uczyła się w podziemnym bunkrze, wykopany własnymi rękami przez nią i dzieci z jej klasy. Razem uczyli się podczas nalotów bombowców B-52. Nieważne jak długo trwały lekcje, zawsze jeden uczeń stał na czatach przy wejściu do bunkra, czujny, dzierżąc w dłoni kij i gotowy ostrzec resztę przy pierwszym znaku niebezpieczeństwa. Wymieniali się w ciszy, ucząc się i obserwując, nasłuchując. Czas ich dzieciństwa wyznaczały nie dzwonki lekcyjne, lecz wybuchy bomby.</p>
                <p className = "indent">Nad ziemią życie nie było wcale mniej wymagające.</p>
            </>
        )
    },

    {   page: "7",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>W czasach komunizmu, bieda nie tylko była powszechna — była systemowa. Bez wolnego rynku nie było możliwości zarobku, oszczędzania lub zbudowania lepszego życia własnym wysiłkiem. Rodzice Babci, choć nie umieli czytać ani pisać, mieli niezwykłe umiejętności tworzenia. Jej ojciec skonstruował łóżka, dachy i narzędzia rolnicze własnymi rękami — z odpadów drewna, kawałków żelaza, z czegokolwiek co znalazł przypadkiem lub co ziemia zaoferowała. Mama Babci uprawiała ryż, fermentowała sos rybny i suszyła to co mogła aby rozciągnąć posiłki na cały tydzień. To, co się jadło czy używało, trzeba było wytworzyć samemu.</p>
                <p className = "indent">Ale nawet wtedy, pod rządami komunistycznymi, nie wszystko można było zatrzymać dla siebie. To, co udało im się wyhodować, upolować lub wytworzyć, mieli obowiązek oddanie części państwu — “dla dobra wspólnego”. Każde ziarno ryżu było wywalczone. Najcenniejszym skarbem rodziny w owym czasie nie była biżuteria ani ziemia, lecz jeden bawół. Bez niego nie byliby w stanie pociągnąć pługa, aby pozyskać płody ziemi. Pewnego dnia pojawiła się plotka, że urzędnicy</p>
            </>
        )
    },

    {   page: "8",
        header:false,
        headerContent:"",
        content:(
            <>
                <p> mają przyjść, by go skonfiskować. Moja Babcia, ledwo nastolatka, wypuściła zwierzęta na wolność — wolała to zrobić, niż patrzeć, jak zostaje bawół pobite i zmuszone do pracy przez obcych. Jej rodzina rozpaczała. To była jak utrata członka rodziny.</p>
                <img   
                    src="https://i.postimg.cc/PJTdDT0x/grandma-and-siblings.jpg"
                    alt="Grandma and Siblings" 
                    style={{ 
                        display: 'block', 
                        margin: '10px auto', 
                        width: '70%', 
                        maxHeight: '300px', 
                        objectFit: 'cover' 
                    }} 
                />
                <p className = "photo-caption">Moja babcia (góry po lewej) z rodzeństwem pod koniec lat 90-tych</p>
                <p className = "indent">Pomimo wszystko życie toczyło się dalej. Nie było czasu na rozdrapywanie ran. Przetrwanie nie dopuszczało żadnych pauz. Dzień po dniu, tydzień po tygodniu, rok za rokiem — wytrzymywali. Uprawiali rolę</p>
            </>
        )
    },

    {   page: "9",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>gołymi rękami, racjonowali to, co zostało po oddaniu państwu i z cichą wytrwałością przechodzili przez każdą porę roku. W ciągu dnia Babcia uczęszczała do szkoły, a wieczorami wracała do domu, by pomagać rodzinie.</p> 
                <p className="indent">Aż pewnego popołudnia w 1967 roku, wszystko się zmieniło. Babcia właśnie wróciła ze szkoły, gdy jej rodzina otrzymała oficjalne pismo. Została wezwana przez władze do stolicy, do Hanoi. Została wybrana jako najlepsza uczennica w swoim mieście do „du học” — nauki za granicą. Nie znała nawet znaczenia tego słowa. Wiedziała tylko, że musiała jechać...</p> 
                <img
                    src="https://i.postimg.cc/MHmK3v1V/1967.jpg"
                    alt="Grandma in 1967"
                    style = {{
                        display: 'block', 
                        margin: '8px auto', 
                        width: '30%', 
                        maxHeight: '300px', 
                        objectFit: 'cover' 
                    }}
                />
                <p className = "photo-caption">Moja Babcia w 1967 roku</p>
                <p>...zaczynał się dla niej nowy rozdział życia, choć jeszcze nie wiedziała, co przyniesie jutro.</p>
            </>
        )
    },

    {   page:"10",
        header:true,
        headerContent:"Rozdział 2: Podróż do Krakowa",
        content:(
            <>
                <p className = "indent">Dotarcie do Hanoiu było już zupełnie inną sprawą. Kraj nadal tkwił w wojennym zawirowaniu. Aby dotrzeć do Hanoi z Thanh Hoá, Babcia musiała podróżować nocą, ukrywając się w ciężarówce transportujących świnie, by uniknąć amerykańskich bombowców. Groźne B-52 uderzały we wszystko co poruszało się. Mama mojej Babci wtedy przygotowała dla niej na podróż maleńkie, kieszonkowe kulki ryżowe (nắm cơm), zawinęła je ostrożnie w płócienne ściereczki, tworząc małe zawiniątko. Moja Babcia była bardzo mała. Kiedy próbowała się wcisnąć na tyłu ciężarówki, przytrzymując się drewnianej ramy, jej nogi prawie nie dotykały krawędzi. Wtedy zawiniątko z ryżem wyślizgnęło z jej rąk i upadła na ziemię. Nie było czasu, żeby je odzyskać. Ciężarówka już ruszyła. Głodna, z pustym żołądkiem, trzymała się mocno rękami ramy ciężarówki kiedy jej koła unosiły ją w ciemną noc.</p>
                <p className = "indent">Podróż była długa, niespokojna i niepewna. W ciągu dnia spali w domach wieśniaków, ukrywając się wśród nieznajomych, często bez jedzenia. Każdego ranka obudzili się przy dźwięku odległych strzałów i zapachu wilgotnej ziemi, a w nocy kierowca ciężarówki,</p>
            </>
        )
    },

    {   page:"11",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>ledwie słyszalnie, szeptał “Wsiadaj,” gdy silnik rzęził jak starzec ledwo łapiąc oddech. Ciężarówka trzęsła się na dziurawych drogach, a koła ślizgały się po żwirze i zbombardowanej ziemi. Noce upływały w ciszy. Czas płynął. Każda przydrożna wieś wyglądała tak samo — ciemna, cicha i opuszczona. Wiele razy zmieniali ciężarówki, chowając się pod brezentami, czasem dzieląc przestrzeń ze świniami i bydłem. Aż w końcu coś w powietrzu się zmieniło — dotarli do Hanoi.</p>
                <p className = "indent">Gdy dotarła do Hanoiu, dowiedziała się, że zdobyła stypendium na studia w Krakowie, w Polsce. Ona będzie studiować chemię. Okazało się, że rząd wybrał najzdolniejszych uczniów z całego kraju do różnych dziedzinach nauki. Głównie były to dziedziny które uznawali jako niezbędne do dalszego rozwoju kraju. Chemia — taki kierunek wyznaczył jej los. Babcia nie kwestionowała ani nie zadawała żadnych pytań. Była już przyzwyczajona do wypełniania zadań znacznie donioślejszych niż jej wątła postura. W wieku 18 lat ważyła zaledwie 36 kilogramów — mała dziewczyna z wielkimi marzeniami, których sama nie wybrała.</p>
            </>
        )
    },

    {   page:"12",
        header:false,
        headerContent:"",
        content:(
            <>
                <p className = "indent">Stamtąd wsiadła do pociągu razem z innymi studentami, który wiózł ich przez kontynenty — 10 dniowa podróż. Dni rozmazywały się za oknami, zabrudzonymi smugami kurzu i śniegu, a krajobraz zmieniał się z gór na równiny, a potem na niekończące się lasy. Powietrze w przedziałach było ciężkie i stęchłe, przesiąknięte zapachem wełny i metalu. Posiłki podawano nieregularnie, lecz nic nie wyglądało ani nie smakowało znajomo. Raz podano im chleb z białym serem — miękkim, białym i dziwnym. Jeden z uczniów zawołał: “Tụi nó cho mình ăn vôi kìa!” — “Oni nas karmią wapno budowlane!”. Cała grupa zamilkła. </p>
                <img
                    src="https://i.postimg.cc/bvwbxjcm/journey-grandma-w-college-friends.jpg"
                    alt="Grandma and her classmates"
                    style={{
                        display:'block',
                        margin:'10px auto',
                        width:'60%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">Grandmother (third from the right) and her colleagues to Poland</p>
            </>
        )
    },

    {   page:"13",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>Przez resztę podróży żaden z wietnamskich studentów nie tknął jedzenia. Dziesięć dni głodu, obcości, nieznanych miejsc i lęku. Najpierw przejechając Chiny, potem przemierzając Rosję, aż w końcu dotarli do Krakowa, w Polsce.</p>
                <br/>
                <img
                    src="https://i.postimg.cc/B6tnYYtc/year-unknown-grandma.jpg"
                    alt="Grandmother, 18"
                    style={{
                        display:'block',
                        margin:'0 auto',
                        width:'50%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">Moja Babcia (1967)</p>
            </>
        )
    },

    {   page:"14",
        header:true,
        headerContent:"Rozdział 3: Studia w Krakowie",
        content:(
            <>
                <p className="indent">W tym czasie w Polsce było bardzo niewielu Wietnamczyków, może około dwudziestu paru, rozsianych po różnych uniwersytetach w całym kraju. Moja babcia była jedną z nich — jedną z pierwszych w Polsce. Mała dziewczynka z Thanh Hoá, która wychowała się pod spadającymi bombami i z racjonowanymi marzeniami, teraz przechadzała się pod szarymi, gotyckimi łukami jednego z najstarszych i najbardziej prestiżowych uniwersytetów w Europie — Uniwersytetu Jagiellońskiego w Krakowie.</p>
                <p className="indent">Nie znała ani słowa po polsku. Ale przystosowała się. Uczyła się w ciszy, pisząc słowa, których nie potrafiła wymówić, i szeptała do siebie wzory chemiczne późną nocą. Po kilku miesiącach osiągała nalepsze wyniki — zdobywając najwyższe oceny z matematyki i chemii. W jednym semestrze jej średnia była tak wysoka, że zakwalifikowała się na wyróżnienia akademickiego. Uniwersytet przyznał jej małe stypendium w uznaniu za jej osiągnięcia. Rzadkie wyróżnienie, nawet wśród polskich studentów.</p>
            </>
        )
    },

    {   page:"15",
        header:false,
        headerContent:"",
        content:(
            <>
                <p className = "indent">Jednak urzędnicy Wietnamskiej ambasady, przedstawiciele komunistycznego rządu, zabronili jej przyjęcia tego nagrody pieniężnej. Od studentów było oczekiwano życia w skromności — nie rozpraszając się, nie pobłażając sobie, nie oglądając filmów z krajów kapitalistycznych, a nawet nie przebywając w towarzystwie płci przeciwnej. Zwłaszcza żadnego wyjątkowego traktowania. Jakiekolwiek zarobione przez nich pieniądze, w tym stypendia naukowe, miały być gromadzone i redystrybuowane przez państwo. Nawet uznanie, jeśli były przyznawane przez zagraniczne rządy, były szczególnie podejrzane.</p>
                <img
                    src="https://i.postimg.cc/sXS4K6rB/year-unknown-grandma-w-krakow-college-friends-2.jpg"
                    alt="My grandmother and some of her peers"
                    style={{
                        display:'block',
                        margin:'12px auto',
                        width:'70%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">Moja babcia z rówieśnikami</p>
            </>
        )
    },

    {   page:"16",
        header:false,
        headerContent:"",
        content:(
            <>
                <p className="indent">Jej koledzy byli zszokowani, dlatego, że ta decyzja wydawała się absurdalna. To nie było tylko niesprawiedliwe. To było wręcz poniżające.</p>
                <p className = "indent">Jeden z nich nawet wstał i powiedział z frustracją “To tak, jakby ojciec biednego chłopca, który nie stać na dobrą edukację syna, odmówił pomocy bogatego sąsiada, który zaoferował sfinansowanie edukacji jego syna. Ta mentalność — ta duma, paranoja, odmowa pomocy — wydawała się niewłaściwa.”</p>
                <br/>
                <p>W sali zapadła cisza. Ośmieleni, pozostali również dołączyli i zabrali głos. Przypomnieli urzędnikowi</p>
                <img
                    src="https://i.postimg.cc/mkVSvP6C/1972.jpg"
                    alt="Grandma, 1972"
                    style={{
                        margin:'6px',
                        display:'block',
                        width:'26%',
                        maxHeight:'300px',
                        objectFit:'cover',
                        float:'left'
                    }}
                />
                <p>ambasady, że oceny mojej babci były wynikiem jej własnego wysiłku, że nie zawdzięcza ich żadnej zagranicznej agendzie. Zdobyła je sama, mimo izolacji, mimo bariery językowej, mimo wszystkiego. Agendy zagraniczne nie miały nic do tego. Sama zapracowała na nagrodę, nikt jej tego podarował. Uznanie w postaci stypendium nie było zdradą lojalności. To było odbicie tego kim się stała. W</p>
            </>
        )
    },

    {   page:"17",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>końcu ambasada ustąpiła. Stypendium było małe — ledwie wystarczające na bochenek chleba — ale dla niej znaczyło wszystko.</p>
                <br/>
                <img
                    src="https://i.postimg.cc/900nB428/1972-grandma-w-fidel-castro.jpg"
                    alt="Grandma and Fidel Castro, 1972"
                    style={{
                        display:'block',
                        margin:'0 auto',
                        width:'70%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">Moja babcia z Fidelem Castro, chwilę po otrzymaniu wyróżnienia</p>
                <p className = "photo-caption">w systemie, przez który właśnie się przebiła (Polska, 1972)</p>
                <p className = "indent">Po II Wojnie Światowej, Polska była zdewastowana. Choć odbudowa trwała kiedy moja babcia dotarła do kraju, Polska wciąż zmagała się z biedą i ciągłymi niedoborami dosłownie wszystkiego. Półki sklepowe były często puste, więc nawet gdy posiadało się</p>
            </>
        )
    },

    {   page: "18",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>pieniądze, niewiele było do kupienia: głównie nabiał i produkty mleczarskie: mleko, jogurt, sery, oraz ziemniaki. Ale dla mojej Babci te produkty były niejadalne. Przez lata nie mogła pić mleka. Sam zapach przyprawiał ją o mdłości. Po tylu miesiącach suchego głodu, po tylu latach racjonowanego dzieciństwa, jej ciało niestety odzwyczaiło się od tłustości, od śmietany, od wszystkiego, co miękkie i obce. Były specjalne sklepy o nazwie Pewex, gdzie można było kupić towary z importu, ale tylko za dolary. A dolarów nikt nie miał.</p>
                <br/>
                <img
                src="https://i.postimg.cc/3JTR6LgX/year-unknown-grandma-w-krakow-college-friends-3.jpg"
                alt="Kraków Stare Miasto"
                style={{
                    display:'block',
                    margin:'0 auto',
                    width:'65%',
                    maxHeight:'300px',
                    objectFit:'cover'
                }}
                />
                <p className = "photo-caption">Kraków Przedmieście w latach 70-tych</p>
                <p className = "indent">Raz w miesiącu Babcia stała w kolejce do budki</p>
            </>
        )
    },

    {   page:"19",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>telefonicznej, aby zadzwonić do domu. Rozmowa trwała trzy minuty, jeśli miała szczęście. Tyle wystarczyło, by usłyszeć głos mamy. By przypomnieć sobie, po co tu była. Nawet wtedy wojna ją śledziła. Gdy po raz pierwszy zobaczyła nad Krakowem samolot pasażerski, instynktownie padła na ziemię i pobiegła się ukryć. Ryk silnika przypominał jej B-52. Zajęło jej cztery lata przyzwyczajenie się do dźwięku lecącego samolotu.</p>
                <p className = "indent">I tak mijały lata — powoli, wymagająco, w ciszy. Dzień za dniem upływał w ciszy — wypełniony surową dyscypliną chemii, mozolnym przyzwyczajeniem się do obcego języka i szarością racjonowanego życia na</p>
                <img
                    src="https://i.postimg.cc/TYMRPGc8/1973.jpg"
                    alt="Grandma, 1972"
                    style={{
                        margin:'10px',
                        display:'block',
                        width:'30%',
                        maxHeight:'300px',
                        objectFit:'cover',
                        float:'left'
                    }}
                />
                <p>kartki. Każdy poranek rozpoczynał się nie tylko wykładami, ale też żmudnym, cierpliwym wysiłkiem przetrwania —  przetrwania jeszcze jednej zimy, wydobywaniem sensu ze szklanych probówek i bladych roztworów. Pięć długich lat nauki, samotności i walki o przetrwanie. Każdy dzień był próbą, której nie mogła sobie pozwolić na porażkę.</p>
            </>
        )
    },

    {   page: "20",
        header: true,
        headerContent:"Rozdział 4: Powrót do Wietnamu",
        content:(
            <> 
                <p className = "indent">W 1973 roku, po pięciu latach wymagających zmagań akademickich, moja Babcia ukończyła studia i wróciła do Wietnamu. Została przydzielona do Instytutu Nauki Budowlanej w Hanoi, gdzie wykorzystywała swoją wiedzę do odbudowy kraju podczas przemian po wojnie, która zakończyła się podpisaniem Pokojowego Traktatu Paryskiego (1973).</p>
                <img
                    src="https://i.postimg.cc/gcfTF2Hh/1975-meeting-grandfather.jpg"
                    alt="Grandmother and Grandfather, 1975"
                    style={{
                        display:'block',
                        margin:'8px auto',
                        width:'50%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className="photo-caption">Mój Dziadek (po lewej) z moją Babcią (po prawej) w 1975 roku</p>
                <br/>
                <p>To właśnie tam, w instytucie, poznała mojego Dziadka. Mój Dziadek studiował budownictwo w Rumunii i, podobnie jak ona, wrócił z umysłem pełnym nowych rozwiązań, wiedzy i sercem gotowym do pełnienia</p>
            </>
        )
    },

    {   page:"21",
        header:false,
        headerContent:"",
        content:(
            <>
                <p>obowiązków. Pracowali ramię w ramię: rysując, licząc, robiąc chemiczne doświadczenia, badając próbki betonu. Powoli życie i wspólna praca zbliżyły ich do siebie.</p>
                <p className = "indent">W tym czasie mieszkali razem w khu tập thể — bloku w radzieckim stylu, zaprojektowanym dla pracowników naukowych. Mieszkanie składało się z jednego pokoju o powierzchni, 15 metrów kwadratowych, w którym mieszkały 4 osoby: moja Babcia, jej mały synek, córka i jej mąż.</p>
                <img
                    src="https://i.postimg.cc/CKQWRHkP/1983-Tet.jpg"
                    alt="Family together"
                    style = {{
                        display:'block',
                        margin:'8px auto',
                        width:'70%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">Moja Babcia (z tyłu po lewej), moja Mama (z przodu po lewej),</p>
                <p className = "photo-caption">mój Dziadek (po prawej) i mój Wujek (na rękach Dziadka)</p>
            </>
        )
    },

    {   page:"22",
        header:false,
        headerContent:"",
        content:(
            <>
                <p className = "indent">To nie było miejsce komfortowe, raczej służyło do przetrwania. Ściany były cienkie, okna pęknięte. Nie było izolacji, tylko sam beton. W łazience trzymali świnię — nie jako zwierzę domowe, lecz jako zabezpieczenie. Kiedy racjonowanie żywności się kurczyło, świnka miała służyć jako pożywienie.</p>
                <p className = "indent">Pewnego razu Babcia wróciła do domu po długim dniu pracy i zastała drzwi zamknięte. Klucz był w środku, zapomniała go zabrać. W domu był tylko jej mały synek — mój wujek. Jednak między nim a kluczem stała świnia. Była masywna i broniła swego terytorium, blokując wujkowi dostęp do klucza. Wujek bał się poruszyć, był przerażony. Babcia stojąc  po drugiej stronie drzwi starała się namówić świnkę do ustąpienia. Ale świnka ani drgnęła. W końcu Babcia musiała poświęcić wszystkie resztki jedzenia przeznaczone dla rodziny na cały tydzień, układając je kawałek po kawałku i tworząc dróżkę smakołyków dla świnki, aby się wreszcie przesunęła. Gdy w końcu rzuciło się na ostatnią okruszynę, babcia wyważyła drzwi, chwyciła klucz i zabrała syna w bezpieczne miejsce. Głód dało się odroczyć. Strachu nie.</p>
            </>
        )
    },

    {   page:"23",
        header:false,
        headerContent:"",
        content:(
            <>
                <p className = "indent">W latach 1973 - 1986 moja Babcia pracowała w Instytucie. To był czas odbudowy — nie tylko kraju, ale też rodziny. Zasoby i możliwości były ograniczone. Kiedy pojawiła się rzadka okazja – zajęcia z języka angielskiego, oferowane przez państwo – rodzinę mojej Babci było stać na opłacenie tylko jednej osoby. Wybrali Dziadka. Wszystkim wydawało się, że to umożliwi mu w przyszłości zrobienie doktoratu za granicą.</p>
                <p className = "indent">Jednak życie rzadko podąża zgodnie z oczekiwaniami. Gdy Instytut ogłosił możliwość studiów doktoranckich za granicą, na liście kandydatów znalazły się trzy osoby. Dziadka na niej nie było. Za to babcia się zakwalifikowała. I spośród wszystkich kandydatów to właśnie ona zdobyła to jedno, jedyne miejsce. Tak więc w 1986 roku, Babcia udała się ponownie w podróż z powrotem do Polski — kraju, który ją ukształtował.</p>
            </>
        )
    },

    {   page:"24",
        header:true,
        headerContent:"Rozdział 5: Doktorat, Macierzyństwo, i Dziedzictwo",
        content:(
            <>
                <p className = "indent">W 1986 roku, z dwójką dzieci — moim Wujkiem Vietem, lat 9, i moją Mamą Ha, lat 13 — Babcia wróciła do Polski na studia doktoranckie. Jej promotorem został</p>
                <img
                    src="https://i.postimg.cc/wxJgrVtc/1987-adjusting-9.jpg"
                    alt="mom and uncle, 1986"
                    style={{
                        margin:'10px',
                        display:'block',
                        width:'40%',
                        maxHeight:'300px',
                        objectFit:'cover',
                        float:'right'
                    }}
                />
                <p>profesor Jerzy Janik z Uniwersytetu Jagiellońskiego w Krakowie.</p>
                <br/>
                <p>Polska bardzo się zmieniła. Babcia również. Przyjechała z niewielkim stypendium rządowym, kilkoma podręcznikami i dwójką dzieci ubranych w płaszczyki zbyt cienkie na ostrą polską zimę.</p>
                <br/>
                <p>W Polsce wciąż funkcjonował komunistyczny system racjonowania: kartki na żywność, które pozwalały na zakup mniej niż 2 kg mięsa miesięcznie. Każdy posiłek wymagał strategii. Każdy dzień hartował wytrwałość.</p>
            </>
        )
    },

    {   page:"25",
        header:false,
        headerContent:"",
        content:(
            <>
                <img
                    src="https://i.postimg.cc/GhGNrgrz/1987-adjusting-14.jpg"
                    alt="Mom and uncle"
                    style = {{
                        display:'block',
                        margin:'8px auto',
                        width:'60%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">Moja Mama (po lewej) i mój Wujek (po prawej), 1986</p>
                <p className = "indent">Na początku Babcia postanowiła zostawić moja Mamę i Wujka w domu. Bała się, że nie znając języka, będą się czuli zagubieni. Ale w Polsce prawa dziecka były traktowane poważnie. Jej polscy koledzy z pracy namawiali ją, aby posłała dzieci do szkoły.</p>
                <p className="indent">I tak się stało. Moja Mama została pierwszą nastolatką w 600-letniej historii Uniwersytetu Jagiellońskiego, która uczestniczyła w wykładach. Pomimo, że nie mówili po polsku. Ale to nie miało znaczenia. „Có câu toán nào là cứ dơ tay đi,” tłumaczyła im moja Babcia — Jeśli jest zadanie z matematyki, podnieście rękę do góry.</p>
            </>
        )
    },

    {   page:"26",
        header:false,
        headerContent:"",
        content:(
            <>
                <p className="indent">Chociaż przekonywała ich, że mają być w klasie odważni i asertywni, ale prawda była taka, że zupełnie nie miała moja Babcia czasu na to, żeby ich czegokolwiek uczyć. Między badaniami doktoranckimi a codzienną walką o przetrwanie rodziny, była nieustannie przeciążona. To Wujek i Mama sami wyszli z inicjatywą samodzielnej nauki. Sami nauczyli się polskiego, ślęczeli nad podręcznikami, opanowywali matematykę na własną rękę. Moja Babcia nawet nie miała pojęcia, że brali udział w olimpiadach i konkursach, dopóki pewnego razu nie pojawili się w domu z nagrodami.</p>
                <p className = "indent">Mój wujek zajął 2 miejsce w olimpiadzie matematycznej, a moja Mama 3-cie. Sąsiedzi zaczęli plotkować cichaczem o genialnym wietnamskim rodzeństwie.</p>
                <img
                    src="https://i.postimg.cc/bYWxLq7F/1987-adjustin.jpg"
                    alt="Viet and Mom and the neighbors"
                    style = {{
                        display:'block',
                        margin:'8px auto',
                        width:'60%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
            </>
        )
    },

    {   page:"27",
        header:false,
        headerContent:"",
        content:(
            <> 
                <p className="indent">Tymczasem Babcia pracowała w trudnych, często niebezpiecznych warunkach laboratoryjnych. Jej praca doktorska, „Wpływ niektórych czynników na przemianę fazy CSH” była istotna dla zrozumienia zjawiska korozji metalu w konstrukcjach betonowych, takich jak mosty.</p>
                <p className = "indent">To wymagało ciągłej pracy z reaktywnymi czynnikami chemicznymi, czasem z izotopami, w słabo wentylowanych laboratoriach. Zdarzało się, że robiło jej się słabo, niemal traciła przytomności. Wychodziła na zewnątrz, by złapać oddech,  lecz zamiast ulgi uderzał ją lodowaty krakowski wiatr. Ta zimna, wietrzna krakowska zima osłabiało jej ciało, a chemikalia jeszcze bardziej.</p>
                <p className="indent">Ale jej praca była zbyt ważna, by ją ignorować. Polski rząd zaprzysiągł ją jako obywatelką Polskiej Rzeczpospolitej Ludowej, mogła więc zostać w Polsce i kontynuować badania. Zagraniczna naukowczyni stała się narodowym skarbem.</p>
            </>
        )
    },

    {   page:"28",
        header:false,
        headerContent:"",
        content:(
            <>
                <img
                    src="https://i.postimg.cc/RhWby9LV/IMG-1620.jpg"
                    alt="Grandma PhD Defense"
                    style={{
                        display:'block',
                        margin:'8px auto',
                        width: '70%', 
                        maxHeight: '300px',
                        objectFit: 'cover',
                    }}
                />
                <p className = "photo-caption">Obrony pracy doktorskiej mojej Babci (Warszawa, 1991)</p>
                <br/>
                <img
                    src="https://i.postimg.cc/q7twpQCj/IMG-1623.jpg" 
                    alt="Being sworn in a citizen"
                    style={{
                        display:'block',
                        margin:'8px auto',
                        width: '70%', 
                        maxHeight: '300px',
                        objectFit: 'cover',
                    }}
                />
                <p className = "photo-caption">Nadanie mojej Babci obywatelstwa polskiego</p>
            </>
        )
    },

    {   page: "29",
        header:false,
        headerContent:"",
        content:(
            <>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px', 
                    margin: '8px auto',
                    width: '100%', 
                }}>
                    <img
                        src="https://i.postimg.cc/prW7rnj0/IMG-1589.jpg" 
                        alt="Being sworn in a citizen"
                        style={{
                            width: '50%', 
                            maxHeight: '300px',
                            objectFit: 'cover',
                        }}
                    />
                    <img
                        src="https://i.postimg.cc/rpJVFCXR/IMG-1619.jpg"
                        alt="Newly PhD"
                        style={{
                            width: '50%', 
                            maxHeight: '300px',
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <p className = "photo-caption"> Nowy oficjalny tytuł Babci: dr. nauk. Nguyễn Thị Thoa (Warszawa, 1991)</p>
                <br/>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px', 
                    margin: '8px auto',
                    width: '100%', 
                }}>
                    <img
                        src="https://i.postimg.cc/dt76BBJ2/dissertation-page.jpg" 
                        alt="Grandma's dissertation frontpage"
                        style={{
                            width: '38%', 
                            maxHeight: '300px',
                            objectFit: 'cover',
                        }}
                    />
                    <img
                        src="https://i.postimg.cc/1t9BhPs1/article.jpg"
                        alt="Grandma's news article"
                        style={{
                            width: '38%', 
                            maxHeight: '300px',
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <p className = "photo-caption" style = {{ textAlign: 'left' }}>Strona tytułowa pracy doktorskiej mojej Babci (po lewej). Artykuł opisujący obronę doktoratu mojej Babci (po prawej).</p>
            </>
        )
    },    

    {   page:"30",
        header:false,
        headerContent:"",
        content:(
            <>
                <p className="indent">W 1991 roku, kiedy nastąpiły w Polsce znaczące zmiany polityczne, cała rodzina przeniosła się do Warszawy. W 1989 roku upadł w Polsce komunizm. Lata 90-te były bardzo chaotyczne, ale pełen możliwości. Babcia dostrzegła tą szansę.</p>
                <p className="indent">W dalszym ciągu kontynuowała pracę naukową, ale równocześnie zaangażowała się w handel międzynarodowy. Zaczęło się od wysyłania kilku sztuk ubrań do Wietnamu na sprzedaż, a szybko przerodziło się to w coś większego. Wkrótce importowała kontenery z jeansami z Tajlandii i eksportowała komputery do Rosji. Poruszała się po szlakach handlowych czasów postkomunistycznych. Budowała relacje z dostawcami. Uczyła się kodów celnych i zagranicznej logistyki transportowej. Robiła to wszystko sama. Zapewniła i zabezpieczyła rodzinie prawdziwe źródło utrzymania finansowego.</p>
                <p className="indent">Pod koniec lat 90-tych dziedzictwo, o które walczyła babcia, zaczęło przynosić wymierne owoce. W 1998 roku przeprowadzili się do nowego domu w Warszawie. Moja Mama i Wujek rozpoczęli naukę w Liceum</p>
            </>
        )
    },

    {   page: "31",
        header: false,
        headerContent:"",
        content:(
            <>
                <img
                    src="https://i.postimg.cc/nczmYcYN/1998-new-home-in-Warsaw.jpg"
                    alt="New home WAW 1998"
                    style = {{
                        display:'block',
                        margin:'8px auto',
                        width:'70%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">My family's newly moved in home in Warsaw (1998)</p>
                <br/>
                <p>St.Staszica, jednym z najlepiej notowanych szkół średnich o profilu ścisłym w Polsce. Rok później mój Wujek pojechał na wycieczkę rodzinną do Stanach. Dla zabawy przystąpił do testu SAT (test stosowane do przyjęć na amerykańskie uczelnie wyższe) — i uzyskał wynik idealny. Wkrótce otrzymał pełne stypendium.</p>
                <p className="indent">Skorzystał z tej możliwości i został w Ameryce, uzyskując licencjat a potem magistra z inżynierii finansowej na prestiżowym Columbia University. A następnie dostał pracę w Nowym Jorku i pracował w Goldman Sachsie i Deutsche Banku.</p> 
            </>
        )
    },

    {   page:"32",
        header:false,
        headerContent:"",
        content:(
            <>
                <p className="indent">Moja Mama zdobyła licencjat i magistra w zakresie finansów i bankowości, kończąc z wyróżnieniem Szkołę Główną Handlową, najlepszą uczelnię ekonomiczną w Polsce. Po studiach, otrzymała pracę w Narodowym Banku Polskim, co było ewenementem dla osób zaraz po studiach.</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px', 
                    margin: '8px auto',
                    width: '100%', 
                }}>
                    <img
                        src="https://i.postimg.cc/bJfyrL3q/1999-mom-defending-masters-graduating-top-in-SGH.jpg" 
                        alt="Mom's Master's Defense"
                        style={{
                            width: '38%', 
                            maxHeight: '300px',
                            objectFit: 'cover',
                        }}
                    />
                    <img
                        src="https://i.postimg.cc/5tLJhL1T/2002-columbia-dorm-fun.jpg"
                        alt="Grandma and Uncle @ Columbia"
                        style={{
                            width: '38%', 
                            maxHeight: '300px',
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <p className = "photo-caption" style = {{ textAlign: 'left' }}>Moja Mama podczas obrony pracy magisterskiej na SGH (po lewej). Moja Babcia z moim Wujkiem w akademiku na Columbia University (po prawej).</p>
                <p className="indent">Dziedzictwo mojej babci nie odzwierciedlała się tylko w mostach zaprojektowanych dzięki jej badaniom, lub w domach, które wybudowała dla swojej rodziny</p>
            </>
        )
    },

    {   page: "33",
        header:false,
        headerContent:"",
        content:(
            <>
                <p> — ale przede wszystkim w jej niezłomnej determinacji, którą posiadała i przekazała. Przez cały ten czas, mimo wszystkich wyzwań, babcia cicho toczyła także walkę z rakiem. Lata pracy z chemikaliami w laboratorium zebrały swoje żniwa w postaci choroby. Babcia przeszła sześć operacji i zwalczyła raka trzykrotnie. Jej blizny są głębokie, ale jej determinacja i siła znacznie głębsze. Moja Babcia to nie tylko wybitny naukowiec. Nie tylko wspaniała matka. Nie tylko kobieta, która wbrew przeciwnościom losu przetrwała. Jest kobietą, która przekroczyła wszystkie granice, przeżyła zmieniające się reżimy i przekształciła przyszłość. Zrobiła to nie tylko dla siebie. Zrobiła to dla nas wszystkich.</p>
                <img
                    src="https://i.postimg.cc/x8KtYjq0/year-unknown-grandma-first-lady-Kwasniewska-cancer-fundraiser-for-Klub-Amazonek.jpg"
                    alt="Grandma and First Lady of Poland @ Charity Fundraiser Event"
                    style = {{
                        display:'block',
                        margin:'8px auto',
                        width:'55%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">Moja Babcia (po prawej) z Pierwszą Damą Polski (po lewej),</p>
                <p className = "photo-caption">Jolantą Kwaśniewską, podczas wydarzenia charytatywnego.</p>
            </>
        )
    },

    {   page:"34",
        header:true,
        headerContent:"Epilog",
        content:(
            <>
                <img
                    src="https://i.postimg.cc/nr2pdDB7/F4801-DD3-58-F9-4-D55-89-BC-04-C66-D52712-C-1-105-c.jpg"
                    alt="4 grandchildren"
                    style = {{
                        display:'block',
                        margin:'8px auto',
                        width:'80%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">Ja (skrajnie po lewej), moi kuzyni i nasza Babcia (w środku)</p>
                <p className="indent">Moja Babcia jest dziś szczęśliwą babcią czwórki wnucząt — dwóch dziewczynek i dwóch chłopców. Ja jestem najstarszy z nich i autorem tej książki.</p>
                <p className="indent">Tworzę tę książkę nie tylko jako wnuk, ale jako świadek całkiem sporej części jej życia. Podróż jej życia nie powinna być zapomniana — ona tchnęła w nas jej cząstkę, w nas wszystkich, którzy są jej częścią i ta cząstka jej przeszłości powędruje z nami w przyszłość.</p>
            </>
        )
    },

    {   page:"35",
        header:false,
        headerContent:"",
        content:(
            <>
                <p className = "indent">Co daje siłę aby przetrwać: wojnę,wygnanie, chorobę? W przypadku mojej Babci to: wytrzymałość i siła.</p>
                <br/>
                <p>Siła do budowania, nauki i ochrony.</p>
                <p>Siła, aby uwolnić Bawoła.</p>
                <p>Siła, aby nauczyć dzieciom podnosić rękę.</p>
                <p>By przepisać swój los — nie tylko raz, ale wiele razy.</p>
                <p className="indent">Rozpoczęła swoją drogę w bunkrze, dokonała zmian w strukturze budowy mostów, stała się nie tylko Obywatelką Polski, ale wytrzymałości, odwagi i siły.</p>
                <p className="indent">W 2017 roku moja Babcia wzięła udział w spotkaniu z okazji 50-tej rocznicy ukończenia studiów, razem ze swoimi kolegami z rocznika 1967. Niestety tylko połowa z nich pozostała, choć pamięć o ci którzy już odeszli była obecna, a ich nieobecność odczuwalna. Byłem tam razem z nią i poruszyło mnie to w sposób, którego się nie spodziewałem. Zobaczyłem jak głębokie mogą być więzy przyjaźni, nawet po upływie pięćdziesięciu lat. Zacząłem się zastanawiać, czy ja sam kiedyś zdołym</p>
            </>
        )
    },

    {   page: "36",
        header: false,
        headerContent:"",
        content: (
            <>
                <p>zachować przyjaźnie tak silne, tak zakorzenione, tak niewzruszone. Tego dnia zobaczyłem coś niezwykłego w życiu: siłę wspólnego czasu, wspólnej walki, wspólnej nadziei.</p>
                <p className="indent">Historia mojej Babci nie zakończyła się tylko przetrwaniem życia, stała się fundamentem — cichym, niewzruszonym dziedzictwem, które dało nam wszystkim miejsce, na którym możemy stanąć, i siłę, by się podnieść. Czas może zniszczyć budynki i powyginać stal, ale ważna jest miłość, pamięć i wytrzymałość.</p>
                <p className="indent">Na podstawie życia mojej Babci zobaczyłem, co znaczy nie tylko przetrwać historię — ale ją stworzyć.</p>
                <img
                    src="https://i.postimg.cc/sxr5Yt4x/2017-krakow-reunion-from-1967.jpg"
                    alt="50 year reunion"
                    style = {{
                        display:'block',
                        margin:'8px auto',
                        width:'55%',
                        maxHeight:'300px',
                        objectFit:'cover'
                    }}
                />
                <p className = "photo-caption">50-tej rocznicy ukończenia studiów mojej Babci (1967 - 2017)</p>
            </>
        )
    }
]

export default pages;