import React from 'react';
import { TrendingUp, Cpu, Code, BarChart3, CloudLightning, Building2, CheckCircle2 } from 'lucide-react';
import { CAREER_PATHS } from '../data/curriculumData';

export const CareerSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-pink-600" />;
      case 'Code':
        return <Code className="w-5 h-5 text-pink-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-pink-600" />;
      case 'CloudLightning':
        return <CloudLightning className="w-5 h-5 text-pink-600" />;
      default:
        return <TrendingUp className="w-5 h-5 text-pink-600" />;
    }
  };

  const partnerCompanies = [
    'AWS Thailand',
    'Google Cloud',
    'LINE MAN Wongnai',
    'SCB 10X',
    'KBTG (Kasikorn Business-Technology Group)',
    'Agoda',
    'True Digital Group',
    'Bitkub Capital Group',
    'SeaMoney (Shopee)',
    'Wisesight (AI Analytics)',
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-pink-700 uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>โอกาสและอนาคตทางอาชีพ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            จบแล้วทำงานอะไร? <br />
            <span className="text-pink-600">สายงานที่เป็นที่ต้องการสูงสุดของตลาด</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            ด้วยทักษะแบบ AI-First และ Full-Stack Production บัณฑิตของเราจึงได้รับข้อเสนอการจ้างงานตั้งแต่ยังไม่สำเร็จการศึกษา
          </p>
        </div>

        {/* 4 Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CAREER_PATHS.map((career) => (
            <div
              key={career.id}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#FFFDFE] via-white to-[#FFF5F8]/50 border border-pink-100 hover:border-pink-300 shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center shadow-2xs group-hover:bg-pink-100 transition-colors">
                    {getIcon(career.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-pink-600 transition-colors">
                      {career.roleTh}
                    </h3>
                    <div className="text-xs text-slate-500 font-medium">
                      {career.roleEn}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {career.description}
              </p>

              {/* Salary Highlights */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white border border-pink-100 mb-5">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block">
                    เงินเดือนเริ่มต้น (Junior):
                  </span>
                  <div className="text-base font-extrabold text-pink-600">
                    {career.startingSalary}
                  </div>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block">
                    ศักยภาพการเติบโต (Senior/Lead):
                  </span>
                  <div className="text-base font-extrabold text-slate-800">
                    {career.growthPotential}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <span className="text-[11px] font-semibold text-slate-500 block mb-2">
                  ทักษะสำคัญที่ตลาดต้องการ:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {career.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-pink-50 text-pink-700 border border-pink-100 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Partners / Placement Network */}
        <div className="rounded-2xl bg-gradient-to-b from-[#FFF7FA] to-white border border-pink-200/80 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">
              <Building2 className="w-3.5 h-3.5" />
              <span>Co-op & Employment Network</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              องค์กรชั้นนำที่ร่วมรับนิสิตเข้าฝึกงานและบรรจุเข้าทำงาน
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3">
            {partnerCompanies.map((company, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-white border border-pink-100 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs hover:border-pink-300 hover:text-pink-600 transition-colors flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                <span>{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
