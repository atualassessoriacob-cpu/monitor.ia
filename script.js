/* ============================================
   Monitor.IA — Atual Assessoria — Script v5
   HTML/CSS/JS puro — localStorage only
   Cada navegador/dispositivo mantém dados próprios.
   Avaliações separadas por mês (monitorIA_aval_YYYY_MM).
   Permissões por cargo: Administrador, Coordenador, Supervisor, Monitor.
   ============================================ */

/* ======= DEFAULT OPERADORES ======= */
var DEFAULT_OPERADORES = [
    {nome:"DÉBORA FERREIRA GOMES",turno:"Manhã",carteira:"AEGEA"},
    {nome:"EDUARDA REZENDES",turno:"Manhã",carteira:"AEGEA"},
    {nome:"EDVANE BERNARDO DA SILVA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"LAIS MESSIAS DE OLIVEIRA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"MARIA EDUARDA DE LIMA MARA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"MARIA EDUARDA PRATES FERREIRA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"MIKAELI LIMA DE MATOS",turno:"Manhã",carteira:"AEGEA"},
    {nome:"NATHALIA PIMENTEL DE MELO MENDES",turno:"Manhã",carteira:"AEGEA"},
    {nome:"RYAN KARLLOS SOUZA RODRIGUES",turno:"Manhã",carteira:"AEGEA"},
    {nome:"HAMYEL DA SILVA EUSTAQUIO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"LARISSA AKEME ARAKAKI DA SILVA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"ALESSANDRA GONZALEZ BARBOSA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"FABRÍCIO MARQUES PEREIRA DA SILVA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"FRANCIELLY ARCE DE OLIVEIRA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"ÍTALA CRISTINA FRETES ROA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"JULIA ALMEIDA COLMAN",turno:"Manhã",carteira:"AEGEA"},
    {nome:"SINDEL SOARES AMARILHA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"MARIA EDUARDA SANTOS GUIMARÃES",turno:"Tarde",carteira:"AEGEA"},
    {nome:"ISABELLE EMILY DOS SANTOS SILVA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"MARIA EDUARDA AMORIM DE OLIVEIRA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"MARIA EDUARDA DIAS DE OLIVEIRA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"YASMIN ARAUJO DA SILVA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"JHULIA SEVERINO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"MILLENA MORAIS",turno:"Tarde",carteira:"AEGEA"},
    {nome:"LANA LUCIA GUILHERME",turno:"Tarde",carteira:"AEGEA"},
    {nome:"LETICIA FREIRE BRANDÃO COELHO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"NATHALIA LEITE RAMOS",turno:"Tarde",carteira:"AEGEA"},
    {nome:"LAÍSSA NUNES",turno:"Tarde",carteira:"AEGEA"},
    {nome:"MARIA CLARA DE JESUS VIEIRA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"EMILY MARQUES FERREIRA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"JULIA DINIZ FERREIRA DOS ANJOS",turno:"Tarde",carteira:"AEGEA"},
    {nome:"GABRIELLY MARTINS RODRIGUES",turno:"Tarde",carteira:"AEGEA"},
    {nome:"ANDERSON LUCAS PEREIRA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"BEATRIZ CAROLINE SANTOS",turno:"Manhã",carteira:"AEGEA"},
    {nome:"CARLOS HENRIQUE ALMEIDA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"DANIELA CRISTINA ROCHA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"EMERSON SOUZA LIMA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"FERNANDA APARECIDA COSTA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"GABRIEL AUGUSTO MARTINS",turno:"Manhã",carteira:"AEGEA"},
    {nome:"HELENA RIBEIRO DUARTE",turno:"Manhã",carteira:"AEGEA"},
    {nome:"IGOR FELIPE NASCIMENTO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"JULIANA BORGES CAMARGO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"KAIO VINICIUS TEIXEIRA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"LORENA FREITAS MONTEIRO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"MARCOS ANTONIO REZENDE",turno:"Manhã",carteira:"AEGEA"},
    {nome:"NICOLE APARECIDA BARBOSA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"OTAVIO HENRIQUE CARDOSO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"PATRICIA SOUZA MENDONÇA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"RAFAEL GUSTAVO PINTO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"SABRINA KELLY MACHADO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"THIAGO ROBERTO FERNANDES",turno:"Tarde",carteira:"AEGEA"},
    {nome:"URSULA BEATRIZ CAMPOS",turno:"Tarde",carteira:"AEGEA"},
    {nome:"VITOR HUGO NOGUEIRA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"WAGNER LUIS CAVALCANTE",turno:"Tarde",carteira:"AEGEA"},
    {nome:"XIMENA CAROLINA LOPES",turno:"Tarde",carteira:"AEGEA"},
    {nome:"YAGO MATHEUS CORREIA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"ZILDA MARIA ANDRADE",turno:"Tarde",carteira:"AEGEA"},
    {nome:"ANA PAULA VIEIRA LEAL",turno:"Tarde",carteira:"AEGEA"},
    {nome:"BRUNA STEPHANY ARAUJO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"CAIO ALEXANDRE MIRANDA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"DIANA CAROLINE FONSECA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"ELIAS FERNANDO MOREIRA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"FABIANA CRISTINA CUNHA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"GUSTAVO RAFAEL PARENTE",turno:"Tarde",carteira:"AEGEA"},
    {nome:"HELOISA MARIA TAVARES",turno:"Manhã",carteira:"AEGEA"},
    {nome:"ISABELA VITORIA RAMOS",turno:"Manhã",carteira:"AEGEA"},
    {nome:"JEFFERSON CARLOS NETO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"KARINA LUIZA SAMPAIO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"LEONARDO AUGUSTO BRAGA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"MARIANA FERREIRA BASTOS",turno:"Manhã",carteira:"AEGEA"},
    {nome:"NATALIA CRISTINA PACHECO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"PEDRO LUCAS CARVALHO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"QUEILA ROBERTA SOARES",turno:"Manhã",carteira:"AEGEA"},
    {nome:"RODRIGO ALVES MEDEIROS",turno:"Manhã",carteira:"AEGEA"},
    {nome:"SIMONE APARECIDA XAVIER",turno:"Manhã",carteira:"AEGEA"},
    {nome:"TAINÁ OLIVEIRA CASTRO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"ULISSES GABRIEL PRADO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"VANESSA LIMA GONÇALVES",turno:"Tarde",carteira:"AEGEA"},
    {nome:"WILLIAN JOSE AZEVEDO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"YASMIN BEATRIZ PEREIRA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"ADRIANA SOUZA PINHEIRO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"BRUNO RAFAEL SANTANA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"CAMILA VITORIA SIQUEIRA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"DOUGLAS HENRIQUE FRANCO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"ELIANE CRISTINA MORAES",turno:"Tarde",carteira:"AEGEA"},
    {nome:"FELIPE AUGUSTO RANGEL",turno:"Tarde",carteira:"AEGEA"},
    {nome:"GIOVANNA LUIZA BATISTA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"HUGO LEONARDO PEIXOTO",turno:"Tarde",carteira:"AEGEA"},
    {nome:"INGRID MAYARA DOMINGUES",turno:"Manhã",carteira:"AEGEA"},
    {nome:"JOAO VICTOR SERPA LIRA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"KELLY CRISTINA FIGUEIREDO",turno:"Manhã",carteira:"AEGEA"},
    {nome:"LUCAS EDUARDO VALENTE",turno:"Manhã",carteira:"AEGEA"},
    {nome:"MICHELE APARECIDA ROSA",turno:"Manhã",carteira:"AEGEA"},
    {nome:"NAYARA JESSICA TELES",turno:"Manhã",carteira:"AEGEA"},
    {nome:"OSCAR WILLIAM BARROS",turno:"Manhã",carteira:"AEGEA"},
    {nome:"PRISCILA FERNANDA DIAS",turno:"Manhã",carteira:"AEGEA"},
    {nome:"RENAN AUGUSTO SILVEIRA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"SUELEN CAROLINE BORBA",turno:"Tarde",carteira:"AEGEA"},
    {nome:"TALITA MARIA NOVAES",turno:"Tarde",carteira:"AEGEA"},
    {nome:"VICTOR GABRIEL LACERDA",turno:"Tarde",carteira:"AEGEA"}
];

/* ======= STORAGE KEYS ======= */
var SK_CONFIG = "monitorIA_config";
var SK_OPS = "monitorIA_operadores";
var SK_AVAL = "monitorIA_avaliacoes";
var SK_HIST = "monitorIA_historico";
var SK_SESSION = "monitorIA_session";
var SK_USERS = "monitorIA_users";

/* ======= STATE ======= */
var clockInterval = null;
var chartInstances = {};

/* ======= HELPERS ======= */
function ge(id){return document.getElementById(id)}
function qs(s){return document.querySelector(s)}
function qsa(s){return document.querySelectorAll(s)}
function safeJSON(raw,fallback){try{return JSON.parse(raw)}catch(e){return fallback}}

/* ======= USERS (multi-user system) ======= */
var DEFAULT_USERS = [
    {login:"admin",senha:"admin123",nome:"Administrador",cargo:"Administrador"}
];
function loadUsers(){
    var raw=localStorage.getItem(SK_USERS);
    if(raw){var u=safeJSON(raw,null);if(u&&u.length)return u}
    localStorage.setItem(SK_USERS,JSON.stringify(DEFAULT_USERS));
    return JSON.parse(JSON.stringify(DEFAULT_USERS));
}
function saveUsers(u){localStorage.setItem(SK_USERS,JSON.stringify(u))}

/* ======= CONFIG (senhaAtiva only now) ======= */
function loadConfig(){
    var raw = localStorage.getItem(SK_CONFIG);
    if(raw){var c=safeJSON(raw,null);if(c){
        /* Migração: se config antigo tinha username/password, migrar para users */
        if(c.username && !localStorage.getItem(SK_USERS)){
            var users=[{login:c.username,senha:c.password||"admin123",nome:c.username,cargo:"Administrador"}];
            saveUsers(users);
        }
        return {senhaAtiva:c.senhaAtiva!==false};
    }}
    var def={senhaAtiva:true};
    localStorage.setItem(SK_CONFIG,JSON.stringify(def));
    return def;
}
function saveConfig(c){localStorage.setItem(SK_CONFIG,JSON.stringify(c))}

/* ======= SESSION (stores logged user object) ======= */
function getLoggedUser(){
    var raw=localStorage.getItem(SK_SESSION);
    if(!raw)return null;
    var s=safeJSON(raw,null);
    if(s&&s.login)return s;
    /* Compatibilidade: session antiga era "1" */
    if(raw==="1"){
        var users=loadUsers();
        return users[0]||{login:"admin",nome:"Administrador",cargo:"Administrador"};
    }
    return null;
}
function setLoggedUser(user){
    localStorage.setItem(SK_SESSION,JSON.stringify({login:user.login,nome:user.nome,cargo:user.cargo}));
}
function clearSession(){localStorage.removeItem(SK_SESSION)}

/* ======= PERMISSÕES ======= */
var CARGOS_VALIDOS = ["Administrador","Coordenador","Supervisor","Monitor"];
function isAdmin(){var u=getLoggedUser();return u&&u.cargo==="Administrador"}
function checkAdmin(msg){
    if(!isAdmin()){alert(msg||"Acesso restrito ao administrador.");return false}
    return true;
}
/* Verifica se o usuário logado pode gerenciar operadores (todos os cargos) */
function podeGerenciarOperadores(){
    var u=getLoggedUser();
    if(!u)return false;
    /* Todos os cargos podem adicionar/editar/remover operadores */
    return CARGOS_VALIDOS.indexOf(u.cargo)!==-1;
}
function podeVisualizarOperadores(){
    var u=getLoggedUser();
    if(!u)return false;
    return CARGOS_VALIDOS.indexOf(u.cargo)!==-1;
}
function checkOperadorPermission(msg){
    if(!podeGerenciarOperadores()){alert(msg||"Acesso restrito.");return false}
    return true;
}
/* Verifica se o cargo do usuário logado permite uma ação */
function cargoPermite(acao){
    var u=getLoggedUser();
    if(!u)return false;
    var cargo=u.cargo||"Monitor";
    var permissoes={
        "Administrador":["addUser","editUser","removeUser","alterarSenha","alterarCargo","configuracoes","avaliacoes","lancarNota","relatorios","dashboards","operadores","addOperador","editOperador","removeOperador","calibragem"],
        "Coordenador":["visualizarUsers","relatorios","dashboards","avaliacoes","operadores","addOperador","editOperador","removeOperador","calibragem"],
        "Supervisor":["avaliacoes","lancarNota","relatorios","dashboards","operadores","addOperador","editOperador","removeOperador","calibragem"],
        "Monitor":["avaliacoes","lancarNota","relatorios","dashboards","operadores","addOperador","editOperador","removeOperador","calibragem"]
    };
    var p=permissoes[cargo]||[];
    return p.indexOf(acao)!==-1;
}

/* ======= OPERADORES ======= */
function loadOperadores(){
    var raw=localStorage.getItem(SK_OPS);
    if(raw){var o=safeJSON(raw,null);if(o&&o.length)return o}
    localStorage.setItem(SK_OPS,JSON.stringify(DEFAULT_OPERADORES));
    return JSON.parse(JSON.stringify(DEFAULT_OPERADORES));
}
function saveOperadores(ops){localStorage.setItem(SK_OPS,JSON.stringify(ops))}

/* Limpa avaliações órfãs (operadores removidos) do mês atual */
function cleanOrphanedAvals(){
    var ops=loadOperadores();
    var opNames={};
    for(var i=0;i<ops.length;i++)opNames[ops[i].nome]=true;
    var md=getMonthData();
    var keys=Object.keys(md),changed=false;
    for(var i=0;i<keys.length;i++){
        var parts=keys[i].split("||");
        if(parts.length>=2&&!opNames[parts[1]]){
            delete md[keys[i]];
            changed=true;
        }
    }
    if(changed)setMonthData(md);
}

/* Sincroniza todo o sistema após add/remove de operador */
function syncAfterOpChange(){
    cleanOrphanedAvals();
    /* Re-render da aba ativa */
    var activeTab=qs(".nav-btn.active");
    if(activeTab){
        var tab=activeTab.getAttribute("data-tab");
        if(tab)switchTab(tab);
    }
}

/* ======= AVALIAÇÕES (chave separada por mês: monitorIA_aval_YYYY_MM) ======= */
function monthKey(){var d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")}
function avalStorageKey(mk){return "monitorIA_aval_"+mk.replace("-","_")}
function getMonthData(mk){
    var key=avalStorageKey(mk||monthKey());
    var raw=localStorage.getItem(key);
    return raw?safeJSON(raw,{}):{};
}
function setMonthData(d,mk){
    var key=avalStorageKey(mk||monthKey());
    localStorage.setItem(key,JSON.stringify(d));
}
function deleteMonthData(mk){
    localStorage.removeItem(avalStorageKey(mk||monthKey()));
}
/* Lista todas as chaves de avaliação mensal no localStorage */
function listAvalKeys(){
    var result=[];
    for(var i=0;i<localStorage.length;i++){
        var k=localStorage.key(i);
        if(k&&k.indexOf("monitorIA_aval_")===0)result.push(k);
    }
    return result;
}
/* Extrai "YYYY-MM" de uma chave "monitorIA_aval_YYYY_MM" */
function mkFromStorageKey(sk){
    var parts=sk.replace("monitorIA_aval_","").split("_");
    if(parts.length>=2)return parts[0]+"-"+parts[1];
    return null;
}
/* Migração: se existir chave antiga monitorIA_avaliacoes, migrar para chaves separadas */
function migrateAvalIfNeeded(){
    var oldRaw=localStorage.getItem(SK_AVAL);
    if(!oldRaw)return;
    var oldData=safeJSON(oldRaw,null);
    if(!oldData||typeof oldData!=="object")return;
    var meses=Object.keys(oldData);
    for(var i=0;i<meses.length;i++){
        if(meses[i]&&typeof oldData[meses[i]]==="object"&&Object.keys(oldData[meses[i]]).length>0){
            var newKey=avalStorageKey(meses[i]);
            /* Não sobrescrever se já migrado */
            if(!localStorage.getItem(newKey)){
                localStorage.setItem(newKey,JSON.stringify(oldData[meses[i]]));
            }
        }
    }
    /* Remover chave antiga */
    localStorage.removeItem(SK_AVAL);
}

/* ======= HISTÓRICO ======= */
function loadHist(){var r=localStorage.getItem(SK_HIST);return r?safeJSON(r,{}):{}}
function saveHist(h){localStorage.setItem(SK_HIST,JSON.stringify(h))}

/* ======= SCHEDULE ======= */
function getBusinessDays(year,month){
    var days=[],d=new Date(year,month,1);
    while(d.getMonth()===month){var dow=d.getDay();if(dow!==0&&dow!==6)days.push(new Date(d));d.setDate(d.getDate()+1)}
    return days;
}
/* Retorna as 4 semanas operacionais do mês como array de arrays de dates.
   Cada semana operacional = seg a sex. Dias extras no final vão para semana 4. */
function getOperationalWeeks(year,month){
    var bDays=getBusinessDays(year,month);
    var weeks=[[],[],[],[]];
    for(var i=0;i<bDays.length;i++){
        var wkIdx=Math.min(Math.floor(i/5),3);
        weeks[wkIdx].push(bDays[i]);
    }
    return weeks;
}
/* Mapeia uma data para o número da semana operacional (1-4) */
function getWeekNum(date){
    var d=new Date(date);
    var weeks=getOperationalWeeks(d.getFullYear(),d.getMonth());
    var ds=d.toISOString().split("T")[0];
    for(var w=0;w<weeks.length;w++){
        for(var i=0;i<weeks[w].length;i++){
            if(weeks[w][i].toISOString().split("T")[0]===ds)return w+1;
        }
    }
    return 4;
}
/* Retorna operadores do dia baseado no dia da semana (seg=1 a sex=5).
   Distribui proporcionalmente: cada dia recebe floor(N/5) operadores,
   os primeiros (N%5) dias recebem +1. Escala de 1 a 200+ operadores.
   Cada operador aparece 1x por semana. */
function getOpsForDay(dayOfWeek,ops){
    if(dayOfWeek===0||dayOfWeek===6)return [];
    var nDays=5,idx=dayOfWeek-1;
    var perDay=Math.floor(ops.length/nDays);
    var extra=ops.length%nDays;
    var start=0;
    for(var d=0;d<idx;d++) start+=perDay+(d<extra?1:0);
    var count=perDay+(idx<extra?1:0);
    return ops.slice(start,start+count);
}
function getScheduleForMonth(){
    var now=new Date(),year=now.getFullYear(),month=now.getMonth();
    var ops=loadOperadores();
    if(ops.length===0)return {};
    var weeks=getOperationalWeeks(year,month);
    var schedule={};
    for(var w=0;w<weeks.length;w++){
        for(var d=0;d<weeks[w].length;d++){
            var dateKey=weeks[w][d].toISOString().split("T")[0];
            var dow=weeks[w][d].getDay();
            var dayOps=getOpsForDay(dow,ops);
            schedule[dateKey]=dayOps.map(function(o){return o.nome});
        }
    }
    return schedule;
}
function getTodaySchedule(){
    var s=getScheduleForMonth(),t=new Date().toISOString().split("T")[0];
    return s[t]||[];
}

/* ======= AUTO RESET MENSAL ======= */
function checkMonthReset(){
    var mk=monthKey();
    var avalKeys=listAvalKeys();
    for(var i=0;i<avalKeys.length;i++){
        var mesKey=mkFromStorageKey(avalKeys[i]);
        if(!mesKey||mesKey===mk)continue;
        var raw=localStorage.getItem(avalKeys[i]);
        var oldData=raw?safeJSON(raw,null):null;
        if(!oldData||Object.keys(oldData).length===0){localStorage.removeItem(avalKeys[i]);continue}
        var soma=0,cnt=0,total=0;
        var dk=Object.keys(oldData);
        for(var j=0;j<dk.length;j++){
            total++;
            if(oldData[dk[j]].nota!==null&&oldData[dk[j]].nota!==undefined&&oldData[dk[j]].nota!==""){
                soma+=parseFloat(oldData[dk[j]].nota);cnt++;
            }
        }
        var h=loadHist();
        h[mesKey]={totalPlanejado:total,totalRealizado:cnt,pendente:total-cnt,media:cnt>0?(soma/cnt).toFixed(1):"—",pctConclusao:total>0?((cnt/total)*100).toFixed(1):"0"};
        saveHist(h);
        localStorage.removeItem(avalKeys[i]);
    }
}

/* ======= LOGIN ======= */
function doLogin(){
    var users=loadUsers();
    var u=ge("loginUser").value.trim(),p=ge("loginPass").value;
    var found=null;
    for(var i=0;i<users.length;i++){
        if(users[i].login===u&&users[i].senha===p){found=users[i];break}
    }
    if(found){
        ge("loginError").style.display="none";
        setLoggedUser(found);
        showApp();
    }else{
        ge("loginError").style.display="block";
    }
}
function doLogout(){
    clearSession();
    if(clockInterval)clearInterval(clockInterval);
    ge("appContainer").style.display="none";
    ge("loginScreen").style.display="flex";
    ge("loginUser").value="";ge("loginPass").value="";
}
function checkSession(){
    var cfg=loadConfig();
    if(!cfg.senhaAtiva)return true;
    return getLoggedUser()!==null;
}

/* ======= APP INIT ======= */
function showApp(){
    ge("loginScreen").style.display="none";
    ge("appContainer").style.display="flex";
    var user=getLoggedUser();
    var displayName=user?user.nome:"Admin";
    var displayCargo=user&&user.cargo?user.cargo:"";
    var fullDisplay="Olá, "+displayName+(displayCargo?" — "+displayCargo:"");
    ge("headerUserName").textContent=fullDisplay;
    ge("sidebarUser").textContent=fullDisplay;
    /* Ajustar visibilidade de abas no sidebar conforme cargo */
    ajustarNavPorCargo();
    startClock();
    switchTab("visaoGeral");
}
/* Esconde/mostra botões da sidebar conforme permissão do cargo */
function ajustarNavPorCargo(){
    var user=getLoggedUser();
    var cargo=user?user.cargo:"Monitor";
    /* Todos veem: visaoGeral, avaliacoes */
    /* Coordenador+: evolucao, operadores, calibragem, relatorios */
    /* Supervisor: evolucao, operadores, calibragem, relatorios */
    /* Monitor: apenas visaoGeral e avaliacoes */
    var tabPermissoes={
        "visaoGeral":["Administrador","Coordenador","Supervisor","Monitor"],
        "avaliacoes":["Administrador","Coordenador","Supervisor","Monitor"],
        "evolucao":["Administrador","Coordenador","Supervisor","Monitor"],
        "operadores":["Administrador","Coordenador","Supervisor","Monitor"],
        "calibragem":["Administrador","Coordenador","Supervisor","Monitor"],
        "relatorios":["Administrador","Coordenador","Supervisor","Monitor"],
        "configuracoes":["Administrador","Coordenador","Supervisor","Monitor"]
    };
    var navBtns=qsa(".nav-btn");
    for(var i=0;i<navBtns.length;i++){
        var tab=navBtns[i].getAttribute("data-tab");
        var permitidos=tabPermissoes[tab]||["Administrador"];
        if(permitidos.indexOf(cargo)===-1){
            navBtns[i].style.display="none";
        }else{
            navBtns[i].style.display="";
        }
    }
}
function startClock(){
    if(clockInterval)clearInterval(clockInterval);
    function tick(){
        var now=new Date();
        var opts={weekday:"long",year:"numeric",month:"long",day:"numeric"};
        ge("headerDate").textContent=now.toLocaleDateString("pt-BR",opts);
        ge("headerClock").textContent=now.toLocaleTimeString("pt-BR");
        var el=ge("visaoGeralDatetime");
        if(el)el.textContent=now.toLocaleDateString("pt-BR",opts)+" — "+now.toLocaleTimeString("pt-BR");
    }
    tick();clockInterval=setInterval(tick,1000);
}

/* ======= TABS ======= */
function switchTab(tab){
    qsa(".tab-content").forEach(function(el){el.classList.remove("active")});
    qsa(".nav-btn").forEach(function(el){el.classList.remove("active")});
    var sec=ge("tab-"+tab);if(sec)sec.classList.add("active");
    var btn=qs('.nav-btn[data-tab="'+tab+'"]');if(btn)btn.classList.add("active");
    if(tab==="visaoGeral")renderVisaoGeral();
    else if(tab==="avaliacoes")renderAvaliacoes();
    else if(tab==="evolucao")renderEvolucao();
    else if(tab==="operadores")renderOperadores();
    else if(tab==="calibragem")renderCalibragem();
    else if(tab==="relatorios")renderRelatorios();
    else if(tab==="configuracoes")renderConfiguracoes();
}
function toggleSidebar(){ge("sidebar").classList.toggle("open")}

/* ======= MODAL ======= */
function abrirModal(title,bodyHTML){
    ge("modalTitle").textContent=title;ge("modalBody").innerHTML=bodyHTML;ge("modalOverlay").style.display="flex";
}
function fecharModal(){ge("modalOverlay").style.display="none"}

/* ======= UTIL: count evals ======= */
/* IMPORTANTE: totalSlots e contagens SEMPRE usam operadores.length atual,
   nunca dados residuais do localStorage */
function countSlotsByOp(){
    var sched=getScheduleForMonth(),md=getMonthData(),result={};
    var dates=Object.keys(sched);
    /* Descobrir semanas */
    var weekSet={};
    for(var d=0;d<dates.length;d++){
        weekSet[getWeekNum(new Date(dates[d]+"T12:00:00"))]=true;
    }
    var numWeeks=Object.keys(weekSet).length;
    /* Cada operador tem numWeeks slots (1 por semana) */
    var ops=loadOperadores();
    for(var i=0;i<ops.length;i++){
        result[ops[i].nome]={total:numWeeks,feito:0,soma:0};
    }
    /* Contar feitos: cada operador conta 1x por semana */
    var wkNums=Object.keys(weekSet);
    for(var w=0;w<wkNums.length;w++){
        var wkNum=parseInt(wkNums[w]);
        var opsDone={};
        for(var d=0;d<dates.length;d++){
            if(getWeekNum(new Date(dates[d]+"T12:00:00"))!==wkNum)continue;
            var names=sched[dates[d]];
            for(var n=0;n<names.length;n++){
                /* Só contar se o operador ainda existe */
                if(!result[names[n]])continue;
                var key=dates[d]+"||"+names[n];
                if(!opsDone[names[n]]&&md[key]&&md[key].nota!==null&&md[key].nota!==undefined&&md[key].nota!==""){
                    opsDone[names[n]]=true;
                    result[names[n]].feito++;
                    result[names[n]].soma+=parseFloat(md[key].nota);
                }
            }
        }
    }
    return result;
}
function totalStats(){
    var ops=loadOperadores();
    var nOps=ops.length;
    var sched=getScheduleForMonth(),md=getMonthData();
    /* Contar semanas operacionais */
    var weekSet={};
    var dates=Object.keys(sched);
    for(var d=0;d<dates.length;d++){
        weekSet[getWeekNum(new Date(dates[d]+"T12:00:00"))]=true;
    }
    var numWeeks=Object.keys(weekSet).length;
    /* SEMPRE usar operadores.length atual * numWeeks */
    var totalSlots=nOps*numWeeks;
    /* Contar avaliados: cada operador conta 1x por semana */
    var totalDone=0,soma=0;
    /* Montar set de nomes válidos */
    var validNames={};
    for(var i=0;i<ops.length;i++)validNames[ops[i].nome]=true;
    var wkNums=Object.keys(weekSet);
    for(var w=0;w<wkNums.length;w++){
        var wkNum=parseInt(wkNums[w]);
        var opsDone={};
        for(var d=0;d<dates.length;d++){
            if(getWeekNum(new Date(dates[d]+"T12:00:00"))!==wkNum)continue;
            var names=sched[dates[d]];
            for(var n=0;n<names.length;n++){
                /* Só contar operadores que ainda existem */
                if(!validNames[names[n]])continue;
                var key=dates[d]+"||"+names[n];
                if(!opsDone[names[n]]&&md[key]&&md[key].nota!==null&&md[key].nota!==undefined&&md[key].nota!==""){
                    opsDone[names[n]]=true;
                    totalDone++;soma+=parseFloat(md[key].nota);
                }
            }
        }
    }
    return {totalSlots:totalSlots,totalDone:totalDone,soma:soma,pendentes:totalSlots-totalDone,
        media:totalDone>0?(soma/totalDone).toFixed(1):"—",
        pct:totalSlots>0?((totalDone/totalSlots)*100).toFixed(1):"0"};
}

/* ======= RENDER: VISÃO GERAL ======= */
function renderVisaoGeral(){
    var ops=loadOperadores(),st=totalStats(),slots=countSlotsByOp();
    var completos=0,pendentesOp=0;
    for(var i=0;i<ops.length;i++){
        var s=slots[ops[i].nome];
        if(s&&s.feito>=4)completos++;
        else pendentesOp++;
    }
    ge("kpiGrid").innerHTML=
        kpi("event","Planejadas no Mês",st.totalSlots,"accent")+
        kpi("check_circle","Realizadas",st.totalDone,"success")+
        kpi("pending_actions","Pendentes",st.pendentes,"warning")+
        kpi("percent","Conclusão",st.pct+"%","info")+
        kpi("verified","Completos (4/4)",completos,"success")+
        kpi("person_off","Op. Pendentes",pendentesOp,"danger");
    renderChartSemanal();renderChartStatus(st.totalDone,st.pendentes);
}
function kpi(icon,label,value,color){
    return '<div class="kpi-card"><div class="kpi-label"><span class="material-icons-round">'+icon+'</span>'+label+'</div><div class="kpi-value '+color+'">'+value+'</div></div>';
}
function destroyChart(n){if(chartInstances[n]){chartInstances[n].destroy();chartInstances[n]=null}}
function renderChartSemanal(){
    destroyChart("semanal");
    var ops=loadOperadores();
    var nOps=ops.length;
    var validNames={};
    for(var i=0;i<ops.length;i++)validNames[ops[i].nome]=true;
    var sched=getScheduleForMonth(),md=getMonthData(),weeks={};
    var dates=Object.keys(sched).sort();
    /* Descobrir semanas */
    for(var i=0;i<dates.length;i++){
        var wk="Sem "+getWeekNum(new Date(dates[i]+"T12:00:00"));
        if(!weeks[wk])weeks[wk]={feito:0};
    }
    /* Contar avaliados: cada operador conta 1x por semana */
    var wkKeys=Object.keys(weeks);
    for(var w=0;w<wkKeys.length;w++){
        var wkNum=parseInt(wkKeys[w].replace("Sem ",""));
        var opsDone={};
        for(var i=0;i<dates.length;i++){
            if(getWeekNum(new Date(dates[i]+"T12:00:00"))!==wkNum)continue;
            var names=sched[dates[i]];
            for(var j=0;j<names.length;j++){
                if(!validNames[names[j]])continue;
                var key=dates[i]+"||"+names[j];
                if(!opsDone[names[j]]&&md[key]&&md[key].nota!==null&&md[key].nota!==undefined&&md[key].nota!==""){
                    opsDone[names[j]]=true;
                    weeks[wkKeys[w]].feito++;
                }
            }
        }
    }
    /* SEMPRE usar nOps atual como programado */
    var labels=wkKeys,d1=labels.map(function(){return nOps}),d2=labels.map(function(l){return weeks[l].feito});
    var ctx=ge("chartSemanal").getContext("2d");
    chartInstances["semanal"]=new Chart(ctx,{type:"bar",data:{labels:labels,datasets:[
        {label:"Programado",data:d1,backgroundColor:"rgba(108,92,231,.3)",borderColor:"#6c5ce7",borderWidth:1},
        {label:"Avaliado",data:d2,backgroundColor:"rgba(0,206,201,.3)",borderColor:"#00cec9",borderWidth:1}
    ]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{labels:{color:"#8b8fa7",font:{family:"Plus Jakarta Sans",size:11}}}},
        scales:{x:{ticks:{color:"#5c6078",font:{size:10}},grid:{color:"#2a2d3e"}},y:{beginAtZero:true,ticks:{color:"#5c6078",font:{size:10}},grid:{color:"#2a2d3e"}}}}});
}
function renderChartStatus(done,pend){
    destroyChart("status");var ctx=ge("chartStatus").getContext("2d");
    chartInstances["status"]=new Chart(ctx,{type:"doughnut",data:{labels:["Avaliados","Pendentes"],datasets:[{data:[done,pend],backgroundColor:["#00cec9","#fdcb6e"],borderWidth:0}]},
        options:{responsive:true,maintainAspectRatio:true,cutout:"70%",plugins:{legend:{labels:{color:"#8b8fa7",font:{family:"Plus Jakarta Sans",size:11}}}}}});
}

/* ======= RENDER: AVALIAÇÕES ======= */
function renderAvaliacoes(){
    var todayOps=getTodaySchedule(),md=getMonthData(),today=new Date().toISOString().split("T")[0],ops=loadOperadores();
    var logged=getLoggedUser();
    var loggedLogin=logged?logged.login:"";
    var ehAdmin=logged&&logged.cargo==="Administrador";
    var totalH=todayOps.length,feitoH=0,somaH=0;
    for(var i=0;i<todayOps.length;i++){
        var k=today+"||"+todayOps[i];
        if(md[k]&&md[k].nota!==null&&md[k].nota!==undefined&&md[k].nota!==""){feitoH++;somaH+=parseFloat(md[k].nota)}
    }
    var mediaH=feitoH>0?(somaH/feitoH).toFixed(1):"—";
    ge("avalDashboard").innerHTML=
        '<div class="aval-dash-card"><div class="dash-label">Programados Hoje</div><div class="dash-value" style="color:var(--accent-light)">'+totalH+'</div></div>'+
        '<div class="aval-dash-card"><div class="dash-label">Avaliados Hoje</div><div class="dash-value" style="color:var(--success)">'+feitoH+'</div></div>'+
        '<div class="aval-dash-card"><div class="dash-label">Pendentes Hoje</div><div class="dash-value" style="color:var(--warning)">'+(totalH-feitoH)+'</div></div>'+
        '<div class="aval-dash-card"><div class="dash-label">Média Hoje</div><div class="dash-value" style="color:var(--info)">'+mediaH+'</div></div>';
    if(todayOps.length===0){ge("avalList").innerHTML='<p style="color:var(--text-muted);padding:20px">Nenhum operador programado para hoje.</p>';return}
    var html="";
    for(var i=0;i<todayOps.length;i++){
        var nome=todayOps[i],key=today+"||"+nome,av=md[key]||{nota:"",obs:""};
        var turno="—",carteira="—";
        for(var o=0;o<ops.length;o++){if(ops[o].nome===nome){turno=ops[o].turno;carteira=ops[o].carteira||"—";break}}
        var isPend=av.nota===null||av.nota===undefined||av.nota==="";
        var avaliador=av.avaliador||"";
        /* Determinar se o usuário logado pode ver esta nota */
        var podeVer=isPend||ehAdmin||(avaliador===loggedLogin)||(avaliador==="");
        var bc,bt;
        if(isPend){bc="badge-pendente";bt="Pendente"}
        else if(podeVer){bc="badge-aplicado";bt="Nota: "+av.nota}
        else{bc="badge-oculto";bt="Nota: •••"}
        var sn=nome.replace(/'/g,"\\'");
        /* Campos: se não pode ver, esconder nota e obs */
        var notaVal=podeVer?(av.nota||""):"";
        var obsVal=podeVer?(av.obs||""):"";
        var fieldDisabled=(!isPend&&!podeVer)?' disabled style="opacity:.4"':'';
        /* Botão do olho: só aparece quando tem nota e não é o próprio avaliador */
        var eyeBtn="";
        if(!isPend){
            if(podeVer){
                eyeBtn='<button class="btn-eye" onclick="toggleNotaVisibility('+i+')" title="Ocultar nota"><span class="material-icons-round">visibility</span></button>';
            }else{
                eyeBtn='<button class="btn-eye" onclick="toggleNotaVisibility('+i+')" title="Ver nota"><span class="material-icons-round">visibility_off</span></button>';
            }
        }
        /* Info do avaliador */
        var avalInfo=(!isPend&&avaliador)?'<span><span class="material-icons-round">person</span>'+avaliador+'</span>':"";
        html+='<div class="aval-card" data-avaliador="'+avaliador+'" data-pode-ver="'+(podeVer?"1":"0")+'" id="avalCard_'+i+'">'+
            '<div class="aval-card-header"><span class="aval-card-name">'+nome+'</span><div class="aval-card-header-right">'+eyeBtn+'<span class="aval-card-badge '+bc+'">'+bt+'</span></div></div>'+
            '<div class="aval-card-info"><span><span class="material-icons-round">work</span>'+carteira+'</span><span class="meta-dot">•</span><span><span class="material-icons-round">schedule</span>'+turno+'</span><span class="meta-dot">•</span><span><span class="material-icons-round">calendar_today</span>'+today+'</span>'+avalInfo+'</div>'+
            '<div class="aval-card-fields" id="avalFields_'+i+'"'+fieldDisabled+'>'+
            '<div class="field-row"><label>Nota (0-100)</label><input type="number" min="0" max="100" id="nota_'+i+'" value="'+notaVal+'"'+((!isPend&&!podeVer)?" readonly":"")+'></div>'+
            '<div class="field-row"><label>Ponto de Atenção</label><textarea id="obs_'+i+'"'+((!isPend&&!podeVer)?" readonly":"")+'>'+obsVal+'</textarea></div></div>'+
            '<div class="aval-card-actions"><button class="btn-save" onclick="salvarAval(\''+sn+'\','+i+')"><span class="material-icons-round" style="font-size:16px">save</span> Salvar</button>'+
            '<button class="btn-reset" onclick="resetAval(\''+sn+'\','+i+')"><span class="material-icons-round" style="font-size:16px">restart_alt</span> Resetar</button></div></div>';
    }
    ge("avalList").innerHTML=html;
}
/* Alterna visibilidade da nota ao clicar no olho */
function toggleNotaVisibility(idx){
    var todayOps=getTodaySchedule(),md=getMonthData(),today=new Date().toISOString().split("T")[0];
    if(idx>=todayOps.length)return;
    var nome=todayOps[idx],key=today+"||"+nome,av=md[key];
    if(!av||av.nota===null||av.nota===undefined||av.nota==="")return;
    var card=ge("avalCard_"+idx);if(!card)return;
    var podeVer=card.getAttribute("data-pode-ver")==="1";
    var fields=ge("avalFields_"+idx);
    var notaInput=ge("nota_"+idx);
    var obsInput=ge("obs_"+idx);
    var badge=card.querySelector(".aval-card-badge");
    var eyeIcon=card.querySelector(".btn-eye .material-icons-round");
    if(podeVer){
        /* Esconder */
        card.setAttribute("data-pode-ver","0");
        notaInput.value="";obsInput.value="";
        notaInput.setAttribute("readonly","");obsInput.setAttribute("readonly","");
        fields.style.opacity=".4";
        if(badge){badge.textContent="Nota: •••";badge.className="aval-card-badge badge-oculto"}
        if(eyeIcon){eyeIcon.textContent="visibility_off"}
    }else{
        /* Mostrar */
        card.setAttribute("data-pode-ver","1");
        notaInput.value=av.nota;obsInput.value=av.obs||"";
        notaInput.removeAttribute("readonly");obsInput.removeAttribute("readonly");
        fields.style.opacity="";
        if(badge){badge.textContent="Nota: "+av.nota;badge.className="aval-card-badge badge-aplicado"}
        if(eyeIcon){eyeIcon.textContent="visibility"}
    }
}
function salvarAval(nome,idx){
    var nota=ge("nota_"+idx).value,obs=ge("obs_"+idx).value;
    if(nota===""||parseFloat(nota)<0||parseFloat(nota)>100)return;
    var today=new Date().toISOString().split("T")[0],md=getMonthData();
    var logged=getLoggedUser();
    md[today+"||"+nome]={nota:parseFloat(nota),obs:obs,avaliador:logged?logged.login:""};setMonthData(md);renderAvaliacoes();
}
function resetAval(nome,idx){
    var today=new Date().toISOString().split("T")[0],md=getMonthData();
    delete md[today+"||"+nome];setMonthData(md);renderAvaliacoes();
}

/* ======= RENDER: EVOLUÇÃO ======= */
/* CORRIGIDO: SEMPRE usa operadores.length atual como planejado de cada semana.
   Não usa dados residuais do localStorage. */
function renderEvolucao(){
    var ops=loadOperadores();
    var nOps=ops.length;
    var validNames={};
    for(var i=0;i<ops.length;i++)validNames[ops[i].nome]=true;
    var sched=getScheduleForMonth(),md=getMonthData(),weeks={};
    var dates=Object.keys(sched).sort();
    /* Primeiro: descobrir quais semanas existem */
    for(var i=0;i<dates.length;i++){
        var wk="Semana "+getWeekNum(new Date(dates[i]+"T12:00:00"));
        if(!weeks[wk])weeks[wk]={feito:0,soma:0};
    }
    /* Contar avaliados: cada operador conta 1x por semana (não por dia) */
    var wkKeys=Object.keys(weeks);
    for(var w=0;w<wkKeys.length;w++){
        var wkNum=parseInt(wkKeys[w].replace("Semana ",""));
        var opsDone={};
        for(var i=0;i<dates.length;i++){
            if(getWeekNum(new Date(dates[i]+"T12:00:00"))!==wkNum)continue;
            var names=sched[dates[i]];
            for(var j=0;j<names.length;j++){
                /* Só contar operadores que AINDA existem */
                if(!validNames[names[j]])continue;
                var key=dates[i]+"||"+names[j];
                if(!opsDone[names[j]]&&md[key]&&md[key].nota!==null&&md[key].nota!==undefined&&md[key].nota!==""){
                    opsDone[names[j]]=true;
                    weeks[wkKeys[w]].feito++;
                    weeks[wkKeys[w]].soma+=parseFloat(md[key].nota);
                }
            }
        }
    }
    var html="";
    for(var i=0;i<wkKeys.length;i++){
        /* SEMPRE usa nOps (operadores.length atual) como planejado */
        var w=weeks[wkKeys[i]],pct=nOps>0?((w.feito/nOps)*100).toFixed(0):0,med=w.feito>0?(w.soma/w.feito).toFixed(1):"—";
        html+='<div class="evolucao-week"><h3><span class="material-icons-round" style="color:var(--accent);font-size:18px">date_range</span>'+wkKeys[i]+'</h3>'+
            '<div class="evolucao-bar"><div class="evolucao-bar-fill" style="width:'+pct+'%"></div></div>'+
            '<div class="evolucao-stats"><span>Avaliados: <strong style="color:var(--success)">'+w.feito+'/'+nOps+'</strong></span>'+
            '<span>Conclusão: <strong style="color:var(--accent-light)">'+pct+'%</strong></span>'+
            '<span>Média: <strong style="color:var(--info)">'+med+'</strong></span></div></div>';
    }
    ge("evolucaoContent").innerHTML=html||'<p style="color:var(--text-muted)">Nenhuma semana.</p>';
}

/* ======= RENDER: OPERADORES (COM PAGINAÇÃO) ======= */
var _opsPage=1;
var _opsPerPage=10;
var _opsSearch="";
function renderOperadores(){
    var ops=loadOperadores(),slots=countSlotsByOp();
    /* Filtrar por busca */
    var filtered=ops;
    if(_opsSearch){
        var term=_opsSearch.toUpperCase();
        filtered=ops.filter(function(o){
            return o.nome.toUpperCase().indexOf(term)!==-1||
                   (o.carteira||"").toUpperCase().indexOf(term)!==-1||
                   o.turno.toUpperCase().indexOf(term)!==-1;
        });
    }
    /* Toolbar: busca + seletor por página */
    var toolbarHtml='<input type="text" class="ops-search" id="opsSearchInput" placeholder="Buscar operador, carteira ou turno..." value="'+(_opsSearch||"")+'" oninput="opsSearchChange(this.value)">';
    toolbarHtml+='<div class="ops-per-page"><span>Exibir:</span><select id="opsPerPageSelect" onchange="opsPerPageChange(this.value)">';
    var perPageOpts=[10,20,50,0];
    var perPageLabels=["10","20","50","Todos"];
    for(var p=0;p<perPageOpts.length;p++){
        toolbarHtml+='<option value="'+perPageOpts[p]+'"'+(perPageOpts[p]===_opsPerPage?' selected':'')+'>'+perPageLabels[p]+'</option>';
    }
    toolbarHtml+='</select></div>';
    ge("operadoresToolbar").innerHTML=toolbarHtml;
    /* Paginação */
    var total=filtered.length;
    var perPage=_opsPerPage===0?total:_opsPerPage;
    if(perPage<1)perPage=total||1;
    var totalPages=Math.max(1,Math.ceil(total/perPage));
    if(_opsPage>totalPages)_opsPage=totalPages;
    if(_opsPage<1)_opsPage=1;
    var startIdx=((_opsPage-1)*perPage);
    var endIdx=Math.min(startIdx+perPage,total);
    var pageOps=filtered.slice(startIdx,endIdx);
    /* Render cards */
    var colors=["#6c5ce7","#00cec9","#fdcb6e","#74b9ff","#ff6b6b","#a29bfe","#55efc4","#fab1a0"];
    var html="";
    for(var i=0;i<pageOps.length;i++){
        var op=pageOps[i],ini=op.nome.split(" ").map(function(w){return w[0]}).slice(0,2).join(""),c=colors[(startIdx+i)%colors.length];
        var s=slots[op.nome]||{total:0,feito:0},sc,sl;
        if(s.feito===0){sc=s.total>0?"0/"+s.total:"0/0";sl="pendente-s"}
        else if(s.feito>=4){sc=s.feito+"/"+s.total;sl="completo"}
        else{sc=s.feito+"/"+s.total;sl="parcial"}
        var todayDate=new Date().toISOString().split("T")[0];
        html+='<div class="operador-card"><div class="operador-avatar" style="background:'+c+'20;color:'+c+'">'+ini+'</div>'+
            '<div class="operador-info"><div class="operador-name" title="'+op.nome+'">'+op.nome+'</div>'+
            '<div class="operador-meta"><span class="material-icons-round" style="font-size:13px;vertical-align:-2px">work</span> '+(op.carteira||"—")+' <span class="meta-dot">•</span> <span class="material-icons-round" style="font-size:13px;vertical-align:-2px">schedule</span> '+op.turno+' <span class="meta-dot">•</span> <span class="material-icons-round" style="font-size:13px;vertical-align:-2px">calendar_today</span> '+todayDate+'</div></div>'+
            '<span class="operador-status '+sl+'">'+sc+'</span></div>';
    }
    ge("operadoresGrid").innerHTML=html||'<p style="color:var(--text-muted)">Nenhum operador encontrado.</p>';
    /* Render paginação */
    var pagHtml='<div class="ops-page-info">Mostrando '+(total>0?(startIdx+1):0)+' a '+endIdx+' de '+total+' operadores</div>';
    if(totalPages>1){
        pagHtml+='<div class="ops-page-btns">';
        pagHtml+='<button onclick="opsGoPage(1)"'+((_opsPage===1)?' disabled':'')+'>«</button>';
        pagHtml+='<button onclick="opsGoPage('+(_opsPage-1)+')"'+((_opsPage===1)?' disabled':'')+'>‹</button>';
        var startP=Math.max(1,_opsPage-2);
        var endP=Math.min(totalPages,_opsPage+2);
        if(startP>1){pagHtml+='<button disabled>…</button>'}
        for(var pg=startP;pg<=endP;pg++){
            pagHtml+='<button onclick="opsGoPage('+pg+')"'+(pg===_opsPage?' class="active"':'')+'>'+pg+'</button>';
        }
        if(endP<totalPages){pagHtml+='<button disabled>…</button>'}
        pagHtml+='<button onclick="opsGoPage('+(_opsPage+1)+')"'+((_opsPage===totalPages)?' disabled':'')+'>›</button>';
        pagHtml+='<button onclick="opsGoPage('+totalPages+')"'+((_opsPage===totalPages)?' disabled':'')+'>»</button>';
        pagHtml+='</div>';
    }else{
        pagHtml+='<div class="ops-page-btns"></div>';
    }
    ge("operadoresPagination").innerHTML=pagHtml;
}
function opsGoPage(p){_opsPage=p;renderOperadores()}
function opsPerPageChange(v){_opsPerPage=parseInt(v);_opsPage=1;renderOperadores()}
function opsSearchChange(v){_opsSearch=v;_opsPage=1;renderOperadores()}


/* ======= RENDER: CALIBRAGEM (DASHBOARD) ======= */
var _calibPage=1;
var _calibPerPage=10;
var _calibSearch="";
var _calibStatusFilter="";
var _calibCarteiraFilter="";
var _calibTurnoFilter="";
function renderCalibragem(){
    destroyChart("calibragem");destroyChart("calibComp");destroyChart("calibStatus");destroyChart("calibDivOp");
    var md=getMonthData(),ops=loadOperadores();
    var validNames={};
    for(var i=0;i<ops.length;i++)validNames[ops[i].nome]=true;
    var allK=Object.keys(md);
    var calibRows=[];
    var somaIA=0,somaHum=0,somaDiff=0,cntCalib=0,cntDivergente=0,cntAtencao=0,cntCalibrado=0;
    for(var i=0;i<allK.length;i++){
        var parts=allK[i].split("||");if(parts.length<2)continue;
        var nome=parts[1],data=parts[0];
        if(!validNames[nome])continue;
        var entry=md[allK[i]];
        if(entry.nota===null||entry.nota===undefined||entry.nota==="")continue;
        var notaIA=parseFloat(entry.nota);
        var notaHum=(entry.notaHumana!==null&&entry.notaHumana!==undefined&&entry.notaHumana!=="")?parseFloat(entry.notaHumana):notaIA;
        var diff=Math.abs(notaIA-notaHum);
        var status,statusClass;
        if(diff<=5){status="Calibrado";statusClass="calibrado";cntCalibrado++}
        else if(diff<=10){status="Atenção";statusClass="atencao";cntAtencao++}
        else{status="Divergente";statusClass="divergente";cntDivergente++}
        var turno="—",carteira="—";
        for(var o=0;o<ops.length;o++){if(ops[o].nome===nome){turno=ops[o].turno;carteira=ops[o].carteira||"—";break}}
        calibRows.push({nome:nome,carteira:carteira,turno:turno,data:data,notaIA:notaIA,notaHum:notaHum,diff:diff,status:status,statusClass:statusClass});
        somaIA+=notaIA;somaHum+=notaHum;somaDiff+=diff;cntCalib++;
    }
    var mediaIA=cntCalib>0?(somaIA/cntCalib).toFixed(1):"—";
    var mediaHum=cntCalib>0?(somaHum/cntCalib).toFixed(1):"—";
    var diffMedia=cntCalib>0?(somaDiff/cntCalib).toFixed(1):"—";
    var pctAlinhamento=cntCalib>0?((cntCalibrado/cntCalib)*100).toFixed(1):"0";
    /* KPIs */
    var html='<div class="calib-kpi-grid">';
    html+='<div class="calib-kpi"><div class="calib-kpi-label"><span class="material-icons-round">fact_check</span>Calibradas</div><div class="calib-kpi-value" style="color:var(--accent-light)">'+cntCalib+'</div></div>';
    html+='<div class="calib-kpi"><div class="calib-kpi-label"><span class="material-icons-round">smart_toy</span>Média IA</div><div class="calib-kpi-value" style="color:var(--info)">'+mediaIA+'</div></div>';
    html+='<div class="calib-kpi"><div class="calib-kpi-label"><span class="material-icons-round">person</span>Média Humana</div><div class="calib-kpi-value" style="color:var(--success)">'+mediaHum+'</div></div>';
    html+='<div class="calib-kpi"><div class="calib-kpi-label"><span class="material-icons-round">swap_vert</span>Dif. Média</div><div class="calib-kpi-value" style="color:var(--warning)">'+diffMedia+'</div></div>';
    html+='<div class="calib-kpi"><div class="calib-kpi-label"><span class="material-icons-round">warning</span>Divergentes</div><div class="calib-kpi-value" style="color:var(--danger)">'+cntDivergente+'</div></div>';
    html+='<div class="calib-kpi"><div class="calib-kpi-label"><span class="material-icons-round">verified</span>Alinhamento</div><div class="calib-kpi-value" style="color:var(--success)">'+pctAlinhamento+'%</div></div>';
    html+='</div>';
    /* Gráficos */
    html+='<div class="calib-charts-row">';
    html+='<div class="calib-chart-card"><h3><span class="material-icons-round">bar_chart</span>Nota IA × Nota Humana</h3><canvas id="chartCalibComp"></canvas></div>';
    html+='<div class="calib-chart-card"><h3><span class="material-icons-round">donut_large</span>Status de Calibração</h3><canvas id="chartCalibStatus"></canvas></div>';
    html+='</div>';
    html+='<div class="calib-charts-row">';
    html+='<div class="calib-chart-card"><h3><span class="material-icons-round">leaderboard</span>Divergências por Operador</h3><canvas id="chartCalibDivOp"></canvas></div>';
    /* Ranking */
    html+='<div class="calib-ranking"><h3><span class="material-icons-round">emoji_events</span>Ranking — Maior Divergência</h3>';
    var opDivMap={};
    for(var i=0;i<calibRows.length;i++){
        var r=calibRows[i];
        if(!opDivMap[r.nome])opDivMap[r.nome]={soma:0,cnt:0};
        opDivMap[r.nome].soma+=r.diff;
        opDivMap[r.nome].cnt++;
    }
    var opDivArr=[];
    for(var n in opDivMap){opDivArr.push({nome:n,media:(opDivMap[n].soma/opDivMap[n].cnt).toFixed(1)})}
    opDivArr.sort(function(a,b){return parseFloat(b.media)-parseFloat(a.media)});
    var topN=Math.min(10,opDivArr.length);
    if(topN===0){html+='<p style="color:var(--text-muted);font-size:12px">Sem dados de calibração.</p>'}
    for(var i=0;i<topN;i++){
        var d=opDivArr[i];
        var dm=parseFloat(d.media);
        var rc=dm>10?"var(--danger)":dm>5?"var(--warning)":"var(--success)";
        var bgc=dm>10?"rgba(255,107,107,.15)":dm>5?"rgba(253,203,110,.15)":"rgba(0,206,201,.15)";
        html+='<div class="calib-rank-item"><div class="calib-rank-pos" style="background:'+bgc+';color:'+rc+'">'+(i+1)+'</div>';
        html+='<div class="calib-rank-name" title="'+d.nome+'">'+d.nome+'</div>';
        html+='<div class="calib-rank-diff" style="color:'+rc+'">±'+d.media+'</div></div>';
    }
    html+='</div></div>';
    /* Filtros da tabela */
    var carteiras={},turnos={};
    for(var i=0;i<calibRows.length;i++){carteiras[calibRows[i].carteira]=true;turnos[calibRows[i].turno]=true}
    html+='<div class="calib-table-filters">';
    html+='<input type="text" class="calib-table-search" id="calibSearchInput" placeholder="Buscar operador..." value="'+(_calibSearch||'')+'" oninput="calibSearchChange(this.value)">';
    html+='<select class="calib-table-filter-select" id="calibStatusFilter" onchange="calibStatusFilterChange(this.value)">';
    html+='<option value="">Todos os Status</option>';
    html+='<option value="Calibrado"'+(_calibStatusFilter==="Calibrado"?" selected":"")+'>Calibrado</option>';
    html+='<option value="Atenção"'+(_calibStatusFilter==="Atenção"?" selected":"")+'>Atenção</option>';
    html+='<option value="Divergente"'+(_calibStatusFilter==="Divergente"?" selected":"")+'>Divergente</option>';
    html+='</select>';
    html+='<select class="calib-table-filter-select" id="calibCarteiraFilter" onchange="calibCarteiraFilterChange(this.value)">';
    html+='<option value="">Todas as Carteiras</option>';
    for(var c in carteiras){html+='<option value="'+c+'"'+(_calibCarteiraFilter===c?" selected":"")+'>'+c+'</option>'}
    html+='</select>';
    html+='<select class="calib-table-filter-select" id="calibTurnoFilter" onchange="calibTurnoFilterChange(this.value)">';
    html+='<option value="">Todos os Períodos</option>';
    for(var t in turnos){html+='<option value="'+t+'"'+(_calibTurnoFilter===t?" selected":"")+'>'+t+'</option>'}
    html+='</select>';
    html+='<div class="calib-per-page"><span>Exibir:</span><select id="calibPerPageSelect" onchange="calibPerPageChange(this.value)">';
    var calibPPOpts=[10,20,50,0],calibPPLabels=["10","20","50","Todos"];
    for(var p=0;p<calibPPOpts.length;p++){html+='<option value="'+calibPPOpts[p]+'"'+(calibPPOpts[p]===_calibPerPage?' selected':'')+'>'+calibPPLabels[p]+'</option>'}
    html+='</select></div>';
    html+='</div>';
    /* Filtrar calibRows para tabela */
    var filtered=calibRows.slice();
    if(_calibSearch){var term=_calibSearch.toUpperCase();filtered=filtered.filter(function(r){return r.nome.toUpperCase().indexOf(term)!==-1})}
    if(_calibStatusFilter){filtered=filtered.filter(function(r){return r.status===_calibStatusFilter})}
    if(_calibCarteiraFilter){filtered=filtered.filter(function(r){return r.carteira===_calibCarteiraFilter})}
    if(_calibTurnoFilter){filtered=filtered.filter(function(r){return r.turno===_calibTurnoFilter})}
    filtered.sort(function(a,b){return b.diff-a.diff});
    /* Paginação da tabela */
    var totalFiltered=filtered.length;
    var perPage=_calibPerPage===0?totalFiltered:_calibPerPage;
    if(perPage<1)perPage=totalFiltered||1;
    var totalPages=Math.max(1,Math.ceil(totalFiltered/perPage));
    if(_calibPage>totalPages)_calibPage=totalPages;
    if(_calibPage<1)_calibPage=1;
    var startIdx=((_calibPage-1)*perPage);
    var endIdx=Math.min(startIdx+perPage,totalFiltered);
    var pageRows=filtered.slice(startIdx,endIdx);
    /* Tabela detalhada */
    html+='<div class="calib-table-wrapper"><table><thead><tr><th>Operador</th><th>Carteira</th><th>Período</th><th>Data</th><th>Nota IA</th><th>Nota Humana</th><th>Diferença</th><th>Status</th></tr></thead><tbody>';
    if(pageRows.length===0){
        html+='<tr><td colspan="8" style="text-align:center;color:var(--text-muted)">Nenhuma avaliação encontrada.</td></tr>';
    }
    for(var i=0;i<pageRows.length;i++){
        var r=pageRows[i];
        html+='<tr><td style="font-weight:600;color:var(--text-primary)">'+r.nome+'</td><td>'+r.carteira+'</td><td>'+r.turno+'</td><td>'+r.data+'</td>';
        html+='<td style="font-weight:700;color:var(--info)">'+r.notaIA.toFixed(1)+'</td>';
        html+='<td style="font-weight:700;color:var(--success)">'+r.notaHum.toFixed(1)+'</td>';
        html+='<td style="font-weight:700;color:'+(r.diff>10?'var(--danger)':r.diff>5?'var(--warning)':'var(--success)')+'">'+r.diff.toFixed(1)+'</td>';
        html+='<td><span class="calib-status '+r.statusClass+'">'+r.status+'</span></td></tr>';
    }
    html+='</tbody></table></div>';
    /* Paginação */
    html+='<div class="calib-pagination">';
    html+='<div class="ops-page-info">Mostrando '+(totalFiltered>0?(startIdx+1):0)+' a '+endIdx+' de '+totalFiltered+' avaliações</div>';
    if(totalPages>1){
        html+='<div class="ops-page-btns">';
        html+='<button onclick="calibGoPage(1)"'+((_calibPage===1)?' disabled':'')+'>«</button>';
        html+='<button onclick="calibGoPage('+(_calibPage-1)+')"'+((_calibPage===1)?' disabled':'')+'>‹</button>';
        var startP=Math.max(1,_calibPage-2);
        var endP=Math.min(totalPages,_calibPage+2);
        if(startP>1){html+='<button disabled>…</button>'}
        for(var pg=startP;pg<=endP;pg++){
            html+='<button onclick="calibGoPage('+pg+')"'+(pg===_calibPage?' class="active"':'')+'>'+pg+'</button>';
        }
        if(endP<totalPages){html+='<button disabled>…</button>'}
        html+='<button onclick="calibGoPage('+(_calibPage+1)+')"'+((_calibPage===totalPages)?' disabled':'')+'>›</button>';
        html+='<button onclick="calibGoPage('+totalPages+')"'+((_calibPage===totalPages)?' disabled':'')+'>»</button>';
        html+='</div>';
    }
    html+='</div>';
    ge("calibragemContent").innerHTML=html;
    renderCalibCharts(calibRows,cntCalibrado,cntAtencao,cntDivergente,opDivArr);
}
/* Calibragem pagination & filter functions */
function calibGoPage(p){_calibPage=p;renderCalibragem()}
function calibPerPageChange(v){_calibPerPage=parseInt(v);_calibPage=1;renderCalibragem()}
function calibSearchChange(v){_calibSearch=v;_calibPage=1;renderCalibragem()}
function calibStatusFilterChange(v){_calibStatusFilter=v;_calibPage=1;renderCalibragem()}
function calibCarteiraFilterChange(v){_calibCarteiraFilter=v;_calibPage=1;renderCalibragem()}
function calibTurnoFilterChange(v){_calibTurnoFilter=v;_calibPage=1;renderCalibragem()}
function renderCalibCharts(rows,cntCalibrado,cntAtencao,cntDivergente,opDivArr){
    /* Gráfico 1: Nota IA x Nota Humana — barras agrupadas por operador (top 15) */
    var opAvg={};
    for(var i=0;i<rows.length;i++){
        var r=rows[i];
        if(!opAvg[r.nome])opAvg[r.nome]={somaIA:0,somaH:0,cnt:0};
        opAvg[r.nome].somaIA+=r.notaIA;opAvg[r.nome].somaH+=r.notaHum;opAvg[r.nome].cnt++;
    }
    var compLabels=[],compIA=[],compHum=[];
    var opNames=Object.keys(opAvg);
    opNames.sort(function(a,b){return(opAvg[b].somaIA/opAvg[b].cnt)-(opAvg[a].somaIA/opAvg[a].cnt)});
    var showN=Math.min(15,opNames.length);
    for(var i=0;i<showN;i++){
        var n=opNames[i],avg=opAvg[n];
        compLabels.push(n.split(" ").slice(0,2).join(" "));
        compIA.push((avg.somaIA/avg.cnt).toFixed(1));
        compHum.push((avg.somaH/avg.cnt).toFixed(1));
    }
    var ctx1=ge("chartCalibComp");
    if(ctx1){
        chartInstances["calibComp"]=new Chart(ctx1.getContext("2d"),{type:"bar",data:{labels:compLabels,datasets:[
            {label:"Nota IA",data:compIA,backgroundColor:"rgba(116,185,255,.5)",borderColor:"#74b9ff",borderWidth:1},
            {label:"Nota Humana",data:compHum,backgroundColor:"rgba(0,206,201,.5)",borderColor:"#00cec9",borderWidth:1}
        ]},options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{labels:{color:"#8b8fa7",font:{family:"Plus Jakarta Sans",size:11}}}},
            scales:{x:{ticks:{color:"#5c6078",font:{size:9},maxRotation:45},grid:{color:"#2a2d3e"}},y:{beginAtZero:true,max:100,ticks:{color:"#5c6078",font:{size:10}},grid:{color:"#2a2d3e"}}}}});
    }
    /* Gráfico 2: Status doughnut */
    var ctx2=ge("chartCalibStatus");
    if(ctx2){
        chartInstances["calibStatus"]=new Chart(ctx2.getContext("2d"),{type:"doughnut",data:{labels:["Calibrado","Atenção","Divergente"],datasets:[{data:[cntCalibrado,cntAtencao,cntDivergente],backgroundColor:["#00cec9","#fdcb6e","#ff6b6b"],borderWidth:0}]},
            options:{responsive:true,maintainAspectRatio:true,cutout:"65%",plugins:{legend:{labels:{color:"#8b8fa7",font:{family:"Plus Jakarta Sans",size:11}}}}}});
    }
    /* Gráfico 3: Divergências por operador — top 10 horizontal */
    var divLabels=[],divData=[],divColors=[];
    var topDiv=Math.min(10,opDivArr.length);
    for(var i=0;i<topDiv;i++){
        divLabels.push(opDivArr[i].nome.split(" ").slice(0,2).join(" "));
        divData.push(parseFloat(opDivArr[i].media));
        var dm=parseFloat(opDivArr[i].media);
        divColors.push(dm>10?"#ff6b6b":dm>5?"#fdcb6e":"#00cec9");
    }
    var ctx3=ge("chartCalibDivOp");
    if(ctx3){
        chartInstances["calibDivOp"]=new Chart(ctx3.getContext("2d"),{type:"bar",data:{labels:divLabels,datasets:[{label:"Dif. Média",data:divData,backgroundColor:divColors,borderWidth:0}]},
            options:{responsive:true,maintainAspectRatio:true,indexAxis:"y",plugins:{legend:{display:false}},
                scales:{x:{beginAtZero:true,ticks:{color:"#5c6078",font:{size:10}},grid:{color:"#2a2d3e"}},y:{ticks:{color:"#8b8fa7",font:{size:10}},grid:{display:false}}}}});
    }
}

/* ======= RENDER: RELATÓRIOS ======= */
var _filtroOpValue="";
function renderRelatorios(){
    var logged=getLoggedUser();
    var cargo=logged?logged.cargo:"Monitor";
    var ops=loadOperadores();
    var html="";

    /* FILTRO POR OPERADOR — Todos os cargos */
    if(cargo==="Administrador"||cargo==="Coordenador"||cargo==="Supervisor"||cargo==="Monitor"){
        html+='<div class="filtro-section">';
        html+='<h3><span class="material-icons-round">filter_alt</span> Relatório Individual por Operador</h3>';
        html+='<p>Selecione um operador para gerar o relatório individual em PDF com todas as avaliações do mês.</p>';
        html+='<div class="filtro-row">';
        html+='<div class="filtro-field"><span class="filtro-label">Operador</span>';
        html+='<div class="custom-dropdown" id="filtroDropdown">';
        html+='<button type="button" class="custom-dropdown-trigger" id="filtroTrigger" onclick="toggleFiltroDropdown()">'+(_filtroOpValue||"— Selecione um operador —")+'</button>';
        html+='<span class="material-icons-round custom-dropdown-arrow">expand_more</span>';
        html+='<div class="custom-dropdown-list" id="filtroList">';
        html+='<input type="text" class="custom-dropdown-search" id="filtroSearch" placeholder="Buscar operador..." oninput="filtrarDropdownOps()">';
        html+='<div class="custom-dropdown-item'+((_filtroOpValue===""?" selected":""))+'" data-value="" onclick="selecionarFiltroOp(this)">— Selecione um operador —</div>';
        for(var i=0;i<ops.length;i++){
            var esc=ops[i].nome.replace(/"/g,'&quot;');
            var label=ops[i].nome+' ('+(ops[i].carteira||"—")+' · '+ops[i].turno+')';
            html+='<div class="custom-dropdown-item'+(_filtroOpValue===ops[i].nome?" selected":"")+'" data-value="'+esc+'" onclick="selecionarFiltroOp(this)">'+label+'</div>';
        }
        html+='</div></div></div>';
        html+='<button class="btn-primary" onclick="gerarRelatorioFiltrado()" style="height:38px;white-space:nowrap"><span class="material-icons-round" style="font-size:16px;vertical-align:middle">picture_as_pdf</span> Gerar PDF</button>';
        html+='</div></div>';
    }

    /* CARDS DE RELATÓRIOS */
    html+='<div class="relatorios-grid">';
    html+='<div class="relatorio-card" onclick="gerarRelatorioMensalGeral()"><span class="material-icons-round relatorio-icon">summarize</span><h3>Relatório Mensal Geral</h3><p>Visão consolidada de todas as avaliações do mês.</p><span class="btn-gerar">Gerar PDF</span></div>';
    html+='<div class="relatorio-card" onclick="gerarRelatorioPendencias()"><span class="material-icons-round relatorio-icon">pending_actions</span><h3>Relatório de Pendências</h3><p>Lista de avaliações pendentes no mês.</p><span class="btn-gerar">Gerar PDF</span></div>';
    html+='<div class="relatorio-card" onclick="gerarRelatorioPorOperador()"><span class="material-icons-round relatorio-icon">person_search</span><h3>Relatório por Operador</h3><p>Detalhamento individual de cada operador.</p><span class="btn-gerar">Gerar PDF</span></div>';
    html+='<div class="relatorio-card" onclick="gerarRelatorioPorTurno()"><span class="material-icons-round relatorio-icon">schedule</span><h3>Relatório por Turno</h3><p>Avaliações agrupadas por turno.</p><span class="btn-gerar">Gerar PDF</span></div>';
    html+='<div class="relatorio-card" onclick="gerarRelatorioFechamento()"><span class="material-icons-round relatorio-icon">lock_clock</span><h3>Fechamento do Mês</h3><p>Consolidação final do mês atual.</p><span class="btn-gerar">Gerar PDF</span></div>';
    html+='<div class="relatorio-card" onclick="gerarRelatorioHistorico()"><span class="material-icons-round relatorio-icon">history</span><h3>Histórico de Meses</h3><p>Dados consolidados de meses anteriores.</p><span class="btn-gerar">Gerar PDF</span></div>';
    html+='</div>';

    ge("relatoriosContent").innerHTML=html;
}

/* DROPDOWN CUSTOMIZADO — funções */
function toggleFiltroDropdown(){
    var trigger=ge("filtroTrigger"),list=ge("filtroList");
    var isOpen=list.classList.contains("show");
    if(isOpen){
        list.classList.remove("show");
        trigger.classList.remove("open");
    }else{
        list.classList.add("show");
        trigger.classList.add("open");
        var search=ge("filtroSearch");
        if(search){search.value="";search.focus()}
        filtrarDropdownOps();
    }
}
function filtrarDropdownOps(){
    var search=ge("filtroSearch");
    var term=search?search.value.toUpperCase():"";
    var items=ge("filtroList").querySelectorAll(".custom-dropdown-item");
    for(var i=0;i<items.length;i++){
        var val=items[i].textContent.toUpperCase();
        if(!term||val.indexOf(term)!==-1){items[i].classList.remove("hidden")}
        else{items[i].classList.add("hidden")}
    }
}
function selecionarFiltroOp(el){
    var value=el.getAttribute("data-value");
    _filtroOpValue=value;
    var trigger=ge("filtroTrigger");
    trigger.textContent=value?el.textContent:"— Selecione um operador —";
    trigger.classList.remove("open");
    ge("filtroList").classList.remove("show");
    /* Atualizar selected */
    var items=ge("filtroList").querySelectorAll(".custom-dropdown-item");
    for(var i=0;i<items.length;i++){
        if(items[i].getAttribute("data-value")===value)items[i].classList.add("selected");
        else items[i].classList.remove("selected");
    }
}
/* Fechar dropdown ao clicar fora */
document.addEventListener("click",function(e){
    var dd=ge("filtroDropdown");
    if(dd&&!dd.contains(e.target)){
        var list=ge("filtroList"),trigger=ge("filtroTrigger");
        if(list)list.classList.remove("show");
        if(trigger)trigger.classList.remove("open");
    }
});

/* ======= RENDER: CONFIGURAÇÕES ======= */
function renderConfiguracoes(){
    var cfg=loadConfig(),ops=loadOperadores(),users=loadUsers();
    var logged=getLoggedUser();
    var cargoLogado=logged?logged.cargo:"Monitor";
    var ehAdmin=cargoLogado==="Administrador";
    var html='';

    /* INFO */
    html+='<div class="info-notice"><span class="material-icons-round">info</span>Este sistema usa localStorage — os dados ficam salvos no navegador de cada pessoa. Ao compartilhar com a equipe, cada dispositivo mantém dados independentes.</div>';

    /* CONTROLE DE ACESSO — só Admin */
    if(ehAdmin){
        html+='<div class="config-section"><h3><span class="material-icons-round">lock</span> Controle de Acesso</h3>';
        html+='<p>Gerencie o login do sistema. Se desativar a senha, o sistema abre direto sem tela de login.</p>';
        html+='<div class="toggle-row"><span class="toggle-label">Senha ativa (exigir login)</span><label class="toggle-switch"><input type="checkbox" id="toggleSenha" '+(cfg.senhaAtiva?'checked':'')+' onchange="toggleSenhaAtiva()"><span class="toggle-slider"></span></label></div>';
        html+='</div>';
    }

    /* GERENCIAR USUÁRIOS — só Admin vê CRUD, Coordenador vê lista somente leitura */
    if(ehAdmin){
        html+='<div class="config-section"><h3><span class="material-icons-round">manage_accounts</span> Gerenciar Usuários</h3>';
        html+='<p>Adicione, edite ou remova usuários do sistema.</p>';
        html+='<div class="config-toolbar"><button class="btn-primary" onclick="modalAddUsuario()"><span class="material-icons-round" style="font-size:18px">person_add</span> Adicionar Usuário</button></div>';
        for(var i=0;i<users.length;i++){
            html+='<div class="cfg-row"><div class="cfg-row-info"><div class="cfg-row-name">'+users[i].nome+'</div><div class="cfg-row-sub">'+users[i].cargo+' · Login: '+users[i].login+'</div></div>';
            html+='<div class="cfg-row-actions">';
            html+='<button class="btn-sm" onclick="modalEditUsuario('+i+')"><span class="material-icons-round">edit</span> Editar</button>';
            html+='<button class="btn-sm" onclick="modalAlterarSenhaUsuario('+i+')"><span class="material-icons-round">key</span> Senha</button>';
            /* Não mostrar botão remover para o último admin */
            var adminsCount=0;
            for(var j=0;j<users.length;j++){if(users[j].cargo==="Administrador")adminsCount++}
            var podeRemover=!(users[i].cargo==="Administrador"&&adminsCount<=1);
            if(users.length>1&&podeRemover){
                html+='<button class="btn-sm danger" onclick="confirmarRemoverUsuario('+i+')"><span class="material-icons-round">delete</span> Remover</button>';
            }
            html+='</div></div>';
        }
        html+='</div>';
    }else if(cargoLogado==="Coordenador"){
        html+='<div class="config-section"><h3><span class="material-icons-round">manage_accounts</span> Usuários do Sistema</h3>';
        html+='<p>Visualização dos usuários cadastrados (somente leitura).</p>';
        for(var i=0;i<users.length;i++){
            html+='<div class="cfg-row"><div class="cfg-row-info"><div class="cfg-row-name">'+users[i].nome+'</div><div class="cfg-row-sub">'+users[i].cargo+' · Login: '+users[i].login+'</div></div></div>';
        }
        html+='</div>';
    }
    /* Supervisor e Monitor: NÃO veem seção de usuários */

    /* OPERADORES — Todos os cargos podem gerenciar operadores */
    if(podeGerenciarOperadores()){
        html+='<div class="config-section"><h3><span class="material-icons-round">people</span> Operadores</h3>';
        html+='<p>Adicione, edite ou remova operadores. Alterações refletem em todo o sistema.</p>';
        html+='<div class="config-toolbar"><button class="btn-primary" onclick="modalAddOperador()"><span class="material-icons-round" style="font-size:18px">person_add</span> Adicionar Operador</button></div>';
        html+='<div id="cfgOpsList">';
        for(var i=0;i<ops.length;i++){
            var sn=ops[i].nome.replace(/'/g,"\'");
            html+='<div class="cfg-row"><div class="cfg-row-info"><div class="cfg-row-name">'+ops[i].nome+'</div><div class="cfg-row-sub">'+(ops[i].carteira||"—")+' · '+ops[i].turno+'</div></div>';
            html+='<div class="cfg-row-actions">';
            html+='<button class="btn-sm" onclick="modalEditarOperador('+i+')"><span class="material-icons-round">edit</span> Editar</button>';
            html+='<button class="btn-sm danger" onclick="confirmarRemoverOp(\''+sn+'\')"><span class="material-icons-round">delete</span> Remover</button>';
            html+='</div></div>';
        }
        if(ops.length===0)html+='<p style="color:var(--text-muted);font-size:12px">Nenhum operador cadastrado.</p>';
        html+='</div></div>';
    }

    /* HISTÓRICO */
    html+='<div class="config-section"><h3><span class="material-icons-round">history</span> Histórico de Meses Anteriores</h3>';
    var hist=loadHist(),hk=Object.keys(hist).sort().reverse();
    if(hk.length===0){html+='<p class="hist-empty">Nenhum histórico salvo.</p>'}
    else{
        for(var i=0;i<hk.length;i++){
            var d=hist[hk[i]];
            html+='<div class="hist-card"><div><div class="hist-label">Mês</div><div class="hist-value">'+hk[i]+'</div></div>'+
                '<div><div class="hist-label">Planejado</div><div class="hist-value">'+(d.totalPlanejado||0)+'</div></div>'+
                '<div><div class="hist-label">Realizado</div><div class="hist-value">'+(d.totalRealizado||0)+'</div></div>'+
                '<div><div class="hist-label">Pendente</div><div class="hist-value">'+(d.pendente||0)+'</div></div>'+
                '<div><div class="hist-label">Conclusão</div><div class="hist-value">'+(d.pctConclusao||0)+'%</div></div></div>';
        }
    }
    html+='</div>';

    /* RESET — todos os cargos */
    html+='<div class="config-section"><h3><span class="material-icons-round">restart_alt</span> Reset do Mês Atual</h3>';
    html+='<p>Salva os dados atuais no histórico e limpa as avaliações do mês.</p>';
    html+='<button class="btn-warn" onclick="resetMesAtual()">Resetar Mês</button></div>';

    /* LIMPAR TUDO — só Admin */
    if(ehAdmin){
    html+='<div class="config-section"><h3><span class="material-icons-round">delete_forever</span> Limpar Todos os Dados</h3>';
    html+='<p>Remove avaliações, histórico e operadores do localStorage.</p>';
    html+='<button class="btn-danger" onclick="limparTudo()">Limpar Tudo</button></div>';
    }

    ge("configContent").innerHTML=html;
}

/* CONFIG: ACESSO */
function toggleSenhaAtiva(){
    if(!checkAdmin())return;
    var cfg=loadConfig();cfg.senhaAtiva=ge("toggleSenha").checked;saveConfig(cfg);
    if(!cfg.senhaAtiva){
        var users=loadUsers();
        setLoggedUser(users[0]||{login:"admin",nome:"Administrador",cargo:"Administrador"});
    }
}

/* CONFIG: USUÁRIOS - CRUD */
function modalAddUsuario(){
    if(!checkAdmin())return;
    var cargoOpts='';
    for(var c=0;c<CARGOS_VALIDOS.length;c++){
        var sel=CARGOS_VALIDOS[c]==="Supervisor"?' selected':'';
        cargoOpts+='<option value="'+CARGOS_VALIDOS[c]+'"'+sel+'>'+CARGOS_VALIDOS[c]+'</option>';
    }
    abrirModal("Adicionar Usuário",
        '<div class="field-group"><label>Login</label><input type="text" id="mULogin" placeholder="Ex: vandreisson"></div>'+
        '<div class="field-group"><label>Senha</label><input type="password" id="mUSenha" placeholder="Senha de acesso"></div>'+
        '<div class="field-group"><label>Nome</label><input type="text" id="mUNome" placeholder="Nome completo"></div>'+
        '<div class="field-group"><label>Cargo</label><select id="mUCargo">'+cargoOpts+'</select></div>'+
        '<button class="btn-primary" onclick="salvarNovoUsuario()">Adicionar</button>');
}
function salvarNovoUsuario(){
    if(!checkAdmin())return;
    var login=ge("mULogin").value.trim().toLowerCase();
    var senha=ge("mUSenha").value;
    var nome=ge("mUNome").value.trim();
    var cargo=ge("mUCargo").value.trim()||"Supervisor";
    if(!login||!senha||!nome)return;
    var users=loadUsers();
    for(var i=0;i<users.length;i++){if(users[i].login===login){alert("Login já existe.");return}}
    users.push({login:login,senha:senha,nome:nome,cargo:cargo});
    saveUsers(users);fecharModal();renderConfiguracoes();
}
function modalEditUsuario(idx){
    if(!checkAdmin())return;
    var users=loadUsers(),u=users[idx];if(!u)return;
    var cargoOpts='';
    for(var c=0;c<CARGOS_VALIDOS.length;c++){
        var sel=CARGOS_VALIDOS[c]===u.cargo?' selected':'';
        cargoOpts+='<option value="'+CARGOS_VALIDOS[c]+'"'+sel+'>'+CARGOS_VALIDOS[c]+'</option>';
    }
    abrirModal("Editar Usuário",
        '<div class="field-group"><label>Login</label><input type="text" id="mUELogin" value="'+u.login+'" readonly style="opacity:.6"></div>'+
        '<div class="field-group"><label>Nome</label><input type="text" id="mUENome" value="'+u.nome+'"></div>'+
        '<div class="field-group"><label>Cargo</label><select id="mUECargo">'+cargoOpts+'</select></div>'+
        '<button class="btn-primary" onclick="salvarEditUsuario('+idx+')">Salvar</button>');
}
function salvarEditUsuario(idx){
    if(!checkAdmin())return;
    var users=loadUsers();
    var nome=ge("mUENome").value.trim();
    var cargo=ge("mUECargo").value.trim();
    if(!nome)return;
    users[idx].nome=nome;
    users[idx].cargo=cargo||"Supervisor";
    saveUsers(users);
    /* Atualizar sessão se for o usuário logado */
    var logged=getLoggedUser();
    if(logged&&logged.login===users[idx].login){
        setLoggedUser(users[idx]);
        var fullDisplay="Olá, "+users[idx].nome+" — "+users[idx].cargo;
        ge("headerUserName").textContent=fullDisplay;
        ge("sidebarUser").textContent=fullDisplay;
    }
    fecharModal();renderConfiguracoes();
}
function modalAlterarSenhaUsuario(idx){
    if(!checkAdmin())return;
    var users=loadUsers(),u=users[idx];if(!u)return;
    abrirModal("Alterar Senha — "+u.nome,
        '<div class="field-group"><label>Nova Senha</label><input type="password" id="mUSenhaNew" placeholder="Nova senha"></div>'+
        '<button class="btn-primary" onclick="salvarSenhaUsuario('+idx+')">Salvar</button>');
}
function salvarSenhaUsuario(idx){
    if(!checkAdmin())return;
    var v=ge("mUSenhaNew").value;if(!v)return;
    var users=loadUsers();users[idx].senha=v;saveUsers(users);fecharModal();renderConfiguracoes();
}
function confirmarRemoverUsuario(idx){
    if(!checkAdmin())return;
    var users=loadUsers(),u=users[idx];if(!u)return;
    abrirModal("Remover Usuário",
        '<p style="margin-bottom:16px;color:var(--text-secondary)">Remover <strong style="color:var(--text-primary)">'+u.nome+'</strong> ('+u.login+')?</p>'+
        '<button class="btn-primary" style="background:var(--danger)" onclick="removerUsuario('+idx+')">Confirmar Remoção</button>');
}
function removerUsuario(idx){
    if(!checkAdmin()){fecharModal();return}
    var users=loadUsers();
    var logged=getLoggedUser();
    if(logged&&logged.login===users[idx].login){alert("Não é possível remover o usuário logado.");fecharModal();return}
    /* Proteger último administrador */
    if(users[idx].cargo==="Administrador"){
        var adminsCount=0;
        for(var j=0;j<users.length;j++){if(users[j].cargo==="Administrador")adminsCount++}
        if(adminsCount<=1){alert("Não é possível remover o último administrador do sistema.");fecharModal();return}
    }
    users.splice(idx,1);saveUsers(users);fecharModal();renderConfiguracoes();
}

/* CONFIG: OPERADORES */
function modalAddOperador(){
    if(!checkOperadorPermission())return;
    abrirModal("Adicionar Operador",
        '<div class="field-group"><label>Nome do Operador</label><input type="text" id="mOpNome" placeholder="Nome completo"></div>'+
        '<div class="field-group"><label>Turno</label><select id="mOpTurno"><option value="Manhã">Manhã</option><option value="Tarde">Tarde</option></select></div>'+
        '<div class="field-group"><label>Carteira</label><input type="text" id="mOpCarteira" placeholder="Ex: AEGEA" value="AEGEA"></div>'+
        '<button class="btn-primary" onclick="salvarNovoOp()">Adicionar</button>');
}
function salvarNovoOp(){
    if(!checkOperadorPermission())return;
    var nome=ge("mOpNome").value.trim().toUpperCase(),turno=ge("mOpTurno").value,carteira=ge("mOpCarteira").value.trim()||"AEGEA";
    if(!nome)return;
    var ops=loadOperadores();
    for(var i=0;i<ops.length;i++){if(ops[i].nome===nome){fecharModal();return}}
    ops.push({nome:nome,turno:turno,carteira:carteira});saveOperadores(ops);fecharModal();syncAfterOpChange();
}
function modalEditarOperador(idx){
    if(!checkOperadorPermission())return;
    var ops=loadOperadores(),op=ops[idx];if(!op)return;
    abrirModal("Editar Operador",
        '<div class="field-group"><label>Nome</label><input type="text" id="mEdNome" value="'+op.nome+'" readonly style="opacity:.6"></div>'+
        '<div class="field-group"><label>Turno</label><select id="mEdTurno"><option value="Manhã"'+(op.turno==="Manhã"?' selected':'')+'>Manhã</option><option value="Tarde"'+(op.turno==="Tarde"?' selected':'')+'>Tarde</option></select></div>'+
        '<div class="field-group"><label>Carteira</label><input type="text" id="mEdCarteira" value="'+(op.carteira||"")+'"></div>'+
        '<button class="btn-primary" onclick="salvarEditOp('+idx+')">Salvar</button>');
}
function salvarEditOp(idx){
    if(!checkOperadorPermission())return;
    var ops=loadOperadores();
    ops[idx].turno=ge("mEdTurno").value;
    ops[idx].carteira=ge("mEdCarteira").value.trim()||"AEGEA";
    saveOperadores(ops);fecharModal();syncAfterOpChange();
}
function confirmarRemoverOp(nome){
    if(!checkOperadorPermission())return;
    abrirModal("Remover Operador",
        '<p style="margin-bottom:16px;color:var(--text-secondary)">Remover <strong style="color:var(--text-primary)">'+nome+'</strong>?</p>'+
        '<p style="margin-bottom:16px;color:var(--text-muted);font-size:12px">As avaliações vinculadas a este operador também serão removidas.</p>'+
        '<button class="btn-primary" style="background:var(--danger)" onclick="removerOp(\''+nome.replace(/'/g,"\\'")+'\')">Confirmar Remoção</button>');
}
function removerOp(nome){
    if(!checkOperadorPermission()){fecharModal();return}
    var ops=loadOperadores();ops=ops.filter(function(o){return o.nome!==nome});saveOperadores(ops);
    /* Remove avaliações vinculadas ao operador SOMENTE no mês atual */
    var md=getMonthData();
    var keys=Object.keys(md);
    for(var i=0;i<keys.length;i++){
        if(keys[i].indexOf("||"+nome)!==-1)delete md[keys[i]];
    }
    setMonthData(md);
    fecharModal();syncAfterOpChange();
}

/* CONFIG: RESET */
function resetMesAtual(){
    if(!getLoggedUser())return;
    if(!confirm("Salvar dados do mês no histórico e resetar?"))return;
    var st=totalStats();
    var h=loadHist(),mk=monthKey();
    h[mk]={totalPlanejado:st.totalSlots,totalRealizado:st.totalDone,pendente:st.pendentes,media:st.media,pctConclusao:st.pct};
    saveHist(h);
    deleteMonthData();renderConfiguracoes();switchTab("visaoGeral");
}
function limparTudo(){
    if(!checkAdmin())return;
    if(!confirm("Apagar TODOS os dados? Esta ação é irreversível."))return;
    /* Remover todas as chaves de avaliação mensal */
    var avalKeys=listAvalKeys();
    for(var i=0;i<avalKeys.length;i++)localStorage.removeItem(avalKeys[i]);
    /* Remover chave antiga caso exista */
    localStorage.removeItem(SK_AVAL);
    localStorage.removeItem(SK_HIST);localStorage.removeItem(SK_OPS);
    renderConfiguracoes();switchTab("visaoGeral");
}

/* ======= PDF REPORTS ======= */
function pdfHeader(doc,titulo){
    doc.setFillColor(108,92,231);doc.rect(0,0,210,28,"F");
    doc.setTextColor(255,255,255);doc.setFontSize(16);doc.setFont("helvetica","bold");
    doc.text("Monitor.IA — Atual Assessoria",14,12);
    doc.setFontSize(10);doc.setFont("helvetica","normal");doc.text(titulo,14,20);
    var now=new Date();doc.text(now.toLocaleDateString("pt-BR")+" "+now.toLocaleTimeString("pt-BR"),196,12,{align:"right"});
    doc.setTextColor(0,0,0);return 36;
}

function gerarRelatorioMensalGeral(){
    var jsPDF=window.jspdf.jsPDF,doc=new jsPDF(),y=pdfHeader(doc,"Relatório Mensal Geral — "+monthKey());
    var st=totalStats();
    doc.setFontSize(10);doc.setFont("helvetica","normal");
    doc.text("Planejadas: "+st.totalSlots+"  |  Realizadas: "+st.totalDone+"  |  Pendentes: "+st.pendentes+"  |  Conclusão: "+st.pct+"%  |  Média: "+st.media,14,y);y+=8;
    var md=getMonthData(),ops=loadOperadores(),rows=[];
    for(var i=0;i<ops.length;i++){
        var notas=[],allK=Object.keys(md);
        for(var j=0;j<allK.length;j++){if(allK[j].indexOf("||"+ops[i].nome)!==-1&&md[allK[j]].nota!==null&&md[allK[j]].nota!==undefined&&md[allK[j]].nota!=="")notas.push(parseFloat(md[allK[j]].nota))}
        var med=notas.length>0?(notas.reduce(function(a,b){return a+b},0)/notas.length).toFixed(1):"—";
        rows.push([ops[i].nome,ops[i].carteira||"—",ops[i].turno,notas.length.toString(),med]);
    }
    doc.autoTable({startY:y,head:[["Operador","Carteira","Período","Aval.","Média"]],body:rows,styles:{fontSize:8,font:"helvetica"},headStyles:{fillColor:[108,92,231]}});
    doc.save("relatorio_mensal_"+monthKey()+".pdf");
}

function gerarRelatorioPendencias(){
    var jsPDF=window.jspdf.jsPDF,doc=new jsPDF(),y=pdfHeader(doc,"Relatório de Pendências — "+monthKey());
    var sched=getScheduleForMonth(),md=getMonthData(),rows=[];
    var dates=Object.keys(sched).sort();
    for(var d=0;d<dates.length;d++){
        var names=sched[dates[d]];
        for(var n=0;n<names.length;n++){
            var key=dates[d]+"||"+names[n];
            if(!md[key]||md[key].nota===null||md[key].nota===undefined||md[key].nota==="")rows.push([dates[d],names[n]]);
        }
    }
    doc.autoTable({startY:y,head:[["Data","Operador"]],body:rows.length>0?rows:[["—","Sem pendências"]],styles:{fontSize:8,font:"helvetica"},headStyles:{fillColor:[253,203,110],textColor:[0,0,0]}});
    doc.save("pendencias_"+monthKey()+".pdf");
}

function gerarRelatorioPorOperador(){
    var jsPDF=window.jspdf.jsPDF,doc=new jsPDF(),y=pdfHeader(doc,"Relatório por Operador — "+monthKey());
    var md=getMonthData(),ops=loadOperadores();
    for(var i=0;i<ops.length;i++){
        var details=[],allK=Object.keys(md).sort();
        for(var j=0;j<allK.length;j++){
            if(allK[j].indexOf("||"+ops[i].nome)!==-1&&md[allK[j]].nota!==null&&md[allK[j]].nota!==undefined&&md[allK[j]].nota!==""){
                details.push([allK[j].split("||")[0],md[allK[j]].nota.toString(),md[allK[j]].obs||""]);
            }
        }
        if(y>250){doc.addPage();y=20}
        doc.setFontSize(10);doc.setFont("helvetica","bold");doc.setTextColor(108,92,231);
        doc.text(ops[i].nome+" ("+ops[i].turno+")",14,y);doc.setTextColor(0,0,0);y+=4;
        doc.autoTable({startY:y,head:[["Data","Nota","Observação"]],body:details.length>0?details:[["—","—","Sem avaliações"]],styles:{fontSize:7,font:"helvetica"},headStyles:{fillColor:[108,92,231]},margin:{left:14}});
        y=doc.lastAutoTable.finalY+8;
    }
    doc.save("por_operador_"+monthKey()+".pdf");
}

function gerarRelatorioPorTurno(){
    var jsPDF=window.jspdf.jsPDF,doc=new jsPDF(),y=pdfHeader(doc,"Relatório por Turno — "+monthKey());
    var ops=loadOperadores(),md=getMonthData(),turnos=["Manhã","Tarde"];
    for(var t=0;t<turnos.length;t++){
        var tOps=ops.filter(function(o){return o.turno===turnos[t]}),rows=[];
        for(var i=0;i<tOps.length;i++){
            var notas=[],allK=Object.keys(md);
            for(var j=0;j<allK.length;j++){if(allK[j].indexOf("||"+tOps[i].nome)!==-1&&md[allK[j]].nota!==null&&md[allK[j]].nota!==undefined&&md[allK[j]].nota!=="")notas.push(parseFloat(md[allK[j]].nota))}
            var med=notas.length>0?(notas.reduce(function(a,b){return a+b},0)/notas.length).toFixed(1):"—";
            rows.push([tOps[i].nome,tOps[i].carteira||"—",notas.length.toString(),med]);
        }
        doc.setFontSize(12);doc.setFont("helvetica","bold");doc.setTextColor(108,92,231);
        doc.text("Turno: "+turnos[t],14,y);doc.setTextColor(0,0,0);y+=4;
        doc.autoTable({startY:y,head:[["Operador","Carteira","Aval.","Média"]],body:rows,styles:{fontSize:8,font:"helvetica"},headStyles:{fillColor:[108,92,231]}});
        y=doc.lastAutoTable.finalY+10;
    }
    doc.save("por_turno_"+monthKey()+".pdf");
}

function gerarRelatorioFechamento(){
    var jsPDF=window.jspdf.jsPDF,doc=new jsPDF(),y=pdfHeader(doc,"Fechamento do Mês — "+monthKey());
    var st=totalStats();
    doc.setFontSize(11);doc.setFont("helvetica","normal");
    doc.text("Total Planejado: "+st.totalSlots,14,y);y+=7;
    doc.text("Total Realizado: "+st.totalDone,14,y);y+=7;
    doc.text("Pendentes: "+st.pendentes,14,y);y+=7;
    doc.text("Conclusão: "+st.pct+"%",14,y);y+=7;
    doc.setFont("helvetica","bold");doc.text("Média Geral: "+st.media,14,y);
    doc.save("fechamento_"+monthKey()+".pdf");
}

function gerarRelatorioHistorico(){
    var jsPDF=window.jspdf.jsPDF,doc=new jsPDF(),y=pdfHeader(doc,"Histórico de Meses");
    var hist=loadHist(),keys=Object.keys(hist).sort().reverse(),rows=[];
    for(var i=0;i<keys.length;i++){
        var d=hist[keys[i]];
        rows.push([keys[i],(d.totalPlanejado||0).toString(),(d.totalRealizado||0).toString(),(d.pendente||0).toString(),(d.pctConclusao||"0")+"%",d.media||"—"]);
    }
    doc.autoTable({startY:y,head:[["Mês","Planejado","Realizado","Pendente","Conclusão","Média"]],body:rows.length>0?rows:[["—","—","—","—","—","Sem histórico"]],styles:{fontSize:9,font:"helvetica"},headStyles:{fillColor:[108,92,231]}});
    doc.save("historico_meses.pdf");
}

function gerarRelatorioFiltrado(){
    if(!_filtroOpValue){alert("Selecione um operador antes de gerar o PDF.");return}
    var nomeOp=_filtroOpValue;
    var ops=loadOperadores();
    var opObj=null;
    for(var i=0;i<ops.length;i++){if(ops[i].nome===nomeOp){opObj=ops[i];break}}
    if(!opObj){alert("Operador não encontrado.");return}

    var jsPDF=window.jspdf.jsPDF,doc=new jsPDF(),y=pdfHeader(doc,"Relatório Individual — "+monthKey());
    var md=getMonthData();

    /* Cabeçalho do operador */
    doc.setFontSize(12);doc.setFont("helvetica","bold");doc.setTextColor(108,92,231);
    doc.text(opObj.nome,14,y);y+=6;
    doc.setFontSize(9);doc.setFont("helvetica","normal");doc.setTextColor(100,100,100);
    doc.text("Carteira: "+(opObj.carteira||"—")+"   |   Período: "+opObj.turno,14,y);y+=8;
    doc.setTextColor(0,0,0);

    /* Coletar avaliações deste operador */
    var details=[],notas=[];
    var allK=Object.keys(md).sort();
    for(var j=0;j<allK.length;j++){
        if(allK[j].indexOf("||"+nomeOp)===-1)continue;
        var entry=md[allK[j]];
        var data=allK[j].split("||")[0];
        var nota=(entry.nota!==null&&entry.nota!==undefined&&entry.nota!=="")?entry.nota.toString():"—";
        var obs=entry.obs||"";
        details.push([data,nota,obs]);
        if(nota!=="—")notas.push(parseFloat(entry.nota));
    }

    /* Resumo */
    var media=notas.length>0?(notas.reduce(function(a,b){return a+b},0)/notas.length).toFixed(1):"—";
    var menor=notas.length>0?Math.min.apply(null,notas).toFixed(1):"—";
    var maior=notas.length>0?Math.max.apply(null,notas).toFixed(1):"—";
    doc.setFontSize(10);doc.setFont("helvetica","normal");
    doc.text("Avaliações realizadas: "+notas.length+"   |   Média: "+media+"   |   Menor nota: "+menor+"   |   Maior nota: "+maior,14,y);y+=8;

    /* Tabela de avaliações */
    doc.autoTable({
        startY:y,
        head:[["Data","Nota","Observação"]],
        body:details.length>0?details:[["—","—","Sem avaliações no mês"]],
        styles:{fontSize:8,font:"helvetica",cellWidth:'wrap'},
        headStyles:{fillColor:[108,92,231]},
        columnStyles:{0:{cellWidth:28},1:{cellWidth:16,halign:'center'},2:{cellWidth:'auto'}},
        margin:{left:14,right:14}
    });

    doc.save("operador_"+nomeOp.replace(/\s+/g,"_")+"_"+monthKey()+".pdf");
}

/* ======= KEYPRESS ======= */
document.addEventListener("keydown",function(e){if(e.key==="Enter"&&ge("loginScreen").style.display!=="none")doLogin()});

/* ======= INIT ======= */
(function init(){
    migrateAvalIfNeeded();
    checkMonthReset();
    loadUsers(); /* Garante que users existem */
    /* Limpar avaliações órfãs ao iniciar */
    cleanOrphanedAvals();
    var cfg=loadConfig();
    if(!cfg.senhaAtiva){
        var users=loadUsers();
        setLoggedUser(users[0]||{login:"admin",nome:"Administrador",cargo:"Administrador"});
        showApp();
    }else if(checkSession()){
        showApp();
    }
})();
