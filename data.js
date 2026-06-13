/* =====================================================
   DATA.JS — Complete data for BB·TI Study Platform
   ===================================================== */

/* ─── XP LEVELS ─── */
const LEVELS=[
  {lv:1,name:'Beginner',          icon:'🌱',xp:0,    next:500},
  {lv:2,name:'Student',           icon:'📖',xp:500,  next:1200},
  {lv:3,name:'Analyst',           icon:'🔍',xp:1200, next:2200},
  {lv:4,name:'Developer',         icon:'💻',xp:2200, next:3500},
  {lv:5,name:'Engineer',          icon:'⚙️',xp:3500, next:5000},
  {lv:6,name:'Specialist',        icon:'🎯',xp:5000, next:7000},
  {lv:7,name:'Senior Engineer',   icon:'🚀',xp:7000, next:9500},
  {lv:8,name:'Architect',         icon:'🏛️',xp:9500, next:12500},
  {lv:9,name:'Principal Architect',icon:'⭐',xp:12500,next:16000},
  {lv:10,name:'BB·TI Ready',      icon:'🏆',xp:16000,next:99999},
];

/* ─── TI SUBJECTS ─── */
const SUBJECTS_TI=[
  {id:'prob', name:'Probabilidade & Estatística',icon:'📊',cat:'math',    color:'#5b8af5',xp:25,topics:['Média','Mediana','Moda','Variância','Desvio Padrão','Probabilidade','Distribuição Normal','Distribuição Binomial','Combinatória','Permutação']},
  {id:'banking',name:'Conhecimentos Bancários', icon:'🏦',cat:'banking',  color:'#30d5a8',xp:20,topics:['SFN','CMN','BACEN','CVM','PIX','TED','DOC','Empréstimos','Investimentos','SELIC','CDI','IPCA','CDB','LCI','LCA','FGC','Tesouro Direto']},
  {id:'sw-eng',name:'Engenharia de Software',   icon:'⚙️',cat:'software', color:'#7c5cf6',xp:25,topics:['Metodologias Ágeis','Scrum','Kanban','DevOps','CI/CD','Cloud Computing','Containers','Kubernetes','REST APIs','Microsserviços','SOLID','Clean Architecture']},
  {id:'prog',  name:'Linguagens de Programação',icon:'💻',cat:'programming',color:'#f5c842',xp:30,topics:['Java 11','Java 17','Spring Boot','Python 3.9','TypeScript 4','JavaScript ES2022','HTML5','CSS3','Streams API','Lambda','Generics']},
  {id:'db',    name:'Banco de Dados',           icon:'🗄️',cat:'database',  color:'#f5695b',xp:25,topics:['SQL','DDL','DML','SELECT','JOINs','GROUP BY','HAVING','Subqueries','Views','Stored Procedures','Normalização','NoSQL','MongoDB','Redis','Neo4j']},
  {id:'ai',    name:'IA & Ciência de Dados',    icon:'🤖',cat:'ai',        color:'#5b8af5',xp:30,topics:['Data Warehouse','Data Lake','ETL','Machine Learning','Deep Learning','NLP','Pandas','NumPy','Scikit-Learn','TensorFlow','Big Data','Apache Spark']},
  {id:'sec',   name:'Segurança da Informação',  icon:'🔐',cat:'security',  color:'#30d5a8',xp:25,topics:['Criptografia Simétrica','Criptografia Assimétrica','AES','RSA','Hashing','JWT','OAuth2','HTTPS','TLS','SQL Injection','XSS','CSRF','OWASP Top 10']},
  {id:'extra', name:'Tópicos Complementares',   icon:'🛠️',cat:'extra',     color:'#7c5cf6',xp:15,topics:['Linux','Shell Script','Git','GitHub','Branches','Merge','Pull Request','TCP/IP','DNS','HTTP','Clean Architecture','DDD','Event Driven','CQRS']},
];

/* ─── PORTUGUÊS SUBJECTS ─── */
const SUBJECTS_PT=[
  {id:'pt-interp',name:'Interpretação de Texto',icon:'📖',cat:'interp',color:'#5b8af5',xp:20,topics:['Ideia Principal','Ideia Secundária','Inferência','Vocabulário no Contexto','Título Adequado','Resumo do Texto']},
  {id:'pt-gram',  name:'Gramática',             icon:'✍️',cat:'gram', color:'#30d5a8',xp:20,topics:['Substantivo','Adjetivo','Verbo','Advérbio','Pronome','Conjunção','Preposição','Interjeição','Artigo','Numeral']},
  {id:'pt-sint',  name:'Sintaxe',               icon:'🔗',cat:'sint', color:'#7c5cf6',xp:25,topics:['Sujeito','Predicado','Objeto Direto','Objeto Indireto','Adjunto Adnominal','Adjunto Adverbial','Aposto','Vocativo']},
  {id:'pt-conc',  name:'Concordância',          icon:'✅',cat:'conc', color:'#f5c842',xp:25,topics:['Concordância Verbal','Concordância Nominal','Casos Especiais','Sujeito Composto','Verbos com Particularidades']},
  {id:'pt-reg',   name:'Regência',              icon:'🎯',cat:'reg',  color:'#f5695b',xp:25,topics:['Regência Verbal','Regência Nominal','Verbos de Dupla Regência','Preposições Exigidas']},
  {id:'pt-crase', name:'Crase',                 icon:'⚡',cat:'crase',color:'#30d5a8',xp:20,topics:['Regra Básica','Casos Obrigatórios','Casos Proibidos','Casos Facultativos','Expressões com Crase']},
  {id:'pt-pron',  name:'Pronomes',              icon:'👤',cat:'pron', color:'#5b8af5',xp:20,topics:['Pronomes Pessoais','Pronomes Relativos','Pronomes Demonstrativos','Colocação Pronominal','Ênclise','Próclise','Mesóclise']},
  {id:'pt-pont',  name:'Pontuação',             icon:'.,',cat:'pont', color:'#7c5cf6',xp:20,topics:['Vírgula','Ponto e Vírgula','Dois-pontos','Travessão','Aspas','Parênteses','Exclamação','Interrogação']},
  {id:'pt-sem',   name:'Semântica & Coesão',    icon:'🔄',cat:'sem',  color:'#f5c842',xp:20,topics:['Sinonímia','Antonímia','Polissemia','Homonímia','Coesão Textual','Coerência','Funções da Linguagem']},
];

/* ─── ENGLISH SUBJECTS ─── */
const SUBJECTS_EN=[
  {id:'en-comp', name:'Reading Comprehension',icon:'📘',cat:'comp',  color:'#5b8af5',xp:20,topics:['Main Idea','Supporting Details','Inference','Vocabulary in Context','Author\'s Purpose','Text Structure']},
  {id:'en-vocab',name:'IT Vocabulary',        icon:'💻',cat:'vocab', color:'#30d5a8',xp:20,topics:['Software Terms','Hardware Terms','Network Terminology','Cloud Computing Terms','Security Terms','Agile/DevOps Terms']},
  {id:'en-tense',name:'Verb Tenses',          icon:'⏰',cat:'tense', color:'#7c5cf6',xp:25,topics:['Simple Present','Simple Past','Present Perfect','Past Perfect','Future Forms','Present Continuous','Past Continuous']},
  {id:'en-modal',name:'Modal Verbs',          icon:'🔧',cat:'modal', color:'#f5c842',xp:20,topics:['Can / Could','Must / Have to','Should / Ought to','May / Might','Will / Would','Shall','Need not']},
  {id:'en-cond', name:'Conditionals',         icon:'🔀',cat:'cond',  color:'#f5695b',xp:25,topics:['Zero Conditional','First Conditional','Second Conditional','Third Conditional','Mixed Conditionals']},
  {id:'en-pass', name:'Passive Voice',        icon:'🔄',cat:'pass',  color:'#30d5a8',xp:20,topics:['Present Simple Passive','Past Simple Passive','Future Passive','Perfect Passive','Modal Passive']},
  {id:'en-phr',  name:'Phrasal Verbs',        icon:'🚀',cat:'phr',   color:'#5b8af5',xp:20,topics:['set up','carry out','break down','look into','put off','come across','run into','give up','take over','log in/out']},
  {id:'en-conn', name:'Connectors',           icon:'🔗',cat:'conn',  color:'#7c5cf6',xp:20,topics:['However / Nevertheless','Therefore / Thus','Moreover / Furthermore','Although / Despite','Because / Since','In addition / Besides']},
];

/* ─── MATHEMATICS SUBJECTS ─── */
const SUBJECTS_MAT=[
  {id:'mat-arith',name:'Aritmética',            icon:'🔢',cat:'arith',color:'#5b8af5',xp:20,topics:['Operações Básicas','Divisibilidade','MDC e MMC','Frações','Decimais','Porcentagem','Razão e Proporção']},
  {id:'mat-regra',name:'Regra de Três',         icon:'⚖️',cat:'regra',color:'#30d5a8',xp:20,topics:['Regra de Três Simples','Regra de Três Composta','Grandezas Diretamente Proporcionais','Grandezas Inversamente Proporcionais']},
  {id:'mat-fin',  name:'Matemática Financeira', icon:'💰',cat:'fin',  color:'#7c5cf6',xp:30,topics:['Juros Simples','Juros Compostos','Desconto Simples','Desconto Composto','Montante','Taxa de Juros','Capitalização']},
  {id:'mat-func', name:'Funções & Álgebra',     icon:'📈',cat:'func', color:'#f5c842',xp:25,topics:['Função Afim','Função Quadrática','Função Exponencial','Função Logarítmica','Equações','Inequações','Sistemas']},
  {id:'mat-logic',name:'Raciocínio Lógico',     icon:'🧠',cat:'logic',color:'#f5695b',xp:25,topics:['Proposições','Conectivos Lógicos','Negação','Tabela Verdade','Tautologia','Silogismo','Lógica de Predicados']},
  {id:'mat-conj', name:'Conjuntos',             icon:'⭕',cat:'conj', color:'#30d5a8',xp:20,topics:['União','Interseção','Diferença','Complementar','Diagramas de Venn','Produto Cartesiano']},
  {id:'mat-comb', name:'Combinatória & Prob.',  icon:'🎲',cat:'comb', color:'#5b8af5',xp:25,topics:['Princípio Multiplicativo','Arranjo','Permutação','Combinação','Probabilidade Simples','Probabilidade Condicional','Distribuições']},
  {id:'mat-stat', name:'Estatística',           icon:'📊',cat:'stat', color:'#7c5cf6',xp:25,topics:['Média','Mediana','Moda','Variância','Desvio Padrão','Gráficos','Tabelas de Frequência','Distribuição Normal']},
];

/* ─── WEEKLY PLAN (updated) ─── */
const WEEKLY_PLAN=[
  {day:'Segunda',abbr:'SEG',key:'mon',tasks:[
    {name:'Probabilidade & Estatística',dur:'1h',   subj:'prob',   xp:50},
    {name:'Conhecimentos Bancários',    dur:'45 min',subj:'banking',xp:25},
    {name:'Português — Interpretação',  dur:'45 min',subj:'pt-interp',xp:25},
  ]},
  {day:'Terça',  abbr:'TER',key:'tue',tasks:[
    {name:'Banco de Dados & SQL',       dur:'1h',   subj:'db',     xp:50},
    {name:'Matemática Financeira',      dur:'45 min',subj:'mat-fin',xp:25},
    {name:'English Reading',            dur:'45 min',subj:'en-comp',xp:25},
  ]},
  {day:'Quarta', abbr:'QUA',key:'wed',tasks:[
    {name:'Engenharia de Software',     dur:'1h',   subj:'sw-eng', xp:50},
    {name:'Scrum & Kanban',             dur:'45 min',subj:'sw-eng', xp:25},
    {name:'Português — Gramática',      dur:'45 min',subj:'pt-gram',xp:25},
  ]},
  {day:'Quinta', abbr:'QUI',key:'thu',tasks:[
    {name:'Java',                       dur:'1h',   subj:'prog',   xp:50},
    {name:'Python',                     dur:'45 min',subj:'prog',   xp:25},
    {name:'Matemática — Raciocínio Lógico',dur:'45 min',subj:'mat-logic',xp:25},
  ]},
  {day:'Sexta',  abbr:'SEX',key:'fri',tasks:[
    {name:'Segurança da Informação',    dur:'1h',   subj:'sec',    xp:50},
    {name:'Cloud & DevOps',             dur:'45 min',subj:'sw-eng', xp:25},
    {name:'English Grammar',           dur:'45 min',subj:'en-tense',xp:25},
  ]},
  {day:'Sábado', abbr:'SÁB',key:'sat',tasks:[
    {name:'IA & Data Science',          dur:'1h',   subj:'ai',     xp:50},
    {name:'Machine Learning',           dur:'1h',   subj:'ai',     xp:50},
    {name:'Redação',                    dur:'1h',   subj:'essay',  xp:75},
  ]},
  {day:'Domingo',abbr:'DOM',key:'sun',tasks:[
    {name:'Simulado Completo',          dur:'2h',   subj:'all',    xp:150},
    {name:'Revisão Semanal',            dur:'1h',   subj:'all',    xp:75},
    {name:'Revisão de Redação',         dur:'1h',   subj:'essay',  xp:50},
  ]},
];

/* ─── QUESTION BANK ─── */
const QUESTIONS=[
  // PROBABILIDADE & ESTATÍSTICA (20)
  {id:'p1',cat:'prob',area:'TI',diff:'easy',   q:'Qual medida de tendência central é mais afetada por outliers?',opts:['Mediana','Moda','Média','Desvio Padrão'],ans:2,exp:'A média aritmética soma todos os valores dividindo pelo total, portanto é fortemente influenciada por valores extremos (outliers).'},
  {id:'p2',cat:'prob',area:'TI',diff:'easy',   q:'Em {4,7,7,9,12}, qual é a moda?',opts:['9','4','7','12'],ans:2,exp:'Moda = valor que mais aparece. O número 7 aparece duas vezes, sendo o único repetido.'},
  {id:'p3',cat:'prob',area:'TI',diff:'medium', q:'Uma moeda honesta é lançada 3 vezes. P(exatamente 2 caras) = ?',opts:['1/4','3/8','1/2','1/8'],ans:1,exp:'P = C(3,2)×(½)²×(½) = 3×¼×½ = 3/8. Distribuição binomial B(3, 0.5).'},
  {id:'p4',cat:'prob',area:'TI',diff:'medium', q:'Desvio padrão de {2,4,4,4,5,5,7,9}:',opts:['1','2','3','4'],ans:1,exp:'Média = 5. Variância = [(9+1+1+1+0+0+4+16)/8] = 4. Desvio padrão = √4 = 2.'},
  {id:'p5',cat:'prob',area:'TI',diff:'medium', q:'Na distribuição normal, ±2σ contém aproximadamente:',opts:['68%','95%','99,7%','50%'],ans:1,exp:'Regra 68-95-99,7: ±1σ≈68%, ±2σ≈95%, ±3σ≈99,7%.'},
  {id:'p6',cat:'prob',area:'TI',diff:'hard',   q:'Se X~B(10,0.3), a esperança E(X) é:',opts:['3','0.3','7','2.1'],ans:0,exp:'Para Binomial B(n,p): E(X) = n×p = 10×0,3 = 3.'},
  {id:'p7',cat:'prob',area:'TI',diff:'easy',   q:'Média de {10,20,30,40,50}:',opts:['25','30','35','40'],ans:1,exp:'Soma=150, n=5. Média=150/5=30.'},
  {id:'p8',cat:'prob',area:'TI',diff:'medium', q:'A variância é calculada como:',opts:['Raiz do DP','Média dos desvios absolutos','Média dos quadrados dos desvios','Somatório dos desvios'],ans:2,exp:'Variância σ² = Σ(xi−μ)²/N — média dos quadrados das diferenças em relação à média.'},
  {id:'p9',cat:'prob',area:'TI',diff:'hard',   q:'Qual distribuição modela eventos raros em intervalos fixos?',opts:['Binomial','Normal','Poisson','Uniforme'],ans:2,exp:'A distribuição de Poisson modela eventos independentes em intervalos fixos (chegadas em fila, erros em software).'},
  {id:'p10',cat:'prob',area:'TI',diff:'easy',  q:'Mediana de {3,7,2,9,5}:',opts:['5','7','3','9'],ans:0,exp:'Ordenado: {2,3,5,7,9}. Mediana = 5 (valor central).'},
  {id:'p11',cat:'prob',area:'TI',diff:'medium',q:'P(A)=0.4, P(B)=0.3, independentes. P(A∩B)=?',opts:['0.7','0.1','0.12','0.4'],ans:2,exp:'Eventos independentes: P(A∩B)=P(A)×P(B)=0,4×0,3=0,12.'},
  {id:'p12',cat:'prob',area:'TI',diff:'medium',q:'Dois dados lançados. P(soma=7)=?',opts:['1/6','5/36','1/12','7/36'],ans:0,exp:'Combinações que somam 7: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6 casos. P=6/36=1/6.'},
  {id:'p13',cat:'prob',area:'TI',diff:'hard',  q:'Coeficiente de Variação (CV) é usado para:',opts:['Medir assimetria','Comparar dispersão entre distribuições diferentes','Calcular correlação','Testar hipóteses'],ans:1,exp:'CV=(σ/μ)×100. Permite comparar a dispersão relativa entre conjuntos com escalas diferentes.'},
  {id:'p14',cat:'prob',area:'TI',diff:'easy',  q:'Baralho de 52 cartas. P(tirar um Ás)=?',opts:['1/13','1/52','4/52','1/4'],ans:0,exp:'4 ases em 52 cartas: P=4/52=1/13.'},
  {id:'p15',cat:'prob',area:'TI',diff:'medium',q:'Correlação de Pearson varia entre:',opts:['0 e 1','-1 e 0','-1 e 1','0 e 100'],ans:2,exp:'O coeficiente r varia de -1 (correlação negativa perfeita) a +1 (correlação positiva perfeita).'},
  {id:'p16',cat:'prob',area:'TI',diff:'hard',  q:'O Teorema Central do Limite afirma:',opts:['Toda distribuição é normal','Média amostral tende à normal com amostras grandes','Outliers não afetam a média','Variância converge para 1'],ans:1,exp:'O TCL garante que a distribuição das médias amostrais se aproxima da normal quando n≥30, independente da distribuição original.'},
  {id:'p17',cat:'prob',area:'TI',diff:'medium',q:'P(A)=0.6, P(B)=0.4, P(A∪B)=0.76. A e B são:',opts:['Mutuamente exclusivos','Independentes','Complementares','Opostos'],ans:1,exp:'P(A∩B)=0.6+0.4−0.76=0.24. Como 0.24=0.6×0.4, os eventos são independentes.'},
  {id:'p18',cat:'prob',area:'TI',diff:'easy',  q:'Qual medida representa o valor mais frequente?',opts:['Média','Mediana','Moda','Amplitude'],ans:2,exp:'A Moda é o valor que ocorre com maior frequência no conjunto de dados.'},
  {id:'p19',cat:'prob',area:'TI',diff:'hard',  q:'Relação entre variância e desvio padrão:',opts:['σ=σ²','σ²=√σ','σ=√σ²','σ²=σ×2'],ans:2,exp:'O desvio padrão (σ) é a raiz quadrada da variância (σ²).'},
  {id:'p20',cat:'prob',area:'TI',diff:'medium',q:'Em permutação simples de n elementos, o número de arranjos é:',opts:['n!','n²','2ⁿ','n×(n-1)'],ans:0,exp:'Permutação simples Pn = n! (fatorial de n). Ex: 4 elementos = 4! = 24 arranjos distintos.'},

  // BANKING (20)
  {id:'b1',cat:'banking',area:'TI',diff:'easy',  q:'O BACEN é responsável por:',opts:['Emitir ações','Fiscalizar bancos e executar política monetária','Captar poupança','Emitir debêntures'],ans:1,exp:'O Banco Central do Brasil (BACEN) executa a política monetária e fiscaliza o sistema financeiro nacional.'},
  {id:'b2',cat:'banking',area:'TI',diff:'easy',  q:'O PIX foi criado pelo:',opts:['CMN','CVM','BACEN','Tesouro Nacional'],ans:2,exp:'O PIX foi criado e é regulamentado pelo BACEN, funcionando 24h/7 dias, todos os dias do ano.'},
  {id:'b3',cat:'banking',area:'TI',diff:'medium',q:'A taxa SELIC é definida pelo:',opts:['BACEN','CMN','COPOM','Tesouro Nacional'],ans:2,exp:'O COPOM (Comitê de Política Monetária) define a meta para a taxa SELIC a cada ~45 dias.'},
  {id:'b4',cat:'banking',area:'TI',diff:'medium',q:'CDB significa:',opts:['Certificado de Depósito Bancário','Conta de Débito Bancário','Crédito Direto ao Banco','Câmbio de Divisa Bancária'],ans:0,exp:'CDB — Certificado de Depósito Bancário — é um título de renda fixa emitido por bancos para captar recursos.'},
  {id:'b5',cat:'banking',area:'TI',diff:'hard',  q:'Qual órgão regula o mercado de capitais no Brasil?',opts:['BACEN','CMN','CVM','ANBIMA'],ans:2,exp:'A CVM (Comissão de Valores Mobiliários) regula, fiscaliza e desenvolve o mercado de valores mobiliários.'},
  {id:'b6',cat:'banking',area:'TI',diff:'easy',  q:'LCI é isenta de IR para:',opts:['Pessoas jurídicas','Pessoas físicas','Ambos','Nenhum'],ans:1,exp:'A LCI (Letra de Crédito Imobiliário) é isenta de Imposto de Renda para pessoas físicas.'},
  {id:'b7',cat:'banking',area:'TI',diff:'medium',q:'O CDI é uma taxa de referência para:',opts:['Financiamentos imobiliários','Operações interbancárias','Tesouro Direto','Câmbio'],ans:1,exp:'CDI é a taxa praticada em empréstimos de curtíssimo prazo entre bancos, usada como referência para investimentos.'},
  {id:'b8',cat:'banking',area:'TI',diff:'hard',  q:'O compulsório bancário é instrumento de:',opts:['Política fiscal','Política cambial','Política monetária','Política creditícia específica'],ans:2,exp:'O recolhimento compulsório é instrumento de política monetária — o BACEN exige que bancos mantenham uma fração dos depósitos retidos.'},
  {id:'b9',cat:'banking',area:'TI',diff:'medium',q:'O índice de inflação oficial do Brasil é:',opts:['CDI','INPC','IPCA','IGP-M'],ans:2,exp:'IPCA (Índice de Preços ao Consumidor Amplo) é a medida oficial de inflação, calculada pelo IBGE.'},
  {id:'b10',cat:'banking',area:'TI',diff:'hard', q:'Órgão normativo máximo do SFN:',opts:['BACEN','CVM','CMN','Ministério da Fazenda'],ans:2,exp:'CMN (Conselho Monetário Nacional) é o órgão máximo, responsável por formular a política de moeda e crédito.'},
  {id:'b11',cat:'banking',area:'TI',diff:'easy', q:'O Tesouro Direto é um programa de:',opts:['Compra de ações','Compra de títulos públicos federais','Financiamento imobiliário','Câmbio de moedas'],ans:1,exp:'Tesouro Direto permite que pessoas físicas invistam em títulos da dívida pública federal online.'},
  {id:'b12',cat:'banking',area:'TI',diff:'medium',q:'FGC garante depósitos até:',opts:['R$100 mil','R$250 mil','R$500 mil','R$1 milhão'],ans:1,exp:'O FGC garante até R$250.000 por CPF por instituição, com limite global de R$1 milhão por CPF.'},
  {id:'b13',cat:'banking',area:'TI',diff:'easy', q:'LCA é vinculada ao setor:',opts:['Imobiliário','Agronegócio','Industrial','Exportação'],ans:1,exp:'LCA — Letra de Crédito do Agronegócio — financia o setor rural, isenta de IR para pessoa física.'},
  {id:'b14',cat:'banking',area:'TI',diff:'medium',q:'Open Finance permite:',opts:['Eliminar agências','Compartilhamento de dados entre instituições com autorização','Criar moedas digitais','Privatizar o BACEN'],ans:1,exp:'O Open Finance permite que o cliente compartilhe seus dados financeiros com diferentes instituições, fomentando concorrência e inovação.'},
  {id:'b15',cat:'banking',area:'TI',diff:'hard', q:'Basileia III impõe requisitos de:',opts:['Inflação','Capital mínimo e liquidez para bancos','Câmbio','Tributação'],ans:1,exp:'Basileia III fortalece a regulação bancária, exigindo níveis mínimos de capital, alavancagem e liquidez.'},
  {id:'b16',cat:'banking',area:'TI',diff:'medium',q:'Poupança paga rendimento de (SELIC > 8,5%):',opts:['IPCA+spread','0,5% ao mês + TR','CDI×90%','Taxa de câmbio'],ans:1,exp:'Quando SELIC > 8,5% a.a., a poupança rende 0,5% ao mês + TR. Abaixo disso, 70% da SELIC + TR.'},
  {id:'b17',cat:'banking',area:'TI',diff:'easy', q:'Debêntures são emitidas por:',opts:['Governo federal','Bancos','Sociedades anônimas','Cooperativas de crédito'],ans:2,exp:'Debêntures são títulos de dívida de longo prazo emitidos por sociedades anônimas para captar recursos.'},
  {id:'b18',cat:'banking',area:'TI',diff:'medium',q:'COPOM se reúne a cada:',opts:['30 dias','~45 dias','60 dias','90 dias'],ans:1,exp:'O COPOM se reúne ~8 vezes por ano (a cada ~45 dias) para definir a meta da taxa SELIC.'},
  {id:'b19',cat:'banking',area:'TI',diff:'hard', q:'TED pode ser realizado:',opts:['Apenas dias úteis','24h por dia','Apenas via PIX','Apenas entre bancos diferentes'],ans:0,exp:'TED é processado em dias úteis no horário bancário, com liquidação no mesmo dia.'},
  {id:'b20',cat:'banking',area:'TI',diff:'medium',q:'Qual produto tem liquidez diária e rentabilidade pós-fixada ao CDI?',opts:['Tesouro IPCA+','CDB com liquidez diária','LCI com prazo mínimo','Ações ordinárias'],ans:1,exp:'CDB com liquidez diária pode ser resgatado a qualquer momento e tem rentabilidade vinculada ao CDI.'},

  // JAVA/PROG (20)
  {id:'j1',cat:'prog',area:'TI',diff:'easy',   q:'"final" em uma classe Java significa:',opts:['Classe abstrata','Não pode ser instanciada','Não pode ser herdada','É estática'],ans:2,exp:'"final" em uma classe impede que ela seja estendida por subclasses.'},
  {id:'j2',cat:'prog',area:'TI',diff:'easy',   q:'Interface funcional possui:',opts:['Nenhum método','Apenas default','Exatamente 1 método abstrato','2+ métodos abstratos'],ans:2,exp:'@FunctionalInterface possui exatamente um método abstrato, permitindo uso com lambdas e method references.'},
  {id:'j3',cat:'prog',area:'TI',diff:'medium', q:'Coleção Java que garante elementos únicos e ordenados:',opts:['ArrayList','HashSet','TreeSet','LinkedList'],ans:2,exp:'TreeSet implementa SortedSet, armazenando elementos únicos em ordem natural ou por Comparator.'},
  {id:'j4',cat:'prog',area:'TI',diff:'medium', q:'Streams API em Java é:',opts:['Modifica a coleção original','Lazy e imutável','Armazena em disco','Substitui threads'],ans:1,exp:'A Streams API é lazy (avaliação postergada) e imutável (não altera a coleção source).'},
  {id:'j5',cat:'prog',area:'TI',diff:'hard',   q:'Garbage Collection gerencia:',opts:['Criptografia automática','Memória heap automaticamente','Código desnecessário','Classes não utilizadas'],ans:1,exp:'O GC da JVM identifica e libera objetos não mais referenciados no heap automaticamente.'},
  {id:'j6',cat:'prog',area:'TI',diff:'medium', q:'Optional<T> serve para:',opts:['Campos opcionais no BD','Evitar NullPointerException','Criar threads opcionais','Parâmetros opcionais'],ans:1,exp:'Optional<T> representa valores que podem ser ausentes, evitando NullPointerException de forma explícita.'},
  {id:'j7',cat:'prog',area:'TI',diff:'easy',   q:'Modificador mais restrito em Java:',opts:['public','protected','package-private','private'],ans:3,exp:'"private" é acessível apenas dentro da própria classe.'},
  {id:'j8',cat:'prog',area:'TI',diff:'hard',   q:'Java Records são usados para:',opts:['Criar threads','Classes imutáveis de dados sem boilerplate','Gravar em arquivo','Criar interfaces funcionais'],ans:1,exp:'Records geram automaticamente constructor, getters, equals(), hashCode() e toString() para classes de dados imutáveis.'},
  {id:'j9',cat:'prog',area:'TI',diff:'medium', q:'@Transactional propagação padrão:',opts:['REQUIRES_NEW','NEVER','REQUIRED','SUPPORTS'],ans:2,exp:'PROPAGATION_REQUIRED: usa a transação existente ou cria uma nova caso não exista.'},
  {id:'j10',cat:'prog',area:'TI',diff:'medium',q:'HashMap vs Hashtable — HashMap:',opts:['É thread-safe','Não permite null','Permite null como chave e valor','Só aceita String'],ans:2,exp:'HashMap permite uma chave null e múltiplos valores null; não é thread-safe. Hashtable não permite null.'},
  {id:'j11',cat:'prog',area:'TI',diff:'easy',  q:'Herança em Java usa a palavra-chave:',opts:['implements','inherits','extends','super'],ans:2,exp:'"extends" implementa herança de classes; "implements" é para interfaces.'},
  {id:'j12',cat:'prog',area:'TI',diff:'hard',  q:'CompletableFuture em Java 8+ serve para:',opts:['Transações de BD','Programação assíncrona e composição','Serialização','Interfaces gráficas'],ans:1,exp:'CompletableFuture permite programação assíncrona, composição de operações e tratamento de resultados futuros.'},
  {id:'j13',cat:'prog',area:'TI',diff:'medium',q:'Singleton garante:',opts:['Múltiplas instâncias','Uma única instância','Herança múltipla','Imutabilidade'],ans:1,exp:'Singleton garante que uma classe tenha apenas uma instância e provê acesso global a ela.'},
  {id:'j14',cat:'prog',area:'TI',diff:'medium',q:'Complexidade de busca em HashMap (hash ideal):',opts:['O(n)','O(log n)','O(1)','O(n²)'],ans:2,exp:'Com função hash adequada e baixa colisão, busca em HashMap é O(1) em média.'},
  {id:'j15',cat:'prog',area:'TI',diff:'hard',  q:'@RestController no Spring combina:',opts:['@Service+@Repository','@Controller+@ResponseBody','@Component+@Autowired','@Bean+@Configuration'],ans:1,exp:'@RestController = @Controller + @ResponseBody. Retorna dados diretamente (não views).'},
  {id:'j16',cat:'prog',area:'TI',diff:'easy',  q:'Arrays em Java são:',opts:['Objetos dinâmicos','Objetos de tamanho fixo','Interfaces funcionais','Primitivos'],ans:1,exp:'Arrays têm tamanho fixo definido na criação, não podendo ser redimensionados.'},
  {id:'j17',cat:'prog',area:'TI',diff:'medium',q:'Interface Comparable define:',opts:['compare()','compareTo()','equals()','hashCode()'],ans:1,exp:'Comparable define compareTo(T other), permitindo ordenação natural de objetos.'},
  {id:'j18',cat:'prog',area:'TI',diff:'hard',  q:'Method Reference em Java 8:',opts:['Ref. a variáveis','Forma concisa de chamar método existente via lambda','Anotação de métodos','Tipo de stream'],ans:1,exp:'Method References (Classe::metodo) são formas concisas de lambdas que chamam um método existente.'},
  {id:'j19',cat:'prog',area:'TI',diff:'medium',q:'Spring Boot auto-configura com base em:',opts:['XML obrigatório','Classpath e propriedades','Anotações manuais obrigatórias','BD externo'],ans:1,exp:'Spring Boot usa auto-configuration baseada em classes no classpath e application.properties/yml.'},
  {id:'j20',cat:'prog',area:'TI',diff:'medium',q:'Em Python, lista compreensão [x*2 for x in range(5)] produz:',opts:['[0,1,2,3,4]','[0,2,4,6,8]','[2,4,6,8,10]','[1,2,3,4,5]'],ans:1,exp:'range(5) gera 0,1,2,3,4. Multiplicando por 2: 0,2,4,6,8.'},

  // SQL & DATABASE (20)
  {id:'d1',cat:'db',area:'TI',diff:'easy',  q:'Qual comando SQL cria tabela?',opts:['CREATE TABLE','INSERT TABLE','MAKE TABLE','BUILD TABLE'],ans:0,exp:'CREATE TABLE nome (colunas...) é o comando DDL para criar tabelas.'},
  {id:'d2',cat:'db',area:'TI',diff:'easy',  q:'JOIN que retorna apenas correspondências:',opts:['LEFT JOIN','RIGHT JOIN','FULL OUTER JOIN','INNER JOIN'],ans:3,exp:'INNER JOIN retorna apenas registros com correspondência nas duas tabelas.'},
  {id:'d3',cat:'db',area:'TI',diff:'medium',q:'GROUP BY é usado para:',opts:['Ordenar resultados','Agrupar linhas para funções de agregação','Filtrar grupos','Criar índices'],ans:1,exp:'GROUP BY agrupa linhas com mesmo valor para aplicar COUNT, SUM, AVG, MAX, MIN por grupo.'},
  {id:'d4',cat:'db',area:'TI',diff:'medium',q:'HAVING vs WHERE:',opts:['HAVING é mais rápido','HAVING filtra grupos após GROUP BY; WHERE filtra antes','WHERE não funciona com JOIN','HAVING usa funções de janela'],ans:1,exp:'WHERE filtra linhas antes da agregação. HAVING filtra grupos do GROUP BY.'},
  {id:'d5',cat:'db',area:'TI',diff:'hard',  q:'3FN elimina:',opts:['Dependências parciais','Dependências transitivas','Dados redundantes básicos','Chaves duplicadas'],ans:1,exp:'3ª Forma Normal elimina dependências transitivas — atributos não-chave dependem apenas da chave primária.'},
  {id:'d6',cat:'db',area:'TI',diff:'medium',q:'INDEX serve para:',opts:['Aumentar segurança','Acelerar consultas','Criar backups','Normalizar tabelas'],ans:1,exp:'Índices (geralmente B-Tree) aceleram buscas e ordenações ao custo de mais espaço e operações de escrita.'},
  {id:'d7',cat:'db',area:'TI',diff:'easy',  q:'DDL inclui:',opts:['SELECT, INSERT, UPDATE','CREATE, ALTER, DROP','GRANT, REVOKE','BEGIN, COMMIT, ROLLBACK'],ans:1,exp:'DDL define estrutura: CREATE (criar), ALTER (modificar), DROP (excluir) objetos.'},
  {id:'d8',cat:'db',area:'TI',diff:'hard',  q:'Banco NoSQL do tipo "documento":',opts:['Redis','Neo4j','MongoDB','Cassandra'],ans:2,exp:'MongoDB é banco orientado a documentos, armazenando dados em BSON (Binary JSON) com esquema flexível.'},
  {id:'d9',cat:'db',area:'TI',diff:'medium',q:'ACID: Atomicidade significa:',opts:['Dados são consistentes','Transações isoladas','Tudo ou nada','Persistência após commit'],ans:2,exp:'Atomicidade: a transação é executada por completo ou não é executada — não existe estado intermediário.'},
  {id:'d10',cat:'db',area:'TI',diff:'medium',q:'Redis é:',opts:['Banco relacional','Orientado a documentos','Chave-valor em memória','Orientado a grafo'],ans:2,exp:'Redis é banco in-memory chave-valor, extremamente rápido, usado para cache, sessões e filas.'},
  {id:'d11',cat:'db',area:'TI',diff:'easy', q:'LEFT JOIN retorna:',opts:['Apenas correspondências','Todos da direita + correspondências','Todos da esquerda + correspondências (ou NULL)','Produto cartesiano'],ans:2,exp:'LEFT JOIN retorna todos da esquerda e os correspondentes da direita. Onde não há match, preenche com NULL.'},
  {id:'d12',cat:'db',area:'TI',diff:'hard', q:'CAP Theorem: impossível ter simultaneamente:',opts:['Consistência, Disponibilidade e Tolerância a Partições','Velocidade, Segurança e Escalabilidade','CRUD completo','Backup e Recovery'],ans:0,exp:'CAP: sistema distribuído pode garantir apenas 2 de 3: Consistência (C), Disponibilidade (A) e Tolerância a Partições (P).'},
  {id:'d13',cat:'db',area:'TI',diff:'medium',q:'PRIMARY KEY deve ser:',opts:['Nula e duplicada','Única e não nula','Apenas única','Apenas não nula'],ans:1,exp:'PRIMARY KEY = UNIQUE + NOT NULL. Identifica unicamente cada linha.'},
  {id:'d14',cat:'db',area:'TI',diff:'easy', q:'SELECT DISTINCT retorna:',opts:['Ordenado','Apenas valores únicos, sem duplicatas','Colunas específicas','Filtra nulos'],ans:1,exp:'DISTINCT elimina linhas duplicadas, retornando apenas valores únicos.'},
  {id:'d15',cat:'db',area:'TI',diff:'hard', q:'Neo4j é orientado a:',opts:['Documentos','Grafos','Colunas','Chave-valor'],ans:1,exp:'Neo4j armazena dados como nós, relacionamentos e propriedades — ideal para redes sociais e recomendações.'},
  {id:'d16',cat:'db',area:'TI',diff:'medium',q:'View é:',opts:['Tabela física de alto desempenho','Consulta nomeada que age como tabela virtual','Índice especial','Tipo de trigger'],ans:1,exp:'Views são consultas SQL armazenadas que agem como tabelas virtuais, simplificando consultas complexas.'},
  {id:'d17',cat:'db',area:'TI',diff:'easy', q:'TRUNCATE TABLE:',opts:['Remove a estrutura','Remove todos os dados sem remover a estrutura','Remove apenas dados nulos','Cria backup'],ans:1,exp:'TRUNCATE remove todos os registros eficientemente sem deletar a estrutura da tabela.'},
  {id:'d18',cat:'db',area:'TI',diff:'hard', q:'Stored Procedure é:',opts:['Tipo de índice','Bloco SQL armazenado no banco, executado sob demanda','Forma de backup','Tipo de chave estrangeira'],ans:1,exp:'Stored Procedure é conjunto de instruções SQL pré-compiladas armazenadas no SGBD para reutilização.'},
  {id:'d19',cat:'db',area:'TI',diff:'medium',q:'Foreign Key garante:',opts:['Identidade única','Integridade referencial','Acelera buscas','Criptografa dados'],ans:1,exp:'FOREIGN KEY garante que os valores na coluna FK existam como PRIMARY KEY na tabela referenciada.'},
  {id:'d20',cat:'db',area:'TI',diff:'medium',q:'UNION vs JOIN:',opts:['São equivalentes','UNION combina linhas; JOIN combina colunas','JOIN combina linhas; UNION combina colunas','Ambos retornam mesmo resultado'],ans:1,exp:'UNION combina linhas de múltiplas consultas (vertical). JOIN combina colunas de tabelas (horizontal).'},

  // SECURITY (20)
  {id:'se1',cat:'sec',area:'TI',diff:'easy',  q:'SQL Injection:',opts:['Injeta JavaScript','Insere SQL malicioso em campos de entrada','Sobrecarrega servidores','Intercepta conexões'],ans:1,exp:'SQL Injection: atacante insere código SQL em campos de entrada, manipulando queries do banco.'},
  {id:'se2',cat:'sec',area:'TI',diff:'easy',  q:'HTTPS vs HTTP:',opts:['Velocidade','Criptografia via TLS/SSL','Suporte a vídeos','Autenticação biométrica'],ans:1,exp:'HTTPS = HTTP + TLS. Criptografa dados em trânsito garantindo confidencialidade e integridade.'},
  {id:'se3',cat:'sec',area:'TI',diff:'medium',q:'JWT tem quantas partes?',opts:['2','3 (header.payload.signature)','4','Formato binário'],ans:1,exp:'JWT: Header (algoritmo) + Payload (claims) + Signature (assinatura), separados por ponto.'},
  {id:'se4',cat:'sec',area:'TI',diff:'medium',q:'OAuth2 é protocolo de:',opts:['Criptografia','Autorização','Autenticação 2FA','Assinatura digital'],ans:1,exp:'OAuth2 é protocolo de autorização — permite que apps acessem recursos do usuário sem expor credenciais.'},
  {id:'se5',cat:'sec',area:'TI',diff:'hard',  q:'AES é criptografia:',opts:['Assimétrica','Simétrica','De hash','De assinatura'],ans:1,exp:'AES (Advanced Encryption Standard) é simétrica — mesma chave para criptografar e descriptografar.'},
  {id:'se6',cat:'sec',area:'TI',diff:'medium',q:'XSS consiste em:',opts:['Roubo de BD','Injeção de scripts em páginas vistas por outros usuários','Força bruta','DNS Spoofing'],ans:1,exp:'XSS injeta scripts no lado cliente em páginas web, podendo roubar cookies e sessões.'},
  {id:'se7',cat:'sec',area:'TI',diff:'easy',  q:'Hash é:',opts:['Reversível','Irreversível (one-way)','Usa chave pública','Usa chave simétrica'],ans:1,exp:'Funções de hash (SHA-256, MD5) são one-way: geram digest fixo mas não se pode recuperar dados originais.'},
  {id:'se8',cat:'sec',area:'TI',diff:'hard',  q:'RSA é:',opts:['Simétrica','Assimétrica (chave pública/privada)','De hash','De compressão'],ans:1,exp:'RSA é assimétrica: chave pública (cifrar/verificar) e chave privada (decifrar/assinar).'},
  {id:'se9',cat:'sec',area:'TI',diff:'medium',q:'CSRF mitigado principalmente com:',opts:['AES','Tokens CSRF em formulários','Firewall','Hashing de senhas'],ans:1,exp:'CSRF tokens são valores únicos incluídos em formulários, verificados pelo servidor para validar origem.'},
  {id:'se10',cat:'sec',area:'TI',diff:'medium',q:'OWASP Top 10 é:',opts:['10 melhores frameworks','10 vulnerabilidades web mais críticas','10 algoritmos de criptografia','10 ferramentas de pentest'],ans:1,exp:'OWASP Top 10 lista as vulnerabilidades de segurança web mais críticas, referência global da área.'},
  {id:'se11',cat:'sec',area:'TI',diff:'easy', q:'2FA combina:',opts:['Dois passwords','Algo que você sabe + algo que você tem/é','Dois tokens físicos','Biometria dupla'],ans:1,exp:'2FA combina dois fatores: saber (senha), ter (celular/token) ou ser (biometria).'},
  {id:'se12',cat:'sec',area:'TI',diff:'hard', q:'TLS Handshake:',opts:['Cria BD','Negocia algoritmos e troca chaves para conexão segura','Comprime dados','Autentica usuários'],ans:1,exp:'TLS Handshake negocia versão, algoritmos, autentica servidor e estabelece chaves de sessão.'},
  {id:'se13',cat:'sec',area:'TI',diff:'medium',q:'Least Privilege:',opts:['Máximo de permissões','Apenas permissões mínimas necessárias','Remover todas permissões','Compartilhar contas'],ans:1,exp:'Princípio de menor privilégio: concede apenas as permissões mínimas necessárias para cada função.'},
  {id:'se14',cat:'sec',area:'TI',diff:'easy', q:'Brute Force testa:',opts:['Phishing','Man-in-the-Middle','Todas combinações possíveis','SQL'],ans:2,exp:'Ataque de força bruta testa sistematicamente todas as combinações de senhas até encontrar a correta.'},
  {id:'se15',cat:'sec',area:'TI',diff:'hard', q:'Certificado X.509 contém:',opts:['Apenas chave privada','Chave pública + identidade + assinatura da CA','Hash da senha','Token de sessão'],ans:1,exp:'X.509: chave pública do titular, informações de identidade e assinatura da Autoridade Certificadora.'},
  {id:'se16',cat:'sec',area:'TI',diff:'medium',q:'Pentest é:',opts:['Teste de performance','Ataque simulado autorizado para identificar vulnerabilidades','Teste de código','Análise de logs'],ans:1,exp:'Pentest é teste de invasão ético e autorizado para identificar e documentar vulnerabilidades.'},
  {id:'se17',cat:'sec',area:'TI',diff:'easy', q:'Firewall:',opts:['Acelera downloads','Controla e filtra tráfego de rede','Criptografa arquivos','Gerencia senhas'],ans:1,exp:'Firewall monitora e controla tráfego baseado em regras de segurança, filtrando pacotes indesejados.'},
  {id:'se18',cat:'sec',area:'TI',diff:'hard', q:'HMAC combina:',opts:['Dois hashes','Função hash + chave secreta','RSA + AES','Chave pública + hash'],ans:1,exp:'HMAC: função hash criptográfica + chave secreta compartilhada, garantindo integridade e autenticidade.'},
  {id:'se19',cat:'sec',area:'TI',diff:'medium',q:'SSH é usado para:',opts:['Navegar na internet','Acesso remoto seguro via terminal','E-mails criptografados','FTP'],ans:1,exp:'SSH (Secure Shell) fornece acesso remoto seguro a servidores usando criptografia.'},
  {id:'se20',cat:'sec',area:'TI',diff:'medium',q:'ISO 27001 trata de:',opts:['Desenvolvimento ágil','Sistema de Gestão de Segurança da Informação (SGSI)','Cloud computing','Machine learning'],ans:1,exp:'ISO 27001 é a norma internacional para SGSI (Sistema de Gestão de Segurança da Informação).'},

  // AI & DATA (20)
  {id:'a1',cat:'ai',area:'TI',diff:'easy',  q:'ML é subárea de:',opts:['Banco de Dados','Inteligência Artificial','Redes de Computadores','Segurança'],ans:1,exp:'Machine Learning é subárea da IA que permite sistemas aprenderem a partir de dados.'},
  {id:'a2',cat:'ai',area:'TI',diff:'easy',  q:'Pandas em Python serve para:',opts:['Visualização','Manipulação e análise de dados estruturados','Redes neurais','SQL'],ans:1,exp:'Pandas oferece DataFrame e Series para manipulação e análise de dados estruturados.'},
  {id:'a3',cat:'ai',area:'TI',diff:'medium',q:'ETL = Extract, Transform, ___',opts:['Test','Load','Link','Learn'],ans:1,exp:'ETL: Extrai dados de fontes, Transforma e carrega em destino (DW, Data Lake).'},
  {id:'a4',cat:'ai',area:'TI',diff:'medium',q:'Overfitting ocorre quando:',opts:['Desempenho ruim em treino e teste','Ótimo em treino, ruim em dados novos','Modelo muito simples','Dataset muito grande'],ans:1,exp:'Overfitting: modelo memoriza o treino em vez de generalizar — alta acurácia em treino, baixa em teste.'},
  {id:'a5',cat:'ai',area:'TI',diff:'hard',  q:'Gradient Descent:',opts:['Aumenta erro iterativamente','Minimiza função de custo ajustando na direção do gradiente negativo','Maximiza acurácia diretamente','Elimina overfitting'],ans:1,exp:'Gradient Descent atualiza parâmetros na direção oposta ao gradiente da função de perda, convergindo para mínimo.'},
  {id:'a6',cat:'ai',area:'TI',diff:'medium',q:'NLP trata de:',opts:['Imagens','Linguagem humana','Robótica','Jogos'],ans:1,exp:'NLP (Natural Language Processing) trata de texto e fala — chatbots, tradução, análise de sentimento.'},
  {id:'a7',cat:'ai',area:'TI',diff:'easy',  q:'NumPy serve para:',opts:['Web scraping','Arrays N-dimensionais e operações matemáticas','APIs','Banco de dados'],ans:1,exp:'NumPy fornece arrays eficientes e operações matemáticas de alto desempenho — base do ecossistema científico Python.'},
  {id:'a8',cat:'ai',area:'TI',diff:'hard',  q:'Dropout em redes neurais:',opts:['Comprime o modelo','Desativa neurônios aleatoriamente durante treino para evitar overfitting','Aumenta o learning rate','Muda a função de ativação'],ans:1,exp:'Dropout desativa aleatoriamente uma fração dos neurônios no treino, forçando representações mais robustas.'},
  {id:'a9',cat:'ai',area:'TI',diff:'medium',q:'Apache Spark:',opts:['API REST','Processamento distribuído de Big Data em memória','Banco NoSQL','Servidor Java'],ans:1,exp:'Apache Spark é framework distribuído em memória para Big Data, muito mais rápido que Hadoop MapReduce.'},
  {id:'a10',cat:'ai',area:'TI',diff:'easy', q:'Data Lake vs DW — Data Lake:',opts:['Mais estruturado','Armazena dados brutos em qualquer formato','Usa apenas SQL','É menor'],ans:1,exp:'Data Lake armazena dados brutos em formato nativo (estruturado, JSON, imagens, logs) sem transformação prévia.'},
  {id:'a11',cat:'ai',area:'TI',diff:'medium',q:'K-Means é algoritmo de:',opts:['Classificação supervisionada','Regressão','Clustering não supervisionado','Reforço'],ans:2,exp:'K-Means agrupa dados em K clusters baseado na distância aos centroides — aprendizado não supervisionado.'},
  {id:'a12',cat:'ai',area:'TI',diff:'easy', q:'Aprendizado supervisionado usa:',opts:['Dados sem rótulos','Dados rotulados (input + output esperado)','Apenas recompensas','Dados em tempo real'],ans:1,exp:'Aprendizado supervisionado treina com exemplos rotulados (mapeamento entrada → saída conhecida).'},
  {id:'a13',cat:'ai',area:'TI',diff:'hard', q:'Transfer Learning:',opts:['Treina do zero sempre','Usa pesos pré-treinados como ponto de partida','Transfere dados entre servidores','Compartilha modelos'],ans:1,exp:'Transfer Learning reutiliza representações de um modelo pré-treinado para acelerar treinamento em nova tarefa.'},
  {id:'a14',cat:'ai',area:'TI',diff:'medium',q:'Cross-validation serve para:',opts:['Acelerar treino','Avaliar generalização usando múltiplas divisões dos dados','Criar visualizações','Normalizar dados'],ans:1,exp:'Cross-validation divide dados em K folds, treinando e testando K vezes — estimativa robusta da performance.'},
  {id:'a15',cat:'ai',area:'TI',diff:'medium',q:'Big Data — 5 Vs:',opts:['Volume, Velocidade, Variedade, Veracidade, Valor','Volume, Visibilidade, Validade, Velocidade, Virulência','5 maiores bancos de dados','Dados de 5 provedores'],ans:0,exp:'5 Vs: Volume (quantidade), Velocidade (geração rápida), Variedade (formatos), Veracidade (qualidade), Valor.'},
  {id:'a16',cat:'ai',area:'TI',diff:'hard', q:'Rede neural convolucional (CNN) é usada para:',opts:['Análise de séries temporais financeiras','Processamento de imagens e vídeos','Processamento de linguagem natural','Sistemas de recomendação'],ans:1,exp:'CNNs são especializadas em dados espaciais como imagens, usando filtros convolucionais para detectar padrões visuais.'},
  {id:'a17',cat:'ai',area:'TI',diff:'easy', q:'Matplotlib é usado para:',opts:['Machine Learning','Visualização de dados e gráficos','NLP','Web scraping'],ans:1,exp:'Matplotlib cria gráficos 2D e 3D de alta qualidade — a biblioteca de visualização base do Python.'},
  {id:'a18',cat:'ai',area:'TI',diff:'medium',q:'Data Warehouse é otimizado para:',opts:['Inserções rápidas','Análise OLAP de grande volume','Transações ACID','Alta disponibilidade'],ans:1,exp:'DW é otimizado para OLAP (análise histórica). Bancos transacionais são OLTP (operações rápidas do dia a dia).'},
  {id:'a19',cat:'ai',area:'TI',diff:'hard', q:'LSTM é uma variante de:',opts:['CNN','RNN (Redes Neurais Recorrentes)','SVM','Regressão Logística'],ans:1,exp:'LSTM (Long Short-Term Memory) é variante de RNN projetada para aprender dependências de longo prazo em sequências.'},
  {id:'a20',cat:'ai',area:'TI',diff:'medium',q:'Hadoop usa paradigma de:',opts:['Stream Processing','MapReduce','OLAP','Actor Model'],ans:1,exp:'Hadoop usa MapReduce: Map (filtra/processa) → Shuffle (agrupa) → Reduce (agrega) em clusters distribuídos.'},

  // PORTUGUÊS (20)
  {id:'pt1',cat:'pt-gram',area:'PT',diff:'easy',  q:'Identifique a alternativa com erro de concordância verbal:',opts:['"Os alunos estudaram muito"','"A maioria dos candidatos foram aprovados"','"Todos chegaram no horário"','"Nós partiremos amanhã"'],ans:1,exp:'"A maioria" é núcleo do sujeito (singular). O verbo deve concordar: "A maioria dos candidatos foi aprovada".'},
  {id:'pt2',cat:'pt-gram',area:'PT',diff:'medium',q:'Em "Aspirar ao cargo", o verbo aspirar é:',opts:['Transitivo direto','Intransitivo','Transitivo indireto','De ligação'],ans:2,exp:'Aspirar (desejar, almejar) é transitivo indireto, exigindo a preposição "a": aspirar AO cargo.'},
  {id:'pt3',cat:'pt-crase',area:'PT',diff:'medium',q:'"Enviamos o relatório __ Diretoria." O uso da crase é:',opts:['Facultativo','Obrigatório','Proibido','Opcional apenas no formal'],ans:1,exp:'Crase obrigatória: preposição "a" + artigo "a" antes de substantivo feminino determinado: "à Diretoria".'},
  {id:'pt4',cat:'pt-sint',area:'PT',diff:'hard',  q:'Em "O sistema foi atualizado pelos técnicos", o sujeito é:',opts:['Os técnicos','O sistema','Pelos técnicos','Foi atualizado'],ans:1,exp:'"O sistema" é o sujeito paciente da oração na voz passiva. "Pelos técnicos" é agente da passiva.'},
  {id:'pt5',cat:'pt-interp',area:'PT',diff:'easy', q:'Inferência textual significa:',opts:['Copiar o texto literal','Concluir informação não explícita mas implícita no texto','Resumir o texto','Parafrasear literalmente'],ans:1,exp:'Inferência: extrair informação que está implícita — não dita diretamente mas subentendida pelo contexto.'},
  {id:'pt6',cat:'pt-pron',area:'PT',diff:'medium',q:'"Traga-me o documento." Há possibilidade de próclise quando:',opts:['Nunca','Início absoluto de frase','Após palavra atrativa como "não"','Quando o verbo está no imperativo afirmativo'],ans:2,exp:'Palavras atrativas (não, nunca, ninguém, pronomes relativos, interrogativos) exigem próclise: "Não me traga...".'},
  {id:'pt7',cat:'pt-pont',area:'PT',diff:'easy',   q:'A vírgula é obrigatória para separar:',opts:['Sujeito do predicado','Vocativo do restante da frase','Verbo do objeto direto','Artigo do substantivo'],ans:1,exp:'O vocativo — elemento de chamamento — é sempre separado por vírgulas: "João, venha aqui."'},
  {id:'pt8',cat:'pt-gram',area:'PT',diff:'hard',   q:'A forma verbal que indica ação anterior a outra no passado é:',opts:['Pretérito imperfeito','Pretérito perfeito','Pretérito mais-que-perfeito','Futuro do pretérito'],ans:2,exp:'Pretérito mais-que-perfeito indica ação que ocorreu antes de outra já passada: "Quando cheguei, ele havia saído."'},
  {id:'pt9',cat:'pt-sem',area:'PT',diff:'medium',  q:'Coesão textual é garantida por:',opts:['Uso de palavras difíceis','Conectivos, pronomes e repetição controlada de termos','Parágrafos longos','Ausência de pontuação'],ans:1,exp:'Coesão é a articulação formal do texto através de conectivos, pronomes e recursos de referência.'},
  {id:'pt10',cat:'pt-conc',area:'PT',diff:'medium',q:'"Vende-se apartamentos" está:',opts:['Correto — sujeito indeterminado','Errado — deveria ser "Vendem-se apartamentos"','Correto sempre','Errado — deveria ser "Vende-se apartamento"'],ans:1,exp:'Com sujeito posposto determinado: o verbo concorda — "Vendem-se apartamentos" (apartamentos é o sujeito).'},
  {id:'pt11',cat:'pt-reg',area:'PT',diff:'hard',   q:'"O banco informou os clientes __ nova política." Regência correta:',opts:['de','sobre','para','com'],ans:1,exp:'"Informar alguém SOBRE algo" é a regência correta quando há dois complementos. "Informou os clientes sobre a nova política."'},
  {id:'pt12',cat:'pt-interp',area:'PT',diff:'easy', q:'O título mais adequado para um texto que discute impactos da IA no mercado de trabalho seria:',opts:['"Computadores Modernos"','"Inteligência Artificial: Transformações no Mundo do Trabalho"','"Tecnologia em Geral"','"Mercado Financeiro"'],ans:1,exp:'O título deve refletir o assunto central do texto — IA e seus impactos no mercado de trabalho.'},
  {id:'pt13',cat:'pt-gram',area:'PT',diff:'medium',q:'"Pouco importa os resultados." A concordância:',opts:['Está correta','Está errada — deveria ser "importam"','É facultativa','Depende do contexto'],ans:1,exp:'Com advérbio "pouco" funcionando como sujeito, o verbo concorda no singular: "Pouco importa..."  Mas quando o sujeito é "os resultados", o correto seria "importam".'},
  {id:'pt14',cat:'pt-crase',area:'PT',diff:'easy',  q:'Há crase em: "Chegou __ pé?"',opts:['Sim, obrigatória','Não, preposição antes de masculino','Facultativa','Sim, pois é locução'],ans:1,exp:'Não há crase antes de palavras masculinas: "a pé" = preposição apenas.'},
  {id:'pt15',cat:'pt-sint',area:'PT',diff:'medium', q:'"Os resultados que apresentamos superaram as expectativas." O pronome relativo "que" retoma:',opts:['Expectativas','Os resultados','Apresentamos','Superaram'],ans:1,exp:'O pronome relativo "que" substitui seu antecedente "os resultados".'},
  {id:'pt16',cat:'pt-gram',area:'PT',diff:'hard',   q:'Qual alternativa apresenta erro no uso do acento?',opts:['pôde (pretérito)','pode (presente)','côr (substantivo)','avô (parente)'],ans:2,exp:'Com o Acordo Ortográfico de 1990, "cor" (substantivo) perdeu o acento circunflexo. A forma correta é "cor".'},
  {id:'pt17',cat:'pt-pont',area:'PT',diff:'medium', q:'O ponto e vírgula é usado corretamente para:',opts:['Separar itens de uma lista complexa ou orações longas coordenadas','Indicar supressão','Separar sujeito do verbo','Introduzir explicação'],ans:0,exp:'Ponto e vírgula separa itens de enumerações complexas e orações coordenadas longas que já contêm vírgulas.'},
  {id:'pt18',cat:'pt-sem',area:'PT',diff:'medium',  q:'"Sua apresentação foi brilhante" usa a linguagem:',opts:['Denotativa','Conotativa','Técnica','Formal obrigatória'],ans:1,exp:'Uso conotativo (metafórico/figurado): "brilhante" aqui significa excelente, não que emite luz literalmente.'},
  {id:'pt19',cat:'pt-pron',area:'PT',diff:'easy',   q:'"Entre eu e você" ou "Entre mim e você"?',opts:['"Entre eu e você"','Ambas corretas','Depende do verbo','"Entre mim e você"'],ans:3,exp:'Após preposição (entre, para, por, de...) usam-se pronomes oblíquos tônicos: mim, ti, si. "Entre mim e você."'},
  {id:'pt20',cat:'pt-interp',area:'PT',diff:'hard', q:'Qual figura de linguagem está em "O silêncio gritou verdades"?',opts:['Metonímia','Antítese','Personificação / Prosopopeia','Metáfora simples'],ans:2,exp:'Personificação/Prosopopeia: atribuição de ações ou qualidades humanas a seres inanimados — o silêncio "gritou".'},

  // ENGLISH (20)
  {id:'en1',cat:'en-tense',area:'EN',diff:'easy',  q:'Choose the correct sentence:',opts:['She don\'t know the answer','She doesn\'t knows','She doesn\'t know','She not know'],ans:2,exp:'Third person singular in Simple Present: subject + doesn\'t + infinitive (without "to").'},
  {id:'en2',cat:'en-vocab',area:'EN',diff:'easy',  q:'In IT, "deploy" means:',opts:['Delete code','Release software to production/users','Design a database','Debug an application'],ans:1,exp:'"Deploy" means to release/install software so it is available for use in a target environment.'},
  {id:'en3',cat:'en-comp',area:'EN',diff:'medium', q:'The main purpose of a README file in a GitHub repository is to:',opts:['Store credentials','Provide documentation and instructions for the project','List bugs','Track commits'],ans:1,exp:'README files provide essential documentation: project description, setup instructions, usage examples, and contribution guidelines.'},
  {id:'en4',cat:'en-modal',area:'EN',diff:'medium',q:'"You ___ backup your data regularly." (obligation/advice)',opts:['might','should','could','would'],ans:1,exp:'"Should" expresses advice/recommendation. "Must" expresses stronger obligation. Both fit, but "should" is the natural choice here.'},
  {id:'en5',cat:'en-cond',area:'EN',diff:'hard',   q:'"If I had studied more, I ___ passed the exam." (past regret)',opts:['would pass','will have passed','would have passed','had passed'],ans:2,exp:'Third conditional: If + past perfect, would have + past participle. Used for past hypotheticals and regrets.'},
  {id:'en6',cat:'en-pass',area:'EN',diff:'medium', q:'Active: "The team updates the system daily." Passive:',opts:['The system was updated by the team','The system is updated by the team daily','The system will be updated','The team is updating the system'],ans:1,exp:'Present simple passive: subject + is/are + past participle. "The system is updated by the team daily."'},
  {id:'en7',cat:'en-vocab',area:'EN',diff:'easy',  q:'What does "API" stand for?',opts:['Application Process Integration','Application Programming Interface','Automated Protocol Interaction','Advanced Programming Implementation'],ans:1,exp:'API = Application Programming Interface. It defines rules for software components to communicate with each other.'},
  {id:'en8',cat:'en-phr',area:'EN',diff:'medium',  q:'"The server broke ___." (stopped working)',opts:['up','down','out','off'],ans:1,exp:'"Break down" = stop functioning. "The server broke down" means the server stopped working.'},
  {id:'en9',cat:'en-conn',area:'EN',diff:'medium', q:'Choose the correct connector: "The system is fast; ___, it lacks security features."',opts:['therefore','moreover','however','because'],ans:2,exp:'"However" introduces contrast between two ideas. The system is fast BUT it lacks security — contrast.'},
  {id:'en10',cat:'en-comp',area:'EN',diff:'hard',  q:'In technical documentation, "deprecated" means:',opts:['A critical bug','A feature that is outdated and will be removed in future versions','An error in code','A security vulnerability'],ans:1,exp:'"Deprecated" means a feature is still available but discouraged because it will be removed in a future version.'},
  {id:'en11',cat:'en-tense',area:'EN',diff:'medium',q:'"I ___ working here since 2020." (continuing action)',opts:['am','have been','was','had been'],ans:1,exp:'Present Perfect Continuous: have/has + been + -ing. Used for actions that started in the past and continue now.'},
  {id:'en12',cat:'en-vocab',area:'EN',diff:'easy', q:'"Scalability" in software means:',opts:['Security level','Ability to handle growing loads','Speed of development','Type of database'],ans:1,exp:'Scalability is the ability of a system to handle increasing workloads by adding resources (scale up or scale out).'},
  {id:'en13',cat:'en-modal',area:'EN',diff:'hard',  q:'"The application ___ crash — check the logs." (deduction)',opts:['can','must','should','would'],ans:1,exp:'"Must" expresses logical deduction/certainty about the present. "It must have crashed" = I\'m certain it crashed.'},
  {id:'en14',cat:'en-cond',area:'EN',diff:'medium', q:'"If you run this command, it ___ install the package." (factual)',opts:['would install','will install','installed','had installed'],ans:1,exp:'First conditional: If + present simple, will + infinitive. For real, likely future situations.'},
  {id:'en15',cat:'en-conn',area:'EN',diff:'easy',   q:'"The feature was requested by users. ___, it was implemented." (result)',opts:['However','Although','Therefore','Despite'],ans:2,exp:'"Therefore" (thus/as a result) introduces a consequence or result of the previous statement.'},
  {id:'en16',cat:'en-phr',area:'EN',diff:'medium',  q:'"Please ___ the issue to the project manager." (report/escalate)',opts:['look up','bring up','set up','put off'],ans:1,exp:'"Bring up" means to mention or raise a topic/issue in a conversation or meeting.'},
  {id:'en17',cat:'en-pass',area:'EN',diff:'hard',   q:'"The bug ___ by the time you read this." (future completion)',opts:['will fix','will be fixing','will have been fixed','was fixed'],ans:2,exp:'Future Perfect Passive: will + have + been + past participle. Completed action at a future point.'},
  {id:'en18',cat:'en-comp',area:'EN',diff:'medium', q:'"Latency" in networks refers to:',opts:['Maximum bandwidth','Delay between sending and receiving data','Number of servers','Type of encryption'],ans:1,exp:'Latency is the delay (usually in milliseconds) between a request being sent and a response being received.'},
  {id:'en19',cat:'en-tense',area:'EN',diff:'easy',  q:'Which sentence uses Past Perfect correctly?',opts:['"I had finished when she arrived"','"I finished when she had arrive"','"I was finished when she has arrived"','"I finish when she arrived"'],ans:0,exp:'Past Perfect (had + past participle) expresses an action completed before another past event: "I had finished BEFORE she arrived."'},
  {id:'en20',cat:'en-vocab',area:'EN',diff:'hard',  q:'In Agile, "velocity" measures:',opts:['Server speed','Amount of work a team completes per sprint','Code quality','Number of bugs'],ans:1,exp:'Velocity measures how many story points (or work units) a team completes in a sprint — used for planning future sprints.'},

  // MATHEMATICS (20)
  {id:'m1',cat:'mat-arith',area:'MAT',diff:'easy',  q:'25% de 400 é:',opts:['25','75','100','125'],ans:2,exp:'25% = 25/100 = 1/4. 400 × 0,25 = 100.'},
  {id:'m2',cat:'mat-fin',area:'MAT',diff:'medium',  q:'Juros simples de R$1.000 a 2% ao mês por 6 meses:',opts:['R$20','R$120','R$60','R$200'],ans:1,exp:'J = C × i × t = 1000 × 0,02 × 6 = R$120.'},
  {id:'m3',cat:'mat-fin',area:'MAT',diff:'hard',    q:'Capital de R$2.000 a juros compostos de 10% ao mês por 2 meses. Montante:',opts:['R$2.400','R$2.420','R$2.200','R$2.450'],ans:1,exp:'M = C × (1+i)ⁿ = 2000 × (1,1)² = 2000 × 1,21 = R$2.420.'},
  {id:'m4',cat:'mat-logic',area:'MAT',diff:'medium',q:'Se "Todo banqueiro é estudioso" e "João é banqueiro", então:',opts:['João pode ser estudioso','João é estudioso','João não é estudioso','Não é possível concluir'],ans:1,exp:'Silogismo válido: Se todo A é B, e João é A, então João é B. João é banqueiro e banqueiro é estudioso, logo João é estudioso.'},
  {id:'m5',cat:'mat-comb',area:'MAT',diff:'medium', q:'De 4 candidatos para 2 vagas, quantas formas de escolha (sem ordem)?',opts:['12','6','8','24'],ans:1,exp:'Combinação C(4,2) = 4!/(2!×2!) = 6 formas.'},
  {id:'m6',cat:'mat-arith',area:'MAT',diff:'easy',  q:'Razão entre 15 e 60:',opts:['1/3','1/4','4/1','3/1'],ans:1,exp:'Razão = 15/60 = 1/4.'},
  {id:'m7',cat:'mat-fin',area:'MAT',diff:'medium',  q:'Uma peça custa R$80 após 20% de desconto. Preço original:',opts:['R$96','R$100','R$88','R$104'],ans:1,exp:'80 = x × 0,8 → x = 80/0,8 = R$100.'},
  {id:'m8',cat:'mat-logic',area:'MAT',diff:'hard',  q:'Negação de "Todo sistema é seguro":',opts:['"Nenhum sistema é seguro"','"Algum sistema não é seguro"','"Todos os sistemas são inseguros"','"Alguns sistemas são seguros"'],ans:1,exp:'Negação de "Todo A é B" é "Algum A não é B" (existe pelo menos um que não satisfaz a propriedade).'},
  {id:'m9',cat:'mat-regra',area:'MAT',diff:'easy',  q:'Se 3 máquinas produzem 30 peças em 5h, 6 máquinas produzem 30 peças em:',opts:['10h','2,5h','5h','1h'],ans:1,exp:'Grandezas inversamente proporcionais: 3m×5h = 6m×x → x = 15/6 = 2,5h.'},
  {id:'m10',cat:'mat-func',area:'MAT',diff:'medium',q:'Raízes de x²−5x+6=0:',opts:['2 e 4','1 e 6','2 e 3','3 e 4'],ans:2,exp:'Bhaskara ou Fatoração: (x−2)(x−3)=0 → x=2 ou x=3.'},
  {id:'m11',cat:'mat-conj',area:'MAT',diff:'easy',  q:'A={1,2,3}, B={2,3,4}. A∩B=?',opts:['{1,2,3,4}','{2,3}','{1,4}','{1,2,3,4,5}'],ans:1,exp:'Interseção = elementos comuns: {2,3}.'},
  {id:'m12',cat:'mat-arith',area:'MAT',diff:'medium',q:'Um produto foi de R$200 para R$250. Aumento percentual:',opts:['20%','25%','50%','30%'],ans:1,exp:'Aumento = 50/200 = 0,25 = 25%.'},
  {id:'m13',cat:'mat-fin',area:'MAT',diff:'hard',   q:'Taxa equivalente mensal a 120% ao ano (juros compostos):',opts:['10%','6,9%','~6,9%','~7,2%'],ans:2,exp:'(1+i_a) = (1+i_m)^12 → (2,2) = (1+i)^12 → i = 2,2^(1/12)−1 ≈ 6,9% ao mês.'},
  {id:'m14',cat:'mat-stat',area:'MAT',diff:'easy',  q:'Média de {10,20,30,40}:',opts:['20','25','30','35'],ans:1,exp:'Soma=100, n=4. Média=100/4=25.'},
  {id:'m15',cat:'mat-logic',area:'MAT',diff:'medium',q:'"P → Q" é equivalente a:',opts:['Q → P','~P → ~Q','~Q → ~P','P ∧ Q'],ans:2,exp:'Contrapositiva de "P → Q" é "~Q → ~P" — logicamente equivalente.'},
  {id:'m16',cat:'mat-comb',area:'MAT',diff:'hard',  q:'Anagramas da palavra "JAVA":',opts:['6','12','24','4'],ans:1,exp:'JAVA tem 4 letras com A repetido 2 vezes: 4!/2! = 24/2 = 12 anagramas.'},
  {id:'m17',cat:'mat-func',area:'MAT',diff:'medium',q:'f(x)=2x+1. f(3)=?',opts:['5','7','6','8'],ans:1,exp:'f(3) = 2(3)+1 = 6+1 = 7.'},
  {id:'m18',cat:'mat-regra',area:'MAT',diff:'easy', q:'Se 1 programador faz 1 sistema em 10 dias, 5 programadores fazem em:',opts:['50 dias','2 dias','5 dias','10 dias'],ans:1,exp:'Grandezas inversamente proporcionais: 1×10 = 5×x → x=2 dias.'},
  {id:'m19',cat:'mat-arith',area:'MAT',diff:'medium',q:'MMC de 12 e 18:',opts:['6','36','72','24'],ans:1,exp:'12=2²×3; 18=2×3². MMC=2²×3²=36.'},
  {id:'m20',cat:'mat-stat',area:'MAT',diff:'hard',  q:'Desvio padrão de {4,4,4,4}:',opts:['0','1','2','4'],ans:0,exp:'Todos valores iguais à média=4. Variância=0. Desvio padrão=0.'},
];

/* ─── WEEKLY REWARDS ─── */
const WEEKLY_REWARDS=[
  {week:1,title:'Semana 1 Completa',reward:'🎬 Assista um filme que você quer ver há tempo',icon:'🎬'},
  {week:2,title:'Semana 2 Completa',reward:'🍔 Peça a comida favorita — você ganhou!',icon:'🍔'},
  {week:3,title:'Semana 3 Completa',reward:'🎁 Compre um pequeno presente para você',icon:'🎁'},
  {week:4,title:'Semana 4 Completa',reward:'😴 Tire um dia de lazer total — você merece',icon:'😴'},
  {week:5,title:'Mês Completo! 🏆',reward:'🥇 Badge "Campeão Mensal" — compartilhe no LinkedIn!',icon:'🥇'},
];

/* ─── ACHIEVEMENTS ─── */
const ACHIEVEMENTS=[
  {id:'first-topic', icon:'✅',name:'Primeiro Passo',    desc:'Marque o primeiro tópico',          check:s=>s.topicsDone>=1},
  {id:'ten-topics',  icon:'📚',name:'Estudante Dedicado',desc:'10 tópicos concluídos',              check:s=>s.topicsDone>=10},
  {id:'fifty-topics',icon:'🎓',name:'Meio Caminho',      desc:'50 tópicos concluídos',              check:s=>s.topicsDone>=50},
  {id:'week7',       icon:'📅',name:'7 Dias Seguidos',   desc:'7 dias consecutivos de estudo',      check:s=>s.streak>=7},
  {id:'week14',      icon:'🔥',name:'Em Chamas',         desc:'14 dias consecutivos',               check:s=>s.streak>=14},
  {id:'pomo5',       icon:'🍅',name:'Focado',            desc:'5 sessões Pomodoro',                 check:s=>s.pomodoros>=5},
  {id:'pomo25',      icon:'⏱️',name:'Máquina de Foco',  desc:'25 sessões Pomodoro',                check:s=>s.pomodoros>=25},
  {id:'lv5',         icon:'⚙️',name:'Engineer',         desc:'Level 5 atingido',                   check:s=>s.level>=5},
  {id:'lv10',        icon:'🏆',name:'BB·TI Ready',       desc:'Level máximo!',                      check:s=>s.level>=10},
  {id:'sim80',       icon:'🎯',name:'Aprovado!',         desc:'Simulado com 80%+ de acerto',        check:s=>s.bestScore>=80},
  {id:'xp1000',      icon:'⚡',name:'Mil XP',           desc:'Acumule 1.000 XP',                   check:s=>s.totalXP>=1000},
  {id:'banking100',  icon:'🏦',name:'Banqueiro',         desc:'100% em Banking',                    check:s=>(s.subPct['banking']||0)>=100},
  {id:'essay3',      icon:'✍️',name:'Escritor',         desc:'3 redações completadas',             check:s=>s.essays>=3},
  {id:'quiz50',      icon:'❓',name:'Quiz Master',       desc:'50 questões respondidas',            check:s=>s.questionsAnswered>=50},
  {id:'pt100',       icon:'🇧🇷',name:'Gramático',       desc:'100% em Português',                  check:s=>(s.subPct['pt-gram']||0)>=100},
  {id:'en100',       icon:'🇬🇧',name:'English Speaker', desc:'100% em English',                    check:s=>(s.subPct['en-vocab']||0)>=100},
];

/* ─── ESSAY TOPICS ─── */
const ESSAY_TOPICS=[
  {level:'beginner',   topic:'O papel dos bancos no desenvolvimento econômico brasileiro',hint:'Aborde crédito, investimentos e inclusão financeira'},
  {level:'beginner',   topic:'Segurança digital e proteção de dados pessoais',hint:'Discuta LGPD, responsabilidade das empresas e hábitos dos usuários'},
  {level:'beginner',   topic:'Tecnologia e acesso à educação',hint:'Explore democratização do ensino via plataformas digitais'},
  {level:'intermediate',topic:'Inteligência Artificial e o futuro do trabalho bancário',hint:'Analise automação, novos perfis profissionais e adaptação'},
  {level:'intermediate',topic:'Transformação digital no setor financeiro',hint:'PIX, Open Finance, fintechs vs bancos tradicionais'},
  {level:'intermediate',topic:'Cibersegurança como pilar da confiança institucional',hint:'Ataques a bancos, proteção de dados, regulamentação'},
  {level:'intermediate',topic:'Inclusão financeira e o papel da tecnologia',hint:'Bancarização, PIX, contas digitais para populações desassistidas'},
  {level:'advanced',   topic:'Big Data e tomada de decisões no sistema bancário',hint:'Análise de dados, personalização de produtos, riscos de privacidade'},
  {level:'advanced',   topic:'Cloud Computing e a modernização da infraestrutura bancária',hint:'Migração para nuvem, riscos regulatórios, disponibilidade'},
  {level:'advanced',   topic:'Open Finance: oportunidades e riscos do compartilhamento de dados financeiros',hint:'Consentimento, competição, inovação e LGPD'},
  {level:'advanced',   topic:'Sustentabilidade e ESG no setor bancário tecnológico',hint:'Critérios ambientais e sociais na concessão de crédito e operações'},
  {level:'beginner',   topic:'O que é o Banco do Brasil e seu papel na sociedade',hint:'História, missão pública, desenvolvimento regional'},
  {level:'intermediate',topic:'Governança Digital: desafios do governo eletrônico no Brasil',hint:'Serviços públicos digitais, transparência, exclusão digital'},
];

/* ─── ESSAY TIPS ─── */
const ESSAY_TIPS=[
  {icon:'✍️',title:'Domine a Estrutura',body:'Toda redação de concurso deve ter: Introdução (apresente o tema e tese), Desenvolvimento 1 (argumento + exemplo), Desenvolvimento 2 (argumento + reforço), Conclusão (síntese + proposta). Nunca entregue sem todos os quatro parágrafos.'},
  {icon:'🎯',title:'Construa uma Tese Forte',body:'A tese é a posição que você vai defender. Deve aparecer na introdução e ser sustentada em todo o texto. Evite teses vagas como "a tecnologia tem prós e contras". Prefira: "A democratização do acesso digital é condição essencial para a inclusão financeira plena".'},
  {icon:'🔗',title:'Use Conectivos Estratégicos',body:'Conectivos garantem coesão: Contudo, No entanto, Todavia (contraste); Portanto, Assim, Logo (conclusão); Além disso, Ademais (adição); Visto que, Pois, Porque (causalidade). Use um conectivo diferente em cada parágrafo.'},
  {icon:'📚',title:'Argumente com Dados',body:'Bancas valorizam argumentos fundamentados. Use dados reais, exemplos concretos, referências ao contexto brasileiro. Evite argumentos genéricos. Ex: "O PIX movimentou mais de R$15 trilhões em 2023, demonstrando..."'},
  {icon:'⏰',title:'Gerencie o Tempo',body:'Na prova: 5 min para planejar, 10 para intro, 15 para dev1, 15 para dev2, 10 para conclusão, 5 para revisão. Total: 60 min. Nunca escreva na folha definitiva sem planejar antes.'},
  {icon:'❌',title:'Erros que Reduzem Nota',body:'1) Fuga ao tema (nota zero em muitas bancas). 2) Parágrafo único sem estrutura. 3) Uso de gírias ou linguagem informal. 4) Erros graves de concordância ou crase. 5) Conclusão que repete apenas a introdução sem proposta. 6) Texto muito curto (menos de 20 linhas).'},
  {icon:'🏆',title:'Estratégia dos Candidatos Top',body:'Os melhores candidatos: (1) leem questões de provas anteriores para identificar padrões temáticos; (2) mantêm caderno com dados e exemplos por área; (3) praticam pelo menos 2 redações por semana; (4) pedem feedback de professores; (5) cronometram cada redação como se fosse prova.'},
  {icon:'💡',title:'Proposta de Intervenção (Conclusão)',body:'Na conclusão, apresente uma proposta concreta: "Portanto, faz-se necessário que [agente responsável] [ação específica] mediante [instrumento], com vistas a [objetivo]." Seja específico: cite o Banco do Brasil, o governo, legislação, tecnologia como instrumentos.'},
];

/* ─── RESOURCES ─── */
const RESOURCES=[
  {subj:'Português para Concursos',icon:'📚',links:[
    {type:'youtube',label:'Português para Banco do Brasil',url:'https://www.youtube.com/results?search_query=portugues+banco+do+brasil+concurso'},
    {type:'youtube',label:'Interpretação de Texto Avançada',url:'https://www.youtube.com/results?search_query=interpretacao+texto+concurso+publico'},
    {type:'youtube',label:'Concordância e Regência',url:'https://www.youtube.com/results?search_query=concordancia+regencia+verbal+nominal+concurso'},
    {type:'course', label:'QConcursos — Português',url:'https://www.qconcursos.com/'},
  ]},
  {subj:'Mathematics & Logic',icon:'🔢',links:[
    {type:'youtube',label:'Raciocínio Lógico para Concursos',url:'https://www.youtube.com/results?search_query=raciocinio+logico+concurso+publico+basico'},
    {type:'youtube',label:'Matemática Financeira Completa',url:'https://www.youtube.com/results?search_query=matematica+financeira+juros+compostos+concurso'},
    {type:'youtube',label:'Probabilidade e Estatística BB',url:'https://www.youtube.com/results?search_query=probabilidade+estatistica+banco+do+brasil'},
    {type:'course', label:'Khan Academy — Matemática',url:'https://pt.khanacademy.org/math'},
  ]},
  {subj:'English for IT Professionals',icon:'🇬🇧',links:[
    {type:'youtube',label:'English for IT — Technical Vocabulary',url:'https://www.youtube.com/results?search_query=english+for+IT+professionals+technical'},
    {type:'youtube',label:'Modal Verbs in English',url:'https://www.youtube.com/results?search_query=modal+verbs+english+explained'},
    {type:'course', label:'Duolingo English',url:'https://www.duolingo.com/'},
    {type:'course', label:'BBC Learning English',url:'https://www.bbc.co.uk/learningenglish'},
  ]},
  {subj:'Java & Spring Boot',icon:'☕',links:[
    {type:'youtube',label:'Java 11 Curso Completo',url:'https://www.youtube.com/results?search_query=java+11+curso+completo+portugues'},
    {type:'youtube',label:'Spring Boot do Zero',url:'https://www.youtube.com/results?search_query=spring+boot+do+zero+tutorial'},
    {type:'doc',    label:'OpenJDK Documentation',url:'https://docs.oracle.com/en/java/javase/11/'},
    {type:'course', label:'Baeldung — Java Guides',url:'https://www.baeldung.com/'},
  ]},
  {subj:'SQL & Banco de Dados',icon:'🗄️',links:[
    {type:'youtube',label:'SQL do Zero ao Avançado',url:'https://www.youtube.com/results?search_query=SQL+do+zero+avancado'},
    {type:'youtube',label:'JOINs em SQL Explicado',url:'https://www.youtube.com/results?search_query=sql+joins+inner+left+right+explicado'},
    {type:'course', label:'SQLZoo — Exercícios Interativos',url:'https://sqlzoo.net/'},
    {type:'doc',    label:'PostgreSQL Documentation',url:'https://www.postgresql.org/docs/'},
  ]},
  {subj:'Segurança da Informação',icon:'🔐',links:[
    {type:'youtube',label:'OWASP Top 10 Explicado',url:'https://www.youtube.com/results?search_query=OWASP+top+10+explicado+portugues'},
    {type:'youtube',label:'Criptografia AES e RSA',url:'https://www.youtube.com/results?search_query=criptografia+AES+RSA+explicado'},
    {type:'doc',    label:'OWASP Foundation',url:'https://owasp.org/www-project-top-ten/'},
    {type:'course', label:'PortSwigger Web Security Academy',url:'https://portswigger.net/web-security'},
  ]},
  {subj:'IA & Machine Learning',icon:'🤖',links:[
    {type:'youtube',label:'Machine Learning para Iniciantes',url:'https://www.youtube.com/results?search_query=machine+learning+iniciantes+portugues'},
    {type:'youtube',label:'Redes Neurais Explicadas',url:'https://www.youtube.com/results?search_query=redes+neurais+deep+learning+explicado'},
    {type:'doc',    label:'Scikit-learn Documentation',url:'https://scikit-learn.org/stable/'},
    {type:'course', label:'Fast.ai — Practical Deep Learning',url:'https://www.fast.ai/'},
  ]},
  {subj:'Cloud & DevOps',icon:'☁️',links:[
    {type:'youtube',label:'Docker do Zero',url:'https://www.youtube.com/results?search_query=docker+do+zero+portugues'},
    {type:'youtube',label:'Kubernetes para Iniciantes',url:'https://www.youtube.com/results?search_query=kubernetes+iniciantes+portugues'},
    {type:'doc',    label:'AWS Documentation',url:'https://docs.aws.amazon.com/'},
    {type:'course', label:'Scrum Guide Oficial',url:'https://scrumguides.org/scrum-guide.html'},
  ]},
  {subj:'Conhecimentos Bancários',icon:'🏦',links:[
    {type:'youtube',label:'SFN Completo para Concursos',url:'https://www.youtube.com/results?search_query=sistema+financeiro+nacional+concurso'},
    {type:'youtube',label:'PIX, SELIC, CDI Explicados',url:'https://www.youtube.com/results?search_query=PIX+SELIC+CDI+concurso+bancario'},
    {type:'doc',    label:'BACEN — Cidadão',url:'https://www.bcb.gov.br/acessoinformacao/cidadao'},
    {type:'doc',    label:'Investidor.gov.br — CVM',url:'https://www.investidor.gov.br/'},
  ]},
  {subj:'Engenharia de Software & Ágil',icon:'⚙️',links:[
    {type:'youtube',label:'Scrum em 15 Minutos',url:'https://www.youtube.com/results?search_query=scrum+kanban+explicado+agil'},
    {type:'youtube',label:'Clean Architecture na Prática',url:'https://www.youtube.com/results?search_query=clean+architecture+pratica+java'},
    {type:'doc',    label:'Refactoring Guru — Design Patterns',url:'https://refactoring.guru/pt-br/design-patterns'},
    {type:'course', label:'Martin Fowler — Microservices',url:'https://martinfowler.com/articles/microservices.html'},
  ]},
];

/* ─── BB 2023 ANALYSIS ─── */
const BB2023={
  labels:['Prob/Est.','Banking','Eng.Software','Programação','BD/SQL','IA & Data','Segurança','Cloud/DevOps','Português','Inglês','Matemática'],
  dist:   [10, 15, 12, 18, 12, 8,  7,  5, 6, 4, 3],
  diff:   {easy:30, medium:45, hard:25},
  priority:[85, 90, 80, 95, 85, 70, 75, 65, 80, 60, 75],
  insights:[
    {icon:'🎯',title:'Java é Prioridade #1',     body:'Java 11/17 com Streams, Lambdas, Spring Boot respondeu por ~18% das questões de TI. Foque em coleções, lambdas, REST com Spring Boot.'},
    {icon:'🏦',title:'Banking com Alto Peso',    body:'Conhecimentos Bancários (~15%) são decisivos. SFN, PIX, SELIC, CDI, investimentos — estude com profundidade e faça muitas questões.'},
    {icon:'📊',title:'Probabilidade é Base',     body:'Estatística e probabilidade aparecem em ~10% das questões técnicas. Distribuições, desvio padrão e probabilidade condicional são os mais cobrados.'},
    {icon:'🔐',title:'Segurança em Alta',        body:'OWASP Top 10, JWT, OAuth2 e criptografia crescem a cada edição. Área de crescente investimento em TI bancária.'},
    {icon:'☁️',title:'Cloud e DevOps Crescendo',body:'Docker, Kubernetes, CI/CD e AWS aparecem com frequência crescente — área estratégica do Banco do Brasil.'},
    {icon:'📝',title:'Português é Decisivo',     body:'Interpretação de texto e gramática aparecem em provas de Agente de Tecnologia — não negligencie. Diferencia candidatos no ranking final.'},
  ]
};

/* ─── MOTIVATIONS ─── */
const MOTIVATIONS=[
  'Cada hora de estudo hoje é um passo a menos para a aprovação.',
  'Consistência supera talento quando o talento não é consistente.',
  'O concurso cobra o que você estudou, não o que você quis estudar.',
  'Aprovação no BB não é sorte — é método, volume e consistência.',
  'Você não precisa de mais tempo. Precisa decidir o que fazer com o que tem.',
  'Preparação é a melhor confiança que você pode construir.',
  'Cada tópico dominado é um ponto garantido na prova.',
  'Foque no processo. O resultado é consequência.',
  'Português, Matemática e Inglês diferenciam candidatos no ranking final.',
  'A maior ameaça ao seu progresso é o "estudo amanhã".',
  'Lembre: você está competindo com quem está estudando agora. Seja esse alguém.',
  'Level up um tópico de cada vez. A aprovação é coleção de pequenas vitórias.',
];

/* ─── TIPS ─── */
const TIPS_PT=['Dica: Crase é obrigatória antes de palavra feminina precedida de verbo/nome que peça "a". Ex: "Vou à reunião."',
 'Dica: "Mas" = adversativo. "Mais" = adição/comparação. Nunca confunda.',
 'Dica: Verbo INFORMAR pode ser TD+TI: "Informaram-nos sobre a decisão" ou "Informaram-nos a decisão".',
 'Dica: Em concordância verbal, o coletivo no singular exige verbo no singular.',
 'Dica: Pronome relativo "cujo" nunca vem seguido de artigo. Errado: "cujo o sistema". Certo: "cujo sistema".'];
const TIPS_EN=['Tip: "Since" is used with a specific point in time. "For" is used with a duration. "I\'ve worked here since 2020 / for 4 years."',
 'Tip: "API endpoint" = specific URL where your API can be accessed. Common in IT documentation.',
 'Tip: Present Perfect connects past to now: "I have just deployed the new version."',
 'Tip: In technical writing, prefer active voice: "The system processes requests" vs "Requests are processed by the system."',
 'Tip: "Scalable", "reliable", "maintainable" — key IT adjectives every developer must know.'];
const TIPS_MAT=['Dica: Juros compostos: M = C×(1+i)ⁿ. Memorize e pratique — cai em toda prova.',
 'Dica: Regra de 3 composta: monte a tabela, verifique proporcionalidade (direta ou inversa) para cada par.',
 'Dica: Probabilidade = casos favoráveis / casos possíveis. Espaço amostral deve incluir TODOS os resultados.',
 'Dica: Em lógica, a contrapositiva de "P → Q" é "¬Q → ¬P" e tem o mesmo valor lógico.',
 'Dica: MMC: use decomposição em fatores primos, pegue os fatores com maior expoente.'];