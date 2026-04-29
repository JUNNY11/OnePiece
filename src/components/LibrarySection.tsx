import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import Hourglass from "@/components/Hourglass";

const GEOGRAPHY_MAP_URL = "https://static.wikia.nocookie.net/onepiece/images/1/10/World_Map.png";

const TIER_DATA: Record<string, string[]> = {
  PIRATA: ["1. Monkey D. Luffy", "2. Shanks", "3. Barba Negra", "4. Eustass Kid", "5. Trafalgar Law", "6. Buggy", "7. Boa Hancock", "8. Mihawk", "9. Crocodile", "10. Jinbe"],
  MARINHA: ["1. Akainu", "2. Kizaru", "3. Fujitora", "4. Ryokugyuu", "5. Garp", "6. Sengoku", "7. Smoker", "8. Koby", "9. Tashigi", "10. Hina"],
  GOVERNO: ["1. Im-sama", "2. Kong", "3. CP0 Líder", "4. Spandam", "5. Rob Lucci", "6. Kaku", "7. Stussy", "8. Kalifa", "9. Blueno", "10. Jabra"],
  REVOLUCIONÁRIOS: ["1. Dragon", "2. Sabo", "3. Ivankov", "4. Kuma", "5. Hack", "6. Koala", "7. Belo Betty", "8. Morley", "9. Lindbergh", "10. Karasu"],
};
const TimelineEra = ({ title }: { title: string }) => (
  <div className="text-center py-4">
    <h4 className="font-heading text-lg md:text-xl text-primary italic">{title}</h4>
    <div className="w-16 h-px bg-primary/40 mx-auto mt-2" />
  </div>
);

const TimelineBlock = ({ period, events }: { period: string; events: string[] }) => (
  <div className="relative pl-6 border-l-2 border-primary/30">
    <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary/70 border-2 border-background" />
    <h5 className="font-heading text-xs tracking-wider text-gold mb-2">{period}</h5>
    <ul className="space-y-1">
      {events.map((e, i) => (
        <li key={i} className="text-foreground/80">• {e}</li>
      ))}
    </ul>
  </div>
);

const LibrarySection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTier, setActiveTier] = useState<string | null>(null);

  const categories = [
    { key: "geografia", label: "Geografia", icon: "🗺️" },
    { key: "historia", label: "História", icon: "📜" },
    { key: "tier", label: "Tier Top 10", icon: "🏆" },
  ];

  return (
    <section className="py-24 px-4 gradient-dark-ocean">
      <div className="container mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-5xl text-center mb-4">
            <span className="text-glow-blue">Biblioteca</span>
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-12" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {categories.map((cat, i) => (
            <SectionReveal key={cat.key} delay={i * 0.1}>
              <motion.button
                onClick={() => { setActiveCategory(activeCategory === cat.key ? null : cat.key); setActiveTier(null); }}
                className={`w-full p-6 rounded-lg border transition-all duration-300 text-left ${
                  activeCategory === cat.key ? "border-secondary bg-secondary/10 box-glow-blue" : "border-border bg-card/50 hover:border-secondary/50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <h3 className="font-heading text-sm">{cat.label}</h3>
              </motion.button>
            </SectionReveal>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeCategory === "geografia" && (
            <motion.div key="geo" className="bg-card/50 border-glow rounded-lg p-6 overflow-hidden" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              <h3 className="font-heading text-lg mb-4 text-center">Mapa do Mundo</h3>
              <div className="relative aspect-video bg-muted/20 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={GEOGRAPHY_MAP_URL} alt="Mapa One Piece" className="max-w-full max-h-full object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <p className="absolute text-muted-foreground font-body">Mapa do Grand Line e além...</p>
              </div>
            </motion.div>
          )}

          {activeCategory === "historia" && (
            <motion.div key="hist" className="bg-card/50 border-glow rounded-lg p-6 md:p-10 max-h-[70vh] overflow-y-auto" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              <h3 className="font-heading text-xl md:text-2xl text-center mb-8 text-glow-purple">Linha Cronológica do RPG</h3>
              <div className="space-y-8 font-body text-foreground/85 text-sm md:text-base leading-relaxed">
                <TimelineEra title="Antes da Grande Era dos Piratas" />

                <TimelineBlock period="5.000 anos atrás" events={[
                  "A Árvore do Conhecimento foi plantada pelo antigo povo de Ohara."
                ]} />
                <TimelineBlock period="4.000 anos atrás" events={[
                  "Foi construído o Palácio de Alubarna."
                ]} />
                <TimelineBlock period="4.000 a 1.100 anos atrás" events={[
                  "Uma instalação foi construída em Elbaph",
                  "Início da Era do Círculo do Mar",
                  "A Cidade do Ouro, Shandora, é construída e prospera."
                ]} />
                <TimelineBlock period="1.000 anos atrás" events={[
                  "Zunesha nasce por volta dessa época. O primeiro avistamento conhecido do elefante é registrado.",
                  "A Tribo Mink isola-se do mundo exterior na ilha Zou carregada nas costas de Zunesha.",
                  "Um conflito entre a Tribo dos Braços Longos e a Tribo dos Pernas Longas começa."
                ]} />
                <TimelineBlock period="900 anos atrás" events={[
                  "O Século Vazio começa.",
                  "New Boy comeu a Hito Hito no Mi, Modelo: Nika, e se tornou o primeiro Pirata da história.",
                  "Uma grande civilização domina o planeta de um canto a outro, e grandes armas de destruição em massa são construídas.",
                  "O Gigante de Ferro Emet é construído."
                ]} />
                <TimelineBlock period="De 830 a 659 anos atrás" events={[
                  "Nasce Ringo Sah.",
                  "Shandora é destruída.",
                  "New Boy armazena um tesouro mítico apelidado de 'One Piece' na última ilha da Grand Line.",
                  "Uma organização de vinte membros da realeza forma uma aliança contra o Grande Reino e New Boy, derrotando-o em uma grande guerra e marcando o fim do Século Vazio.",
                  "O mar subiu 200 metros.",
                  "As armas antigas desaparecem sob circunstâncias misteriosas. Os únicos vestígios deixados para trás de sua civilização são os Poneglyphs construídos pela Família Kozuki.",
                  "A Família Peacefounder se torna a nova governante do Reino de Dressrosa depois que a Família Donquixote deixa o país para viver em Mary Geoise.",
                  "O crime de Zunesha.",
                  "A Cipher Poll é criada.",
                  "Construção de Tequila Wolf.",
                  "Nasce Grandberg."
                ]} />
                <TimelineBlock period="500 a 407 anos atrás" events={[
                  "Grandberg, um governante de uma nação de bandidos de todo o mundo, morre de congelamento viajando pelas Terras do Norte e permanece preservado no gelo.",
                  "Uma cura é encontrada para a Febre das Árvores que assolou a terra de Lvneel, quase exterminando a maioria dos habitantes.",
                  "Nasce Boogard e Shunlong.",
                  "Nasce Bolard."
                ]} />
                <TimelineBlock period="400 anos atrás" events={[
                  "A guerra entre os Skypieans e os Shandia começa.",
                  "Começa o conflito entre os Charllote e Newgate.",
                  "Boogard é executado."
                ]} />
                <TimelineBlock period="300 a 100 anos atrás" events={[
                  "A Loja de Armas é construída em Loguetown.",
                  "Emet aparece e ataca Mary Geoise, mas fica sem energia antes de causar dano.",
                  "Jayclaw dos Cinco Anciões ordena que pesquisadores o estudem em segredo.",
                  "Nasce Jingray.",
                  "Nasce Hougard e Bilgard.",
                  "Os habitantes de Flevance descobrem o Chumbo Âmbar. O Governo Mundial percebe que ele é venenoso para o corpo humano, mas mantém sua pesquisa em segredo por razões de lucro.",
                  "Nasce Vinsmoke Darius."
                ]} />
                <TimelineBlock period="99 a 82 anos atrás" events={[
                  "Nascimentos: Magnus, Helior, Eleonor, Kozuki Tokugawa.",
                  "O daimyo da Família Kurozumi envenenou os outros quatro daimyos para tentar obter a posição de xogum. No entanto, Kozuki Tokugawa nasceu, tornando-se o novo herdeiro do xogum, fazendo com que a Família Kurozumi perdesse seu poder. O chefe da família cometeu seppuku como punição e os outros membros da família começaram a ser caçados."
                ]} />
                <TimelineBlock period="81 a 70 anos atrás" events={[
                  "Darius Conhece Magnus.",
                  "Nasce Edward Low.",
                  "Nasce Jack D. Sparrow (Rei dos Piratas).",
                  "Nasce Don Ryugal.",
                  "Nasce Howell D. Davis.",
                  "Nasce Ivan Stad.",
                  "Darius e Magnus conhecem Eleonor e Helior.",
                  "Nasce Shimotsuki Hajīm Shinranui.",
                  "Nasce John Grenfell Belfort.",
                  "Nasce Kozuki Takeda."
                ]} />
                <TimelineBlock period="69 a 68 anos atrás" events={[
                  "Nasce Kozuki Oda.",
                  "Nasce Olivier Levasseur.",
                  "Kozuki Takeda deixa Wano aos seus 12 anos.",
                  "Nasce Kozuki Shimura.",
                  "Alguns membros da Família Donquixote voltam para Dressrosa."
                ]} />
                <TimelineBlock period="67 a 60 anos atrás" events={[
                  "Nasce Shin-Hei Sanshuō.",
                  "Nasce Gyutan Laverger.",
                  "Dressrosa descobre que alguns membros da família Donquixote voltaram.",
                  "Magnus chega à Ilha dos Tritões.",
                  "Nasce Dr. Newthug."
                ]} />
                <TimelineBlock period="59 a 56 anos atrás" events={[
                  "Nasce Ernesto Garnier.",
                  "Dressrosa expurga todos os Donquixote em um incidente que ficou conhecido como \"Linchamento Donquixote\".",
                  "Kozuki Tokugawa é morto em batalha.",
                  "Ame no Habakiri é perdida.",
                  "Nasce Mary Peacefounder."
                ]} />
                <TimelineBlock period="55 a 50 anos atrás" events={[
                  "Nasce Drayden.",
                  "Jack D. Sparrow é reconhecido como um Novato.",
                  "Kozuki Oda é nomeado Xógum aos seus 16 anos.",
                  "Shin Hei, Garnier, Gyutan entram para a força marítima.",
                  "Começa as indiferenças entre Helior e Darius.",
                  "Olivier Levasseur é dado como Morto."
                ]} />
                <TimelineBlock period="49 a 46 anos atrás" events={[
                  "Howell D. Davis é reconhecido como soldado Supremo.",
                  "A marinha tenta recrutar Howell D. Davis.",
                  "Hajīm Shinranui é nomeado Almirante aos seus 43 anos de idade.",
                  "Darius se apaixona por Eleonor."
                ]} />
                <TimelineBlock period="45 a 40 anos atrás" events={[
                  "Nasce Bαrtho Rob, que logo tem seus registros apagados misteriosamente.",
                  "Jack começa suas aventuras.",
                  "Shin-Hei é nomeado Almirante."
                ]} />
                <TimelineBlock period="39 anos atrás" events={[
                  "Ryugal peleja contra Jack, caindo perante o Rei dos Piratas, sendo expulso da tripulação pelo próprio.",
                  "Jack chega à última ilha.",
                  "Dr. Newthug é convidado pela marinha a fazer parte de sua divisão de ciência e tecnologia."
                ]} />
                <TimelineBlock period="38 anos atrás" events={[
                  "Incidente de God Valley.",
                  "Hajīm Shinranui tem sua honra ferida.",
                  "Jack se consagra como Rei dos Piratas.",
                  "Nasce Vinsmoke Rock Hazama."
                ]} />
                <TimelineBlock period="37 a 30 anos atrás" events={[
                  "Hajīm abdica do posto de Almirante.",
                  "Dr. Newthug faz grandes descobertas que mudam o mundo.",
                  "A relação entre Darius e Helior chega a um ponto crítico."
                ]} />
                <TimelineBlock period="29 a 20 anos atrás" events={[
                  "Nasce Ameyuri Sanzu.",
                  "Nasce Daichi Hazami.",
                  "Incidente de Ohara.",
                  "Darius captura Magnus como prisioneiro.",
                  "Nasce Zephyr.",
                  "Nasce Elayne.",
                  "Darius cria a Germa 66."
                ]} />
                <TimelineBlock period="19 a 15 anos atrás" events={[
                  "O exército revolucionário é então criado.",
                  "Nasce Mael.",
                  "Howell D. Davis é preso e sentenciado a morte por guilhotina.",
                  "Davis é salvo pela aliança com Edward Low.",
                  "Dragões celestiais descem dos céus.",
                  "A Vila Vívian é completamente destruída, e os registros de seu incidente são trancados pelo Governo Mundial."
                ]} />
                <TimelineBlock period="14 a 10 anos atrás" events={[
                  "Doran conspira contra o Reino de Alabasta.",
                  "O Exército Revolucionário cresce ainda mais.",
                  "Dr. Newthug sofre uma tentativa de homicídio.",
                  "Kozuki Takeda descobre sobre as conspirações de Doran.",
                  "Rock Hazama cria fama nos Mares dos Blues.",
                  "Morre Shinju Drácula.",
                  "Hagraw é morto por Mary Peacefounder.",
                  "Jack D. Sparrow, outrora consagrado como o Rei dos Piratas, é assassinado aos 57 anos de idade, vítima de uma traição oriunda de seu próprio braço direito, consumada por meio de envenenamento. Diante de tal acontecimento, rumores acerca de um suposto tesouro começam a se espalhar, inflamando a ambição e reacendendo a chama nos corações daqueles que almejam poder e liberdade. Assim, dá-se início à Grande Era dos Piratas."
                ]} />
                <TimelineBlock period="9 a 1 ano atrás" events={[
                  "Ocorre o Incidente de Lulusia.",
                  "Ivan Stade é morto.",
                  "Ernesto Garnier é nomeado Almirante.",
                  "Howell D. Davis é declarado como o mais forte.",
                  "Rock Hazama é reconhecido como o novo Imperador dos Mares.",
                  "50 agentes da Cipher Poll são completamente exterminados pela tripulação dos Piratas do Mar Vermelho.",
                  "O Governo Mundial investiga o desaparecimento de alguns de seus navios na Grand Line.",
                  "Elayne liberta Magnus.",
                  "Doran é derrotado por Takeda em Alabasta, mas é colocado como vilão."
                ]} />
              </div>
            </motion.div>
          )}

          {activeCategory === "tier" && (
            <motion.div key="tier" className="bg-card/50 border-glow rounded-lg p-6" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {Object.keys(TIER_DATA).map((org) => (
                  <motion.button
                    key={org}
                    onClick={() => setActiveTier(activeTier === org ? null : org)}
                    className={`p-3 rounded border font-heading text-xs tracking-wider transition-all ${
                      activeTier === org ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold/50"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {org}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTier && (
                  <motion.div key={activeTier} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <h4 className="font-heading text-sm text-gold mb-4">Top 10 — {activeTier}</h4>
                    <div className="space-y-2">
                      {TIER_DATA[activeTier].map((entry, i) => (
                        <motion.div
                          key={entry}
                          className="flex items-center gap-3 p-3 bg-muted/20 rounded border border-border/50"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <span className="text-gold font-heading text-xs w-6">{i < 3 ? "👑" : `#${i + 1}`}</span>
                          <span className="font-body">{entry.split(". ")[1]}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LibrarySection;
