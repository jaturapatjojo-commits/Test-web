import React, { useState } from 'react';
import { CURRICULUM_YEARS, SPECIALIZATION_TRACKS } from '../data/curriculumData';
import { Subject } from '../types';
import { BookOpen, Sparkles, Filter, Code2, Layers, CheckCircle2, ChevronRight, X, Info } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(1);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeSubjectModal, setActiveSubjectModal] = useState<Subject | null>(null);
  const [activeTrackTab, setActiveTrackTab] = useState<string>('ai-engineering');

  const currentYearData = CURRICULUM_YEARS.find((y) => y.year === selectedYear) || CURRICULUM_YEARS[0];

  const categoryLabels: Record<string, { label: string; color: string }> = {
    'ai-special': { label: 'AI & Data พิเศษ', color: 'bg-pink-100 text-pink-700 border-pink-200' },
    'core': { label: 'วิชาแกนหลัก', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    'capstone': { label: 'โครงงาน / สหกิจ', color: 'bg-amber-50 text-amber-800 border-amber-200' },
    'elective': { label: 'วิชาเลือกเฉพาะทาง', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    'gen-ed': { label: 'ศึกษาทั่วไป', color: 'bg-slate-100 text-slate-700 border-slate-200' },
  };

  const filterButtons = [
    { key: 'all', label: 'วิชาทั้งหมด' },
    { key: 'ai-special', label: '🤖 AI & Data เฉพาะทาง' },
    { key: 'core', label: '💻 วิศวกรรมซอฟต์แวร์แกน' },
    { key: 'capstone', label: '🚀 Hackathon / สหกิจศึกษา' },
    { key: 'elective', label: '🎯 วิชาเลือกเฉพาะทาง' },
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-white via-[#FFF9FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-pink-700 uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>โครงสร้างหลักสูตร 128 หน่วยกิต</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            แผนการศึกษาตลอด 4 ปี <br className="hidden sm:inline" />
            <span className="text-pink-600">ก้าวสู่มืออาชีพอย่างเป็นระบบ</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            ออกแบบให้ผู้เรียนค่อย ๆ ไต่ระดับจากพื้นฐานการโค้ด สู่การสร้างโมเดล AI ล้ำสมัย และการฝึกงานแบบเต็มเวลา 6 เดือน
          </p>
        </div>

        {/* Credit Breakdown Bar */}
        <div className="bg-white rounded-2xl p-5 border border-pink-100 shadow-xs mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs font-semibold text-slate-500 uppercase">สัดส่วนหน่วยกิตรวม</span>
              <div className="text-2xl font-bold text-slate-900">128 หน่วยกิต ตลอดหลักสูตร</div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center w-full sm:w-auto">
              <div className="px-3 py-2 rounded-xl bg-pink-50 border border-pink-100">
                <div className="text-lg font-bold text-pink-700">86</div>
                <div className="text-[11px] text-slate-600 font-medium">หมวดวิชาเฉพาะ</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-rose-50 border border-rose-100">
                <div className="text-lg font-bold text-rose-700">30</div>
                <div className="text-[11px] text-slate-600 font-medium">หมวดศึกษาทั่วไป</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-lg font-bold text-slate-700">12</div>
                <div className="text-[11px] text-slate-600 font-medium">หมวดเลือกเสรี</div>
              </div>
            </div>
          </div>
        </div>

        {/* Year Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {CURRICULUM_YEARS.map((yearItem) => {
            const isSelected = selectedYear === yearItem.year;
            return (
              <button
                key={yearItem.year}
                onClick={() => setSelectedYear(yearItem.year)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border relative ${
                  isSelected
                    ? 'bg-white border-pink-500 shadow-md shadow-pink-100 ring-2 ring-pink-400/20'
                    : 'bg-white/70 border-pink-100 hover:bg-white hover:border-pink-200 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-pink-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    ชั้นปีที่ {yearItem.year}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {yearItem.semesters.reduce((acc, s) => acc + s.credits, 0)} นก.
                  </span>
                </div>
                <div className={`text-sm font-bold line-clamp-1 ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                  {yearItem.titleEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Year Tagline Banner */}
        <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50/50 rounded-xl p-4 border border-pink-200/80 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {currentYearData.titleTh}
            </h3>
            <p className="text-xs sm:text-sm text-pink-700 font-medium">
              💡 {currentYearData.tagline}
            </p>
          </div>
          <div className="shrink-0 text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-pink-100">
            รวม 2 ภาคเรียน: {currentYearData.semesters.reduce((acc, s) => acc + s.credits, 0)} หน่วยกิต
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mr-1">
            <Filter className="w-3.5 h-3.5 text-pink-500" />
            <span>กรองหมวดวิชา:</span>
          </div>
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilterCategory(btn.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === btn.key
                  ? 'bg-pink-600 text-white shadow-xs'
                  : 'bg-white border border-pink-100 text-slate-600 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Semester Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {currentYearData.semesters.map((sem) => {
            const filteredSubjects = sem.subjects.filter((sub) => {
              if (filterCategory === 'all') return true;
              return sub.category === filterCategory;
            });

            return (
              <div
                key={sem.semester}
                className="bg-white rounded-2xl border border-pink-100/90 shadow-sm p-5 sm:p-6"
              >
                {/* Semester Heading */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-pink-100">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-pink-100 text-pink-700 text-xs font-bold flex items-center justify-center">
                      {sem.semester}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base">
                      ภาคการศึกษาที่ {sem.semester}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-pink-50 text-pink-700 rounded-full border border-pink-200">
                    {sem.credits} หน่วยกิต ({filteredSubjects.length} วิชา)
                  </span>
                </div>

                {/* Subjects List */}
                {filteredSubjects.length === 0 ? (
                  <div className="py-10 text-center text-xs text-slate-400">
                    ไม่มีรายวิชาในหมวดที่เลือกในภาคการศึกษานี้
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredSubjects.map((sub) => (
                      <div
                        key={sub.code}
                        onClick={() => setActiveSubjectModal(sub)}
                        className="p-4 rounded-xl bg-[#FFFDFE] hover:bg-pink-50/40 border border-pink-100/80 hover:border-pink-300 transition-all cursor-pointer group"
                      >
                        <div className="flex items-start justify-between gap-3 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded">
                              {sub.code}
                            </span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryLabels[sub.category]?.color || 'bg-slate-100 text-slate-700'}`}>
                              {categoryLabels[sub.category]?.label || sub.category}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-slate-600 shrink-0">
                            {sub.credits} นก.
                          </span>
                        </div>

                        <div className="font-bold text-slate-900 text-sm group-hover:text-pink-600 transition-colors">
                          {sub.nameTh}
                        </div>
                        <div className="text-xs text-slate-500 font-medium -mt-0.5 mb-2">
                          {sub.nameEn}
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2.5">
                          {sub.description}
                        </p>

                        {sub.tools && sub.tools.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            {sub.tools.map((t, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono px-2 py-0.5 bg-white border border-pink-100 text-slate-600 rounded"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Specialization Tracks (สายความเชี่ยวชาญเฉพาะทาง) */}
        <div className="rounded-2xl border border-pink-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialization Tracks (เลือกเมื่อขึ้นปีที่ 3)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                4 สายความเชี่ยวชาญ เจาะลึกตามเป้าหมายอาชีพ
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              นิสิตสามารถเลือกเรียนกลุ่มวิชาเฉพาะทางตามความชอบ พร้อมทำโครงงานร่วมกับทีมผู้เชี่ยวชาญในสายนั้น ๆ
            </p>
          </div>

          {/* Track selection tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
            {SPECIALIZATION_TRACKS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTrackTab(t.id)}
                className={`p-3 rounded-xl text-left text-xs font-bold transition-all border ${
                  activeTrackTab === t.id
                    ? 'bg-pink-50 border-pink-400 text-pink-900 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-pink-200'
                }`}
              >
                {t.nameTh.split('(')[0]}
              </button>
            ))}
          </div>

          {/* Active Track Content */}
          {SPECIALIZATION_TRACKS.map((t) => {
            if (t.id !== activeTrackTab) return null;
            return (
              <div
                key={t.id}
                className="bg-[#FFFDFE] p-6 rounded-xl border border-pink-100/90 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {t.nameTh}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {t.focus}
                  </p>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block mb-2">
                      ตำแหน่งงานเด่นหลังจบ:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {t.popularRoles.map((role, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-100/80 text-pink-700 border border-pink-200"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subject Detail Modal */}
      {activeSubjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-pink-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setActiveSubjectModal(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded border border-pink-200">
                {activeSubjectModal.code}
              </span>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${categoryLabels[activeSubjectModal.category]?.color}`}>
                {categoryLabels[activeSubjectModal.category]?.label}
              </span>
              <span className="text-xs font-semibold text-slate-500 ml-auto mr-8">
                {activeSubjectModal.credits} หน่วยกิต
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {activeSubjectModal.nameTh}
            </h3>
            <p className="text-sm font-medium text-slate-500 mb-4">
              {activeSubjectModal.nameEn}
            </p>

            <div className="space-y-4 text-sm text-slate-600 border-t border-b border-pink-100 py-4 my-4">
              <div>
                <strong className="text-slate-800 block mb-1">คำอธิบายรายวิชา (Course Description):</strong>
                <p className="leading-relaxed">{activeSubjectModal.description}</p>
              </div>

              {activeSubjectModal.tools && (
                <div>
                  <strong className="text-slate-800 block mb-1.5">เครื่องมือและเฟรมเวิร์กที่ใช้ในชั้นเรียน:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSubjectModal.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-pink-50 text-pink-700 border border-pink-200 rounded-md text-xs font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setActiveSubjectModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
