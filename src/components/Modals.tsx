import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Upload, Calendar, Users, Shield, Heart, Clock, ArrowLeft } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegisterModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
        >
          <div className="p-6 border-b border-stone-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-emerald-900">Daftar Kelas / Seminar</h2>
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
              <X className="h-5 w-5 text-stone-500" />
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Nama Lengkap</label>
              <input type="text" className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Masukkan nama lengkap" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="nama@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Nomor WhatsApp</label>
              <input type="tel" className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="0812..." />
            </div>
            <div className="pt-4">
              <button onClick={onClose} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-colors">
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function VerificationModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6 border-b border-stone-100 flex justify-between items-center sticky top-0 bg-white z-10">
            <h2 className="text-xl font-bold text-emerald-900">Verifikasi Zawaj.in</h2>
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
              <X className="h-5 w-5 text-stone-500" />
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-stone-600 text-sm">
              Untuk menjaga keamanan dan kualitas ekosistem ta'aruf, kami mewajibkan seluruh pengguna untuk melewati 3 tahap verifikasi ketat.
            </p>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="border border-stone-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-stone-100 p-2 rounded-lg text-stone-600 mt-1">
                    <Upload className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-900">1. Verifikasi Identitas (KTP)</h3>
                    <p className="text-sm text-stone-500 mb-3">Unggah foto KTP dan foto diri memegang KTP.</p>
                    <button className="text-sm bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2 rounded-lg font-medium transition-colors w-full">
                      Unggah Dokumen
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-stone-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-stone-100 p-2 rounded-lg text-stone-600 mt-1">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-900">2. Jadwalkan Wawancara</h3>
                    <p className="text-sm text-stone-500 mb-3">Sesi wawancara 15 menit dengan tim kurator kami.</p>
                    <button className="text-sm bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2 rounded-lg font-medium transition-colors w-full">
                      Pilih Jadwal
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border border-stone-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-stone-100 p-2 rounded-lg text-stone-600 mt-1">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-900">3. Tes Psikologi Dasar</h3>
                    <p className="text-sm text-stone-500 mb-3">Jawab beberapa pertanyaan untuk mengetahui profil kepribadian Anda.</p>
                    <button className="text-sm bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2 rounded-lg font-medium transition-colors w-full">
                      Mulai Tes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button onClick={onClose} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-colors">
                Simpan & Lanjutkan Nanti
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function WaliModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
        >
          <div className="p-6 border-b border-stone-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-emerald-900">Kelola Wali</h2>
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
              <X className="h-5 w-5 text-stone-500" />
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3">
              <Shield className="h-5 w-5 text-amber-600 shrink-0" />
              <p className="text-sm text-amber-900">
                Wali akan menerima notifikasi dan dapat memantau proses ta'aruf Anda demi menjaga adab dan keamanan.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Nama Wali</label>
              <input type="text" className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Masukkan nama wali" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Hubungan (Misal: Ayah, Kakak Laki-laki)</label>
              <input type="text" className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Hubungan keluarga" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Nomor WhatsApp Wali</label>
              <input type="tel" className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="0812..." />
            </div>
            <div className="pt-4">
              <button onClick={onClose} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-colors">
                Kirim Undangan ke Wali
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function AuthModal({ isOpen, onClose }: ModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
        >
          <div className="p-6 border-b border-stone-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-emerald-900">
              {isLogin ? 'Masuk ke Zawaj.in' : 'Daftar Akun Baru'}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
              <X className="h-5 w-5 text-stone-500" />
            </button>
          </div>
          
          <div className="flex border-b border-stone-100">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${isLogin ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-stone-500 hover:text-stone-700'}`}
            >
              Masuk
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${!isLogin ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-stone-500 hover:text-stone-700'}`}
            >
              Daftar
            </button>
          </div>

          <div className="p-6 space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Masukkan nama lengkap" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="nama@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Kata Sandi</label>
              <input type="password" className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="••••••••" />
            </div>
            
            <div className="pt-4">
              <button onClick={onClose} className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3 rounded-xl font-semibold transition-colors">
                {isLogin ? 'Masuk' : 'Daftar Sekarang'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function TaarufProgressModal({ isOpen, onClose, taaruf }: ModalProps & { taaruf?: any }) {
  if (!isOpen || !taaruf) return null;

  const stages = [
    { id: 1, name: "Perkenalan", desc: "Pertukaran CV dan data dasar" },
    { id: 2, name: "Nilai Kehidupan", desc: "Diskusi visi & misi pernikahan" },
    { id: 3, name: "Harapan Pernikahan", desc: "Diskusi finansial & peran" },
    { id: 4, name: "Keterlibatan Keluarga", desc: "Pertemuan dengan Wali" }
  ];

  // Extract stage number from string like "Tahap 2: Nilai Kehidupan"
  const currentStageNum = parseInt(taaruf.stage.match(/\d+/)?.[0] || "1");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden max-h-[90vh] flex flex-col"
        >
          <div className="p-6 border-b border-stone-100 flex items-center gap-3 shrink-0">
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors -ml-2">
              <ArrowLeft className="h-5 w-5 text-stone-500" />
            </button>
            <h2 className="text-xl font-bold text-emerald-900">Progres Ta'aruf</h2>
          </div>
          
          <div className="p-6 overflow-y-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-stone-200 rounded-full overflow-hidden">
                <img src={`https://picsum.photos/seed/${taaruf.name}/100/100`} alt="Profile blur" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-800">{taaruf.name}</h3>
                <p className="text-sm text-emerald-600 font-medium">{taaruf.match} Kecocokan</p>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-200 before:to-transparent">
              {stages.map((stage) => {
                const isCompleted = stage.id < currentStageNum;
                const isCurrent = stage.id === currentStageNum;
                
                return (
                  <div key={stage.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm ${
                      isCompleted ? 'bg-emerald-500 text-white' : 
                      isCurrent ? 'bg-amber-500 text-white' : 
                      'bg-stone-200 text-stone-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : stage.id}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-stone-100 bg-stone-50 shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className={`font-bold ${isCurrent ? 'text-amber-600' : isCompleted ? 'text-emerald-700' : 'text-stone-500'}`}>
                          {stage.name}
                        </div>
                      </div>
                      <div className="text-stone-500 text-xs">{stage.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100">
              <button onClick={onClose} className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Kembali
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function CandidateModal({ isOpen, onClose, candidateId }: ModalProps & { candidateId?: number }) {
  if (!isOpen || !candidateId) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden max-h-[90vh] flex flex-col"
        >
          <div className="relative h-64 bg-stone-200 shrink-0">
            <img src={`https://picsum.photos/seed/match${candidateId}/400/400`} alt="Candidate blur" className="w-full h-full object-cover blur-md" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <button onClick={onClose} className="absolute top-4 left-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm z-10">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="text-2xl font-bold">Kandidat {candidateId}</h2>
              <div className="flex items-center gap-4 mt-1 text-sm text-stone-200">
                <span>28 Tahun</span>
                <span>•</span>
                <span>Jakarta Selatan</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-emerald-600" />
                <div>
                  <div className="text-sm text-emerald-800 font-medium">Tingkat Kecocokan</div>
                  <div className="text-xs text-emerald-600">Berdasarkan preferensi Anda</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-emerald-700">9{candidateId}%</div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-stone-900">Ringkasan Profil</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <div className="text-stone-500 text-xs mb-1">Pendidikan</div>
                  <div className="font-medium text-stone-800">S1 Teknik Informatika</div>
                </div>
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <div className="text-stone-500 text-xs mb-1">Pekerjaan</div>
                  <div className="font-medium text-stone-800">Software Engineer</div>
                </div>
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <div className="text-stone-500 text-xs mb-1">Status</div>
                  <div className="font-medium text-stone-800">Belum Menikah</div>
                </div>
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-100">
                  <div className="text-stone-500 text-xs mb-1">Suku</div>
                  <div className="font-medium text-stone-800">Jawa</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button onClick={onClose} className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 py-3 rounded-xl font-semibold transition-colors">
                Lewati
              </button>
              <button onClick={onClose} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-colors shadow-sm">
                Ajukan Ta'aruf
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function AllCandidatesModal({ isOpen, onClose, onSelectCandidate }: ModalProps & { onSelectCandidate: (id: number) => void }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          <div className="p-6 border-b border-stone-100 flex items-center gap-3 shrink-0">
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors -ml-2">
              <ArrowLeft className="h-5 w-5 text-stone-500" />
            </button>
            <h2 className="text-xl font-bold text-emerald-900">Semua Kandidat</h2>
          </div>
          
          <div className="p-6 overflow-y-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div 
                  key={i} 
                  onClick={() => onSelectCandidate(i)}
                  className="bg-white rounded-xl p-4 shadow-sm border border-stone-100 text-center group cursor-pointer hover:border-emerald-200 transition-colors"
                >
                  <div className="w-20 h-20 mx-auto bg-stone-200 rounded-full mb-3 overflow-hidden relative">
                    <img src={`https://picsum.photos/seed/match${i}/100/100`} alt="Match blur" className="w-full h-full object-cover blur-md group-hover:blur-sm transition-all" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <div className="text-sm font-semibold text-stone-800">Kandidat {i}</div>
                  <div className="text-xs text-emerald-600 font-medium mt-1">9{i}% Cocok</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
