/* =====================================================
   BB·TI STUDY PLATFORM v6 — MAIN SCRIPT
   Full integration: TI + PT + EN + MAT + Essay + Mock
   ===================================================== */

const DB_KEY = 'bb-ti-v6';

function defaultState() {
  return { totalXP:0,level:1,streak:0,lastStudy:null,pomodoros:0,timerLog:[],completedTopics:{},completedTasks:{},quizHistory:[],mockHistory:[],journalEntries:[],essayEntries:[],motIndex:0,weeksCompleted:0,unlockedAchievements:[],mockSelectedMode:60,questionsAnswered:0 };
}
function loadState() { try{const r=localStorage.getItem(DB_KEY);return r?{...defaultState(),...JSON.parse(r)}:defaultState();}catch(e){return defaultState();} }
function saveState(st){localStorage.setItem(DB_KEY,JSON.stringify(st));}
function updateState(fn){const s=loadState();fn(s);saveState(s);return s;}

/* ── XP ── */
function getLvData(xp){let d=LEVELS[0];for(const l of LEVELS){if(xp>=l.xp)d=l;else break;}return d;}
function getLvNext(xp){for(let i=0;i<LEVELS.length-1;i++){if(xp<LEVELS[i+1].xp)return LEVELS[i+1];}return LEVELS[LEVELS.length-1];}
function addXP(amt,label=''){
  const prev=loadState().level;
  const st=updateState(s=>{s.totalXP=(s.totalXP||0)+amt;s.level=getLvData(s.totalXP).lv;});
  floatXP(amt,label);
  if(st.level>prev){const lv=getLvData(st.totalXP);toast(`🎉 Level Up! ${lv.icon} ${lv.name}`,'level');launchConfetti();}
  checkAchievements(st);refreshXPUI(st);return st;
}
function touchStreak(){updateState(s=>{const today=new Date().toDateString();if(s.lastStudy===today)return;const y=new Date();y.setDate(y.getDate()-1);s.streak=(s.lastStudy===y.toDateString())?(s.streak||0)+1:1;s.lastStudy=today;});}

/* ── ACHIEVEMENTS ── */
function buildStats(st){
  const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];
  const topicsDone=Object.values(st.completedTopics||{}).filter(Boolean).length;
  const subPct={};
  all.forEach(sub=>{const done=sub.topics.filter((_,i)=>(st.completedTopics||{})[`${sub.id}:${i}`]).length;subPct[sub.id]=sub.topics.length?Math.round(done/sub.topics.length*100):0;});
  const bestScore=(st.mockHistory||[]).reduce((m,h)=>Math.max(m,Math.round(h.score/h.total*100)),0);
  return{topicsDone,streak:st.streak||0,pomodoros:st.pomodoros||0,level:st.level||1,totalXP:st.totalXP||0,subPct,bestScore,essays:(st.essayEntries||[]).length,questionsAnswered:st.questionsAnswered||0};
}
function checkAchievements(st){
  const stats=buildStats(st);const newOnes=[];
  ACHIEVEMENTS.forEach(ach=>{if(!(st.unlockedAchievements||[]).includes(ach.id)&&ach.check(stats)){updateState(s=>{if(!s.unlockedAchievements)s.unlockedAchievements=[];s.unlockedAchievements.push(ach.id);});newOnes.push(ach);}});
  newOnes.forEach(a=>toast(`🏅 Conquista: ${a.name}`,'success'));
  if(newOnes.length)renderGamification();
}

/* ── NOTIFICATIONS ── */
function toast(msg,type=''){
  const w=document.getElementById('toastWrap');if(!w)return;
  const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=msg;w.appendChild(el);
  setTimeout(()=>el.remove(),3800);
}
function floatXP(amt,label){
  const el=document.getElementById('xpFloat');if(!el)return;
  el.textContent=`+${amt} XP${label?' · '+label:''}`;el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),1800);
}
function launchConfetti(){
  const c=document.getElementById('confettiCanvas');if(!c)return;
  c.width=window.innerWidth;c.height=window.innerHeight;
  const ctx=c.getContext('2d');
  const pts=Array.from({length:160},()=>({x:Math.random()*c.width,y:-20-Math.random()*200,r:Math.random()*7+3,col:`hsl(${Math.random()*360},88%,58%)`,vx:Math.random()*3-1.5,vy:Math.random()*4+2,vr:Math.random()*.4-.2,rot:Math.random()*360}));
  let frame=0;
  (function draw(){ctx.clearRect(0,0,c.width,c.height);pts.forEach(p=>{ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.fillStyle=p.col;ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r);ctx.restore();p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr*12;p.vy+=.04;});if(++frame<150)requestAnimationFrame(draw);else ctx.clearRect(0,0,c.width,c.height);})();
}

/* ── NAVIGATION ── */
let _page='overview';const _charts={};
function navigate(sec){
  document.querySelectorAll('.ni').forEach(n=>n.classList.toggle('active',n.dataset.pg===sec));
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===`pg-${sec}`));
  _page=sec;
  const h={overview:()=>{renderOverview();initOvCharts();},weekly:renderWeekly,subjects:()=>renderSubjectPage('TI'),portuguese:()=>renderSubjectPage('PT'),english:()=>renderSubjectPage('EN'),mathematics:()=>renderSubjectPage('MAT'),essay:renderEssay,resources:renderResources,analysis:initAnalysisCharts,gamification:renderGamification,journal:renderJournal,analytics:renderAnalytics};
  h[sec]?.();
  if(window.innerWidth<900){document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('active');}
}
function initNav(){
  document.querySelectorAll('.ni').forEach(n=>n.addEventListener('click',()=>navigate(n.dataset.pg)));
  document.getElementById('menuBtn')?.addEventListener('click',()=>{document.getElementById('sidebar').classList.toggle('open');document.getElementById('overlay').classList.toggle('active');});
  document.getElementById('overlay')?.addEventListener('click',()=>{document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('active');});
  const inp=document.getElementById('searchInput');let deb;
  inp?.addEventListener('input',()=>{clearTimeout(deb);deb=setTimeout(()=>{if(inp.value.trim()){navigate('subjects');renderSubjectPage('TI',inp.value.trim());}},280);});
  document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();inp?.focus();}});
}

/* ── HELPERS ── */
function $id(id){return document.getElementById(id);}
function setT(id,val){const e=$id(id);if(e)e.textContent=val;}
function setW(id,pct){const e=$id(id);if(e)e.style.width=pct+'%';}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function parseMins(d){if(!d)return 0;if(d.includes('h')){const p=d.split('h');return parseInt(p[0])*60+(parseInt(p[1])||0);}return parseInt(d)||0;}
function daysUntilExam(){const d=new Date('2025-10-19')-new Date();return d>0?Math.ceil(d/86400000):'—';}
function todayDayKey(){return['sun','mon','tue','wed','thu','fri','sat'][new Date().getDay()];}
function calcSubPct(id,st){const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];const sub=all.find(s=>s.id===id);if(!sub)return 0;const done=sub.topics.filter((_,i)=>(st.completedTopics||{})[`${id}:${i}`]).length;return sub.topics.length?Math.round(done/sub.topics.length*100):0;}
function calcGroupPct(subs,st){const total=subs.reduce((a,s)=>a+s.topics.length,0);const done=subs.reduce((a,s)=>a+s.topics.filter((_,i)=>(st.completedTopics||{})[`${s.id}:${i}`]).length,0);return total?Math.round(done/total*100):0;}

/* ── XP UI ── */
function refreshXPUI(st){
  if(!st)st=loadState();
  const lv=getLvData(st.totalXP);const nxt=getLvNext(st.totalXP);
  const pct=nxt.xp>lv.xp?Math.min(100,Math.round((st.totalXP-lv.xp)/(nxt.xp-lv.xp)*100)):100;
  setT('sbLvBadge',`LV ${lv.lv}`);setT('sbLvName',lv.name);setW('sbXpFill',pct);
  setT('sbXpCur',st.totalXP);setT('sbXpNxt',nxt.xp);
  setT('sbStreak',st.streak||0);setT('topStreak',st.streak||0);setT('topXP',st.totalXP);setT('examDays',daysUntilExam());
  setT('lhIcon',lv.icon);setT('lhLv',`Level ${lv.lv}`);setT('lhName',lv.name);
  setW('lhFill',pct);setT('lhCur',st.totalXP);setT('lhMax',nxt.xp);setT('lhTXp',st.totalXP);
}

/* ── OVERVIEW ── */
function renderOverview(){
  const st=loadState();refreshXPUI(st);
  const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];
  const tt=all.reduce((a,s)=>a+s.topics.length,0);
  const td=Object.values(st.completedTopics||{}).filter(Boolean).length;
  const totalPct=tt?Math.round(td/tt*100):0;
  const wt=WEEKLY_PLAN.reduce((a,d)=>a+d.tasks.length,0);
  const wd=Object.values(st.completedTasks||{}).filter(Boolean).length;
  const weekPct=wt?Math.round(wd/wt*100):0;
  const lastMock=(st.mockHistory||[]).slice(-1)[0];
  const stats=[{icon:'📊',val:totalPct+'%',lbl:'Conclusão Geral'},{icon:'📅',val:weekPct+'%',lbl:'Semana Atual'},{icon:'🔥',val:st.streak||0,lbl:'Streak (dias)'},{icon:'🍅',val:st.pomodoros||0,lbl:'Pomodoros'},{icon:'🎯',val:lastMock?Math.round(lastMock.score/lastMock.total*100)+'%':'—',lbl:'Último Simulado'}];
  const sr=$id('ovStats');if(sr)sr.innerHTML=stats.map(s=>`<div class="stat-card"><div class="sc-icon">${s.icon}</div><div class="sc-val">${s.val}</div><div class="sc-lbl">${s.lbl}</div></div>`).join('');
  const motEl=$id('motivTxt');if(motEl)motEl.textContent=MOTIVATIONS[(st.motIndex||0)%MOTIVATIONS.length];
  $id('motivBtn')?.addEventListener('click',()=>{updateState(s=>s.motIndex=((s.motIndex||0)+1)%MOTIVATIONS.length);const s2=loadState();if(motEl)motEl.textContent=MOTIVATIONS[s2.motIndex];});
  const pl=$id('ovProgList');
  if(pl){
    const groups=[{label:'TI',subs:SUBJECTS_TI,icon:'🖥️'},{label:'Português',subs:SUBJECTS_PT,icon:'📖'},{label:'English',subs:SUBJECTS_EN,icon:'🇬🇧'},{label:'Matemática',subs:SUBJECTS_MAT,icon:'🔢'}];
    pl.innerHTML=groups.map(g=>{const pct=calcGroupPct(g.subs,st);return`<div class="prog-item"><div class="pi-hdr"><span class="pi-name">${g.icon} ${g.label}</span><span class="pi-pct">${pct}%</span></div><div class="pi-track"><div class="pi-fill" style="width:${pct}%"></div></div></div>`;}).join('')+SUBJECTS_TI.slice(0,4).map(sub=>{const pct=calcSubPct(sub.id,st);return`<div class="prog-item"><div class="pi-hdr"><span class="pi-name">${sub.icon} ${sub.name}</span><span class="pi-pct">${pct}%</span></div><div class="pi-track"><div class="pi-fill" style="width:${pct}%"></div></div></div>`;}).join('');
  }
  renderRecs(st);
}
function renderRecs(st){
  const el=$id('ovRecList');if(!el)return;
  const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];
  const recs=all.filter(sub=>calcSubPct(sub.id,st)<30).slice(0,5);
  const adv={'prob':'Revise variância, desvio padrão e distribuições.','banking':'Revise SFN, PIX, SELIC, CDI.','sw-eng':'Revise Scrum, CI/CD, microsserviços.','prog':'Revise Java Streams, Lambdas, Spring Boot.','db':'Revise JOINs, GROUP BY, normalização.','ai':'Revise ML, Pandas, NumPy, Big Data.','sec':'Revise OWASP Top 10, JWT, criptografia.','pt-gram':'Revise concordância e regência.','pt-interp':'Pratique interpretação de textos.','en-comp':'Leia textos técnicos em inglês.','en-tense':'Revise tempos verbais e modais.','mat-fin':'Pratique juros simples e compostos.','mat-logic':'Resolva questões de lógica.'};
  if(!recs.length){el.innerHTML='<div class="rec-item"><strong>🎉</strong> Ótimo progresso! Continue assim.</div>';return;}
  el.innerHTML=recs.map(sub=>`<div class="rec-item"><strong>${sub.icon} ${sub.name} — ${calcSubPct(sub.id,st)}% concluído</strong><br>${adv[sub.id]||'Dedique mais tempo a este tópico.'}</div>`).join('');
}

/* ── OVERVIEW CHARTS ── */
function initOvCharts(){
  const st=loadState();
  const wCtx=$id('ovWeekChart');
  if(wCtx){if(_charts.ovWeek)_charts.ovWeek.destroy();
    const studied=WEEKLY_PLAN.map(d=>{let m=0;d.tasks.forEach((t,i)=>{if((st.completedTasks||{})[`${d.key}:${i}`])m+=parseMins(t.dur);});return+(m/60).toFixed(1);});
    const goal=WEEKLY_PLAN.map(d=>+(d.tasks.reduce((a,t)=>a+parseMins(t.dur),0)/60).toFixed(1));
    _charts.ovWeek=new Chart(wCtx,{type:'bar',data:{labels:WEEKLY_PLAN.map(d=>d.abbr),datasets:[{label:'Estudado(h)',data:studied,backgroundColor:'rgba(91,138,245,.65)',borderColor:'#5b8af5',borderWidth:1.5,borderRadius:5},{label:'Meta(h)',data:goal,type:'line',borderColor:'#3a5fc9',borderDash:[4,4],borderWidth:2,pointRadius:3,fill:false,tension:.4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{grid:{color:'#1e2229'},beginAtZero:true}}}});
  }
  const cCtx=$id('ovCatChart');
  if(cCtx){if(_charts.ovCat)_charts.ovCat.destroy();
    _charts.ovCat=new Chart(cCtx,{type:'doughnut',data:{labels:SUBJECTS_TI.map(s=>s.name.split(' ')[0]),datasets:[{data:SUBJECTS_TI.map(s=>calcSubPct(s.id,st)),backgroundColor:SUBJECTS_TI.map(s=>s.color+'bb'),borderColor:SUBJECTS_TI.map(s=>s.color),borderWidth:2}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{font:{size:10},padding:6}}},cutout:'60%'}});
  }
}

/* ── WEEKLY ── */
function renderWeekly(){
  const st=loadState();const tk=todayDayKey();
  const grid=$id('weeklyGrid');if(!grid)return;
  grid.innerHTML=WEEKLY_PLAN.map(day=>{
    const isToday=day.key===tk;
    const done=day.tasks.filter((_,i)=>(st.completedTasks||{})[`${day.key}:${i}`]).length;
    const pct=Math.round(done/day.tasks.length*100);
    const tasks=day.tasks.map((t,i)=>{const d=!!(st.completedTasks||{})[`${day.key}:${i}`];return`<div class="task-item${d?' done':''}" data-day="${day.key}" data-idx="${i}"><div class="ti-box"></div><div class="ti-info"><div class="ti-name">${t.name}</div><div class="ti-dur">${t.dur} · +${t.xp}XP</div></div></div>`;}).join('');
    return`<div class="day-card${isToday?' today':''}"><div class="dc-hdr"><div class="dc-abbr">${day.abbr}</div><div class="dc-name${isToday?' today':''}">${day.day}</div></div><div class="dc-prog"><div class="pi-track" style="flex:1"><div class="pi-fill" style="width:${pct}%"></div></div><span class="dc-pct">${pct}%</span></div><div class="dc-tasks">${tasks}</div></div>`;
  }).join('');
  grid.querySelectorAll('.task-item').forEach(el=>el.addEventListener('click',()=>toggleTask(el.dataset.day,+el.dataset.idx)));
}
function toggleTask(dayKey,idx){
  const day=WEEKLY_PLAN.find(d=>d.key===dayKey);if(!day)return;
  const task=day.tasks[idx];const key=`${dayKey}:${idx}`;
  const st=loadState();const was=!!(st.completedTasks||{})[key];
  updateState(s=>{if(!s.completedTasks)s.completedTasks={};s.completedTasks[key]=!was;});
  touchStreak();if(!was){addXP(task.xp,task.name);toast(`✅ ${task.name} concluída!`);}
  renderWeekly();checkWeekCompletion();if(_page==='overview')renderOverview();
}
function checkWeekCompletion(){
  const st=loadState();const total=WEEKLY_PLAN.reduce((a,d)=>a+d.tasks.length,0);
  const done=Object.values(st.completedTasks||{}).filter(Boolean).length;
  if(done===total&&total>0){const wk=st.weeksCompleted||0;updateState(s=>s.weeksCompleted=(s.weeksCompleted||0)+1);launchConfetti();const r=WEEKLY_REWARDS[Math.min(wk,WEEKLY_REWARDS.length-1)];toast(`🎉 Semana completa! ${r.reward}`,'success');addXP(200,'Semana Completa!');}
}

/* ── SUBJECT PAGES ── */
const _subFilters={TI:'all',PT:'all',EN:'all',MAT:'all'};
const SCFG={
  TI:{subs:()=>SUBJECTS_TI,filterId:'filterBarTI',gridId:'subsGridTI',cats:['all:Todos','math:Estatística','banking:Banking','software:Engenharia','programming:Programação','database:BD','ai:IA & Data','security:Segurança','extra:Extras']},
  PT:{subs:()=>SUBJECTS_PT,filterId:'filterBarPT',gridId:'subsGridPT',chartId:'ptChart',tipId:'ptTip',tips:()=>TIPS_PT,cats:['all:Todos','interp:Interpretação','gram:Gramática','sint:Sintaxe','conc:Concordância','reg:Regência','crase:Crase','pron:Pronomes','pont:Pontuação','sem:Semântica']},
  EN:{subs:()=>SUBJECTS_EN,filterId:'filterBarEN',gridId:'subsGridEN',chartId:'enChart',tipId:'enTip',tips:()=>TIPS_EN,cats:['all:All','comp:Comprehension','vocab:IT Vocab','tense:Tenses','modal:Modals','cond:Conditionals','pass:Passive','phr:Phrasal','conn:Connectors']},
  MAT:{subs:()=>SUBJECTS_MAT,filterId:'filterBarMAT',gridId:'subsGridMAT',chartId:'matChart',tipId:'matTip',tips:()=>TIPS_MAT,cats:['all:Todos','arith:Aritmética','regra:Regra3','fin:Mat.Financeira','func:Funções','logic:Lógica','conj:Conjuntos','comb:Combinatória','stat:Estatística']},
};
function renderSubjectPage(grp,search=''){
  const cfg=SCFG[grp];if(!cfg)return;const st=loadState();const subs=cfg.subs();
  const fb=$id(cfg.filterId);
  if(fb){fb.innerHTML=cfg.cats.map(c=>{const[val,lbl]=c.split(':');return`<button class="filter-btn${_subFilters[grp]===val?' active':''}" data-cat="${val}" data-grp="${grp}">${lbl}</button>`;}).join('');fb.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{_subFilters[grp]=b.dataset.cat;renderSubjectPage(grp,search);}));}
  if(cfg.tipId&&cfg.tips){const tip=$id(cfg.tipId);if(tip){const tips=cfg.tips();const idx=Math.floor(Date.now()/86400000)%tips.length;tip.textContent=tips[idx];}}
  if(cfg.chartId){renderSubjectChart(grp,cfg,subs,st);}
  const grid=$id(cfg.gridId);if(!grid)return;
  const s=search.toLowerCase();
  const filtered=subs.filter(sub=>{const catOk=_subFilters[grp]==='all'||sub.cat===_subFilters[grp];const searchOk=!s||sub.name.toLowerCase().includes(s)||sub.topics.some(t=>t.toLowerCase().includes(s));return catOk&&searchOk;});
  if(!filtered.length){grid.innerHTML='<div style="color:var(--tm);padding:20px">Nenhuma matéria encontrada.</div>';return;}
  grid.innerHTML=filtered.map(sub=>{
    const done=sub.topics.filter((_,i)=>(st.completedTopics||{})[`${sub.id}:${i}`]).length;
    const pct=sub.topics.length?Math.round(done/sub.topics.length*100):0;
    const topics=sub.topics.map((t,i)=>{const d=!!(st.completedTopics||{})[`${sub.id}:${i}`];return`<div class="topic-row${d?' done':''}" data-sub="${sub.id}" data-ti="${i}"><div class="tr-check"></div><span class="tr-name">${t}</span></div>`;}).join('');
    return`<div class="sub-card" id="sc-${sub.id}" style="border-top:2px solid ${sub.color}30"><div class="sch" data-card="${sub.id}"><span class="sch-icon">${sub.icon}</span><div class="sch-info"><div class="sch-name">${sub.name}</div><div class="sch-meta">${sub.topics.length} tópicos · +${sub.xp}XP</div></div><div class="sch-arr">▼</div></div><div class="sub-prog-bar"><div class="sub-prog-fill" style="width:${pct}%;background:${sub.color}"></div></div><div class="sub-topics">${topics}</div><div class="sc-foot"><span class="sc-pct" style="color:${sub.color}">${pct}%</span><span class="sc-cnt">${done}/${sub.topics.length} concluídos</span></div></div>`;
  }).join('');
  grid.querySelectorAll('.sch').forEach(h=>h.addEventListener('click',()=>document.getElementById(`sc-${h.dataset.card}`)?.classList.toggle('open')));
  grid.querySelectorAll('.topic-row').forEach(el=>el.addEventListener('click',()=>toggleTopic(el.dataset.sub,+el.dataset.ti)));
  if(search)grid.querySelectorAll('.sub-card').forEach(c=>c.classList.add('open'));
}
function renderSubjectChart(grp,cfg,subs,st){
  const ctx=$id(cfg.chartId);if(!ctx)return;
  if(_charts[`sub${grp}`])_charts[`sub${grp}`].destroy();
  const pcts=subs.map(s=>calcSubPct(s.id,st));const colors=subs.map(s=>s.color);
  _charts[`sub${grp}`]=new Chart(ctx,{type:'bar',data:{labels:subs.map(s=>s.name.split(' ').slice(0,2).join(' ')),datasets:[{data:pcts,backgroundColor:colors.map(c=>c+'99'),borderColor:colors,borderWidth:1.5,borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{size:9}}},y:{grid:{color:'#1e2229'},min:0,max:100,ticks:{callback:v=>v+'%',font:{size:10}}}}}});
}
function toggleTopic(subId,ti){
  const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];const sub=all.find(s=>s.id===subId);if(!sub)return;
  const key=`${subId}:${ti}`;const st=loadState();const was=!!(st.completedTopics||{})[key];
  updateState(s=>{if(!s.completedTopics)s.completedTopics={};s.completedTopics[key]=!was;});
  touchStreak();if(!was){addXP(sub.xp||10,sub.topics[ti]);toast(`📚 ${sub.topics[ti]} dominado!`);}
  const grpMap={TI:SUBJECTS_TI,PT:SUBJECTS_PT,EN:SUBJECTS_EN,MAT:SUBJECTS_MAT};
  for(const[g,subs]of Object.entries(grpMap)){if(subs.find(s=>s.id===subId)){renderSubjectPage(g);break;}}
  if(_page==='overview')renderOverview();
}

/* ── QUIZ ── */
let _quiz=null;
function initQuiz(){
  const sel=$id('quizSubj');
  if(sel&&sel.options.length<=1){
    [['TI','🖥️ Toda TI'],['PT','🇧🇷 Todo Português'],['EN','🇬🇧 Todo English'],['MAT','🔢 Toda Matemática']].forEach(([v,l])=>{const o=document.createElement('option');o.value=v;o.textContent=l;sel.appendChild(o);});
    const groups=[{label:'── TI ──',subs:SUBJECTS_TI},{label:'── Português ──',subs:SUBJECTS_PT},{label:'── English ──',subs:SUBJECTS_EN},{label:'── Matemática ──',subs:SUBJECTS_MAT}];
    groups.forEach(g=>{const og=document.createElement('optgroup');og.label=g.label;g.subs.forEach(s=>{const o=document.createElement('option');o.value=s.id;o.textContent=`${s.icon} ${s.name}`;og.appendChild(o);});sel.appendChild(og);});
  }
  $id('quizStartBtn')?.addEventListener('click',startQuiz);
  $id('qNext')?.addEventListener('click',nextQ);
  $id('qAbort')?.addEventListener('click',abortQuiz);
}
function startQuiz(){
  const subj=$id('quizSubj').value;const diff=$id('quizDiff').value;const qty=$id('quizQty').value;
  const areaMap={TI:SUBJECTS_TI.map(s=>s.id),PT:SUBJECTS_PT.map(s=>s.id),EN:SUBJECTS_EN.map(s=>s.id),MAT:SUBJECTS_MAT.map(s=>s.id)};
  let pool=QUESTIONS.filter(q=>{const ids=areaMap[subj];const catOk=subj==='all'||(ids?ids.includes(q.cat):q.cat===subj);return catOk&&(diff==='all'||q.diff===diff);});
  if(!pool.length){toast('Nenhuma questão para esses filtros.');return;}
  pool=shuffle(pool);if(qty!=='all')pool=pool.slice(0,Math.min(+qty,pool.length));
  _quiz={questions:pool,idx:0,score:0,answers:[],startTime:Date.now()};
  $id('quizCfg').classList.add('hidden');$id('quizResults').classList.add('hidden');$id('quizArea').classList.remove('hidden');
  renderQ();
}
function renderQ(){
  if(!_quiz)return;const q=_quiz.questions[_quiz.idx];const n=_quiz.questions.length;
  setT('qNum',`${_quiz.idx+1} / ${n}`);setW('qProgFill',Math.round(_quiz.idx/n*100));
  const db=$id('qDiff');if(db){db.textContent={easy:'Fácil',medium:'Médio',hard:'Difícil'}[q.diff];db.className='diff-badge '+q.diff;}
  const cb=$id('qCat');const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];if(cb){const s=all.find(s=>s.id===q.cat);cb.textContent=s?s.name.split(' ').slice(0,2).join(' '):q.cat;}
  $id('quizQ').textContent=q.q;
  const opts=$id('quizOpts');if(opts)opts.innerHTML=q.opts.map((o,i)=>`<div class="qopt" data-i="${i}"><div class="qopt-letter">${'ABCD'[i]}</div><div>${o}</div></div>`).join('');
  opts?.querySelectorAll('.qopt').forEach(el=>el.addEventListener('click',()=>selectQ(+el.dataset.i)));
  const exp=$id('quizExp');if(exp)exp.classList.add('hidden');
  const nxt=$id('qNext');if(nxt){nxt.disabled=true;nxt.textContent=_quiz.idx===n-1?'Ver Resultado →':'Próxima →';}
  setT('qScore',_quiz.score);
}
function selectQ(i){
  if(!_quiz)return;const q=_quiz.questions[_quiz.idx];
  document.querySelectorAll('.qopt').forEach(el=>{el.classList.add('locked');el.style.pointerEvents='none';});
  const ok=i===q.ans;document.querySelectorAll('.qopt')[i].classList.add(ok?'correct':'wrong');
  if(!ok)document.querySelectorAll('.qopt')[q.ans].classList.add('correct');
  if(ok)_quiz.score++;_quiz.answers.push({q,chosen:i,ok});
  updateState(s=>s.questionsAnswered=(s.questionsAnswered||0)+1);
  const exp=$id('quizExp');if(exp){exp.innerHTML=`<div class="qexp-title">${ok?'✅ Correto!':'❌ Incorreto — resposta: '+'ABCD'[q.ans]}</div><div class="qexp-body">${q.exp}</div>`;exp.classList.remove('hidden');}
  const nxt=$id('qNext');if(nxt)nxt.disabled=false;
}
function nextQ(){if(!_quiz)return;if(_quiz.idx>=_quiz.questions.length-1){finishQuiz();return;}_quiz.idx++;renderQ();}
function finishQuiz(){
  if(!_quiz)return;const{score,questions,answers,startTime}=_quiz;const total=questions.length;const pct=Math.round(score/total*100);const elapsed=Math.round((Date.now()-startTime)/1000);
  const catMap={};answers.forEach(a=>{if(!catMap[a.q.cat])catMap[a.q.cat]={c:0,t:0};catMap[a.q.cat].t++;if(a.ok)catMap[a.q.cat].c++;});
  updateState(s=>{if(!s.quizHistory)s.quizHistory=[];Object.entries(catMap).forEach(([cat,{c,t}])=>s.quizHistory.push({cat,correct:c,total:t,date:Date.now()}));});
  addXP(score*5,`Quiz ${pct}%`);if(pct>=80){launchConfetti();toast(`🎯 Excelente! ${pct}%!`,'success');}
  $id('quizArea').classList.add('hidden');const res=$id('quizResults');res.classList.remove('hidden');
  const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];
  const catRows=Object.entries(catMap).map(([cat,{c,t}])=>{const s=all.find(x=>x.id===cat);const p=Math.round(c/t*100);return`<div class="mr-row"><span class="mr-row-name">${s?s.icon+' '+s.name.substring(0,20):cat}</span><div class="mr-row-track"><div class="mr-row-fill" style="width:${p}%;background:${p>=60?'var(--acc3)':'var(--acc5)'}"></div></div><span class="mr-row-pct">${p}%</span></div>`;}).join('');
  const pColor=pct>=80?'var(--acc3)':pct>=60?'var(--acc4)':'var(--acc5)';
  res.innerHTML=`<div class="qr-score"><div class="qr-big" style="color:${pColor}">${pct}%</div><div class="qr-label">${score} de ${total} corretas · ${Math.floor(elapsed/60)}m${elapsed%60}s · +${score*5} XP</div></div><div class="qr-breakdown"><div class="qr-stat"><div class="qrs-val" style="color:var(--acc3)">${score}</div><div class="qrs-lbl">Corretas</div></div><div class="qr-stat"><div class="qrs-val" style="color:var(--acc5)">${total-score}</div><div class="qrs-lbl">Incorretas</div></div><div class="qr-stat"><div class="qrs-val">+${score*5}</div><div class="qrs-lbl">XP</div></div></div>${catRows?`<div class="mr-breakdown"><div class="mr-breakdown-title">Por Matéria</div>${catRows}</div>`:''}<div class="qr-review" style="margin-top:14px"><div class="qr-stitle">Revisão</div>${answers.map((a,i)=>`<div style="background:var(--bg3);border-radius:var(--rs);padding:10px 12px;margin-bottom:6px;border-left:3px solid ${a.ok?'var(--acc3)':'var(--acc5)'}"><div style="font-size:.78rem;font-weight:600;margin-bottom:4px">${a.ok?'✅':'❌'} Q${i+1}: ${a.q.q.substring(0,70)}...</div><div style="font-size:.74rem;color:var(--tm)">${a.q.exp}</div></div>`).join('')}</div><div style="margin-top:14px;display:flex;gap:8px"><button class="btn-p" onclick="resetQuiz()">Novo Quiz</button><button class="btn-s" onclick="navigate('practice')">Configurar</button></div>`;
  checkAchievements(loadState());
}
function abortQuiz(){_quiz=null;$id('quizArea').classList.add('hidden');$id('quizCfg').classList.remove('hidden');}
function resetQuiz(){_quiz=null;$id('quizResults').classList.add('hidden');$id('quizCfg').classList.remove('hidden');}

/* ── MOCK EXAM ── */
let _mock=null;
function initMock(){
  const modes=$id('mockModes');
  if(modes){const saved=loadState().mockSelectedMode||60;const md=[{n:10,icon:'⚡',title:'Quick Test',desc:'10q · ~15min'},{n:30,icon:'📝',title:'Prática',desc:'30q · ~45min'},{n:60,icon:'🎯',title:'Mini Simulado',desc:'60q · ~90min'},{n:100,icon:'🏆',title:'Simulado Completo',desc:'100q · ~150min'}];modes.innerHTML=md.map(m=>`<div class="mmc${m.n===saved?' sel':''}" data-mode="${m.n}"><div class="mmc-icon">${m.icon}</div><div class="mmc-title">${m.title}</div><div class="mmc-desc">${m.desc}</div></div>`).join('');modes.querySelectorAll('.mmc').forEach(c=>c.addEventListener('click',()=>{modes.querySelectorAll('.mmc').forEach(x=>x.classList.remove('sel'));c.classList.add('sel');updateState(s=>s.mockSelectedMode=+c.dataset.mode);}));}
  $id('mockStartBtn')?.addEventListener('click',startMock);
  $id('mockFinish')?.addEventListener('click',()=>finishMock(true));
  $id('mockPrev')?.addEventListener('click',()=>navMock(-1));
  $id('mockNext')?.addEventListener('click',()=>navMock(1));
}
function startMock(){
  const n=loadState().mockSelectedMode||60;
  const easy=shuffle(QUESTIONS.filter(q=>q.diff==='easy')).slice(0,Math.round(n*.3));
  const med=shuffle(QUESTIONS.filter(q=>q.diff==='medium')).slice(0,Math.round(n*.4));
  const hard=shuffle(QUESTIONS.filter(q=>q.diff==='hard')).slice(0,n-easy.length-med.length);
  const qs=shuffle([...easy,...med,...hard]);
  _mock={questions:qs,idx:0,answers:new Array(qs.length).fill(null),startTime:Date.now(),timerInt:null};
  $id('mockCfg').classList.add('hidden');$id('mockReport').classList.add('hidden');$id('mockArea').classList.remove('hidden');
  renderMockQ();renderMockMap();startMockTimer(n*90);
}
function startMockTimer(secs){
  let rem=secs;
  const tick=()=>{const m=String(Math.floor(rem/60)).padStart(2,'0');const s=String(rem%60).padStart(2,'0');setT('mockTimer',`${m}:${s}`);const tb=$id('mockTimerBox');if(tb)tb.style.color=rem<300?'var(--acc5)':rem<600?'var(--acc4)':'';if(--rem<0){clearInterval(_mock.timerInt);finishMock(false);}};
  tick();_mock.timerInt=setInterval(tick,1000);
}
function renderMockQ(){
  if(!_mock)return;const q=_mock.questions[_mock.idx];const n=_mock.questions.length;
  const answered=_mock.answers.filter(a=>a!==null).length;
  setT('mockQInfo',`${_mock.idx+1} / ${n}`);const fill=$id('mockFill');if(fill)fill.style.width=Math.round(answered/n*100)+'%';
  const wrap=$id('mockQWrap');if(!wrap)return;
  const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];
  const sub=all.find(s=>s.id===q.cat);const dColor={easy:'var(--acc3)',medium:'var(--acc4)',hard:'var(--acc5)'}[q.diff];const dLabel={easy:'Fácil',medium:'Médio',hard:'Difícil'}[q.diff];
  wrap.innerHTML=`<div class="mock-qnum">Q${_mock.idx+1}/${n} · ${sub?sub.icon+' '+sub.name.split(' ').slice(0,2).join(' '):q.cat} · <span style="color:${dColor}">${dLabel}</span></div><div class="mock-qtext">${q.q}</div><div class="mock-opts">${q.opts.map((o,i)=>`<div class="qopt${_mock.answers[_mock.idx]===i?' qopt-sel':''}" data-i="${i}" style="margin-bottom:8px"><div class="qopt-letter">${'ABCD'[i]}</div><div>${o}</div></div>`).join('')}</div>`;
  wrap.querySelectorAll('.qopt').forEach(el=>el.addEventListener('click',()=>{_mock.answers[_mock.idx]=+el.dataset.i;renderMockQ();renderMockMap();}));
}
function renderMockMap(){
  if(!_mock)return;const map=$id('mockMap');if(!map)return;
  map.innerHTML=_mock.questions.map((_,i)=>`<div class="mmap-dot${_mock.answers[i]!==null?' answered':''}${_mock.idx===i?' current':''}" data-i="${i}">${i+1}</div>`).join('');
  map.querySelectorAll('.mmap-dot').forEach(d=>d.addEventListener('click',()=>{_mock.idx=+d.dataset.i;renderMockQ();renderMockMap();}));
}
function navMock(dir){if(!_mock)return;const n=_mock.idx+dir;if(n>=0&&n<_mock.questions.length){_mock.idx=n;renderMockQ();renderMockMap();}}
function finishMock(manual){
  if(!_mock)return;clearInterval(_mock.timerInt);
  const{questions,answers,startTime}=_mock;const elapsed=Math.round((Date.now()-startTime)/1000);
  let correct=0;const bySubj={};
  questions.forEach((q,i)=>{if(!bySubj[q.cat])bySubj[q.cat]={c:0,t:0};bySubj[q.cat].t++;if(answers[i]===q.ans){correct++;bySubj[q.cat].c++;}});
  const total=questions.length;const pct=Math.round(correct/total*100);
  updateState(s=>{if(!s.mockHistory)s.mockHistory=[];s.mockHistory.push({score:correct,total,time:elapsed,bySubj,date:Date.now()});});
  addXP(correct*8,`Simulado ${pct}%`);
  $id('mockArea').classList.add('hidden');const rep=$id('mockReport');rep.classList.remove('hidden');
  const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];
  const stars=pct>=90?'⭐⭐⭐':pct>=70?'⭐⭐':pct>=50?'⭐':'';const pColor=pct>=80?'var(--acc3)':pct>=60?'var(--acc4)':'var(--acc5)';
  const rows=Object.entries(bySubj).map(([cat,{c,t}])=>{const s=all.find(x=>x.id===cat);const p=Math.round(c/t*100);return`<div class="mr-row"><span class="mr-row-name" style="font-size:.74rem">${s?s.icon+' '+s.name.substring(0,18):cat}</span><div class="mr-row-track"><div class="mr-row-fill" style="width:${p}%;background:${p>=60?'var(--acc3)':'var(--acc5)'}"></div></div><span class="mr-row-pct">${p}%</span></div>`;}).join('');
  rep.innerHTML=`<div class="mr-hero"><div class="mr-score"><div class="mr-big" style="color:${pColor}">${pct}%</div><div class="mr-lbl">${correct}/${total} corretas ${stars}</div></div><div class="mr-stats"><div class="mr-stat"><div class="mr-sval" style="color:var(--acc3)">${correct}</div><div class="mr-slbl">Corretas</div></div><div class="mr-stat"><div class="mr-sval" style="color:var(--acc5)">${total-correct}</div><div class="mr-slbl">Incorretas</div></div><div class="mr-stat"><div class="mr-sval">${Math.floor(elapsed/60)}m${elapsed%60}s</div><div class="mr-slbl">Tempo</div></div><div class="mr-stat"><div class="mr-sval" style="color:var(--acc)">+${correct*8}</div><div class="mr-slbl">XP</div></div></div></div><div class="mr-breakdown"><div class="mr-breakdown-title">Por Matéria</div>${rows}</div><div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn-p" onclick="resetMock()">Novo Simulado</button><button class="btn-s" onclick="navigate('practice')">Questões</button></div>`;
  if(pct>=80){launchConfetti();toast(`🏆 Simulado ${pct}%!`,'success');}checkAchievements(loadState());_mock=null;
}
function resetMock(){$id('mockReport').classList.add('hidden');$id('mockCfg').classList.remove('hidden');}

/* ── ESSAY ── */
let _essayInit=false;let _essayTopicsFilterInit=false;
function renderEssay(){
  if(!_essayInit){_essayInit=true;
    document.querySelectorAll('.etab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.etab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.essay-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');$id(`ep-${tab.dataset.etab}`)?.classList.add('active');}));
    initEssayEditor();
  }
  renderEssayDashboard();renderEssayGuide();renderEssayTopics();renderEssayTips();
}
function initEssayEditor(){
  const sel=$id('essayTopic');
  if(sel&&sel.options.length<=1){ESSAY_TOPICS.forEach(t=>{const o=document.createElement('option');o.value=t.topic;o.textContent=`[${t.level.toUpperCase()}] ${t.topic.substring(0,55)}`;sel.appendChild(o);});}
  const ta=$id('essayText');ta?.addEventListener('input',()=>{const w=(ta.value.trim().match(/\S+/g)||[]).length;setT('essayWC',`${w} palavras`);updateChecklist(ta.value);});
  $id('essayEval')?.addEventListener('click',evaluateEssay);$id('essaySave')?.addEventListener('click',saveEssay);$id('essayClear')?.addEventListener('click',()=>{if(ta)ta.value='';setT('essayWC','0 palavras');updateChecklist('');const fb=$id('essayFeedback');if(fb)fb.classList.add('hidden');});
  updateChecklist('');
}
function updateChecklist(text){
  const t=text.toLowerCase();const words=(text.trim().match(/\S+/g)||[]).length;const paras=text.split(/\n\s*\n/).filter(p=>p.trim().length>20);
  const checks=[{label:'Introdução presente',ok:paras.length>=1},{label:'Tese identificada',ok:['portanto','é essencial','deve-se','torna-se','faz-se'].some(c=>t.includes(c))},{label:'Desenvolvimento 1',ok:paras.length>=2},{label:'Desenvolvimento 2',ok:paras.length>=3},{label:'Conclusão com proposta',ok:paras.length>=4},{label:'Mínimo 150 palavras',ok:words>=150},{label:'Uso de conectivos',ok:['contudo','entretanto','no entanto','além disso','portanto','ademais','embora','visto que'].some(c=>t.includes(c))}];
  const cl=$id('essayChecklist');if(cl)cl.innerHTML=checks.map(c=>`<div class="ecl-item ${c.ok?'ok':'fail'}"><span class="ecl-icon">${c.ok?'✅':'⬜'}</span> ${c.label}</div>`).join('');
}
function evaluateEssay(){
  const text=$id('essayText')?.value||'';const words=(text.trim().match(/\S+/g)||[]).length;const paras=text.split(/\n\s*\n/).filter(p=>p.trim().length>20);const t=text.toLowerCase();
  let score=0;const tips=[];
  if(paras.length>=1)score+=10;else tips.push('Adicione uma introdução clara.');
  if(paras.length>=2)score+=10;else tips.push('Acrescente o primeiro parágrafo de desenvolvimento.');
  if(paras.length>=3)score+=10;else tips.push('Acrescente o segundo parágrafo de desenvolvimento.');
  if(paras.length>=4)score+=10;else tips.push('Acrescente a conclusão com proposta de intervenção.');
  if(words>=250)score+=20;else if(words>=150){score+=10;tips.push('Expanda para pelo menos 250 palavras.');}else tips.push('Texto muito curto — escreva pelo menos 150 palavras.');
  const conns=['contudo','entretanto','no entanto','além disso','ademais','portanto','assim','visto que','embora','todavia','consequentemente','haja vista'].filter(c=>t.includes(c)).length;
  if(conns>=4)score+=20;else if(conns>=2){score+=12;tips.push('Use mais conectivos para melhorar a coesão.');}else{score+=4;tips.push('Utilize conectivos (contudo, ademais, portanto).');}
  if(['é essencial','é necessário','deve-se','torna-se','faz-se necessário'].some(c=>t.includes(c)))score+=20;else tips.push('Construa uma tese clara e uma proposta na conclusão.');
  if(!tips.length)tips.push('Excelente! Revise ortografia e pontuação antes da prova.');
  const fb=$id('essayFeedback');
  if(fb){fb.classList.remove('hidden');fb.innerHTML=`<div class="efb-score">${score}/100</div><div class="efb-label">${score>=80?'🏆 Excelente':score>=60?'👍 Bom trabalho':'📈 Precisa melhorar'}</div><div class="efb-tips">${tips.map(t=>`<div class="efb-tip">→ ${t}</div>`).join('')}</div>`;}
  toast(`📝 Redação avaliada: ${score}/100`,score>=80?'success':'');return score;
}
function saveEssay(){
  const title=$id('essayTitle')?.value?.trim()||'Sem título';const text=$id('essayText')?.value?.trim()||'';const topic=$id('essayTopic')?.value||'';
  if(!text){toast('Escreva antes de salvar.');return;}const score=evaluateEssay();
  updateState(s=>{if(!s.essayEntries)s.essayEntries=[];s.essayEntries.unshift({id:Date.now(),title,text,topic,score,date:new Date().toLocaleDateString('pt-BR'),words:(text.match(/\S+/g)||[]).length});s.essayEntries=s.essayEntries.slice(0,30);});
  addXP(50+score,`Redação: ${score}/100`);toast('💾 Redação salva!','success');renderEssayDashboard();checkAchievements(loadState());
}
function renderEssayDashboard(){
  const st=loadState();const essays=st.essayEntries||[];const avg=essays.length?Math.round(essays.reduce((a,e)=>a+e.score,0)/essays.length):0;const best=essays.length?Math.max(...essays.map(e=>e.score)):0;
  const dash=$id('essayDash');if(dash)dash.innerHTML=[{val:essays.length,lbl:'Redações'},{val:avg?avg+'/100':'—',lbl:'Nota Média'},{val:best?best+'/100':'—',lbl:'Melhor'},{val:Math.min(essays.length,2)+'/2',lbl:'Meta Semanal'}].map(c=>`<div class="ed-card"><div class="ed-val">${c.val}</div><div class="ed-lbl">${c.lbl}</div></div>`).join('');
  const hist=$id('essayHistory');if(!hist)return;if(!essays.length){hist.innerHTML='<div style="color:var(--tm);font-size:.82rem;padding:10px">Nenhuma redação ainda.</div>';return;}
  hist.innerHTML=essays.map(e=>`<div class="eh-item" style="cursor:pointer" onclick="loadEssay(${e.id})"><div class="eh-date">${e.date}</div><div class="eh-title">${e.title}</div><div style="font-size:.7rem;color:var(--tm)">${e.words}p</div><div class="eh-score" style="color:${e.score>=80?'var(--acc3)':e.score>=60?'var(--acc4)':'var(--acc5)'}">${e.score}/100</div></div>`).join('');
}
function loadEssay(id){
  const st=loadState();const e=(st.essayEntries||[]).find(x=>x.id===id);if(!e)return;
  const ta=$id('essayTitle');if(ta)ta.value=e.title;const tb=$id('essayText');if(tb)tb.value=e.text;const sel=$id('essayTopic');if(sel)sel.value=e.topic;updateChecklist(e.text);
  document.querySelectorAll('.etab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.essay-panel').forEach(p=>p.classList.remove('active'));
  document.querySelector('.etab[data-etab="write"]')?.classList.add('active');$id('ep-write')?.classList.add('active');toast('Redação carregada para edição');
}
function renderEssayGuide(){
  const el=$id('essayGuide');if(!el)return;
  const guide=[
    {icon:'🎯',title:'Introdução',body:'Apresente o tema, contextualize com dados e estabeleça sua tese — a posição que você defenderá.',tips:['Não copie o enunciado','Contextualize com fato real','Escreva 3-4 linhas','Termine com tese clara']},
    {icon:'📝',title:'Desenvolvimento 1',body:'Primeiro argumento com fundamentação. Use dados, exemplos e fatos concretos para sustentar sua posição.',tips:['Um argumento central','Cite dados reais','Use conectivos de exemplificação','5-6 linhas']},
    {icon:'📊',title:'Desenvolvimento 2',body:'Segundo argumento, diferente do primeiro. Explore outro ângulo para demonstrar capacidade analítica.',tips:['Use "Além disso", "Ademais"','Explore perspectiva diferente','Não repita o argumento anterior','5-6 linhas']},
    {icon:'🏁',title:'Conclusão + Proposta',body:'Retome a tese e apresente uma proposta concreta: agente, ação, instrumento, objetivo.',tips:['Use "Portanto", "Diante do exposto"','Cite agente real (governo, BB, sociedade)','Seja específico na proposta','3-4 linhas']},
  ];
  el.innerHTML=guide.map(g=>`<div class="guide-section"><div class="gs-icon">${g.icon}</div><div class="gs-title">${g.title}</div><div class="gs-body">${g.body}</div><div class="gs-tips">${g.tips.map(t=>`<div class="gs-tip">${t}</div>`).join('')}</div></div>`).join('');
}
function renderEssayTopics(){
  const grid=$id('essayTopicsGrid');if(!grid)return;
  const render=f=>{const items=f==='all'?ESSAY_TOPICS:ESSAY_TOPICS.filter(t=>t.level===f);grid.innerHTML=items.map(t=>`<div class="et-card" onclick="selectTopic('${t.topic.replace(/'/g,"\\'")}')"><div class="et-level ${t.level}">${t.level.toUpperCase()}</div><div class="et-topic">${t.topic}</div><div class="et-hint">${t.hint}</div></div>`).join('');};
  render('all');
  if(!_essayTopicsFilterInit){_essayTopicsFilterInit=true;document.querySelectorAll('.topics-filter .filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.topics-filter .filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.tf);}));}
}
function selectTopic(topic){
  const sel=$id('essayTopic');if(sel)sel.value=topic;const ta=$id('essayTitle');if(ta)ta.value=topic.substring(0,60);
  document.querySelectorAll('.etab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.essay-panel').forEach(p=>p.classList.remove('active'));
  document.querySelector('.etab[data-etab="write"]')?.classList.add('active');$id('ep-write')?.classList.add('active');$id('essayText')?.focus();toast('📝 Tema selecionado — escreva!');
}
function renderEssayTips(){const el=$id('essayTipsGrid');if(!el)return;el.innerHTML=ESSAY_TIPS.map(t=>`<div class="etip-card"><div class="etip-icon">${t.icon}</div><div class="etip-title">${t.title}</div><div class="etip-body">${t.body}</div></div>`).join('');}

/* ── RESOURCES ── */
function renderResources(){
  const grid=$id('resourcesGrid');if(!grid)return;
  const ti={youtube:'▶',course:'🎓',doc:'📄'};
  grid.innerHTML=RESOURCES.map(r=>`<div class="res-card"><div class="rc-hdr"><span class="rc-icon">${r.icon}</span><span class="rc-name">${r.subj}</span></div><div class="rc-links">${r.links.map(l=>`<a class="rc-link" href="${l.url}" target="_blank" rel="noopener"><span class="rl-type ${l.type}">${ti[l.type]||'🔗'}</span><span>${l.label}</span><span style="margin-left:auto;opacity:.5;font-size:.7rem">↗</span></a>`).join('')}</div></div>`).join('');
}

/* ── ANALYSIS ── */
function initAnalysisCharts(){
  Chart.defaults.color='#7a8094';Chart.defaults.borderColor='#2a2e38';
  const colors=['#5b8af5','#30d5a8','#7c5cf6','#f5c842','#f5695b','#5b8af5','#30d5a8','#7c5cf6','#f5c842','#f5695b','#30d5a8'];
  const dCtx=$id('anaDistChart');if(dCtx){if(_charts.anaDist)_charts.anaDist.destroy();_charts.anaDist=new Chart(dCtx,{type:'bar',data:{labels:BB2023.labels,datasets:[{data:BB2023.dist,backgroundColor:colors.map(c=>c+'99'),borderColor:colors,borderWidth:1.5,borderRadius:5}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{size:10}}},y:{grid:{color:'#1e2229'},beginAtZero:true}}}});}
  const difCtx=$id('anaDiffChart');if(difCtx){if(_charts.anaDiff)_charts.anaDiff.destroy();_charts.anaDiff=new Chart(difCtx,{type:'doughnut',data:{labels:['Fácil','Médio','Difícil'],datasets:[{data:[BB2023.diff.easy,BB2023.diff.medium,BB2023.diff.hard],backgroundColor:['rgba(48,213,168,.7)','rgba(245,200,66,.7)','rgba(245,105,91,.7)'],borderColor:['#30d5a8','#f5c842','#f5695b'],borderWidth:2}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}},cutout:'55%'}});}
  const focCtx=$id('anaFocusChart');if(focCtx){if(_charts.anaFocus)_charts.anaFocus.destroy();_charts.anaFocus=new Chart(focCtx,{type:'bar',data:{labels:BB2023.labels,datasets:[{data:BB2023.priority,backgroundColor:'rgba(91,138,245,.5)',borderColor:'#5b8af5',borderWidth:1.5,borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{grid:{color:'#1e2229'},beginAtZero:true,max:100},y:{grid:{display:false},ticks:{font:{size:10}}}}}});}
  const ins=$id('analysisInsights');if(ins)ins.innerHTML=BB2023.insights.map(i=>`<div class="ai-card"><div class="aic-icon">${i.icon}</div><div class="aic-title">${i.title}</div><div class="aic-body">${i.body}</div></div>`).join('');
}

/* ── GAMIFICATION ── */
function renderGamification(){
  const st=loadState();
  const lg=$id('levelsGrid');if(lg)lg.innerHTML=LEVELS.map(l=>{const cur=st.level===l.lv;const unl=st.totalXP>=l.xp;return`<div class="lv-card ${cur?'current':unl?'unlocked':'locked'}"><div class="lv-icon">${l.icon}</div><div class="lv-num">Level ${l.lv}</div><div class="lv-name">${l.name}</div><div class="lv-xp">${l.xp.toLocaleString()} XP</div>${cur?'<div style="font-size:.6rem;color:var(--acc);font-weight:700;margin-top:4px">ATUAL</div>':''}</div>`;}).join('');
  const rg=$id('rewardsGrid');if(rg)rg.innerHTML=WEEKLY_REWARDS.map((r,i)=>{const done=(st.weeksCompleted||0)>i;return`<div class="rw-card ${done?'done':''}"><div class="rw-icon">${r.icon}</div><div class="rw-week">Semana ${r.week}</div><div class="rw-title">${r.title}</div><div class="rw-reward">${r.reward}</div>${done?'<div style="font-size:.62rem;color:var(--acc4);font-weight:700;margin-top:5px">✓ OBTIDA</div>':''}</div>`;}).join('');
  const bg=$id('badgesGrid');if(bg)bg.innerHTML=ACHIEVEMENTS.map(ach=>{const unl=(st.unlockedAchievements||[]).includes(ach.id);return`<div class="badge-card ${unl?'unlocked':'locked'}"><span class="badge-icon">${ach.icon}</span><div class="badge-name">${ach.name}</div><div class="badge-desc">${ach.desc}</div><span class="badge-status">${unl?'✓ DESBLOQUEADO':'Bloqueado'}</span></div>`;}).join('');
}

/* ── TIMER ── */
const TMR={
  modes:{pomodoro:{lbl:'FOCO',mins:25,color:'#5b8af5'},short:{lbl:'PAUSA CURTA',mins:5,color:'#30d5a8'},long:{lbl:'PAUSA LONGA',mins:15,color:'#7c5cf6'},deep:{lbl:'DEEP WORK',mins:50,color:'#f5c842'}},
  mode:'pomodoro',left:25*60,running:false,int:null,circ:533.8,
  init(){this.reset();$id('tStart')?.addEventListener('click',()=>this.toggle());$id('tReset')?.addEventListener('click',()=>this.reset());$id('tSkip')?.addEventListener('click',()=>this.complete());document.querySelectorAll('.ttab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.ttab').forEach(x=>x.classList.remove('active'));b.classList.add('active');this.mode=b.dataset.tm;this.reset();}));const sel=$id('timerSubj');if(sel&&sel.options.length<=1){const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];all.forEach(s=>{const o=document.createElement('option');o.value=s.id;o.textContent=`${s.icon} ${s.name}`;sel.appendChild(o);});}this.renderSess();this.renderLog();},
  toggle(){this.running?this.pause():this.start();},
  start(){this.running=true;$id('tStart').textContent='⏸ Pausar';this.int=setInterval(()=>this.tick(),1000);},
  pause(){this.running=false;$id('tStart').textContent='▶ Continuar';clearInterval(this.int);},
  tick(){if(this.left<=0){this.complete();return;}this.left--;this.render();},
  complete(){
    clearInterval(this.int);this.running=false;$id('tStart').textContent='▶ Iniciar';
    if(this.mode==='pomodoro'||this.mode==='deep'){const subj=$id('timerSubj')?.value;const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];const sName=subj?(all.find(s=>s.id===subj)?.name||'Geral'):'Geral';const xpAmt=this.mode==='deep'?100:50;updateState(s=>{s.pomodoros=(s.pomodoros||0)+1;if(!s.timerLog)s.timerLog=[];s.timerLog.unshift({subj:sName,time:new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),mode:this.mode});s.timerLog=s.timerLog.slice(0,20);});addXP(xpAmt,`Sessão: ${sName}`);toast(`🍅 +${xpAmt} XP!`,'success');this.renderSess();this.renderLog();checkAchievements(loadState());}this.reset();},
  reset(){clearInterval(this.int);this.running=false;const m=this.modes[this.mode];this.left=m.mins*60;$id('tStart').textContent='▶ Iniciar';setT('timerLbl',m.lbl);const ring=$id('timerRing');if(ring)ring.style.stroke=m.color;this.render();},
  render(){const m=String(Math.floor(this.left/60)).padStart(2,'0');const s=String(this.left%60).padStart(2,'0');setT('timerTime',`${m}:${s}`);const total=this.modes[this.mode].mins*60;const ring=$id('timerRing');if(ring)ring.style.strokeDashoffset=this.circ*(this.left/total);},
  renderSess(){const st=loadState();const n=(st.pomodoros||0)%4;const dots=$id('timerDots');if(dots)dots.innerHTML=Array.from({length:4},(_,i)=>`<div class="tdot${i<n?' filled':''}"></div>`).join('');setT('timerSessN',st.pomodoros||0);},
  renderLog(){const st=loadState();const el=$id('timerLog');if(!el)return;if(!(st.timerLog||[]).length){el.innerHTML='<div style="color:var(--tm);font-size:.75rem;padding:8px">Nenhuma sessão ainda.</div>';return;}const ml={pomodoro:'🍅 Foco',deep:'🌊 Deep Work',short:'☕ Pausa'};el.innerHTML=(st.timerLog||[]).map(l=>`<div class="tl-item"><span class="tl-mode">${ml[l.mode]||l.mode}</span><span style="flex:1;margin:0 8px;font-size:.75rem">${l.subj}</span><span style="font-size:.7rem;color:var(--td)">${l.time}</span></div>`).join('');}
};

/* ── JOURNAL ── */
function initJournal(){$id('jDate').value=new Date().toISOString().split('T')[0];$id('jSave')?.addEventListener('click',saveJournal);}
function saveJournal(){const date=$id('jDate')?.value;const type=$id('jType')?.value;const text=$id('jText')?.value?.trim();if(!text){toast('Escreva antes de salvar.');return;}updateState(s=>{if(!s.journalEntries)s.journalEntries=[];s.journalEntries.unshift({date,type,text,id:Date.now()});s.journalEntries=s.journalEntries.slice(0,50);});$id('jText').value='';addXP(15,'Diário');toast('📓 Nota salva!','success');renderJournal();}
function renderJournal(){const st=loadState();const list=$id('jList');if(!list)return;const entries=st.journalEntries||[];if(!entries.length){list.innerHTML='<div style="color:var(--tm);font-size:.78rem;padding:8px">Nenhuma entrada ainda.</div>';return;}const labs={daily:'Nota Diária',weekly:'Revisão Semanal',monthly:'Relatório Mensal'};list.innerHTML=entries.map(e=>`<div class="jl-item" onclick="loadJournal(${e.id})"><div class="jl-date">${e.date} · ${labs[e.type]||e.type}</div><div class="jl-preview">${e.text.substring(0,120)}${e.text.length>120?'…':''}</div></div>`).join('');}
function loadJournal(id){const st=loadState();const e=(st.journalEntries||[]).find(x=>x.id===id);if(!e)return;$id('jDate').value=e.date;$id('jType').value=e.type;$id('jText').value=e.text;}

/* ── ANALYTICS ── */
function renderAnalytics(){
  const st=loadState();const all=[...SUBJECTS_TI,...SUBJECTS_PT,...SUBJECTS_EN,...SUBJECTS_MAT];
  const tt=all.reduce((a,s)=>a+s.topics.length,0);const td=Object.values(st.completedTopics||{}).filter(Boolean).length;const pct=tt?Math.round(td/tt*100):0;const lastMock=(st.mockHistory||[]).slice(-1)[0];
  const sg=$id('anaStats');if(sg)sg.innerHTML=[{l:'XP Total',v:st.totalXP||0},{l:'Level',v:`${st.level||1} — ${getLvData(st.totalXP).name}`},{l:'Streak',v:`${st.streak||0} dias`},{l:'Pomodoros',v:st.pomodoros||0},{l:'Tópicos',v:`${td}/${tt}`},{l:'Conclusão',v:pct+'%'},{l:'Simulados',v:(st.mockHistory||[]).length},{l:'Redações',v:(st.essayEntries||[]).length},{l:'Melhor Sim',v:lastMock?Math.round(lastMock.score/lastMock.total*100)+'%':'—'},{l:'Dias p/ Prova',v:daysUntilExam()}].map(s=>`<div class="as-card"><div class="as-lbl">${s.l}</div><div class="as-val">${s.v}</div></div>`).join('');
  const tCtx=$id('anaTrendChart');if(tCtx){if(_charts.anaTrend)_charts.anaTrend.destroy();const trend=Array.from({length:7},(_,i)=>Math.max(0,pct-(6-i)*1.2));_charts.anaTrend=new Chart(tCtx,{type:'line',data:{labels:['6d','5d','4d','3d','2d','1d','Hoje'],datasets:[{data:trend.map(v=>+v.toFixed(1)),borderColor:'#30d5a8',backgroundColor:'rgba(48,213,168,.08)',fill:true,tension:.4,pointRadius:4,pointBackgroundColor:'#30d5a8'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{grid:{color:'#1e2229'},min:0,max:100,ticks:{callback:v=>v+'%'}}}}});}
  const rCtx=$id('anaRadar');if(rCtx){if(_charts.anaRadar)_charts.anaRadar.destroy();_charts.anaRadar=new Chart(rCtx,{type:'radar',data:{labels:SUBJECTS_TI.map(s=>s.name.split(' ')[0]),datasets:[{data:SUBJECTS_TI.map(s=>calcSubPct(s.id,st)),borderColor:'#5b8af5',backgroundColor:'rgba(91,138,245,.15)',borderWidth:2,pointBackgroundColor:'#5b8af5',pointRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{r:{grid:{color:'#2a2e38'},angleLines:{color:'#2a2e38'},ticks:{display:false},min:0,max:100,pointLabels:{font:{size:10},color:'#7a8094'}}}}});}
  const pCtx=$id('anaPolar');if(pCtx){if(_charts.anaPolar)_charts.anaPolar.destroy();const groups=[{n:'TI',p:calcGroupPct(SUBJECTS_TI,st),c:'#5b8af5'},{n:'Português',p:calcGroupPct(SUBJECTS_PT,st),c:'#30d5a8'},{n:'English',p:calcGroupPct(SUBJECTS_EN,st),c:'#7c5cf6'},{n:'Matemática',p:calcGroupPct(SUBJECTS_MAT,st),c:'#f5c842'}];_charts.anaPolar=new Chart(pCtx,{type:'polarArea',data:{labels:groups.map(g=>g.n),datasets:[{data:groups.map(g=>g.p||1),backgroundColor:groups.map(g=>g.c+'aa')}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{font:{size:11}}}},scales:{r:{grid:{color:'#2a2e38'},ticks:{display:false}}}}});}
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded',()=>{
  Chart.defaults.color='#7a8094';Chart.defaults.borderColor='#2a2e38';Chart.defaults.font.family="'JetBrains Mono',monospace";
  const st=loadState();refreshXPUI(st);initNav();initQuiz();initMock();TMR.init();initJournal();
  setT('topDate',new Date().toLocaleDateString('pt-BR',{weekday:'short',day:'2-digit',month:'short'}));setT('examDays',daysUntilExam());
  setInterval(()=>setT('topDate',new Date().toLocaleDateString('pt-BR',{weekday:'short',day:'2-digit',month:'short'})),60000);
  navigate('overview');checkAchievements(st);
  console.log('%cBB·TI Platform v6 ✓','color:#5b8af5;font-family:monospace;font-size:14px;font-weight:bold');
});