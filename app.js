const S={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){localStorage.setItem(k,JSON.stringify(v))},del(k){localStorage.removeItem(k)}}
const K="dlp.nickname",D="dlp.startDate",R="dlp.rankTarget",E="dlp.dayStart",C="dlp.completed",G="dlp.knowledge",A="dlp.actions"
const PRESET_ACTIONS=[
"第1天：認清直銷的本質—分享價值，而不是推銷產品",
"第2天：設定你的90天目標（收入目標、團隊目標、學習目標）",
"第3天：熟悉公司背景、產品線、制度與品牌定位",
"第4天：建立你的個人故事（為何加入？為何是現在？）",
"第5天：列出你人生5大動力（健康、家人、財務、時間、夢想）",
"第6天：理解複製的重要性：簡單、可講、可複製",
"第7天：建立你的前三支必講話術：介紹自己 / 介紹產品 / 介紹商機",
"第8天：了解產品的核心價值（簡單、有效、好喝、方便）",
"第9天：學會說人話，而不是技術話（避免深奧成分）",
"第10天：每天使用產品，成為最佳見證者",
"第11天：學會用3句話講完產品",
"第12天：練習30秒產品故事",
"第13天：練習30秒商機故事",
"第14天：學習溝通三要素：真誠、利益、簡單",
"第15天：建立名單—不限親友，從需求找人而不是關係找人",
"第16天：名單分類（A熱、B溫、C冷）",
"第17天：學會需求問句（為什麼想變健康？為什麼想額外收入？）",
"第18天：學會找痛點不找對錯",
"第19天：建立每天3人以上聯繫習慣",
"第20天：學習社群溝通，不要硬塞資訊",
"第21天：練習講出產品的三大客戶族群",
"第22天：學會用見證說話，不要自己誇",
"第23天：蒐集5個消費者見證",
"第24天：蒐集5個分享者見證",
"第25天：蒐集3個經營者見證",
"第26天：學會用圖表、數字建立信任感",
"第27天：產品體驗日記—成為最佳示範",
"第28天：學會面對質疑（保持專業，不要反擊）",
"第29天：了解團隊文化與規則（你不是一個人）",
"第30天：學會複製團隊最有效流程",
"第31天：練習一起行動而不是單打獨鬥",
"第32天：學會在團隊群組專業發言",
"第33天：固定參與每週會議",
"第34天：與上線確認你的目標與進度",
"第35天：觀摩一次上線的分享流程",
"第36天：開始引導朋友加入體驗產品",
"第37天：學會做一場簡單產品體驗會",
"第38天：學會使用簡報或PPT輔助（越簡單越好）",
"第39天：學會帶新人認識產品流程",
"第40天：學會如何協助新人訂第一單",
"第41天：理解「不是每個人都會加入」是正常的",
"第42天：學會找對人，而不是找所有人",
"第43天：建立每日成功追蹤表（聯繫、邀約、成交）",
"第44天：學會整理顧客資料",
"第45天：顧客服務：學會三階段回訪（1天、7天、30天）",
"第46天：學會用問題式銷售（不是推，是讓對方說）",
"第47天：累積你的成功案例",
"第48天：學會用故事帶出價值，而不是理論",
"第49天：開始練習1對1商機說明",
"第50天：學會什麼是「消費者→分享者→經營者」的路徑",
"第51天：開始引導消費者分享心得",
"第52天：提供你的客戶可複製的內容（文字、影片、照片）",
"第53天：學會組織裂變的正確心法",
"第54天：建立屬於你的團隊群組",
"第55天：帶著新人一起行動—不是叫他做，是你做給他看",
"第56天：學會開線上說明會（Zoom/LINE）",
"第57天：學會快速講制度，不講太多細節",
"第58天：學會公司最有力量的制度亮點",
"第59天：學會用制度鼓勵新人，而不是壓力",
"第60天：了解直銷中最難的是「堅持」不是「技巧」",
"第61天：了解你的情緒管理",
"第62天：避免三大新人陷阱：分析太多、問太多、做太少",
"第63天：不要與負面的人糾纏，把時間放在願意的人身上",
"第64天：學會拍攝短影片介紹產品（簡單故事即可）",
"第65天：打造你的個人品牌（健康、生活、理念）",
"第66天：建立社群排程（固定分享價值、見證、生活）",
"第67天：建立你的產品資料庫（圖、文、影片）",
"第68天：建立你的常見QA資料庫",
"第69天：整理你的演講話術（開場、產品、商機）",
"第70天：學會做一場15分鐘商機說明",
"第71天：了解誰才是你的真正市場（需求>關係）",
"第72天：學會三大成交技巧：選擇題、見證、下一步",
"第73天：學會如何讓顧客願意持續使用產品",
"第74天：學會讓顧客轉介紹、轉分享",
"第75天：開始培育第一位經營者",
"第76天：學會分辨想做 vs. 真的會做的人",
"第77天：把焦點放在3個願意做的人，而不是抱怨的人",
"第78天：回顧你的產品故事並更新版本",
"第79天：回顧你的商機故事並更新版本",
"第80天：整理你的每月數據（邀約/成交/續訂）",
"第81天：建立你的個人90天循環系統",
"第82天：把流程簡化給你的新人（越簡單越能複製）",
"第83天：建立你的「一頁式產品講義」",
"第84天：建立你的「一頁式商機講義」",
"第85天：學會激勵團隊（肯定、陪伴、方向）",
"第86天：學會處理團隊問題（溝通、調整、延續）",
"第87天：建立你的團隊文化（正面、行動、紀律）",
"第88天：打造一個新人7天啟動流程",
"第89天：打造一個新人30天複製流程",
"第90天：調整下一個90天目標—正式進入領導者角色"
]

const KCARDS="dlp.planCards"
const HUMOR_LINES=[
"今天不完美，但我很可愛",
"失敗不可怕，可怕的是沒笑容",
"保持幽默，你的努力會被看見",
"減肥不難，我有367",
"笑一笑，卡路里都被嚇跑",
"正能量不加糖也很甜",
"自己要養生，不要靠醫生",
"累了就休息，醒來繼續前進",
"成功沒祕訣，持續做有趣的事",
"先把心情整理好，世界就會排序",
"今天也要把可愛發給世界",
"自信是最好的濾鏡",
"每天進步一點點，幽默加一公克",
"把焦慮換成笑聲，效果更持久",
"每個時代，都有創富機會",
"目標越大，障礙越小",
"保持好奇，宇宙會回你梗",
"做自己版本的主角",
"心態對了，努力就有戲",
"遇到阻礙，先喝水再微笑",
"把抱怨改成段子",
"正能量是可以傳染的笑",
"人生不必完美，真實最迷人",
"低潮不可怕，可怕的是沒睡飽",
"我是可愛又可靠的那種人",
"今天的我比昨天更幽默",
"持續出現，把故事說好",
"讓努力和幽默做朋友",
"一點耐心，一點笑容，一點奇蹟",
"可愛不是裝的，是習慣"
]

function getPlanCards(){const a=S.get(KCARDS);return Array.isArray(a)?a:[]}
function setPlanCards(a){S.set(KCARDS,a)}
function addPlanCard(card){const a=getPlanCards();const i=a.findIndex(x=>String(x.date)===String(card.date));if(i>=0){const oldItems=Array.isArray(a[i].items)?a[i].items:[];const newItems=Array.isArray(card.items)?card.items:[];a[i].items=oldItems.concat(newItems);a[i].target=card.target||a[i].target}else{a.push(card)}while(a.length>8)a.shift();setPlanCards(a)}
function renderPlanCards(){const el=document.getElementById("planCards");if(!el)return;const a=getPlanCards();el.innerHTML=a.map(c=>{const dt=typeof c.date==="string"?c.date:formatDate(c.date);const items=Array.isArray(c.items)&&c.items.length?c.items:((c.time||c.action)?[{time:c.time||"",action:c.action||""}]:[]);return `<div class="card card-blue"><div class="section-title">${dt}</div><div class="muted">目標：${c.target}</div><div class="space"></div>${items.map(i=>`<div class=\"muted\">時間：${i.time}｜行動：${i.action}</div>`).join("")}</div>`}).join("")}
const PRESET_KNOWLEDGE=[
"第1天：今天開始，我選擇成為更好的自己，而不是更好的別人。",
"第2天：真正能改變人生的，是我每天一點點的行動。",
"第3天：成功不靠運氣，而是靠持續出現。",
"第4天：我有能力學會任何讓我成功的技能。",
"第5天：每一次分享，都讓我更接近我的目標。",
"第6天：我值得賺更多，也值得更好的生活。",
"第7天：拒絕不是否定，是提醒我要找到對的人。",
"第8天：行動治百憂，不行動才會焦慮。",
"第9天：我越專業，客戶越信任我。",
"第10天：先成為那個讓人願意跟隨的人。",
"第11天：每天學一點，半年後我會有巨大差距。",
"第12天：困難不是阻礙，而是成長的入口。",
"第13天：怕什麼學什麼，缺什麼補什麼。",
"第14天：我值得擁有我的目標，也有資格追求它。",
"第15天：我選擇相信自己，而不是懷疑自己。",
"第16天：今天的努力，是明天的禮物。",
"第17天：我不需要一次做完，只需要開始做。",
"第18天：越分享，越幸運；越行動，越成功。",
"第19天：每次開口，就是一次練功。",
"第20天：我不是推銷，我是在提供價值。",
"第21天：我說的話，對的人會聽得懂。",
"第22天：我專注在願意的人，而不是浪費在拒絕的人。",
"第23天：做對的事情，比討好每一個人重要。",
"第24天：成功不是看速度，而是看方向。",
"第25天：我每天都在累積能量，而不是浪費時間。",
"第26天：我越鍛鍊，越自信。",
"第27天：同樣的苦，成功的人選擇堅持，平庸的人選擇放棄。",
"第28天：我不比較，我進步就好。",
"第29天：越想做大，就越要提升自己的格局。",
"第30天：我願意為我的未來負責，不怪罪、不抱怨。",
"第31天：我值得被看見，也值得被選擇。",
"第32天：只要不放棄，晚一點成功不是問題。",
"第33天：成功不是爆發，是累積。",
"第34天：我的夢想需要我主動捍衛。",
"第35天：我相信自己所做的每一步都算數。",
"第36天：我越正面，越能吸引正面的人。",
"第37天：我用態度創造機會。",
"第38天：恐懼是假象，行動才是真的力量。",
"第39天：沒有一件小事是不重要的。",
"第40天：我正在成為團隊中可靠的人。",
"第41天：每天一點勇氣，很快我會變得不可阻擋。",
"第42天：成功者不是沒有壓力，是能把壓力變成力量。",
"第43天：我把挫折當老師，而不是敵人。",
"第44天：如果我願意學，我就一定會變強。",
"第45天：我做每件事都值得未來的我感謝。",
"第46天：我的行動會創造結果，而不是運氣。",
"第47天：我在挑戰自己，而不是討好任何人。",
"第48天：習慣不會騙人，結果會。",
"第49天：我越努力，就越有選擇權。",
"第50天：我要讓家人、團隊、未來的我感到驕傲。",
"第51天：我不是孤單，我是團隊的一份力量。",
"第52天：我的價值會吸引值得的人。",
"第53天：現在的付出，是未來的被動收入。",
"第54天：我靠專業建立信任，不靠話術。",
"第55天：每次練習，都讓我離高手更近一步。",
"第56天：我的故事，就是最好的推廣工具。",
"第57天：我願意再多走一步，因為那一步通常有奇蹟。",
"第58天：我不是被要求，我是自願成功。",
"第59天：我做的每個決定，都讓我的生活更清晰。",
"第60天：目標是我的方向，不是我的壓力。",
"第61天：當我變得穩定，收入也會變得穩定。",
"第62天：我要吸引同頻的人，而不是硬拉不願意的人。",
"第63天：放大長處，而不是盯著短處。",
"第64天：我願意為自己的夢想努力到讓自己感動。",
"第65天：我越清楚自己的價值，越能影響他人。",
"第66天：不急於結果，只踏實於行動。",
"第67天：我正在打造一個循環收入的未來。",
"第68天：我不是找客戶，我是在找願意變好的人。",
"第69天：我越分享，越能吸引和我一樣的人。",
"第70天：我值得成功，也準備好成功。",
"第71天：每天讓一件事比昨天更好，我就會變強。",
"第72天：我每講一次，我就進步一次。",
"第73天：我不是在工作，而是在打造我的事業。",
"第74天：我相信付出不會白費。",
"第75天：成功需要時間，而我願意等待又努力。",
"第76天：我成為別人生命中的改變者。",
"第77天：我越穩定，越能帶出穩定的團隊。",
"第78天：不被看好不等於做不到。",
"第79天：真正的高手都是從笨拙開始的。",
"第80天：我每天都在為自己的夢想前進。",
"第81天：我選擇勇敢，而不是退縮。",
"第82天：我比自己想像的更有力量。",
"第83天：我相信自己可以做到，即使需要時間。",
"第84天：我的成功，是日積月累的結果。",
"第85天：我正在成為領袖，而不是跟隨者。",
"第86天：我願意承擔，我也願意突破。",
"第87天：我相信我的團隊，也相信我的未來。",
"第88天：我值得被信任，也值得被跟隨。",
"第89天：我已經比 90 天前的自己更強大。",
"第90天：今天開始，我要把這份力量傳給下一個人。"
]
function now(){return Date.now()}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
function dayNumber(){const d=S.get(D);if(!d)return null;const n=Math.floor((now()-d)/86400000)+1;return clamp(n,1,90)}
function ensureArrays(){const knowledge=S.get(G);const actions=S.get(A);if(!Array.isArray(knowledge)||knowledge.length!==90)S.set(G,PRESET_KNOWLEDGE);if(!Array.isArray(actions)||actions.length!==90)S.set(A,PRESET_ACTIONS)}
function getCompletionMap(){return S.get(C)||{}}
function setCompletion(day,val){const m=getCompletionMap();m[day]=!!val;S.set(C,m)}
function formatStatus(day){const m=getCompletionMap();const c=m[day];return c?"今日已完成":"今日尚未完成"}
function show(el){el.style.display=""}
function hide(el){el.style.display="none"}
function revealCard(el,txt){el.textContent=txt;el.classList.add("revealed")}
function randomPick(arr){return arr[Math.floor(Math.random()*arr.length)]}
const PV30="dlp.pv30",PV60="dlp.pv60",PV90="dlp.pv90"
const HMAIN="dlp.health",HP30="dlp.hp30",HP60="dlp.hp60",HP90="dlp.hp90"
function startPlan(nickname,rankTarget,p30,p60,p90){S.set(K,nickname.trim());S.set(R,rankTarget.trim());if(p30)S.set(PV30,p30.trim());if(p60)S.set(PV60,p60.trim());if(p90)S.set(PV90,p90.trim());S.set(D,now());S.del(E);render();applyPVLabels();applyHealthLabels()}
function resetPlan(){S.del(K);S.del(R);S.del(D);S.del(E);S.del(C);S.del(PV30);S.del(PV60);S.del(PV90);S.del(HMAIN);S.del(HP30);S.del(HP60);S.del(HP90);applyPVLabels();applyHealthLabels()}
function currentDayStart(){return S.get(E)}
function markDayStart(){S.set(E,now());scheduleCheck()}
function timeUntilCheck(){const t=currentDayStart();if(!t)return null;const ten=10*3600000;const diff=now()-t;return ten-diff}
function scheduleCheck(){const r=timeUntilCheck();if(r==null)return;const b=document.getElementById("modalBackdrop");if(r<=0){b.style.display="flex";return}setTimeout(()=>{b.style.display="flex"},r)}
function closeModal(){document.getElementById("modalBackdrop").style.display="none"}
let pendingDelete=null
function render(){ensureArrays();const start=S.get(D);const nickname=S.get(K);const rankTarget=S.get(R);const vStart=document.getElementById("view-start");const vDaily=document.getElementById("view-daily");if(!start||!nickname||!rankTarget){hide(vDaily);show(vStart);return}const d=dayNumber();if(d===null){hide(vDaily);show(vStart);return}hide(vStart);show(vDaily);document.getElementById("dayNum").textContent=String(d);document.getElementById("nicknameLabel").textContent=nickname;const rl=document.getElementById("rankLabel");if(rl)rl.textContent=rankTarget;applyPVLabels();applyHealthLabels();document.getElementById("statusPill").textContent=formatStatus(d);const startDateText=formatDate(start);const endDateText=formatDate(start+89*86400000);const sd=document.getElementById("startDate");const ed=document.getElementById("endDate");if(sd)sd.textContent=startDateText;if(ed)ed.textContent=endDateText;const remaining=90-d+1;const cd=document.getElementById("countdownNum");if(cd)cd.textContent=String(remaining);const ch=document.getElementById("cardHumor");const ck=document.getElementById("cardKnowledge");const ca=document.getElementById("cardAction");if(ch){ch.textContent="每日一抽";ch.classList.remove("revealed")}ck.textContent="能量指引";ca.textContent="今日行動";ck.classList.remove("revealed");ca.classList.remove("revealed");const knowledge=S.get(G);const actions=S.get(A);const k=knowledge[d-1]||"(未設定)";const act=actions[d-1]||"(未設定)";if(ch){ch.onclick=async()=>{revealCard(ch,"載入中...");const phrase=await fetchHumorPositive();const txt=(phrase&&String(phrase).trim())?phrase:"(來源暫不可用)";revealCard(ch,txt);if(!currentDayStart())markDayStart();}}ck.onclick=()=>{revealCard(ck,k);if(!currentDayStart())markDayStart();};ca.onclick=()=>{revealCard(ca,act);if(!currentDayStart())markDayStart();};const m=getCompletionMap();const done=!!m[d];const btn=document.getElementById("completeBtn");btn.style.display=done?"none":"";btn.onclick=()=>{setCompletion(d,true);document.getElementById("statusPill").textContent=formatStatus(d);btn.style.display="none"};scheduleCheck()}
document.getElementById("startBtn").onclick=()=>{const n=document.getElementById("nickname").value;const r=document.getElementById("rankTarget").value;const p30=(document.getElementById("pv30")||{}).value||"";const p60=(document.getElementById("pv60")||{}).value||"";const p90=(document.getElementById("pv90")||{}).value||"";const hpEl=document.querySelector('input[name="healthPlanType"]:checked');const hp=hpEl?hpEl.value:"";const h30=(document.getElementById("hp30")||{}).value||"";const h60=(document.getElementById("hp60")||{}).value||"";const h90=(document.getElementById("hp90")||{}).value||"";if(!n.trim()||!r.trim()||!p30.trim()||!p60.trim()||!p90.trim())return;S.set(HMAIN,(hp||"").trim());if(h30.trim())S.set(HP30,h30.trim());if(h60.trim())S.set(HP60,h60.trim());if(h90.trim())S.set(HP90,h90.trim());startPlan(n,r,p30,p60,p90);applyHealthLabels()}
document.getElementById("resetBtn").onclick=()=>{resetPlan();render()}
document.getElementById("modalYes").onclick=()=>{const d=dayNumber();if(d)setCompletion(d,true);document.getElementById("statusPill").textContent=d?formatStatus(d):"";document.getElementById("completeBtn").style.display="none";closeModal()}
document.getElementById("modalNo").onclick=()=>{closeModal()}
document.getElementById("deleteYes").onclick=()=>{if(!pendingDelete){document.getElementById("deleteModalBackdrop").style.display="none";return}const {type,idx}=pendingDelete;if(type==='builder'){const a=getList('dlp.builders');a.splice(idx,1);S.set('dlp.builders',a)}else{const a=getList('dlp.customers');a.splice(idx,1);S.set('dlp.customers',a)}pendingDelete=null;document.getElementById("deleteModalBackdrop").style.display="none";renderLists()}
document.getElementById("deleteNo").onclick=()=>{pendingDelete=null;document.getElementById("deleteModalBackdrop").style.display="none"}
render();renderCalendar();applyPVLabels();applyHealthLabels();renderLists();renderPlanCards();scheduleCheck()
function formatDate(ts){const d=new Date(ts);const y=d.getFullYear();const m=String(d.getMonth()+1).padStart(2,"0");const day=String(d.getDate()).padStart(2,"0");return `${y}/${m}/${day}`}
async function toZhTw(t){try{const u="https://api.zhconvert.org/convert?from=zh-cn&to=zh-tw&text="+encodeURIComponent(t);const r=await fetch(u);if(r.ok){const j=await r.json();return (j.data&&j.data.text)||j.text||t}}catch(e){}return t}
async function fetchFromWei(){return null}
async function fetchPositive(){return ""}
async function loadPreset(){const el=document.getElementById("presetData");if(el){try{const txt=el.textContent||"";const data=JSON.parse(txt);if(Array.isArray(data.knowledge)&&Array.isArray(data.actions)&&data.knowledge.length===90&&data.actions.length===90){S.set(G,data.knowledge);S.set(A,data.actions);render();return}}catch(e){}}try{const r=await fetch("preset_data.json");if(r.ok){const data=await r.json();if(Array.isArray(data.knowledge)&&Array.isArray(data.actions)&&data.knowledge.length===90&&data.actions.length===90){S.set(G,data.knowledge);S.set(A,data.actions);render()}}}catch(e){}
}
loadPreset()

async function fetchHumorPositive(){const pool=HUMOR_LINES;return (Array.isArray(pool)&&pool.length)?randomPick(pool):"(來源暫不可用)"}
function renderCalendar(){const container=document.getElementById("calendar");if(!container)return;const nowDate=new Date();const y=nowDate.getFullYear();const m=nowDate.getMonth();const first=new Date(y,m,1);const last=new Date(y,m+1,0);const days=last.getDate();const startDow=first.getDay();const label=`${y}/${String(m+1).padStart(2,"0")}`;const dows=["日","一","二","三","四","五","六"];let html="";html+=`<div class=\"cal-header\"><div>${label}</div></div>`;html+=`<div class=\"cal-grid\">${dows.map(d=>`<div class=\\\"cal-cell cal-dow\\\">${d}</div>`).join("")}`;for(let i=0;i<startDow;i++){html+=`<div class=\\\"cal-cell cal-empty\\\"></div>`}for(let day=1;day<=days;day++){const isToday=(nowDate.getDate()===day);const cls=isToday?"cal-cell cal-today":"cal-cell";html+=`<div class=\\\"${cls}\\\">${day}</div>`}const filled=startDow+days;const tail=(7-(filled%7))%7;for(let i=0;i<tail;i++){html+=`<div class=\\\"cal-cell cal-empty\\\"></div>`}html+="</div>";container.innerHTML=html}
function getList(key){const a=S.get(key);return Array.isArray(a)?a:[]}
function setList(key,a){S.set(key,a)}
function addBuilder(name){const a=getList('dlp.builders');a.push(name.trim());setList('dlp.builders',a)}
function addCustomer(name){const a=getList('dlp.customers');a.push(name.trim());setList('dlp.customers',a)}
function renderLists(){const bc=document.getElementById("builderCards");const cc=document.getElementById("customerCards");if(!bc||!cc)return;const bs=getList('dlp.builders');const cs=getList('dlp.customers');bc.innerHTML=`<div class="card card-pink"><div class="section-title">經營者</div><div class="names">${bs.map((t,i)=>`<span class="name-pill" data-type="builder" data-idx="${i}">${t}</span>`).join("")}</div></div>`;cc.innerHTML=`<div class="card card-pink"><div class="section-title">消費者</div><div class="names">${cs.map((t,i)=>`<span class="name-pill" data-type="customer" data-idx="${i}">${t}</span>`).join("")}</div></div>`;attachLongPress(bc);attachLongPress(cc)}
function attachLongPress(container){let timer=null;container.querySelectorAll('.name-pill').forEach(el=>{const start=()=>{clearTimeout(timer);timer=setTimeout(()=>{const type=el.getAttribute('data-type');const idx=parseInt(el.getAttribute('data-idx'));pendingDelete={type,idx};document.getElementById('deleteModalBackdrop').style.display='flex'},600)};const cancel=()=>clearTimeout(timer);el.addEventListener('mousedown',start);el.addEventListener('mouseup',cancel);el.addEventListener('mouseleave',cancel);el.addEventListener('touchstart',start,{passive:true});el.addEventListener('touchend',cancel)} )}
document.getElementById("addBuilderBtn").onclick=()=>{const v=(document.getElementById("builderInput")||{}).value||"";if(!v.trim())return;addBuilder(v);const i=document.getElementById("builderInput");if(i)i.value="";renderLists()}
document.getElementById("addCustomerBtn").onclick=()=>{const v=(document.getElementById("customerInput")||{}).value||"";if(!v.trim())return;addCustomer(v);const i=document.getElementById("customerInput");if(i)i.value="";renderLists()}
document.getElementById("addPlanBtn").onclick=()=>{const d=(document.getElementById("planDate")||{}).value||"";const t=(document.getElementById("planTarget")||{}).value||"";const pairs=[];for(let i=1;i<=5;i++){const ti=(document.getElementById("planTime"+i)||{}).value||"";const ac=(document.getElementById("planAction"+i)||{}).value||"";if(ti.trim()&&ac.trim())pairs.push({time:ti,action:ac})}if(!d.trim()||!t.trim())return;addPlanCard({date:d,target:t,items:pairs});renderPlanCards()}

function applyPVLabels(){const p30=S.get(PV30)||"";const p60=S.get(PV60)||"";const p90=S.get(PV90)||"";const e30=document.getElementById("pv30Label");const e60=document.getElementById("pv60Label");const e90=document.getElementById("pv90Label");if(e30)e30.textContent=p30;if(e60)e60.textContent=p60;if(e90)e90.textContent=p90}
function applyHealthLabels(){const hp=S.get(HMAIN)||"";const h30=S.get(HP30)||"";const h60=S.get(HP60)||"";const h90=S.get(HP90)||"";const eHp=document.getElementById("healthPlanLabel");const e30=document.getElementById("hp30Label");const e60=document.getElementById("hp60Label");const e90=document.getElementById("hp90Label");if(eHp)eHp.textContent=hp;if(e30)e30.textContent=h30;if(e60)e60.textContent=h60;if(e90)e90.textContent=h90}
function purgeObsoleteData(){try{S.del('dlp.planCards');S.del('dlp.builders');S.del('dlp.customers')}catch(e){}}
