import React, { useState } from 'react';
import { SCHOLARSHIPS, PROGRAM_INFO } from '../data/curriculumData';
import { Calculator, Award, Check, Sparkles, CreditCard, DollarSign } from 'lucide-react';

interface TuitionCalculatorProps {
  onOpenApplyWithScholarship: (scholarshipName: string) => void;
}

export const TuitionCalculator: React.FC<TuitionCalculatorProps> = ({ onOpenApplyWithScholarship }) => {
  const [selectedDiscountPercent, setSelectedDiscountPercent] = useState<number>(0);
  const [useStudentLoan, setUseStudentLoan] = useState<boolean>(false);
  const [installmentMonths, setInstallmentMonths] = useState<number>(1);

  const baseTuition = PROGRAM_INFO.tuitionPerSemester;
  const discountAmount = (baseTuition * selectedDiscountPercent) / 100;
  const afterDiscount = baseTuition - discountAmount;
  const loanCoverage = useStudentLoan ? Math.min(afterDiscount, 35000) : 0; // กยศ. ประมาณ 35,000/เทอม
  const netPayable = Math.max(0, afterDiscount - loanCoverage);
  const monthlyPayment = installmentMonths > 1 ? Math.round(netPayable / installmentMonths) : netPayable;

  return (
    <section id="tuition" className="py-20 bg-gradient-to-b from-white via-[#FFF9FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-pink-700 uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>ค่าธรรมเนียมและทุนการศึกษา</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ค่าเล่าเรียนโปร่งใส <br />
            <span className="text-pink-600">พร้อมทุนสนับสนุนสูงสุด 100%</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            ระบบเหมาจ่าย ไม่มีค่าธรรมเนียมแอบแฝง รวมค่าซอฟต์แวร์ Cloud GPU และค่าสอบใบรับรองสากลไว้ทั้งหมดแล้ว
          </p>
        </div>

        {/* Scholarships Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SCHOLARSHIPS.map((scholarship) => (
            <div
              key={scholarship.id}
              className="p-6 rounded-2xl bg-white border border-pink-100 hover:border-pink-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-pink-100 text-pink-700 mb-4">
                  {scholarship.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {scholarship.name}
                </h3>
                <div className="text-base font-extrabold text-pink-600 mb-3">
                  {scholarship.amount}
                </div>
                <div className="space-y-2 text-xs text-slate-600 mb-5">
                  <div>
                    <strong className="text-slate-800">สิทธิประโยชน์:</strong> {scholarship.coverage}
                  </div>
                  <div>
                    <strong className="text-slate-800">เกณฑ์การพิจารณา:</strong> {scholarship.criteria}
                  </div>
                  <div>
                    <strong className="text-slate-800">จำนวนที่เปิดรับ:</strong> {scholarship.seats}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenApplyWithScholarship(scholarship.name)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 transition-all text-center"
              >
                ยื่นสมัครขอรับทุนนี้
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Tuition & Installment Calculator */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-pink-200 shadow-sm p-6 sm:p-10">
          <div className="flex items-center gap-3 pb-6 border-b border-pink-100 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                เครื่องคำนวณค่าเล่าเรียนและแผนการผ่อนชำระ
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                จำลองค่าใช้จ่ายจริงต่อภาคเรียน เมื่อได้รับทุนการศึกษา หรือผ่อนชำระผ่านระบบ
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Controls */}
            <div className="space-y-6">
              {/* 1. Base fee */}
              <div className="p-4 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="text-xs font-semibold text-slate-500 block">
                  ค่าเล่าเรียนเหมาจ่ายปกติ:
                </span>
                <span className="text-xl font-bold text-slate-900">
                  {baseTuition.toLocaleString()} บาท / ภาคเรียน
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  (ปีการศึกษาละ 2 ภาคเรียนปกติ รวม 84,000 บาท/ปี)
                </span>
              </div>

              {/* 2. Choose Scholarship */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  1. เลือกประเภททุนการศึกษาที่ต้องการขอรับ:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'ไม่รับทุน (0%)', value: 0 },
                    { label: 'ทุน 50%', value: 50 },
                    { label: 'ทุน 100%', value: 100 },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setSelectedDiscountPercent(option.value)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all ${
                        selectedDiscountPercent === option.value
                          ? 'bg-pink-600 text-white border-pink-600 shadow-2xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-pink-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Student Loan toggle */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  2. สิทธิกู้ยืม กยศ. / กรอ.:
                </label>
                <button
                  type="button"
                  onClick={() => setUseStudentLoan(!useStudentLoan)}
                  className={`w-full p-3 rounded-xl border flex items-center justify-between text-xs font-medium transition-all ${
                    useStudentLoan
                      ? 'bg-pink-50 border-pink-300 text-pink-900'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-pink-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded border flex items-center justify-center ${useStudentLoan ? 'bg-pink-600 border-pink-600 text-white' : 'border-slate-300'}`}>
                      {useStudentLoan && <Check className="w-3 h-3" />}
                    </span>
                    <span>ประสงค์กู้ยืม กยศ. (ช่วยลดภาระได้ถึง 35,000 บ./เทอม)</span>
                  </span>
                </button>
              </div>

              {/* 4. Payment installments */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  3. แผนการชำระเงิน:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'จ่ายเต็มงวด', months: 1 },
                    { label: 'ผ่อน 3 เดือน', months: 3 },
                    { label: 'ผ่อน 6 เดือน (0%)', months: 6 },
                  ].map((inst) => (
                    <button
                      key={inst.months}
                      type="button"
                      onClick={() => setInstallmentMonths(inst.months)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all ${
                        installmentMonths === inst.months
                          ? 'bg-pink-600 text-white border-pink-600 shadow-2xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-pink-300'
                      }`}
                    >
                      {inst.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Real-time Calculation Result Box */}
            <div className="bg-gradient-to-br from-[#FFF5F8] to-pink-50/40 rounded-2xl p-6 border border-pink-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-700 mb-4 block">
                  สรุปผลการประเมินค่าใช้จ่าย
                </span>

                <div className="space-y-3 text-sm pb-4 border-b border-pink-200/80">
                  <div className="flex justify-between text-slate-600">
                    <span>ค่าเล่าเรียนตั้งต้น:</span>
                    <span className="font-mono font-medium">{baseTuition.toLocaleString()} ฿</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-pink-700 font-medium">
                      <span>ส่วนลดทุนการศึกษา ({selectedDiscountPercent}%):</span>
                      <span className="font-mono">-{discountAmount.toLocaleString()} ฿</span>
                    </div>
                  )}

                  {loanCoverage > 0 && (
                    <div className="flex justify-between text-emerald-700 font-medium">
                      <span>วงเงินกองทุน กยศ. ช่วยแบ่งเบา:</span>
                      <span className="font-mono">-{loanCoverage.toLocaleString()} ฿</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 mb-4">
                  <div className="text-xs font-medium text-slate-500">
                    ยอดชำระสุทธิจริงต่อภาคเรียน:
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 mt-1">
                    {netPayable.toLocaleString()} <span className="text-base font-medium text-slate-500">บาท</span>
                  </div>

                  {installmentMonths > 1 && (
                    <div className="mt-3 p-3 rounded-xl bg-white border border-pink-200">
                      <span className="text-xs text-slate-500 block">แบ่งชำระรายเดือน ({installmentMonths} งวด):</span>
                      <span className="text-xl font-bold text-pink-600">
                        {monthlyPayment.toLocaleString()} บาท/เดือน
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenApplyWithScholarship(selectedDiscountPercent > 0 ? `ทุนส่วนลด ${selectedDiscountPercent}%` : 'ทั่วไป')}
                  className="w-full py-3 px-4 rounded-xl bg-pink-600 hover:bg-pink-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-pink-200 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>สมัครเรียนพร้อมรับสิทธิแผนนี้</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  * การอนุมัติทุนและวงเงิน กยศ. เป็นไปตามเงื่อนไขที่มหาวิทยาลัยและกองทุนกำหนด
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
