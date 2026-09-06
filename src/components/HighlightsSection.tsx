import React from 'react';
import { Briefcase, Cpu, Users, Award, Check, Sparkles } from 'lucide-react';
import { HIGHLIGHTS } from '../data/curriculumData';

export const HighlightsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-pink-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-pink-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-pink-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-pink-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-pink-600" />;
    }
  };

  const comparisons = [
    {
      feature: 'โจทย์และการทำโปรเจกต์',
      traditional: 'ทำตามการบ้านตำราเรียน หรือโปรเจกต์เดโมที่ไม่เคยออกสู่ตลาดจริง',
      ours: 'ทำโปรเจกต์กับโจทย์จริงจากบริษัทพาร์ทเนอร์ตั้งแต่ปี 2 มีผู้ใช้งานจริง',
    },
    {
      feature: 'ทักษะด้าน AI & Engineering',
      traditional: 'เน้นทฤษฎีคณิตศาสตร์คอมพิวเตอร์ดั้งเดิม ไม่ค่อยอัปเดตเครื่องมือสมัยใหม่',
      ours: 'สอน LLMs, GenAI, MLOps, Vector DB และ Cloud Native ล่าสุดทันโลก',
    },
    {
      feature: 'การดูแลและคำปรึกษา',
      traditional: 'อาจารย์ 1 ท่านต่อนิสิตจำนวนมาก เข้าถึงยากในการปรึกษาเชิงลึก',
      ours: 'ระบบ Dual Mentors ประกบ 1-on-1 ร่วมกับ Specialist จากอุตสาหกรรม',
    },
    {
      feature: 'ใบรับรองสากล (Certifications)',
      traditional: 'ต้องศึกษาและเสียค่าสอบใบรับรองสากลหลักหมื่นบาทด้วยตนเอง',
      ours: 'มีทุนสนับสนุนให้สอบ AWS, GCP, Azure Certs ฟรี 100% รวมในหลักสูตร',
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-pink-700 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>จุดเด่นของหลักสูตร</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ทำไมต้องเลือกเรียน <br />
            <span className="text-pink-600">AI & Digital Innovation</span> ที่นี่?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            ออกแบบหลักสูตรร่วมกับผู้เชี่ยวชาญจาก Big Tech เพื่อให้มั่นใจว่าทุกวิชาที่เรียน
            ตรงกับความต้องการของตลาดงานระดับสากลในอีก 10 ปีข้างหน้า
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FFF5F8]/60 to-white border border-pink-100 hover:border-pink-300 shadow-sm hover:shadow-md hover:shadow-pink-100/50 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-pink-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-pink-600 bg-pink-100/80 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-2xl font-black text-pink-300/80 font-mono">
                    {item.number}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-pink-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table: Traditional vs Ours */}
        <div className="mt-8 rounded-2xl border border-pink-200 bg-gradient-to-br from-white to-[#FFF9FB] p-6 sm:p-8 shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              ความแตกต่างที่คุณสัมผัสได้จริง
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              เปรียบเทียบแนวทางการเรียนการสอนของหลักสูตรเรา กับรูปแบบการศึกษาแบบเดิม
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-pink-100 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                  <th className="pb-3 pr-4">ประเด็นสำคัญ</th>
                  <th className="pb-3 px-4 text-slate-600">หลักสูตรคอมพิวเตอร์ทั่วไป</th>
                  <th className="pb-3 pl-4 text-pink-700 bg-pink-50/70 rounded-t-lg">
                    หลักสูตร AI & Digital Innovation ของเรา
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-100/60">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-pink-50/30 transition-colors">
                    <td className="py-4 pr-4 font-semibold text-slate-900 align-top">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-500 align-top leading-relaxed">
                      {row.traditional}
                    </td>
                    <td className="py-4 pl-4 text-slate-800 bg-pink-50/40 font-medium align-top leading-relaxed">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                        <span>{row.ours}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
