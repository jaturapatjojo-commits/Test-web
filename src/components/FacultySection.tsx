import React from 'react';
import { FACULTY_MEMBERS } from '../data/curriculumData';
import { Users, GraduationCap, Award, MessageSquare } from 'lucide-react';

interface FacultySectionProps {
  onOpenConsultation: () => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="faculty" className="py-20 bg-[#FFFDFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-pink-700 uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>คณาจารย์และผู้เชี่ยวชาญระดับโลก</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            เรียนรู้โดยตรงกับผู้สร้างเทคโนโลยีตัวจริง
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            คณาจารย์จบการศึกษาจากสถาบันชั้นนำระดับนานาชาติ (Stanford, Imperial, Univ. of Tokyo, KAIST) พร้อมประสบการณ์ในอุตสาหกรรมเทคตัวจริง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FACULTY_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-pink-100 hover:border-pink-300 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.nameTh}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-pink-600 text-white uppercase tracking-wider inline-block mb-1">
                    {member.badge}
                  </span>
                  <div className="font-bold text-sm leading-snug">
                    {member.nameTh}
                  </div>
                  <div className="text-[11px] text-pink-200 font-medium">
                    {member.nameEn}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-pink-700 mb-3 line-clamp-1">
                    {member.role}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-slate-600">
                      <div className="font-semibold text-slate-800 flex items-center gap-1 mb-1">
                        <GraduationCap className="w-3.5 h-3.5 text-pink-500" />
                        <span>วุฒิการศึกษา:</span>
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-500 pl-1">
                        {member.education.map((edu, idx) => (
                          <li key={idx} className="line-clamp-1">
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="pt-3 border-t border-pink-100/80">
                    <div className="text-[11px] font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                      <Award className="w-3 h-3 text-pink-500" />
                      <span>ความเชี่ยวชาญเฉพาะทาง:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.specialty.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-pink-50 text-pink-700 border border-pink-100"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 p-6 sm:p-8 text-white text-center shadow-lg shadow-pink-200">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            ต้องการปรึกษาแนวทางการเรียน หรือเทียบโอนหน่วยกิต?
          </h3>
          <p className="text-sm text-pink-100 max-w-xl mx-auto mb-5 leading-relaxed">
            ทีมนักวิชาการและอาจารย์ประจำหลักสูตรพร้อมให้คำปรึกษาแบบ 1-on-1 ทุกวันจันทร์-ศุกร์ เพื่อวางแผนอนาคตทางการศึกษาของคุณ
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-pink-700 font-bold text-sm hover:bg-pink-50 active:scale-95 transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>นัดหมายพูดคุยกับอาจารย์แนะแนว</span>
          </button>
        </div>
      </div>
    </section>
  );
};
