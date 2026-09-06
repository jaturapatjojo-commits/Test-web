import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HighlightsSection } from './components/HighlightsSection';
import { CurriculumSection } from './components/CurriculumSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { FacultySection } from './components/FacultySection';
import { CareerSection } from './components/CareerSection';
import { TuitionCalculator } from './components/TuitionCalculator';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'apply' | 'brochure' | 'consultation'>('apply');
  const [selectedScholarship, setSelectedScholarship] = useState<string>('');

  const handleOpenApply = () => {
    setModalMode('apply');
    setSelectedScholarship('');
    setModalOpen(true);
  };

  const handleOpenBrochure = () => {
    setModalMode('brochure');
    setModalOpen(true);
  };

  const handleOpenConsultation = () => {
    setModalMode('consultation');
    setModalOpen(true);
  };

  const handleOpenWithScholarship = (scholarshipName: string) => {
    setModalMode('apply');
    setSelectedScholarship(scholarshipName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFE] text-slate-800 font-sans selection:bg-pink-200 selection:text-pink-900">
      {/* Sticky Navigation */}
      <Navbar
        onOpenApply={handleOpenApply}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* Main Single-Page Curriculum Showcase */}
      <main>
        {/* 1. Hero & Fast Overview */}
        <HeroSection
          onOpenApply={handleOpenApply}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* 2. Key Highlights & Distinction Pillars */}
        <HighlightsSection />

        {/* 3. Comprehensive 4-Year Curriculum & Tracks */}
        <CurriculumSection />

        {/* 4. Facilities, GPU Labs & Certifications */}
        <FacilitiesSection />

        {/* 5. Faculty & World-Class Mentors */}
        <FacultySection onOpenConsultation={handleOpenConsultation} />

        {/* 6. Career Paths & Salary Statistics */}
        <CareerSection />

        {/* 7. Tuition, Scholarships & Calculator */}
        <TuitionCalculator onOpenApplyWithScholarship={handleOpenWithScholarship} />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating CTA for Mobile/Tablet Quick Access */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden flex flex-col gap-2">
        <button
          onClick={handleOpenApply}
          className="px-4 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs rounded-full shadow-lg shadow-pink-300 flex items-center gap-2 active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>สมัครรอบนี้</span>
        </button>
      </div>

      {/* Unified Admission / Brochure / Consultation Modal */}
      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        initialScholarship={selectedScholarship}
      />
    </div>
  );
}
