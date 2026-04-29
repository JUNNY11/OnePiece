import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RACES_DATA: Record<string, { exclusive: boolean; attrs: { forca: number; agilidade: number; destreza: number; resistencia: number } }> = {
  "Três Olhos": { exclusive: false, attrs: { forca: 350, agilidade: 400, destreza: 400, resistencia: 350 } },
  "Humanos": { exclusive: false, attrs: { forca: 350, agilidade: 400, destreza: 400, resistencia: 350 } },
  "Amazonas": { exclusive: false, attrs: { forca: 500, agilidade: 600, destreza: 400, resistencia: 500 } },
  "Tontattas": { exclusive: false, attrs: { forca: 500, agilidade: 600, destreza: 400, resistencia: 550 } },
  "Minks": { exclusive: false, attrs: { forca: 1000, agilidade: 1000, destreza: 500, resistencia: 500 } },
  "Gigantes": { exclusive: false, attrs: { forca: 1000, agilidade: 0, destreza: 0, resistencia: 2000 } },
  "Tritões": { exclusive: false, attrs: { forca: 1000, agilidade: 500, destreza: 500, resistencia: 1000 } },
  "Sereianos": { exclusive: false, attrs: { forca: 1000, agilidade: 500, destreza: 1000, resistencia: 500 } },
  "Lunarian": { exclusive: true, attrs: { forca: 1000, agilidade: 1500, destreza: 0, resistencia: 2000 } },
  "Oni": { exclusive: true, attrs: { forca: 2500, agilidade: 0, destreza: 0, resistencia: 2000 } },
  "Bucaneiro": { exclusive: true, attrs: { forca: 1500, agilidade: 0, destreza: 0, resistencia: 1000 } },
  "Gigante Ancestral": { exclusive: true, attrs: { forca: 2500, agilidade: 0, destreza: 0, resistencia: 2500 } },
};

const FIGHTING_STYLES: Record<string, { attrs: { forca?: number; agilidade?: number; destreza?: number; resistencia?: number } }> = {
  "Aikido": { attrs: { forca: 500, destreza: 500 } },
  "Atirador Style": { attrs: { destreza: 500, agilidade: 500 } },
  "Arte do Tempo": { attrs: {} },
  "Black Leg": { attrs: { forca: 500, agilidade: 1000, destreza: 1000 } },
  "Black Cat": { attrs: { agilidade: 1000, destreza: 500 } },
  "Bushido": { attrs: { forca: 500, destreza: 500 } },
  "Combate Gigante": { attrs: { forca: 1000, resistencia: 1000 } },
  "Combate Water": { attrs: { destreza: 500 } },
  "Fencing Style": { attrs: { agilidade: 500, destreza: 500 } },
  "Freestyle": { attrs: { forca: 500, destreza: 500, agilidade: 500 } },
  "Hasshoken": { attrs: { forca: 1500, resistencia: 500 } },
  "Ittoryuu / Nittoryuu / Santoryuu": { attrs: { forca: 1000, agilidade: 500, destreza: 500 } },
  "Kung Fu": { attrs: { forca: 500, agilidade: 500, destreza: 500 } },
  "Kitsunebi-Ryu": { attrs: { destreza: 500 } },
  "Karatê Tritão": { attrs: { forca: 500, destreza: 500 } },
  "Ninjutsu": { attrs: { destreza: 500, agilidade: 500 } },
  "Punch Style": { attrs: { forca: 500, resistencia: 500 } },
  "Ryusoken": { attrs: { forca: 500 } },
  "Rokushiki": { attrs: { forca: 500, agilidade: 500 } },
  "Raid Suit": { attrs: { forca: 500, agilidade: 500, destreza: 500, resistencia: 500 } },
  "Rope Action": { attrs: { forca: 500, destreza: 500 } },
  "Sumô": { attrs: { forca: 500, resistencia: 500 } },
  "Sword Style": { attrs: { forca: 500 } },
  "Music Style": { attrs: { forca: 500, destreza: 500 } },
};

const LINEAGES_DATA: Record<string, {
  slots: string;
  members: string[];
  buffs: string[];
  bonusAttrs?: { forca?: number; agilidade?: number; destreza?: number; resistencia?: number };
}> = {
  "Os D.": {
    slots: "5/7",
    members: ["Nero D. Monkey", "Nogi D. Leonhart", "Hamura D. Yuta", "Akinori D. Constantine", "Asahi D. Wu"],
    buffs: ["1.5× em Haki Geral", "Metade dos requisitos para Haki (exceto níveis e Haoshoku)"],
  },
  "Figarland": {
    slots: "2/4",
    members: ["Eveline Figarland", "Shingetsu Fingarland"],
    buffs: ["1.3x Velocidade", "1.3x Haki Geral"],
  },
  "Kozuki": {
    slots: "0/5",
    members: [],
    buffs: ["1.4× em Destreza", "Inicia com Arma de Wano (dano: 4000)"],
  },
  "Shimotsuki": {
    slots: "0/5",
    members: [],
    buffs: ["1.2× em Destreza", "1.25× em Speed", "Inicia com Arma de Wano (dano: 4000)"],
  },
  "Silvers": {
    slots: "2/4",
    members: ["Kai Silver's", "Vórtex Silver's"],
    buffs: ["1.4x em Destreza", "1.2x em Haki Geral", "+1.000 dano base em armas de lâmina"],
  },
  "Charlotte": {
    slots: "2/4",
    members: ["Charlotte Nerisa", "Charlotte Hayato"],
    buffs: ["1.3× em Força ou Resistência", "Podem ser Híbridos (melhor de 2 raças)"],
  },
  "Donquixote": {
    slots: "0/5",
    members: [],
    buffs: ["1.2× em Haki", "1.2× em Destreza", "35% desconto na loja", "50% em uma compra do mercado negro"],
  },
  "Vinsmoke": {
    slots: "1/5",
    members: ["Simo Vinsmoke"],
    buffs: ["1.4× em Resistência", "Raid Suit (se Germa)"],
  },
  "Newgate": {
    slots: "2/4",
    members: ["Electra Blackwood", "Julian M. Newgate"],
    buffs: ["1.3× em Força", "1.4× em Resistência"],
    bonusAttrs: { resistencia: 2000 },
  },
  "Don": {
    slots: "1/5",
    members: ["Don.Typhon"],
    buffs: ["1.2× em Força", "1.2× em Resistência", "Acesso único ao Hassoken"],
  },
};

const EXCLUSIVE_RACES = ["Lunarian", "Oni", "Bucaneiro", "Gigante Ancestral"];

const SIDES = ["Pirata", "Marinheiro", "Cipher Pol", "Germa 66", "Caçador de Recompensas", "Revolucionário"];

const CLASSES = [
  "Navegador", "Combatente", "Arqueólogo", "Carpinteiro",
  "Médico", "Músico", "Cozinheiro", "Atirador"
];

const hasVacancy = (slots: string) => {
  const [current, max] = slots.split("/").map(Number);
  return current < max;
};

const SelectDropdown = ({ label, value, options, onChange, disabled }: {
  label: string; value: string; options: { label: string; disabled?: boolean; detail?: string }[];
  onChange: (v: string) => void; disabled?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <label className="block text-sm font-heading text-muted-foreground mb-1">{label}</label>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className="w-full text-left px-3 py-2 rounded-md border border-input bg-background text-sm flex items-center justify-between disabled:opacity-50"
      >
        <span className={value ? "text-foreground" : "text-muted-foreground"}>{value || "Selecionar..."}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
            className="absolute z-50 w-full mt-1 bg-card border border-border rounded-md shadow-lg max-h-48 overflow-y-auto"
          >
            {options.map(opt => (
              <button
                key={opt.label}
                type="button"
                disabled={opt.disabled}
                onClick={() => { onChange(opt.label); setOpen(false); }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-primary/10 transition-colors ${
                  opt.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
                } ${value === opt.label ? "bg-primary/10 text-primary" : ""}`}
              >
                {opt.label} {opt.detail && <span className="text-muted-foreground text-xs ml-1">{opt.detail}</span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CharacterSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [playerName, setPlayerName] = useState("");
  const [playerDigits, setPlayerDigits] = useState("");
  const [playerAge, setPlayerAge] = useState("");
  const [playerAvailability, setPlayerAvailability] = useState("");

  const [charAvatar, setCharAvatar] = useState("");
  const [charName, setCharName] = useState("");
  const [charAge, setCharAge] = useState("");
  const [charRace, setCharRace] = useState("");
  const [charLineage, setCharLineage] = useState("");
  const [charClass, setCharClass] = useState("");
  const [charFightingStyle, setCharFightingStyle] = useState("");
  const [charHeight, setCharHeight] = useState("");
  const [charNationality, setCharNationality] = useState("");
  const [charLocation, setCharLocation] = useState("");
  const [charSide, setCharSide] = useState("");
  const [charPersonality, setCharPersonality] = useState("");
  const [charHistory, setCharHistory] = useState("");

  const isExclusiveRace = EXCLUSIVE_RACES.includes(charRace);

  const raceAttrs = charRace ? RACES_DATA[charRace]?.attrs : null;
  const lineageData = (!isExclusiveRace && charLineage) ? LINEAGES_DATA[charLineage] : null;
  const fightingStyleData = charFightingStyle ? FIGHTING_STYLES[charFightingStyle] : null;

  const finalAttrs = useMemo(() => {
    const base = raceAttrs || { forca: 0, agilidade: 0, destreza: 0, resistencia: 0 };
    const lineageBonus = lineageData?.bonusAttrs || {};
    const styleBonus = fightingStyleData?.attrs || {};
    return {
      forca: base.forca + (lineageBonus.forca || 0) + (styleBonus.forca || 0),
      agilidade: base.agilidade + (lineageBonus.agilidade || 0) + (styleBonus.agilidade || 0),
      destreza: base.destreza + (lineageBonus.destreza || 0) + (styleBonus.destreza || 0),
      resistencia: base.resistencia + (lineageBonus.resistencia || 0) + (styleBonus.resistencia || 0),
    };
  }, [raceAttrs, lineageData, fightingStyleData]);

  const raceOptions = useMemo(() =>
    Object.keys(RACES_DATA).map(r => ({ label: r, detail: RACES_DATA[r].exclusive ? "⚠️ Exclusiva" : "" })),
  []);

  const lineageOptions = useMemo(() =>
    Object.entries(LINEAGES_DATA).map(([name, data]) => ({
      label: name,
      detail: `[${data.slots}]`,
      disabled: !hasVacancy(data.slots),
    })),
  []);

  const fightingStyleOptions = Object.keys(FIGHTING_STYLES).map(s => {
    const a = FIGHTING_STYLES[s].attrs;
    const parts: string[] = [];
    if (a.forca) parts.push(`F:${a.forca}`);
    if (a.agilidade) parts.push(`A:${a.agilidade}`);
    if (a.destreza) parts.push(`D:${a.destreza}`);
    if (a.resistencia) parts.push(`R:${a.resistencia}`);
    return { label: s, detail: parts.length ? parts.join(" ") : "—" };
  });

  const classOptions = CLASSES.map(c => ({ label: c }));
  const sideOptions = SIDES.map(s => ({ label: s }));

  const buildSheetText = () => {
    const lineageBuffsText = lineageData
      ? `\n*Buffs da Linhagem (${charLineage}):*\n${lineageData.buffs.map(b => `➝ ${b}`).join("\n")}`
      : "";

    const styleAttrsText = fightingStyleData
      ? Object.entries(fightingStyleData.attrs).filter(([,v]) => v).map(([k,v]) => `+${v} ${k}`).join(", ")
      : "";

    return `𑁍 *Ficha de Criação de Personagem* 🏴‍☠️

─── *Player* ───
*Nome/Nickname:* ${playerName}
*Últimos dígitos:* ${playerDigits}
*Idade:* ${playerAge}
*Disponibilidade:* ${playerAvailability}

─── *Personagem* ───
*Avatar:* ${charAvatar}
*Nome e Sobrenome:* ${charName}
*Idade:* ${charAge}
*Linhagem:* ${isExclusiveRace ? "N/A (Raça Exclusiva)" : (charLineage || "N/A")}
*Raça:* ${charRace}
*Classe:* ${charClass}
*Estilo de Luta:* ${charFightingStyle || "N/A"}${styleAttrsText ? ` (${styleAttrsText})` : ""}
*Altura e Peso:* ${charHeight}
*Nacionalidade:* ${charNationality || "—"}
*Localização Atual:* ${charLocation} (Somente Blues)
*Lado:* ${charSide}
*Belly's:* 100.000.000 💰
*Akuma No Mi:* N/A

*Personalidade:*
${charPersonality}

*História:*
${charHistory}

─── *Atributos e Nível* ───
*Nível:* 001 (01 LvL = 50 PT)
*Atributos:* (500 iniciais + Raça${lineageData?.bonusAttrs ? " + Linhagem" : ""}${fightingStyleData ? " + Estilo de Luta" : ""})
*Força:* ${finalAttrs.forca}
*Agilidade:* ${finalAttrs.agilidade}
*Destreza:* ${finalAttrs.destreza}
*Resistência:* ${finalAttrs.resistencia}
*HP:* ________
${lineageBuffsText}

─── *Haki's* ─── 🔐 (LvL 100)
👁️ *Kenbunshoku (Observação):*
Básico: [ ]
Intenção: [ ]
Previsão: [ ]

⚫ *Busoshoku (Armamento):*
Koka: [ ]
Emissão: [ ]
Emissão - Destruição Interna: [ ]`;
  };

  const handleSend = async () => {
    if (!playerName || !charName || !charRace || !charSide) {
      alert("Preencha os campos obrigatórios: Nome do Player, Nome do Personagem, Raça e Lado.");
      return;
    }
    const text = buildSheetText();
    await navigator.clipboard.writeText(text);
    window.open(`https://chat.whatsapp.com/FVFSC8y3FYJHfYkazDMjSk`, "_blank");
    alert("✅ Ficha copiada! Cole no grupo com Ctrl+V (ou segurar e colar no celular).");
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Criar Ficha"
      >
        <FileText size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
          >
            <motion.div
              className="bg-card border border-border rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            >
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>

              <h2 className="font-heading text-2xl text-primary mb-1">📜 Ficha de Criação de Personagem</h2>
              <p className="text-sm text-muted-foreground font-body mb-6">Preencha sua ficha e envie para o grupo do WhatsApp</p>

              <div className="space-y-6">
                {/* Player Section */}
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-3 border-b border-border pb-2">── Player ──</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Nome/Nickname *</label>
                      <Input value={playerName} onChange={e => setPlayerName(e.target.value)} placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Últimos Dígitos *</label>
                      <Input value={playerDigits} onChange={e => setPlayerDigits(e.target.value)} placeholder="Ex: 1234" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Idade *</label>
                      <Input value={playerAge} onChange={e => setPlayerAge(e.target.value)} placeholder="Sua idade" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Disponibilidade *</label>
                      <Input value={playerAvailability} onChange={e => setPlayerAvailability(e.target.value)} placeholder="Ex: Noites e fins de semana" />
                    </div>
                  </div>
                </div>

                {/* Character Section */}
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-3 border-b border-border pb-2">── Personagem ──</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Avatar (link da imagem) *</label>
                      <Input value={charAvatar} onChange={e => setCharAvatar(e.target.value)} placeholder="URL do avatar" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Nome e Sobrenome *</label>
                      <Input value={charName} onChange={e => setCharName(e.target.value)} placeholder="Nome completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Idade (min. 16) *</label>
                      <Input type="number" min={16} value={charAge} onChange={e => setCharAge(e.target.value)} placeholder="16+" />
                    </div>
                    <SelectDropdown label="Raça *" value={charRace} options={raceOptions} onChange={(v) => {
                      setCharRace(v);
                      if (EXCLUSIVE_RACES.includes(v)) setCharLineage("");
                    }} />
                    <SelectDropdown
                      label={`Linhagem ${isExclusiveRace ? "(bloqueada - raça exclusiva)" : ""}`}
                      value={isExclusiveRace ? "" : charLineage}
                      options={lineageOptions}
                      onChange={setCharLineage}
                      disabled={isExclusiveRace}
                    />
                    <SelectDropdown label="Classe *" value={charClass} options={classOptions} onChange={setCharClass} />
                    <SelectDropdown label="Estilo de Luta" value={charFightingStyle} options={fightingStyleOptions} onChange={setCharFightingStyle} />
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Altura e Peso *</label>
                      <Input value={charHeight} onChange={e => setCharHeight(e.target.value)} placeholder="Ex: 1.80m / 80kg" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Nacionalidade</label>
                      <Input value={charNationality} onChange={e => setCharNationality(e.target.value)} placeholder="Opcional" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-muted-foreground mb-1">Localização Atual (Blues) *</label>
                      <Input value={charLocation} onChange={e => setCharLocation(e.target.value)} placeholder="Ex: East Blue" />
                    </div>
                    <SelectDropdown label="Lado *" value={charSide} options={sideOptions} onChange={setCharSide} />
                  </div>
                </div>

                {/* Race Attributes + Fighting Style + Lineage Buffs Preview */}
                {(raceAttrs || lineageData || fightingStyleData) && (
                  <div className="space-y-3">
                    {raceAttrs && (
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <h4 className="font-heading text-sm text-primary mb-2">⚔️ Atributos Totais (Raça{fightingStyleData ? " + Estilo" : ""}{lineageData?.bonusAttrs ? " + Linhagem" : ""})</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm font-body">
                          <span>Força: <strong>{finalAttrs.forca}</strong>
                            {(fightingStyleData?.attrs.forca || lineageData?.bonusAttrs?.forca) && (
                              <span className="text-accent text-xs ml-1">
                                ({fightingStyleData?.attrs.forca ? `+${fightingStyleData.attrs.forca} estilo` : ""}
                                {fightingStyleData?.attrs.forca && lineageData?.bonusAttrs?.forca ? ", " : ""}
                                {lineageData?.bonusAttrs?.forca ? `+${lineageData.bonusAttrs.forca} linh.` : ""})
                              </span>
                            )}
                          </span>
                          <span>Agilidade: <strong>{finalAttrs.agilidade}</strong>
                            {(fightingStyleData?.attrs.agilidade || lineageData?.bonusAttrs?.agilidade) && (
                              <span className="text-accent text-xs ml-1">
                                ({fightingStyleData?.attrs.agilidade ? `+${fightingStyleData.attrs.agilidade} estilo` : ""}
                                {fightingStyleData?.attrs.agilidade && lineageData?.bonusAttrs?.agilidade ? ", " : ""}
                                {lineageData?.bonusAttrs?.agilidade ? `+${lineageData.bonusAttrs.agilidade} linh.` : ""})
                              </span>
                            )}
                          </span>
                          <span>Destreza: <strong>{finalAttrs.destreza}</strong>
                            {(fightingStyleData?.attrs.destreza || lineageData?.bonusAttrs?.destreza) && (
                              <span className="text-accent text-xs ml-1">
                                ({fightingStyleData?.attrs.destreza ? `+${fightingStyleData.attrs.destreza} estilo` : ""}
                                {fightingStyleData?.attrs.destreza && lineageData?.bonusAttrs?.destreza ? ", " : ""}
                                {lineageData?.bonusAttrs?.destreza ? `+${lineageData.bonusAttrs.destreza} linh.` : ""})
                              </span>
                            )}
                          </span>
                          <span>Resistência: <strong>{finalAttrs.resistencia}</strong>
                            {(fightingStyleData?.attrs.resistencia || lineageData?.bonusAttrs?.resistencia) && (
                              <span className="text-accent text-xs ml-1">
                                ({fightingStyleData?.attrs.resistencia ? `+${fightingStyleData.attrs.resistencia} estilo` : ""}
                                {fightingStyleData?.attrs.resistencia && lineageData?.bonusAttrs?.resistencia ? ", " : ""}
                                {lineageData?.bonusAttrs?.resistencia ? `+${lineageData.bonusAttrs.resistencia} linh.` : ""})
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    )}

                    {fightingStyleData && (
                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="font-heading text-sm text-blue-400 mb-2">🥊 Estilo de Luta: {charFightingStyle}</h4>
                        <div className="text-sm font-body text-muted-foreground">
                          {Object.entries(fightingStyleData.attrs).filter(([,v]) => v).map(([k,v]) => (
                            <span key={k} className="mr-3">+{v} {k.charAt(0).toUpperCase() + k.slice(1)}</span>
                          ))}
                          {Object.keys(fightingStyleData.attrs).length === 0 && <span>Sem bônus de atributos diretos</span>}
                        </div>
                      </div>
                    )}

                    {lineageData && (
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                        <h4 className="font-heading text-sm text-accent mb-2">👑 Buffs da Linhagem: {charLineage}</h4>
                        <ul className="space-y-1 text-sm font-body text-muted-foreground">
                          {lineageData.buffs.map((buff, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-accent">➝</span> {buff}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Personality & History */}
                <div>
                  <label className="block text-sm font-heading text-muted-foreground mb-1">Personalidade (min. 10 linhas) *</label>
                  <Textarea value={charPersonality} onChange={e => setCharPersonality(e.target.value)} rows={5} placeholder="Descreva a personalidade do seu personagem..." />
                </div>
                <div>
                  <label className="block text-sm font-heading text-muted-foreground mb-1">História (baseada na Linhagem/Raça) *</label>
                  <Textarea value={charHistory} onChange={e => setCharHistory(e.target.value)} rows={6} placeholder="Conte a história do seu personagem..." />
                </div>

                {/* Submit */}
                <Button onClick={handleSend} className="w-full gap-2" size="lg">
                  <Send size={18} /> Enviar Ficha para o WhatsApp
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CharacterSheet;
