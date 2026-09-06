import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Download, GraduationCap, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onOpenBrochure }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ภาพรวม', href: '#overview' },
    { name: 'จุดเด่น', href: '#highlights' },
    { name: 'โครงสร้างวิชา', href: '#curriculum' },
    { name: 'คณาจารย์', href: '#faculty' },
    { name: 'เส้นทางอาชีพ', href: '#careers' },
    { name: 'ค่าเรียนและทุน', href: '#tuition' },
    { name: 'คำถามที่พบบ่อย', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-pink-100/60 border-b border-pink-100 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-pink-100/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#overview" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center shadow-md shadow-pink-200 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">AI & DIGITAL INNOVATION</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-pink-100 text-pink-700">
                  B.Sc.
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium -mt-0.5">
                สาขาปัญญาประดิษฐ์และนวัตกรรมดิจิทัล
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-pink-600 hover:bg-pink-50/80 rounded-lg transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenBrochure}
              id="nav-brochure-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100/90 border border-pink-200 rounded-lg transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>คู่มือหลักสูตร PDF</span>
            </button>

            <button
              onClick={onOpenApply}
              id="nav-apply-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-pink-600 hover:bg-pink-700 shadow-sm shadow-pink-300 rounded-lg transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>สมัครเรียนรอบนี้</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenApply}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-pink-600 rounded-lg"
            >
              สมัครเรียน
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-toggle-btn"
              className="p-2 text-slate-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-pink-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <div className="grid grid-cols-2 gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-pink-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-pink-700 bg-pink-50 border border-pink-200 rounded-lg"
            >
              <Download className="w-4 h-4" />
              ดาวน์โหลดคู่มือหลักสูตรฉบับเต็ม (PDF)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              สมัครเรียนออนไลน์ (TCAS & โควตา)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
