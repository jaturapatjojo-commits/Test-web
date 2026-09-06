import React, { useState, useEffect } from 'react';
import { X, Sparkles, Download, CheckCircle2, Phone, Mail, User, School, BookOpen } from 'lucide-react';
import { SPECIALIZATION_TRACKS, SCHOLARSHIPS } from '../data/curriculumData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'apply' | 'brochure' | 'consultation';
  initialScholarship?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  mode,
  initialScholarship,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    currentEducation: 'มัธยมศึกษาปีที่ 6 (สายวิทย์-คณิต/ศิลป์-คำนวณ)',
    interestedTrack: 'ai-engineering',
    scholarshipChoice: initialScholarship || 'ทุนทั่วไป (ไม่ขอทุนพิเศษ)',
    note: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  useEffect(() => {
    if (initialScholarship) {
      setFormData((prev) => ({ ...prev, scholarshipChoice: initialScholarship }));
    }
  }, [initialScholarship]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setApplicationId('AID-' + Math.floor(100000 + Math.random() * 900000));
    }, 600);
  };

  const handleDownloadBrochure = () => {
    // Generate text brochure file download for immediate utility
    const brochureContent = `
=====================================================
หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาปัญญาประดิษฐ์และนวัตกรรมดิจิทัล (B.Sc. AIDI)
คณะเทคโนโลยีสารสนเทศและวิทยาการดิจิทัล
ปีการศึกษา 2569
=====================================================
รหัสใบสมัคร/ลงทะเบียน: ${applicationId || 'GUEST'}
ผู้ลงทะเบียน: ${formData.fullName || 'ผู้สนใจ'}
เบอร์โทรศัพท์: ${formData.phone || '-'}
อีเมล: ${formData.email || '-'}
สายที่สนใจ: ${formData.interestedTrack}
ทุนที่ยื่น: ${formData.scholarshipChoice}

[สรุปข้อมูลหลักสูตร]
- จำนวนหน่วยกิตรวม: 128 หน่วยกิต
- ระยะเวลาศึกษา: 4 ปี (หรือเทียบโอน 3 ปี)
- ค่าเล่าเรียนเหมาจ่าย: 42,000 บาท / ภาคการศึกษา
- ได้รับการรับรองมาตรฐานหลักสูตรโดยกระทรวงการอุดมศึกษาฯ (สป.อว.)
- กองทุน กยศ./กรอ. กู้ยืมได้ 100%

[ติดต่อสอบถามฝ่ายรับสมัคร]
โทร: 02-123-4567 | อีเมล: admissions.ai@university.ac.th
LINE Official: @aidi_admission
=====================================================
    `;

    const blob = new Blob([brochureContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AIDI-Curriculum-Brochure-2569.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-pink-200 shadow-2xl relative my-8 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-bold text-pink-600 uppercase tracking-wider block mb-1">
              {mode === 'brochure' ? 'ส่งข้อมูลเรียบร้อยแล้ว' : 'บันทึกข้อมูลการสมัครเรียบร้อย'}
            </span>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              ยินดีต้อนรับสู่ก้าวแรกแห่งอนาคต AI
            </h3>

            <div className="p-4 rounded-xl bg-pink-50/70 border border-pink-200 max-w-sm mx-auto mb-6 text-left">
              <div className="text-xs text-slate-500">รหัสยืนยันการลงทะเบียนของคุณ:</div>
              <div className="text-xl font-mono font-bold text-pink-700">{applicationId}</div>
              <div className="text-xs text-slate-600 mt-2">
                ผู้สมัคร: <strong>{formData.fullName}</strong> ({formData.phone})
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
              เจ้าหน้าที่ฝ่ายรับสมัครและอาจารย์ที่ปรึกษาจะติดต่อกลับเพื่อแจ้งตารางสัมภาษณ์และรายละเอียดทุนการศึกษาทางโทรศัพท์และอีเมลภายใน 24 ชั่วโมง
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDownloadBrochure}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm shadow-md shadow-pink-200 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>ดาวน์โหลดเอกสารสรุปหลักสูตรทันที</span>
              </button>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {mode === 'brochure'
                    ? 'ดาวน์โหลดคู่มือหลักสูตรฉบับเต็ม'
                    : mode === 'consultation'
                    ? 'นัดหมายปรึกษาอาจารย์ที่ปรึกษา 1-on-1'
                    : 'สมัครเรียนออนไลน์ ปีการศึกษา 2569'}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {mode === 'brochure'
                  ? 'รับเล่มหลักสูตรและแผนการศึกษา 4 ปี'
                  : 'กรอกข้อมูลเพื่อลงทะเบียนรับสิทธิ์'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                กรอกข้อมูลเบื้องต้นเพื่อให้ทีมงานส่งรายละเอียดหลักสูตรและสิทธิพิเศษรอบโควตา
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ชื่อ - นามสกุล *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="นาย/นางสาว สมาร์ท นวัตกร"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 bg-[#FFFDFE] border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    เบอร์โทรศัพท์ติดต่อ *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="081-234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 bg-[#FFFDFE] border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    อีเมล *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="smart.innovation@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 bg-[#FFFDFE] border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    วุฒิการศึกษาปัจจุบัน
                  </label>
                  <select
                    value={formData.currentEducation}
                    onChange={(e) => setFormData({ ...formData, currentEducation: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FFFDFE] border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-500"
                  >
                    <option value="มัธยมศึกษาปีที่ 6 (สายวิทย์-คณิต/ศิลป์-คำนวณ)">ม.6 ทุกแผนการเรียน</option>
                    <option value="ประกาศนียบัตรวิชาชีพ (ปวช.) คอมพิวเตอร์/ไฟฟ้า">ปวช. สายช่าง/คอมพิวเตอร์</option>
                    <option value="ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) เทียบโอน">ปวส. (เทียบโอน)</option>
                    <option value="กำลังศึกษาปริญญาตรีที่อื่น / ย้ายสถาบัน">ย้ายสาขา / เทียบโอนจาก ม.อื่น</option>
                    <option value="ผู้สำเร็จการศึกษาแล้ว (Reskill)">จบ ป.ตรี แล้ว (Reskill)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    สายความเชี่ยวชาญที่สนใจ
                  </label>
                  <select
                    value={formData.interestedTrack}
                    onChange={(e) => setFormData({ ...formData, interestedTrack: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FFFDFE] border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-500"
                  >
                    {SPECIALIZATION_TRACKS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.nameTh.split('(')[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ทุนการศึกษาที่ต้องการขอรับสิทธิ
                </label>
                <select
                  value={formData.scholarshipChoice}
                  onChange={(e) => setFormData({ ...formData, scholarshipChoice: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#FFFDFE] border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-500"
                >
                  <option value="ทุนทั่วไป (ไม่ขอทุนพิเศษ)">ทั่วไป (กู้ กยศ. / ผ่อนชำระ 0%)</option>
                  {SCHOLARSHIPS.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.tag})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ข้อความเพิ่มเติม / สิ่งที่อยากสอบถามอาจารย์ (ไม่บังคับ)
                </label>
                <textarea
                  rows={2}
                  placeholder="เช่น ต้องการทราบเรื่องการเทียบโอนวิชา, สอบถามรอบ TCAS 2..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FFFDFE] border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-pink-600 hover:bg-pink-700 active:scale-98 text-white font-bold text-sm shadow-md shadow-pink-200 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      กำลังประมวลผล...
                    </span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>ยืนยันการส่งข้อมูลและรับสิทธิ</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  ข้อมูลส่วนบุคคลของคุณจะถูกจัดเก็บตามมาตรฐานความปลอดภัย PDPA
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
