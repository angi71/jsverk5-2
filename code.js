document.querySelector("#container").innerHTML = "<h1>Árbjartur angi</h1>";

const container = document.querySelector("#container");

const bord = document.createElement("div");
bord.style.border = "solid black";

const verk = document.createElement("h2");
verk.textContent = "Verkefni 5.1";

const listi = document.createElement("ol");
listi.type = "a";

const aSpurn = document.createElement("li");
aSpurn.setAttribute('style', 'white-space: pre;');
aSpurn.textContent="Afhverju er getElementById() fljótleglegasta aðferðin?\r\n";
aSpurn.textContent+="\r\n";
aSpurn.textContent+="Því að hún hættir um leið og hún finnur fyrst Id sem passar\r\n";
aSpurn.textContent+="\r\n";

const bSpurn = document.createElement("li");
bSpurn.setAttribute('style', 'white-space: pre;');
bSpurn.textContent="Hvað er málið með auða hnúta (e. whitespace nodes) og DOM tréið?\r\n";
bSpurn.textContent+="\r\n";
bSpurn.textContent+="DOM tréð er tré sem sýnir hvaða hlutir eru in í hverjum hluti. Auðir hnútar eru línu skiptin og þau enda líka í DOM tréinu, sem getur stundum valdið vandræðum þegar það eru lesið úr tréinu\r\n";
bSpurn.textContent+="\r\n";

const cSpurn = document.createElement("li");
cSpurn.setAttribute('style', 'white-space: pre;');
cSpurn.textContent="Hvað er static og live NodeList, hver er munurinn á NodeList og HTMLCollection?\r\n";
cSpurn.textContent+="\r\n";
cSpurn.textContent+="Static lesur bara html skjalið en live telur líka node sem hefur verið bætt með DOM. NodeList setur öll node í lista en HTMLCollection telur bara html elements\r\n";
cSpurn.textContent+="\r\n";

const dSpurn = document.createElement("li");
dSpurn.setAttribute('style', 'white-space: pre;');
dSpurn.textContent="Hvað er event í eftirfarandi kóða og hvað er gert með því?\r\n";
dSpurn.textContent+="\r\n";
dSpurn.textContent+="Eventið er set á link og látið það hlusta eftir hvort hann hefur verið smeltur á\r\n";
dSpurn.textContent+="\r\n";

const eSpurn = document.createElement("li");
eSpurn.setAttribute('style', 'white-space: pre;');
eSpurn.textContent="Af þremur leiðum til að binda event þá er AddEventListener() nýjust en afhverju er hún betri en hinar?\r\n";
eSpurn.textContent+="\r\n";

const fSpurn = document.createElement("li");
fSpurn.setAttribute('style', 'white-space: pre;');
fSpurn.textContent="Hver er munurinn á true og false í AddEventListener?\r\n";
fSpurn.textContent+="\r\n";
fSpurn.textContent+="Ef event listener er in í öðrum event listener þá getur hann farið á undan og sleppt honum ef hann er setur á true\r\n";
fSpurn.textContent+="\r\n";

const gSpurn = document.createElement("li");
gSpurn.setAttribute('style', 'white-space: pre;');
gSpurn.textContent="this vísar í Event listener á html element en ekki á object. Þú getur notað bind() til að breyta því, leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console “My name is Sam“ en ekki undefined.\r\n";
gSpurn.textContent+="\r\n";

listi.appendChild(aSpurn);
listi.appendChild(bSpurn);
listi.appendChild(cSpurn);
listi.appendChild(dSpurn);
listi.appendChild(eSpurn);
listi.appendChild(fSpurn);
listi.appendChild(gSpurn);

bord.appendChild(verk);
bord.appendChild(listi);

container.appendChild(bord);