import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ChevronRight, Lock, MessageCircle, Shield, User } from 'lucide-react';

const STAGES = [
  { id: 1, name: "Perkenalan", desc: "Pertanyaan dasar tentang latar belakang dan kehidupan saat ini." },
  { id: 2, name: "Nilai Kehidupan", desc: "Diskusi tentang Agama, gaya hidup, dan kebiasaan sehari-hari." },
  { id: 3, name: "Harapan Pernikahan", desc: "Peran, keuangan, dan tujuan masa depan." },
  { id: 4, name: "Keterlibatan Keluarga", desc: "Perkenalan Wali dan perencanaan pertemuan keluarga." }
];

export function TaarufMode({ 
  setActiveTab,
  onOpenVerification,
  isVerifiedMember,
  setIsVerifiedMember
}: { 
  setActiveTab: (tab: string) => void,
  onOpenVerification: () => void,
  isVerifiedMember: boolean,
  setIsVerifiedMember: (val: boolean) => void
}) {
  const [currentStage, setCurrentStage] = useState(2);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-4rem)] flex flex-col">
      {/* Demo Toggle (For prototype purposes only) */}
      <div className="mb-6 bg-stone-100 p-3 rounded-xl flex items-center justify-between border border-stone-200 flex-shrink-0">
        <span className="text-sm text-stone-600 font-medium">Mode Tampilan Prototype:</span>
        <button 
          onClick={() => setIsVerifiedMember(!isVerifiedMember)}
          className="text-xs bg-white border border-stone-300 px-3 py-1.5 rounded-md hover:bg-stone-50"
        >
          Ganti ke: {isVerifiedMember ? "Peserta Kelas (Belum Verifikasi)" : "Member Zawaj.in (Terverifikasi)"}
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => setActiveTab('dashboard')} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
            <ArrowLeft className="h-5 w-5 text-stone-600" />
          </button>
          <div className="flex items-center gap-3">
            {isVerifiedMember ? (
              <>
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-stone-200">
                  <img src="https://picsum.photos/seed/aisyah/100/100" alt="Aisyah" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h2 className="font-semibold text-emerald-900">Aisyah R.</h2>
                  <p className="text-xs text-stone-500 flex items-center gap-1">
                    <Shield className="h-3 w-3 text-amber-500" /> Pemantauan Wali Aktif
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-stone-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-stone-400" />
                </div>
                <div>
                  <h2 className="font-semibold text-stone-400 italic">Belum Ada Pasangan</h2>
                  <p className="text-xs text-stone-400 flex items-center gap-1">
                    Selesaikan verifikasi untuk memulai
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          {STAGES.map((stage, i) => (
            <div key={stage.id} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                stage.id < currentStage ? 'bg-emerald-600 text-white' :
                stage.id === currentStage ? 'bg-amber-500 text-white ring-4 ring-amber-100' :
                'bg-stone-100 text-stone-400'
              }`}>
                {stage.id < currentStage ? <CheckCircle2 className="h-5 w-5" /> : stage.id}
              </div>
              {i < STAGES.length - 1 && (
                <div className={`w-8 h-0.5 mx-1 ${stage.id < currentStage ? 'bg-emerald-600' : 'bg-stone-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col overflow-hidden relative min-h-0">
        
        {!isVerifiedMember && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-amber-100 p-4 rounded-full mb-4">
              <Lock className="h-10 w-10 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">Fitur Ta'aruf Terkunci</h2>
            <p className="text-stone-600 max-w-md mb-6">
              Anda harus lulus kelas pranikah dan menyelesaikan proses verifikasi ketat (KTP, Wawancara, dan Tes Psikologi) untuk dapat memulai proses ta'aruf.
            </p>
            <button 
              onClick={onOpenVerification}
              className="bg-amber-500 hover:bg-amber-600 text-amber-950 px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm"
            >
              Mulai Verifikasi Sekarang
            </button>
          </div>
        )}

        {/* Stage Info Banner */}
        <div className="bg-amber-50 border-b border-amber-100 p-4 text-center">
          <h3 className="text-amber-900 font-semibold flex items-center justify-center gap-2">
            <Lock className="h-4 w-4" /> Tahap {currentStage}: {STAGES[currentStage-1].name}
          </h3>
          <p className="text-amber-700 text-sm mt-1">{STAGES[currentStage-1].desc}</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50/50">
          
          {/* System Message */}
          <div className="flex justify-center">
            <div className="bg-stone-100 text-stone-500 text-xs px-4 py-1.5 rounded-full font-medium">
              Tahap 2 Terbuka. Anda sekarang dapat mendiskusikan Nilai Kehidupan.
            </div>
          </div>

          {/* Chat Bubbles */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden flex-shrink-0">
              <img src="https://picsum.photos/seed/aisyah/100/100" alt="Aisyah" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-white border border-stone-200 p-4 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm">
              <p className="text-stone-700 text-sm leading-relaxed">
                Assalamu'alaikum Ahmad. Mengenai kebiasaan sehari-hari, bagaimana Anda biasanya menyeimbangkan jadwal kerja dengan salat lima waktu, terutama di hari yang sibuk?
              </p>
              <span className="text-[10px] text-stone-400 mt-2 block">10:42 AM</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex gap-4 flex-row-reverse">
            <div className="bg-emerald-600 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
              <p className="text-emerald-50 text-sm leading-relaxed">
                Wa'alaikumsalam Aisyah. Alhamdulillah, tempat kerja saya memiliki musala khusus. Saya biasanya memblokir jadwal saya selama 15 menit saat Zuhur dan Asar untuk memastikan saya tidak melewatkannya. Bagaimana dengan Anda?
              </p>
              <span className="text-[10px] text-emerald-200 mt-2 block text-right">10:45 AM</span>
            </div>
          </motion.div>

          {/* Wali Intervention Example */}
          <div className="flex justify-center my-8">
            <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm">
              <Shield className="h-4 w-4 text-emerald-600" />
              Wali (Bapak Rahman) telah melihat percakapan ini.
            </div>
          </div>

        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-100">
          <div className="flex items-center gap-3">
            <button className="p-2 text-stone-400 hover:text-emerald-600 transition-colors">
              <MessageCircle className="h-5 w-5" />
            </button>
            <input 
              type="text" 
              placeholder="Ketik pesan Anda dengan sopan..." 
              className="flex-1 bg-stone-100 border-transparent focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-full px-4 py-2.5 text-sm transition-all outline-none"
            />
            <button className="bg-emerald-800 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
              Kirim
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-[10px] text-stone-400 flex items-center justify-center gap-1">
              <Shield className="h-3 w-3" /> Ingat adab Islami. Obrolan ini dipantau oleh Wali.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
