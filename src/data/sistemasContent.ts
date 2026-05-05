// Content data for the Sistemas page - organized by system > subcategory

export interface ContentSection {
  intro?: string;
  items: ContentItem[];
}

export interface ContentItem {
  name: string;
  description?: string;
  details?: string[];
  subitems?: ContentItem[];
}

export const SISTEMAS_CONTENT: Record<string, Record<string, ContentSection>> = {
  "Criação de Personagem": {
    "Raças": {
      intro: "No universo de One Piece, existe uma vasta diversidade de raças, cada qual possuindo características únicas. No RPG, algumas dessas raças foram introduzidas para que os jogadores possam escolhê-las. Ao longo do desenvolvimento do RPG, certas raças passaram por adaptações e alterações para melhor se adequarem ao sistema e à narrativa.",
      items: [
        {
          name: "Três Olhos",
          description: "A tribo dos Três Olhos é uma das raças mais misteriosas e raras do mundo de One Piece. Até agora, a representante mais conhecida na obra é a Charlotte Pudding. Fisicamente, os membros desta tribo são idênticos aos humanos comuns, com uma única e marcante exceção: um terceiro olho localizado verticalmente no centro da testa.",
          details: [
            "350 Força",
            "400 Agilidade",
            "400 Destreza",
            "350 Resistência",
            "1.500 Haki",
            "Conseguem ouvir a voz de todas as coisas, podendo ler Poneglyph."
          ]
        },
        {
          name: "Humanos",
          description: "A raça com maior presença efetiva no universo de One Piece, conhecida por sua grande determinação e força de vontade. Apesar de apresentar notável capacidade evolutiva no que se refere às perícias técnicas e corporais, é considerada fisicamente mais fraca em comparação à maioria das demais raças.",
          details: [
            "350 Força",
            "400 Agilidade",
            "400 Destreza",
            "350 Resistência",
            "1.500 Haki",
            "Kenbunshoku ou Bunsoshoko - (1.3x)"
          ]
        },
        {
          name: "Amazonas",
          description: "É a Tribo de todas as guerreiras encontradas na ilha de Amazon Lilly. São biologicamente idênticas às mulheres humanas normais, embora esteja implícito que elas têm uma melhor compreensão intuitiva do Haki. Assim como elas têm conhecimento limitado sobre os homens, da mesma forma o resto do mundo parece saber pouco sobre elas.",
          details: [
            "500 Força",
            "600 Agilidade",
            "400 Destreza",
            "500 Resistência",
            "1.000 Haki",
            "Bunsoshoko - (1.3x)"
          ]
        },
        {
          name: "Tontattas",
          description: "Os Tontattas são minúsculos, cabendo facilmente na palma da mão de um humano. Eles possuem narizes pontudos e uma cauda peluda que lembra a de um esquilo ou raposa. Os Tontattas são uma das raças mais carismáticas e surpreendentes de One Piece. Habitantes do Reino Tontatta em Green Bit (próximo a Dressrosa), eles são conhecidos como \"anões\", mas não se engane pelo tamanho: eles são potências compactas.",
          details: [
            "500 Força",
            "600 Agilidade",
            "400 Destreza",
            "550 Resistência",
            "1.4x velocidade"
          ]
        },
        {
          name: "Minks",
          description: "Uma raça composta de humanóides com características animais, cada individuo com características de um animal diferente, semelhante aos Homems-Peixes. Eles vivem em Zou e têm ficado isolados lá por 1.000 anos.",
          details: [
            "1.000 Força",
            "1.000 Agilidade",
            "500 Destreza",
            "500 Resistência",
            "Em qualquer atributo sendo avaliado através do Tipo de Mink - (1.3x)"
          ]
        },
        {
          name: "Gigantes",
          description: "Gigantes são uma raça de seres que vastamente superam as outras raças conhecidas no mundo em tamanho. Eles são literalmente gigantes humanos na aparência, embora muitos gigantes vistos foram descritos como sendo de proporções exageradas e mais recursos do que a maioria dos seres humanos. Possuem grande resistência física e poder destrutivo.",
          details: [
            "1.000 Força",
            "2.000 Resistência",
            "Resistência - (1.3x)"
          ]
        },
        {
          name: "Tritões",
          description: "São uma das duas espécies humanóides que habitam e governam os mares. São mais parecidos com peixes do que os sereianos, geralmente parecendo uma combinação entre um homem e uma criatura aquática. Dependendo da espécie, eles podem ter vários membros adicionais.",
          details: [
            "1.000 Força",
            "500 Agilidade",
            "500 Destreza",
            "1.000 Resistência",
            "Força ou Destreza - (1.3x)",
            "Buff na água: (1.4x) em velocidade e outro atributo físico a sua escolha, não é possível combinar os dois buff."
          ]
        },
        {
          name: "Sereianos",
          description: "Sereianos são uma das duas principais raças que habitam o mar. Como as sereias do folclore, sua metade superior é a de um humano, enquanto a metade inferior é a de um peixe ou outra criatura submarina. Possuem a capacidade de falar com os animais marinhos.",
          details: [
            "1.000 Força",
            "500 Agilidade",
            "1.000 Destreza",
            "500 Resistência",
            "Destreza - (1.3x)",
            "Buff na água: (1.4x) em velocidade e outro atributo físico a sua escolha, não é possível combinar os dois buff."
          ]
        },
        {
          name: "⚠️ Raças Exclusivas",
          description: "Adentraremos agora a seção de raças exclusivas. Até então, as raças já apresentadas são classificadas como \"Comuns\" dentro do RPG. Estas, porém, tratam-se de raças especiais e, como consequência, a quantidade de indivíduos que poderão ocupá-las será devidamente limitada, a fim de preservar a coerência dentro do RPG."
        },
        {
          name: "Lunarian",
          description: "Os Lunares são uma raça de pessoas da Red Line com capacidade de criar fogo de seus corpos. A raça é comumente considerada extinta, com apenas alguns sobreviventes. Os lunares possuem alguns traços distintivos, um par de asas plumadas negras nas costas, cabelos brancos e pele morena. Além disso, os lunares têm uma nuvem de fogo visível, que queima de forma quase constante na parte superior das costas, embora se apague em certos momentos. Os lunares eram conhecidos como uma tribo de \"deuses\" enquanto moravam no topo da Red Line. No entanto, sob circunstâncias ainda desconhecidas, os lunares quase foram extintos.",
          details: [
            "1.000 Força",
            "1.500 Agilidade",
            "2.000 Resistência",
            "CHAMAS ACESAS: Força ou Destreza - (1.3x) / Resistência - (1.5x)",
            "CHAMAS APAGADAS: Força ou Destreza - (1.4x) / Agilidade - (1.5x)"
          ]
        },
        {
          name: "Oni",
          description: "É uma raça caracterizada por sua notável força e resistência. Possui poucos exemplares vivos conhecidos, geralmente distinguida por um par de chifres e por um imenso poder destrutivo.",
          details: [
            "2.500 Força",
            "2.000 Resistência",
            "1.5x Força",
            "1.4x Resistência",
            "HP - (+40%)"
          ]
        },
        {
          name: "Bucaneiro",
          description: "Os Bucaneiros são uma raça especial quase extinta de humanoides, mais altos que os humanos comuns, mas menores que os gigantes, parecem quase idênticos aos humanos, embora tenham uma aparência de tamanho grande, em média. Eles não podem ser facilmente distinguidos de humanos altos sem um exame de sangue.",
          details: [
            "1.500 Força",
            "1.000 Resistência",
            "1.500 Haki",
            "1.3x Força",
            "1.5x Resistência",
            "1.3x Haki geral"
          ]
        },
        {
          name: "Gigante Ancestral",
          description: "Trata-se de uma raça antiga cujo tamanho ultrapassa o dos gigantes comuns. Portadores de presas e chifres, destacam-se por uma resistência extraordinária, muito superior à das demais raças. Seu tamanho pode chegar a 80 metros, tornando-os seres de poder destrutivo avassalador.",
          details: [
            "2.500 Força",
            "2.500 Resistência",
            "1.6x Força",
            "1.6x Resistência",
            "HP - (+40%)",
            "Debuff - Speed (-40%)"
          ]
        }
      ]
    },
    "Estilos de Luta": {
      intro: "Dentro do universo de One Piece, existem dezenas de estilos marciais distintos, cada um contribuindo para a identidade e o estilo de combate de seus personagens. No RPG, alguns desses estilos foram incorporados para que os jogadores possam usufruir de habilidades e técnicas específicas.",
      items: [
        {
          name: "Aikido",
          description: "Um estilo Pacífico porém eficaz, focado em redirecionar a força do oponente usando sua próprio inércia. Com técnicas de projeção, torções e controle corporal, o usuário derrota o adversário sem necessariamente causar ferimentos severos, aproveitando a fluidez do combate.",
          details: ["500 em Força", "500 em Destreza"]
        },
        {
          name: "Atirador Style",
          description: "Estilo Atirador é focado em velocidade e precisão, priorizando disparos rápidos e letais em vez de força bruta. Seus usuários atingem alvos próximos ou distantes com exatidão, eliminando ameaças antes que se aproximem.",
          details: ["500 em Destreza", "500 em Velocidade"]
        },
        {
          name: "Arte do Tempo",
          description: "É um estilo de luta utilizado por Nami para suprir sua falta de força, utilizando uma arma chamada Clima-Tact. Há um total de 4 versões do Clima Tact, o primeiro é simples, os demais são focados em combate e ciência meteorológica. As técnicas e o dano variam conforme a destreza e o modelo do Clima Tact. Ao iniciar com esse estilo, você receberá o primeiro Clima-Tact.",
          details: [
            "LvL 1 - 200 (Inicial Clima Tact)",
            "LvL 201 - 300 (Perfect Clima Tact)",
            "LvL 301 - 550 (Sorcery Clima Tact)",
            "LvL 551+ (Grow-Up Clima Tact)"
          ]
        },
        {
          name: "Black Leg",
          description: "Esse estilo proíbe o uso das mãos e foca em chutes poderosos, rápidos e elegantes. Combina equilíbrio, rotação e força para desferir ataques devastadores com as pernas, mantendo as mãos livres para outras tarefas ou para proteger o estilo. No nível 100 o usuário pode aprender o Diable Jambe em uma perna que a deixa incandescente e quente por fricção tendo que girar para gerar calor na perna, fazendo 1 treino solo. No nível 150 o usuário aprende o Blue Walk e Sky Walk, que consiste em andar no ar ou em cima da água. No nível 250 o Diable Jambe passa a ser chamado de verdade, não precisando mais girar para ativá-la e agora pode utilizar nas duas pernas (1 treino solo para o avanço).",
          details: ["500 em Força", "1.000 em Speed", "1.000 em Destreza"]
        },
        {
          name: "Black Cat",
          description: "Um estilo que combina pura velocidade com furtividade. O usuário se torna tão furtivo a ponto de sumir da vista do alvo, tornando-se imperceptível à percepção humana comum. Também aumenta a velocidade com lâminas, sendo um estilo voltado para assassinatos ou ataques-relâmpago, muito bem utilizado com armas cortantes.",
          details: ["1.000 em Agilidade", "500 em Destreza"]
        },
        {
          name: "Bushido",
          description: "Estilo honrado dos samurais do País de Wano. Baseia-se em cortes precisos, disciplina, autocontrole e o respeito absoluto pela espada. Um verdadeiro seguidor do Bushido jamais ataca pelas costas, usa veneno ou desonra seu oponente. Eles conseguem ter empunhadura dupla, utilizar lança, machado, correntes, armaduras kabuto, foices e rifles simples.",
          details: ["500 em Força", "500 em Destreza"]
        },
        {
          name: "Combate Gigante",
          description: "Combate Gigante é um estilo de luta focado no uso de força bruta para causar dano massivo em larga escala. Seus golpes priorizam impacto, peso e potência, visando esmagar o inimigo e o ambiente ao redor, sem depender de técnica refinada ou precisão.",
          details: ["1.000 em Força", "1.000 em Resistência"]
        },
        {
          name: "Combate Water",
          description: "Estilo de combate usado por tritões e sereianos que manipula a água como arma tangível. Permite ataques de longo alcance com jatos de alta pressão e moldagem livre da água, sendo equivalente aquático ao Jujutsu/Karatê Tritão, porém com foco mais abrangente em controle hídrico.",
          details: ["500 em Destreza"]
        },
        {
          name: "Fencing Style",
          description: "Um estilo ágil e elegante baseado em estocadas rápidas e precisas com uma espada fina. O usuário se movimenta com leveza, atacando com velocidade e esquivando com estilo, priorizando a precisão ao invés da força bruta.",
          details: ["500 em Agilidade", "500 em Destreza"]
        },
        {
          name: "Freestyle",
          description: "Um estilo livre no qual o lutador se adapta a diversas formas de combate. É possível empunhar uma katana, atirar com um revólver, lutar com os próprios punhos ou até mesmo utilizar técnicas básicas de outros estilos marciais. Contudo, jamais alcançará perícia absoluta em uma área específica, permanecendo limitado ao conhecimento básico de cada forma de luta.",
          details: ["500 em Força", "500 em Destreza", "500 em Velocidade"]
        },
        {
          name: "Hasshoken",
          description: "Hasshoken é uma arte marcial usada pela Família Chinjao. Também é conhecido como Técnica dos 8 Impactos. Este estilo de luta permite ao usuário controlar as vibrações em torno de seus membros para gerar ondas de choque. Esta onda de choque é poderosa o suficiente para destruir um escudo de metal ou derrotar um homem forte facilmente. Estes ataques são impossíveis de bloquear e vibrantes, fazendo com que as defesas se quebrem. Uma possível fraqueza do estilo é a necessidade de contato físico. Esse estilo de luta pode ser usado com as pernas, ombros, punhos ou até mesmo com a cabeça.",
          details: ["1.500 em Força", "500 em Resistência"]
        },
        {
          name: "Ittoryuu / Nittoryuu / Santoryuu",
          description: "Ittoryuu: Um estilo clássico que utiliza apenas uma espada, focando em precisão, técnica refinada e golpes diretos. Nittoryuu: Usa uma espada em cada mão, equilibrando ataque e defesa com fluidez, combinando movimentos simultâneos e sincronizados. Santoryuu: Marca registrada de Zoro, é um estilo único onde o lutador empunha uma espada em cada mão e uma terceira na boca. Aumenta o poder ofensivo ao custo de um controle mais técnico, permitindo golpes de grande força e impacto. Consegue ter acesso a todas as técnicas do Zoro do Santoryu.",
          details: ["1.000 em Força", "500 em Agilidade", "500 em Destreza"]
        },
        {
          name: "Kung Fu",
          description: "Arte marcial milenar com variedade de formas e estilos inspirados em animais. Foca em equilíbrio, disciplina e precisão, alternando entre ataques fluídos, defesas sólidas e movimentos rítmicos. O Kung Fu é a mãe de todas as artes marciais. É possível utilizar armas como espadas chinesas e naginatas, mas isso só será possível se o usuário se abster das técnicas de combate físico.",
          details: ["500 em Força", "500 em Agilidade", "500 em Destreza"]
        },
        {
          name: "Kitsunebi-Ryu",
          description: "Um estilo em que o usuário inflama seu espírito e força de vontade, acendendo chamas intensas e poderosas para realizar cortes melhores e mais dolorosos. Utilizável apenas com lâminas. Sua técnica principal é cortar e dissipar qualquer chama ou fogo com um único corte limpo, inutilizando ataques flamejantes.",
          details: ["500 em Destreza", "500 em Haki"]
        },
        {
          name: "Karatê Tritão",
          description: "Arte marcial praticada por membros qualificados da raça homem-peixe. Mortífera tanto em terra quanto submersa, usa a força e a mobilidade da água. Segundo Jinbe, o segredo do Karatê Tritão é manipular toda a água próxima, até mesmo a do corpo do inimigo. Assim, é eficaz mesmo contra inimigos imunes a ataques físicos convencionais.",
          details: ["500 em Força", "500 em Destreza"]
        },
        {
          name: "Ninjutsu",
          description: "Técnicas secretas de combate furtivo, armadilhas, clones, bombas de fumaça e movimentos silenciosos. Os ninjas de Wano utilizam velocidade e truques para vencer o inimigo sem confronto direto, explorando o engano e a estratégia.",
          details: ["500 em Destreza", "500 em Agilidade"]
        },
        {
          name: "Punch Style",
          description: "Um estilo direto e agressivo focado exclusivamente nos punhos. O lutador usa força física bruta e técnicas derivadas do boxe ou socos concentrados para derrubar o inimigo rapidamente. Ideal para combates corpo a corpo. Esse estilo não pode utilizar armas de corte. No nível 100, em 1 treino o usuário libera o Diable Coup, girando seu corpo com os punhos cerrados deixa os punhos incandescentes para socar os inimigos e causar mais danos.",
          details: ["500 em Força", "500 em Resistência"]
        },
        {
          name: "Ryusoken",
          description: "Desenvolvido para simular as garras de um dragão, esse estilo transforma as mãos em armas perfurantes e esmagadoras. O usuário aplica pressão nos pontos vitais e utiliza golpes com forma de garra para romper defesas e causar danos internos pesados. Esse estilo não pode utilizar armas de corte.",
          details: ["500 em Força"]
        },
        {
          name: "Rokushiki",
          description: "Técnica de combate avançada usada por agentes do Governo Mundial e Marinha. Consiste em seis habilidades sobre-humanas: Soru (velocidade extrema), Geppo (andar no ar), Tekkai (endurecer o corpo), Shigan (dedo perfurante), Rankyaku (corte com o ar) e Kami-e (movimentos leves e evasivos). Juntas, tornam o usuário um guerreiro quase imbatível.",
          details: ["500 em Força", "500 em Speed"]
        },
        {
          name: "Raid Suit",
          description: "É o estilo necessário para utilizar e ter controle completo do traje da Germa Double Six, permitindo acrobacias com o traje, além de um \"freestyle\" para utilizar golpes corpo a corpo com o mesmo.",
          details: ["500 em Força", "500 em Agilidade", "500 em Destreza", "500 em Resistência"]
        },
        {
          name: "Rope Action",
          description: "Estilo criado pelos carpinteiros da Galley-La em Water Seven. O usuário guarda cordas ou correntes no corpo, usando-as como extensão dos braços para prender, cortar ou atacar. Combinável com outros estilos. Pode usar espadas nas pontas das correntes, como no estilo de Kratos em God of War.",
          details: ["500 em Força", "500 em Destreza"]
        },
        {
          name: "Sumô",
          description: "Estilo tradicional japonês que usa o peso e força corporal para derrubar o oponente. Foca em agarrões, empurrões e equilíbrio, visando tirar o inimigo de sua base ou jogá-lo ao chão com impactos brutais. Requer um corpo robusto e ótimo controle físico. A gordura do lutador de Sumô pode amortecer certos golpes, quanto mais gordura em seu corpo, mais resistente fica.",
          details: ["500 em Força", "500 em Resistência"]
        },
        {
          name: "Sword Style",
          description: "Esse estilo utiliza espadas grandes e pesadas de dois gumes, como montantes ou claymores. O estilo foca em força bruta, ataques largos e cortes massivos. Ideal para derrubar múltiplos inimigos ou romper defesas com puro impacto.",
          details: ["500 em Força"]
        },
        {
          name: "Music Style",
          description: "É um estilo utilizado por músicos que canalizam poderosas ondas sonoras através de instrumentos, podendo usá-los como armas. Inspira os companheiros com melodias durante o combate.",
          details: ["500 em Força", "500 em Destreza"]
        }
      ]
    },
    "Linhagens": {
      intro: "Dentro do RPG, será disponibilizada aos jogadores a possibilidade de descender de algumas das linhagens mais fortes de One Piece. Cada uma delas possui características especiais, concedendo bônus específicos que se somam à build final do personagem.",
      items: [
        {
          name: "Os D.",
          description: "O clã D. é um clã misterioso e lendário no mundo de One Piece. Eles são uma linhagem que tem sido objeto de grande interesse por parte do Governo Mundial, já que possuem uma conexão estreita com a história da criação do mundo e o relacionamento de seus membros com o poder da Vontade do Povo.",
          details: [
            "Vagas: [5/7] — Kashimo Nisshoku, Dexter Damnstar, Elena Fullock, Gura Stark, Yoru Velasquez",
            "1.5× em Haki Geral",
            "Precisa apenas da metade dos requisitos para tudo que envolve Haki, exceto no que se refere aos níveis e ao Haoshoku.",
            "História Mínima: 35 Linhas"
          ]
        },
        {
          name: "Figarland",
          description: "Tal clã possui um mistério inexplicável, a origem de seu surgimento ainda permanece um mistério mas se sabe de sua conexão nobre com o governo, quase como se fossem deuses modernos. Necessário explicar na história como se tornou pirata/marine.",
          details: [
            "Vagas: [4/4] — Helena Goldleaf Figarland, Fenroc Figarland, Park Figarland, Nyarla Zeppeli",
            "1.3x Velocidade",
            "1.3x Haki geral"
          ]
        },
        {
          name: "Kozuki",
          description: "A linhagem dos Kozuki é uma família nobre e antiga do país de Wano, uma das regiões mais isoladas e enigmáticas do mundo de One Piece. Eles são conhecidos por seu papel importante na história de Wano, por serem habilidosos em uma variedade de disciplinas, incluindo artes marciais, poesia e arquitetura.",
          details: [
            "Vagas: [0/5]",
            "1.4× em Destreza",
            "Inicia com uma Arma de Wano de grau desconhecido com dano de: 4000",
            "História Mínima: 25 Linhas"
          ]
        },
        {
          name: "Shimotsuki",
          description: "O clã Shimotsuki é uma família de samurais que vive no país de Wano, no mundo de One Piece. Eles são conhecidos por terem lutado ao lado dos Kozukis, outra família de samurais importantes de Wano, na defesa do país. Apesar de terem sido leais aos Kozukis, o Clã Shimotsuki acabou se separando deles e se mudando para a ilha de Kuri.",
          details: [
            "Vagas: [1/5] — Hēiwa",
            "1.2× em Destreza",
            "1.25× em Speed",
            "Inicia com uma Arma de Wano de grau desconhecido com dano de: 4000",
            "História Mínima: 25 Linhas"
          ]
        },
        {
          name: "Silvers",
          description: "Os Silvers possuem plenas habilidades combativas, sendo samurais ou espadachins, é um fato quase que absoluto que eles são formidáveis em manuseio com lâminas.",
          details: [
            "Vagas: [2/4] — Vórtex, Harumi",
            "1.4x em Destreza",
            "1.2x em Haki Geral",
            "Recebem +1.000 de dano base em qualquer arma de lâmina que usem."
          ]
        },
        {
          name: "Charlotte",
          description: "Os membros do Clã Charlotte são conhecidos por serem muito fortes e habilidosos, com diferentes habilidades e personalidades. Além disso, o clã também é conhecido por ser cruel e impiedoso, com seus membros não hesitando em matar ou ferir aqueles que se opõem a sua causa.",
          details: [
            "Vagas: [2/4] — Catastrophe, Kuro",
            "1.3× em Força ou Resistência",
            "Os membros da família Charlotte podem ser Híbridos, pegando o melhor de 2 raças, inclusive seus buffs.",
            "História Mínima: 25 Linhas"
          ]
        },
        {
          name: "Donquixote",
          description: "São conhecidos por serem extremamente estratégicos e astutos, bem como por sua habilidade em manipulação. Eles são capazes de controlar a opinião pública e têm influência sobre vários países e líderes de todo o mundo. Os Donquixotes são conhecidos por seu estilo de vida luxuoso, com mansões elaboradas e roupas caras. Eles detêm forte controle na Ilha de Dressrosa, onde possuem muitos cidadãos sob seu poder.",
          details: [
            "Vagas: [2/5] — Kozuki, Kiaro",
            "1.2× em Haki",
            "1.2× em Destreza",
            "Os membros dessa família têm desconto de 35% na loja e 50% em uma única compra do mercado negro.",
            "História Mínima: 25 Linhas"
          ]
        },
        {
          name: "Vinsmoke",
          description: "O poder militar da família é impressionante, com cada um dos irmãos Vinsmoke liderando sua própria tropa de soldados. Eles são especializados em tecnologia avançada e possuem armas e armaduras altamente avançadas. Além disso, a Família Vinsmoke tem várias conexões importantes com o submundo da pirataria e com a nobreza dos quatro mares. Os Membros da família Vinsmoke não são filhos legítimos de Darius, mas seres modificados a partir do seu fator linhagem, onde cinco recebem poderes especiais.",
          subitems: [
            { name: "⚗️ Pink Poison", description: "Esse poder permite ao Vinsmoke se tornar imune ao veneno e gerar veneno pelo seu corpo, semelhante à Doku Doku no Mi. Destreza × 1,3 = Dano do Pink Poison." },
            { name: "🔥 Sparking Red", description: "Essa habilidade permite que o humano modificado gere feixes e explosões das mãos ou dos olhos. Destreza × 1,3 = Dano do Sparking Red." },
            { name: "⚡ Dengeki Blue", description: "Com esse poder é possível gerar cargas de eletricidade que podem ferir o alvo e se tornar imune a outras descargas elétricas, bem como absorver de acordo com o que pode gerar. Se sofre uma carga maior do que aquilo que pode gerar, então sofre uma sobrecarga. Destreza × 1,3 = Dano Dengeki Blue." },
            { name: "👊 Winch Green", description: "Através dessa habilidade recebe uma força e uma resistência além do comum nos padrões Vinsmokes e faz essa pessoa superior fisicamente aos demais. Buff: 1,3x de Força (é um poder que deve ser ligado e desligado)." },
            { name: "🌑 Stalf Black", description: "Esse poder torna o seu portador invisível e indetectável, até mesmo para o Haki de Observação. Buff: A cada 2000 de Destreza, 1 rodada invisível. Para recarregar, passe uma rodada visível." }
          ],
          details: [
            "Vagas: [2/5] — Typhon, Violet",
            "1.4× em Resistência",
            "Se forem membros da Germa já iniciam com seus Raid Suit (caso saiam da Germa o Raid Suit se autodestrói).",
            "História Mínima: 35 Linhas"
          ]
        },
        {
          name: "Newgate",
          description: "Com seus membros forjando laços tão estreitos que pareciam mais irmãos do que companheiros de navio. Juntos, eles navegaram pelo mundo, lutando contra a injustiça e defendendo aqueles que não tinham ninguém para protegê-los. Ao longo dos anos, a família Newgate enfrentou muitos desafios, incluindo o cerco de ferro da Marinha e batalhas contra outros piratas poderosos. Porém, nenhum deles abalou, sempre mantendo sua lealdade e companheirismo inabaláveis.",
          details: [
            "Vagas: [2/4] — Petra Solis, Cassandra Cass",
            "1.3× em Força",
            "1.4× em Resistência",
            "+2.000 em Resistência",
            "História Mínima: 25 Linhas"
          ]
        },
        {
          name: "Don",
          description: "A família Don, do personagem Don Chinjao na obra, são uma gangue que habita as terras da Ilha Kano. Grande parte dos mares conhecem esse sobrenome, pois grande parte deles saem ao mar para serem Piratas. Mas o que torna os \"Don's\" tão poderosos, se dá graças a um estilo de luta elaborado por eles mesmos, o tão famoso e sonhado \"Hassoken\".",
          details: [
            "Vagas: [1/5] — Don Hilda",
            "1.2× em Força",
            "1.2× em Resistência",
            "Acesso único ao Hassoken",
            "História Mínima: 25 Linhas"
          ]
        }
      ]
    },
    "Classes": {
      intro: "Para evoluir sua classe, é necessário atingir o nível 500 e realizar apenas dois treinamentos solo. É permitida somente uma evolução de classe, portanto, escolha com sabedoria.",
      items: [
        {
          name: "Navegadores",
          subitems: [
            { name: "Cartógrafo", description: "O Cartógrafo é capaz de desenhar Mapas-Múndi e também de criar Eternal Poses da ilha que desejar. Para isso, é necessária apenas a realização de uma cena solo com, no mínimo, 20 linhas. A construção de um Eternal Pose leva 8 horas, sendo imprescindível que o personagem esteja na própria ilha para realizar a magnetização do item." },
            { name: "Timoneiro", description: "Os Timoneiros são capazes de reduzir em até 50% o tempo de viagem, seja o personagem de um jogador ou um NPC." }
          ]
        },
        {
          name: "Combatentes",
          subitems: [
            { name: "Treinador", description: "O Treinador permite que apenas o personagem do jogador treine NPCs especiais. É possível treinar até 2 NPCs especiais simultaneamente, uma vez por semana, concedendo 20 níveis a cada NPC treinado. No caso de NPCs não upáveis, o treinador poderá evoluir até 20 bots comuns, concedendo 40 níveis a cada um, podendo essa ação ser realizada apenas uma vez, com limite semanal de uma utilização. Já os escravos adquiridos no mercado de escravos de Sabaody ou no Novo Mundo seguem as mesmas regras aplicadas aos bots comuns." },
            { name: "Mestre de Combate", description: "O Mestre de Combate permite que o personagem adquira um quarto estilo de combate (podendo ser mais um estilo terciário) e reduz em 50% a quantidade de treinos necessários para qualquer estilo de luta ou técnica." }
          ]
        },
        {
          name: "Arqueólogos",
          subitems: [
            { name: "Linguística", description: "Os Linguísticos são capazes de falar qualquer idioma que desejarem, incluindo até mesmo a língua dos tritões. A única exceção é a língua dos Poneglyphs, cujo aprendizado não é permitido por padrão, sendo conquistado apenas por merecimento, geralmente por meio de eventos ou circunstâncias especiais. A aquisição desse conhecimento dependerá do bom desenvolvimento da profissão, seja como linguístico ou mestre de artefatos." },
            { name: "Mestre de Artefatos", description: "Os Mestres de Artefatos são capazes de analisar qualquer local e determinar há quanto tempo um material ou navio foi deixado ali. Também conhecem o grau de todas as armas e seu respectivo valor de mercado, além de compreenderem com facilidade enigmas e antiguidades." }
          ]
        },
        {
          name: "Carpinteiros",
          subitems: [
            { name: "Inventor", description: "Os Inventores lidam com componentes mecânicos, como motores e engrenagens, atuando na parte mais bruta da mecânica. São capazes de automatizar navios, aprimorar armas, tornando-as mais avançadas, bem como desenvolver ciborgues equipados com armas e armamentos pesados." },
            { name: "Ferreiro", description: "O Ferreiro é capaz de forjar armas e criar novas ligas metálicas de durabilidade excepcional. Pode produzir espadas, machados e outras armas relacionadas ao ofício. Dependendo do nível de conhecimento adquirido, o ferreiro também poderá criar armas amaldiçoadas em patamares equivalentes às Wazamono e Ryo Wazamono." }
          ]
        },
        {
          name: "Médicos",
          subitems: [
            { name: "Cirurgião", description: "O Cirurgião atua na área da saúde, possuindo amplo conhecimento sobre órgãos, pele, veias e vasos sanguíneos. É capaz de realizar cirurgias de alto risco com o objetivo de salvar ou curar pacientes em estado crítico. Além disso, melhora a eficiência do uso de algumas Akuma no Mi voltadas para essa área. O cirurgião pode salvar personagens que tenham sofrido golpes quase mortais, recuperando 50% do HP após a operação, além de parte da energia. O procedimento possui duração de 2 turnos." },
            { name: "Cientista", description: "Os Cientistas atuam nas áreas mais avançadas da tecnologia, incluindo o estudo do DNA humano e de outros campos científicos. São capazes de desenvolver armas científicas com efeitos fundamentados na ciência, bem como criar vírus, bactérias, doenças, gases e outros agentes semelhantes. Entretanto, um cientista iniciante não possui, de imediato, conhecimentos ou receitas avançadas, como clonagem ou manipulação genética de raças. A obtenção dessas capacidades ocorrerá exclusivamente por mérito, por meio do progresso e da aquisição de conhecimento ao longo do jogo." }
          ]
        },
        {
          name: "Músicos",
          subitems: [
            { name: "Maestro", description: "Aumenta a potência dos ataques de ar sonoro utilizados por meio de instrumentos. Dependendo da forma como os equipamentos forem elaborados, esses ataques podem ser amplificados de maneira significativa, causando grande destruição por onde passarem." },
            { name: "Cantor", description: "Aumenta significativamente a força das cordas vocais, permitindo ao usuário modular a voz em diversos tons e regulá-la com precisão para executar ataques devastadores por meio de gritos sônicos. Esses ataques podem afetar os alvos de forma intensa, liberando ondas de ar sônico extremamente poderosas. Além disso, o usuário pode ajustar o tom da voz a ponto de rachar ou destruir superfícies e até navios, devendo tomar cuidado para não comprometer o ambiente ao seu redor. Dependendo da Akuma no Mi, como modelos de dinossauro Rex ou animais focados em rugidos, os ataques vocais tornam-se ainda mais poderosos e catastróficos." }
          ]
        },
        {
          name: "Cozinheiros",
          subitems: [
            { name: "Mestre Cuca", description: "Esse tipo de cozinheiro valoriza a apresentação de seus pratos e prepara refeições de alta qualidade, ricas em temperos e sabor excepcional. Toda comida preparada por ele concede um efeito de recuperação, restaurando 20% dos pontos de vida por turno após o consumo." },
            { name: "Nutricionista", description: "Esse tipo de cozinheiro prepara refeições mais encorpadas e intensas, com alto valor nutritivo, capazes de fortalecer temporariamente o corpo de quem as consome. Seus pratos podem conceder um aumento de 20% em Força, Agilidade ou em outros atributos físicos, como Destreza e Resistência. O efeito concede um bônus de 20% em apenas um atributo, com duração de 5 turnos." }
          ]
        },
        {
          name: "Atiradores",
          subitems: [
            { name: "Atirador Mestre", description: "Esse tipo de atirador é especializado em disparos de longo alcance, atuando como um verdadeiro franco-atirador. Possui elevada percepção e compreensão de espaço, distância e trajetória, utilizando fatores como o vento a seu favor para garantir a precisão dos tiros, tornando extremamente difícil desviar de um disparo efetuado a grandes distâncias. Além disso, essa especialização amplia consideravelmente o campo de visão do atirador." },
            { name: "Arsenal Bélico", description: "Esse tipo de atirador é especializado em artilharia pesada, utilizando bazucas, bacamartes, Dials, pistolas com munição explosiva e bombas, combatendo de forma caótica e agressiva. Em combate, faz uso de diversas armas de curto e médio alcance, como um veterano de guerra que aproveita tudo ao seu redor a seu favor. Possui maestria elevada com esse tipo de armamento, adquirindo velocidade extrema para alternar armas em pleno combate, além de conseguir transportar e manusear múltiplas armas com facilidade." }
          ]
        }
      ]
    }
  },
  "Força Vital": {
    "Haki": {
      intro: "O Haki é um poder misterioso que permite aos indivíduos canalizar sua própria energia espiritual para realizar feitos sobre-humanos. Como essa energia se manifesta a partir da força de vontade, ela é, em teoria, acessível a todas as criaturas vivas do mundo. Contudo, a grande maioria é incapaz de despertá-la ou desconhece completamente sua existência. Usuários de Haki são relativamente comuns no Novo Mundo, raros no Paraíso e praticamente inexistentes nos Quatro Blues. Segue abaixo as informações referentes aos meios de treinamento, obtenção e aprimoramento tanto do Haki da Observação quanto do Haki do Armamento.",
      items: [
        {
          name: "Haki do Armamento — Básico/Koka",
          details: [
            "100 LvL",
            "1 Ponto em Busoshoku",
            "1 Treino Solo ou Duo",
            "+40% (Haki) somado ao dano Final",
            "100% Na defesa (Haki)"
          ],
          subitems: [
            { name: "🔗 Referência", description: "https://onepiece.fandom.com/pt/wiki/Haki/Haki_do_Armamento" }
          ]
        },
        {
          name: "Haki do Armamento — Fullbody",
          details: [
            "1 Treino solo ou Duo",
            "3.000 PT mínimos em Haki (Buso)",
            "+40% (Buso) Em força Total",
            "+100% (Buso) na Defesa"
          ],
          subitems: [
            { name: "🔗 Referência", description: "https://rpg-the-omniverse.fandom.com/pt-br/wiki/Haki_Techniques:_K%C5%8Dka_-_Full_Body" }
          ]
        },
        {
          name: "Haki do Armamento — Emissão",
          details: [
            "Estar no Novo Mundo",
            "4.000 PT em Busoshoku",
            "2 Treinos Solos",
            "+40% (A mais) de dano (utiliza 100% do buso no cálculo)",
            "Buso total +40% = defesa da barreira de emissão, o resultado desse cálculo será a redução de dano",
            "Alcance da emissão em metros: buso (com os 40% da emissão) ÷ 100. Para mestres haki é ÷ por 50"
          ],
          subitems: [
            { name: "🔗 Referência", description: "https://onepiece.fandom.com/pt/wiki/Haki/Haki_do_Armamento" }
          ]
        },
        {
          name: "Haki do Armamento — Emissão (Destruição Interna)",
          details: [
            "Estar no Novo Mundo",
            "4.000 PT em Busoshoku",
            "2 Treinos Solos",
            "+60% (A mais) de dano (utiliza 100% do buso no cálculo), além disso ultrapassa qualquer defesa no contato físico"
          ],
          subitems: [
            { name: "🔗 Referência", description: "https://onepiece.fandom.com/pt/wiki/Haki/Haki_do_Armamento" }
          ]
        },
        {
          name: "Haki de Observação — Básico",
          details: [
            "Nível 100",
            "1 Ponto em Kenbushoku",
            "1 Treino solo",
            "Sente presenças Próximas"
          ]
        },
        {
          name: "Haki de Observação — Intenção",
          details: [
            "Nível 100",
            "2.000 PT em Kenbushoku",
            "Sente a intenção dos golpes Alheios",
            "Distingue Níveis de Poder",
            "Soma ken +20% na percepção"
          ]
        },
        {
          name: "Haki de Observação — Previsão",
          details: [
            "Estar no Novo Mundo",
            "3.000 PT em Kenbushoku",
            "2 Treinos solos",
            "Cada 1.000 em ken é 1 segundo no futuro para akumados e 750 para mestres haki",
            "Cada segundo de previsão vale 1.000 de percepção extra",
            "Usando previsão, o valor para a contagem de segundos é ken +40%"
          ]
        },
        {
          name: "🜙ᭂ◈ Haoshoku Haki",
          description: "O Haoshoku Haki é uma forma rara e majestosa de Haki que permite ao usuário impor sua vontade sobre os outros. Diferente do Busoshoku e do Kenbunshoku, este poder não pode ser obtido por treino — é um dom inato, reservado a um em vários milhões. Aqueles que o despertam são conhecidos como Conquistadores, indivíduos destinados a liderar, dominar ou inspirar multidões. Entre os mais temidos portadores estão figuras como Gol D. Roger, Shanks, Kaido, Big Mom e Monkey D. Luffy. De acordo com Marigold e Trebol, o Haoshoku é a prova viva de uma alma nascida para governar — um espírito que se ergue acima do comum, impulsionado por uma ambição inquebrantável. Os usuários exercem o poder da dominação espiritual: subjugam multidões, desmaiam inimigos de vontade fraca ou afetam o ambiente físico com pura pressão espiritual. Sua força é diretamente proporcional à diferença de poder entre as vontades envolvidas.",
          subitems: [
            {
              name: "📊 Cálculo de Poder (Força Espiritual)",
              description: "O nível de poder do seu Hao é determinado pela força acumulada de suas outras capacidades espirituais, sendo o espírito total."
            },
            {
              name: "🜙ᭂ◈ ❖ Técnica Básica: Incapacitação",
              description: "Ao elevar a intensidade da própria vontade, o usuário é capaz de nocautear inimigos em massa. Indivíduos de espírito fraco desmaiam instantaneamente; os mais resistentes podem cambalear, suar frio ou perder a concentração. Em grandes proporções, pode varrer exércitos inteiros, incapacitando centenas. O uso excessivo esgota rapidamente a energia espiritual.",
              details: [
                "📜 Requisitos: 40% Hao, dobro de Lvl para desmaiar",
                "Caso tenha diferença de 25% em diante, enfraquece dando debuff nos ATBs físicos de 25%"
              ]
            },
            {
              name: "🜙ᭂ◈ ❖ Técnica Avançada: Pressão",
              description: "Ao atingir um nível elevado de controle, o Haoshoku Haki começa a afetar o ambiente físico. Objetos inanimados se racham, estruturas estremecem e o ar ao redor se distorce sob o peso da vontade do usuário. Quando dois usuários colidem seus Hakis do Rei, o impacto cria 'raios negros' — descargas de energia espiritual pura.",
              details: ["📜 Requisitos: 50% Hao"]
            },
            {
              name: "🜙ᭂ◈ ❖ Técnica Avançada: Infusão",
              description: "A Infusão é o auge do Haoshoku em combate. Pouquíssimos canalizam o poder do Rei em ataques físicos, revestindo corpo e armas com energia espiritual dominadora. Combina Haoshoku com Busoshoku, criando força ofensiva que transcende o limite físico.",
              details: [
                "📜 Requisitos: 60% Hao, Lvl 900 (700 Mestre) e os 2 armamentos avançados",
                "Soma 50% do Haoshoku ao Buso no uso do Fullbody",
                "Soco com infusão do Rei soma 80% do Hao no dano final de forma sobressalente",
                "Caso seja especializado no Buso, soma 100%"
              ]
            },
            {
              name: "🜙ᭂ◈ ❖ Técnica Avançada: Assassinato de Observação",
              description: "Técnica secreta dominada por Shanks. Permite ao usuário ocultar completamente sua presença espiritual, anulando o Kenbunshoku Haki de oponentes e impedindo que eles prevejam o futuro. Cria um campo de imprevisibilidade absoluta.",
              details: [
                "📜 Requisitos: 80% Hao, Lvl 1.000 (800 Mestre) e Previsão",
                "Atributo Hao superior ao espírito geral do inimigo em 50% para funcionar",
                "Sendo especializado em Ken, recebe +20% no Hao para matar o Ken do inimigo"
              ]
            },
            {
              name: "❖ Técnica Avançada: Desarme Espiritual",
              description: "Esta técnica permite que o usuário projete uma descarga massiva de Haoshoku Haki a longas distâncias, focando especificamente em anular a forma transformada de um usuário de Akuma no Mi, desarmando seus poderes. Ao ser atingido pela 'onda de choque', o usuário (especialmente Zoans, Logias, Paramecias Especiais) é forçado a retornar à sua forma humana original e fica intimidado, com o poder de sua Akuma desarmado. Fica impossibilitado de usar os poderes da fruta por 1 turno (ou enquanto a pressão for mantida narrativamente). A pressão pode ser emitida uma vez a cada 3 turnos.",
              details: [
                "Hao precisa ser o dobro do ATB total do inimigo para aplicar",
                "📜 Requer 100% Haoshoku, Lvl 1.200 (1.000 para Mestres)"
              ]
            },
            {
              name: "📜 Regras de Evolução e Linhagem",
              details: [
                "Mestres Haki iniciam com 15%+ Haoshoku; D. com 10%",
                "Hao pode ser ganho em Caçada / Dominação"
              ]
            }
          ]
        }
      ]
    },
    "Akuma no Mi": {
      intro: "O principal atrativo do mundo de One Piece, as grandiosas Akuma No Mi, não poderiam ficar de fora do RPG e receberam um sistema próprio, que difere nossa comunidade do restante. Em geral, estamos tentando atribuir para todas as frutas algum tipo de potencial; até para aquelas que parecem completamente inúteis, como a Jake Jake No Mi. Antes de começarmos as explicações, precisamos informar que esse é um sistema experimental, as frutas podem sofrer alterações em suas capacidades e buff's, dependendo de seus desempenhos dentro do RPG.",
      items: [
        {
          name: "Como Funciona?",
          description: "De modo simples, podemos resumir o sistema dizendo que cada fruta terá uma ficha própria, dependendo do seu tipo. Nessa ficha, constam informações específicas, como uma descrição sobre os poderes e habilidades gerais da fruta, dados sobre suas passivas e informações mais técnicas."
        },
        {
          name: "Paramecia",
          description: "A característica principal das Akuma no Mi do tipo Paramecia, em termos básicos, é que elas concedem qualquer poder, exceto a habilidade de se transformar em um animal, como as Zoan, ou em um elemento natural, como as Logia. Assim, o tipo Paramecia abrange uma vasta gama de habilidades variadas e peculiares, cada uma com seus próprios pontos fortes e fracos. Elas podem variar das habilidades mais simples às mais destrutivas e até mesmo às incrivelmente bizarras. Algumas Paramecias possuem habilidades semelhantes a outras, mas cada uma ainda é única à sua maneira. Elas são o tipo mais numeroso de Akuma no Mi.",
          details: [
            "Na maioria dos casos, possuirão uma única passiva. Algumas passivas são constantes, enquanto outras podem ser situacionais.",
            "Em raros casos, uma paramecia pode conter duas passivas. Isso se aplica em situações excepcionais, como a Mochi Mochi.",
            "Devido a versatilidade e variedade das habilidades que as Paramecias podem oferecer, demais dúvidas devem ser tiradas com ADM's."
          ]
        },
        {
          name: "Logia",
          description: "Aqueles com poderes Logia podem se transformar fisicamente em um elemento específico da natureza, além de criar esse elemento a partir de seus corpos em quantidades praticamente infinitas para controlá-lo como quiserem. Corpos transformados por uma habilidade Logia são completamente invulneráveis à maioria dos ataques, pois quando são atingidos e, portanto, deformados, eles simplesmente se reformam sem nenhum dano, e aparentemente de forma automática.",
          details: [
            "Possuem, por padrão, a passiva \"Efeito Logia\", que funciona de modo constante; optamos por tornar isso completamente automático, apesar de momentos na obra demonstrarem usuários de Logia sendo atingidos de surpresa.",
            "Além do Efeito Logia, frutas desse tipo podem possuir uma passiva a mais.",
            "Apesar de serem capazes de controlar um elemento específico, isso não se aplica ao já existente de forma absoluta; para tal, o usuário deve misturar parte do elemento produzido por seu corpo ao já existente.",
            "Algumas Logias possuem efeitos específicos para com outras frutas. Nesse caso, sempre consulte sua ficha ou questione um ADM."
          ]
        },
        {
          name: "Zoan",
          description: "O terceiro tipo de Akuma No Mi, as Zoans. Enquanto Paramecias fornecem habilidades variadas e Logias envolvem elementos ou fenômenos da natureza, as Zoans garantem aos usuários a capacidade de alterar suas formas para animais ou seres vivos específicos. Elas se dividem em três tipos: comuns, ancestrais e míticas.",
          details: [
            "Ao acessar a forma completa, o usuário substitui seus buff's raciais pelos buff's da fruta, isso inclui também debuff's fixos.",
            "Na forma híbrida, o usuário combina o melhor dos dois e soma os buff's. No entanto, os buff's da forma híbrida são menores que os da forma completa.",
            "A alteração de forma não afeta características específicas da raça, como passivas.",
            "Zoans também possuem passivas, mas a quantidade pode variar de acordo com a raridade dela."
          ]
        },
        {
          name: "Maestria Akuma no Mi",
          description: "A Maestria é o medidor progressivo de simbiose entre o usuário e sua Akuma no Mi. Ela dita a eficiência, a criatividade e o limite de poder que o personagem consegue extrair de sua habilidade única. Diferente dos atributos físicos, a Maestria foca na intimidade e controle.",
          subitems: [
            {
              name: "Níveis de Progressão",
              details: [
                "0% - 25% (Iniciante)",
                "26% - 50% (Intermediário)",
                "51% - 75% (Avançado)",
                "76% - 99% (Mestre)",
                "100% (O Despertar)"
              ]
            },
            {
              name: "1. Treinamento Semanal (Foco Disciplinado)",
              description: "O personagem dedica tempo para meditar, praticar formas e testar os limites de sua fruta em um ambiente controlado.",
              details: [
                "Limite: Máximo de 2 treinamentos por semana.",
                "Ganho: Cada treino bem-sucedido (quando aprovado) rende +5% de Maestria.",
                "Nota: O treino deve descrever o que o personagem está tentando aprender ou aprimorar."
              ]
            },
            {
              name: "2. Eventos e Sagas (Experiência de Campo)",
              description: "Participar de grandes arcos narrativos e eventos globais do RPG recompensa o personagem com saltos de aprendizado.",
              details: [
                "Ganho: Variável conforme a dificuldade do evento (geralmente entre 10% a 20%)."
              ]
            },
            {
              name: "3. Conquistas On-Game (Superação)",
              description: "Momentos críticos em interpretação (RP) ou combates contra oponentes superiores podem gerar bônus de maestria por puro instinto de sobrevivência.",
              details: [
                "Derrotar inimigos poderosos: Vencer um boss ou um usuário de Akuma no Mi mais experiente pode render porcentagem extra definida pelo narrador.",
                "Criatividade Narrativa: Utilizar a fruta de forma inédita e genial pode ser recompensado com bônus imediatos."
              ]
            },
            {
              name: "Regra de Ouro",
              description: "O Despertar (100%) não é apenas um número. Além da porcentagem, o narrador pode exigir uma Missão de Despertar específica para validar a ascensão final do poder."
            }
          ]
        },
        {
          name: "Sistema de Despertar das Akuma no Mi",
          description: "Sistema completo do despertar das Akuma no Mi, dividido por tipo de fruta e estágios progressivos.",
          subitems: [
            {
              name: "𖤐 Requisitos para Despertar",
              subitems: [
                { name: "Logias", details: ["17.750 em FOCO (sem buffs)", "60% de maestria com Akuma", "Bom desenvolvimento narrativo com a fruta"] },
                { name: "Zoans Míticas", details: ["20.000 em FOCO (sem buffs)", "60% de maestria com Akuma", "Bom desenvolvimento narrativo com a fruta"] },
                { name: "Paramecia / Paramecia Especial", details: ["15.000 em FOCO (sem buffs)", "60% de maestria com Akuma", "Bom desenvolvimento narrativo com a fruta"] },
                { name: "Zoans Ancestrais", details: ["10.000 em FOCO (sem buffs)", "50% de maestria com Akuma", "Bom desenvolvimento narrativo com a fruta"] },
                { name: "Zoans Comuns", details: ["10.000 em FOCO (sem buffs)", "40% de maestria com Akuma", "Bom desenvolvimento narrativo com a fruta"] }
              ]
            },
            {
              name: "✦ Primeiro Estágio — Técnica Despertada (60%+)",
              description: "Ao atingir a maestria necessária para despertar, o usuário ganha acesso a uma única Técnica Despertada, uma manifestação superior da Akuma no Mi que foge dos padrões convencionais da fruta.",
              details: [
                "Possui Tier máximo de ofensividade dentro do rank de técnicas.",
                "Sua criação exige aprovação da avaliadora de Akumas e do avaliador de técnicas.",
                "Representa o 'último recurso' do usuário.",
                "Restrição: 1 vez por Evento, 1 vez por Dominação, 1 vez por Caçada.",
                "Não é um golpe comum."
              ]
            },
            {
              name: "✦ Segundo Estágio — Despertar Completo (80% de Maestria)",
              description: "A partir de 80% de maestria, o despertar deixa de ser apenas uma técnica e passa a ser um estado.",
              details: [
                "Todas as técnicas sobem 1 Tier acima do rank padrão.",
                "Buff Foco da Akuma aumenta em 1,4 e pode alcançar no máximo 2,5 (apenas o atributo foco).",
                "Duração baseada em FOCO: a cada 5.000 pontos em FOCO final, +1 Cena de duração no estado desperto.",
                "Exemplo: 15.000 Foco = 3 cenas | 25.000 Foco = 5 cenas"
              ]
            },
            {
              name: "✦ Terceiro Estágio — Despertar Absoluto (100% de Maestria)",
              description: "Agora o despertar não é mais uma transformação… é o estado natural do usuário.",
              details: [
                "Todas as técnicas recebem +2 Tiers acima do padrão.",
                "Alcance da Akuma no Mi torna-se 3x maior que o estipulado.",
                "Técnica máxima recebe amplificação especial.",
                "Efeitos narrativos em escala catastrófica, capazes de alterar permanentemente estruturas de ilhas e biomas.",
                "Nesse estágio, usuário e Akuma não são mais entidades separadas."
              ]
            }
          ]
        }
      ]
    },
    "Atributos": {
      intro: "Serão abordadas, de forma detalhada, as diversas ramificações que envolvem o sistema de atributos e a física aplicada no RPG. Para tanto, o conteúdo será estruturado em duas categorias distintas, cada qual destinada a tratar especificamente de seu respectivo eixo temático. Solicita-se a devida atenção na leitura, a fim de que não se percam detalhes relevantes acerca do novo sistema regente que disciplinará os atributos e a física aplicada.",
      items: [
        {
          name: "➝ Categoria — Atributos",
          description: "Iremos analisar, de forma detalhada, a função de cada atributo físico, buscando compreender com clareza sua utilidade e aplicação dentro dos aspectos que compõem a identidade física de cada personagem.",
          subitems: [
            {
              name: "Força",
              description: "A Força representa a capacidade física de um indivíduo de impor sua ação sobre o mundo material, determinando tanto a intensidade de seus impactos quanto sua própria resistência. Em síntese, trata-se de um dos principais atributos responsáveis pelo dano resultante. Personagens que lutam com os punhos utilizam a força de maneira direta na aplicação de seus golpes. Da mesma forma, até mesmo espadachins dependem da força para imprimir potência ao longo da trajetória de seus ataques, o que, por consequência, impacta diretamente no dano final."
            },
            {
              name: "Agilidade/Velocidade",
              description: "A Velocidade de um corpo corresponde à sua capacidade de deslocar-se do ponto A ao ponto B em um determinado intervalo de tempo. Em termos práticos, quanto maior a velocidade, menor será o tempo necessário para atingir o destino. Além disso, a velocidade também passa a influenciar diretamente a capacidade de percepção de um indivíduo, de modo que, quanto mais veloz ele for, maior será sua aptidão para reagir e compreender estímulos ao seu redor. A velocidade de um corpo também influenciará no dano. Na física, a velocidade amplifica o potencial de impacto ao elevar a quantidade de movimento de um corpo, sendo a força resultante do choque determinada pela rapidez com que esse movimento é interrompido. A velocidade é parcialmente convertida em força por meio de um coeficiente fixo, garantindo que sua influência seja proporcional, previsível e escalável dentro do sistema."
            },
            {
              name: "Resistência",
              description: "A resistência é a propriedade que define a integridade de um corpo frente a forças externas, determinando sua capacidade de manter-se íntegro, seja por rigidez, absorção ou distribuição do impacto. Ela também determina a capacidade de um indivíduo em resistir à fadiga durante um combate. Quanto maior for sua resistência física, maior será sua permanência em batalha sem apresentar sinais de exaustão, tornando-o mais durável frente ao desgaste físico."
            },
            {
              name: "Destreza",
              description: "A Destreza corresponde à capacidade de executar movimentos com precisão, coordenação e controle refinado, especialmente em ações que exigem ajustes rápidos e eficientes de força e trajetória. Esse atributo envolve precisão, tempo de resposta, controle de força e ajuste de trajetória. Em essência, a destreza permite que o personagem aplique a quantidade exata de força na direção correta, adaptando-se em tempo real às variações do ambiente. Dentro do RPG, a destreza desempenhará um papel fundamental, sobretudo para usuários de Akuma no Mi, que dependerão diretamente desse atributo para uma utilização eficiente de suas habilidades. Da mesma forma, será essencial para espadachins experientes e também para combatentes corporais que utilizam estilos baseados em técnica, como o kung fu."
            },
            {
              name: "Health Points — HP",
              description: "Nos sistemas de RPG, os Health Points (HP) são um elemento fundamental. Seu propósito está diretamente ligado à constituição dos pontos de vida de um personagem, sendo seu valor determinado em função do atributo de Resistência. Em termos práticos, o HP representa a quantidade de dano que um personagem é capaz de suportar antes de ser derrotado. Dentro do nosso RPG, esse sistema terá papel central, especialmente no que diz respeito à dinâmica geral dos combates."
            },
            {
              name: "Relações — Velocidade × Percepção",
              description: "A cada 100 pontos de Velocidade, são gerados 70 pontos de Percepção. Para que um personagem execute um \"Speed Blitz\", será necessário possuir uma velocidade 120% superior ao valor da percepção do oponente, ou seja, 120% a mais, e não apenas equivalente.",
              details: [
                "Speed Blitz = Velocidade ≥ Percepção do alvo + 120% da Percepção (ou seja, 220% do valor da percepção do oponente)",
                "Velocidades pareadas — diferença irrelevante",
                "Leve vantagem — até aproximadamente 30% superior",
                "Vantagem — entre 30% e 50% superior",
                "Grande vantagem — entre 50% e 70% superior",
                "Vantagem esmagadora — acima de 70%",
                "Acima de 120% de superioridade: Speed Blitz"
              ]
            }
          ]
        },
        {
          name: "➝ Categoria — Física Aplicada",
          description: "No contexto do RPG, a \"Física Aplicada\" refere-se à forma como atributos, buffs e porcentagens se manifestam na prática dentro de uma cena, seja em combate ou em situações cotidianas. Trata-se, portanto, da funcionalidade, usabilidade e aplicação direta desses elementos na narrativa.",
          subitems: [
            {
              name: "Dano por Combate — Porradeiros",
              description: "Os chamados \"Porradeiros\" referem-se àqueles cujo estilo de combate se fundamenta exclusivamente no uso do próprio corpo, abdicando de armas como espadas, pistolas, rifles ou quaisquer outros instrumentos bélicos. Como exemplos, podem ser citados Luffy, Rob Lucci, Sanji e, talvez como seu maior representante, Monkey D. Garp.",
              details: [
                "Fórmula: Dano = Força + 50% da Destreza + Buffs + Busoshoku + 30% (Speed)",
                "Exemplo com ficha base (1.000 em cada atributo):",
                "1. Força (1.000) + 50% Destreza (500) = 1.500",
                "2. Com multiplicador 1.5x: 1.500 × 1.5 = 2.250 | Com dano fixo: 1.500 + 5.000 = 6.500",
                "3. Busoshoku +40% (400): 2.250 + 400 = 2.650 | 6.500 + 400 = 6.900",
                "4. Velocidade +30% (300): 2.650 + 300 = 2.950 | 6.900 + 300 = 7.200",
                "Obs: Os valores de Força e Destreza já devem estar ajustados pelos buffs de raça ou linhagem."
              ]
            },
            {
              name: "Dano por Combate — Espadachins",
              description: "Os espadachins utilizam lâminas como principal meio de combate. No RPG haverá uma subdivisão: espadachins do tipo força e espadachins do tipo destreza. Enquanto Zoro representa o espadachim voltado à força, com golpes pesados e destrutivos, Brook exemplifica o espadachim de destreza, priorizando leveza, velocidade e precisão em seus cortes.",
              details: [
                "Fórmula: Dano = Força/Destreza + 50% (Força/Destreza) + Buffs + Busoshoku + 15% (Speed)",
                "O cálculo parte do valor total do atributo principal, somado a 50% do atributo secundário.",
                "Exemplo: 1.000 (principal) + 500 (50% secundário) = 1.500",
                "A partir desse valor base, seguem-se as demais etapas (buffs, Busoshoku, velocidade, etc.)."
              ]
            },
            {
              name: "Health Points — HP (Física Aplicada)",
              description: "Esta seção é destinada à abordagem dos pontos de vida de um personagem, ou seja, a quantidade de dano que ele é capaz de suportar antes de sucumbir em combate.",
              details: [
                "Inferior a 30% do HP — Escoriações Leves / Fadiga inexistente / Debuff: -5% (Força/Speed)",
                "Entre 30% e 50% do HP — Escoriações Leve > Moderada / Fadiga Leve > Moderada / Debuff: -20% (For/Velo/Dest)",
                "Entre 50% e 70% do HP — Escoriações Moderadas+ > Graves+ / Fadiga Moderada+ > Pesada / Debuff: -35% (For/Velo/Dest)",
                "Igual ou superior a 100% do HP — Escoriações Mortais+ (Hit Kill) / Fadiga (Óbito Imediato)",
                "Fórmula: (Dano ÷ HP total) × 100 = % de dano",
                "Exemplo: (2.200 ÷ 8.000) × 100 = 27,5% → Dano inferior a 30%, escoriações leves",
                "Danos são cumulativos, assim como os debuffs. É necessário causar 101%+ do HP para eliminação em golpe único."
              ]
            }
          ]
        }
      ]
    }
  },
  "Evolução": {
    "Missões": {
      intro: "Logo abaixo estarão disponíveis aos jogadores as formas acessíveis de progressão do personagem. As opções serão listadas a seguir, acompanhadas de explicações detalhadas sobre cada uma, bem como observações referentes às condições de UP.",
      items: [
        {
          name: "Missões Autonarradas",
          description: "Serão conduzidas pelo próprio jogador, que terá liberdade para desenvolver um enredo próprio acerca de um objetivo que deseje realizar. As missões serão devidamente avaliadas, portanto devem ser elaboradas de forma criativa e bem estruturada.",
          details: [
            "Quantidade: 2 (Semanal)",
            "Linhas: 25",
            "Bonificações: 12 LvL (Cada)",
            "Bonificações: 30.000.000💰"
          ]
        }
      ]
    },
    "Aceleração de Crescimento": {
      intro: "A progressão agora é dividida em faixas de nível. Quanto menor o seu nível, maior será o seu ímpeto de aprendizado e crescimento.",
      items: [
        {
          name: "Tabela de Multiplicadores de Nível",
          details: [
            "Lvl 1 ao 400 — 2.5x níveis (Prodígio Ascendente)",
            "Lvl 401 ao 800 — Dobro de Lvl (Dobrado)",
            "Lvl 801 ao 1.200 — 1.5x níveis a mais"
          ]
        },
        {
          name: "Como funciona na prática?",
          description: "Um treino solo comum dá 12 níveis, mas com o bônus 'Prodígio' multiplicaria por 2.5. Do nível 400 até 801, o treino, ao invés de 12, daria 24 — e assim por diante."
        }
      ]
    },
    "Treino": {
      items: [
        {
          name: "Treino Solo",
          description: "O personagem terá direito a realizar treinamentos solo, nos quais poderá desenvolver suas aptidões de combate, bem como aprimorar técnicas, golpes, Hakis, interações e treinos com NPCs, além de funções relacionadas à profissão, entre outros aspectos.",
          details: [
            "Quantidade: 2 (Semanal)",
            "Linhas: 25",
            "Bonificação: 12 LvL (Cada)"
          ]
        },
        {
          name: "Treino em Duo",
          description: "Será permitido o treinamento em conjunto, possibilitando que os personagens evoluam de forma simultânea. (Para mais detalhes, verifique a seção \"Observações Gerais\")",
          details: [
            "2 Vezes por semana",
            "10 Cenas cada — 12 LvL",
            "50.000.000💰"
          ]
        },
        {
          name: "Interações Fillers",
          description: "Nas interações Filler, como o próprio nome sugere, trata-se de conteúdos complementares. Nelas, não é necessário que ambos os personagens estejam na mesma ilha para que a interação ocorra, funcionando de forma atemporal, como eventos que já aconteceram no passado.",
          details: [
            "2 Vezes por Semana",
            "10 Cenas Cada — 12 LvL",
            "5 Cenas Cada — 6 LvL",
            "50.000.000 (Para 10 Cenas)",
            "30.000.000 (Para 5 Cenas)"
          ]
        },
        {
          name: "Interação Canônica",
          description: "As interações canônicas são consideravelmente mais profundas, servindo como eventos atuais na linha do tempo do personagem. Para que ocorram, é necessário que ambos os personagens (o seu e o do outro jogador) estejam na mesma ilha.",
          details: [
            "1 Vez por Semana",
            "10 Cenas Cada — 20 LvL",
            "5 Cenas Cada — 10 LvL",
            "100.000.000 (Para as 10 Cenas)",
            "50.000.000 (Para as 5 Cenas)"
          ]
        },
        {
          name: "Divulgações",
          description: "Os jogadores que desejarem contribuir para o crescimento do RPG poderão divulgá-lo. Essa divulgação renderá recompensas, concedidas de acordo com a forma e o alcance da divulgação realizada.",
          details: [
            "Em Até 5 Grupos — 6 LvL",
            "Em Até 10 Grupos — 12 LvL",
            "Trouxe 1 Pessoa — 6 LvL",
            "Trouxe até 5 Pessoas — 20 LvL"
          ]
        }
      ]
    },
    "Extra-Narrada": {
      intro: "Uma vez por mês, o jogador terá direito a apenas uma Extra Narrada por personagem, destinada exclusivamente ao desenvolvimento da lore do mesmo. Por esse motivo, é necessário que haja dedicação na elaboração do conteúdo. A Extra deverá ser enviada no privado de um administrador, que avaliará a cena e concederá as bonificações de acordo com a análise realizada.",
      items: [
        {
          name: "Requisitos",
          details: ["200 Linhas Necessárias"]
        },
        {
          name: "Bonificações",
          details: [
            "De 10 a 40 LvL",
            "De 75.000.000 a 400.000.000💰",
            "NPC Especial",
            "Fragata",
            "1.000 Bots",
            "Obs: Entre o NPC especial, Fragata e 1.000 Bots, escolha apenas dois"
          ]
        }
      ]
    },
    "Conhecimentos": {
      intro: "Os mestres em conhecimentos são aqueles que atingiram um nível superior. Onde seu nível de periculosidade não mais se encontra entre duas dimensões, mas em três. Adquirir um conhecimento ou sub conhecimento lhe torna muito mais atrativo aos olhos do governo mundial e, agora, não será mais caçado como um pirata comum mas sim como alguém que precisa ser exterminado a qualquer custo e, ao invés de ser caçado por Comandantes, tenentes ou por Capitães são os próprios Almirantes que estão em sua cola.",
      items: [
        {
          name: "Curandeiro (Alcunha: Doctor Doom)",
          description: "O curandeiro é aquele em que tem a ciência de todos os remédios do mundo, todos os tipos de veneno incluso Poison Pink, Venenos da Doku Doku no Mi além de desenvolver anticorpos que em vacina ou qualquer coisa, se aplicado à pessoa fica imune a qualquer tipo de veneno, gases que contém veneno. Além de dominar os conhecimentos das Flores de Cerejeiras, quem detém deste conhecimento é o melhor médico do mundo, além de poder recuperar partes incuráveis.",
          details: [
            "Pré-requisito",
            "➝ Se manter em qualquer ilha do Novo Mundo",
            "➝ Ser um médico ou um cirurgião",
            "➝ Realizar uma auto extra de 700 palavras que concede 10 níveis além do conhecimento",
            "➝ Ser nível 500",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Vega-Master",
          description: "O Master é um conhecimento que difere dos inventores, é um conhecimento que dá capacidade da transformação dos ciborgues, o controle de energia juntamente com suas imensas criações, podendo também criar armas nível buster call's mas com um custo altíssimo de energia. O vega-master foi inspirado no Franky e suas invenções.",
          details: [
            "Pré-requisito:",
            "➝ Estar em Egg Head",
            "➝ Realizar uma auto-extra de 800 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Ter a classe obrigatória de Ferreiro",
            "➝ Ser nível 900",
            "Buff:",
            "➝ Caso seja um ciborgue, ganha +1,2× em dois atributos físicos à sua escolha, além do buff total ser 0.2 a mais do que os limites",
            "Vagas: 00/02"
          ]
        },
        {
          name: "O Século Perdido",
          description: "O conhecimento sobre o século perdido é algo muito perigoso, pois se o governo tiver ciência sobre você, sua ilha e quem estiver com você, todos vão evaporar num súbito passo de mágica através da pura força de um Almirante ou algo além. Aquele que tem esse conhecimento sabe sobre Joy Boy, toda sua trajetória, a verdade sobre Laugh Tale, Nika Nika no Mi, junto também sobre o passado de todas as ilhas, o povo da lua E SABE O QUE É O ONE PIECE, ou o mais próximo disso.",
          details: [
            "Pré-requisito:",
            "➝ Não pertencer à Cipher Poll, e se for Marinha, somente se for da SWORD ou um Marinheiro corrupto",
            "➝ Ser arqueólogo",
            "➝ Ir para Ohara e se tornar uma das cadeiras da ilha, podendo ter acesso à biblioteca mundial",
            "➝ Realizar uma auto-extra de 800 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Ser nível 800",
            "➝ Esse conhecimento é o mais perigoso do RPG, tome cuidado para quem você vai divulgar as informações",
            "Buff:",
            "➝ +1,3× em dois atributos físicos à sua escolha",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Fator Linhagem",
          description: "O conhecimento Fator de Linhagem lhe dá capacidade de ter o DNA e também produzir em salas científicas humanoides, assim como Vinsmoke's, ou se o cientista tiver o sangue Lunariano ou de qualquer outra raça também poder criar um clone. O fator de linhagem está associado às células de pessoas, criando um humano perfeito ou que se assemelhe também, como um lunariano, oni, mink perfeito, pode vir geneticamente modificado também. Esse conhecimento também dá capacidade de reproduzir o poder das Paramécias, obviamente não sendo seu poder 100% mas tendo semelhanças, assim como a gravidade da Zushi Zushi, ou tremores da Gura Gura, e adicionar as suas experiências.",
          details: [
            "O preço de reconstrução é a metade do dinheiro da própria akuma + amostra do poder da akuma",
            "+3 Slot de NPC",
            "Pré-requisito:",
            "➝ Ser um Médico",
            "➝ Estar em Egg-Head ou em alguma ilha do North Blue",
            "➝ Realizar uma auto-extra de 800 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Ser nível 800",
            "Buff:",
            "➝ 1,2× em dois atributos físicos à sua escolha",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Segredos do Governo & Submundo",
          description: "Esse conhecimento junto com o conhecimento do século perdido torna quem quer que o possua automaticamente num Homem morto andando (não literalmente), pois se refere à verdade de tudo que habita nesse mundo. Esses dois juntos se formam um sub-conhecimento, já que se pegarem podem saber tanto sobre quem faz compras no Sub-Mundo e a localização de todos de quem já pisou ou já comprou de sua marca, mistérios por trás do próprio governo, assim como quem está acima dele, tendo ciência e localização de Mariejoa, o nome real de todos os Gorosei's e também seus poderes.",
          details: [
            "Desconto na loja de +50%",
            "Consegue a localização de qualquer um sem pagar",
            "Pré-requisito:",
            "➝ Ser um Capitão / Imediato de Tripulação Yonkou ou um Almirante, ou também pertencer a uma das cadeiras do Submundo",
            "➝ Ser nível 750",
            "➝ Estar em qualquer ilha do RPG",
            "➝ Realizar uma auto-extra de 600 palavras, concedendo 10 níveis além do conhecimento",
            "Buff:",
            "➝ +1,2× em dois atributos físicos à sua escolha",
            "Vagas: 00/02"
          ]
        },
        {
          name: "Forjador (Mestre de Forja)",
          description: "O Forjador ou o Mestre de Forja é aquele que pode construir qualquer lâmina, a lâmina mais dura ou resistente, além de poder deduzir e criar seus Graus, tanto como Ryo, O Wazamono, Wazamono e Saijo Wazamono.",
          details: [
            "Pré-requisito:",
            "➝ Ser Kozuki ou Shimotsuki",
            "➝ Ir para Wano",
            "➝ Realizar uma auto-extra de 800 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Ser nível 600",
            "Buff:",
            "➝ +1,2× em Resistência",
            "➝ +1,2× em Força",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Modo Ashura",
          description: "Esse é um conhecimento oculto e sombrio, além de se basear no Ashura, você consegue multiplicar seus membros e além disso consegue \"multiplicar\" fracionando suas lâminas. O Modo Ashura aumenta sua velocidade e sua força, destruindo seu inimigo em um golpe — é uma técnica feita para finalizar.",
          details: [
            "Pré-requisito:",
            "➝ Realizar uma auto-extra de 700 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Estar na Ilha Shimotsuki",
            "➝ Ter três Meitou's sendo no mínimo de grau Ryo Wazamono",
            "Ser nível 800",
            "Buff:",
            "➝ Aumenta o dano final em 1,2×",
            "➝ 1.25x em velocidade",
            "➝ 1.3x em força",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Rei das Trevas & Rei do Inferno",
          description: "Em um momento, o rei das trevas ou o rei do inferno tem que ter no mínimo um olho seu sacrificado — o Rei das Trevas o esquerdo, e o Rei do Inferno o direito. Quando aberto em batalha, uma vontade imensa surge, crescendo seu poder em batalha!",
          details: [
            "Realizar uma auto-extra de 900 palavras, concedendo 10 níveis além do conhecimento",
            "Ir para o Novo Mundo",
            "Quando com o outro olho aberto aumenta o limite máximo de Haki em 0.5x",
            "Ser Nível 1.000",
            "Vagas: 00/02"
          ]
        },
        {
          name: "O Profeta",
          description: "Em One Piece temos dois personagens que compartilham a habilidade de poder prever o futuro usando um baralho de cartas de Tarô. No entanto, para utilizar esse conhecimento, você precisa ter as cartas em combate. Com isso, as utilizando em qualquer dos momentos você pode prever o futuro da pessoa ou objeto, não da situação.",
          details: [
            "NARRATIVO",
            "Pré-requisito:",
            "➝ Ter 10.000 pontos em Kenbunshoku Haki sem os BUFF'S",
            "➝ Estar em Sabaody",
            "➝ Realizar uma auto-extra de 750 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Estar nível 700",
            "Buff:",
            "➝ 1.65x em Kenbunshoku Haki"
          ]
        },
        {
          name: "Pop'star",
          description: "O Pop'star é o astro das paradas, qualquer pessoa que ouça seus sons se sinta bem mais animado, ou triste dependendo do som. Isso varia também de acordo se a pessoa quer ou não ser encantada, também podendo ter o controle de NPC.",
          details: [
            "Ao escutar sua música, terá a capacidade de fazer todos os bots no raio de sua destreza caírem inconscientes",
            "Para aliados (players ou NPC's): buff de +30% em 2 atributos à sua escolha, durando 3 turnos (não pode usar novamente na mesma batalha)",
            "Para inimigos (players ou NPC's): debuff de -30% em 2 atributos à sua escolha, durando 3 turnos (não pode usar novamente na mesma batalha)",
            "Terá que ter o dobro de Destreza em relação ao espírito do oponente",
            "Pré-requisito:",
            "➝ Ir para Grand Tesoro",
            "➝ Realizar uma auto-extra de 800 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Ser nível 800",
            "Buff:",
            "➝ 1.6x em Destreza",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Mestre Guerreiro",
          description: "Um oculto conhecimento que permeia a cabeça de todo lutador, considerado uma benção entre os mais fortes! Um Poder Oculto que emerge nos melhores de todos! Um Lutador com poderes inconfundíveis, uma capacidade avassaladora de controlar o Chi de todo o corpo e todos os seres vivos à sua volta, apenas usando os punhos. Um Homem que dominou a Arte dos Punhos e entendeu que para machucar alguém de verdade, comece pela Alma! Possui a capacidade de usar sua própria energia Vital como arma, envolvendo seus punhos e aumentando a sua própria força a níveis estrondosos. Rezam as Lendas que um dia, esse foi o Homem que trouxe a Paz para o Mundo.",
          details: [
            "Pré-requisito:",
            "➝ Estar em Kano, ou qualquer outra ilha do novo mundo",
            "➝ Ter seu atributo Força maior do que todos os outros, inclusive Haki",
            "➝ Ser mestre de punhos",
            "➝ Ser nível 900",
            "➝ Realizar uma auto-extra de 800 palavras, concedendo 10 níveis além do conhecimento",
            "Buff:",
            "➝ 1.3x de força",
            "➝ 1,2x haki geral",
            "Vagas: 00/01"
          ]
        },
        {
          name: "O Espírito de Hakuba",
          description: "Dizem as Más Línguas que em uma Ilha distante, um Jovem Espadachim do Estilo Suave um dia perdeu a cabeça. Um Garoto Honrado, de família boa, de boa reputação, que em um dia, efetuou um massacre em toda a sua cidade, em uma Noite qualquer. O Garoto, o único sobrevivente, foi pego pelo Governo e Executado, mas dizem que pouco antes de sua execução, um sorriso amedrontador foi visto em seu rosto, com olhos sanguinários e uma sede de matança insaciável. Os Espadachins de Wano detém de uma lenda como esta, onde dizem que de tempos em tempos um Espírito Maligno desce à terra em busca de retaliação — ele não pensa, ele não sente, ele apenas mata! Sua lâmina é suave como uma brisa de verão, porém dolorosa como o frio do inverno! Tão rápido que mal se vê! E quando se vê, você já está morto. Eles contam que quando o Espadachim dorme, Hakuba age em seu corpo, tomando-lhe a espada e massacrando todos aqueles que estiverem à sua frente, sem o menor pudor.",
          details: [
            "Pré-requisito:",
            "➝ Ser da classe Mestre Combatente",
            "➝ Ir para Dressrosa",
            "➝ Ser espadachim com seu atributo mais focado em Velocidade, até mesmo que Haki",
            "➝ Realizar uma auto-extra de 850 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Ser nível 800",
            "Buff:",
            "➝ 1.5x em velocidade",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Garoto do Amanhã",
          description: "O garoto(a) da profecia, um menino ou menina que foi destinado a destruir ou construir o mundo segundo as profecias das Escrituras do século perdido, antes mesmo do grande dilúvio, e ao descobrir seu propósito, as estrelas do céu brilham, ou se apagam, pois o conquistador ou o libertador, a destruição ou a salvação do mundo acaba de nascer e saber qual o seu propósito.",
          details: [
            "Pré-requisito:",
            "➝ Ter a Nika ou a Yami, ou ter Haki do Rei",
            "➝ Realizar uma auto-extra de 1.200 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Nível 1.200",
            "Buff:",
            "➝ 1.5x de haki geral",
            "➝ 1,25× em um atributo à sua escolha que não seja haki geral",
            "Vagas: 00/02"
          ]
        },
        {
          name: "O Perna Negra / O Perna Vermelha",
          description: "O perna negra ou o perna vermelha é aquele que atingiu o máximo de força e velocidade com o estilo de luta \"Black Leg\", ganhando tanto o conhecimento quanto a alcunha também, podendo aumentar as chamas do seu Ifrit Jambe e ficar igualadas à Mera e superiores às Lunarianas. Conceitual do estilo: Esmagador.",
          details: [
            "Pré-requisito:",
            "➝ Ter o estilo Black Leg",
            "➝ Ser chefe",
            "➝ Ir ao Baratie",
            "➝ Realizar uma auto-extra de 700 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Ser nível 1.000",
            "Buff:",
            "➝ 1.25x de haki do Armamento",
            "➝ 1.25x de haki do Força",
            "➝ 1.25x de haki do Velocidade",
            "Vagas: 00/02"
          ]
        },
        {
          name: "O Copiador",
          description: "O despertar das habilidades proeminentes já perdidas da raça da tribo dos três olhos. Ao despertar todo o potencial de seu olho, este se tornará vermelho em espiral, e este poder lhe concederá a habilidade de copiar qualquer habilidade marcial, porém com falhas — terá que fazer um treino para aprender perfeitamente. Não precisa do estilo de luta para se obter, usando ao bel prazer, porém, apenas vendo este estilo canonicamente. Seus slots ficam infinitos.",
          details: [
            "Pré-requisito:",
            "➝ Ser da tribo dos três olhos",
            "➝ Realizar uma auto-extra de 800 palavras, concedendo 10 níveis além do conhecimento",
            "➝ Ser Nível 700",
            "Buff:",
            "➝ 1,4x em Destreza",
            "➝ 1,3× em agilidade",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Meu Jeito de Ser",
          description: "Existem monstros forjados por linhagem… e existem aqueles que rasgaram o mundo apenas com o próprio nome. Este é o conhecimento daqueles que nasceram sem sangue especial, sem herança divina e sem privilégios, mas fizeram o mar aprender a temê-los. O usuário desperta uma vontade que transcende destino, tornando-se símbolo de ambição pura, conquista e supremacia construída com esforço. A presença de alguém com este conhecimento carrega peso histórico. Sua fama, feitos e reputação geram respeito quase mítico.",
          details: [
            "Pré-requisito:",
            "➝ Não possuir linhagem ou raça especial.",
            "➝ Possuir sobrenome reconhecido no mundo.",
            "➝ Ser Yonkou, Shichibukai, Almirante ou Supernova.",
            "➝ Auto-extra de 800 palavras.",
            "➝ Nível 800.",
            "Buff:",
            "➝ 1,3x em um atributo à escolha",
            "➝ ou 1,15x dividido em dois atributos.(caso escolha haki, não pode pôr no haki geral)",
            "Vagas: 00/03"
          ]
        },
        {
          name: "Maagia Negra",
          description: "Um conhecimento proibido que mistura ocultismo, pactos antigos e artes perdidas anteriores ao Século Perdido. Através dele, o usuário toca leis que não deveriam ser tocadas: deslocamento por portais obscuros, causalidade reversa parcial e maldições ritualísticas. Não é mera feitiçaria, é manipulação da própria desgraça. Teleportes são aberturas em pontos de sombra do mundo. A causalidade dobra ferimentos sobre si mesmo, reescrevendo instantes recentes. Mandingas corroem o alvo por maldição e azar.",
          subitems: [
            {
              name: "Teleporte",
              description: "Uma de suas capacidades é o teleporte. Não é algo que se use em combate, pode servir para se teleportar para lugares, no centro etc. Não pode teleportar para o fundo do mar. Gasta um slot de técnica intermediária. Pode ser usado como uma maneira de fugir ou levar o inimigo para outro lugar junto de você, mas não é um teleporte como da Ope que pode ser usado como estratégia de batalha múltiplas vezes."
            },
            {
              name: "Causalidade",
              description: "O poder de retroceder — quando você é atingido e ferido, como perda de um braço, pode automaticamente retroceder a ação apenas de forma corporal em si mesmo, fazendo o braço voltar, ou caso seja envenenado, pode fazer voltar antes de estar. Em questão de danos, é igual ao poder da Fênix, porém em vez de ser intermediária, é avançada. Cura de força (ou destreza) + conceitual + (30%). Quando o usuário é nocauteado, se ainda restar slots, ele volta acordado automaticamente com o poder das trevas."
            },
            {
              name: "Mandinga",
              description: "O usuário tem a capacidade de realizar pragas e mandingas. Com isso, ele precisa de um fio de cabelo, sangue ou algo corpóreo do oponente. Depois de um turno fazendo um ritual, pode causar um efeito de náusea, cegueira, dores — enfim, um sintoma de sua escolha que não afeta de forma significativa a gameplay, projetando um debuff de -30% em um atributo à sua escolha (menos haki), durando por 3 turnos."
            }
          ],
          details: [
            "Pré-requisito:",
            "➝ Ser da Marinha/Governo/Ordem da Luz.",
            "➝ Ter falado com um Gorosei (narrado).",
            "➝ Estar em ilha do Governo no Novo Mundo.",
            "➝ Auto-extra de 800 palavras.",
            "➝ Nível 800.",
            "Buff:",
            "➝ 1,3x em Haki",
            "Vagas: 00/02"
          ]
        },
        {
          name: "Restrição Divina",
          description: "Um voto absoluto feito pela alma. O usuário renuncia caminhos externos de poder para elevar o próprio corpo ao auge de sua existência. Não é buff comum; é uma condição. Músculos, sentidos e instinto entram em harmonia brutal, transformando o físico em uma arma viva próxima do impossível.",
          details: [
            "Pré-requisito:",
            "➝ Ir ao local de nascimento.",
            "➝ Auto-extra de 900 palavras.",
            "➝ Nível 900.",
            "Buff:",
            "➝ 1,2x em Força",
            "➝ 1,2x em Resistência",
            "➝ 1,2 em Velocidade",
            "Vagas: 00/02"
          ]
        },
        {
          name: "Rainha das Cobras",
          description: "Um pacto ancestral das Kujas com as serpentes soberanas. O conhecimento transforma o corpo em algo entre guerreira e criatura mítica: pele mutável, venenos lendários, sentidos predatórios e regeneração por troca de pele. O veneno é tratado como relíquia viva. Poucos conhecem sua verdadeira natureza.",
          details: [
            "Só pode esticar o pescoço",
            "Seu veneno é o mais poderoso do mundo, superior à Doku Doku padrão (porém a Doku pode replicar, misturar e superar, mas tem que saber da existência dele)",
            "A cada troca de pele, rejuvenesce 20 anos. Na terceira vez, recebe debuff de 10% na resistência; depois da terceira, +5% a cada vez",
            "Pré-requisito:",
            "➝ Estar em Amazon Lily.",
            "➝ Ser Kuja pura.",
            "➝ Extra de 800 palavras.",
            "➝ Nível 1000.",
            "Buff:",
            "➝ 1,15x em Agilidade",
            "➝ 1,15x em Força",
            "Vagas: 00/02"
          ]
        },
        {
          name: "Deus da Terra",
          description: "Um juramento demoníaco ligado aos Portões Rashomon. O usuário recebe acesso ao conhecimento dos quatro portões infernais, muralhas espirituais erguidas por contratos de sangue. Não é mera defesa: é invocação ritualística de barreiras que carregam a vontade do submundo.",
          details: [
            "1° Portão: aguenta 100.000 de dano",
            "2° Portão: aguenta 120.000 de dano",
            "3° Portão: aguenta 150.000 de dano",
            "4° Portão: aguenta 200.000 de dano",
            "Velocidade de surgimento é instantânea, porém para invocar é necessário um selo de mão com sua velocidade original",
            "Se um ataque tem 200.001 de dano, ele destrói e atravessa os 4 portões",
            "Pré-requisito:",
            "➝ Estar em Wano.",
            "➝ Ser aventureiro ou caçador.",
            "➝ Oferecer um sacrifício narrado.",
            "➝ Extra de 850 palavras.",
            "➝ Nível 850.",
            "Buff:",
            "➝ 1,5× em resistência",
            "Vagas: 00/02"
          ]
        },
        {
          name: "Ápice Espiritual",
          description: "Quando espírito e matéria deixam de ser separados. O usuário manifesta sua própria vontade como aura tangível, envolvendo o corpo numa presença bestial ou divina conforme seu espírito. O animal espiritual é manifestação simbólica do poder interior.",
          details: [
            "Pré-requisito:",
            "➝ Ir para ilha natal.",
            "➝ 20.000 em espírito (Haki).",
            "➝ Auto-extra de 900 palavras.",
            "Buff:",
            "➝ 1,2x em Haki",
            "➝ 1,1x em outro atributo físico",
            "Vagas: 00/02"
          ]
        },
        {
          name: "O Honrado",
          description: "A História do Honrado caminha de gerações em gerações, e consiste em alguém que alcançou a completa iluminação através de suas ações. Seu caminho o levou até este momento, e aquele que é agraciado pelos poderes divinos, merece ser chamado de \"O Honrado\".",
          details: [
            "Pré-requisito: Ser Level 1.000",
            "Ser Mestre de Combate",
            "Realizar uma extra de 700 palavras do porquê seu personagem é o mais Honrado, contando história de seus antepassados",
            "Estar em qualquer ilha do novo mundo",
            "Buff:",
            "➝ 1.3x em resistência",
            "➝ 1.25x em Haki da Observação",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Modo Sábio",
          description: "Um dos conhecimentos mais antigos do mundo. Usuários aprendem a absorver energia natural e fundi-la ao próprio corpo, elevando percepção, força e técnicas além dos limites comuns. O Kata do Sapo e a Invocação são extensões desse domínio.",
          subitems: [
            {
              name: "Invocação",
              description: "A Técnica de invocação consiste no usuário retirar uma fapa de seu polegar e realizar selos e bater contra o chão, para que assim possa invocar um poderoso sapo. O nível do sapo escala de acordo o quanto ele é invocado (Inicialmente ele tem lvl 600, podendo evoluir até o lvl 1.000, ganha os mesmos níveis que o usuário em batalha). Se ele morrer em batalha, ele hiberna, podendo ser invocado apenas em outro dia. (Técnica avançada)"
            },
            {
              name: "Habilidades do Sapo",
              description: "Além do Kata do Sapo e Energia natural, o Sapo possui ambos os hakis em seus estágios avançados, tanto previsão como emissão (externa) e pode aprender até a interna."
            },
            {
              name: "Kata do Sapo",
              description: "O Kata do Sapo é uma espécie de novo estilo de luta, onde o usuário pode efetuar socos no ar e usar a pressão desses socos para afetar seu oponente, lhe causando danos externos. (Conta como técnica básica, algo que o personagem se acostumou a usar no dia a dia)"
            }
          ],
          details: [
            "Pré-requisito:",
            "➝ Nível 1000.",
            "➝ Ir ao Monte Myoboku.",
            "➝ Ter Ninjutsu.",
            "➝ Extra de 900 palavras.",
            "Buff:",
            "➝ 1,15x em Força",
            "➝ 1,15x em Resistência",
            "Vagas: 00/02"
          ]
        },
        {
          name: "Contractor",
          description: "Um pacto infernal. O usuário torna-se devedor de uma entidade superior e recebe a maldição da pseudo-imortalidade. Regeneração crítica, persistência sobrenatural e vínculo espiritual amaldiçoado.",
          subitems: [
            {
              name: "Regras do Pacto",
              description: "1ª Regra: Ao fazer o pacto, você propõe sua alma pro próprio Imu. 2ª Regra: Após concluir o objetivo que quis em vida, sua alma não descansará, e se tornará um espírito no mundo real — você se torna um Yokai. 3ª Regra: Após o Shinigami lhe beneficiar, você vai entregar sua vida a ele como recompensa. 4ª Regra: Se tentar burlar o acesso de pedidos (como \"Quero ser almirante\" sendo pirata), o Shinigami vai te matar — ele sabe tudo que você quer, somente desejos impuros, nada para o bem."
            },
            {
              name: "Mecânica de Regeneração",
              description: "Você perde HP normalmente, mas quando chega num momento crítico ele é recuperado, se regenerando no ponto que você iria morrer. Se arrancar um braço e depois o coração, só o coração é recuperado, e a ferida apenas se fecha sem criar novo membro. Danos espirituais não podem ser regenerados. Você ainda pode ser nocauteado se um golpe te deixa com 0 de HP ou se um ATK for 2× à mais que sua DEF."
            },
            {
              name: "Alma Penada",
              description: "Independente de qualquer coisa, ao morrer, sendo uma alma penada, você não pode interagir com seres vivos, a não ser que permitam isso. Você também ganha espécies de cordas de fantoche ao lado da cabeça (na região do ombro), intangíveis (só para estética), simbolizando que você é um fantoche do diabo."
            }
          ],
          details: [
            "Pré-requisito:",
            "➝ Level 950.",
            "➝ Ir até Hell ou possuir liberação por Magia Negra.",
            "➝ Ritual completo do pacto.",
            "Buff:",
            "➝ 1,3x em Haki",
            "Vagas: 00/01"
          ]
        },
        {
          name: "Rei das Feras",
          description: "O domínio sobre as vontades primitivas do mundo. Não é apenas domesticação; é soberania sobre criaturas monstruosas. O usuário aprende a ouvir a linguagem das feras e dobrar Reis dos Mares.",
          details: [
            "Pré-requisito:",
            "➝ Rusukaina ou Amazon Lily.",
            "➝ Derrotar uma fera nível 800+ sozinho.",
            "➝ Auto-extra de 800 palavras.",
            "➝ Nível 750.",
            "Buff:",
            "➝ 1,15x em Resistência",
            "➝ 1,15x em Haki do Armamento",
            "Vagas: 00/02"
          ]
        }
      ]
    },
    "Observações Gerais": {
      intro: "É de suma importância que você se atente a esta seção, pois aqui serão esclarecidas diversas dúvidas acerca do sistema de progressão.",
      items: [
        {
          name: "[ 1 ] Sobre as Autonarradas",
          description: "Em relação às Auto Narradas, evite exageros desnecessários e lembre-se de manter a coerência com a realidade atual do seu personagem."
        },
        {
          name: "[ 2 ] Sobre os Treinos Solos",
          description: "Nos treinamentos solo, será permitido criar Projetos, evoluir NPCs e realizar o treinamento de até duas áreas, como Hakis (Kenbushoku e Busoshoku) ou até duas técnicas. Também será possível executar trabalhos de profissão. Entretanto, é vedado realizar trabalhos de profissão e projetos no mesmo treinamento, assim como treinar técnicas ou habilidades enquanto se executa um trabalho de profissão ou se desenvolve um projeto. Não é permitido concentrar todas as atividades em um único treino; o jogador deverá focar em apenas uma das áreas descritas como permitidas."
        },
        {
          name: "[ 3 ] Sobre as interações Fillers",
          description: "Embora sejam \"atemporais\", as interações Filler devem ser devidamente restritas em determinados aspectos narrativos. Não é permitida a troca de itens, tampouco a ocorrência de lutas ou quaisquer ações que alterem a jogabilidade ou a build do personagem. Isso inclui, por exemplo, o uso de medicações, transplantes ou mudanças externas e internas viabilizadas por meios médicos, científicos ou por Akuma no Mi. As interações Filler têm como finalidade exclusiva a expansão do enredo do personagem, especialmente no que diz respeito à obtenção de conhecimentos sobre determinado assunto ou indivíduo."
        },
        {
          name: "[ 4 ] Sobre as interações Canônicas",
          description: "Como descrito anteriormente, as interações Canônicas são mais profundas e exigem que ambos os personagens estejam na mesma ilha. As limitações aplicadas às interações Filler não se estendem a este tipo de interação, sendo permitidas ações como a troca de itens (dentro de critérios específicos), lutas, entre outras possibilidades. Essas interações contribuem diretamente para o desenvolvimento canônico do personagem, estabelecendo relações que interferem de forma significativa em seu enredo. Dessa forma, tornam-se possíveis procedimentos como transplantes, uso de medicações e determinadas mudanças internas ou externas. Tudo o que ocorrer em uma interação canônica passará a integrar a lore atual do personagem. Por esse motivo, não é permitido realizar interações canônicas enquanto o personagem estiver participando de eventos, caçadas ou dominações, uma vez que tais atividades também são consideradas fatos canônicos."
        },
        {
          name: "[ 5 ] Sobre os treinamentos em Duo",
          description: "Nos treinamentos em conjunto, será permitida a aprendizagem de técnicas, uma vez que contam como treino regular, sendo possível treinar até duas técnicas por sessão. Também será possível aprender um novo estilo de luta, desde que exista outro personagem que já o domine e esteja disposto a ensiná-lo, além de haver slot disponível para tal aprendizado. Da mesma forma, será permitido aprender Haki, tanto em sua forma básica quanto avançada, seguindo a mesma regra aplicada aos estilos de luta: é necessário que outro personagem, já detentor do conhecimento, realize o treinamento e a instrução."
        },
        {
          name: "[ 6 ] Sobre as divulgações",
          description: "Em relação às divulgações em grupos, é importante observar que há um limite estabelecido. Cada jogador poderá realizar até 10 divulgações em grupos, com um limite máximo de bonificação de 12 níveis (LvL). Esse tipo de divulgação poderá ser feito apenas uma vez por semana. Já no caso das divulgações que resultem na entrada de novos jogadores, também existe um limite semanal. Ao trazer 1 pessoa, a bonificação será de 6 níveis (LvL), sendo essa premiação individual válida para até 4 pessoas. Caso sejam trazidas 5 pessoas, o jogador receberá a bonificação máxima de 20 níveis (LvL). A divulgação de até 5 pessoas poderá ser realizada uma vez por semana; acima desse número, não haverá bonificação adicional. Ressalta-se que, para que a recompensa seja validada, os novos jogadores deverão realizar ao menos uma cena e permanecer no grupo por um período mínimo de 48 horas."
        }
      ]
    }
  },
  "Organizações": {
    "Pirata": {
      intro: "Informações sobre as categorias e hierarquias do mundo pirata no RPG.",
      items: [
        {
          name: "SUPERNOVAS",
          description: "Uma geração inteira de novatos que se lançou ao mar está explodindo coisas e causando confusão por onde passa. Em uma era em que a pirataria ganha renome muito tempo após a partida de Joy Boy, com o Deus do Sol desaparecido e os deuses que governam o mundo sendo agora outros astros, surge uma Supernova destinada a abalar todas as estruturas.",
          subitems: [
            {
              name: "Sobre a Pior Geração",
              description: "Os Supernovas compõem a Pior Geração de Piratas. Na obra de One Piece, a cada era surge uma nova geração — a Era de Rocks, a Era de Gol D. Roger e, agora, a Era da Pior Geração. No RPG, seguimos uma proposta bastante semelhante.",
              details: [
                "Obs¹: Tornar-se um membro da Pior Geração só possui duas formas — ou você derrota um deles, provando que é mais poderoso, ou aguarda o surgimento de uma vaga e tenha uma recompensa superior a 350.000.000 antes de chegar ao Novo Mundo.",
                "Obs²: Não é obrigatório que os Supernovas se conheçam, mas os NPCs sabem exatamente quem eles são, assim como os membros de suas tripulações."
              ]
            },
            {
              name: "Vantagens de ser Supernova",
              description: "Ao se tornar um membro da Pior Geração, todos no Submundo e no Governo Mundial saberão quem você é. Isso lhe trará renome e pode ser o primeiro passo rumo ao sucesso. O Governo Mundial detesta você, mas, em compensação, o Submundo já enxerga uma parceria. Ao se tornar Supernova, o Submundo automaticamente irá propor uma afiliação com tudo o que se tem direito, enquanto o Governo irá caçar você e seu bando ou guilda.",
              details: [
                "Também é importante dizer que se afiliar ao Submundo não significa ser amigo dos Yonkous, isso apenas indica que estão mais próximos.",
                "Ninguém nunca irá te dedurar, pois há um código. O que é possível é aproximar essas relações."
              ]
            },
            {
              name: "Membros Atuais",
              details: [
                "Ameyuri Sanzu (NPC)",
                "Daichi Hazami (NPC)",
                "VAGO", "VAGO", "VAGO", "VAGO", "VAGO"
              ]
            }
          ]
        },
        {
          name: "YONKOUS",
          description: "Esse é um título temido nos mares e altamente respeitado em todo o mundo. Os Quatro Imperadores Piratas não são meros capitães, são um dos três pilares que sustentam o equilíbrio global. São capazes de mobilizar exércitos inteiros para a guerra e, individualmente, possuem poderes que rivalizam com os almirantes e os Shichibukai. Todos mantêm ligações com o Submundo, e alguns chegam a controlá-lo diretamente. Suas frotas são vastas, e as ilhas sob seu comando são numerosas, pois invadir território de um Yonkou é considerado um ato de extrema gravidade.",
          subitems: [
            {
              name: "Como se tornar Yonkou",
              details: [
                "1️⃣ Possuir pelo menos 1 ilha no Novo Mundo e 3 na Grand Line, além de ter recompensa mínima de 2.000.000.000. Após cumprir esses requisitos, só se torna Yonkou se derrotar um dos atuais ou caso um deles morra e a Marinha o reconheça oficialmente.",
                "2️⃣ Os Yonkous não são mais chamados de Capitães, agora recebem o título de Almirantes. Seus membros mais antigos passam a ser conhecidos como Comandantes. Somente os Yonkous podem anexar outras tripulações ao seu império.",
                "3️⃣ É possível se afiliar a um Yonkou. Para isso, basta já estar ligado ao Submundo ou dirigir-se até uma de suas ilhas com esse objetivo. Deve-se selar um voto de confiança, bebendo o saquê oferecido por ele.",
                "4️⃣ Não é uma regra que a Marinha não possa te atacar — ela apenas aguarda a oportunidade certa. Se seus territórios não contarem com NPCs fortes o suficiente, o Almirante de Frota pode enxergar uma brecha.",
                "5️⃣ Players Yonkous podem afiliar outras tripulações à sua frota. Toda a renda dessas tripulações passa a ser direcionada ao Yonkou, enquanto os afiliados recebem todos os benefícios. Em contrapartida, ficam sujeitos a ordens diretas, convocações para a guerra e comandos estratégicos."
              ]
            },
            {
              name: "Yonkous Atuais",
              details: [
                "Vinsmoke Rock Hazama — A Aranha Negra",
                "Edward Low — O Incomparável sobre os Céus",
                "Mary Peacefounder — A Dama do Purgatório",
                "Howell D. Davis — A Entidade de Luz"
              ]
            }
          ]
        },
        {
          name: "SUBMUNDO",
          description: "O Submundo não é um lugar físico, ele é formado pelos piores que existem. Funciona como uma espécie de governo, regido pelo Código Pirata. Ninguém sabe quem o criou nem há quanto tempo existe, apenas aqueles que o controlam conhecem seus segredos. Os Chefões governam o Submundo, assim como os Gorosei comandam o Governo Mundial. A diferença é que seu envolvimento direto é mínimo, apenas os mais próximos conhecem a verdade, e ela jamais é revelada. O Submundo não é formado apenas por piratas. Marinheiros corruptos podem se infiltrar, assim como revolucionários que buscam tirar proveito da Causa, além dos mais comuns, os Caçadores de Recompensa.",
          subitems: [
            {
              name: "Afiliação ao Submundo",
              description: "Para se afiliar ao Submundo, existem apenas duas formas — ou você já é reconhecido e útil para ele, ou precisa se destacar por meio de negócios e influência. O Código Pirata é levado a sério: palavras têm peso, o nome é o maior patrimônio, dívidas devem ser pagas mesmo que custem sangue, e respeito é um valor a ser conquistado.",
              details: [
                "Obs¹: Para se afiliar ao Submundo, basta dominar uma ilha e estabelecer negócios do Mercado Negro nela. Alternativamente, conquiste um título como Supernova, Yonkou, Almirante ou Shichibukai.",
                "Obs²: Os afiliados ao Submundo devem pagar uma taxa de fidelidade semanal no valor de 150.000.000."
              ]
            },
            {
              name: "Relações com o Governo Mundial",
              description: "O Submundo mantém relações com o Governo Mundial. Tenryuubitos e reis frequentam casas de leilões em busca de escravos. Um Tenryuubito é um comprador valioso — criar qualquer desavença pode atrapalhar os negócios. Por isso, sob nenhuma hipótese um dos Chefões pode ferir um deles diretamente. Os Chefões atuam em conjunto em busca de lucros, mas a realidade é que se detestam. Há apenas uma motivação capaz de uni-los: encontrar o One Piece e se tornar o Rei dos Piratas."
            },
            {
              name: "O Gerente",
              description: "O Corretor ocupa um cargo essencial. Ele é um NPC responsável por mediar entre os Chefões e agir em nome deles. É o Gerente quem se comunica diretamente com os Chefões — você não fala com eles.",
              details: ["Donquixote Olivier Levasseur (NPC)"]
            },
            {
              name: "O Braço Direito e Esquerdo",
              description: "Os braços do Gerente atuam em ambas as frentes para garantir que o Submundo mantenha o controle. O braço direito está ligado ao Governo Mundial, enquanto o braço esquerdo atua junto ao Exército Revolucionário. Mas a verdade é que você nunca sabe quem é quem até que já seja tarde demais.",
              details: ["VAGO"]
            },
            {
              name: "Os Chefões",
              description: "Os Chefões são figuras de poder absoluto no Submundo. Ninguém pode contatá-los diretamente, toda comunicação passa pelo Gerente. Eles se reúnem raramente, mas quando o fazem, sentam-se à mesa para trocar saquês e negócios."
            },
            {
              name: "A Cadeira do Tráfico",
              description: "O Chefão responsável pelas guerras vê no conflito a base de seus negócios — quanto mais gente brigando, melhor. Revolucionários e Piratas são seus principais compradores. Para ele, não existem países em guerra, apenas oportunidades.",
              details: ["Howell D. Davis (NPC)"]
            },
            {
              name: "A Cadeira do Escravista",
              description: "O Chefão responsável pelo mercado de escravos mantém ilhas sob seu controle, onde funcionam seus postos e leilões oficiais. O verdadeiro lucro aparece quando Reis e Nobres Mundiais entram na disputa.",
              details: ["François l'Olonnais (NPC)"]
            },
            {
              name: "A Cadeira da Informação",
              description: "É ele quem controla as mentiras sujas contadas pelo mundo. Informação vale muito dinheiro nesse mundo, e esse valor se transforma em poder nas mãos de quem a detém.",
              details: ["Mary Peacefounder (NPC)"]
            },
            {
              name: "A Cadeira do Contratante",
              description: "O Contratante é responsável por captar negócios para os Caçadores de Recompensas, os principais soldados do Submundo. Ele recebe informações sobre procurados ao redor do mundo e encaminha essas propostas para as Guildas afiliadas ao Submundo, cobrando uma taxa por seus serviços.",
              details: ["Sanjuan Lafitte (NPC)"]
            },
            {
              name: "Lucro Atual",
              details: ["5.000.000.000", "Os lucros são atualizados a cada Time Skip, quando o desempenho de cada Chefão é avaliado."]
            }
          ]
        }
      ]
    },
    "Marinha": {
      intro: "Para os leigos ou para aqueles que começaram a jogar pela primeira vez, a Marinha é um dos três pilares de poder no mundo, junto com os Yonkous e os Shichibukai. Seu trabalho é servir e manter a lei, muitas vezes aos caprichos do Governo Mundial, sempre em nome da Justiça. Cada marinheiro desempenha um papel fundamental na grande máquina que é essa força militar.",
      items: [
        { name: "RECRUTA", description: "Agora que iniciou sua caminhada, está totalmente subordinado a qualquer um acima de você. Hierarquia e disciplina são lemas fundamentais na vida de um militar. Por isso, procure se esforçar e aprender bastante. Treine e trabalhe duro para se tornar mais forte.", details: ["Salário: 10.000.000", "Nível: 1"] },
        { name: "CABO", description: "Cabo é uma patente que o torna responsável por certos deveres, como patrulhas diárias em grupo, policiamento da base e dos portos. Contudo, ainda não é autorizado a solicitar transferência de ilha.", details: ["Salário: 20.000.000", "Nível: 100"] },
        { name: "SARGENTO", description: "Agora que chegou até aqui, é natural sentir certa ansiedade para partir rumo a outras ilhas e enfrentar piratas. A partir deste posto, já é permitido navegar para outros territórios. Caso não seja um navegador, a Marinha disponibiliza um navio e uma tripulação.", details: ["Salário: 75.000.000", "Nível: 180"] },
        { name: "TENENTE", description: "Um Tenente da Marinha é um cargo extremamente respeitável nos Blues. Como Tenente, você passa a caçar cada vez mais piratas, levando-os à prisão e fazendo a Justiça ser cumprida. Tome cuidado: alguns piratas irão querer matá-lo para fazer um bom nome.", details: ["Salário: 140.000.000", "Nível: 230"] },
        { name: "COMANDANTE", description: "Um Comandante é algo extremamente forte, um nome temido pelos piratas dos Blues. Isso significa que já não é mais possível permanecer nessas águas, devendo partir para a Grande Rota, caso ainda não o tenha feito.", details: ["Salário: 200.000.000", "Nível: 325"] },
        { name: "CAPITÃO", description: "Um Capitão é uma patente temida nos Blues e reconhecida na Grande Rota. Com ela, já é possível ter sob suas ordens um navio forte e bons soldados, desde que haja autorização de superiores.", details: ["Salário: 250.000.000", "Nível: 400"] },
        { name: "COMODORO", description: "Já deve ter navegado por boa parte da Grande Rota e ter chegado na Red Line. O Comodoro é um vão que há entre as forças da Marinha de patentes para chegar no almirantado. A partir daqui, é preciso ser reconhecido.", details: ["Salário: 300.000.000", "Nível: 490"] },
        { name: "CONTRA-ALMIRANTE", description: "Esse posto é frequentemente ridicularizado na obra, assim como boa parte da Marinha, mas aqui optamos por lhe conceder o devido respeito, colocando-o em uma posição de prestígio.", details: ["Salário: 350.000.000", "Nível: 560"] },
        { name: "VICE-ALMIRANTE", description: "Esse cargo é extremamente respeitado e reconhecido na Marinha. Nele, aprendemos em One Piece que títulos nem sempre significam tudo, pois Garp, mesmo sendo apenas um Vice-Almirante, está muito além de Smoker.", details: ["Salário: 450.000.000", "Requisitos: Ter Dominado uma Ilha"] },
        { name: "DIVISÃO SSG", description: "A SSG é uma divisão científica da Marinha que fica em uma ilha secreta. Apenas os Vice-Almirantes, Almirantes e o Almirante de Frota sabem sua verdadeira localização. É nessa divisão que as grandes soluções para acabar com os piratas e as armas da Marinha são criadas.", details: ["Salário: 550.000.000", "Requisitos: Classe Cientista ou Inventor. Possuir o conhecimento do Século Perdido", "Dr. Newthug (NPC)", "VAGA", "VAGA"] },
        { name: "ALMIRANTE", description: "Os três Almirantes são um grupo de homens ou mulheres que estão no eixo entre os pilares de poder da Marinha. São poderosos o bastante para enfrentarem um dos Yonkous no mano a mano, extremamente inteligentes ao realizar ações táticas ou ardilosas para vencer uma guerra. Se para se tornar um Vice-Almirante é preciso derrotar um pirata no Novo Mundo, tornar-se um Almirante exige derrotar uma tripulação, libertar uma ilha ou até mesmo um reino.", details: ["Salário: 1.000.000.000", "Requisito: Feitos na Grand Line e no Novo Mundo", "Shin-Hei Sanshuō — Olsen (NPC)", "Ernesto Garnier — Shi'Hogane (NPC)", "Gyutan Laverger — Bosílio (NPC)"] },
        { name: "ALMIRANTE DE FROTA", description: "O Almirante de Frota é o Fuzileiro Naval mais poderoso, abaixo apenas do Almirante Supremo. É ele quem desempenha o papel de sustentar a Justiça no mundo. Shichibukai não são aceitos sem o seu aval, recompensas não são concedidas sem o seu consentimento; absolutamente nada é feito sem que ele saiba ou permita. O lema da Marinha é \"Justiça Moral\".", details: ["Salário: 1.500.000.000", "Requisitos: Ter enfrentado um Yonkou de igual", "John Grenfell Belfort — O Brando (NPC)"] }
      ]
    },
    "Shichibukai": {
      intro: "Os Sete Corsários do Mar, como também são conhecidos, são piratas que recebem anistia da Marinha para \"andar na linha\". Eles têm suas recompensas congeladas, assim como as de suas tripulações, e tornam-se aliados do Governo Mundial.",
      items: [
        {
          name: "Regras dos Shichibukai",
          subitems: [
            { name: "Crimes Perdoados", description: "A primeira vantagem de se tornar um Corsário é que seus crimes são perdoados e a Marinha deixa de ter a obrigação de caçar você ou qualquer membro de sua tripulação. Qualquer território que passe a integrar o Governo Mundial será reconhecido como tal." },
            { name: "Liberdade de Ação", description: "Marinheiros odeiam os Shichibukai, não apenas pela hipocrisia que o título carrega, mas também pelo tratamento especial que recebem. Os Corsários podem agir em suas ilhas sem supervisão direta e, muitas vezes, sem serem notados." },
            { name: "Recompensa Congelada", description: "A recompensa de um Shichibukai é congelada, pois ele deixa de ser considerado uma ameaça ao Governo Mundial. Os Shichibukai podem agir como bem entenderem em qualquer ilha, desde que esta não esteja sob domínio do Governo Mundial, caso contrário, seu título poderá ser revogado pelo Almirante de Frota." },
            { name: "Territórios", description: "A Marinha não caça nem intervém nas ações dos Shichibukai em ilhas que não pertencem ao Governo Mundial. Eles podem dominar territórios em qualquer região, e a Marinha não irá atrás deles. Nessas circunstâncias, os Shichibukai exercem pleno controle e domínio sobre o local." },
            { name: "Submundo", description: "O Submundo favorece os Shichibukai e, sempre que um novo corsário é nomeado, busca estabelecer algum tipo de afiliação. Como essas ilhas não são vigiadas pela Marinha, o ambiente torna-se muito mais favorável para os negócios." }
          ]
        },
        {
          name: "Shichibukai Atuais",
          details: [
            "Francis Drake (NPC)",
            "Sir Henry Morgan (NPC)",
            "Draven Surcouf (NPC)",
            "VAGO", "VAGO", "VAGO", "VAGO"
          ]
        }
      ]
    },
    "Governo Mundial": {
      intro: "O Governo Mundial possui três organizações fundamentais sob o seu comando. A Marinha é responsável pela manutenção social. Impel Down os absorve atrás de suas grades. Já a Cipher Pol possui obrigações bem parecidas com as da Marinha, porém atua de forma exclusiva na manutenção governamental em ilhas pelo mundo — ou seja, age por debaixo dos panos, modificando o cenário político e social.",
      items: [
        {
          name: "CIPHER POLL",
          description: "Fazer parte da Cipher Pol é algo sério. Diferente da Marinha, onde existe uma conspiração por parte da SWORD e a ideia de Justiça Moral, espera-se que seus membros cumpram seus deveres. Na Cipher Pol não pode ser assim. Seus agentes são doutrinados em seus deveres e acreditam, quase como uma religião, que tudo o que fazem está certo. Vale lembrar que a Cipher Pol não é independente da Marinha, são organizações que atuam em paralelo.",
          subitems: [
            { name: "CP1", details: ["Salário: 10.000.000", "Nível: 1-100"] },
            { name: "CP2", details: ["Salário: 20.000.000", "Nível: 100-180"] },
            { name: "CP3", details: ["Salário: 70.000.000", "Nível: 180-230"] },
            { name: "CP4", details: ["Salário: 140.000.000", "Nível: 230-325"] },
            { name: "CP5", details: ["Salário: 200.000.000", "Nível: 325-400"] },
            { name: "CP6", details: ["Salário: 250.000.000", "Nível: 400-490"] },
            { name: "CP7", details: ["Salário: 300.000.000", "Nível: 490-560"] },
            { name: "CP8", details: ["Salário: 350.000.000", "Nível: 560-650"] },
            {
              name: "Obs: CP1 a CP8",
              description: "Até aqui todas as CPs são subordinadas do Almirantado, especificamente Contra-Almirante e Vice-Almirante. Raças especiais ou consideradas exóticas serão discriminadas e sofrerão algum tipo de preconceito — One Piece gira em torno de uma crítica social e, como fãs, queremos conservar esse trabalho do Oda-sensei."
            },
            {
              name: "CP9",
              description: "A CP9 é somente subordinada aos Almirantes e ao Almirante de Frota. Funcionam com o conhecimento apenas dos Vice-Almirantes, mas longe do seu controle. Devem ser tratados como inexistentes; apenas o alto escalão do Governo e os mais envolvidos no submundo possuem conhecimento deles. São a única CP que possui autorização para matar um civil sem sofrer consequências.",
              details: ["Salário: 450.000.000", "Requisito: Ter feito uma dominação", "VAGA ×5"]
            },
            {
              name: "CP0",
              description: "A CP0 é somente subordinada ao Gorosei e foge do controle até mesmo do Almirante Supremo. Portanto, tudo o que lhes for ordenado virá direto do alto escalão, desde um Buster Call até a invasão da ilha de um Yonkou.",
              details: ["Salário: 700.000.000", "Requisitos: Ter sido CP9 + Merecimento", "Bartho Rob (NPC)", "VAGA ×4"]
            }
          ]
        }
      ]
    },
    "Revolucionário": {
      intro: "Os piratas são pessoas livres que vivem pelo mundo fazendo suas próprias histórias, sem amarras. O Exército Revolucionário compartilha dessa liberdade, mas por não se submeter ao Governo Mundial, é considerado inimigo e seus membros frequentemente têm recompensas por suas cabeças. Eles são o grito de mudança, a maré que traz um novo e que assusta os nobres mundiais. Lutam por um mundo livre de represálias e inimigos. No RPG, o Exército Revolucionário é dividido em 6 grupos/esquadrões altamente importantes.",
      items: [
        {
          name: "Observações",
          details: [
            "Obs¹: Levem a sério seu compromisso com o Exército Revolucionário. Pensem nele como a Cipher Poll, onde seus agentes são doutrinados a acreditar que o que fazem é o certo.",
            "Obs²: Alianças piratas são totalmente permitidas. Revolucionários podem até estar em navios piratas por algum tempo, mas dependendo da tripulação, isso pode atrair má reputação."
          ]
        },
        { name: "RECRUTA", description: "Como recruta, você deve mostrar seu valor, fazendo com que todos vejam que não é um espião da Cipher Poll ou da Marinha disfarçado, e que possui enorme determinação para lutar pela causa. Você será devidamente testado.", details: ["Salário: 50.000.000", "Nível: 0"] },
        { name: "SOLDADO", description: "Agora que passou no Exército Revolucionário, você é visto como alguém confiável. Poderá escolher onde deseja servir, mas saiba que estará na linha de frente quase o tempo todo.", details: ["Salário: 150.000.000", "Nível: 125"] },
        { name: "SARGENTO", description: "Agora você comanda um pequeno grupo de soldados e recrutas durante suas viagens ao longo de sua jornada.", details: ["Salário: 300.000.000", "Nível: 350"] },
        { name: "MAJOR", description: "Você agora é uma figura reconhecida dentro do Exército Revolucionário. Além de comandar soldados, recrutas e sargentos, você possui duas bases próprias para recrutar e convencer pessoas a se unirem à sua causa.", details: ["Salário: 450.000.000", "Nível: 400"] },
        {
          name: "Comandantes Regionais",
          subitems: [
            { name: "Comandante do Leste", description: "Responsável por liderar a revolução no East Blue, enfrentando diretamente o Major de Blue. O Comando do Leste é especializado em assaltos, formado por brutamontes habilidosos e destemidos.", details: ["Lusia Hirumei (NPC)", "Salário: 550.000.000", "Nível: Merecimento"] },
            { name: "Comandante do Oeste", description: "Esse comando atua no West Blue e é conhecido por causar grandes entradas, sempre com muito barulho. São semelhantes ao Comando do Leste, mas preferem explodir as coisas.", details: ["Kagami Miyamoto (NPC)", "Salário: 550.000.000", "Nível: Merecimento"] },
            { name: "Comandante do Sul", description: "Foca mais em espionagem. Seus membros trabalham com infiltração e exploram a sutileza dos detalhes. São pessoas misteriosas e altamente estratégicas.", details: ["Hichikatsu (NPC)", "Salário: 550.000.000", "Nível: Merecimento"] },
            { name: "Comandante do Norte", description: "Este é o grupo de pesquisa e desenvolvimento do Exército Revolucionário. Altamente ultrassecreto, qualquer informação vazada para a Marinha será severamente perseguida.", details: ["Satoro Rakushō (NPC)", "Salário: 550.000.000", "Nível: Merecimento"] }
          ]
        },
        { name: "VICE-LÍDER", description: "O Vice-Líder do Exército Revolucionário é uma das figuras mais procuradas do mundo, com recompensa equivalente à de um Comandante Yonkou ou de um Vice-Almirante altamente condecorado. Ele é responsável pelos revolucionários da Grande Rota.", details: ["Mael Windfalls (NPC)", "Salário: 1.000.000.000", "Nível: Merecimento"] },
        { name: "LÍDER", description: "O Líder é a figura central do Exército Revolucionário, sempre sendo o alvo das conspirações. São seus ideais e suas palavras que inflamam a determinação de seus seguidores e despertam neles a vontade de lutar.", details: ["Drayden D. Black (NPC)", "Salário: 1.500.000.000", "Nível: Merecimento"] }
      ]
    },
    "Germa 66": {
      intro: "A Germa 66 é amplamente conhecida no mundo como os principais antagonistas do herói fictício da Marinha, Sora, conforme retratado nos quadrinhos de longa duração do World Economic Times. Por outro lado, a existência da Germa 66 é bem conhecida tanto no Submundo quanto nos mares em que atuam militarmente. Independentemente de as pessoas acreditarem ou não na realidade do exército, a organização mantém uma reputação temível em todo o mundo.",
      items: [
        { name: "Agente Iniciante", description: "Os recém-chegados à Germa começam como agentes de campo iniciantes. Eles passam por treinamento básico e estão em missões de baixo risco.", details: ["Salário: 10.000.000 Berries", "Nível: 1-100"] },
        { name: "Agente Junior", description: "Após ganhar experiência, os agentes são promovidos a agentes de campo júnior. Eles assumem missões mais desafiadoras e começam a desenvolver suas habilidades, ganhando acesso a armas básicas aprimoradas.", details: ["Salário: 20.000.000 Berries", "Nível: 100-175"] },
        { name: "Agente Sênior", description: "Os agentes que se destacam em suas missões podem avançar para agente de campo sênior. Eles são responsáveis por liderar equipes menores em operações de médio risco, com embarcações e armamentos fornecidos pela organização.", details: ["Salário: 50.000.000 Berries", "Nível: 175-320"] },
        { name: "Agente de Inteligência", description: "Dedicado à coleta de informações e espionagem. Os agentes de inteligência trabalham nas sombras para obter dados valiosos, tendo acesso a uma Raid Suit básica.", details: ["Salário: 100.000.000 Berries", "Nível: 320-450"] },
        { name: "Operações Especiais", description: "Esses agentes são altamente treinados em combate e técnicas especiais. Ganham influência e respeito no submundo, tornando-se capazes de adquirir informações de seus alvos pela metade do preço.", details: ["Salário: 150.000.000 Berries", "Nível: 450-600"] },
        { name: "Alto Comando", description: "Os agentes de alto comando são responsáveis por coordenar as operações da Germa em uma determinada região. Possuem Raid Suit incompleto, adaptado para akumados ou não.", details: ["Salário: 250.000.000 Berries", "Nível: 600-750"] },
        { name: "Diretor de Operações", description: "Cada região da Germa tem um diretor de operações que supervisiona todas as atividades na área. Podem desenvolver projetos de grau Wazamono.", details: ["Salário: 315.000.000 Berries", "Nível: 750-900"] },
        { name: "Vice-Líderes", description: "Os vice-líderes são os braços direitos dos líderes da Eclipse. Possuem autoridade substancial e lideram a organização na ausência dos líderes. Podem desenvolver projetos de grau Ryo Wazamono.", details: ["Salário: 400.000.000 Berries", "Nível: +900 e Mérito"] },
        {
          name: "Líderes",
          description: "Os líderes são os principais responsáveis por tomar decisões estratégicas e definir os objetivos da organização. Possuem controle absoluto sobre todas as operações. Ganho de Raid Suit completo e projetos aceitos de grau até Ryō Wazamono.",
          details: [
            "Salário: 650.000.000 Berries",
            "Requisito: Derrotar um dos líderes atuais e ser aprovado por Entity",
            "First Leader — Yūgure Riden",
            "Second Leader — Kari Shogun",
            "Third Leader — Ichiro Sanshō"
          ]
        },
        {
          name: "Entity 676",
          description: "Entity 676 é o líder supremo da Germa. Sua identidade e objetivos permanecem envoltos em mistério, mas detém poder absoluto sobre a organização e suas alianças. A identidade de tal figura é conhecida apenas pelo líder da Germa 66, Darius.",
          details: [
            "Berries: 750.000.000",
            "Nível: 1300",
            "Vinsmoke Darius (NPC)"
          ]
        }
      ]
    },
    "Baroque Works": {
      intro: "A Baroque Works pode ser descrita como uma liga de superassassinos e caçadores de recompensa extremamente famosa, que conta com milhões de bandidos, procurados pelo Governo Mundial e piratas não filiados a nenhuma tripulação, todos em busca de dinheiro fácil. Movidos pelo dinheiro, a Baroque Works conta com uma Lista de Procurados própria, por meio da qual reis corruptos podem ordenar mortes, ataques a outros reinos, dizimações, assassinatos de marinheiros e muito mais.",
      items: [
        { name: "Millions", description: "Os Millions são formados por novatos, geralmente piratas ou bandidos de baixo escalão, ainda iniciantes na caminhada do assassinato. Sua principal função é acatar as ordens dos membros do alto escalão.", details: ["Salário: 5.000.000", "Nível: 1"] },
        { name: "Billions", description: "Os Billions são soldados subordinados diretamente aos agentes cujo número supera o 5, podendo alcançar uma alta patente em caso da morte de um agente.", details: ["Salário: 15.000.000", "Nível: 1-50"] },
        {
          name: "Sistema de Codinomes",
          description: "A partir daqui, os codinomes se tornam mais importantes que o próprio nome do indivíduo. Quanto menor o número, maior será a sua patente; quanto mais relevante o feriado, maior será a sua recompensa. Normalmente, os números são designados aos homens e os feriados às mulheres, mas isso não é uma regra obrigatória."
        },
        { name: "Mr. 13 e Miss Friday", description: "Os primeiros agentes de Fronteira têm como objetivo principal silenciar qualquer membro que traia a corporação ou falhe em cumprir sua missão. Recebem ordens diretamente do Chefe da Organização.", details: ["Salário: 1.000.000.000", "Nível: ???", "Requisitos: Merecimento e derrotar os agentes no cargo"] },
        { name: "Mr. 12 e Miss Saturday", description: "O Primeiro Par de agentes é considerado o mais fraco da Baroque Works, mas ainda assim o mais promissor. Recebem Procurados de nível 1 a 2.", details: ["Salário: 30.000.000", "Nível: 51-100", "Benefício: Recompensa pela cabeça dos Procurados (-40%)", "VAGO ×2"] },
        { name: "Mr. 11 e Miss Thursday", description: "Agentes Intermediários, considerados promissores dentro da Baroque Works. Função principal é executar missões e caçadas de nível 2.", details: ["Salário: 70.000.000", "Nível: 101-150", "Benefício: Recompensa pela cabeça dos Procurados (-30%)"] },
        { name: "Mr. 10 e Miss Tuesday", description: "A partir deste ponto, vocês já podem se denominar agentes da Baroque Works. Os Billions e Millions estão sob seu comando — podem recrutar até 100 deles para auxiliá-los em suas missões.", details: ["Salário: 130.000.000", "Nível: 200-270", "Benefício: Recompensa (-30%) + Até 100 bots (LvL 50)", "VAGO ×2"] },
        { name: "Mr. 9 e Miss Wednesday", description: "Conforme ele se aproxima dos números abaixo de 5, seu cargo se torna visado dentro da organização, e qualquer deslize pode significar sua morte.", details: ["Salário: 200.000.000", "Nível: 300-345", "Benefício: Recompensa (-30%) + Até 150 bots (LvL 50)", "VAGO ×2"] },
        { name: "Mr. 8 e Miss Monday", description: "Os Mr. 8 e Miss Monday são líderes dos Misters menores e desempenham um papel crucial na coordenação dos Billions e Millions. Missões normalmente de Nível 4 a 5.", details: ["Salário: 300.000.000", "Nível: 350-430", "Benefício: Recompensa (-30%) + Até 200 bots (LvL 50)", "VAGO ×2"] },
        { name: "Mr. 7 e Miss Father's Days", description: "Agentes de Missões Secretas, geralmente contratados para agir nas sombras. Se algo precisa explodir, são eles que plantam a bomba; se alguém deve morrer em silêncio, são eles que executam.", details: ["Salário: 400.000.000", "Nível: 430-500", "Benefício: Recompensa (-20%) + Até 100 bots (LvL 100)", "VAGO ×2"] },
        { name: "Mr. 6 e Miss Mother's Days", description: "Estes agentes são mestres na arte da infiltração. Podem passar dias, meses ou até anos inseridos em organizações e reinos. A espionagem é a especialidade desses agentes.", details: ["Salário: 440.000.000", "Nível: 430-500", "Benefício: Recompensa (-20%) + Até 100 bots (LvL 100)", "VAGO ×2"] },
        {
          name: "Agentes do Submundo (Mr. 5 em diante)",
          description: "A partir deste ponto, os agentes atuam completamente encobertos pelo Submundo. Suas ações são rápidas, precisas e visam o assassinato ou a execução eficaz de suas missões."
        },
        { name: "Mr. 5 e Miss Valentine Days", description: "Só são enviados em casos de extrema necessidade. Missões de Nível 5 ao 6 mediano.", details: ["Salário: 550.000.000", "Requisitos: 500-600 + Merecimento", "Benefício: Recompensa (-10%) + Até 150 bots (LvL 100)", "Kaigun Pascoe (NPC) / Maria Romuri (NPC)"] },
        { name: "Mr. 4 e Miss Merry Christmas", description: "O medo não se faz mais presente aqui. Missões de Nível 6 extremo ao 7.", details: ["Salário: 640.000.000", "Requisitos: 600-720 + Merecimento", "Benefício: Recompensa (-10%) + Até 200 bots (LvL 100)", "Choso Bial (NPC) / Yuhime Saiko (NPC)"] },
        { name: "Mr. 3 e Miss Golden Week", description: "Agentes de Campo Veteranos — lendas no Submundo. Recebem missões de extrema importância, como dominações de reinos. Missões Nível 7 ao 8.", details: ["Salário: 700.000.000", "Requisitos: 720-830 + Merecimento", "Benefício: Recompensa + Até 1000 bots (LvL 150)", "Tenshi Orugawa (NPC) / Ruby Sayuri (NPC)"] },
        { name: "Mr. 2", description: "Este agente costuma agir sozinho, dispondo de navios e muitos Billions/Millions. Caçadas de Nível 9 a 10.", details: ["Salário: 750.000.000", "Requisitos: 830-970 + Merecimento", "Benefício: Recompensa + Até 5000 bots (LvL 150) + Navio fornecido", "Haizō Helsey (NPC)"] },
        { name: "Mr. 1 e Miss Double Finger", description: "O último estágio antes do Grande Chefe — os agentes Superiores, os mais fortes e de importância considerável. Sua força é preparada para rivalizar com as forças supremas deste mundo.", details: ["Salário: 900.000.000", "Requisitos: +1000 + Merecimento", "Benefício: Recompensa + Até 5000 bots (LvL 150) + Navio fornecido", "Yohan Musashi (NPC) / Misaki Hayakawa (NPC)"] },
        { name: "Mr. 0 e Miss All-Sunday", description: "O Mister Zero é a mente brilhante por trás de toda a organização. Ele é a força suprema que comanda todos os agentes, mantendo sua identidade oculta por meio de um \"rosto falso\". Miss All-Sunday exerce o papel de rosto público da Organização.", details: ["Salário: 1.100.000.000", "Requisitos: Merecimento", "Benefício Geral", "??? / Donquixote Grace O'Malley (NPC)"] }
      ]
    }
  },
  "Mecânicas do RPG": {
    "Cyborgues": {
      intro: "No vasto oceano de One Piece, enquanto alguns buscam o poder nas frutas místicas, outros depositam sua fé no aço. Ao realizar a transição, o personagem ganha acesso a 3 Espaços de Vertente, algo semelhante a um tronco de habilidades. Ele pode distribuir esses espaços como desejar entre as três categorias fundamentais, permitindo especialização total ou um equilíbrio versátil. Cada vertente concederá um bônus numérico + um bônus a depender da modificação.",
      items: [
        {
          name: "Vertente Ofensiva",
          description: "Focada em poder de fogo e destruição em massa, modificações ofensivas no geral. Exemplos: Metralhadoras embutidas, canhões de ar, mísseis, lasers.",
          details: [
            "Cada uma comum concede +5.000 de dano",
            "Uma poderosa em torno de +10.000 de dano",
            "Supremas (apenas quando virar inventor): +15.000 de dano",
            "Não pode somar modificações supremas; quanto mais poderosa, mais limitada",
            "Custo mínimo de cola — Comum: 25 | Poderosa: 50 | Suprema: 100"
          ]
        },
        {
          name: "Vertente Defensiva (Blindagem de Ferro)",
          description: "Focada na durabilidade e resistência a danos físicos. Exemplos: Placas de aço Wapolmetal, pele reforçada, membros endurecidos ou escudos retráteis.",
          details: ["Bônus: 1.3x de Resistência por ponto investido"]
        },
        {
          name: "Vertente de Mobilidade",
          description: "Focada em velocidade, posicionamento e agilidade. Exemplos: Propulsores nos pés/costas, sistemas hidráulicos de salto ou esteiras de alta velocidade.",
          details: ["Bônus: 1.3x em Velocidade por ponto investido, fora a modificação em si"]
        },
        {
          name: "Exemplo de Build",
          description: "Um jogador pode escolher 3 de Ofensiva (Puro dano), ou 1 de cada (Equilibrado) e assim por diante. Ao escolher 3 de defesa, ele receberia 1.6x em resistência, por exemplo."
        },
        {
          name: "O Próximo Nível — Inventor",
          description: "Quando um Ciborgue atinge o ápice de sua profissão e se torna um Inventor, ele passa a ter 5 Espaços de Vertentes (Modificações). Agora suas modificações se tornaram extremamente poderosas e podem ultrapassar o senso comum."
        },
        {
          name: "Combustível e Cola",
          description: "Suas armas dependem de combustível como cola ou óleo. Se você tiver estoque, você tem poder a depender da sua modificação, fora que também pode haver sobrecarga. Cada modificação deve ter uma tabela de custos de cola. Caso a cola zere, o ciborgue não poderá usar as modificações ativas até que recarregue. Uma cola pode ser comprada na loja por 50kk e cada uma recupera 100 (fora de combate ela se recupera automaticamente).",
          details: ["Cálculo da Cola do ciborgue: Resistência ÷ 100"]
        },
        {
          name: "🏗️ Requisitos para se tornar Ciborgue",
          description: "Se você já é um jogador e deseja 'vender sua humanidade' para se tornar uma máquina:",
          details: [
            "Ser Carpinteiro (e posteriormente Inventor)",
            "Pagar o valor de 1 Bilhão de Berries para os materiais",
            "Abrir mão de qualquer Akuma no Mi e não poder usar Raid Suit"
          ]
        },
        {
          name: "AUGE ROBÓTICO VEGA MASTER",
          description: "Em breve..."
        }
      ]
    },
    "Raidsuits": {
      intro: "Desenvolvidos originalmente pela Germa 66, esses trajes são latas de spray pressurizadas que armazenam uma armadura de memória molecular, capaz de transformar um soldado comum em um poderoso guerreiro.",
      items: [
        {
          name: "Requisitos e Obtenção",
          description: "Requisito: Ser um membro/afiliado da Germa 66 ou pertencer à linhagem Vinsmoke. Personagens que iniciam com essa origem recebem sua Raid Suit automaticamente. Não-Vinsmokes a recebem apenas no nível 500 e pagando 500kk."
        },
        {
          name: "Distribuição de Buffs",
          description: "Possui uma reserva de 2.2x que deve ser distribuída entre os atributos físicos. Você pode alocar até 1.6x em um único atributo que seja o foco do seu traje. Para os atributos que não são o foco, o limite máximo de bônus é de 1.4x.",
          details: [
            "Exemplo de Build: 1.6x em Agilidade (Foco) + 1.3x em Força + 1.3x em Resistência = 2.2x total"
          ]
        },
        {
          name: "💥 A Habilidade Única",
          description: "Cada Raid Suit é customizada com uma propriedade científica especial, geralmente ligada a um elemento ou capacidade sobre-humana. No momento da criação, o usuário escolhe um Poder Especial: Canhões de Laser integrados, emissão de veneno (Poison Pink), eletricidade estática (Denki Blue), explosões térmicas, Invisibilidade (Black Stealth), etc. O usuário pode criar seu próprio poder; poderes ofensivos dão 10.000 de dano extra."
        },
        {
          name: "Propulsores e Proteção",
          description: "Independentemente da customização, toda Raid Suit padrão vem equipada com propulsores de calcanhar que permitem o voo estacionário, impulsos rápidos no ar e aumentam drasticamente a velocidade de deslocamento. O traje é virtualmente indestrutível contra armas de fogo comuns e lâminas simples, agindo como uma armadura de placas tecnológica."
        },
        {
          name: "⚠️ Nota Importante",
          description: "Assim como os ciborgues, o uso da Raid Suit é para quem não possui Akuma no Mi, focando no poder da ciência pura. Não podem usar Mestre Punho, mas podem utilizar armas como Saijos e outros recursos."
        }
      ]
    },
    "Dominações": {
      intro: "Conquistar um território específico e torná-lo parte do domínio do personagem. Requisito: Nível mínimo 200. Risco: Altíssimo, com grande possibilidade de morte do personagem.",
      items: [
        {
          name: "Escolha do Território",
          description: "O Personagem define qual território deseja dominar. Fica a critério do narrador se deve fornecer informações sobre a região, incluindo a força militar e os recursos do local."
        },
        {
          name: "Preparação e Reforços",
          description: "O personagem pode recrutar aliados, comprar armas, ou fazer alianças antes da dominação. A preparação estratégica é essencial, já que territórios bem protegidos oferecem alta resistência."
        },
        {
          name: "Conquista Inicial",
          description: "O primeiro passo é invadir e enfraquecer as forças principais da região. O narrador cria desafios com base no tipo de resistência local: exércitos, defensores, ou armadilhas. Este momento envolve várias batalhas e o uso de estratégias de cerco."
        },
        {
          name: "Enfrentamento com o Líder",
          description: "O personagem finalmente enfrenta o líder local, que será um inimigo extremamente poderoso. Esse combate é o ponto culminante da dominação, e o jogador deve estar preparado para um confronto de alto risco."
        },
        {
          name: "Resultado — Sucesso",
          description: "O personagem conquista o território e pode começar a explorá-lo, cobrando impostos, recursos, e recrutando novos aliados.",
          details: [
            "+ Controle do território",
            "+ Recursos periódicos (dinheiro, suprimentos, reforços semanal)",
            "+ Aumento de influência e poder na região",
            "+ Level a ser decidido pelo narrador"
          ]
        },
        {
          name: "Resultado — Falha",
          description: "O personagem perde grande parte dos recursos investidos, pode perder membros da tripulação e até morrer (decidido pelo narrador)."
        },
        {
          name: "Observações Importantes",
          details: [
            "Caçadores de recompensas ganham +30% em dinheiro.",
            "Em casos de tripulações piratas, o líder pode levá-la para dominações no novo mundo ou grand line, desde que haja no mínimo 3 players com nível necessário para entrar nesses mares.",
            "A ilha dominada não vai para o player, vai para a organização que ele faz parte. Se for pirata, vira posse da tripulação, e o dinheiro também vai para o banco da tripulação ou organização.",
            "As recompensas da dominação não se encaixam nesse requisito.",
            "Cada ilha possui um faturamento próprio dependendo do mar. Exceto ilhas especiais."
          ]
        }
      ]
    },
    "Caçadas": {
      intro: "Capturar ou eliminar um criminoso em uma ilha ou mar específico. Requisito: Nível mínimo 100. Ter navio para navegar até a ilha onde o criminoso está.",
      items: [
        {
          name: "Escolha do Criminoso",
          description: "O personagem recebe uma missão de caçada, que indica a ilha onde o criminoso está localizado e um valor de recompensa."
        },
        {
          name: "Desembarque e Investigação",
          description: "Ao chegar na ilha, o personagem começa uma investigação para descobrir a localização do criminoso. Essa investigação pode envolver interações com NPCs, busca por pistas, ou até confrontos com subordinados do criminoso."
        },
        {
          name: "Perigos e Obstáculos",
          description: "Cada ilha oferece desafios específicos: capangas do criminoso, armadilhas, ou situações como emboscadas ou até mesmo resistência da marinha. O narrador é responsável por inserir essas dificuldades, de acordo com o nível do jogador e a complexidade da caçada.",
          details: [
            "1-3 ★ = 100 - 399 lvl",
            "4-6 ★ = 400 - 699 lvl",
            "7-10 ★ = 700 - 999 lvl",
            "11-15 ★ = 1.000 - 1.500 lvl"
          ]
        },
        {
          name: "Confronto Final",
          description: "Uma vez que o personagem encontra o criminoso, inicia-se o confronto principal. O criminoso pode ter raças especiais, akuma no mi, habilidades ou armas específicas que tornam a batalha única. O narrador deve ajustar a dificuldade para que o combate seja desafiador, mas equilibrado."
        },
        {
          name: "Recompensas — Sucesso",
          description: "O personagem recebe a recompensa em dinheiro e level, além de notoriedade.",
          details: [
            "1-3 ★ = 20 - 40 Níveis Ganhos",
            "4-6 ★ = 40 - 60 Níveis Ganhos",
            "7-10 ★ = 60 - 80 Níveis Ganhos",
            "11-15 ★ = 80 - 100 Níveis Ganhos",
            "Berries: valor depende da recompensa oferecida",
            "Level: nível de experiência em batalha"
          ]
        },
        {
          name: "Consequência — Falha",
          description: "O personagem pode perder membros, e talvez até perder sua vida."
        },
        {
          name: "Observações",
          details: [
            "Caçadores de recompensas ganham 25% a mais de dinheiro em caçadas ou dominações.",
            "O narrador sempre ganhará 50% do prêmio em dinheiro das caçadas que narrar, além disso ganha metade dos níveis ganhos na caçada/dominação que narrar, podendo pegar o prêmio em níveis apenas em duas caçadas narradas por semana.",
            "É dever do narrador construir, ao término da caçada ou dominação, o jornal com uma atualização do que ocorreu em tal mini evento.",
            "O valor da recompensa do criminoso morto é adicionado à recompensa do caçador."
          ]
        }
      ]
    },
    "Meitous": {
      intro: "As Meitous são lâminas lendárias do mundo de One Piece, divididas em três grandes graus: Saijo O Wazamono (Supremo), Oo Wazamono (Grande Grau) e Ryo Wazamono (Hábil). Cada lâmina possui sua própria vontade, dano específico e, em muitos casos, buffs únicos concedidos àqueles que conseguem dominá-las.",
      items: [
        {
          name: "𝐒𝐀𝐈𝐉𝐎 𝐎 𝐖𝐀𝐙𝐀𝐌𝐎𝐍𝐎",
          description: "Essas são lâminas de grau supremo, detentoras de um poder sem comparação. As Saijō Ō Wazamono causam danos devastadores em seus cortes, mas seu verdadeiro terror reside em sua vontade própria. São armas extremamente poderosas, que não se deixam domar com facilidade. Elas podem não reconhecer um mestre caso julguem que sua vontade não seja digna, ou que lhe falte o empenho necessário. Não basta possuí-las, é preciso subjugá-las, dobrá-las à sua vontade, e provar que é digno de empunhá-las.",
          details: [
            "Qualquer Saijō Ō Wazamono possui um dano de corte específico. Para desenvolver técnicas com essas lâminas, é necessário ter no mínimo 10.000 de Destreza (Sem buff's). Além disso, elas carregam uma vontade muito superior às demais.",
            "Para domar uma lâmina, é preciso possuir 10.000 pontos de armamento. Após 4 treinos solos dedicados a domar a lâmina, você enfim se torna seu mestre, e além do poder de corte, a vontade dela serve ao seu propósito (buff nos atributos).",
            "Obs¹: Após domar a lâmina, por meio de desenvolvimento em on, pode ser permitido que ela se torne herdeira da sua vontade, assim como a Shusui herdou a vontade de Ryuuma. Quando uma arma alcança o estado de Kokutou, ela ganha +5.000 de dano.",
            "Obs²: Lâminas Yoto, amaldiçoadas, são as mais difíceis de serem domadas. É OBRIGATÓRIO um desenvolvimento em on, não sendo permitidos treinos solos."
          ],
          subitems: [
            { name: "Kokutou Yoru", description: "A lâmina suprema dos espadachins, a arma máxima na arte de cortar. Lâmina negra forjada em metal raríssimo, formato templário. Quem a empunhar recebe o Ying e o Yang dos Espadachins.", details: ["Buff: Indefinido por enquanto", "Valor: 3.800.000.000", "Dano: 25.000"] },
            { name: "Murakumogiri", description: "Naginata que já presenciou duelos intensos. Seu fio é tão poderoso que nem o aço nem montanhas inteiras são páreo.", details: ["Buff: Absorve 1,30x do choque do dano", "Valor: 3.100.000.000", "Dano: 19.000"] },
            { name: "Ace", description: "Foi empunhada pelo Rei dos Piratas há 30 anos. Apenas um Rei é capaz de domá-la.", details: ["Buff: 1,30x Haki", "Valor: 3.250.000.000", "Dano: 19.000"] },
            { name: "Gryphon", description: "Sabre voltado para espadachins que buscam velocidade. Destaca-se em ataques rápidos e precisos.", details: ["Buff: Caso não haja diferença de 5.000 de Dano, o ataque do oponente será aparado. Todos ataques de natureza conceitual são automaticamente aparados.", "Valor: 2.000.000.000", "Dano: 15.000"] },
            { name: "Shodai Kitetsu", description: "A Yoto mais terrível de todas. Diz-se que a alma do ferreiro Kitetsu foi aprisionada como punição. Instinto assassino recai sobre seu portador.", details: ["Buff: O Instinto assassino impossibilita o uso do Kenbushoku Haki das pessoas ao redor. Adversários com Haoshoku no Haki não são afetados.", "Obs¹: Enquanto não dominar a lâmina, suas cenas terão maior chance de darem errado.", "Valor: 3.000.000.000", "Dano: 18.500"] },
            { name: "Jiu Ji To", description: "A lâmina mais leve que existe no mundo. Serve sobretudo a espadachins do tipo velocidade.", details: ["Buff: 1,40x Velocidade", "Valor: 2.500.000.000", "Dano: 16.000"] },
            { name: "Tsuki-chi", description: "Yoto forjada durante a noite, sob a luz da lua, a partir de uma rocha que caiu dos céus.", details: ["Buff: A presença do usuário deixa de ser percebida pelo Kenbushoku. Adversários com Haoshoku no Haki não são afetados.", "Valor: Vendida - Vinsmoke Rock Hazama (NPC)", "Dano: 17.000"] },
            { name: "Tritonis", description: "Tesouro sagrado da Ilha dos Tritões. Tridente de poder extraordinário, capaz de transformar seu usuário em uma fera tanto debaixo d'água quanto em terra firme. Pode criar lâminas de água com poder de corte equivalente ao de uma Saijo.", details: ["Buff: Concede ao usuário os buffs da raça Tritão mesmo fora da água, além de um efeito conceitual sobre o controle da água.", "Valor: 2.000.000.000", "Dano: 14.500"] },
            { name: "Shiriuri", description: "Yoto de lâmina avermelhada como sangue. Sua maldição já ceifou a vida de inúmeros espadachins.", details: ["Buff: +6.000 de dano do veneno da lâmina.", "Valor: 2.250.000.000", "Dano: 15.000"] },
            { name: "Maratan", description: "Sua vontade está voltada para o amanhã. Forjada para ser empunhada por heróis. Caso o portador seja maligno, é necessário 15.000 PT em Busoshoku para curvá-la.", details: ["Buff: Adiciona 5 segundos para ver o futuro.", "Valor: 2.300.000.000", "Dano: 15.500"] },
            { name: "Kurayami", description: "Uma das únicas três Kokutous existentes no mundo. Lâmina maligna que herdou por completo a vontade de seu antigo mestre, rival direto do Rei dos Piratas.", details: ["Buff: 1,30x Haki", "Valor: 2.900.000.000", "Dano: 17.500"] },
            { name: "Akuma Geko", description: "Lâmina extremamente antiga, empunhada por grandes heróis com o propósito de transformar o destino da era.", details: ["Buff: Adiciona 5 metros de distância na Emissão.", "Valor: 2.500.000.000", "Dano: 15.000"] }
          ]
        },
        {
          name: "Ō𝐎 𝐖𝐀𝐙𝐀𝐌𝐎𝐍𝐎",
          description: "Embora estejam abaixo das Saijō Ō Wazamono em grau, as Oo Wazamono são lâminas extremamente poderosas, capazes de cortar árvores e rochas de forma limpa nas mãos de um espadachim habilidoso. Algumas possuem habilidades únicas, enquanto outras carregam maldições perigosas.",
          details: [
            "Algumas Oo Wazamono possuem buffs especiais, que só podem ser adquiridos após o usuário domar a lâmina.",
            "Para domar uma espada de grande grau, é necessário que o espadachim possua no mínimo 5.000 pontos em armamento."
          ],
          subitems: [
            { name: "Wado Ichimonji", description: "Cabo branco com guarda circular, lâmina acinzentada com marcas onduladas. Pertenceu a um membro da tripulação do antigo Rei dos Piratas. Sua vontade é servir fielmente, mas somente àqueles de coração puro.", details: ["Valor: 1.300.000.000", "Dano: 10.000"] },
            { name: "Shusui", description: "Uma das raras lâminas negras existentes no mundo. Capaz de cortes que beiram o impossível.", details: ["Buff: 1.3x em Armamento", "Valor: Vendida - Hajīm Shinranui (NPC)", "Dano: 15.000"] },
            { name: "Nidai Kitetsu", description: "Sua vontade se equipara à da própria Shodai Kitetsu. Aqueles sem espírito forte são levados à loucura. Obs¹: Até ser domada, suas interações podem se tornar perigosas, incluindo episódios de loucura intensa.", details: ["Buff: 1.25x no dano final", "Valor: 1.500.000.000", "Dano: 11.000"] },
            { name: "Enma", description: "Yoto cuja maldição drena a energia vital de seu portador. Já feriu uma das asas do antigo Rei dos Piratas.", details: ["Buff: 1.35x em armamento", "Valor: Adquirida - Nero D. Monkey", "Dano: 13.000"] },
            { name: "Ame no Habakiri", description: "Existem muitas histórias sobre esta katana — alguns dizem que é amaldiçoada, outros que rejeita qualquer portador. Ninguém conhece sua verdadeira vontade.", details: ["Valor: 1.400.000.000", "Dano: 12.000"] },
            { name: "Sentō Kasen", description: "Espada de grande grau menos conhecida. Sua vontade é servir ao bem, semelhante à de sua irmã gêmea Maratan.", details: ["Valor: 1.000.000.000", "Dano: 10.000"] }
          ]
        },
        {
          name: "𝐑𝐘Ō 𝐖𝐀𝐙𝐀𝐌𝐎𝐍𝐎",
          description: "As Ryo Wazamono são o grau de lâminas inferior às Oo Wazamono e às Saijō Ō Wazamono. No mundo, existem 60 lâminas desse tipo, sendo consideradas as espadas ideais para iniciantes no combate com espada. Nenhuma Ryo Wazamono possui habilidades especiais, tampouco seu grau de corte se equipara ao das superiores. Ainda assim, podem evoluir de classe, tornando-se Kokutou, como ocorreu com a Shusui.",
          subitems: [
            { name: "Sandai Kitetsu", description: "Uma das três Kitetsus, criadas por um ferreiro amaldiçoado. Grau de corte inferior e sem habilidades especiais como suas irmãs. Integra o grupo das 60 Ryo Wazamono.", details: ["Valor: 1.000.000.000", "Dano: 9.000"] },
            { name: "Yubashiri", description: "Espada de grau hábil. Cabo preto de 7 cm, guarda em forma de cruz e bainha laqueada em preto. Lâmina de 1,09 m extremamente leve, com finos detalhes dourados.", details: ["Valor: 900.000.000", "Dano: 8.000"] },
            { name: "Kusanagi", description: "Lendária katana cujo nome significa 'grama cortante'. Originária do povo do céu, forjada em nome do Deus da Tempestade. Inestimável para o povo de Skypiea.", details: ["Valor: 850.000.000", "Dano: 7.500"] },
            { name: "Kazewokiru", description: "Katana de 1,35 m com diversos dentes ao longo do fio, indicada para serrar e triturar inimigos. Bainha branca decorada com três cabeças de javalis.", details: ["Valor: 800.000.000", "Dano: 7.000"] },
            { name: "Hidan", description: "Foice com três lâminas decrescentes. Cabo de metal longo permite bloquear ataques de espadas e ampliar o alcance ao balançar a foice pelo ar. Pode se dividir e contém funções estratégicas adicionais.", details: ["Valor: 700.000.000", "Dano: 7.000"] },
            { name: "Tensa Zangetsu", description: "Lâmina extremamente rara e afiada, pouco conhecida mas muito cobiçada, especialmente por iniciantes. Sua cor e brilho chamam atenção de qualquer um que a observe.", details: ["Preço: 700.000.000", "Dano: 7.000"] }
          ]
        }
      ]
    },
    "O Caminho da Supremacia": {
      intro: "Fator Linhagem — caminhos para forjar sua própria fama, dominar o Haki ou se especializar no combate corpo a corpo.",
      items: [
        {
          name: "🏴‍☠️ Criar sua própria Linhagem",
          description: "Haverá, dentro do RPG, a possibilidade de o jogador criar sua própria linhagem, destinada àqueles que desejarem forjar e espalhar a fama de seu próprio sangue pelos mares. Para isso, será necessário abdicar de qualquer outra linhagem preexistente, bem como desenvolver uma história convincente e bem detalhada acerca da origem e das características dessa linhagem.",
          details: [
            "Ganhos: 1.6x (Para divisão)",
            "Máximo de 1.3x por ATB",
            "Máximo 1.2x em Haki Geral"
          ]
        },
        {
          name: "🏴‍☠️ Mestre em Haki",
          description: "Há aqueles cuja vontade se sobrepõe ao desejo de utilizar Akuma no Mi. Para esses indivíduos, haverá a possibilidade de se especializar plenamente no domínio do Haki.",
          details: [
            "Ganhos: 1.5x Haki Geral (Máx. 1.5x)",
            "1.25x em um ATB (Sua escolha)"
          ]
        },
        {
          name: "🏴‍☠️ Mestre dos Punhos (Mestre em Combate Corpo a Corpo)",
          description: "Também existem aqueles cuja força reside nas próprias mãos, guiados por uma confiança inabalável no combate corporal — a boa e velha força bruta. Para esses, oferecemos a oportunidade de se dedicar por completo às artes do combate corpo a corpo, tornando-se verdadeiros mestres dos punhos. Contudo, essa escolha também estará sujeita a determinadas condições.",
          details: [
            "Ganhos: 1.4x (Força ou Speed)",
            "1.2x (Destreza ou Resistência)",
            "+1.25x (HP)",
            "Condição: Abdicar de qualquer armamento"
          ]
        },
        {
          name: "🏴‍☠️ Observações Gerais",
          details: [
            "1. Ao criar sua linhagem, você disporá de um total de 1.6x em multiplicadores, distribuídos entre seus atributos físicos. Máximo por atributo físico: 1.3x. Limite para Haki Geral: 1.2x.",
            "2. Na categoria Mestre de Haki, o limite máximo de multiplicadores é de 1.3x, podendo ser ampliado até 1.35x caso exista algum fator adicional de raça ou linhagem que conceda bônus extras ao Haki Geral.",
            "3. Para os Mestres de Combate, é vedado, em qualquer hipótese, o uso de qualquer recurso além dos próprios punhos durante uma luta. Armamentos ofensivos diretos são totalmente proibidos. Isso, contudo, não impede o personagem de utilizar dispositivos ou engenhocas de suporte, como botas a jato, por exemplo."
          ]
        }
      ]
    },
    "Navegação": {
      intro: "˙⋆✮ Sistema de Navegação — O mar não deve ser um relógio parado, mas também não pode travar o RP. Este sistema transforma viagens em algo rápido, útil e estratégico, onde navios, navegadores e rotas importam de verdade.",
      items: [
        {
          name: "➝ Tempo Base de Viagem",
          subitems: [
            {
              name: "Mares (East, West, North, South Blue)",
              details: [
                "Ilha vizinha: 3 horas off",
                "Ilha média distância (2 ilhas de distância): 6 horas off",
                "Ilha distante (3 ilhas de distância): 9 horas off"
              ]
            },
            {
              name: "Entre Blues",
              details: ["Travessia entre Blues: 10 horas off"]
            },
            {
              name: "Entrada na Grand Line",
              details: ["Reverse Mountain: 15 horas off"]
            },
            {
              name: "Grand Line / Novo Mundo",
              details: [
                "Sem Log Pose: 72 horas",
                "Com Log Pose: 48 horas",
                "Com Eternal Pose: 24 horas"
              ]
            },
            {
              name: "Observação",
              description: "Tempos são base antes dos modificadores."
            }
          ]
        },
        {
          name: "˙⋆✮ Classe dos Navios",
          subitems: [
            { name: "Embarcação Comum", description: "Barcos civis, saveiros e pequenos navios. Sem bônus." },
            { name: "Navio Especial", description: "Construção superior e velas refinadas. -10% tempo de viagem." },
            { name: "Fragata de Guerra", description: "Navios militares preparados para perseguição e travessias agressivas. -20% tempo de viagem." },
            { name: "Fragata Especial", description: "O auge da engenharia naval convencional. -30% tempo de viagem." },
            { name: "Navios Lendários / Personalizados", description: "Ex: navios únicos de Yonkou, Germa, tecnológicos etc. -40% tempo de viagem (mediante aprovação do adm)." }
          ]
        },
        {
          name: "˙⋆✮ Classe Navegador",
          description: "O verdadeiro fator decisivo do mar não é só o navio; obviamente.",
          subitems: [
            { name: "Sem Navegador", description: "Sem bônus." },
            { name: "Navegador Iniciante (Lvl 1 ~ 300)", description: "-20% do tempo." },
            { name: "Navegador Experiente (Lvl 301 ~ 600)", description: "-30% do tempo." },
            { name: "Mestre Navegador (Lvl 601 ~ 1.200)", description: "-40% do tempo." },
            { name: "Grande Navegador (Lvl 1.201 ~ Máximo)", description: "-50% do tempo." }
          ],
          details: [
            "Bônus do navio e do navegador se somam. Alcançando o máximo da patente navegador e o máximo do nível do navio, você pode diminuir o tempo em até 90%.",
            "Exemplo: Fragata Especial (-30%) + Mestre Navegador (-40%) = -70% do tempo total. Uma rota de 48 horas vira 14h 40min."
          ]
        },
        {
          name: "˙⋆✮ Teste de Navegação (Opcional)",
          description: "Em rotas perigosas, o navegador pode fazer um teste de D20.",
          details: [
            "Sucesso Crítico (20): -10% adicional na viagem",
            "Sucesso (15 ~ 19): -5% adicional na viagem",
            "Falha: +10% no tempo",
            "Falha Crítica: +25% no tempo ou evento marítimo"
          ]
        },
        {
          name: "˙⋆✮ Eventos Marítimos (Opcional)",
          description: "Apenas para Grand Line / Novo Mundo. Durante cada viagem, o narrador pode gerar 1 evento.",
          details: [
            "Calmaria",
            "Tempestade",
            "Corrente reversa",
            "Rei dos Mares",
            "Navio inimigo",
            "Ilha não catalogada",
            "Corrente favorável (-6h)",
            "Ventos perfeitos (-10% tempo)"
          ]
        }
      ]
    }
  }
};
