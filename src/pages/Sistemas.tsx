import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, Search, ShoppingBag, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import SectionReveal from "@/components/SectionReveal";
import InteractiveCard from "@/components/InteractiveCard";
import Hourglass from "@/components/Hourglass";
import CharacterSheet from "@/components/CharacterSheet";
import { Input } from "@/components/ui/input";
import { SISTEMAS_CONTENT, type ContentItem } from "@/data/sistemasContent";
import { SHOP_TABS, MEITOU_SUBS, SUBMUNDO_SUBS, COMUNAL_SUBS } from "@/data/shopProducts";

const SYSTEMS: Record<string, { icon: string; subs: string[] }> = {
  "Criação de Personagem": { icon: "👤", subs: ["Classes", "Estilos de Luta", "Linhagens", "Raças"] },
  "Organizações": { icon: "⚔️", subs: ["Governo Mundial", "Marinha", "Shichibukai", "Pirata", "Revolucionário", "Germa 66", "Baroque Works"] },
  "Força Vital": { icon: "💪", subs: ["Atributos", "Akuma no Mi", "Haki"] },
  "Evolução": { icon: "📈", subs: ["Extra-Narrada", "Missões", "Conhecimentos", "Treino", "Observações Gerais"] },
  "Impel Down": { icon: "🏴", subs: ["Adaptação"] },
  "Jornal": { icon: "📰", subs: ["Procurados", "Younkous", "Marinha"] },
  "Mecânicas do RPG": { icon: "⚙️", subs: ["Navegação", "Dominações", "O Caminho da Supremacia", "Cyborgues", "Raidsuits", "Caçadas", "Meitous"] },
};

const getAllShopProducts = () => {
  const results: { name: string; category: string; tab: string; sub?: string }[] = [];
  Object.entries(SHOP_TABS).forEach(([cat, products]) => {
    products.forEach(p => results.push({ name: p.name, category: cat, tab: cat }));
  });
  Object.entries(MEITOU_SUBS).forEach(([cat, products]) => {
    products.forEach(p => results.push({ name: p.name, category: `Meitous > ${cat}`, tab: "Loja de Meitous", sub: cat }));
  });
  Object.entries(SUBMUNDO_SUBS).forEach(([cat, products]) => {
    products.forEach(p => results.push({ name: p.name, category: `Submundo > ${cat}`, tab: "Submundo", sub: cat }));
  });
  Object.entries(COMUNAL_SUBS).forEach(([cat, products]) => {
    products.forEach(p => results.push({ name: p.name, category: `Comunal > ${cat}`, tab: "Loja Comunal", sub: cat }));
  });
  return results;
};

const ALL_SHOP_PRODUCTS = getAllShopProducts();

const ContentItemCard = ({ item, depth = 0 }: { item: ContentItem; depth?: number }) => {
  const [expanded, setExpanded] = useState(false);
  const hasExpandableContent = !!(item.description || item.details?.length || item.subitems?.length);

  return (
    <motion.div
      className={`border border-border/50 rounded-lg overflow-hidden ${depth > 0 ? "ml-4 border-primary/20" : ""}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button
        onClick={() => hasExpandableContent && setExpanded(!expanded)}
        className={`w-full text-left px-4 py-3 flex items-center justify-between gap-2 transition-colors ${
          hasExpandableContent ? "hover:bg-primary/5 cursor-pointer" : "cursor-default"
        } ${expanded ? "bg-primary/5" : ""}`}
      >
        <span className="font-heading text-lg text-foreground">{item.name}</span>
        {hasExpandableContent && (
          <ChevronDown size={14} className={`text-muted-foreground transition-transform shrink-0 ${expanded ? "rotate-180" : ""}`} />
        )}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              {item.description && (
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">{item.description}</p>
              )}
              {item.details && item.details.length > 0 && (
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary text-base mt-0.5">➝</span>
                      <span className="font-body text-base md:text-lg text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
              {item.subitems && item.subitems.length > 0 && (
                <div className="space-y-2 pt-1">
                  {item.subitems.map((sub) => (
                    <ContentItemCard key={sub.name} item={sub} depth={depth + 1} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SystemCard = ({ name, sys }: { name: string; sys: { icon: string; subs: string[] } }) => {
  const [open, setOpen] = useState(false);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  const contentData = activeSub ? SISTEMAS_CONTENT[name]?.[activeSub] : null;

  return (
    <>
      <InteractiveCard
        onClick={() => { setOpen(true); setActiveSub(null); }}
      >
        <span className="text-3xl mb-3 block">{sys.icon}</span>
        <h3 className="font-heading text-sm mb-1">{name}</h3>
        <p className="text-xs text-muted-foreground font-body">{sys.subs.length} subcategorias</p>
      </InteractiveCard>

      {/* Full-screen popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-card border border-border rounded-xl shadow-2xl shadow-primary/10 w-full max-w-3xl max-h-[85vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{sys.icon}</span>
                  <h2 className="font-heading text-xl text-primary">{name}</h2>
                </div>
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Subcategory buttons */}
              <div className="flex flex-wrap gap-2 p-5 pb-3">
                {sys.subs.map((sub) => (
                  <motion.button
                    key={sub}
                    onClick={() => setActiveSub(activeSub === sub ? null : sub)}
                    className={`px-3 py-1.5 rounded border font-heading text-xs tracking-wider transition-all ${
                      activeSub === sub ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {sub}
                  </motion.button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-5 pb-5">
                <AnimatePresence mode="wait">
                  {activeSub ? (
                    <motion.div
                      key={activeSub}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {contentData ? (
                        <div className="space-y-4">
                          {contentData.intro && (
                            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-4 border-l-2 border-primary/50 pl-4">
                              {contentData.intro}
                            </p>
                          )}
                          <div className="space-y-2">
                            {contentData.items.map((item) => (
                              <ContentItemCard key={item.name} item={item} />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Hourglass />
                      )}
                    </motion.div>
                  ) : (
                    <motion.p
                      key="placeholder"
                      className="text-center text-muted-foreground font-body py-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Selecione uma subcategoria acima
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SistemasPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredSystems = useMemo(() => {
    if (!searchQuery.trim()) return Object.entries(SYSTEMS);
    const q = searchQuery.toLowerCase();
    return Object.entries(SYSTEMS).filter(([name, sys]) =>
      name.toLowerCase().includes(q) || sys.subs.some(s => s.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const shopResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results: { name: string; category: string; tab: string; sub?: string }[] = [];
    if ("loja".includes(q)) {
      results.push({ name: "Ir para a Loja", category: "Página", tab: "" });
    }
    ALL_SHOP_PRODUCTS.forEach(p => {
      if (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) {
        results.push(p);
      }
    });
    return results.slice(0, 10);
  }, [searchQuery]);

  const handleShopResultClick = (item: { name: string; tab: string; sub?: string }) => {
    setSearchQuery("");
    if (!item.tab) {
      navigate("/loja");
      return;
    }
    // Navigate to loja with state indicating which tab/sub to open
    navigate("/loja", { state: { tab: item.tab, sub: item.sub, productName: item.name } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CharacterSheet />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionReveal>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-body transition-colors">
              <ArrowLeft size={16} /> Voltar
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl text-center mb-2">
              <span className="text-glow-purple">Sistemas</span>
            </h1>
            <p className="text-center text-muted-foreground font-body mb-6">Explore todos os sistemas do RPG</p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-12">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar sistema, produto da loja..."
                className="pl-10"
              />

              {shopResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-card border border-border rounded-lg shadow-xl max-h-64 overflow-y-auto">
                  {shopResults.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleShopResultClick(item)}
                      className="w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors flex items-center gap-3 border-b border-border/30 last:border-b-0"
                    >
                      <ShoppingBag size={16} className="text-primary shrink-0" />
                      <div>
                        <p className="font-heading text-sm text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSystems.map(([name, sys], i) => (
              <SectionReveal key={name} delay={i * 0.08}>
                <SystemCard name={name} sys={sys} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemasPage;
