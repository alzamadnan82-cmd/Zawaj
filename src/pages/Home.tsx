import React from 'react';
import { Shield, Heart, Users, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export function Home({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-stone-50 leading-tight"
            >
              Langkah Pertama Menuju Pernikahan Berkah <span className="text-amber-400">Dimulai dari Ilmu</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-xl text-emerald-100 max-w-2xl leading-relaxed"
            >
              Zawaj.in bukan sekadar aplikasi pencari jodoh. Kami adalah ekosistem persiapan pernikahan. Ikuti kelas pranikah kami, lulus verifikasi ketat, dan temukan pasangan dengan nilai Islami yang sama.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => setActiveTab('classes')}
                className="bg-amber-500 hover:bg-amber-600 text-emerald-950 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                Lihat Jadwal Kelas <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-emerald-800 hover:bg-emerald-700 border border-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center justify-center"
              >
                Pelajari Cara Kerjanya
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-emerald-900">Perjalanan Anda Bersama Zawaj.in</h2>
            <p className="mt-4 text-lg text-stone-600">Kami memfilter pengguna secara ketat melalui pendidikan dan verifikasi untuk memastikan hanya mereka yang serius yang dapat berta'aruf.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-amber-500" />,
                title: "1. Ikuti Kelas Pranikah",
                desc: "Daftar dan ikuti seminar atau kelas pranikah kami sebagai langkah awal dan syarat utama bergabung."
              },
              {
                icon: <Shield className="h-8 w-8 text-amber-500" />,
                title: "2. Verifikasi Ketat",
                desc: "Setelah lulus kelas, Anda akan melewati verifikasi identitas, wawancara, dan tes psikologi untuk membuka fitur perjodohan."
              },
              {
                icon: <Users className="h-8 w-8 text-amber-500" />,
                title: "3. Ta'aruf Terstruktur",
                desc: "Mulai proses ta'aruf yang aman, dipantau oleh Wali, dan dicocokkan berdasarkan nilai-nilai agama serta visi hidup."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center"
              >
                <div className="mx-auto bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-3">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Pengguna Terverifikasi", value: "50k+" },
              { label: "Pernikahan Berhasil", value: "1,200+" },
              { label: "Wali Aktif", value: "15k+" },
              { label: "Disetujui Ulama", value: "100%" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-emerald-800 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-stone-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
