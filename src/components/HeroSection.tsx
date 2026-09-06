import React from 'react';
import { Sparkles, ArrowRight, Download, CheckCircle2, ShieldCheck, Clock, BookOpen, Layers } from 'lucide-react';
import { PROGRAM_INFO } from '../data/curriculumData';

interface HeroSectionProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply, onOpenBrochure }) => {
  return (
    <section id="overview" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF0F5]/80 via-[#FFF9FB] to-white">
      {/* Background Decorative Rings / Blobs in Soft Pink & White */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-pink-200/40 via-rose-100/30 to-pink-50/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-12 -right-16 w-80 h-80 bg-pink-300/20 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-48 -left-20 w-72 h-72 bg-rose-200/25 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Admissions Alert Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200/80 shadow-sm shadow-pink-100 text-xs sm:text-sm font-medium text-pink-700 hover:border-pink-300 transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            <span>เปิดรับสมัครรุ่นใหม่ ปีการศึกษา {PROGRAM_INFO.academicYear} • รับรอบละ 45 ที่นั่งเท่านั้น</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-pink-600 uppercase mb-2">
            {PROGRAM_INFO.facultyName}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.18] mb-4">
            หลักสูตรวิทยาศาสตรบัณฑิต <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700">
              สาขาวิชาปัญญาประดิษฐ์และนวัตกรรมดิจิทัล
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-2 font-medium">
            {PROGRAM_INFO.degreeNameEn} ({PROGRAM_INFO.degreeAbbrEn})
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            มุ่งเน้นการสร้างวิศวกรซอฟต์แวร์และผู้เชี่ยวชาญ AI ยุคใหม่ที่ลงมือปฏิบัติจริงกับโจทย์ระดับอุตสาหกรรม
            ครอบคลุม Generative AI, MLOps, Cloud-Native Architecture ตลอดจนการบ่มเพาะสตาร์ทอัปเทคโนโลยีตั้งแต่รั้วมหาวิทยาลัย
          </p>

          {/* Quick Specifications Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-xs sm:text-sm text-slate-700">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-pink-100 shadow-xs">
              <Clock className="w-4 h-4 text-pink-500" />
              <span>ระยะเวลา: <strong>{PROGRAM_INFO.duration}</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-pink-100 shadow-xs">
              <BookOpen className="w-4 h-4 text-pink-500" />
              <span>จำนวนหน่วยกิต: <strong>{PROGRAM_INFO.credits} หน่วยกิต</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-pink-100 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-pink-500" />
              <span>มาตรฐาน: <strong>สป.อว. รับรอง</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-pink-100 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-pink-500" />
              <span>กู้ยืม: <strong>กยศ. / กรอ. 100%</strong></span>
            </div>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <button
              onClick={onOpenApply}
              id="hero-apply-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-pink-600 hover:bg-pink-700 active:scale-98 rounded-xl shadow-lg shadow-pink-300/60 transition-all duration-150"
            >
              <Sparkles className="w-5 h-5 text-pink-100" />
              <span>สมัครเรียนออนไลน์ทันที</span>
              <ArrowRight className="w-4 h-4 ml-1 text-pink-200" />
            </button>

            <a
              href="#curriculum"
              id="hero-curriculum-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-pink-50/80 border border-pink-200 active:scale-98 rounded-xl shadow-xs transition-all duration-150"
            >
              <Layers className="w-4 h-4 text-pink-500" />
              <span>ดูโครงสร้างวิชา 4 ปี</span>
            </a>

            <button
              onClick={onOpenBrochure}
              id="hero-brochure-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100/80 border border-pink-200/80 rounded-xl transition-all duration-150"
            >
              <Download className="w-4 h-4" />
              <span>โหลดเล่มหลักสูตร</span>
            </button>
          </div>
        </div>

        {/* Key Metrics Strip / Bento Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {PROGRAM_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-pink-100 shadow-sm shadow-pink-100/50 hover:border-pink-200 transition-all text-center group"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-600 group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Marquee Preview */}
        <div className="mt-10 pt-6 border-t border-pink-100/60 text-center max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">
            เครื่องมือและเทคโนโลยีหลักที่สอนในหลักสูตร
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 text-xs font-medium text-slate-600">
            {['Python', 'PyTorch', 'LangChain', 'React 19', 'Next.js', 'FastAPI', 'Docker', 'Kubernetes', 'AWS Cloud', 'PostgreSQL', 'Hugging Face', 'Figma'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white border border-pink-100/90 rounded-full text-slate-700 shadow-2xs hover:border-pink-300 hover:text-pink-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
