import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, ArrowUp, Facebook, Globe, MessageCircle } from 'lucide-react';
import { PROGRAM_INFO } from '../data/curriculumData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-pink-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Program Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center shadow-md shadow-pink-900">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-white text-base block tracking-tight">AI & DIGITAL INNOVATION</span>
                <span className="text-xs text-pink-400 font-medium">
                  {PROGRAM_INFO.degreeAbbrTh}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {PROGRAM_INFO.facultyName} <br />
              มุ่งมั่นพัฒนากำลังคนด้านเทคโนโลยีปัญญาประดิษฐ์และซอฟต์แวร์ระดับสากล เพื่อตอบสนองการเปลี่ยนแปลงของเศรษฐกิจดิจิทัล
            </p>
            <div className="text-xs text-pink-300/80 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              {PROGRAM_INFO.accreditation}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              โครงสร้างเนื้อหาในหน้านี้
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-pink-400 transition-colors">
                  • ภาพรวมและคุณสมบัติหลักสูตร
                </a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-pink-400 transition-colors">
                  • จุดเด่น 4 ประการที่เหนือกว่า
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-pink-400 transition-colors">
                  • โครงสร้างวิชาเรียน 4 ปี (128 หน่วยกิต)
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-pink-400 transition-colors">
                  • คณาจารย์และอาจารย์พิเศษ
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-pink-400 transition-colors">
                  • เส้นทางอาชีพและฐานเงินเดือน
                </a>
              </li>
              <li>
                <a href="#tuition" className="hover:text-pink-400 transition-colors">
                  • ค่าเล่าเรียน เครื่องคำนวณ และทุน
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-400 transition-colors">
                  • คำถามที่พบบ่อย (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              ศูนย์รับสมัครและบริการนิสิต
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>อาคารนวัตกรรมดิจิทัล ชั้น 4-6 เลขที่ 123 ถนนวิภาวดีรังสิต แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-500 shrink-0" />
                <span>โทร. 02-123-4567, 089-999-8877</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-500 shrink-0" />
                <span>admissions.ai@university.ac.th</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>LINE Official: @aidi_admission</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Map & Office Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              เวลาทำการและการเดินทาง
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-2 mb-4">
              <div>
                <strong className="text-white">จันทร์ - ศุกร์:</strong> 08:30 - 17:30 น.
              </div>
              <div>
                <strong className="text-white">เสาร์ - อาทิตย์:</strong> 09:00 - 16:30 น. (ช่วงรับสมัคร)
              </div>
              <div className="text-slate-400 text-[11px] pt-1 border-t border-slate-700">
                🚆 ใกล้สถานี BTS ห้าแยกลาดพร้าว / MRT พหลโยธิน มีรถรับ-ส่งฟรี
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://university.ac.th"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-200 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>กลับขึ้นบนสุด</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาปัญญาประดิษฐ์และนวัตกรรมดิจิทัล (B.Sc. AIDI). สงวนลิขสิทธิ์ทุกประการ.
          </div>
          <div className="flex gap-4 text-slate-400">
            <span>นโยบายความเป็นส่วนตัว (PDPA)</span>
            <span>ข้อกำหนดและระเบียบการศึกษา</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
