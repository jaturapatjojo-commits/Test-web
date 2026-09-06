export interface Subject {
  code: string;
  nameTh: string;
  nameEn: string;
  credits: number;
  category: 'core' | 'ai-special' | 'gen-ed' | 'elective' | 'capstone';
  description: string;
  tools?: string[];
}

export interface YearCurriculum {
  year: number;
  titleTh: string;
  titleEn: string;
  tagline: string;
  semesters: {
    semester: number;
    credits: number;
    subjects: Subject[];
  }[];
}

export interface FacultyMember {
  id: string;
  nameTh: string;
  nameEn: string;
  role: string;
  education: string[];
  specialty: string[];
  image: string;
  badge: string;
}

export interface CareerPath {
  id: string;
  roleTh: string;
  roleEn: string;
  startingSalary: string;
  growthPotential: string;
  skills: string[];
  description: string;
  iconName: string;
}

export interface Scholarship {
  id: string;
  name: string;
  coverage: string;
  amount: string;
  criteria: string;
  seats: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'admission' | 'study' | 'finance' | 'career';
}
