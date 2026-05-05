import React from 'react';
import { Heart, Home, MessageCircle, Shield, User, BookOpen } from 'lucide-react';

export function Layout({ children, activeTab, setActiveTab, onOpenAuth }: { children: React.ReactNode, activeTab: string, setActiveTab: (tab: string) => void, onOpenAuth?: () => void }) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="bg-emerald-800 text-white p-1.5 rounded-lg">
                  <Heart className="h-5 w-5" />
                </div>
                <span className="font-semibold text-xl text-emerald-900 tracking-tight">Zawaj.in</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`${
                  activeTab === 'home'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Beranda
              </button>
              <button
                onClick={() => setActiveTab('classes')}
                className={`${
                  activeTab === 'classes'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Kelas & Seminar
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`${
                  activeTab === 'dashboard'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Dasbor
              </button>
              <button
                onClick={() => setActiveTab('taaruf')}
                className={`${
                  activeTab === 'taaruf'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Mode Ta'aruf
              </button>
            </div>
            <div className="flex items-center">
              <button 
                onClick={onOpenAuth}
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Mobile Navigation (Bottom) */}
      <div className="sm:hidden fixed bottom-0 w-full bg-white border-t border-stone-200 flex justify-around py-3 z-50 pb-safe">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-emerald-800' : 'text-stone-400'}`}>
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-medium">Beranda</span>
        </button>
        <button onClick={() => setActiveTab('classes')} className={`flex flex-col items-center gap-1 ${activeTab === 'classes' ? 'text-emerald-800' : 'text-stone-400'}`}>
          <BookOpen className="h-5 w-5" />
          <span className="text-[10px] font-medium">Kelas</span>
        </button>
        <button onClick={() => setActiveTab('dashboard')} className={`flex flex-col items-center gap-1 ${activeTab === 'dashboard' ? 'text-emerald-800' : 'text-stone-400'}`}>
          <User className="h-5 w-5" />
          <span className="text-[10px] font-medium">Dasbor</span>
        </button>
        <button onClick={() => setActiveTab('taaruf')} className={`flex flex-col items-center gap-1 ${activeTab === 'taaruf' ? 'text-emerald-800' : 'text-stone-400'}`}>
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px] font-medium">Ta'aruf</span>
        </button>
      </div>
    </div>
  );
}
