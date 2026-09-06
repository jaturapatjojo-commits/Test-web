import React from 'react';
import { Server, Laptop, Award, Coffee, ShieldCheck, Sparkles } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      icon: <Server className="w-6 h-6 text-pink-600" />,
      title: 'AI Supercomputing Lab',
      desc: 'เข้าถึง GPU Cluster (NVIDIA A100 & H100) และ Cloud Infrastructure สำหรับเทรนโมเดลขนาดใหญ่และทดลองงานวิจัยฟรี',
      tag: 'NVIDIA Hardware',
    },
    {
      icon: <Laptop className="w-6 h-6 text-pink-600" />,
      title: 'Active Innovation Studio 24/7',
      desc: 'พื้นที่ Co-Working Space ทันสมัย พร้อมห้องประชุมและอุปกรณ์สตาร์ทอัป ให้ทำงานร่วมกันได้ตลอด 24 ชั่วโมง',
      tag: 'Open 24 Hours',
    },
    {
      icon: <Award className="w-6 h-6 text-pink-600" />,
      title: 'Global Certification Center',
      desc: 'ศูนย์สอบและคอร์สติวเตรียมสอบ AWS Solutions Architect, Google Cloud, Microsoft Azure และ TensorFlow Developer ฟรี',
      tag: 'Free Exam Vouchers',
    },
    {
      icon: <Coffee className="w-6 h-6 text-pink-600" />,
      title: 'Tech Lounge & Incubator Sandbox',
      desc: 'พบปะพูดคุยกับ Angel Investors, Mentors และเพื่อนร่วมทีม พร้อมโซนพักผ่อน กาแฟ และห้องจำลอง Pitching',
      tag: 'Startup Hub',
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-pink-700 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>สภาพแวดล้อมการเรียนรู้ระดับพรีเมียม</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ห้องปฏิบัติการและทรัพยากรระดับ World-Class
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            สนับสนุนให้นิสิตได้สัมผัสเครื่องมือจริงระดับเดียวกับองค์กรเทคโนโลยีชั้นนำของโลก
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#FFFDFE] to-[#FFF7FA] border border-pink-100 hover:border-pink-300 shadow-2xs hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-pink-200 flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                {fac.icon}
              </div>
              <span className="text-[11px] font-semibold text-pink-600 bg-pink-100/70 px-2 py-0.5 rounded-full inline-block mb-2">
                {fac.tag}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {fac.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
