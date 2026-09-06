import React, { useState } from 'react';
import { FAQS } from '../data/curriculumData';
import { HelpCircle, ChevronDown, MessageCircle, Phone, Sparkles, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-pink-700 uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>คำถามที่พบบ่อย (FAQ)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ไขข้อข้องใจ <br className="hidden sm:inline" />
            <span className="text-pink-600">ทุกเรื่องที่คุณอยากรู้ก่อนตัดสินใจ</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            รวบรวมคำถามยอดฮิตจากน้อง ๆ ม.6, ปวช., และผู้ปกครองที่สนใจเข้าศึกษา
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="ค้นหาคำถาม เช่น ไม่เคยเขียนโค้ด, กยศ., อุปกรณ์..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[#FFFDFE] border border-pink-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400/40 focus:border-pink-500 transition-all"
          />
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 text-sm text-slate-400">
              ไม่พบคำถามที่ตรงกับคำค้นหา ลองค้นหาด้วยคำอื่น หรือติดต่อสอบถามโดยตรง
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-pink-100 hover:border-pink-200 bg-white overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-semibold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-pink-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-pink-50 bg-[#FFFDFE]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Quick Contact Box */}
        <div className="rounded-2xl bg-gradient-to-r from-pink-50 via-white to-pink-50 p-6 border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-900 text-base">
              ยังมีข้อสงสัยเรื่องการรับสมัคร หรือต้องการคุยกับอาจารย์ที่ปรึกษา?
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              ทักแชทสอบถามพี่แนะแนวได้ทุกวัน เวลา 08:30 - 18:00 น.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://line.me"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>LINE Official</span>
            </a>
            <a
              href="tel:021234567"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-pink-600" />
              <span>02-123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
