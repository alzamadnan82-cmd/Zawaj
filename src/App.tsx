/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { TaarufMode } from './pages/TaarufMode';
import { Classes } from './pages/Classes';
import { RegisterModal, VerificationModal, WaliModal, AuthModal } from './components/Modals';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showWaliModal, setShowWaliModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isVerifiedMember, setIsVerifiedMember] = useState(false);

  return (
    <>
      <Layout 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenAuth={() => setShowAuthModal(true)}
      >
        {activeTab === 'home' && (
          <Home 
            setActiveTab={setActiveTab} 
          />
        )}
        {activeTab === 'classes' && (
          <Classes 
            onOpenRegister={() => setShowRegisterModal(true)} 
          />
        )}
        {activeTab === 'dashboard' && (
          <Dashboard 
            setActiveTab={setActiveTab}
            onOpenVerification={() => setShowVerificationModal(true)}
            onOpenWali={() => setShowWaliModal(true)}
            isVerifiedMember={isVerifiedMember}
            setIsVerifiedMember={setIsVerifiedMember}
          />
        )}
        {activeTab === 'taaruf' && (
          <TaarufMode 
            setActiveTab={setActiveTab}
            onOpenVerification={() => setShowVerificationModal(true)}
            isVerifiedMember={isVerifiedMember}
            setIsVerifiedMember={setIsVerifiedMember}
          />
        )}
      </Layout>

      <RegisterModal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
      <VerificationModal isOpen={showVerificationModal} onClose={() => setShowVerificationModal(false)} />
      <WaliModal isOpen={showWaliModal} onClose={() => setShowWaliModal(false)} />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
