const chapters=[
{id:1,name:'Seguridad Vial',desc:'Normas destinadas a garantizar la seguridad en las vías públicas y el correcto uso de los vehículos.',color:'violet'},
{id:2,name:'Patrimonio',desc:'Normas que protegen los bienes y derechos patrimoniales de los ciudadanos.',color:'pink'},
{id:3,name:'Libertad e Integridad Física',desc:'Normas que protegen la libertad individual y la integridad física de las personas.',color:'cyan'},
{id:4,name:'Justicia',desc:'Normas destinadas a garantizar el correcto funcionamiento de la justicia y el respeto a las autoridades.',color:'violet'},
{id:5,name:'Administración Pública',desc:'Normas que regulan la integridad, transparencia y responsabilidad en el ejercicio del servicio público.',color:'pink'},
{id:6,name:'Drogas',desc:'Normas que regulan los delitos relacionados con la producción, distribución y consumo de sustancias estupefacientes.',color:'cyan'},
{id:7,name:'Armas',desc:'Normas que regulan la posesión, uso, tráfico y fabricación de armas y explosivos.',color:'violet'}];
const articles=[
['1.01','Conducción temeraria','Conducir un vehículo realizando maniobras peligrosas que puedan poner en riesgo la integridad de otros ciudadanos o conductores.',500,0,1],
['1.02','Evasión de control','No detenerse ante un control policial o huir de un agente tras recibir la orden de alto.',450,10,1],
['1.03','Exceso de velocidad','Circular superando el límite de velocidad establecido en la vía.',250,0,1],
['1.04','Carreras ilegales','Participar, promover u organizar competiciones ilegales de velocidad en la vía pública.',1000,10,1],
['1.05','Circular semidesnudo','Circular por la vía pública con una vestimenta que incumpla la normativa del servidor o altere el orden público.',100,0,1],
['2.01','Hurto','Sustraer bienes ajenos sin emplear violencia, intimidación o fuerza sobre las personas.',400,4,2],
['2.02','Atraco a civil','Robar a un ciudadano mediante amenazas, intimidación o el uso de la fuerza.',450,7,2],
['2.03','Robo de vehículo','Sustraer o intentar sustraer un vehículo sin el consentimiento de su propietario.',1000,5,2],
['2.04','Robo a gasolinera','Asaltar una estación de servicio con el fin de obtener dinero u objetos de valor.',20000,10,2],
['2.05','Robo a joyería','Participar en el atraco a una joyería para sustraer joyas, dinero u otros bienes.',2000,15,2],
['2.06','Robo a Ammu-Nation','Asaltar una tienda de armas para obtener armamento, munición o dinero de forma ilegal.',1500,15,2],
['2.07','Robo a Fleeca','Participar en el robo a una sucursal bancaria Fleeca con el objetivo de obtener dinero o bienes de valor.',3000,18,2],
['2.08','Robo al Banco Central','Organizar o participar en el atraco al Banco Central, considerado uno de los delitos patrimoniales de mayor gravedad.',5000,25,2],
['2.09','Robo en propiedad privada','Entrar y sustraer bienes de una vivienda o propiedad privada sin autorización.',800,7,2],
['2.10','Dinero negro','Poseer, transportar u ocultar dinero procedente de actividades ilícitas.',500,5,2],
['3.01','Agresión a civil','Agredir físicamente a un ciudadano sin una causa legal que lo justifique.',100,6,3],
['3.02','Allanamiento','Acceder a una propiedad privada sin el consentimiento de su propietario.',700,8,3],
['3.03','Suplantación de identidad','Hacerse pasar por otra persona con la finalidad de engañar o beneficiarse.',1200,12,3],
['3.04','Secuestro de civil','Privar de libertad a un ciudadano mediante amenazas o violencia.',1500,15,3],
['3.05','Objetos ilícitos','Poseer objetos cuya tenencia esté prohibida por la legislación vigente.',500,5,3],
['3.06','Arma blanca','Portar un arma blanca cuando su posesión esté prohibida.',500,0,3],
['3.07','Arma ligera','Poseer o portar un arma de fuego ligera sin autorización.',600,5,3],
['3.08','Arma larga','Poseer o portar rifles o armas largas de manera ilegal.',800,10,3],
['3.09','Drogas (posesión)','Tener sustancias estupefacientes ilegales para consumo o almacenamiento.',200,4,3],
['3.10','Atentado terrorista','Llevar a cabo actos destinados a causar terror o daños masivos contra la población o las instituciones.',3500,26,3],
['4.01','Obstrucción a la justicia','Impedir o dificultar una investigación o actuación de las autoridades.',500,0,4],
['4.02','Desacato','Desobedecer de forma reiterada las órdenes legales de un agente o autoridad.',600,5,4],
['4.03','Huida de la justicia','Escapar o intentar evitar una detención o condena.',800,10,4],
['4.04','Agresión a policía','Atacar físicamente a un miembro de un cuerpo de seguridad durante el ejercicio de sus funciones.',1200,10,4],
['4.05','Amenaza a policía','Amenazar, intimidar o coaccionar a un agente de la autoridad.',500,5,4],
['4.06','Falta de respeto','Faltar gravemente al respeto a un agente durante una actuación oficial.',200,0,4],
['4.07','Invadir comisaría','Acceder sin autorización a dependencias policiales o zonas restringidas.',700,8,4],
['4.08','Secuestro o intento a un agente legal','Secuestrar o intentar secuestrar a un miembro de una facción legal o funcionario público.',3000,20,4],
['4.09','Intento de homicidio a policía','Intentar acabar con la vida de un agente de la autoridad.',3500,20,4],
['4.10','No identificarse','No identificarse cuando sea requerido legalmente por un agente.',300,0,4],
['5.01','Soborno o intento','Ofrecer, prometer o entregar dinero, bienes o cualquier beneficio a un funcionario o miembro de una facción legal para obtener trato de favor o alterar una actuación oficial.',900,5,5],
['5.02','Corrupción','Participar en actos ilícitos relacionados con el abuso de un cargo público para obtener un beneficio propio o para terceros.',5000,20,5],
['5.03','Suplantación de funcionario','Hacerse pasar por un funcionario público o miembro de una facción legal sin estar autorizado.',2000,12,5],
['5.04','Falsificación de documentos','Crear, modificar, utilizar o presentar documentos falsificados con intención de engañar a autoridades o terceros.',1000,10,5],
['6.01','Tráfico de drogas','Transportar sustancias estupefacientes con el objetivo de distribuirlas o comercializarlas de forma ilegal.',950,8,6],
['6.02','Fabricación de drogas','Elaborar, producir o procesar sustancias estupefacientes sin autorización.',2000,15,6],
['6.03','Venta de drogas','Comercializar, vender o distribuir sustancias estupefacientes de manera ilegal.',900,8,6],
['7.01','Disparos en ciudad','Realizar disparos con un arma de fuego en una zona urbana sin una causa legal o justificada, poniendo en riesgo a terceros.',600,7,7],
['7.02','Tráfico de armas','Fabricar, transportar, vender o distribuir armas de forma ilegal o sin la correspondiente autorización.',2500,15,7],
['7.03','Explosivos','Poseer, fabricar, transportar o utilizar explosivos o artefactos explosivos sin autorización, poniendo en peligro la seguridad pública.',4000,25,7]
];
const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
function level(m){return m>=16?'grave':m>=6?'media':'leve'}
function renderChapters(){ $('#chapterGrid').innerHTML=chapters.map(c=>`<article class="chapter" data-id="${c.id}"><span class="num">CAPÍTULO ${String(c.id).padStart(2,'0')}</span><h3>${c.name}</h3><p>${c.desc}</p><span class="arrow">↗</span></article>`).join(''); $$('.chapter').forEach(x=>x.onclick=()=>{ $('#search').value=''; activeChapter=+x.dataset.id; renderArticles(); location.hash='buscador';});}
let activeFilter='all',activeChapter=null;
function renderArticles(){let q=$('#search').value.toLowerCase().trim();let arr=articles.filter(a=>(!activeChapter||a[5]===activeChapter)&&(!q||(a.join(' ').toLowerCase().includes(q)))&&(activeFilter==='all'||level(a[4])===activeFilter));$('#resultCount').textContent=`${arr.length} resultado${arr.length===1?'':'s'}`;$('#articleList').innerHTML=arr.map(a=>`<article class="article" data-code="${a[0]}"><div class="article-code">${a[0]}</div><div><h4>${a[1]}</h4><p>${a[2]}</p></div><div class="sanction"><b>${a[3].toLocaleString('es-ES')}€</b><span>${a[4]} meses</span></div></article>`).join('')||'<div class="card" style="grid-column:1/-1;color:#8b8294">No se encontraron artículos. Prueba con otra búsqueda.</div>'; $$('.article').forEach(x=>x.onclick=()=>openArticle(x.dataset.code));}
function openArticle(code){const a=articles.find(x=>x[0]===code);if(!a)return;const c=chapters.find(x=>x.id===a[5]);$('#modalContent').innerHTML=`<div class="modal-code">ART. ${a[0]} · ${c.name.toUpperCase()}</div><div class="modal-title">${a[1]}</div><div class="modal-desc">${a[2]}</div><div class="modal-sanction"><div><span>MULTA</span><b>${a[3].toLocaleString('es-ES')}€</b></div><div><span>PRISIÓN</span><b>${a[4]} meses</b></div></div>`;$('#modal').classList.add('show');$('#modal').setAttribute('aria-hidden','false');}
function closeModal(){$('#modal').classList.remove('show');$('#modal').setAttribute('aria-hidden','true')}
$('#articleCount').textContent=String(articles.length).padStart(2,'0');$('#fineCount').textContent=String(articles.length).padStart(2,'0');renderChapters();renderArticles();
$('#search').oninput=()=>{activeChapter=null;renderArticles()};$$('.filter').forEach(b=>b.onclick=()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeFilter=b.dataset.filter;renderArticles()});$('#clearSearch').onclick=()=>{$('#search').value='';renderArticles();$('#search').focus()};$('#modalClose').onclick=closeModal;$('.modal-backdrop').onclick=closeModal;
$('#themeBtn').onclick=()=>document.body.classList.toggle('light');
const commands=[['Ir al código','#codigo'],['Abrir buscador','#buscador'],['Ver sanciones','#buscador'],['Abrir documento','#documento']];function renderCmd(q=''){const list=commands.filter(x=>x[0].toLowerCase().includes(q.toLowerCase()));$('#cmdItems').innerHTML=list.map(x=>`<div class="cmd-item" data-href="${x[1]}">${x[0]}</div>`).join('');$$('.cmd-item').forEach(x=>x.onclick=()=>{location.hash=x.dataset.href.slice(1);closeCommand()})}function closeCommand(){$('#command').classList.remove('show');$('#command').setAttribute('aria-hidden','true')}function openCommand(){$('#command').classList.add('show');$('#command').setAttribute('aria-hidden','false');$('#cmdInput').value='';renderCmd();setTimeout(()=>$('#cmdInput').focus(),20)}$('#cmdBtn').onclick=openCommand;$('#cmdInput').oninput=e=>renderCmd(e.target.value);$('#command').onclick=e=>{if(e.target===e.currentTarget)closeCommand()};document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCommand();closeModal()}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand()}if(e.key==='/'&&document.activeElement.tagName!=='INPUT'){e.preventDefault();$('#search').focus()}});
