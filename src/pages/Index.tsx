import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Anchor, Sword, BookOpen, ShoppingBag, Users } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import DevilFruitRain from "@/components/DevilFruitRain";
import WavyText from "@/components/WavyText";
import SectionReveal from "@/components/SectionReveal";
import InteractiveCard from "@/components/InteractiveCard";
import Navbar from "@/components/Navbar";
import strawHat from "@/assets/straw-hat-logo.png";
import LibrarySection from "@/components/LibrarySection";

const SYSTEMS = [
  { icon: Users, title: "Criação de Personagem", desc: "Crie seu alter ego no mundo pirata" },
  { icon: Anchor, title: "Organizações", desc: "Marines, Piratas e mais" },
  { icon: Sword, title: "Força Vital", desc: "Haki, Akuma no Mi e poder" },
  { icon: BookOpen, title: "Evolução", desc: "Treine e evolua seu personagem" },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen isLoading={isLoading} onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="min-h-screen relative" style={{ background: 'transparent' }}>
          <DevilFruitRain />
          <Navbar />

          {/* HERO */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 gradient-cursed" />

            <div className="relative z-10 text-center px-4">
              <motion.img
                src={strawHat}
                alt="Straw Hat Logo"
                className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-6 drop-shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring" }}
              />

              <motion.h1
                className="font-cursed text-5xl md:text-8xl mb-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="text-primary text-6xl md:text-9xl text-glow-purple">O</span>
                <span className="text-foreground">NE PIECE</span>
              </motion.h1>

              <motion.p
                className="font-heading text-gold text-lg md:text-2xl tracking-[0.5em] mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                .PROJECT - RP
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <WavyText
                  text="O mar é cruel, mas a liberdade não tem preço."
                  className="text-muted-foreground text-lg md:text-xl font-body"
                />
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Link
                  to="/sistemas"
                  className="px-8 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wider rounded hover:bg-primary/80 transition-all duration-300 box-glow-purple"
                >
                  Explorar Sistemas
                </Link>
                <Link
                  to="/loja"
                  className="px-8 py-3 border border-gold/50 text-gold font-heading text-sm tracking-wider rounded hover:bg-gold/10 transition-all duration-300"
                >
                  Acessar Loja
                </Link>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
                <div className="w-1 h-2 bg-primary rounded-full" />
              </div>
            </motion.div>
          </section>

          {/* ABOUT */}
          <section className="py-24 px-4 gradient-dark-ocean">
            <div className="container mx-auto max-w-4xl">
              <SectionReveal>
                <h2 className="font-heading text-3xl md:text-5xl text-center mb-4">
                  <span className="text-glow-blue">Sobre o RPG</span>
                </h2>
                <div className="w-20 h-0.5 bg-primary mx-auto mb-10" />
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="bg-card/50 border-glow rounded-lg p-8 md:p-12 backdrop-blur-sm">
                  <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
                    Bem-vindo ao <span className="text-primary font-semibold">ONE PIECE.PROJECT - RP</span>, um RPG narrativo imersivo ambientado no vasto mundo de One Piece. Aqui, cada jogador assume o papel de um personagem único — seja pirata, marine, revolucionário ou civil — navegando pelos mares traiçoeiros do Grand Line.
                  </p>
                  <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80">
                    Com sistemas originais de combate, evolução e interação, o <span className="text-gold">OPP-RP</span> oferece uma experiência onde suas escolhas moldam o destino do seu personagem. Conquiste territórios, derrote inimigos lendários, encontre Akuma no Mi e construa sua lenda nos mares.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* SYSTEMS PREVIEW */}
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
              <SectionReveal>
                <h2 className="font-heading text-3xl md:text-5xl text-center mb-4">
                  <span className="text-glow-purple">Sistemas</span>
                </h2>
                <div className="w-20 h-0.5 bg-primary mx-auto mb-12" />
              </SectionReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SYSTEMS.map((sys, i) => (
                  <SectionReveal key={sys.title} delay={i * 0.1}>
                    <InteractiveCard>
                      <sys.icon className="text-primary mb-4" size={32} />
                      <h3 className="font-heading text-sm mb-2">{sys.title}</h3>
                      <p className="font-body text-muted-foreground text-sm">{sys.desc}</p>
                    </InteractiveCard>
                  </SectionReveal>
                ))}
              </div>

              <SectionReveal delay={0.5}>
                <div className="text-center mt-10">
                  <Link
                    to="/sistemas"
                    className="inline-block px-8 py-3 border border-primary/50 text-primary font-heading text-sm tracking-wider rounded hover:bg-primary/10 transition-all duration-300"
                  >
                    Ver Todos os Sistemas →
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* LIBRARY */}
          <LibrarySection />

          {/* CONTACT */}
          <section id="contato" className="py-24 px-4 gradient-dark-ocean">
            <div className="container mx-auto max-w-4xl text-center">
              <SectionReveal>
                <h2 className="font-heading text-3xl md:text-5xl mb-4">
                  <span className="text-glow-gold">Comunidade</span>
                </h2>
                <div className="w-20 h-0.5 bg-gold mx-auto mb-10" />
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <p className="font-body text-lg text-foreground/70 mb-8">
                  Junte-se à tripulação! Entre na nossa comunidade e comece sua jornada.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.a
                    href="https://discord.gg/"
                    target="_blank"
                    className="px-8 py-3 bg-[hsl(235,86%,65%)] text-primary-foreground font-heading text-sm tracking-wider rounded"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(235 86% 65% / 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discord
                  </motion.a>
                  <motion.a
                    href="https://wa.me/5592981435848"
                    target="_blank"
                    className="px-8 py-3 bg-[hsl(142,70%,40%)] text-primary-foreground font-heading text-sm tracking-wider rounded"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(142 70% 40% / 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    WhatsApp
                  </motion.a>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 border-t border-border text-center">
            <p className="font-body text-sm text-muted-foreground">
              © 2026 ONE PIECE.PROJECT - RP — Todos os direitos reservados
            </p>
          </footer>
        </div>
      )}
    </>
  );
};

export default Index;
