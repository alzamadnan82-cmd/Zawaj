import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Classes({ onOpenRegister }: { onOpenRegister: () => void }) {
  const events = [
    {
      id: 1,
      title: "Seminar: Membangun Visi Misi Keluarga Sakinah",
      type: "Seminar Offline",
      date: "Sabtu, 24 Agustus 2026",
      time: "09:00 - 15:00 WIB",
      location: "Hotel Mulia, Jakarta",
      price: "Rp 250.000",
      speaker: "Ust. Dr. Syafiq Riza Basalamah",
      spots: "Sisa 15 Kuota",
      image: "https://picsum.photos/seed/seminar1/600/400"
    },
    {
      id: 2,
      title: "Kelas Online: Persiapan Finansial Pranikah",
      type: "Kelas Online (Zoom)",
      date: "Minggu, 25 Agustus 2026",
      time: "19:30 - 21:30 WIB",
      location: "Online via Zoom",
      price: "Rp 100.000",
      speaker: "Ahmad Gozali (Perencana Keuangan)",
      spots: "Sisa 50 Kuota",
      image: "https://picsum.photos/seed/seminar2/600/400"
    },
    {
      id: 3,
      title: "Workshop: Manajemen Konflik Suami Istri",
      type: "Workshop Offline",
      date: "Sabtu, 31 Agustus 2026",
      time: "08:00 - 16:00 WIB",
      location: "Gedung Serbaguna Salman ITB, Bandung",
      price: "Rp 300.000",
      speaker: "Dr. Aisyah Dahlan",
      spots: "Penuh",
      image: "https://picsum.photos/seed/seminar3/600/400"
    }
  ];

  return (
    <div className="w-full bg-stone-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Kelas Pranikah & Seminar
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-100 text-lg max-w-2xl mx-auto"
          >
            Langkah pertama menuju pernikahan yang berkah dimulai dari ilmu. Ikuti kelas kami sebagai syarat utama untuk bergabung dengan ekosistem perjodohan Zawaj.in.
          </motion.p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-1">Bekal Ilmu Valid</h3>
                <p className="text-sm text-stone-600">Materi disampaikan oleh asatidzah dan pakar yang ahli di bidang pernikahan dan keluarga.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-1">Jejaring Komunitas</h3>
                <p className="text-sm text-stone-600">Bertemu dengan sesama peserta yang memiliki visi dan misi yang sama untuk menikah.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-1">Akses ke Zawaj.in</h3>
                <p className="text-sm text-stone-600">Lulusan kelas pranikah mendapatkan prioritas dan akses untuk mendaftar fitur perjodohan eksklusif kami.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-emerald-900">Jadwal Terdekat</h2>
            <p className="text-stone-500 mt-1">Pilih kelas yang sesuai dengan kebutuhan Anda.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800">
                  {event.type}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-stone-800 mb-4 line-clamp-2">{event.title}</h3>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <Calendar className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>{event.date} <br/><span className="text-xs text-stone-400">{event.time}</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <MapPin className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <Users className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>Pemateri: <span className="font-medium">{event.speaker}</span></span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                  <div>
                    <div className="text-lg font-bold text-emerald-700">{event.price}</div>
                    <div className={`text-xs font-medium ${event.spots === 'Penuh' ? 'text-red-500' : 'text-amber-600'}`}>
                      {event.spots}
                    </div>
                  </div>
                  <button 
                    onClick={onOpenRegister}
                    disabled={event.spots === 'Penuh'}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                      event.spots === 'Penuh' 
                        ? 'bg-stone-100 text-stone-400 cursor-not-allowed' 
                        : 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm'
                    }`}
                  >
                    {event.spots === 'Penuh' ? 'Habis' : 'Daftar'} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
