import { useState } from "react";
import { Check, Copy, Gift, QrCode, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { weddingInfo } from "../data/weddingData";

export function GiftSection() {
  const { digitalGift } = weddingInfo;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showQris, setShowQris] = useState(false);
  const [zoomQris, setZoomQris] = useState(false);

  const handleCopy = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <AnimatedSection
      id="hadiah"
      className="relative py-24 px-6 bg-white overflow-hidden text-slate-800"
    >
      <div className="max-w-4xl mx-auto text-center z-10 relative space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-[10px] md:text-xs tracking-widest uppercase font-heading text-gold-400 font-semibold">
            Tanda Kasih
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-sage-600 font-semibold italic">
            Amplop Digital
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-sans max-w-md mx-auto leading-relaxed">
            Bagi keluarga dan sahabat yang ingin memberikan tanda kasih dan ucapan selamat, dapat mengirimkannya secara cashless melalui rekening atau QRIS berikut:
          </p>
          <div className="w-16 h-[1px] bg-gold-200 mx-auto" />
        </div>

        {/* Bank and QRIS grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
          {/* Bank Accounts Column */}
          <div className="space-y-6 flex flex-col justify-center">
            {digitalGift.accounts.map((acc, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="bg-gold-50/50 rounded-2xl p-6 border border-gold-200/50 text-left relative shadow-sm flex flex-col justify-between"
              >
                {/* Visual Accent */}
                <div className="absolute top-4 right-4 text-gold-300 opacity-60">
                  <Gift className="w-5 h-5 stroke-[1.25]" />
                </div>

                <div className="space-y-4">
                  <span className="text-xs uppercase font-heading tracking-widest font-bold text-sage-600 bg-sage-50 px-2.5 py-1 rounded-md border border-sage-200/40">
                    {acc.bankName}
                  </span>
                  
                  <div className="space-y-1.5 pt-1">
                    <p className="font-mono text-lg md:text-xl font-bold text-slate-700 tracking-wide">
                      {acc.accountNumber}
                    </p>
                    <p className="text-xs md:text-sm text-slate-500 font-serif">
                      Atas Nama: <span className="font-semibold text-slate-700 font-sans">{acc.accountHolder}</span>
                    </p>
                  </div>
                </div>

                {/* Salin Button */}
                <button
                  onClick={() => handleCopy(acc.accountNumber, index)}
                  className="mt-5 w-full py-2.5 rounded-xl border border-gold-300 bg-white hover:bg-gold-50 font-sans text-xs tracking-wider transition duration-300 flex items-center justify-center gap-2 cursor-pointer outline-none focus:ring-1 focus:ring-gold-300 text-gold-600 font-medium font-semibold"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Nomor Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Nomor Rekening</span>
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* QRIS Column */}
          <div className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-sage-50 border border-sage-200/50 shadow-sm relative">
            <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 mb-4">
              <QrCode className="w-6 h-6" />
            </div>

            <h4 className="font-serif text-base text-slate-800 font-semibold mb-1">
              QRIS Tanda Kasih
            </h4>
            <p className="text-xs text-slate-500 text-center max-w-xs font-sans mb-5 leading-relaxed">
              Scan barcode QRIS di bawah melalui aplikasi M-Banking, OVO, GoPay, Dana, LinkAja atau penyedia dompet digital lainnya.
            </p>

            <button
              onClick={() => setShowQris(!showQris)}
              placeholder="Tampilkan QRIS"
              className="py-2.5 px-6 rounded-full bg-gold-400 hover:bg-gold-500 text-white font-serif text-xs font-medium tracking-wide transition duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            >
              {showQris ? "Sembunyikan QRIS" : "Tampilkan QRIS"}
            </button>

            <AnimatePresence>
              {showQris && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.9 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.9 }}
                  className="mt-6 overflow-hidden flex flex-col items-center select-none"
                >
                  {/* Clickable QRIS Card */}
                  <div 
                    onClick={() => setZoomQris(true)}
                    className="group relative bg-white p-3 rounded-2xl border border-gold-200/50 shadow-md cursor-pointer overflow-hidden transition-all duration-350 hover:shadow-lg hover:border-gold-400"
                    title="Klik untuk memperbesar QRIS"
                  >
                    <img
                      src={digitalGift.qrisUrl}
                      alt="Wedding Gift QRIS"
                      referrerPolicy="no-referrer"
                      className="w-48 h-48 md:w-56 md:h-56 object-contain transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />
                    
                    {/* Dark overlay showing Zoom indicator on hover */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-1.5 p-2 rounded-2xl">
                      <ZoomIn className="w-6 h-6 drop-shadow" />
                      <span className="text-xs font-semibold tracking-wider font-sans bg-slate-950/70 border border-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-center">
                        Perbesar QRIS
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono mt-2.5 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Zidny Fahma & Afni Wedding
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Fullscreen Enlarged QRIS Modal */}
      <AnimatePresence>
        {zoomQris && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md select-none"
            onClick={() => setZoomQris(false)}
          >
            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.92, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-sm w-full bg-white rounded-3xl p-6 shadow-2xl flex flex-col items-center border border-gold-200"
              onClick={(e) => e.stopPropagation()} // Stop bubbling
            >
              {/* Close Button Top Right */}
              <button
                onClick={() => setZoomQris(false)}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 rounded-full bg-white text-slate-700 hover:text-red-500 shadow-xl border border-slate-100 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer outline-none focus:ring-2 focus:ring-gold-400"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* QRIS Header Inside Modal */}
              <div className="text-center mb-4 space-y-1">
                <h4 className="font-serif text-lg font-bold text-slate-800">
                  QRIS Tanda Kasih
                </h4>
                <p className="text-[11px] text-slate-500 font-sans max-w-xs leading-relaxed">
                  Silakan scan QRIS di bawah ini untuk mengirimkan tanda kasih
                </p>
                <div className="w-10 h-[1.5px] bg-gold-300 mx-auto mt-2" />
              </div>

              {/* Main Expanded Image Container */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-inner flex items-center justify-center w-full">
                <img
                  src={digitalGift.qrisUrl}
                  alt="Wedding Gift QRIS Large"
                  referrerPolicy="no-referrer"
                  className="w-72 h-72 md:w-80 md:h-80 object-contain"
                />
              </div>

              {/* Account Label Footer */}
              <div className="text-center mt-4 space-y-1">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block">
                  Zidny Fahma & Afni Wedding
                </span>
                <span className="text-xs text-gold-600 font-serif italic block">
                  Terima kasih atas doa & ucapan Anda
                </span>
              </div>

              {/* Close Button Under card on mobile */}
              <button
                onClick={() => setZoomQris(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-slate-900 text-white font-sans text-xs font-semibold tracking-wider hover:bg-slate-800 transition duration-300 flex items-center justify-center gap-2 cursor-pointer outline-none active:scale-98"
              >
                <span>Tutup</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
