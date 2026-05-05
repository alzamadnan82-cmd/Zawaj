import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bell, CheckCircle, Clock, Heart, Shield, User, Lock, FileText } from 'lucide-react';
import { TaarufProgressModal, CandidateModal, AllCandidatesModal } from '../components/Modals';

export function Dashboard({ 
  setActiveTab, 
  onOpenVerification, 
  onOpenWali,
  isVerifiedMember,
  setIsVerifiedMember
}: { 
  setActiveTab: (tab: string) => void, 
  onOpenVerification: () => void, 
  onOpenWali: () => void,
  isVerifiedMember: boolean,
  setIsVerifiedMember: (val: boolean) => void
}) {
  // Toggle this state to see the difference between a class participant and a verified matchmaking member
  const [selectedTaaruf, setSelectedTaaruf] = useState<any>(null);
  const [selectedCandidateId, setSelectedCandidateId] = useState<number | null>(null);
  const [showAllCandidates, setShowAllCandidates] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Demo Toggle (For prototype purposes only) */}
      <div className="mb-6 bg-stone-100 p-3 rounded-xl flex items-center justify-between border border-stone-200">
        <span className="text-sm text-stone-600 font-medium">Mode Tampilan Prototype:</span>
        <button 
          onClick={() => setIsVerifiedMember(!isVerifiedMember)}
          className="text-xs bg-white border border-stone-300 px-3 py-1.5 rounded-md hover:bg-stone-50"
        >
          Ganti ke: {isVerifiedMember ? "Peserta Kelas (Belum Verifikasi)" : "Member Zawaj.in (Terverifikasi)"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-emerald-900">Assalamu'alaikum, Ahmad</h1>
          <p className="text-stone-500 mt-1">
            {isVerifiedMember ? "Berikut adalah ringkasan perjodohan Anda." : "Selamat datang di portal peserta kelas Zawaj.in."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {isVerifiedMember ? (
            <div className="bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 border border-emerald-100">
              <Shield className="h-4 w-4" />
              Member Terverifikasi
            </div>
          ) : (
            <div className="bg-stone-100 text-stone-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 border border-stone-200">
              <User className="h-4 w-4" />
              Peserta Kelas
            </div>
          )}
          <button className="relative p-2 text-stone-400 hover:text-emerald-800 transition-colors bg-white rounded-full shadow-sm border border-stone-100">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-amber-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {!isVerifiedMember && (
        <div className="mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-amber-900 flex items-center gap-2 mb-2">
                <Lock className="h-5 w-5" /> Buka Fitur Perjodohan Zawaj.in
              </h2>
              <p className="text-amber-800 text-sm max-w-2xl">
                Anda saat ini terdaftar sebagai peserta kelas. Untuk mulai mencari pasangan melalui sistem ta'aruf kami, Anda harus melewati proses verifikasi ketat (KTP, Wawancara, dan Tes Psikologi) untuk memastikan keamanan komunitas.
              </p>
            </div>
            <button 
              onClick={onOpenVerification}
              className="bg-amber-500 hover:bg-amber-600 text-amber-950 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-colors shadow-sm"
            >
              Mulai Verifikasi Sekarang
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Compatibility Insights (Locked if not verified) */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 relative overflow-hidden">
            {!isVerifiedMember && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
                <Lock className="h-8 w-8 text-stone-400 mb-2" />
                <p className="text-stone-600 font-medium">Fitur Terkunci</p>
              </div>
            )}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-emerald-900">Wawasan Kecocokan</h2>
              <button className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">Perbarui Preferensi</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Agama", score: "95%", color: "bg-emerald-100 text-emerald-800" },
                { label: "Gaya Hidup", score: "88%", color: "bg-amber-100 text-amber-800" },
                { label: "Keluarga", score: "92%", color: "bg-blue-100 text-blue-800" },
                { label: "Tujuan", score: "85%", color: "bg-purple-100 text-purple-800" }
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 rounded-xl p-4 border border-stone-100 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${item.color} font-bold text-lg mb-2`}>
                    {item.score}
                  </div>
                  <div className="text-sm font-medium text-stone-600">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pending Ta'aruf */}
          <section className="relative">
            {!isVerifiedMember && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center rounded-2xl">
                <Lock className="h-8 w-8 text-stone-400 mb-2" />
                <p className="text-stone-600 font-medium">Fitur Terkunci</p>
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-emerald-900 flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-500" /> Ta'aruf Aktif
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { name: "Aisyah R.", stage: "Tahap 2: Nilai Kehidupan", status: "Menunggu balasan Anda", time: "2j lalu", match: "92%" },
                { name: "Fatima S.", stage: "Tahap 1: Perkenalan", status: "Disetujui Wali", time: "1h lalu", match: "88%" }
              ].map((taaruf, i) => (
                <motion.div 
                  key={i}
                  onClick={() => isVerifiedMember && setSelectedTaaruf(taaruf)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 flex items-center justify-between hover:border-emerald-200 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden">
                        <img src={`https://picsum.photos/seed/${taaruf.name}/100/100`} alt="Profile blur" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                        {taaruf.match}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">{taaruf.name}</h3>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <span className="text-emerald-600 font-medium">{taaruf.stage}</span>
                        <span className="text-stone-300">•</span>
                        <span className="text-stone-500">{taaruf.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-stone-400 font-medium">{taaruf.time}</div>
                </motion.div>
              ))}
            </div>
            {isVerifiedMember && (
              <button 
                onClick={() => setActiveTab('taaruf')}
                className="w-full mt-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-sm font-semibold transition-colors border border-emerald-200"
              >
                Lanjutkan Ta'aruf
              </button>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          
          {/* Class Status */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 relative overflow-hidden">
            {!isVerifiedMember && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
                <Lock className="h-8 w-8 text-stone-400 mb-2" />
                <p className="text-stone-600 font-medium">Fitur Terkunci</p>
              </div>
            )}
            <h2 className="text-lg font-semibold text-emerald-900 mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-emerald-600" /> Kelas Anda
            </h2>
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
              <div className="text-xs text-emerald-600 font-bold mb-1">SEMINAR OFFLINE</div>
              <h3 className="font-semibold text-stone-800 text-sm mb-2">Membangun Visi Misi Keluarga Sakinah</h3>
              <div className="text-xs text-stone-500 flex items-center gap-2 mb-3">
                <Clock className="h-3 w-3" /> Sabtu, 24 Agustus 2026
              </div>
              <div className="w-full bg-stone-200 rounded-full h-2 mb-1">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <div className="text-[10px] text-stone-500 text-right">Selesai</div>
            </div>
          </section>

          {/* Guardian Status */}
          <section className="bg-emerald-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
            {!isVerifiedMember && (
              <div className="absolute inset-0 bg-emerald-900/60 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center">
                <Lock className="h-8 w-8 text-emerald-200 mb-2" />
                <p className="text-emerald-100 font-medium">Fitur Terkunci</p>
              </div>
            )}
            <div className="absolute top-0 right-0 opacity-10">
              <Shield className="w-32 h-32 -mt-8 -mr-8" />
            </div>
            <div className="relative z-10">
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-400" /> Wali / Pendamping
              </h2>
              <p className="text-emerald-100 text-sm mb-4">Ayah Anda (Bapak Rahman) saat ini aktif dan mengawasi proses ta'aruf Anda.</p>
              <div className="bg-emerald-800/50 rounded-xl p-3 border border-emerald-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-emerald-100" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Bapak Rahman</div>
                    <div className="text-xs text-emerald-200">Aktif 1j lalu</div>
                  </div>
                </div>
                <button 
                  onClick={onOpenWali}
                  className="text-xs bg-emerald-700 hover:bg-emerald-600 px-3 py-1.5 rounded-full transition-colors"
                >
                  Kelola
                </button>
              </div>
            </div>
          </section>

          {/* New Matches */}
          <section className="relative">
            {!isVerifiedMember && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center rounded-2xl">
                <Lock className="h-8 w-8 text-stone-400 mb-2" />
                <p className="text-stone-600 font-medium">Fitur Terkunci</p>
              </div>
            )}
            <h2 className="text-lg font-semibold text-emerald-900 mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-rose-500" /> Kecocokan Baru
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  onClick={() => isVerifiedMember && setSelectedCandidateId(i)}
                  className="bg-white rounded-xl p-3 shadow-sm border border-stone-100 text-center group cursor-pointer hover:border-emerald-200 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto bg-stone-200 rounded-full mb-3 overflow-hidden relative">
                    <img src={`https://picsum.photos/seed/match${i}/100/100`} alt="Match blur" className="w-full h-full object-cover blur-md group-hover:blur-sm transition-all" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <div className="text-sm font-semibold text-stone-800">Kandidat {i}</div>
                  <div className="text-xs text-emerald-600 font-medium mt-1">9{i}% Cocok</div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => isVerifiedMember && setShowAllCandidates(true)}
              className="w-full mt-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl text-sm font-medium transition-colors"
            >
              Lihat Semua Kandidat
            </button>
          </section>

        </div>
      </div>

      <TaarufProgressModal 
        isOpen={!!selectedTaaruf} 
        onClose={() => setSelectedTaaruf(null)} 
        taaruf={selectedTaaruf} 
      />
      
      <CandidateModal 
        isOpen={!!selectedCandidateId} 
        onClose={() => setSelectedCandidateId(null)} 
        candidateId={selectedCandidateId || undefined} 
      />

      <AllCandidatesModal
        isOpen={showAllCandidates}
        onClose={() => setShowAllCandidates(false)}
        onSelectCandidate={(id) => {
          setShowAllCandidates(false);
          setSelectedCandidateId(id);
        }}
      />
    </div>
  );
}
