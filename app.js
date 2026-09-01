
const data = window.NOVA_DATA;
const $ = s => document.querySelector(s);
let currentPage = 1, zoom = 1;

$("#offenseCount").textContent = data.reduce((n,c)=>n+c.items.length,0);

function navRender(filter=""){
  const q=filter.trim().toLowerCase();
  $("#chapterNav").innerHTML = data.filter(c => !q || (c.title+" "+c.desc+" "+c.items.map(x=>x.join(" ")).join(" ")).toLowerCase().includes(q))
    .map(c=>`<button data-id="${c.id}"><b>${c.num}</b> · ${c.title}</button>`).join("");
  $("#chapterNav").querySelectorAll("button").forEach(b=>b.onclick=()=>showChapter(b.dataset.id));
}
function gridRender(filter=""){
  const q=filter.trim().toLowerCase();
  const list=data.filter(c => !q || (c.title+" "+c.desc+" "+c.items.map(x=>x.join(" ")).join(" ")).toLowerCase().includes(q));
  $("#chapterGrid").innerHTML=list.map(c=>`
    <article class="chapter-card" data-id="${c.id}">
      <div class="chapter-number">CAPÍTULO ${c.num}</div>
      <h3>${c.title}</h3><p>${c.desc}</p>
      <span class="count">${c.items.length} infracciones · página ${c.page}</span>
    </article>`).join("") || `<p style="color:var(--muted)">No se encontraron resultados.</p>`;
  $("#chapterGrid").querySelectorAll(".chapter-card").forEach(x=>x.onclick=()=>showChapter(x.dataset.id));
}
function showChapter(id){
  const c=data.find(x=>x.id===id); if(!c)return;
  $("#detailTitle").textContent=`Capítulo ${c.num} · ${c.title}`;
  $("#detailDesc").textContent=c.desc;
  $("#pdfPageLink").href=`docs/codigo-penal.pdf#page=${c.page}`;
  $("#detailItems").innerHTML=c.items.map((x,i)=>`
    <details class="offense">
      <summary><span class="offense-title">${String(i+1).padStart(2,"0")} · ${x[0]}</span><span class="chev">›</span></summary>
      <div class="offense-body"><div>${x[1]}</div><div class="sanction"><span class="pill money">💶 ${x[2]}</span><span class="pill">⏱ ${x[3]}</span></div></div>
    </details>`).join("");
  document.querySelectorAll(".chapter-nav button").forEach(b=>b.classList.toggle("active",b.dataset.id===id));
  setPage(c.page); location.hash=id;
  $("#detail").scrollIntoView({behavior:"smooth",block:"start"});
}
function setPage(n){currentPage=Math.max(1,Math.min(8,n));$("#pdfPageImg").src=`assets/pages/page-${currentPage}.webp`;$("#pdfPageImg").alt=`Página ${currentPage} del Código Penal`;$("#pageLabel").textContent=`Página ${currentPage} / 8`;}
function applyZoom(){ $("#pdfPageImg").style.transform=`scale(${zoom})`; }
$("#prevPage").onclick=()=>setPage(currentPage-1);
$("#nextPage").onclick=()=>setPage(currentPage+1);
$("#zoomOut").onclick=()=>{zoom=Math.max(.6,zoom-.1);applyZoom()};
$("#zoomIn").onclick=()=>{zoom=Math.min(2,zoom+.1);applyZoom()};
$("#fullscreen").onclick=()=>$("#viewerFrame").requestFullscreen?.();
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")setPage(currentPage+1);if(e.key==="ArrowLeft")setPage(currentPage-1);if(e.key==="+"){zoom=Math.min(2,zoom+.1);applyZoom()}if(e.key==="-"){zoom=Math.max(.6,zoom-.1);applyZoom()}});
$("#searchInput").addEventListener("input",e=>{gridRender(e.target.value);navRender(e.target.value)});
$("#clearSearch").onclick=()=>{$("#searchInput").value="";gridRender();navRender();};
$("#startBtn").onclick=()=>$("#chapters").scrollIntoView({behavior:"smooth"});
$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");
$("#themeBtn").onclick=()=>{document.body.classList.toggle("light");localStorage.setItem("nova-theme",document.body.classList.contains("light")?"light":"dark")};
if(localStorage.getItem("nova-theme")==="light")document.body.classList.add("light");

navRender();gridRender();
const hash=location.hash.slice(1);
if(hash && data.some(c=>c.id===hash)) showChapter(hash);
else showChapter(data[0].id);
