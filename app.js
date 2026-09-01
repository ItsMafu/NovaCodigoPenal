const data = window.NOVA_DATA;
const $ = s => document.querySelector(s);
let selectedChapter = null;

$("#offenseCount").textContent = data.reduce((n,c)=>n+c.items.length,0);

function matches(c, q){
  return !q || (c.title+" "+c.desc+" "+c.items.map(x=>x.join(" ")).join(" ")).toLowerCase().includes(q);
}

function navRender(filter=""){
  const q=filter.trim().toLowerCase();
  $("#chapterNav").innerHTML = data.filter(c=>matches(c,q))
    .map(c=>`<button data-id="${c.id}"><b>${c.num}</b> · ${c.title}</button>`).join("");
  $("#chapterNav").querySelectorAll("button").forEach(b=>b.onclick=()=>showChapter(b.dataset.id));
  if(selectedChapter) setActive(selectedChapter);
}

function gridRender(filter=""){
  const q=filter.trim().toLowerCase();
  const list=data.filter(c=>matches(c,q));
  $("#chapterGrid").innerHTML=list.map(c=>`
    <article class="chapter-card" data-id="${c.id}" tabindex="0" role="button" aria-label="Abrir capítulo ${c.num}">
      <div class="chapter-number">CAPÍTULO ${c.num}</div>
      <h3>${c.title}</h3><p>${c.desc}</p>
      <span class="count">${c.items.length} infracciones · página ${c.page}</span>
    </article>`).join("") || `<p style="color:var(--muted)">No se encontraron resultados.</p>`;
  $("#chapterGrid").querySelectorAll(".chapter-card").forEach(x=>{
    x.onclick=()=>showChapter(x.dataset.id);
    x.onkeydown=e=>{if(e.key==='Enter'||e.key===' ') {e.preventDefault();showChapter(x.dataset.id)}};
  });
}

function setActive(id){
  document.querySelectorAll(".chapter-nav button").forEach(b=>b.classList.toggle("active",b.dataset.id===id));
}

function showChapter(id){
  const c=data.find(x=>x.id===id); if(!c)return;
  selectedChapter=id;
  $("#detailTitle").textContent=`Capítulo ${c.num} · ${c.title}`;
  $("#detailDesc").textContent=c.desc;
  $("#detailItems").innerHTML=c.items.map((x,i)=>`
    <details class="offense">
      <summary><span class="offense-title">${String(i+1).padStart(2,"0")} · ${x[0]}</span><span class="chev">›</span></summary>
      <div class="offense-body"><div>${x[1]}</div><div class="sanction"><span class="pill money">💶 ${x[2]}</span><span class="pill">⏱ ${x[3]}</span></div></div>
    </details>`).join("");
  setActive(id);
  location.hash=id;
  $("#detail").scrollIntoView({behavior:"smooth",block:"start"});
}

$("#openPdfBtn").onclick=()=>window.open("docs/codigo-penal.pdf", "_blank", "noopener");

$("#searchInput").addEventListener("input",e=>{gridRender(e.target.value);navRender(e.target.value)});
$("#clearSearch").onclick=()=>{$("#searchInput").value="";gridRender();navRender();};
$("#startBtn").onclick=()=>$("#chapters").scrollIntoView({behavior:"smooth"});
$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");
$("#themeBtn").onclick=()=>{document.body.classList.toggle("light");localStorage.setItem("nova-theme",document.body.classList.contains("light")?"light":"dark")};
if(localStorage.getItem("nova-theme")==="light")document.body.classList.add("light");

document.addEventListener("click",e=>{
  if(window.innerWidth<=900 && e.target.closest(".chapter-nav button")) $("#sidebar").classList.remove("open");
});

navRender();gridRender();
const hash=location.hash.slice(1);
if(hash && data.some(c=>c.id===hash)) showChapter(hash);
else showChapter(data[0].id);
