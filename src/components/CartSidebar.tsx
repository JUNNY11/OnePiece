import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const CartSidebar = () => {
  const { items, removeItem, clearCart, isOpen, setIsOpen, total } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [form, setForm] = useState({ player: "", character: "", org: "", money: "" });

  const handleCheckout = async () => {
    const itemsList = items.map((i) => `• ${i.name} (x${i.quantity}) - ${i.price}`).join("\n");
    const text = 
      `🏴‍☠️ *FICHA DE COMPRA - ONE PIECE.PROJECT RP*\n\n` +
      `👤 Nome Player: ${form.player}\n` +
      `🎭 Nome Personagem: ${form.character}\n` +
      `⚔️ Organização: ${form.org}\n` +
      `💰 Dinheiro no Caixa: ${form.money}\n\n` +
      `📦 *ITENS:*\n${itemsList}\n\n` +
      `💎 *TOTAL: ${total}*`;
    await navigator.clipboard.writeText(text);
    clearCart();
    setShowCheckout(false);
    setIsOpen(false);
    window.open(`https://chat.whatsapp.com/ES4Kx5OYfJo0AEFofrj4Sa?mode=gi_t`, "_blank");
    alert("✅ Ficha copiada! Cole no grupo com Ctrl+V (ou segurar e colar no celular).");
  };

  return (
    <>
      {/* Cart button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <ShoppingCart size={22} className="text-primary-foreground" />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-crimson text-xs flex items-center justify-center text-primary-foreground font-bold">
            {items.length}
          </span>
        )}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div className="fixed inset-0 bg-background/60 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-heading text-lg">Carrinho</h3>
                <button onClick={() => setIsOpen(false)}><X size={20} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {items.length === 0 ? (
                  <p className="text-muted-foreground text-center mt-10">Carrinho vazio</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-muted/30 rounded p-3">
                      <div>
                        <p className="font-body font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.price} x{item.quantity}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-destructive hover:text-destructive/80">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-4 border-t border-border space-y-3">
                  <div className="flex justify-between font-heading text-lg">
                    <span>Total:</span>
                    <span className="text-gold">{total}</span>
                  </div>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full py-3 bg-primary text-primary-foreground font-heading text-sm rounded hover:bg-primary/80 transition-colors"
                  >
                    Finalizar Compra
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-card border border-border rounded-lg p-6 w-full max-w-sm mx-4" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
              <h3 className="font-heading text-lg mb-4 text-glow-purple">Finalizar Compra</h3>
              {(["player", "character", "org", "money"] as const).map((field) => (
                <div key={field} className="mb-3">
                  <label className="text-xs text-muted-foreground font-heading tracking-wider">
                    {{ player: "Nome Player", character: "Nome Personagem", org: "Organização", money: "Dinheiro no Caixa" }[field]}
                  </label>
                  <input
                    className="w-full mt-1 bg-muted/50 border border-border rounded px-3 py-2 text-sm font-body text-foreground focus:outline-none focus:border-primary"
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  />
                </div>
              ))}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 py-2 border border-border rounded font-heading text-xs hover:bg-muted/50 transition-colors" onClick={() => setShowCheckout(false)}>Cancelar</button>
                <button className="flex-1 py-2 bg-primary text-primary-foreground rounded font-heading text-xs hover:bg-primary/80 transition-colors" onClick={handleCheckout}>Enviar via WhatsApp</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartSidebar;
