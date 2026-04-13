import woodTexture from "@/assets/wood-texture-1.jpg";
import workshopInterior from "@/assets/workshop-interior.jpg";
import craftingHands from "@/assets/crafting-hands.jpg";
import productBowl from "@/assets/product-bowl.jpg";
import productTable from "@/assets/product-table.jpg";
import heroWorkshop from "@/assets/hero-workshop.jpg";

export interface BlogPost {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featured?: boolean;
  author: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    image: woodTexture,
    category: "Filozofija",
    title: "Jezik teksture drveta",
    excerpt: "Razumijevanje priča koje svaki komad drveta priča kroz svoje jedinstvene šare i kako učimo da ih čitamo.",
    date: "Januar 2026",
    slug: "jezik-teksture-drveta",
    featured: true,
    author: "Marko Petrović",
    readTime: "5 min čitanja",
    content: `Svaki komad drveta nosi u sebi priču. Godovi koji se nižu poput stranica knjige govore o godinama kiše i suše, o vjetrovima koji su oblikovali stablo, o suncu koje ga je hranilo.

Kada uzmem komad hrastovine u ruke, prsti prepoznaju ono što oči tek naslućuju — teksturu koja govori o karakteru drveta. Široki godovi otkrivaju godine blagosti, uski svjedoče o sušama i iskušenjima. Svaka čvoruga je ožiljak, svaka šara je otisak vremena.

## Čitanje priče

Naučiti čitati drvo znači naučiti slušati. Ne radi se samo o tome da prepoznamo vrstu — hrast, orah, jasen — već da razumijemo kako je svako stablo raslo, kakav je bio njegov život.

Drvo iz šume na sjevernoj padini planine ima drugačiji karakter od onog koje je raslo na sunčanoj ravnici. Prvo je gušće, tvrđe, sa uskim godovima koji svjedoče o sporom, upornom rastu. Drugo je mekše, toplije, sa širim šarama koje govore o obilatom suncu i kiši.

## Poštovanje materijala

Kada radim sa komadima drveta, trudim se da sačuvam njihovu priču. Ne namećem formu — slušam šta mi drvo govori. Ponekad čvoruga koja bi se mogla sakriti postaje centralni element dizajna, jer upravo ona daje komadu karakter i jedinstvenost.

Najljepši predmeti nastaju kada se zanatlija i materijal slože, kada forma prati prirodnu strukturu drveta umjesto da joj se suprotstavlja.

## Veza između prošlosti i budućnosti

Stol koji izrađujem od hrasta starog dvjesta godina nosi u sebi dva vijeka historije. Kada porodica sjedi oko tog stola, oni dijele prostor sa svim onim godinama rasta, sa svim zimama i ljetima koja su oblikovala drvo.

To je ljepota ručnog zanata — ne stvaramo samo predmete, već prenosimo priče iz jednog oblika u drugi, iz šume u dom, iz prirode u svakodnevni život.`,
  },
  {
    image: workshopInterior,
    category: "Iza scene",
    title: "Dan u radionici",
    excerpt: "Ritam ručnog zanata—od prvog svjetla zore do posljednjeg poliranja dana.",
    date: "Januar 2026",
    slug: "dan-u-radionici",
    author: "Marko Petrović",
    readTime: "4 min čitanja",
    content: `Radionica se budi prije mene. Kada otvorim vrata u rano jutro, miris drveta me dočeka kao stari prijatelj — mješavina svježeg hrasta, cedrovine i lanenog ulja koja se taložila godinama.

Prvo što uradim je otvoriti prozore. Svježi zrak se miješa sa mirisom radionice i stvara atmosferu koja me odmah stavlja u radni ritam. Zatim pregledam alate — svaki mora biti na svom mjestu, svaki mora biti oštar i spreman.

## Jutarnji ritual

Prije nego što počnem raditi, provodim vrijeme sa materijalima. Pregledam komade drveta koji čekaju, opipam njihovu teksturu, razmišljam o tome šta će postati. Ovaj tihi ritual je jednako važan kao i samo oblikovanje.

Kafa je, naravno, dio procesa. Ali ne žurim s njom — pijem je dok gledam kako jutarnje sunce pada na radni stol, osvjetljavajući čestice drvene prašine koje lebde u zraku poput sitnih zvijezda.

## Rad sa strpljenjem

Najveći dio dana prolazi u tišini. Samo zvuk dlijeta, blanje ili brusnog papira ispunjava prostor. Ponekad upalim radio, ali češće radim u tišini — ona mi pomaže da se koncentrišem na materijal i da osjetim svaki pokret alata.

Ručni zanat ne trpi žurbu. Svaki rez mora biti promišljen, svaki potez precizan. Greška na drvetu se ne može poništiti kao na ekranu — to me uči odgovornosti i prisutnosti u svakom trenutku.

## Kraj dana

Kada se sunce spusti, pospravljam alate i čistim radni prostor. Posljednje poliranje dana — ne predmeta, već samog stola — je ritual koji zatvara krug. Radionica se vraća u tišinu, čekajući novo jutro i nove priče.`,
  },
  {
    image: craftingHands,
    category: "Održivost",
    title: "Poštovanje ritma prirode",
    excerpt: "Zašto su sporo zanatstvo i održivost neodvojive vrijednosti u našoj praksi.",
    date: "Decembar 2025",
    slug: "postovanje-ritma-prirode",
    author: "Marko Petrović",
    readTime: "6 min čitanja",
    content: `U vremenu masovne proizvodnje i instant rezultata, odluka da se radi sporo djeluje gotovo buntovnički. Ali sporost u zanatu nije lijenost — to je poštovanje prema materijalu, prema procesu, prema krajnjem rezultatu.

Drvo raste sporo. Hrast kojem ćemo oblikovati ploču stola rastao je pedeset, sto, možda i dvjesta godina. Zar ne zaslužuje da se sa njim radi s jednakim strpljenjem?

## Održivost kao filozofija

Za nas, održivost nije marketinški slogan. To je način na koji razumijemo svoj odnos sa prirodom. Svaki komad drveta koji uđe u našu radionicu ima porijeklo koje možemo pratiti — znamo iz koje šume dolazi, kako je posječen, koliko dugo se sušio.

Radimo isključivo sa drvetom iz održivih izvora. To znači da za svako posječeno stablo bude zasađeno novo, da se poštuju ciklusi rasta, da se šuma tretira kao živi organizam, a ne kao resurs za eksploataciju.

## Nula otpada

U našoj radionici ne postoji otpad. Veći komadi koji ostanu od velikih projekata postaju manji predmeti — posude, okviri, ručke. Piljevina se koristi za kompostiranje ili kao materijal za pakovanje. Čak i najsitniji ostaci nalaze svoju svrhu.

Ova filozofija zahtijeva kreativnost i planiranje, ali rezultat je osjećaj cjelovitosti — znanje da ništa nije bačeno, da je svaki dio materijala pronašao svoju namjenu.

## Dugovječnost umjesto zamjenjivosti

Najveći doprinos održivosti je stvaranje predmeta koji traju. Komad namještaja koji služi generacijama zamjenjuje desetke jeftinih proizvoda koji završe na deponiji. Kvaliteta je, u konačnici, najodržljiviji izbor.`,
  },
  {
    image: productBowl,
    category: "Proces izrade",
    title: "Umjetnost struganja drveta",
    excerpt: "Meditativna praksa koja pretvara sirovu građu u tečne, organske forme.",
    date: "Decembar 2025",
    slug: "umjetnost-struganja-drveta",
    author: "Marko Petrović",
    readTime: "5 min čitanja",
    content: `Struganje drveta je možda najintimniji oblik rada sa ovim materijalom. Dok dlijeto skida sloj po sloj, forma se polako otkriva — kao da je predmet oduvijek bio skriven unutar komada drveta, čekajući da ga oslobodimo.

Proces počinje odabirom pravog komada. Za posude i zdjelice tražim drvo sa zanimljivom teksturom, ali bez pukotina ili oštećenja koja bi ugrozila strukturu. Orah je moj omiljeni izbor — njegove tamne šare i topla boja stvaraju predmete koji su istovremeno funkcionalni i skulpturalni.

## Meditacija u pokretu

Kada počnem strugati, ulazim u stanje potpune koncentracije. Svaki pokret dlijeta zahtijeva preciznost i kontrolu, ali istovremeno mora biti fluidan i prirodan. To je paradoks koji se rješava samo praksom — godinama ponavljanja istih pokreta dok ne postanu dio tijela.

Zvuk struganja je hipnotičan. Ritmično šuštanje oštrice po drvetu stvara melodiju koja me vodi kroz proces. Ponekad zatvorim oči i pustim da ruke same pronađu put — one poznaju drvo bolje nego što ga oči mogu vidjeti.

## Od sirovog ka uglačanom

Najzadovoljniji trenutak dolazi na kraju, kada gruba forma prođe kroz faze brušenja — od grubog ka finom — i površina postane glatka poput svile. Pod prstima osjetite toplinu drveta, njegovu živost, njegovu priču. Posljednji sloj ulja otkriva boje i šare u punom sjaju.

Svaka posuda je jedinstvena. Čak i kada radim seriju, svaki komad ima svoj karakter, svoju priču, svoju ljepotu. To je dar ručnog zanata — nemogućnost ponavljanja.`,
  },
  {
    image: productTable,
    category: "Filozofija",
    title: "Stolovi koji okupljaju",
    excerpt: "O dizajniranju namještaja koji postaje srce porodičnog života i razgovora.",
    date: "Novembar 2025",
    slug: "stolovi-koji-okupljaju",
    author: "Marko Petrović",
    readTime: "4 min čitanja",
    content: `Stol je više od komada namještaja. To je mjesto gdje se porodica okuplja, gdje se dijele obroci i priče, gdje djeca crtaju a odrasli razgovaraju. Dobar stol nije samo funkcionalan — on stvara prostor za povezivanje.

Kada dizajniram stol, ne razmišljam samo o dimenzijama i materijalima. Razmišljam o ljudima koji će sjediti oko njega, o razgovorima koji će se voditi, o sjećanjima koja će se stvarati.

## Oblik koji poziva

Okrugli stolovi pozivaju na jednakost — nema čela stola, svi su jednaki. Pravougaoni stolovi definišu hijerarhiju, ali stvaraju osjećaj reda i formalnosti. Ovalni stolovi kombinuju najbolje od oba — pozivaju na intimnost, ali nude dovoljno prostora.

Svaki oblik ima svoju svrhu i svoju energiju. Moj posao je da razumijem kakav život će se odvijati oko tog stola i da oblik prati tu namjenu.

## Detalji koji se osjećaju

Rub stola je mjesto gdje se ruke najčešće odmaraju. Zato mu posvećujem posebnu pažnju — zaobljen, gladak, ugodan na dodir. Noge stola moraju biti čvrste ali elegantne, dovoljno stabilne da izdrže generacije korištenja, ali dovoljno lijepe da ne budu samo konstrukcija.

Površina stola treba da poziva na dodir. Drvo koje je pravilno obrađeno i nauljeno ima toplinu koju nijedan drugi materijal ne može ponuditi. To je toplina koja poziva ljude da sjednu, ostanu i dijele trenutke zajedno.`,
  },
  {
    image: heroWorkshop,
    category: "Iza scene",
    title: "Alati zanata",
    excerpt: "Ručni alati prenošeni kroz generacije i njihova nezamjenjiva uloga.",
    date: "Novembar 2025",
    slug: "alati-zanata",
    author: "Marko Petrović",
    readTime: "5 min čitanja",
    content: `Svaki alat u mojoj radionici ima svoju historiju. Neki su kupljeni novi, ali većina je naslijeđena — od oca, od učitelja, od kolega zanatlija koji su otišli u penziju. Svaki nosi u sebi znanje i iskustvo onih koji su ga koristili prije mene.

Dlijeto koje najčešće koristim pripada mom djedu. Čelično sječivo je brušeno stotine puta i postalo tanje nego što je bilo originalno, ali je zato savršeno uravnoteženo, prilagođeno godinama korištenja. Drvena ručka je tamna od znoja i ulja, uglačana dlanovima tri generacije.

## Ručni vs. električni alati

U mojoj radionici ima i električnih alata — bilo bi nepraktično raditi bez njih. Ali za završne radove, za detalje koji definišu karakter predmeta, uvijek se vraćam ručnim alatima. Razlog je jednostavan: ručni alat vam daje kontrolu i povratnu informaciju koju električni ne može.

Kada radim blanjom, osjetim svaku promjenu u strukturi drveta. Blanja mi govori gdje je drvo tvrđe, gdje je mekše, gdje trebam promijeniti smjer. Ta komunikacija između alata, ruke i materijala je suština zanata.

## Briga o alatima

Alat zahtijeva brigu. Oštrenje je ritual koji obavljam redovno — tup alat nije samo neefikasan, već je i opasan. Proces oštrenja je meditativan: ritmično kretanje oštrice po kamenu za brušenje, provjera uglova, testiranje oštrine na komadu drveta.

Dobro održavan alat može trajati vijekovima. To je još jedna lekcija koju nam zanat uči — briga i poštovanje produžavaju život svemu, od alata do odnosa.`,
  },
];
