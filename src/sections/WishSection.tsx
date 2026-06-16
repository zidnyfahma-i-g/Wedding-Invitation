import { useState, useEffect, FormEvent } from "react";
import { MessageSquare, CalendarCheck2, UserRound, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { weddingInfo, SystemWish } from "../data/weddingData";
import { collection, query, orderBy, onSnapshot, doc, setDoc } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";

export function WishSection() {
  const [wishes, setWishes] = useState<SystemWish[]>([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"Hadir" | "Tidak Hadir" | "Tentatif">("Hadir");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  // Load from Firebase Firestore in real-time
  useEffect(() => {
    const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const loadedWishes: SystemWish[] = [];
        snapshot.forEach((docSnap) => {
          loadedWishes.push(docSnap.data() as SystemWish);
        });

        // Seed default wishes if Firestore is completely empty
        if (loadedWishes.length === 0) {
          const defaultWishes = weddingInfo.defaultWishes;
          defaultWishes.forEach(async (wish) => {
            try {
              await setDoc(doc(db, "wishes", wish.id), wish);
            } catch (err) {
              console.error("Error seeding default wish:", err);
            }
          });
        } else {
          setWishes(loadedWishes);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, "wishes");
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newWish: SystemWish = {
      id: Date.now().toString(),
      name: name.trim(),
      status,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, "wishes", newWish.id), newWish);

      // Reset form states
      setName("");
      setMessage("");
      setStatus("Hadir");
      setIsSubmitting(false);

      // Show temporary beautiful success alert
      setAlertSuccess(true);
      setTimeout(() => setAlertSuccess(false), 3000);
    } catch (error) {
      setIsSubmitting(false);
      handleFirestoreError(error, OperationType.CREATE, `wishes/${newWish.id}`);
    }
  };

  const getInitials = (fullName: string) => {
    const tokens = fullName.split(" ");
    if (tokens.length >= 2) {
      return (tokens[0].charAt(0) + tokens[1].charAt(0)).toUpperCase();
    }
    return fullName.slice(0, 2).toUpperCase();
  };

  const getStatusColor = (wishStatus: string) => {
    switch (wishStatus) {
      case "Hadir":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/50";
      case "Tidak Hadir":
        return "bg-rose-50 text-rose-600 border-rose-200/50";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200/50";
    }
  };

  return (
    <AnimatedSection
      id="ucapan"
      className="relative py-24 px-6 bg-beige-100 overflow-hidden text-slate-800"
    >
      {/* Decorative leaf shapes */}
      <div className="absolute top-1/2 left-0 w-32 h-32 text-sage-200 pointer-events-none opacity-30 select-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full rotate-12">
          <path d="M0,0 Q60,30 30,70 Q70,50 100,100 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto z-10 relative space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[10px] md:text-xs tracking-widest uppercase font-heading text-gold-400 font-semibold">
            Buku Tamu Digital
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-sage-600 font-semibold italic">
            Ucapan & Doa Restu
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-sans max-w-md mx-auto">
            Hadirkan kebahagiaan bagi kami dengan mengukir doa tulus, ucapan hangat, atau konfirmasi kehadiran Bapak/Ibu sekalian.
          </p>
          <div className="w-16 h-[1px] bg-gold-200 mx-auto" />
        </div>

        {/* Two Columns: Form on Left, Live feed scroll on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Guestbook Submission Form (Column Span: 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 border border-gold-200/40 shadow-md relative">
            <h3 className="font-serif text-lg text-slate-800 font-semibold mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-gold-400" />
              Kirim Doa & Ucapan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs uppercase font-heading tracking-wider text-slate-400 font-semibold flex items-center gap-1.5 select-none">
                  <UserRound className="w-3.5 h-3.5 text-gold-300" />
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Sholeh & Keluarga"
                  className="w-full text-sm py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-sage-400 focus:bg-white transition duration-300 outline-none text-slate-800"
                />
              </div>

              {/* Attendance Status field */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs uppercase font-heading tracking-wider text-slate-400 font-semibold flex items-center gap-1.5 select-none">
                  <CalendarCheck2 className="w-3.5 h-3.5 text-gold-300" />
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["Hadir", "Tidak Hadir", "Tentatif"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setStatus(opt)}
                      className={`py-2 px-1 text-center font-sans font-medium text-xs rounded-xl border transition-all duration-300 cursor-pointer ${
                        status === opt
                          ? "bg-sage-500 text-white border-sage-500 shadow-sm"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs uppercase font-heading tracking-wider text-slate-400 font-semibold flex items-center gap-1.5 select-none">
                  <MessageSquare className="w-3.5 h-3.5 text-gold-300" />
                  Pesan / Doa Restu
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan kartu doa terbaik Anda di sini..."
                  className="w-full text-sm text-slate-800 py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-sage-400 focus:bg-white transition duration-300 outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-sage-500 hover:bg-sage-600 text-white font-serif font-semibold text-xs tracking-widest uppercase rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Mengirimkan...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Ucapan</span>
                  </>
                )}
              </button>
            </form>

            {/* Success Alert toast inside card */}
            <AnimatePresence>
              {alertSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute bottom-6 left-6 right-6 bg-emerald-500 text-white text-xs py-2 px-4 rounded-xl shadow-lg flex items-center justify-center gap-1.5 z-20"
                >
                  <Sparkles className="w-4 h-4 animate-bounce" />
                  <span>Doa Anda berhasil terkirim ke Buku Tamu!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Guestbook Scrollable Feed (Column Span: 7) */}
          <div className="lg:col-span-7 w-full flex flex-col">
            
            {/* Stats display */}
            <div className="mb-4 text-xs font-heading font-semibold text-slate-400 tracking-wider uppercase text-left">
              Total Ucapan: {wishes.length} Pesan
            </div>

            {/* Scrolling Feed layout */}
            <div 
              className="w-full max-h-[480px] overflow-y-auto pr-2 space-y-4 text-left scrollbar-thin scrollbar-thumb-gold-200 scrollbar-track-transparent"
              style={{ contentVisibility: "auto" }}
            >
              <AnimatePresence initial={false}>
                {wishes.map((wish, idx) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-white rounded-2xl border border-slate-150 shadow-sm flex items-start gap-4 transition duration-300 hover:border-gold-200/50"
                  >
                    {/* Circle Avatar with Initials */}
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center font-semibold text-gold-600 font-heading text-xs uppercase shrink-0">
                      {getInitials(wish.name)}
                    </div>

                    {/* Chat text contents */}
                    <div className="flex-grow space-y-1">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <span className="font-serif font-bold text-slate-800 text-sm md:text-md">
                          {wish.name}
                        </span>
                        
                        {/* Attendance visual badge */}
                        <span className={`text-[9px] font-heading font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border ${getStatusColor(wish.status)}`}>
                          {wish.status}
                        </span>
                      </div>

                      {/* Time text */}
                      <span className="block text-[10px] text-slate-400 font-mono">
                        {new Date(wish.createdAt).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>

                      {/* Msg text */}
                      <p className="text-xs md:text-sm text-slate-600 whitespace-pre-wrap leading-relaxed select-text pt-1 font-sans">
                        {wish.message}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
