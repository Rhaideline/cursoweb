const fs = require('fs');
const path = require('path');

// Nichos profissionais com DORES ESPECÍFICAS de cada profissão
const nichos = [
  // SAÚDE E BEM-ESTAR
  {
    nome: "Dentistas",
    slug: "dentistas",
    icone: "🦷",
    dor: "lotando sua agenda de pacientes particulares",
    resultado: "atrair pacientes que pagam bem por procedimentos estéticos",
    doresEspecificas: [
      "Sua agenda depende de convênios que pagam mal (R$ 15 por consulta?)",
      "Pacientes particulares são raros e difíceis de captar",
      "Concorrentes com clínicas bonitas roubam seus pacientes",
      "Investe em equipamentos caros mas a cadeira fica vazia",
      "Pacientes pesquisam no Google e vão para outra clínica",
      "Não sabe como mostrar seu diferencial em clareamento e lentes"
    ],
    solucoes: [
      "Aparecer no Google quando pesquisam 'dentista perto de mim'",
      "Criar conteúdo que mostra antes/depois de procedimentos estéticos",
      "Usar Instagram para atrair pacientes de lentes de contato dental",
      "Captar leads qualificados que buscam implantes e próteses"
    ]
  },
  {
    nome: "Médicos",
    slug: "medicos",
    icone: "👨‍⚕️",
    dor: "atraindo mais pacientes particulares",
    resultado: "construir autoridade e lotar sua agenda",
    doresEspecificas: [
      "Plantões exaustivos que pagam cada vez menos",
      "Depende de convênios com remuneração ridícula",
      "Quer montar consultório mas não sabe atrair pacientes",
      "Vê colegas nas redes sociais lotados e não sabe como fazer igual",
      "Formou-se na melhor faculdade mas ninguém conhece seu trabalho",
      "Pacientes particulares vão para médicos 'famosos' do Instagram"
    ],
    solucoes: [
      "Construir autoridade digital na sua especialidade",
      "Aparecer como referência em buscas do Google",
      "Criar conteúdo educativo que atrai pacientes qualificados",
      "Posicionar-se como especialista e cobrar consultas de R$ 500+"
    ]
  },
  {
    nome: "Nutricionistas",
    slug: "nutricionistas",
    icone: "🥗",
    dor: "conquistando clientes online",
    resultado: "vender consultas e programas alimentares pela internet",
    doresEspecificas: [
      "Cobra R$ 150 na consulta mas paciente acha caro",
      "Clientes abandonam o acompanhamento depois de 2 meses",
      "Apps de dieta gratuitos estão roubando seus pacientes",
      "Não consegue escalar - só consegue atender 8 pacientes por dia",
      "Influencers sem formação vendem mais que você",
      "Seus posts de receita não viram consultas agendadas"
    ],
    solucoes: [
      "Criar programas de emagrecimento online para vender em escala",
      "Posicionar-se para nichos que pagam mais (atletas, gestantes)",
      "Usar Instagram para educar e converter seguidores em pacientes",
      "Vender consultas online para clientes do Brasil inteiro"
    ]
  },
  {
    nome: "Psicólogos",
    slug: "psicologos",
    icone: "🧠",
    dor: "captando pacientes para terapia online",
    resultado: "lotar sua agenda com atendimentos online",
    doresEspecificas: [
      "Sua agenda tem mais buracos que queijo suíço",
      "Pacientes cancelam em cima da hora e você fica sem renda",
      "Plataformas como Zenklub e Vittude pagam R$ 50 por sessão",
      "Quer cobrar R$ 200+ mas não sabe como justificar o valor",
      "Não sabe se pode anunciar (medo do CRP)",
      "Pacientes pesquisam 'psicólogo online' e acham mil opções"
    ],
    solucoes: [
      "Captar pacientes diretos sem depender de plataformas",
      "Criar presença digital ética e dentro das normas do CRP",
      "Posicionar-se em nichos específicos (ansiedade, casais, TDAH)",
      "Usar conteúdo para construir confiança antes da primeira sessão"
    ]
  },
  {
    nome: "Fisioterapeutas",
    slug: "fisioterapeutas",
    icone: "💪",
    dor: "atraindo mais pacientes",
    resultado: "divulgar seus serviços e lotar sua agenda",
    doresEspecificas: [
      "Trabalha em clínica ganhando R$ 20 por atendimento",
      "Quer abrir seu espaço mas não sabe como captar pacientes",
      "Pacientes fazem 3 sessões e abandonam o tratamento",
      "Convênios pagam uma miséria pelo seu trabalho especializado",
      "Ortopedistas não indicam você porque não te conhecem",
      "Quiropratas e 'terapeutas' sem formação roubam seus pacientes"
    ],
    solucoes: [
      "Criar conteúdo que mostra resultados reais do seu trabalho",
      "Aparecer no Google para 'fisioterapia para coluna' na sua cidade",
      "Construir parcerias com médicos através de networking digital",
      "Posicionar-se em nichos que pagam mais (atletas, pós-cirúrgico)"
    ]
  },
  {
    nome: "Personal Trainers",
    slug: "personal-trainers",
    icone: "🏋️",
    dor: "conseguindo mais alunos",
    resultado: "vender treinos online e presenciais",
    doresEspecificas: [
      "Cobra R$ 100 por hora mas aluno quer pagar R$ 50",
      "Trabalha de 6h às 22h para ganhar R$ 3.000",
      "Alunos cancelam na chuva, no frio, na preguiça...",
      "Academia fica com 60% do que você cobra",
      "Personal do Instagram tem 50k seguidores e você nem 500",
      "Não sabe como vender consultoria online para escalar"
    ],
    solucoes: [
      "Criar programas de treino online para vender em escala",
      "Usar Instagram para mostrar transformações e atrair alunos",
      "Posicionar-se para nichos que pagam mais (executivos, emagrecimento)",
      "Vender consultorias para alunos de outras cidades"
    ]
  },
  {
    nome: "Esteticistas",
    slug: "esteticistas",
    icone: "💆",
    dor: "lotando sua agenda",
    resultado: "atrair clientes para procedimentos estéticos",
    doresEspecificas: [
      "Fez mil cursos de procedimentos mas a agenda continua vazia",
      "Clientes pechinham preço de botox e preenchimento",
      "Concorrentes postam antes/depois e você tem medo",
      "Investiu R$ 30k em equipamentos que estão parados",
      "Clientes fazem 1 procedimento e nunca mais voltam",
      "Não sabe como aparecer para clientes de alto padrão"
    ],
    solucoes: [
      "Criar conteúdo de antes/depois que gera desejo",
      "Posicionar-se para clientes que pagam bem por qualidade",
      "Usar Instagram para mostrar seu trabalho e expertise",
      "Criar pacotes que fidelizam clientes por 6-12 meses"
    ]
  },
  {
    nome: "Farmacêuticos",
    slug: "farmaceuticos",
    icone: "💊",
    dor: "divulgando sua farmácia",
    resultado: "aumentar as vendas da sua farmácia",
    doresEspecificas: [
      "Redes como Drogasil e Raia estão engolindo seu negócio",
      "Cliente compra online na Ultrafarma por centavos a menos",
      "Sua farmácia é invisível no Google Maps",
      "Não sabe como divulgar manipulação e dermocosméticos",
      "Clientes não sabem que você oferece serviços farmacêuticos",
      "Fica refém dos distribuidores e das margens apertadas"
    ],
    solucoes: [
      "Aparecer no Google quando pesquisam 'farmácia perto de mim'",
      "Divulgar serviços de maior margem (manipulação, dermocosméticos)",
      "Criar conteúdo educativo que posiciona você como especialista",
      "Usar WhatsApp para fidelizar clientes e vender mais"
    ]
  },
  // DIREITO E CONTABILIDADE
  {
    nome: "Advogados",
    slug: "advogados",
    icone: "⚖️",
    dor: "captando mais clientes",
    resultado: "atrair clientes qualificados pela internet",
    doresEspecificas: [
      "Formou-se e descobriu que tem 1 milhão de advogados no Brasil",
      "Correspondente jurídico paga R$ 50 por audiência",
      "Clientes acham que advogado online é pilantra",
      "Sites como JusBrasil e Advogados Online roubam seus clientes",
      "Não sabe se pode anunciar (medo da OAB)",
      "Faz tudo: cível, trabalhista, família... e não é referência em nada"
    ],
    solucoes: [
      "Posicionar-se em um nicho específico lucrativo",
      "Criar conteúdo educativo dentro das normas da OAB",
      "Aparecer no Google para buscas da sua especialidade",
      "Usar LinkedIn para captar clientes empresariais"
    ]
  },
  {
    nome: "Contadores",
    slug: "contadores",
    icone: "📊",
    dor: "conquistando mais clientes",
    resultado: "vender serviços contábeis online",
    doresEspecificas: [
      "Cliente quer pagar R$ 150 no honorário mensal",
      "Contabilidade online cobra R$ 49/mês - como competir?",
      "Faz de tudo (DP, fiscal, contábil) pelo mesmo preço",
      "Clientes só lembram de você para entregar declaração",
      "Seu escritório é invisível no Google",
      "MEIs não viram clientes de empresas maiores"
    ],
    solucoes: [
      "Posicionar-se para nichos que pagam mais (médicos, e-commerce)",
      "Criar conteúdo que mostra seu valor além de só 'fazer imposto'",
      "Vender serviços de consultoria tributária e planejamento",
      "Usar marketing para atrair empresas, não só MEIs"
    ]
  },
  // BELEZA E ESTÉTICA
  {
    nome: "Cabeleireiros",
    slug: "cabeleireiros",
    icone: "💇",
    dor: "lotando seu salão",
    resultado: "atrair clientes fiéis para seu salão",
    doresEspecificas: [
      "Segunda e terça o salão fica às moscas",
      "Clientes vão pro salão da esquina que é R$ 10 mais barato",
      "Fez curso de colorimetria caro mas ninguém sabe",
      "Profissional boa mas só quem conhece pessoalmente sabe",
      "Clientes pedem desconto em tudo: corte, escova, química",
      "Não consegue cobrar mais que R$ 80 no corte feminino"
    ],
    solucoes: [
      "Usar Instagram para mostrar transformações e antes/depois",
      "Aparecer no Google para 'salão de beleza perto de mim'",
      "Criar conteúdo que justifica seus preços premium",
      "Fidelizar clientes com WhatsApp e remarketing"
    ]
  },
  {
    nome: "Manicures",
    slug: "manicures",
    icone: "💅",
    dor: "conquistando mais clientes",
    resultado: "lotar sua agenda de serviços",
    doresEspecificas: [
      "Cobra R$ 35 na unha e trabalha o dia inteiro",
      "Clientes desmarcam em cima da hora e você perde dinheiro",
      "Quer aprender alongamento mas não tem dinheiro pro curso",
      "Salões pagam R$ 15 por cliente - você faz o trabalho, eles ficam com o lucro",
      "Clientes vão na concorrente que tem mais seguidores",
      "Não sabe como divulgar nail art e unhas decoradas"
    ],
    solucoes: [
      "Usar Instagram para mostrar seu trabalho e atrair clientes",
      "Migrar para serviços que pagam mais (alongamento, fibra de vidro)",
      "Criar portfólio digital que vende seu trabalho",
      "Fidelizar clientes com agendamento online e WhatsApp"
    ]
  },
  {
    nome: "Maquiadores",
    slug: "maquiadores",
    icone: "💄",
    dor: "atraindo mais clientes",
    resultado: "ser requisitado para eventos e ensaios",
    doresEspecificas: [
      "Faz maquiagem linda mas ninguém vê seu trabalho",
      "Casamentos pagam bem mas só indicação traz clientes",
      "Influenciadores cobram R$ 50 por make sendo que você cobra R$ 300",
      "Seu portfólio está escondido no celular",
      "Noivas pesquisam 'maquiador casamento' e acham outros",
      "Clientes de formatura querem pagar R$ 80"
    ],
    solucoes: [
      "Criar portfólio profissional no Instagram",
      "Aparecer no Google para 'maquiador para casamento' na sua cidade",
      "Posicionar-se para eventos de alto padrão",
      "Usar marketing para fechar pacotes de noiva + madrinhas"
    ]
  },
  {
    nome: "Designers de Sobrancelha",
    slug: "designers-sobrancelha",
    icone: "👁️",
    dor: "lotando sua agenda",
    resultado: "atrair clientes para micropigmentação e design",
    doresEspecificas: [
      "Fez curso de micropigmentação caro e não consegue clientes",
      "Clientes têm medo de micropigmentação 'ficar azul'",
      "Design de sobrancelha paga R$ 40 - você quer fazer micro de R$ 800",
      "Não sabe mostrar antes/depois sem parecer apelativo",
      "Concorrentes lotadas e você com agenda vazia",
      "Clientes não entendem a diferença de técnicas (fio a fio, shadow)"
    ],
    solucoes: [
      "Criar conteúdo educativo sobre micropigmentação",
      "Mostrar antes/depois que gera confiança",
      "Posicionar-se como especialista em técnicas específicas",
      "Usar Instagram para quebrar objeções e atrair clientes"
    ]
  },
  {
    nome: "Barbeiros",
    slug: "barbeiros",
    icone: "✂️",
    dor: "lotando sua barbearia",
    resultado: "fidelizar clientes e aumentar o ticket médio",
    doresEspecificas: [
      "Cobra R$ 30 no corte e trabalha 12 horas",
      "Cliente vai no barbeiro mais barato da esquina",
      "Quer aumentar preço mas tem medo de perder clientela",
      "Profissional bom mas só atende indicação",
      "Não consegue vender barba, pigmentação e tratamentos",
      "Clientes não voltam com frequência - só quando estão 'cabeludos'"
    ],
    solucoes: [
      "Usar Instagram para mostrar cortes e atrair público jovem",
      "Criar pacotes que aumentam ticket (corte + barba + sobrancelha)",
      "Posicionar sua barbearia como experiência premium",
      "Fidelizar clientes com agendamento online"
    ]
  },
  // ALIMENTAÇÃO
  {
    nome: "Confeiteiros",
    slug: "confeiteiros",
    icone: "🎂",
    dor: "vendendo mais bolos e doces",
    resultado: "receber encomendas todos os dias",
    doresEspecificas: [
      "Faz bolo lindo de R$ 300 mas vende a R$ 150",
      "Clientes pechinham preço de bolo como se fosse feira",
      "Fim de semana tem muito pedido, semana não tem nada",
      "Paga R$ 150 em ingredientes e sobra R$ 30 de lucro",
      "Não sabe precificar - sempre fica no prejuízo",
      "Vê confeiteiro do Instagram vendendo curso e você nem consegue vender bolo"
    ],
    solucoes: [
      "Usar Instagram para mostrar bolos e gerar desejo",
      "Criar conteúdo que justifica seu preço premium",
      "Posicionar-se para festas que pagam mais (casamentos, corporativos)",
      "Organizar produção para ter pedidos durante a semana"
    ]
  },
  {
    nome: "Chefs e Cozinheiros",
    slug: "chefs",
    icone: "👨‍🍳",
    dor: "divulgando seu trabalho",
    resultado: "vender marmitas, cursos ou serviços de buffet",
    doresEspecificas: [
      "Trabalha em restaurante ganhando R$ 2.500/mês",
      "Quer empreender mas não sabe por onde começar",
      "Faz comida incrível mas ninguém conhece seu trabalho",
      "Personal chef parece distante - só rico contrata?",
      "Não sabe se vende marmita fit, buffet ou curso",
      "iFood e Rappi ficam com 30% do seu faturamento"
    ],
    solucoes: [
      "Criar presença digital que mostra sua arte culinária",
      "Posicionar-se para serviços de maior valor (personal chef, eventos)",
      "Vender marmitas direto pelo Instagram/WhatsApp sem taxas",
      "Criar curso online do seu prato mais famoso"
    ]
  },
  {
    nome: "Donos de Restaurante",
    slug: "restaurantes",
    icone: "🍽️",
    dor: "atraindo mais clientes",
    resultado: "lotar seu restaurante com delivery e presencial",
    doresEspecificas: [
      "Segunda a quarta o restaurante fica vazio",
      "iFood cobra 30% e ainda posiciona concorrente na frente",
      "Cliente vem uma vez e nunca mais volta",
      "Gastou R$ 50k em reforma e faturamento não aumentou",
      "Não aparece quando pesquisam 'restaurante perto de mim'",
      "Concorrente com comida pior lota por causa do Instagram"
    ],
    solucoes: [
      "Aparecer no Google e Google Maps para buscas locais",
      "Criar presença no Instagram que dá água na boca",
      "Fidelizar clientes com WhatsApp e promoções exclusivas",
      "Reduzir dependência do iFood com pedidos diretos"
    ]
  },
  {
    nome: "Food Trucks",
    slug: "food-trucks",
    icone: "🚚",
    dor: "conquistando mais clientes",
    resultado: "ser encontrado e vender mais",
    doresEspecificas: [
      "Fica parado em eventos e ninguém sabe onde você está",
      "Investiu R$ 80k no truck e não consegue clientes",
      "Eventos bons são dominados pelos mesmos trucks",
      "Não tem ponto fixo - como criar clientela?",
      "Clima ruim = dia perdido sem faturamento",
      "Não sabe como avisar seguidores onde vai estar"
    ],
    solucoes: [
      "Usar Instagram para avisar localização em tempo real",
      "Criar base de clientes fiéis que seguem o truck",
      "Posicionar-se para eventos corporativos e festas",
      "Usar Google Meu Negócio para ser encontrado"
    ]
  },
  // EDUCAÇÃO
  {
    nome: "Professores",
    slug: "professores",
    icone: "📚",
    dor: "vendendo aulas particulares",
    resultado: "criar renda extra com aulas online",
    doresEspecificas: [
      "Salário de professor não paga as contas",
      "Quer dar aula particular mas não sabe como divulgar",
      "Plataformas como Superprof cobram taxa alta",
      "Alunos querem pagar R$ 30 na hora/aula",
      "Não sabe como dar aula online com qualidade",
      "Trabalha 3 turnos e não tem tempo de construir algo próprio"
    ],
    solucoes: [
      "Divulgar aulas particulares nas redes sociais",
      "Criar curso gravado para vender em escala",
      "Posicionar-se para concursos ou vestibulares específicos",
      "Captar alunos diretos sem pagar plataforma"
    ]
  },
  {
    nome: "Professores de Idiomas",
    slug: "professores-idiomas",
    icone: "🌍",
    dor: "captando alunos online",
    resultado: "dar aulas para alunos do mundo todo",
    doresEspecificas: [
      "Escola de idiomas paga R$ 15 por hora/aula",
      "Apps como Duolingo estão 'matando' professores",
      "Italki e Preply ficam com grande parte do que você cobra",
      "Alunos desistem depois de 2 meses",
      "Não consegue cobrar mais de R$ 50/hora",
      "Quer dar aula para estrangeiros mas não sabe como"
    ],
    solucoes: [
      "Captar alunos diretos pelo Instagram e YouTube",
      "Criar método próprio e vender curso gravado",
      "Dar aulas para alunos internacionais cobrando em dólar",
      "Posicionar-se para nichos (business English, IELTS, conversação)"
    ]
  },
  {
    nome: "Tutores e Mentores",
    slug: "tutores",
    icone: "🎓",
    dor: "encontrando mais alunos",
    resultado: "construir autoridade e vender mentorias",
    doresEspecificas: [
      "Tem conhecimento mas não sabe como monetizar",
      "Quer criar mentoria mas acha que precisa ser famoso",
      "Não sabe quanto cobrar por mentoria",
      "Dá consultoria de graça e depois cliente não contrata",
      "Vê gurus vendendo curso ruim por R$ 2.000",
      "Não sabe criar funil para vender mentoria de alto valor"
    ],
    solucoes: [
      "Criar presença digital que constrói autoridade",
      "Usar conteúdo para atrair leads qualificados",
      "Estruturar mentoria com metodologia clara",
      "Aprender a vender mentoria de R$ 3.000+"
    ]
  },
  // SERVIÇOS PARA CASA
  {
    nome: "Arquitetos",
    slug: "arquitetos",
    icone: "🏠",
    dor: "conquistando mais projetos",
    resultado: "atrair clientes de alto padrão",
    doresEspecificas: [
      "Cliente quer projeto de R$ 300k mas pagar R$ 3k",
      "Engenheiros fazem projeto 'de brinde' na obra",
      "Sites como Habitissimo nivelam você por baixo",
      "Portfólio bonito mas ninguém vê",
      "Clientes acham que arquiteto é só pra rico",
      "Decoradores sem formação roubam seus clientes"
    ],
    solucoes: [
      "Criar portfólio digital no Instagram e Pinterest",
      "Posicionar-se para nichos específicos (comercial, interiores, alto padrão)",
      "Usar conteúdo para educar clientes sobre valor do arquiteto",
      "Aparecer no Google para 'arquiteto' na sua cidade"
    ]
  },
  {
    nome: "Designers de Interiores",
    slug: "designers-interiores",
    icone: "🛋️",
    dor: "atraindo mais clientes",
    resultado: "fechar projetos pela internet",
    doresEspecificas: [
      "Lojas de móveis oferecem 'projeto grátis' e roubam clientes",
      "Cliente acha que é só escolher cor de parede",
      "Não consegue cobrar mais de R$ 2.000 por projeto",
      "Portfólio no computador que ninguém vê",
      "Pinterest e Instagram cheio de inspiração gratuita",
      "Cliente pede orçamento e some"
    ],
    solucoes: [
      "Usar Instagram para mostrar transformações antes/depois",
      "Criar conteúdo que educa sobre valor do design",
      "Posicionar-se para clientes que valorizam qualidade",
      "Estruturar pacotes de consultoria e projeto completo"
    ]
  },
  {
    nome: "Corretores de Imóveis",
    slug: "corretores-imoveis",
    icone: "🔑",
    dor: "gerando mais leads",
    resultado: "vender e alugar mais imóveis",
    doresEspecificas: [
      "Portais como ZAP e Viva Real cobram fortunas por lead",
      "Leads frios que nunca atendem o telefone",
      "Meses sem vender e comissão não entra",
      "Imobiliária fica com metade da sua comissão",
      "Cliente pesquisa direto com construtora",
      "Outros corretores têm mais seguidores e roubam clientes"
    ],
    solucoes: [
      "Criar presença digital própria para captar leads diretos",
      "Usar Instagram para mostrar imóveis e região",
      "Posicionar-se como especialista em bairro ou tipo de imóvel",
      "Criar relacionamento antes da venda com conteúdo"
    ]
  },
  {
    nome: "Eletricistas",
    slug: "eletricistas",
    icone: "⚡",
    dor: "sendo encontrado por clientes",
    resultado: "receber chamados todos os dias",
    doresEspecificas: [
      "Depende de indicação - semana boa, semana ruim",
      "GetNinjas cobra por lead que nem atende telefone",
      "Clientes pesquisam no Google e acham outro eletricista",
      "Não sabe fazer orçamento pelo WhatsApp que converte",
      "Trabalha bem mas ninguém deixa avaliação",
      "Quer fazer parte elétrica de obras mas não consegue"
    ],
    solucoes: [
      "Aparecer no Google quando pesquisam 'eletricista perto de mim'",
      "Criar perfil no Google Meu Negócio com avaliações",
      "Usar WhatsApp Business para atender e converter",
      "Divulgar serviços no Instagram e grupos de bairro"
    ]
  },
  {
    nome: "Encanadores",
    slug: "encanadores",
    icone: "🔧",
    dor: "conseguindo mais serviços",
    resultado: "ter agenda cheia de serviços",
    doresEspecificas: [
      "Só trabalha quando telefone toca - sem previsibilidade",
      "GetNinjas e Habitissimo cobram por lead ruim",
      "Emergência no fim de semana - não consegue cobrar mais",
      "Clientes acham que é fácil e querem pagar pouco",
      "Não aparece quando pesquisam 'encanador urgente'",
      "Quer fazer hidráulica de obra mas não conhece construtores"
    ],
    solucoes: [
      "Aparecer no Google para buscas urgentes de encanador",
      "Criar Google Meu Negócio com fotos e avaliações",
      "Usar WhatsApp para atender rápido e converter",
      "Construir relacionamento para serviços recorrentes"
    ]
  },
  {
    nome: "Pintores",
    slug: "pintores",
    icone: "🎨",
    dor: "conquistando mais obras",
    resultado: "fechar orçamentos pela internet",
    doresEspecificas: [
      "Dá 10 orçamentos e fecha 1 - os outros somem",
      "Cliente pesquisa preço e pega o mais barato",
      "Não sabe mostrar diferença de qualidade no orçamento",
      "Fotos do trabalho ficam só no celular",
      "Quer pegar obra grande mas só indica pintura simples",
      "Concorrentes baratos queimam o mercado"
    ],
    solucoes: [
      "Criar portfólio no Instagram com antes/depois",
      "Aparecer no Google para 'pintor residencial' na região",
      "Mostrar qualidade que justifica preço mais alto",
      "Usar WhatsApp para enviar orçamentos profissionais"
    ]
  },
  {
    nome: "Jardineiros e Paisagistas",
    slug: "jardineiros",
    icone: "🌱",
    dor: "encontrando mais clientes",
    resultado: "ter clientes fixos e recorrentes",
    doresEspecificas: [
      "Trabalho pontual não gera renda previsível",
      "Quer fazer manutenção mensal mas não consegue fidelizar",
      "Clientes acham que jardinagem é só 'cortar grama'",
      "Paisagismo parece coisa de arquiteto - não de jardineiro",
      "Não sabe como cobrar por projeto de jardim",
      "Condomínios têm contratos mas você não sabe como entrar"
    ],
    solucoes: [
      "Usar Instagram para mostrar jardins que você criou",
      "Posicionar-se para manutenção mensal (renda recorrente)",
      "Oferecer projetos de paisagismo para aumentar ticket",
      "Prospectar condomínios e empresas"
    ]
  },
  // PETS
  {
    nome: "Veterinários",
    slug: "veterinarios",
    icone: "🐕",
    dor: "atraindo mais tutores",
    resultado: "lotar sua clínica veterinária",
    doresEspecificas: [
      "Clínica popular cobra R$ 40 na consulta - como competir?",
      "Tutores pesquisam no Google e vão pro veterinário mais perto",
      "Especializou-se mas ninguém sabe do seu diferencial",
      "Petshops indicam veterinário parceiro, não você",
      "Plantão de emergência sem pacientes",
      "Redes como Petz e Cobasi têm veterinário próprio"
    ],
    solucoes: [
      "Aparecer no Google para 'veterinário perto de mim'",
      "Criar conteúdo educativo para tutores no Instagram",
      "Posicionar-se como especialista (dermatologia, ortopedia pet)",
      "Criar relacionamento com petshops para indicação"
    ]
  },
  {
    nome: "Pet Shops",
    slug: "pet-shops",
    icone: "🐾",
    dor: "aumentando as vendas",
    resultado: "vender mais produtos e serviços pet",
    doresEspecificas: [
      "Petz, Cobasi e Amazon vendem mais barato que você",
      "Banho e tosa é comoditizado - todo petshop faz igual",
      "Cliente compra ração online e só leva o cachorro pra tosa",
      "Não consegue fidelizar - cliente vai no mais perto",
      "Gastou em estoque que não vende",
      "Não aparece quando pesquisam 'petshop perto de mim'"
    ],
    solucoes: [
      "Aparecer no Google e Google Maps para buscas locais",
      "Criar programa de fidelidade no WhatsApp",
      "Divulgar serviços exclusivos (hotel, creche, adestramento)",
      "Usar Instagram para mostrar pets e criar comunidade"
    ]
  },
  {
    nome: "Adestradores",
    slug: "adestradores",
    icone: "🦮",
    dor: "conseguindo mais clientes",
    resultado: "ser referência em adestramento",
    doresEspecificas: [
      "Tutores acham que cachorro aprende sozinho",
      "YouTube cheio de vídeo 'como adestrar em casa'",
      "Não sabe quanto cobrar por pacote de adestramento",
      "Clientes desistem no meio do treinamento",
      "Não consegue mostrar resultados do seu trabalho",
      "Cesar Millan fez parecer fácil - 'por que pagar adestrador?'"
    ],
    solucoes: [
      "Criar conteúdo mostrando antes/depois de comportamento",
      "Usar Instagram para educar tutores sobre adestramento",
      "Posicionar-se para problemas específicos (agressividade, ansiedade)",
      "Estruturar pacotes que garantem resultados"
    ]
  },
  {
    nome: "Dog Walkers",
    slug: "dog-walkers",
    icone: "🐕‍🦺",
    dor: "lotando sua agenda",
    resultado: "ter clientes fixos todos os dias",
    doresEspecificas: [
      "Tutores acham que qualquer um pode passear com cachorro",
      "Apps como DogHero cobram taxa alta",
      "Clima ruim e o passeio é cancelado",
      "Quer fazer creche/hotel mas não tem estrutura",
      "Não consegue cobrar mais de R$ 30 por passeio",
      "Clientes não são fixos - chamam quando lembram"
    ],
    solucoes: [
      "Criar pacotes mensais para renda recorrente",
      "Usar Instagram para mostrar passeios e cuidado",
      "Posicionar-se para tutores que trabalham fora",
      "Oferecer serviços adicionais (feeding visit, day care)"
    ]
  },
  // AUTOMOTIVO
  {
    nome: "Mecânicos",
    slug: "mecanicos",
    icone: "🔧",
    dor: "atraindo mais clientes",
    resultado: "lotar sua oficina de serviços",
    doresEspecificas: [
      "Concessionária rouba cliente com 'garantia de fábrica'",
      "Motoristas não confiam em mecânico - acham que vai enganar",
      "Oficina vazia de segunda a quarta",
      "iCarros e Carango indicam oficina parceira, não você",
      "Não aparece quando pesquisam 'mecânico perto de mim'",
      "Cliente vai na oficina mais barata e depois reclama"
    ],
    solucoes: [
      "Aparecer no Google para buscas de mecânico na região",
      "Criar conteúdo educativo que gera confiança",
      "Usar WhatsApp para orçamentos e follow-up",
      "Mostrar transparência com fotos e vídeos do serviço"
    ]
  },
  {
    nome: "Estética Automotiva",
    slug: "estetica-automotiva",
    icone: "🚗",
    dor: "conquistando mais clientes",
    resultado: "ter agenda cheia de polimentos e detalhamentos",
    doresEspecificas: [
      "Lava-rápido cobra R$ 30 e cliente acha caro R$ 300 em polimento",
      "Dono de carro não entende diferença de vitrificação e cera",
      "Fez curso de PPF mas não tem cliente pra aplicar",
      "Investiu R$ 20k em produtos e equipamentos parados",
      "Não sabe como mostrar antes/depois de forma profissional",
      "Carros de luxo vão pra concorrente com mais Instagram"
    ],
    solucoes: [
      "Criar conteúdo de antes/depois impressionante",
      "Educar mercado sobre diferença dos serviços",
      "Posicionar-se para carros de luxo e entusiastas",
      "Usar Instagram para atrair donos de carros especiais"
    ]
  },
  {
    nome: "Auto Escolas",
    slug: "auto-escolas",
    icone: "🚙",
    dor: "captando mais alunos",
    resultado: "matricular mais alunos todo mês",
    doresEspecificas: [
      "Concorrência pesada - 10 autoescolas no mesmo bairro",
      "Alunos pesquisam preço e vão na mais barata",
      "Site do Detran dificulta e aluno culpa a autoescola",
      "Primeira habilitação diminuiu - todo mundo já tem CNH",
      "Não aparece quando pesquisam 'autoescola perto de mim'",
      "Apps prometem CNH mais rápido/fácil"
    ],
    solucoes: [
      "Aparecer no Google para buscas de autoescola na região",
      "Criar conteúdo que tira dúvidas sobre CNH",
      "Usar Instagram para mostrar aprovações e depoimentos",
      "Posicionar-se para nichos (moto, PCD, reciclagem)"
    ]
  },
  // EVENTOS E CRIATIVIDADE
  {
    nome: "Fotógrafos",
    slug: "fotografos",
    icone: "📸",
    dor: "conseguindo mais ensaios e eventos",
    resultado: "ser requisitado para casamentos e ensaios",
    doresEspecificas: [
      "Todo mundo com iPhone se acha fotógrafo",
      "Noivas querem pagar R$ 1.500 em casamento completo",
      "Gastou R$ 30k em equipamento mas agenda vazia",
      "Portfólio lindo no HD que ninguém vê",
      "Influenciador com celular ganha mais que você",
      "Casamentos só nos fins de semana - semana sem renda"
    ],
    solucoes: [
      "Criar portfólio online que impressiona e converte",
      "Posicionar-se para casamentos de alto padrão",
      "Usar Instagram para mostrar bastidores e resultados",
      "Diversificar (ensaio, corporativo, produto)"
    ]
  },
  {
    nome: "Videomakers",
    slug: "videomakers",
    icone: "🎬",
    dor: "fechando mais projetos",
    resultado: "produzir vídeos para empresas e eventos",
    doresEspecificas: [
      "Cliente acha que Reels feito no celular é igual vídeo profissional",
      "Quer cobrar R$ 5.000 por vídeo institucional e cliente oferece R$ 500",
      "Equipamento de R$ 50k parado porque não tem trabalho",
      "Fica refém de produtora que paga mal",
      "Não sabe como prospectar empresas",
      "YouTube cheio de 'videomaker' que cobra mixaria"
    ],
    solucoes: [
      "Criar portfólio que mostra qualidade diferenciada",
      "Posicionar-se para nichos específicos (casamento, corporativo)",
      "Usar LinkedIn para prospectar empresas",
      "Criar pacotes recorrentes (conteúdo mensal para redes)"
    ]
  },
  {
    nome: "DJs",
    slug: "djs",
    icone: "🎧",
    dor: "sendo contratado para eventos",
    resultado: "tocar em festas e eventos todo fim de semana",
    doresEspecificas: [
      "Festa de 15 anos quer pagar R$ 300 pelo DJ",
      "Só toca quando amigo indica",
      "Gastou R$ 20k em equipamento e não usa",
      "Casamentos pagam bem mas não consegue entrar nesse mercado",
      "Todo mundo com Spotify se acha DJ",
      "Balada contrata sempre os mesmos DJs"
    ],
    solucoes: [
      "Criar presença no Instagram com sets e bastidores",
      "Posicionar-se para casamentos e eventos corporativos",
      "Construir relacionamento com casas de festas",
      "Usar vídeos e músicas para mostrar versatilidade"
    ]
  },
  {
    nome: "Decoradores de Festas",
    slug: "decoradores-festas",
    icone: "🎈",
    dor: "fechando mais contratos",
    resultado: "decorar festas toda semana",
    doresEspecificas: [
      "Cliente quer festa do Instagram por R$ 500",
      "Pinterest cheio de inspiração - cliente quer igual mas não quer pagar",
      "Material parado porque não tem eventos",
      "Aluguel de espaço indica decorador parceiro, não você",
      "Mês sem festa = mês sem faturamento",
      "Decoradora amadora cobra metade do seu preço"
    ],
    solucoes: [
      "Criar portfólio no Instagram que gera desejo",
      "Posicionar-se para festas de maior valor (casamento, 15 anos)",
      "Fazer parcerias com buffets e espaços de eventos",
      "Criar pacotes que aumentam ticket médio"
    ]
  },
  {
    nome: "Cerimonialistas",
    slug: "cerimonialistas",
    icone: "💒",
    dor: "captando mais eventos",
    resultado: "ser referência em casamentos e formaturas",
    doresEspecificas: [
      "Noivas não entendem o que cerimonialista faz",
      "Google cheio de 'como organizar casamento sozinha'",
      "Espaço de eventos indica cerimonialista parceiro",
      "Noiva quer pagar R$ 1.000 em assessoria completa",
      "Só tem trabalho em época de casamentos",
      "Produtor de eventos grande não te contrata"
    ],
    solucoes: [
      "Criar conteúdo educativo para noivas no Instagram",
      "Mostrar bastidores e checklist que só cerimonialista faz",
      "Posicionar-se como indispensável no grande dia",
      "Fazer parcerias com fornecedores de casamento"
    ]
  },
  // MODA E VESTUÁRIO
  {
    nome: "Costureiras",
    slug: "costureiras",
    icone: "🧵",
    dor: "conseguindo mais clientes",
    resultado: "ter encomendas toda semana",
    doresEspecificas: [
      "Fast fashion barata demais - como competir?",
      "Cliente quer roupa sob medida por preço de Shein",
      "Ajuste de roupa paga R$ 20 e demora 2 horas",
      "Não sabe cobrar por peça feita do zero",
      "Quer fazer vestido de festa mas só chega ajuste de bainha",
      "Trabalho invisível - só indicação traz cliente"
    ],
    solucoes: [
      "Criar Instagram mostrando peças exclusivas",
      "Posicionar-se para nichos que pagam mais (noivas, festas)",
      "Mostrar qualidade e exclusividade de roupa sob medida",
      "Usar WhatsApp para atendimento personalizado"
    ]
  },
  {
    nome: "Lojas de Roupas",
    slug: "lojas-roupas",
    icone: "👗",
    dor: "vendendo mais",
    resultado: "vender online e na loja física",
    doresEspecificas: [
      "Shein e Shopee vendem por centavos - impossível competir",
      "Estoque parado comendo seu capital",
      "Loja vazia de segunda a quarta",
      "Não sabe como vender pelo Instagram",
      "Cliente prova na loja e compra online mais barato",
      "Shopping cobra aluguel alto e vendas não pagam"
    ],
    solucoes: [
      "Criar Instagram que gera desejo e vende",
      "Usar WhatsApp para relacionamento e vendas",
      "Mostrar provador virtual e looks montados",
      "Criar experiência que e-commerce não oferece"
    ]
  },
  {
    nome: "Consultores de Imagem",
    slug: "consultores-imagem",
    icone: "👔",
    dor: "captando clientes",
    resultado: "transformar pessoas através do estilo",
    doresEspecificas: [
      "Cliente não entende o que consultor de imagem faz",
      "Instagram cheio de dica de moda grátis",
      "Quer cobrar R$ 500 em consultoria mas cliente acha caro",
      "Não consegue mostrar resultado tangível",
      "Personal stylist parece coisa de celebridade",
      "Coloração pessoal virou commodity no TikTok"
    ],
    solucoes: [
      "Criar conteúdo que educa sobre valor da consultoria",
      "Mostrar transformações de antes/depois",
      "Posicionar-se para públicos específicos (executivos, transição)",
      "Estruturar pacotes com entregáveis claros"
    ]
  },
  // NEGÓCIOS E EMPREENDEDORISMO
  {
    nome: "MEI e Microempreendedores",
    slug: "mei",
    icone: "💼",
    dor: "divulgando seu negócio",
    resultado: "vender mais gastando pouco",
    doresEspecificas: [
      "Abriu MEI cheio de esperança mas não sabe vender",
      "Faz de tudo: produz, vende, entrega, cobra...",
      "Não tem dinheiro pra investir em marketing",
      "Concorrente informal vende mais barato",
      "Não sabe usar Instagram pra vender",
      "Trabalha mais que empregado e ganha menos"
    ],
    solucoes: [
      "Aprender marketing que não precisa de investimento alto",
      "Usar redes sociais de forma estratégica",
      "Criar presença digital profissional mesmo sem dinheiro",
      "Transformar seguidores em clientes"
    ]
  },
  {
    nome: "Donos de E-commerce",
    slug: "e-commerce",
    icone: "🛒",
    dor: "aumentando as vendas",
    resultado: "vender mais na sua loja virtual",
    doresEspecificas: [
      "Loja no ar mas sem vendas - só grilo",
      "Gastou R$ 500 em tráfego e vendeu R$ 100",
      "Mercado Livre e Amazon dominam seu nicho",
      "Carrinho abandonado toda hora",
      "Não sabe fazer tráfego que dá retorno",
      "Estoque parado virando prejuízo"
    ],
    solucoes: [
      "Aprender tráfego pago que converte",
      "Criar estratégia de recuperação de carrinho",
      "Usar Instagram e influenciadores para vender",
      "Otimizar loja para aumentar conversão"
    ]
  },
  {
    nome: "Afiliados Digitais",
    slug: "afiliados",
    icone: "💰",
    dor: "fazendo suas primeiras vendas",
    resultado: "viver de comissões na internet",
    doresEspecificas: [
      "Comprou curso de afiliado e não vendeu nada",
      "Link de afiliado que ninguém clica",
      "Não sabe criar conteúdo que vende",
      "Gastou em tráfego pago e ficou no prejuízo",
      "Vê print de guru mas não consegue replicar",
      "Hotmart, Eduzz, Kiwify... não sabe por onde começar"
    ],
    solucoes: [
      "Aprender a criar conteúdo que converte",
      "Entender tráfego pago do básico ao avançado",
      "Escolher produtos certos para promover",
      "Criar estrutura que gera vendas todo dia"
    ]
  },
  {
    nome: "Infoprodutores",
    slug: "infoprodutores",
    icone: "📱",
    dor: "lançando seu produto digital",
    resultado: "criar e vender cursos online",
    doresEspecificas: [
      "Tem conhecimento mas não sabe transformar em curso",
      "Gravou curso mas ninguém compra",
      "Lançamento que deu zero vendas",
      "Não sabe usar Hotmart, Kiwify ou Eduzz",
      "Vê guru faturando milhões e você não vende 1",
      "Medo de aparecer e ser julgado"
    ],
    solucoes: [
      "Criar produto digital que resolve problema real",
      "Estruturar lançamento que converte",
      "Usar marketing de conteúdo para atrair audiência",
      "Vender todos os dias com funil perpétuo"
    ]
  },
  {
    nome: "Coaches",
    slug: "coaches",
    icone: "🎯",
    dor: "captando coachees",
    resultado: "lotar sua agenda de sessões",
    doresEspecificas: [
      "Certificação cara que não trouxe clientes",
      "Coaching virou piada na internet",
      "Não sabe como se diferenciar de milhares de coaches",
      "Quer cobrar R$ 500 por sessão mas não consegue",
      "Dá sessão gratuita e cliente não contrata",
      "Não sabe explicar o que coach faz de verdade"
    ],
    solucoes: [
      "Posicionar-se em nicho específico",
      "Criar conteúdo que mostra resultados reais",
      "Aprender a vender coaching de alto valor",
      "Construir autoridade que atrai clientes"
    ]
  },
  {
    nome: "Consultores",
    slug: "consultores",
    icone: "📋",
    dor: "encontrando mais clientes",
    resultado: "vender consultorias de alto valor",
    doresEspecificas: [
      "Empresa grande não te contrata - só Big Four",
      "PME quer consultoria mas não quer pagar",
      "Dá consultoria de graça esperando contrato",
      "Não sabe quanto cobrar por projeto",
      "LinkedIn cheio de consultor - como se destacar?",
      "Proposta enviada que nunca vira contrato"
    ],
    solucoes: [
      "Criar autoridade no LinkedIn e redes",
      "Posicionar-se como especialista em problema específico",
      "Estruturar proposta que converte",
      "Aprender a vender consultoria de R$ 10k+"
    ]
  },
  // CARREIRAS
  {
    nome: "Quem Quer Sair do CLT",
    slug: "sair-do-clt",
    icone: "🚀",
    dor: "conquistando liberdade financeira",
    resultado: "largar o emprego e trabalhar para si mesmo",
    doresEspecificas: [
      "Trabalha 8 horas pra realizar sonho do patrão",
      "Salário não aumenta mas as contas sim",
      "Domingo à noite já vem a ansiedade da segunda",
      "Chefe tóxico que não valoriza seu trabalho",
      "Medo de largar estabilidade e se ferrar",
      "Vê gente na internet trabalhando de casa e ganhando bem"
    ],
    solucoes: [
      "Aprender habilidade digital que dá dinheiro",
      "Criar renda paralela antes de sair do emprego",
      "Planejar transição de forma segura",
      "Construir negócio próprio do zero"
    ]
  },
  {
    nome: "Quem Busca Renda Extra",
    slug: "renda-extra",
    icone: "💵",
    dor: "ganhando dinheiro nas horas vagas",
    resultado: "ter uma renda extra todo mês",
    doresEspecificas: [
      "Salário acaba antes do mês acabar",
      "Quer ajudar em casa mas não sabe como",
      "Uber e 99 pagam cada vez menos",
      "Não tem tempo pra segundo emprego",
      "Vê gente vendendo na internet mas não sabe começar",
      "Medo de investir dinheiro que não tem"
    ],
    solucoes: [
      "Aprender marketing digital do zero",
      "Criar renda extra trabalhando de casa",
      "Usar redes sociais para ganhar dinheiro",
      "Começar com pouco ou nenhum investimento"
    ]
  },
  {
    nome: "Desempregados",
    slug: "desempregados",
    icone: "🔄",
    dor: "voltando ao mercado de trabalho",
    resultado: "criar sua própria fonte de renda",
    doresEspecificas: [
      "Currículo enviado que nunca recebe resposta",
      "Idade 'avançada' que fecha portas",
      "Experiência que ninguém valoriza mais",
      "Seguro-desemprego acabando e desespero aumentando",
      "Entrevista que nunca vira contratação",
      "Mercado de trabalho cada vez mais difícil"
    ],
    solucoes: [
      "Criar sua própria fonte de renda",
      "Transformar experiência em serviço digital",
      "Aprender habilidade que paga bem",
      "Não depender de empresa para ganhar dinheiro"
    ]
  },
  {
    nome: "Aposentados",
    slug: "aposentados",
    icone: "👴",
    dor: "complementando a aposentadoria",
    resultado: "ter renda extra trabalhando de casa",
    doresEspecificas: [
      "Aposentadoria que não paga as contas",
      "Plano de saúde que sobe todo ano",
      "Quer ajudar filhos e netos mas não consegue",
      "Tempo livre demais e dinheiro de menos",
      "Mercado não contrata 'idosos'",
      "Acha que internet é complicada demais"
    ],
    solucoes: [
      "Aprender marketing digital no seu ritmo",
      "Usar experiência de vida para criar negócio",
      "Trabalhar de casa sem horário fixo",
      "Tecnologia explicada passo a passo, sem complicação"
    ]
  },
  {
    nome: "Mães que Trabalham em Casa",
    slug: "maes",
    icone: "👩‍👧",
    dor: "conciliando filhos e trabalho",
    resultado: "ganhar dinheiro sem sair de casa",
    doresEspecificas: [
      "Quer trabalhar mas não tem com quem deixar os filhos",
      "Emprego CLT não permite horário flexível",
      "Culpa de deixar filho em creche o dia todo",
      "Marido é o único que traz renda e isso incomoda",
      "Formação que está parada porque virou mãe",
      "Quer contribuir mas não sabe como"
    ],
    solucoes: [
      "Trabalhar de casa no seu horário",
      "Criar renda enquanto cuida dos filhos",
      "Usar internet para ganhar dinheiro",
      "Ter independência financeira sendo mãe"
    ]
  },
  {
    nome: "Estudantes",
    slug: "estudantes",
    icone: "🎒",
    dor: "ganhando dinheiro enquanto estuda",
    resultado: "iniciar carreira em marketing digital",
    doresEspecificas: [
      "Estágio paga R$ 600 e exige tempo integral",
      "Faculdade cara que os pais pagam com dificuldade",
      "Quer experiência mas ninguém contrata sem experiência",
      "Não sabe o que vai fazer depois de formado",
      "Mercado de trabalho assustador",
      "Colegas já estão trabalhando e você não"
    ],
    solucoes: [
      "Aprender habilidade digital valorizada pelo mercado",
      "Ganhar dinheiro enquanto estuda",
      "Criar portfólio antes de se formar",
      "Começar carreira em marketing digital"
    ]
  },
  {
    nome: "Iniciantes em Marketing Digital",
    slug: "iniciantes",
    icone: "🌟",
    dor: "começando do zero",
    resultado: "dominar marketing digital e faturar",
    doresEspecificas: [
      "Não sabe por onde começar - tudo parece grego",
      "Informação demais: tráfego, copy, funil, lançamento...",
      "Comprou curso que não ensinou o básico",
      "Medo de começar e não dar certo",
      "Não tem dinheiro pra investir em curso caro",
      "Todo mundo parece saber mais que você"
    ],
    solucoes: [
      "Aprender o básico de forma simples e direta",
      "Entender cada área do marketing digital",
      "Começar com passo a passo para iniciantes",
      "Ter base sólida para depois escolher especialização"
    ]
  },
  // PROFISSÕES DE MARKETING
  {
    nome: "Quem Quer Ser Gestor de Tráfego",
    slug: "gestor-trafego",
    icone: "📈",
    dor: "aprendendo tráfego pago",
    resultado: "ganhar R$ 5.000 a R$ 20.000/mês gerenciando anúncios",
    doresEspecificas: [
      "Facebook Ads parece bicho de sete cabeças",
      "Gastou dinheiro testando e não teve resultado",
      "Não sabe como cobrar de cliente",
      "Medo de gastar dinheiro do cliente e não dar retorno",
      "Curso de guru que não ensina o prático",
      "Todo mundo virando gestor - mercado saturado?"
    ],
    solucoes: [
      "Aprender tráfego pago do zero ao avançado",
      "Entender Facebook Ads e Google Ads na prática",
      "Saber como precificar e vender seu serviço",
      "Ter resultados para construir portfólio"
    ]
  },
  {
    nome: "Quem Quer Ser Social Media",
    slug: "social-media",
    icone: "📱",
    dor: "aprendendo a gerenciar redes sociais",
    resultado: "ganhar dinheiro cuidando de perfis de empresas",
    doresEspecificas: [
      "Sabe usar Instagram pessoal mas não profissional",
      "Não sabe quanto cobrar pra gerenciar perfil",
      "Cliente quer post todo dia por R$ 500/mês",
      "Faz arte linda mas não gera resultado pro cliente",
      "Não sabe criar estratégia, só posta",
      "Ferramentas caras que comem sua margem"
    ],
    solucoes: [
      "Aprender gestão estratégica de redes sociais",
      "Criar conteúdo que engaja e converte",
      "Saber precificar e apresentar resultados",
      "Usar ferramentas gratuitas de forma profissional"
    ]
  },
  {
    nome: "Quem Quer Ser Copywriter",
    slug: "copywriter",
    icone: "✍️",
    dor: "aprendendo a escrever textos que vendem",
    resultado: "ganhar dinheiro escrevendo para empresas",
    doresEspecificas: [
      "Escreve bem mas texto não vende",
      "Não sabe a diferença de copy e redação",
      "Quer trabalhar com escrita mas não sabe como monetizar",
      "ChatGPT vai acabar com copywriters?",
      "Não sabe cobrar por texto: por palavra, por peça?",
      "Curso caro que só ensina teoria"
    ],
    solucoes: [
      "Aprender copywriting que converte",
      "Entender gatilhos mentais e persuasão",
      "Saber onde encontrar clientes que pagam bem",
      "Usar IA como ferramenta, não como substituto"
    ]
  },
  {
    nome: "Quem Quer Ser Freelancer",
    slug: "freelancer",
    icone: "💻",
    dor: "trabalhando de qualquer lugar",
    resultado: "ter liberdade geográfica e financeira",
    doresEspecificas: [
      "Workana e 99Freelas pagam muito pouco",
      "Clientes gringo parecem inacessíveis",
      "Não sabe como cobrar em dólar",
      "Medo da instabilidade de renda",
      "Não sabe organizar rotina trabalhando de casa",
      "Proposta rejeitada toda hora"
    ],
    solucoes: [
      "Aprender a se posicionar para clientes melhores",
      "Criar portfólio que convence",
      "Encontrar clientes fora de plataformas baratas",
      "Organizar vida de freelancer para ter estabilidade"
    ]
  }
];

function gerarPagina(nicho) {
  const { nome, slug, icone, dor, resultado, doresEspecificas, solucoes } = nicho;

  // Gerar HTML das dores específicas
  const doresHTML = doresEspecificas.map(dor =>
    `<div class="glass-card p-6 border-l-4 border-red-500">
                    <p class="text-white"><span class="text-red-400 font-bold text-xl">✗</span> ${dor}</p>
                </div>`
  ).join('\n                ');

  // Gerar HTML das soluções
  const solucoesHTML = solucoes.map(sol =>
    `<li class="flex items-start gap-3"><span class="text-green-400 text-xl">✓</span> <span>${sol}</span></li>`
  ).join('\n                        ');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO Meta Tags -->
    <title>Curso de Marketing Digital para ${nome} | R$ 29,90 | Certificado</title>
    <meta name="description" content="Curso de Marketing Digital específico para ${nome}. ${doresEspecificas[0]} Aprenda a ${resultado}. Apenas R$ 29,90 com certificado!">
    <meta name="keywords" content="marketing digital para ${nome.toLowerCase()}, como divulgar ${nome.toLowerCase()}, ${nome.toLowerCase()} marketing, curso marketing ${nome.toLowerCase()}, ${nome.toLowerCase()} redes sociais, ${nome.toLowerCase()} instagram">
    <link rel="canonical" href="https://rhaideline.github.io/cursoweb/nichos/curso-marketing-digital-${slug}.html">

    <!-- Open Graph -->
    <meta property="og:title" content="Curso de Marketing Digital para ${nome} | R$ 29,90">
    <meta property="og:description" content="${doresEspecificas[0]} Aprenda marketing digital e ${resultado}. De R$ 497 por apenas R$ 29,90.">
    <meta property="og:url" content="https://rhaideline.github.io/cursoweb/nichos/curso-marketing-digital-${slug}.html">
    <meta property="og:type" content="website">

    <!-- Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary-blue': '#1E40AF',
                        'success-green': '#10B981',
                    },
                    fontFamily: {
                        'poppins': ['Poppins', 'sans-serif'],
                        'inter': ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(180deg, #000000 0%, #0A0A0A 50%, #0f172a 100%);
            color: #FFFFFF;
        }
        h1, h2, h3, h4, h5, h6 { font-family: 'Poppins', sans-serif; }
        .gradient-text {
            background: linear-gradient(135deg, #3B82F6 0%, #C0C0C0 50%, #FFFFFF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(192, 192, 192, 0.2);
            border-radius: 24px;
        }
        .btn-premium {
            background: linear-gradient(135deg, #10B981 0%, #059669 100%);
            color: white;
            font-weight: 700;
            padding: 1.5rem 3rem;
            border-radius: 50px;
            box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4);
            transition: all 0.3s ease;
            display: inline-block;
            text-decoration: none;
        }
        .btn-premium:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 15px 50px rgba(16, 185, 129, 0.6);
        }
        .pulse-animation { animation: pulse 2s infinite; }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .pain-section {
            background: linear-gradient(180deg, rgba(127, 29, 29, 0.1) 0%, transparent 100%);
        }
        .solution-section {
            background: linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.1) 100%);
        }
    </style>

    <!-- Schema.org -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Curso de Marketing Digital para ${nome}",
        "description": "Curso completo de Marketing Digital específico para ${nome}. Aprenda a ${resultado}.",
        "provider": {
            "@type": "Organization",
            "name": "Cursos Certificados"
        },
        "offers": {
            "@type": "Offer",
            "price": "29.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "${nome}"
        }
    }
    </script>
</head>
<body>

    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <a href="../index.html" class="text-2xl font-bold gradient-text">Cursos Certificados</a>
                <a href="https://pay.kiwify.com.br/45z4eoN" target="_blank" class="hidden md:block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition">
                    GARANTIR VAGA
                </a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-24 pb-12 md:pt-32 md:pb-20">
        <div class="container mx-auto px-4">

            <!-- Breadcrumb -->
            <nav class="mb-6 text-sm text-gray-400">
                <a href="../index.html" class="hover:text-white">Início</a> &gt;
                <a href="../curso-marketing-digital.html" class="hover:text-white">Marketing Digital</a> &gt;
                <span class="text-white">Para ${nome}</span>
            </nav>

            <div class="text-center max-w-4xl mx-auto">

                <!-- Badge -->
                <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full">
                    <span class="text-3xl">${icone}</span>
                    <span class="text-blue-400 font-semibold">Curso específico para ${nome}</span>
                </div>

                <!-- Headline com DOR PRINCIPAL -->
                <h1 class="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    <span class="text-white">${icone} ${nome}:</span><br>
                    <span class="text-red-400">${doresEspecificas[0].includes('?') ? doresEspecificas[0] : doresEspecificas[0] + '?'}</span>
                </h1>

                <p class="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                    Chega de ${doresEspecificas[1].toLowerCase()}. Aprenda o método que vai fazer você <span class="text-green-400 font-bold">${resultado}</span>
                </p>

                <p class="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-semibold">
                    Marketing Digital explicado de forma <span class="gradient-text">simples e prática</span> para ${nome.toLowerCase()}
                </p>

                <!-- Prova Social -->
                <div class="flex flex-wrap justify-center gap-4 mb-10">
                    <div class="glass-card px-4 py-2 flex items-center gap-2">
                        <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
                        <span class="text-white font-semibold">4.9/5</span>
                    </div>
                    <div class="glass-card px-4 py-2 flex items-center gap-2">
                        <span>👥</span>
                        <span class="text-white font-semibold">3.892+ alunos</span>
                    </div>
                    <div class="glass-card px-4 py-2 flex items-center gap-2">
                        <span class="text-green-400">✓</span>
                        <span class="text-white font-semibold">Certificado 40h</span>
                    </div>
                </div>

                <!-- Preço -->
                <div class="glass-card p-8 max-w-md mx-auto mb-8">
                    <p class="text-gray-400 mb-2">De <span class="line-through">R$ 497,00</span></p>
                    <div class="flex items-center justify-center gap-3 mb-2">
                        <span class="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">-94% OFF</span>
                        <p class="text-5xl font-black text-white">R$ 29,90</p>
                    </div>
                    <p class="text-gray-300">ou 3x de <span class="text-yellow-400 font-bold">R$ 9,97</span></p>
                </div>

                <!-- CTA -->
                <a href="https://pay.kiwify.com.br/45z4eoN" target="_blank" rel="noopener" class="btn-premium text-xl pulse-animation">
                    ${icone} QUERO RESOLVER ISSO AGORA
                </a>

                <p class="mt-4 text-sm text-gray-400">
                    <span class="text-green-400">✓</span> Acesso imediato
                    <span class="mx-2">|</span>
                    <span class="text-green-400">✓</span> Garantia 7 dias
                    <span class="mx-2">|</span>
                    <span class="text-green-400">✓</span> Certificado incluso
                </p>
            </div>
        </div>
    </section>

    <!-- SEÇÃO DE DORES ESPECÍFICAS -->
    <section class="py-16 border-t border-gray-800 pain-section">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
                😤 A Realidade de ${nome} Hoje
            </h2>
            <p class="text-center text-gray-400 mb-6 max-w-2xl mx-auto">Se você se identifica com PELO MENOS UMA dessas situações, este curso foi feito pra você:</p>

            <div class="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
                ${doresHTML}
            </div>

            <div class="text-center glass-card p-8 max-w-2xl mx-auto border border-yellow-500/30">
                <p class="text-2xl text-yellow-400 font-bold mb-4">⚠️ Se você não mudar agora...</p>
                <p class="text-gray-300 text-lg">Vai continuar perdendo clientes para concorrentes que já dominam o digital. Enquanto você lê isso, alguém está captando SEU cliente no Instagram.</p>
            </div>
        </div>
    </section>

    <!-- SEÇÃO DE SOLUÇÕES -->
    <section class="py-16 border-t border-gray-800 solution-section">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
                ✅ O Que Você Vai Aprender a Fazer
            </h2>
            <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Estratégias específicas para ${nome.toLowerCase()} que funcionam mesmo sem experiência</p>

            <div class="glass-card p-8 max-w-3xl mx-auto mb-12">
                <ul class="space-y-4 text-lg text-white">
                    ${solucoesHTML}
                </ul>
            </div>

            <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-blue-400 mb-4">📱 Redes Sociais para ${nome}</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> O que postar para atrair clientes certos</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Como criar conteúdo que gera confiança</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Instagram e Facebook na prática</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Hashtags e horários que funcionam</li>
                    </ul>
                </div>
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-green-400 mb-4">💰 Converter Seguidores em Clientes</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> WhatsApp Business que fecha vendas</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Textos persuasivos (sem parecer vendedor)</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Funil simples que automatiza</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Como precificar e justificar seu valor</li>
                    </ul>
                </div>
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-yellow-400 mb-4">📈 Tráfego Pago Simplificado</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Facebook e Instagram Ads do zero</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Google Ads para ${nome.toLowerCase()}</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Como investir R$ 10/dia com retorno</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Aparecer para clientes da sua região</li>
                    </ul>
                </div>
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-purple-400 mb-4">🎯 Posicionamento de Autoridade</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Como se destacar dos concorrentes</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Google Meu Negócio otimizado</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Avaliações que geram confiança</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Ser encontrado quando pesquisam por você</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Antes e Depois -->
    <section class="py-16 border-t border-gray-800">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
                🔄 Sua Transformação
            </h2>

            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div class="glass-card p-8 border border-red-500/30">
                    <h3 class="text-2xl font-bold text-red-400 mb-6">😞 ANTES do Curso</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex items-start gap-2"><span class="text-red-400">✗</span> ${doresEspecificas[0]}</li>
                        <li class="flex items-start gap-2"><span class="text-red-400">✗</span> ${doresEspecificas[2]}</li>
                        <li class="flex items-start gap-2"><span class="text-red-400">✗</span> ${doresEspecificas[4]}</li>
                        <li class="flex items-start gap-2"><span class="text-red-400">✗</span> Sem previsibilidade de renda</li>
                        <li class="flex items-start gap-2"><span class="text-red-400">✗</span> Dependendo de indicação</li>
                    </ul>
                </div>
                <div class="glass-card p-8 border border-green-500/30">
                    <h3 class="text-2xl font-bold text-green-400 mb-6">😎 DEPOIS do Curso</h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex items-start gap-2"><span class="text-green-400">✓</span> ${solucoes[0]}</li>
                        <li class="flex items-start gap-2"><span class="text-green-400">✓</span> ${solucoes[1]}</li>
                        <li class="flex items-start gap-2"><span class="text-green-400">✓</span> ${solucoes[2] || 'Clientes chegando pelo digital'}</li>
                        <li class="flex items-start gap-2"><span class="text-green-400">✓</span> Renda previsível e crescente</li>
                        <li class="flex items-start gap-2"><span class="text-green-400">✓</span> Autoridade reconhecida no mercado</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Bônus -->
    <section class="py-16 border-t border-gray-800 bg-gradient-to-b from-transparent to-green-900/10">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
                🎁 7 Bônus Exclusivos
            </h2>
            <p class="text-center text-gray-400 mb-12">Valor: <span class="line-through">R$ 891</span> - <span class="text-green-400 font-bold">GRÁTIS para ${nome.toLowerCase()}</span></p>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">📋 100 Ideias de Conteúdo</h4>
                    <p class="text-sm text-gray-400">Posts prontos para ${nome.toLowerCase()}</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">🎨 50 Templates Canva</h4>
                    <p class="text-sm text-gray-400">Artes profissionais editáveis</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">📊 Planilha de Planejamento</h4>
                    <p class="text-sm text-gray-400">Organize sua produção de conteúdo</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">💬 Scripts de WhatsApp</h4>
                    <p class="text-sm text-gray-400">Mensagens que convertem em vendas</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">✅ Checklist de Lançamento</h4>
                    <p class="text-sm text-gray-400">Passo a passo para começar</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">🏆 Certificado 40h</h4>
                    <p class="text-sm text-gray-400">Reconhecido em todo Brasil</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 border-t border-gray-800">
        <div class="container mx-auto px-4 text-center">
            <p class="text-xl text-yellow-400 font-bold mb-4">⚠️ OFERTA ESPECIAL PARA ${nome.toUpperCase()}</p>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                Chega de ${doresEspecificas[1].toLowerCase().replace('?', '')}
            </h2>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Por menos de R$ 1 por dia você vai aprender a ${resultado}
            </p>

            <div class="glass-card p-8 max-w-lg mx-auto mb-8 border border-green-500/30">
                <p class="text-gray-400 mb-2">De <span class="line-through text-xl">R$ 497,00</span></p>
                <p class="text-5xl md:text-6xl font-black text-white mb-2">R$ 29,90</p>
                <p class="text-gray-300 mb-6">ou 3x de R$ 9,97 sem juros</p>

                <a href="https://pay.kiwify.com.br/45z4eoN" target="_blank" rel="noopener" class="btn-premium w-full text-center text-xl block">
                    ${icone} QUERO COMEÇAR AGORA
                </a>

                <div class="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <span class="flex items-center gap-1"><span class="text-green-400">✓</span> Acesso Vitalício</span>
                    <span class="flex items-center gap-1"><span class="text-green-400">✓</span> Garantia 7 Dias</span>
                    <span class="flex items-center gap-1"><span class="text-green-400">✓</span> Suporte WhatsApp</span>
                </div>
            </div>

            <p class="text-gray-500 text-sm">
                Se em 7 dias você não ver valor, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
        </div>
    </section>

    <!-- FAQ Específico -->
    <section class="py-16 border-t border-gray-800">
        <div class="container mx-auto px-4 max-w-3xl">
            <h2 class="text-3xl font-bold text-center mb-12">❓ Perguntas Frequentes</h2>

            <div class="space-y-4">
                <div class="glass-card p-6">
                    <h3 class="font-bold text-white mb-2">Funciona mesmo para ${nome.toLowerCase()}?</h3>
                    <p class="text-gray-400">Sim! Inclusive criamos este curso pensando nas dores específicas de ${nome.toLowerCase()}. Você vai aprender estratégias que seus concorrentes ainda não conhecem.</p>
                </div>
                <div class="glass-card p-6">
                    <h3 class="font-bold text-white mb-2">Preciso entender de tecnologia?</h3>
                    <p class="text-gray-400">Não! Se você sabe usar WhatsApp e Instagram no celular, consegue fazer o curso. Explicamos tudo passo a passo, como se estivéssemos do seu lado.</p>
                </div>
                <div class="glass-card p-6">
                    <h3 class="font-bold text-white mb-2">Quanto tempo até ver resultados?</h3>
                    <p class="text-gray-400">Depende da sua dedicação. Temos alunos que começaram a receber mensagens de clientes na primeira semana aplicando as técnicas de conteúdo e WhatsApp.</p>
                </div>
                <div class="glass-card p-6">
                    <h3 class="font-bold text-white mb-2">E se eu não gostar do curso?</h3>
                    <p class="text-gray-400">Você tem 7 dias de garantia incondicional. Se achar que o curso não é pra você, basta pedir reembolso e devolvemos 100% do valor. Sem burocracia.</p>
                </div>
                <div class="glass-card p-6">
                    <h3 class="font-bold text-white mb-2">Por que tão barato?</h3>
                    <p class="text-gray-400">Porque nosso objetivo é ajudar o maior número possível de profissionais. Preferimos vender mais barato e impactar mais vidas do que cobrar caro e ficar restrito.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Urgência Final -->
    <section class="py-12 bg-gradient-to-r from-red-900/20 to-yellow-900/20 border-t border-b border-yellow-500/30">
        <div class="container mx-auto px-4 text-center">
            <p class="text-2xl font-bold text-yellow-400 mb-4">⏰ Não deixe pra depois</p>
            <p class="text-gray-300 max-w-2xl mx-auto mb-6">Cada dia que passa é um cliente que vai pro concorrente. O preço de R$ 29,90 é promocional e pode aumentar a qualquer momento.</p>
            <a href="https://pay.kiwify.com.br/45z4eoN" target="_blank" rel="noopener" class="btn-premium text-lg">
                ${icone} GARANTIR MINHA VAGA POR R$ 29,90
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <div class="container mx-auto px-4">
            <p class="mb-2">Curso de Marketing Digital para ${nome}</p>
            <p>&copy; 2026 Cursos Certificados. Todos os direitos reservados.</p>
            <p class="mt-4">
                <a href="../curso-marketing-digital.html" class="text-blue-400 hover:underline">Ver página principal do curso</a>
            </p>
        </div>
    </footer>

</body>
</html>`;
}

// Criar pasta se não existir
const pastaDestino = path.join(__dirname, 'nichos');
if (!fs.existsSync(pastaDestino)) {
    fs.mkdirSync(pastaDestino, { recursive: true });
}

// Gerar todas as páginas
console.log('Gerando páginas de nichos com DORES ESPECÍFICAS...\n');

nichos.forEach((nicho, index) => {
    const conteudo = gerarPagina(nicho);
    const nomeArquivo = 'curso-marketing-digital-' + nicho.slug + '.html';
    const caminhoCompleto = path.join(pastaDestino, nomeArquivo);

    fs.writeFileSync(caminhoCompleto, conteudo, 'utf8');
    console.log((index + 1) + '/' + nichos.length + ' - ' + nicho.icone + ' ' + nicho.nome + ' ✓');
});

console.log('\n✅ ' + nichos.length + ' páginas de nichos geradas com DORES ESPECÍFICAS!');
console.log('📁 Local: ' + pastaDestino);

// Gerar sitemap dos nichos
let sitemapNichos = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapNichos += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
nichos.forEach(n => {
    sitemapNichos += '    <url>\n';
    sitemapNichos += '        <loc>https://rhaideline.github.io/cursoweb/nichos/curso-marketing-digital-' + n.slug + '.html</loc>\n';
    sitemapNichos += '        <lastmod>2026-01-02</lastmod>\n';
    sitemapNichos += '        <changefreq>monthly</changefreq>\n';
    sitemapNichos += '        <priority>0.8</priority>\n';
    sitemapNichos += '    </url>\n';
});
sitemapNichos += '</urlset>';

fs.writeFileSync(path.join(__dirname, 'sitemap-nichos.xml'), sitemapNichos, 'utf8');
console.log('\n📄 Sitemap atualizado: sitemap-nichos.xml');
