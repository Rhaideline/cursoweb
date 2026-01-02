const fs = require('fs');
const path = require('path');

// Nichos profissionais com alto potencial de conversão
const nichos = [
  // SAÚDE E BEM-ESTAR
  { nome: "Dentistas", slug: "dentistas", icone: "🦷", dor: "lotando sua agenda de pacientes particulares", resultado: "atrair pacientes que pagam bem por procedimentos estéticos" },
  { nome: "Médicos", slug: "medicos", icone: "👨‍⚕️", dor: "atraindo mais pacientes particulares", resultado: "construir autoridade e lotar sua agenda" },
  { nome: "Nutricionistas", slug: "nutricionistas", icone: "🥗", dor: "conquistando clientes online", resultado: "vender consultas e programas alimentares pela internet" },
  { nome: "Psicólogos", slug: "psicologos", icone: "🧠", dor: "captando pacientes para terapia online", resultado: "lotar sua agenda com atendimentos online" },
  { nome: "Fisioterapeutas", slug: "fisioterapeutas", icone: "💪", dor: "atraindo mais pacientes", resultado: "divulgar seus serviços e lotar sua agenda" },
  { nome: "Personal Trainers", slug: "personal-trainers", icone: "🏋️", dor: "conseguindo mais alunos", resultado: "vender treinos online e presenciais" },
  { nome: "Esteticistas", slug: "esteticistas", icone: "💆", dor: "lotando sua agenda", resultado: "atrair clientes para procedimentos estéticos" },
  { nome: "Farmacêuticos", slug: "farmaceuticos", icone: "💊", dor: "divulgando sua farmácia", resultado: "aumentar as vendas da sua farmácia" },

  // DIREITO E CONTABILIDADE
  { nome: "Advogados", slug: "advogados", icone: "⚖️", dor: "captando mais clientes", resultado: "atrair clientes qualificados pela internet" },
  { nome: "Contadores", slug: "contadores", icone: "📊", dor: "conquistando mais clientes", resultado: "vender serviços contábeis online" },

  // BELEZA E ESTÉTICA
  { nome: "Cabeleireiros", slug: "cabeleireiros", icone: "💇", dor: "lotando seu salão", resultado: "atrair clientes fiéis para seu salão" },
  { nome: "Manicures", slug: "manicures", icone: "💅", dor: "conquistando mais clientes", resultado: "lotar sua agenda de serviços" },
  { nome: "Maquiadores", slug: "maquiadores", icone: "💄", dor: "atraindo mais clientes", resultado: "ser requisitado para eventos e ensaios" },
  { nome: "Designers de Sobrancelha", slug: "designers-sobrancelha", icone: "👁️", dor: "lotando sua agenda", resultado: "atrair clientes para micropigmentação e design" },
  { nome: "Barbeiros", slug: "barbeiros", icone: "✂️", dor: "lotando sua barbearia", resultado: "fidelizar clientes e aumentar o ticket médio" },

  // ALIMENTAÇÃO
  { nome: "Confeiteiros", slug: "confeiteiros", icone: "🎂", dor: "vendendo mais bolos e doces", resultado: "receber encomendas todos os dias" },
  { nome: "Chefs e Cozinheiros", slug: "chefs", icone: "👨‍🍳", dor: "divulgando seu trabalho", resultado: "vender marmitas, cursos ou serviços de buffet" },
  { nome: "Donos de Restaurante", slug: "restaurantes", icone: "🍽️", dor: "atraindo mais clientes", resultado: "lotar seu restaurante com delivery e presencial" },
  { nome: "Food Trucks", slug: "food-trucks", icone: "🚚", dor: "conquistando mais clientes", resultado: "ser encontrado e vender mais" },

  // EDUCAÇÃO
  { nome: "Professores", slug: "professores", icone: "📚", dor: "vendendo aulas particulares", resultado: "criar renda extra com aulas online" },
  { nome: "Professores de Idiomas", slug: "professores-idiomas", icone: "🌍", dor: "captando alunos online", resultado: "dar aulas para alunos do mundo todo" },
  { nome: "Tutores e Mentores", slug: "tutores", icone: "🎓", dor: "encontrando mais alunos", resultado: "construir autoridade e vender mentorias" },

  // SERVIÇOS PARA CASA
  { nome: "Arquitetos", slug: "arquitetos", icone: "🏠", dor: "conquistando mais projetos", resultado: "atrair clientes de alto padrão" },
  { nome: "Designers de Interiores", slug: "designers-interiores", icone: "🛋️", dor: "atraindo mais clientes", resultado: "fechar projetos pela internet" },
  { nome: "Corretores de Imóveis", slug: "corretores-imoveis", icone: "🔑", dor: "gerando mais leads", resultado: "vender e alugar mais imóveis" },
  { nome: "Eletricistas", slug: "eletricistas", icone: "⚡", dor: "sendo encontrado por clientes", resultado: "receber chamados todos os dias" },
  { nome: "Encanadores", slug: "encanadores", icone: "🔧", dor: "conseguindo mais serviços", resultado: "ter agenda cheia de serviços" },
  { nome: "Pintores", slug: "pintores", icone: "🎨", dor: "conquistando mais obras", resultado: "fechar orçamentos pela internet" },
  { nome: "Jardineiros e Paisagistas", slug: "jardineiros", icone: "🌱", dor: "encontrando mais clientes", resultado: "ter clientes fixos e recorrentes" },

  // PETS
  { nome: "Veterinários", slug: "veterinarios", icone: "🐕", dor: "atraindo mais tutores", resultado: "lotar sua clínica veterinária" },
  { nome: "Pet Shops", slug: "pet-shops", icone: "🐾", dor: "aumentando as vendas", resultado: "vender mais produtos e serviços pet" },
  { nome: "Adestradores", slug: "adestradores", icone: "🦮", dor: "conseguindo mais clientes", resultado: "ser referência em adestramento" },
  { nome: "Dog Walkers", slug: "dog-walkers", icone: "🐕‍🦺", dor: "lotando sua agenda", resultado: "ter clientes fixos todos os dias" },

  // AUTOMOTIVO
  { nome: "Mecânicos", slug: "mecanicos", icone: "🔧", dor: "atraindo mais clientes", resultado: "lotar sua oficina de serviços" },
  { nome: "Estética Automotiva", slug: "estetica-automotiva", icone: "🚗", dor: "conquistando mais clientes", resultado: "ter agenda cheia de polimentos e detalhamentos" },
  { nome: "Auto Escolas", slug: "auto-escolas", icone: "🚙", dor: "captando mais alunos", resultado: "matricular mais alunos todo mês" },

  // EVENTOS E CRIATIVIDADE
  { nome: "Fotógrafos", slug: "fotografos", icone: "📸", dor: "conseguindo mais ensaios e eventos", resultado: "ser requisitado para casamentos e ensaios" },
  { nome: "Videomakers", slug: "videomakers", icone: "🎬", dor: "fechando mais projetos", resultado: "produzir vídeos para empresas e eventos" },
  { nome: "DJs", slug: "djs", icone: "🎧", dor: "sendo contratado para eventos", resultado: "tocar em festas e eventos todo fim de semana" },
  { nome: "Decoradores de Festas", slug: "decoradores-festas", icone: "🎈", dor: "fechando mais contratos", resultado: "decorar festas toda semana" },
  { nome: "Cerimonialistas", slug: "cerimonialistas", icone: "💒", dor: "captando mais eventos", resultado: "ser referência em casamentos e formaturas" },

  // MODA E VESTUÁRIO
  { nome: "Costureiras", slug: "costureiras", icone: "🧵", dor: "conseguindo mais clientes", resultado: "ter encomendas toda semana" },
  { nome: "Lojas de Roupas", slug: "lojas-roupas", icone: "👗", dor: "vendendo mais", resultado: "vender online e na loja física" },
  { nome: "Consultores de Imagem", slug: "consultores-imagem", icone: "👔", dor: "captando clientes", resultado: "transformar pessoas através do estilo" },

  // NEGÓCIOS E EMPREENDEDORISMO
  { nome: "MEI e Microempreendedores", slug: "mei", icone: "💼", dor: "divulgando seu negócio", resultado: "vender mais gastando pouco" },
  { nome: "Donos de E-commerce", slug: "e-commerce", icone: "🛒", dor: "aumentando as vendas", resultado: "vender mais na sua loja virtual" },
  { nome: "Afiliados Digitais", slug: "afiliados", icone: "💰", dor: "fazendo suas primeiras vendas", resultado: "viver de comissões na internet" },
  { nome: "Infoprodutores", slug: "infoprodutores", icone: "📱", dor: "lançando seu produto digital", resultado: "criar e vender cursos online" },
  { nome: "Coaches", slug: "coaches", icone: "🎯", dor: "captando coachees", resultado: "lotar sua agenda de sessões" },
  { nome: "Consultores", slug: "consultores", icone: "📋", dor: "encontrando mais clientes", resultado: "vender consultorias de alto valor" },

  // CARREIRAS
  { nome: "Quem Quer Sair do CLT", slug: "sair-do-clt", icone: "🚀", dor: "conquistando liberdade financeira", resultado: "largar o emprego e trabalhar para si mesmo" },
  { nome: "Quem Busca Renda Extra", slug: "renda-extra", icone: "💵", dor: "ganhando dinheiro nas horas vagas", resultado: "ter uma renda extra todo mês" },
  { nome: "Desempregados", slug: "desempregados", icone: "🔄", dor: "voltando ao mercado de trabalho", resultado: "criar sua própria fonte de renda" },
  { nome: "Aposentados", slug: "aposentados", icone: "👴", dor: "complementando a aposentadoria", resultado: "ter renda extra trabalhando de casa" },
  { nome: "Mães que Trabalham em Casa", slug: "maes", icone: "👩‍👧", dor: "conciliando filhos e trabalho", resultado: "ganhar dinheiro sem sair de casa" },
  { nome: "Estudantes", slug: "estudantes", icone: "🎒", dor: "ganhando dinheiro enquanto estuda", resultado: "iniciar carreira em marketing digital" },
  { nome: "Iniciantes em Marketing Digital", slug: "iniciantes", icone: "🌟", dor: "começando do zero", resultado: "dominar marketing digital e faturar" },

  // PROFISSÕES DE MARKETING
  { nome: "Quem Quer Ser Gestor de Tráfego", slug: "gestor-trafego", icone: "📈", dor: "aprendendo tráfego pago", resultado: "ganhar R$ 5.000 a R$ 20.000/mês gerenciando anúncios" },
  { nome: "Quem Quer Ser Social Media", slug: "social-media", icone: "📱", dor: "aprendendo a gerenciar redes sociais", resultado: "ganhar dinheiro cuidando de perfis de empresas" },
  { nome: "Quem Quer Ser Copywriter", slug: "copywriter", icone: "✍️", dor: "aprendendo a escrever textos que vendem", resultado: "ganhar dinheiro escrevendo para empresas" },
  { nome: "Quem Quer Ser Freelancer", slug: "freelancer", icone: "💻", dor: "trabalhando de qualquer lugar", resultado: "ter liberdade geográfica e financeira" }
];

function gerarPagina(nicho) {
  const { nome, slug, icone, dor, resultado } = nicho;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO Meta Tags -->
    <title>Curso de Marketing Digital para ${nome} | R$ 29,90 | Certificado</title>
    <meta name="description" content="Curso de Marketing Digital para ${nome}. Aprenda a divulgar seu trabalho e ${resultado}. Apenas R$ 29,90 com certificado reconhecido!">
    <meta name="keywords" content="marketing digital para ${nome.toLowerCase()}, como divulgar ${nome.toLowerCase()}, ${nome.toLowerCase()} marketing, curso marketing ${nome.toLowerCase()}">
    <link rel="canonical" href="https://rhaideline.github.io/cursoweb/nichos/curso-marketing-digital-${slug}.html">

    <!-- Open Graph -->
    <meta property="og:title" content="Curso de Marketing Digital para ${nome} | R$ 29,90">
    <meta property="og:description" content="Aprenda marketing digital e ${resultado}. De R$ 497 por apenas R$ 29,90.">
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
    </style>

    <!-- Schema.org -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Curso de Marketing Digital para ${nome}",
        "description": "Curso completo de Marketing Digital para ${nome}. Aprenda a ${resultado}.",
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

                <!-- Headline com DOR -->
                <h1 class="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    <span class="text-white">${nome}:</span><br>
                    <span class="text-red-400">Cansado de Depender de Indicação?</span>
                </h1>

                <p class="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                    Descubra como <strong class="text-white">${nome.toLowerCase()}</strong> estão <span class="text-green-400 font-bold">${dor}</span> usando Marketing Digital
                </p>

                <p class="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-semibold">
                    Aprenda a <span class="gradient-text">${resultado}</span> mesmo sem experiência com tecnologia
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
                    ${icone} QUERO APRENDER MARKETING DIGITAL
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

    <!-- Problemas do Nicho -->
    <section class="py-16 border-t border-gray-800">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
                ${icone} Você se Identifica com Isso?
            </h2>
            <p class="text-center text-gray-400 mb-12">Problemas comuns de ${nome.toLowerCase()} que não usam marketing digital</p>

            <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div class="glass-card p-6 border-l-4 border-red-500">
                    <p class="text-white"><span class="text-red-400 font-bold">✗</span> Depende só de indicação para conseguir clientes</p>
                </div>
                <div class="glass-card p-6 border-l-4 border-red-500">
                    <p class="text-white"><span class="text-red-400 font-bold">✗</span> Vê concorrentes crescendo e não sabe como</p>
                </div>
                <div class="glass-card p-6 border-l-4 border-red-500">
                    <p class="text-white"><span class="text-red-400 font-bold">✗</span> Posta nas redes sociais mas ninguém engaja</p>
                </div>
                <div class="glass-card p-6 border-l-4 border-red-500">
                    <p class="text-white"><span class="text-red-400 font-bold">✗</span> Não sabe como aparecer para clientes certos</p>
                </div>
                <div class="glass-card p-6 border-l-4 border-red-500">
                    <p class="text-white"><span class="text-red-400 font-bold">✗</span> Gasta dinheiro em propaganda que não funciona</p>
                </div>
                <div class="glass-card p-6 border-l-4 border-red-500">
                    <p class="text-white"><span class="text-red-400 font-bold">✗</span> Agenda vazia ou com altos e baixos</p>
                </div>
            </div>

            <div class="text-center mt-10">
                <p class="text-xl text-green-400 font-bold">Este curso vai resolver TODOS esses problemas!</p>
            </div>
        </div>
    </section>

    <!-- O Que Vai Aprender -->
    <section class="py-16 border-t border-gray-800 bg-gradient-to-b from-transparent to-blue-900/10">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
                O Que Você Vai Aprender
            </h2>
            <p class="text-center text-gray-400 mb-12">Conteúdo adaptado para a realidade de ${nome.toLowerCase()}</p>

            <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-blue-400 mb-4">📱 Redes Sociais</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Como criar conteúdo que atrai clientes</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Instagram e Facebook para ${nome.toLowerCase()}</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> O que postar para gerar engajamento</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Hashtags e horários certos</li>
                    </ul>
                </div>
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-green-400 mb-4">💰 Vendas Online</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Como transformar seguidores em clientes</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> WhatsApp Business para fechar vendas</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Textos persuasivos (copywriting)</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Funil de vendas simples</li>
                    </ul>
                </div>
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-yellow-400 mb-4">📈 Tráfego Pago</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Anúncios no Facebook e Instagram</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Google Ads para ${nome.toLowerCase()}</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Como investir pouco e ter retorno</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Aparecer para clientes da sua região</li>
                    </ul>
                </div>
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold text-purple-400 mb-4">🎯 Estratégia</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Como se posicionar como referência</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Definir seu público-alvo ideal</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Planejamento de conteúdo mensal</li>
                        <li class="flex items-center gap-2"><span class="text-green-400">✓</span> Análise de resultados</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Resultados -->
    <section class="py-16 border-t border-gray-800">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
                ${icone} O Que Você Vai Conquistar
            </h2>

            <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div class="text-center">
                    <div class="text-5xl mb-4">📱</div>
                    <h3 class="text-xl font-bold text-white mb-2">Presença Online Profissional</h3>
                    <p class="text-gray-400">Perfil que transmite credibilidade e atrai clientes certos</p>
                </div>
                <div class="text-center">
                    <div class="text-5xl mb-4">👥</div>
                    <h3 class="text-xl font-bold text-white mb-2">Mais Clientes</h3>
                    <p class="text-gray-400">Fluxo constante de pessoas interessadas no seu trabalho</p>
                </div>
                <div class="text-center">
                    <div class="text-5xl mb-4">💰</div>
                    <h3 class="text-xl font-bold text-white mb-2">Mais Faturamento</h3>
                    <p class="text-gray-400">Aumento real na sua renda mensal</p>
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
                    <p class="text-sm text-gray-400">Adaptadas para ${nome.toLowerCase()}</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">🎨 50 Templates Canva</h4>
                    <p class="text-sm text-gray-400">Artes prontas para usar</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">📊 Planilha de Planejamento</h4>
                    <p class="text-sm text-gray-400">Organize suas postagens</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">💬 Scripts WhatsApp</h4>
                    <p class="text-sm text-gray-400">Mensagens que convertem</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">✅ Checklist de Lançamento</h4>
                    <p class="text-sm text-gray-400">Passo a passo completo</p>
                </div>
                <div class="glass-card p-5 border-l-4 border-yellow-500">
                    <h4 class="font-bold text-white mb-2">🏆 Certificado 40h</h4>
                    <p class="text-sm text-gray-400">Reconhecido nacionalmente</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 border-t border-gray-800">
        <div class="container mx-auto px-4 text-center">
            <p class="text-xl text-yellow-400 font-bold mb-4">⚠️ OFERTA ESPECIAL PARA ${nome.toUpperCase()}</p>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                Comece Hoje a ${resultado.charAt(0).toUpperCase() + resultado.slice(1)}
            </h2>

            <div class="glass-card p-8 max-w-lg mx-auto mb-8 border border-green-500/30">
                <p class="text-gray-400 mb-2">De <span class="line-through text-xl">R$ 497,00</span></p>
                <p class="text-5xl md:text-6xl font-black text-white mb-2">R$ 29,90</p>
                <p class="text-gray-300 mb-6">ou 3x de R$ 9,97 sem juros</p>

                <a href="https://pay.kiwify.com.br/45z4eoN" target="_blank" rel="noopener" class="btn-premium w-full text-center text-xl block">
                    ${icone} GARANTIR MINHA VAGA AGORA
                </a>

                <div class="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <span class="flex items-center gap-1"><span class="text-green-400">✓</span> Acesso Vitalício</span>
                    <span class="flex items-center gap-1"><span class="text-green-400">✓</span> Garantia 7 Dias</span>
                    <span class="flex items-center gap-1"><span class="text-green-400">✓</span> Suporte WhatsApp</span>
                </div>
            </div>

            <p class="text-gray-500 text-sm">
                Investimento menor que um almoço para transformar seu negócio
            </p>
        </div>
    </section>

    <!-- FAQ Específico -->
    <section class="py-16 border-t border-gray-800">
        <div class="container mx-auto px-4 max-w-3xl">
            <h2 class="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>

            <div class="space-y-4">
                <div class="glass-card p-6">
                    <h3 class="font-bold text-white mb-2">Funciona mesmo para ${nome.toLowerCase()}?</h3>
                    <p class="text-gray-400">Sim! O conteúdo é aplicável para qualquer profissão. Você vai aprender os fundamentos e como adaptar para sua realidade.</p>
                </div>
                <div class="glass-card p-6">
                    <h3 class="font-bold text-white mb-2">Preciso entender de tecnologia?</h3>
                    <p class="text-gray-400">Não! O curso é feito para iniciantes. Explicamos tudo passo a passo, do básico ao avançado.</p>
                </div>
                <div class="glass-card p-6">
                    <h3 class="font-bold text-white mb-2">Quanto tempo leva para ter resultados?</h3>
                    <p class="text-gray-400">Depende da sua dedicação, mas muitos alunos começam a ver resultados nas primeiras semanas aplicando as estratégias.</p>
                </div>
                <div class="glass-card p-6">
                    <h3 class="font-bold text-white mb-2">E se eu não gostar?</h3>
                    <p class="text-gray-400">Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <div class="container mx-auto px-4">
            <p class="mb-2">Curso de Marketing Digital para ${nome}</p>
            <p>&copy; 2026 Cursos Certificados. Todos os direitos reservados.</p>
            <p class="mt-4">
                <a href="../curso-marketing-digital.html" class="text-blue-400 hover:underline">Ver página principal</a>
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
console.log('Gerando páginas de nichos profissionais...\n');

nichos.forEach((nicho, index) => {
    const conteudo = gerarPagina(nicho);
    const nomeArquivo = 'curso-marketing-digital-' + nicho.slug + '.html';
    const caminhoCompleto = path.join(pastaDestino, nomeArquivo);

    fs.writeFileSync(caminhoCompleto, conteudo, 'utf8');
    console.log((index + 1) + '/' + nichos.length + ' - ' + nicho.icone + ' ' + nicho.nome + ' ✓');
});

console.log('\n✅ ' + nichos.length + ' páginas de nichos geradas com sucesso!');
console.log('📁 Local: ' + pastaDestino);

// Gerar sitemap dos nichos
let sitemapNichos = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapNichos += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
nichos.forEach(n => {
    sitemapNichos += '    <url>\n';
    sitemapNichos += '        <loc>https://rhaideline.github.io/cursoweb/nichos/curso-marketing-digital-' + n.slug + '.html</loc>\n';
    sitemapNichos += '        <lastmod>2026-01-01</lastmod>\n';
    sitemapNichos += '        <changefreq>monthly</changefreq>\n';
    sitemapNichos += '        <priority>0.8</priority>\n';
    sitemapNichos += '    </url>\n';
});
sitemapNichos += '</urlset>';

fs.writeFileSync(path.join(__dirname, 'sitemap-nichos.xml'), sitemapNichos, 'utf8');
console.log('\n📄 Sitemap gerado: sitemap-nichos.xml');
