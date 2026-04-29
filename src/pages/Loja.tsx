import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ShoppingCart, ChevronRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import SectionReveal from "@/components/SectionReveal";
import CartSidebar from "@/components/CartSidebar";
import { useCart } from "@/contexts/CartContext";
import { Input } from "@/components/ui/input";
import { SHOP_TABS, MEITOU_SUBS, SUBMUNDO_SUBS, COMUNAL_SUBS, type Product } from "@/data/shopProducts";

const getAllProducts = () => {
  const results: { product: Product; tab: string; sub?: string }[] = [];
  Object.entries(SHOP_TABS).forEach(([cat, products]) => {
    products.forEach(p => results.push({ product: p, tab: cat }));
  });
  Object.entries(MEITOU_SUBS).forEach(([cat, products]) => {
    products.forEach(p => results.push({ product: p, tab: "Loja de Meitous", sub: cat }));
  });
  Object.entries(SUBMUNDO_SUBS).forEach(([cat, products]) => {
    products.forEach(p => results.push({ product: p, tab: "Submundo", sub: cat }));
  });
  Object.entries(COMUNAL_SUBS).forEach(([cat, products]) => {
    products.forEach(p => results.push({ product: p, tab: "Loja Comunal", sub: cat }));
  });
  return results;
};

const ALL_PRODUCTS = getAllProducts();

const LojaPage = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(SHOP_TABS)[0]);
  const [activeMeitouSub, setActiveMeitouSub] = useState<string | null>(null);
  const [activeSubmundoSub, setActiveSubmundoSub] = useState<string | null>(null);
  const [activeComunalSub, setActiveComunalSub] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();
  const location = useLocation();

  // Handle navigation from Sistemas search
  useEffect(() => {
    const state = location.state as { tab?: string; sub?: string; productName?: string } | null;
    if (state?.tab) {
      setActiveTab(state.tab);
      if (state.tab === "Loja de Meitous" && state.sub) {
        setActiveMeitouSub(state.sub);
      } else if (state.tab === "Submundo" && state.sub) {
        setActiveSubmundoSub(state.sub);
      } else if (state.tab === "Loja Comunal" && state.sub) {
        setActiveComunalSub(state.sub);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const isMeitou = activeTab === "Loja de Meitous";
  const isSubmundo = activeTab === "Submundo";
  const isComunal = activeTab === "Loja Comunal";
  const hasSubcategory = isMeitou || isSubmundo || isComunal;
  const currentProducts = isMeitou
    ? (activeMeitouSub ? MEITOU_SUBS[activeMeitouSub] : [])
    : isSubmundo
    ? (activeSubmundoSub ? SUBMUNDO_SUBS[activeSubmundoSub] : [])
    : isComunal
    ? (activeComunalSub ? COMUNAL_SUBS[activeComunalSub] : [])
    : SHOP_TABS[activeTab];

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return ALL_PRODUCTS.filter(r => r.product.name.toLowerCase().includes(q) || r.product.description?.toLowerCase().includes(q));
  }, [searchQuery]);

  const handleSearchResultClick = (result: { product: Product; tab: string; sub?: string }) => {
    setSearchQuery("");
    setActiveTab(result.tab);
    if (result.tab === "Loja de Meitous") {
      setActiveMeitouSub(result.sub || null);
      setActiveSubmundoSub(null);
      setActiveComunalSub(null);
    } else if (result.tab === "Submundo") {
      setActiveSubmundoSub(result.sub || null);
      setActiveMeitouSub(null);
      setActiveComunalSub(null);
    } else if (result.tab === "Loja Comunal") {
      setActiveComunalSub(result.sub || null);
      setActiveMeitouSub(null);
      setActiveSubmundoSub(null);
    } else {
      setActiveMeitouSub(null);
      setActiveSubmundoSub(null);
      setActiveComunalSub(null);
    }
  };

  const getCategoryLabel = (tab: string, sub?: string) => {
    if (sub) return `${tab} > ${sub}`;
    return tab;
  };

  return (
    <div className="min-h-screen" style={{ background: "transparent" }}>
      <Navbar />
      <CartSidebar />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionReveal>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-body transition-colors">
              <ArrowLeft size={16} /> Voltar
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl text-center mb-2">
              <span className="text-glow-gold">Loja</span>
            </h1>
            <p className="text-center text-muted-foreground font-body mb-6">Equipe-se para a jornada</p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar produto..."
                className="pl-10"
              />

              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-card border border-border rounded-lg shadow-xl max-h-80 overflow-y-auto">
                  {searchResults.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-3 hover:bg-primary/10 transition-colors border-b border-border/30 last:border-b-0 gap-3"
                    >
                      <button
                        onClick={() => handleSearchResultClick(r)}
                        className="flex-1 text-left"
                      >
                        <p className="font-heading text-sm text-foreground">{r.product.name}</p>
                        <p className="text-xs text-muted-foreground">{getCategoryLabel(r.tab, r.sub)} — {r.product.price}</p>
                      </button>
                      {!r.product.sold ? (
                        <motion.button
                          className="flex items-center gap-1 px-3 py-1.5 bg-primary/20 text-primary rounded text-xs font-heading hover:bg-primary/30 transition-colors shrink-0"
                          whileTap={{ scale: 0.9 }}
                          onClick={() => addItem({ id: r.product.id, name: r.product.name, price: r.product.price, category: getCategoryLabel(r.tab, r.sub) })}
                        >
                          <ShoppingCart size={12} /> Comprar
                        </motion.button>
                      ) : (
                        <span className="px-2 py-1 bg-destructive/20 text-destructive text-[10px] font-heading rounded shrink-0">VENDIDA</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </SectionReveal>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {Object.keys(SHOP_TABS).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => { setActiveTab(tab); setActiveMeitouSub(null); setActiveSubmundoSub(null); setActiveComunalSub(null); }}
                className={`px-4 py-2 rounded border font-heading text-xs tracking-wider transition-all ${
                  activeTab === tab ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold/50 text-muted-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Meitou subcategories */}
          <AnimatePresence mode="wait">
            {isMeitou && (
              <motion.div
                key="meitou-subs"
                className="flex flex-wrap gap-2 justify-center mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {Object.keys(MEITOU_SUBS).map((sub) => (
                  <motion.button
                    key={sub}
                    onClick={() => setActiveMeitouSub(activeMeitouSub === sub ? null : sub)}
                    className={`flex items-center gap-1 px-4 py-2 rounded border font-heading text-xs tracking-wider transition-all ${
                      activeMeitouSub === sub
                        ? "border-primary bg-primary/15 text-primary box-glow-purple"
                        : "border-border hover:border-primary/50 text-muted-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={12} className={activeMeitouSub === sub ? "rotate-90 transition-transform" : "transition-transform"} />
                    {sub}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submundo subcategories */}
          <AnimatePresence mode="wait">
            {isSubmundo && (
              <motion.div
                key="submundo-subs"
                className="flex flex-wrap gap-2 justify-center mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {Object.keys(SUBMUNDO_SUBS).map((sub) => (
                  <motion.button
                    key={sub}
                    onClick={() => setActiveSubmundoSub(activeSubmundoSub === sub ? null : sub)}
                    className={`flex items-center gap-1 px-4 py-2 rounded border font-heading text-xs tracking-wider transition-all ${
                      activeSubmundoSub === sub
                        ? "border-primary bg-primary/15 text-primary box-glow-purple"
                        : "border-border hover:border-primary/50 text-muted-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={12} className={activeSubmundoSub === sub ? "rotate-90 transition-transform" : "transition-transform"} />
                    {sub}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Comunal subcategories */}
          <AnimatePresence mode="wait">
            {isComunal && (
              <motion.div
                key="comunal-subs"
                className="flex flex-wrap gap-2 justify-center mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {Object.keys(COMUNAL_SUBS).map((sub) => (
                  <motion.button
                    key={sub}
                    onClick={() => setActiveComunalSub(activeComunalSub === sub ? null : sub)}
                    className={`flex items-center gap-1 px-4 py-2 rounded border font-heading text-xs tracking-wider transition-all ${
                      activeComunalSub === sub
                        ? "border-primary bg-primary/15 text-primary box-glow-purple"
                        : "border-border hover:border-primary/50 text-muted-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={12} className={activeComunalSub === sub ? "rotate-90 transition-transform" : "transition-transform"} />
                    {sub}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products */}
          <AnimatePresence mode="wait">
            {hasSubcategory && !(isMeitou ? activeMeitouSub : isSubmundo ? activeSubmundoSub : activeComunalSub) ? (
              <motion.div
                key="sub-placeholder"
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="font-body text-muted-foreground">Selecione uma subcategoria acima para ver os itens</p>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab + (activeMeitouSub || "") + (activeSubmundoSub || "")}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className={`bg-card/60 backdrop-blur-sm border-glow rounded-lg p-5 flex flex-col group transition-shadow duration-500 ${product.sold ? 'opacity-60 grayscale' : 'hover:box-glow-purple'}`}
                    whileHover={product.sold ? {} : { y: -3 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading text-sm text-foreground">{product.name}</h3>
                      {product.sold && <span className="px-2 py-0.5 bg-destructive/20 text-destructive text-[10px] font-heading rounded">VENDIDA</span>}
                    </div>
                    {product.description && (
                      <p className="font-body text-xs text-muted-foreground mb-4 flex-1 leading-relaxed">{product.description}</p>
                    )}
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
                      <span className="font-heading text-sm text-gold">{product.price}</span>
                      {!product.sold ? (
                        <motion.button
                          className="flex items-center gap-1 px-3 py-1.5 bg-primary/20 text-primary rounded text-xs font-heading hover:bg-primary/30 transition-colors"
                          whileTap={{ scale: 0.9 }}
                          onClick={() => addItem({ id: product.id, name: product.name, price: product.price, category: isMeitou ? `Meitous — ${activeMeitouSub}` : isSubmundo ? `Submundo — ${activeSubmundoSub}` : isComunal ? `Comunal — ${activeComunalSub}` : activeTab })}
                        >
                          <ShoppingCart size={12} /> Comprar
                        </motion.button>
                      ) : (
                        <span className="text-xs font-heading text-muted-foreground">Indisponível</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LojaPage;
