import { YearCurriculum, FacultyMember, CareerPath, Scholarship, FaqItem } from '../types';

export const PROGRAM_INFO = {
  degreeNameTh: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาปัญญาประดิษฐ์และนวัตกรรมดิจิทัล',
  degreeAbbrTh: 'วท.บ. (ปัญญาประดิษฐ์และนวัตกรรมดิจิทัล)',
  degreeNameEn: 'Bachelor of Science in Artificial Intelligence and Digital Innovation',
  degreeAbbrEn: 'B.Sc. (AI & Digital Innovation)',
  facultyName: 'คณะเทคโนโลยีสารสนเทศและวิทยาการดิจิทัล',
  duration: '4 ปี (สามารถเทียบโอนจบได้ใน 3 ปี)',
  credits: 128,
  academicYear: '2569 (Academic Year 2026)',
  admissionRound: 'รอบ TCAS 1-4 & โควตานวัตกรดิจิทัล',
  accreditation: 'รับรองมาตรฐานหลักสูตรโดยกระทรวงการอุดมศึกษาฯ (สป.อว.) และสภาวิชาชีพ',
  tuitionPerSemester: 42000,
  stats: [
    { label: 'อัตราการได้งานทำหลังจบ', value: '98.6%', note: 'ภายใน 6 เดือน' },
    { label: 'เงินเดือนเริ่มต้นเฉลี่ย', value: '38k - 65k', note: 'บาท/เดือน' },
    { label: 'โควตาและทุนการศึกษา', value: '60+ ทุน', note: 'สูงสุด 100% ตลอดหลักสูตร' },
    { label: 'องค์กรพันธมิตรร่วมฝึกงาน', value: '45+ แห่ง', note: 'Tech & Enterprise ชั้นนำ' },
  ]
};

export const HIGHLIGHTS = [
  {
    number: '01',
    title: 'เรียนกับโจทย์จริงจากอุตสาหกรรม (Project-Based)',
    description: 'ไม่ต้องรอถึงปี 4! ทำโปรเจกต์กับเคสจริงจากภาคธุรกิจและองค์กรชั้นนำตั้งแต่ชั้นปีที่ 2 สร้าง Portfolio ตัวจริงที่พร้อมยื่นสมัครงานระดับนานาชาติ',
    icon: 'Briefcase',
    badge: 'Real-world Experience'
  },
  {
    number: '02',
    title: 'AI Core + Modern Full-Stack Development',
    description: 'ผสานทักษะปัญญาประดิษฐ์ (Generative AI, LLMs, Computer Vision) เข้ากับ Software Engineering ยุคใหม่ (Next.js, Cloud Native, MLOps)',
    icon: 'Cpu',
    badge: 'Cutting-Edge Tech Stack'
  },
  {
    number: '03',
    title: 'Dual Mentorship จากอาจารย์ & Specialist ในอุตสาหกรรม',
    description: 'เรียนรู้ร่วมกับคณาจารย์ปริญญาเอกและที่ปรึกษาพิเศษจากบริษัทเทคโนโลยีระดับโลก พร้อมการดูแลแบบ 1-on-1 ให้คำปรึกษาทั้งวิชาการและเส้นทางอาชีพ',
    icon: 'Users',
    badge: '1-on-1 Mentoring'
  },
  {
    number: '04',
    title: 'Co-op การันตีสหกิจศึกษา & สิทธิสอบ Professional Certificate ฟรี',
    description: 'สนับสนุนทุนสอบเซอร์ระดับสากล เช่น AWS, Google Cloud, Microsoft Azure ฟรี 100% พร้อมโอกาสทำงานต่อทันทีหลังจบการฝึกงาน',
    icon: 'Award',
    badge: 'Free Global Certification'
  }
];

export const CURRICULUM_YEARS: YearCurriculum[] = [
  {
    year: 1,
    titleTh: 'ปีที่ 1 : ปูพื้นฐานการคิดเชิงคำนวณและการเขียนโปรแกรมสมัยใหม่',
    titleEn: 'Foundation & Modern Programming',
    tagline: 'เปลี่ยนจากผู้ใช้งาน สู่การเป็นผู้สร้างสรรค์โค้ดด้วยพื้นฐานที่มั่นคง',
    semesters: [
      {
        semester: 1,
        credits: 17,
        subjects: [
          {
            code: 'AID101',
            nameTh: 'รากฐานปัญญาประดิษฐ์และสังคมดิจิทัล',
            nameEn: 'Foundations of Artificial Intelligence and Digital Society',
            credits: 3,
            category: 'core',
            description: 'ภาพรวมประวัติศาสตร์ เทคโนโลยี AI ยุคปัจจุบัน จริยธรรม และผลกระทบต่อเศรษฐกิจและสังคม',
            tools: ['Python', 'Colab', 'Generative AI Concepts']
          },
          {
            code: 'AID102',
            nameTh: 'การเขียนโปรแกรมคอมพิวเตอร์ด้วย Python',
            nameEn: 'Computer Programming with Python',
            credits: 3,
            category: 'core',
            description: 'ตรรกะการแก้ปัญหา โครงสร้างข้อมูลพื้นฐาน OOP และการเขียนโค้ดที่สะอาดและมีประสิทธิภาพ',
            tools: ['Python 3.12', 'VS Code', 'Git']
          },
          {
            code: 'AID103',
            nameTh: 'คณิตศาสตร์ไม่ต่อเนื่องและพีชคณิตเชิงเส้นสำหรับ AI',
            nameEn: 'Discrete Mathematics and Linear Algebra for AI',
            credits: 3,
            category: 'core',
            description: 'เวกเตอร์ เมทริกซ์ ทฤษฎีกราฟ และเซต เพื่อนำไปใช้คำนวณในอัลกอริทึมปัญญาประดิษฐ์',
            tools: ['NumPy', 'SymPy']
          },
          {
            code: 'GEN101',
            nameTh: 'การสื่อสารภาษาอังกฤษสำหรับสายเทคโนโลยี',
            nameEn: 'English Communication for Tech Professionals',
            credits: 3,
            category: 'gen-ed',
            description: 'การนำเสนอ การอ่านเอกสารทางเทคนิค และการเขียนอีเมลเชิงวิชาชีพสากล',
            tools: ['Presentation', 'Technical Reading']
          },
          {
            code: 'GEN102',
            nameTh: 'ความคิดสร้างสรรค์และการออกแบบเชิงนวัตกรรม',
            nameEn: 'Creativity and Design Thinking for Innovation',
            credits: 3,
            category: 'gen-ed',
            description: 'กระบวนการคิดเชิงออกแบบ (Design Thinking) การเข้าใจผู้ใช้งาน (User Empathy) และการสร้างต้นแบบ',
            tools: ['Figma', 'Miro']
          },
          {
            code: 'AID104',
            nameTh: 'การใช้เครื่องมือควบคุมเวอร์ชันและการทำงานร่วมกัน',
            nameEn: 'Version Control and Collaborative Development',
            credits: 2,
            category: 'core',
            description: 'Git, GitHub Actions, Code Review และการทำงานแบบ Agile/Scrum เบื้องต้น',
            tools: ['Git', 'GitHub', 'Markdown']
          }
        ]
      },
      {
        semester: 2,
        credits: 18,
        subjects: [
          {
            code: 'AID105',
            nameTh: 'โครงสร้างข้อมูลและขั้นตอนวิธี',
            nameEn: 'Data Structures and Algorithms',
            credits: 3,
            category: 'core',
            description: 'Trees, Graphs, Sorting, Dynamic Programming และการวิเคราะห์ความซับซ้อน Big-O',
            tools: ['Python', 'C++', 'Algorithmic Optimization']
          },
          {
            code: 'AID106',
            nameTh: 'การพัฒนาเว็บแอปพลิเคชันฝั่งหน้าบ้านสมัยใหม่',
            nameEn: 'Modern Frontend Web Development',
            credits: 3,
            category: 'core',
            description: 'HTML5, CSS3, Tailwind CSS, TypeScript และการพัฒนาด้วย React 19',
            tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
          },
          {
            code: 'AID107',
            nameTh: 'ความน่าจะเป็นและสถิติประยุกต์สำหรับวิทยาศาสตร์ข้อมูล',
            nameEn: 'Applied Probability and Statistics for Data Science',
            credits: 3,
            category: 'core',
            description: 'การแจกแจงความน่าจะเป็น การทดสอบสมมติฐาน และการวิเคราะห์การถดถอย',
            tools: ['Pandas', 'SciPy', 'Matplotlib']
          },
          {
            code: 'AID108',
            nameTh: 'ระบบฐานข้อมูลเชิงสัมพันธ์และ NoSQL',
            nameEn: 'Relational and NoSQL Database Systems',
            credits: 3,
            category: 'core',
            description: 'การออกแบบโมเดลฐานข้อมูล SQL, PostgreSQL, MongoDB และ Vector Database เบื้องต้น',
            tools: ['PostgreSQL', 'MongoDB', 'Prisma']
          },
          {
            code: 'GEN103',
            nameTh: 'ความเป็นผู้ประกอบการและสตาร์ทอัปดิจิทัล',
            nameEn: 'Digital Entrepreneurship and Startup Ecosystem',
            credits: 3,
            category: 'gen-ed',
            description: 'Business Model Canvas, การวิเคราะห์ตลาด และการสร้าง MVP (Minimum Viable Product)',
            tools: ['Lean Canvas', 'Pitch Deck']
          },
          {
            code: 'AID109',
            nameTh: 'โครงงานนวัตกรรมโปรแกรมมิ่ง 1 (Hackathon)',
            nameEn: 'Programming Innovation Project I',
            credits: 3,
            category: 'capstone',
            description: 'ประลองไอเดียทำแอปพลิเคชันจริงแบบทีมภายใน 48 ชั่วโมง พร้อมรับคำติชมจากกรรมการตัวจริง',
            tools: ['Full-stack App', 'Git', 'Pitching']
          }
        ]
      }
    ]
  },
  {
    year: 2,
    titleTh: 'ปีที่ 2 : ก้าวสู่วิศวกรรมปัญญาประดิษฐ์และการจัดการข้อมูลขนาดใหญ่',
    titleEn: 'Core AI & Data Engineering',
    tagline: 'สร้างโมเดล Machine Learning และพัฒนา Full-Stack AI Application ได้อย่างคล่องแคล่ว',
    semesters: [
      {
        semester: 1,
        credits: 17,
        subjects: [
          {
            code: 'AID201',
            nameTh: 'การเรียนรู้ของเครื่อง (Machine Learning)',
            nameEn: 'Machine Learning Principles and Applications',
            credits: 3,
            category: 'ai-special',
            description: 'Supervised, Unsupervised, Reinforcement Learning, Scikit-learn และการประเมินประสิทธิภาพโมเดล',
            tools: ['Scikit-Learn', 'XGBoost', 'Jupyter']
          },
          {
            code: 'AID202',
            nameTh: 'วิศวกรรมฝั่งหลังบ้านและสถาปัตยกรรม API',
            nameEn: 'Backend Engineering and Microservices API',
            credits: 3,
            category: 'core',
            description: 'RESTful API, FastAPI, Node.js/Express, การยืนยันตัวตน JWT และการจัดการความปลอดภัย',
            tools: ['FastAPI', 'Node.js', 'Postman', 'Docker']
          },
          {
            code: 'AID203',
            nameTh: 'การทำเหมืองข้อมูลและการจัดระเบียบข้อมูลขนาดใหญ่',
            nameEn: 'Data Mining and Big Data Wrangling',
            credits: 3,
            category: 'core',
            description: 'ETL Pipelines, การทำความสะอาดข้อมูล Data Lakes และ Apache Spark เบื้องต้น',
            tools: ['Pandas', 'Polars', 'Apache Spark']
          },
          {
            code: 'AID204',
            nameTh: 'การออกแบบประสบการณ์และส่วนต่อประสานผู้ใช้สำหรับระบบ AI',
            nameEn: 'UI/UX Design for AI-Powered Applications',
            credits: 3,
            category: 'core',
            description: 'การออกแบบ Human-AI Interaction, Prompt UI, และ Cognitive Load Reduction',
            tools: ['Figma', 'Prototyping', 'Usability Testing']
          },
          {
            code: 'AID205',
            nameTh: 'การประมวลผลสัญญาณและคณิตศาสตร์การเพิ่มประสิทธิภาพ',
            nameEn: 'Signal Processing and Mathematical Optimization',
            credits: 3,
            category: 'core',
            description: 'Convex Optimization, Gradient Descent Variants และฟังก์ชันเป้าหมาย',
            tools: ['PyTorch', 'Optimization Libs']
          },
          {
            code: 'AID206',
            nameTh: 'ปฏิบัติการวิจัยและสัมมนาเทคโนโลยี AI เบื้องต้น',
            nameEn: 'AI Research Lab Seminar I',
            credits: 2,
            category: 'ai-special',
            description: 'อ่านและสรุปงานวิจัยล่าสุดจากเวทีระดับท็อป (NeurIPS, ICML, CVPR)',
            tools: ['ArXiv', 'Paper Review']
          }
        ]
      },
      {
        semester: 2,
        credits: 18,
        subjects: [
          {
            code: 'AID207',
            nameTh: 'การเรียนรู้เชิงลึกและโครงข่ายประสาทเทียม',
            nameEn: 'Deep Learning and Neural Architectures',
            credits: 3,
            category: 'ai-special',
            description: 'CNNs, RNNs, Transformers, PyTorch, Backpropagation และการปรับแต่งไฮเปอร์พารามิเตอร์',
            tools: ['PyTorch', 'TensorBoard', 'Weights & Biases']
          },
          {
            code: 'AID208',
            nameTh: 'การประมวลผลภาษาธรรมชาติและโมเดลภาษาขนาดใหญ่ (NLP & LLMs)',
            nameEn: 'Natural Language Processing and LLM Applications',
            credits: 3,
            category: 'ai-special',
            description: 'Tokenization, Embeddings, RAG (Retrieval-Augmented Generation), Fine-tuning และ Vector Search',
            tools: ['Hugging Face', 'LangChain', 'LlamaIndex', 'ChromaDB']
          },
          {
            code: 'AID209',
            nameTh: 'การมองเห็นของคอมพิวเตอร์และการรับรู้ทางภาพ',
            nameEn: 'Computer Vision and Visual Perception',
            credits: 3,
            category: 'ai-special',
            description: 'Object Detection, Image Segmentation, YOLO, OpenCV และการตรวจจับท่าทางแบบเรียลไทม์',
            tools: ['OpenCV', 'YOLOv11', 'MediaPipe']
          },
          {
            code: 'AID210',
            nameTh: 'ระบบคลาวด์คอมพิวติ้งและโครงสร้างพื้นฐานยุคใหม่',
            nameEn: 'Cloud Computing and Modern Infrastructure',
            credits: 3,
            category: 'core',
            description: 'AWS, Google Cloud, Docker Containerization, CI/CD และ Serverless Architecture',
            tools: ['AWS', 'GCP', 'Docker', 'GitHub Actions']
          },
          {
            code: 'AID211',
            nameTh: 'โครงงานนวัตกรรมปัญญาประดิษฐ์ 2 (Industry Challenge)',
            nameEn: 'AI Innovation Project II',
            credits: 3,
            category: 'capstone',
            description: 'แก้ปัญหาจริงร่วมกับบริษัทพาร์ทเนอร์ พร้อมประเมินผล ROI และความเป็นไปได้ทางธุรกิจ',
            tools: ['End-to-End AI Solution']
          },
          {
            code: 'GEN201',
            nameTh: 'กฎหมายลิขสิทธิ์ดิจิทัลและ PDPA สำหรับนักพัฒนาซอฟต์แวร์',
            nameEn: 'Digital Law, Ethics and Data Privacy (PDPA)',
            credits: 3,
            category: 'gen-ed',
            description: 'ข้อกฎหมายคุ้มครองข้อมูลส่วนบุคคล การจัดการสิทธิประโยชน์ และความรับผิดชอบของ AI',
            tools: ['PDPA Compliance', 'AI Governance']
          }
        ]
      }
    ]
  },
  {
    year: 3,
    titleTh: 'ปีที่ 3 : ความเชี่ยวชาญระดับสูง MLOps, Generative AI และวิจัยประยุกต์',
    titleEn: 'Advanced AI & Specialization Tracks',
    tagline: 'เลือก Track ที่ตอบโจทย์ตนเอง และเจาะลึกระบบระดับ Enterprise-grade',
    semesters: [
      {
        semester: 1,
        credits: 16,
        subjects: [
          {
            code: 'AID301',
            nameTh: 'การจัดการวงจรชีวิตโมเดลและการนำไปใช้จริง (MLOps)',
            nameEn: 'Machine Learning Operations (MLOps)',
            credits: 3,
            category: 'ai-special',
            description: 'Model Monitoring, Drift Detection, Feature Stores, MLflow และ Kubernetes Deployment',
            tools: ['Kubernetes', 'MLflow', 'Docker', 'Prometheus']
          },
          {
            code: 'AID302',
            nameTh: 'การพัฒนา AI Agents และระบบอัตโนมัติอัจฉริยะ',
            nameEn: 'Autonomous AI Agents and Multi-Agent Workflows',
            credits: 3,
            category: 'ai-special',
            description: 'Multi-Agent Frameworks, Tool Calling, Planning, ReAct Prompting และระบบ Autonomous Robotics',
            tools: ['CrewAI', 'LangGraph', 'Gemini API', 'AutoGen']
          },
          {
            code: 'AID303',
            nameTh: 'วิชาเลือกเฉพาะทาง 1 (Track Elective I)',
            nameEn: 'Specialized Track Elective I',
            credits: 3,
            category: 'elective',
            description: 'เลือกตามความสนใจ: AI for Healthcare, FinTech & Algorithmic Trading หรือ Smart Robotics',
            tools: ['Domain-specific SDKs']
          },
          {
            code: 'AID304',
            nameTh: 'วิชาเลือกเฉพาะทาง 2 (Track Elective II)',
            nameEn: 'Specialized Track Elective II',
            credits: 3,
            category: 'elective',
            description: 'เลือกตามความสนใจ: Generative Media & 3D, Cyber Security with AI หรือ High-Performance Computing',
            tools: ['Custom High-Tech Stacks']
          },
          {
            code: 'AID305',
            nameTh: 'เตรียมความพร้อมสหกิจศึกษาและการฝึกงานวิชาชีพ',
            nameEn: 'Co-operative Education Preparation',
            credits: 1,
            category: 'core',
            description: 'จำลองการสัมภาษณ์งานทางเทคนิค (Technical Mock Interview), การทำ Resume และ Portfolios สากล',
            tools: ['Interview Prep', 'Portfolio Showcase']
          },
          {
            code: 'AID306',
            nameTh: 'การเตรียมโครงงานบัณฑิตนิพนธ์ (Pre-Capstone)',
            nameEn: 'Pre-Capstone Project Proposal',
            credits: 3,
            category: 'capstone',
            description: 'เสนอหัวข้อโครงงานวิจัยหรือผลิตภัณฑ์สตาร์ทอัป ร่วมกับอาจารย์ที่ปรึกษาและผู้เชี่ยวชาญจากภายนอก',
            tools: ['Research Proposal', 'Architecture Blueprint']
          }
        ]
      },
      {
        semester: 2,
        credits: 12,
        subjects: [
          {
            code: 'AID399',
            nameTh: 'สหกิจศึกษาในภาคอุตสาหกรรม (Cooperative Education - 6 เดือนเต็ม)',
            nameEn: 'Full-Semester Industrial Cooperative Education',
            credits: 6,
            category: 'capstone',
            description: 'ปฏิบัติงานจริงเต็มเวลา ณ บริษัทเทคโนโลยีชั้นนำหรือสถาบันวิจัยระดับนานาชาติ ได้รับค่าตอบแทนตามจริง',
            tools: ['Production Code', 'Enterprise Teamwork']
          },
          {
            code: 'AID307',
            nameTh: 'วิชาเลือกเสรีขั้นสูง (Advanced Elective)',
            nameEn: 'Advanced Free Elective',
            credits: 3,
            category: 'elective',
            description: 'วิชาเลือกข้ามสาขา เช่น Quantum Computing เบื้องต้น, AI Creative Direction หรือ Venture Capital',
            tools: ['Specialized Tools']
          },
          {
            code: 'AID308',
            nameTh: 'การบริหารโครงการซอฟต์แวร์ระดับสากล',
            nameEn: 'Global Software Project Management',
            credits: 3,
            category: 'core',
            description: 'Scrum at Scale, OKRs, Tech Leadership และการบริหารความเสี่ยงในโครงการขนาดใหญ่',
            tools: ['Jira', 'Notion Enterprise']
          }
        ]
      }
    ]
  },
  {
    year: 4,
    titleTh: 'ปีที่ 4 : โครงงานนวัตกรรมจบการศึกษา การบ่มเพาะสตาร์ทอัป และก้าวสู่ผู้นำเทคโนโลยี',
    titleEn: 'Capstone Innovation, Startup & Leadership',
    tagline: 'เปลี่ยนความรู้เป็นผลงานระดับรางวัล หรือเปิดตัวนวัตกรรมสู่เชิงพาณิชย์จริง',
    semesters: [
      {
        semester: 1,
        credits: 15,
        subjects: [
          {
            code: 'AID401',
            nameTh: 'โครงงานนวัตกรรมบัณฑิตนิพนธ์ 1 (Capstone Project I)',
            nameEn: 'Senior Capstone Innovation Project I',
            credits: 3,
            category: 'capstone',
            description: 'พัฒนาและทดสอบระบบต้นแบบ (Alpha Version) ภายใต้การดูแลของผู้เชี่ยวชาญและคณะกรรมการตรวจ',
            tools: ['Full Solution Deployment']
          },
          {
            code: 'AID402',
            nameTh: 'สถาปัตยกรรมระบบสำหรับองค์กรขนาดใหญ่และความปลอดภัยไซเบอร์',
            nameEn: 'Enterprise System Architecture and Cybersecurity',
            credits: 3,
            category: 'core',
            description: 'Zero Trust Security, Penetration Testing for AI, Threat Modeling และ Cloud Compliance',
            tools: ['OWASP', 'Vault', 'Kubernetes Security']
          },
          {
            code: 'AID403',
            nameTh: 'การเร่งสปีดนวัตกรรมและการระดมทุนธุรกิจเทค',
            nameEn: 'Tech Venture Acceleration and Fundraising',
            credits: 3,
            category: 'core',
            description: 'การทำ Demo Day Pitching, สัญญาข้อตกลงการลงทุน (SAFE Note/Term Sheet) และการประเมินมูลค่าบริษัท',
            tools: ['Venture Deck', 'Financial Modeling']
          },
          {
            code: 'AID404',
            nameTh: 'สัมมนาหัวข้อพิเศษทางปัญญาประดิษฐ์ขั้นสูง (Frontier AI)',
            nameEn: 'Special Seminar on Frontier AI Systems',
            credits: 3,
            category: 'ai-special',
            description: 'เจาะลึกงานวิจัยโมเดลรุ่นถัดไป (Multimodal reasoning, World models, Synthetic data generation)',
            tools: ['Next-Gen Models']
          },
          {
            code: 'AID405',
            nameTh: 'วิชาเลือกเสรี (Free Elective)',
            nameEn: 'Free Elective Course',
            credits: 3,
            category: 'elective',
            description: 'เลือกเรียนวิชาใดก็ได้ในมหาวิทยาลัยเพื่อเปิดโลกทัศน์ข้ามศาสตร์',
            tools: ['Interdisciplinary']
          }
        ]
      },
      {
        semester: 2,
        credits: 15,
        subjects: [
          {
            code: 'AID406',
            nameTh: 'โครงงานนวัตกรรมบัณฑิตนิพนธ์ 2 (Capstone Project II - Demo Day)',
            nameEn: 'Senior Capstone Innovation Project II (Demo Day)',
            credits: 3,
            category: 'capstone',
            description: 'เปิดตัวผลิตภัณฑ์ในงาน Demo Day สาธารณะ ต่อนักลงทุน VC และตัวแทนบริษัทเทคชั้นนำ พร้อมยื่นจดสิทธิบัตร',
            tools: ['Production Launch', 'Patent / Publication']
          },
          {
            code: 'AID407',
            nameTh: 'การเป็นผู้นำองค์กรและการสื่อสารเชิงกลยุทธ์',
            nameEn: 'Strategic Leadership and Tech Executive Communication',
            credits: 3,
            category: 'gen-ed',
            description: 'จิตวิทยาองค์กร การนำทีมข้ามสายงาน และทักษะการเจรจาต่อรองในระดับผู้บริหาร',
            tools: ['Executive Presence']
          },
          {
            code: 'AID408',
            nameTh: 'การทดสอบและการรับรองมาตรฐานระดับสากล',
            nameEn: 'Global Professional Certification Practicum',
            credits: 3,
            category: 'core',
            description: 'ติวเข้มและสอบ Certificate: AWS Certified Solutions Architect, Google Cloud MLE หรือ Azure AI',
            tools: ['AWS / GCP / Azure Certs']
          },
          {
            code: 'AID409',
            nameTh: 'การสร้างแบรนด์ส่วนบุคคลและการเตรียมตัวสู่ระดับสากล',
            nameEn: 'Personal Branding and Global Career Mastery',
            credits: 3,
            category: 'core',
            description: 'สร้างตัวตนในวงการ Tech, การสร้างผลงาน Open Source และการสมัครงานบริษัทเทคต่างประเทศ (Remote Work)',
            tools: ['GitHub Sponsor', 'LinkedIn Pro']
          },
          {
            code: 'AID410',
            nameTh: 'วิชาเลือกเสรี (Free Elective II)',
            nameEn: 'Free Elective Course II',
            credits: 3,
            category: 'elective',
            description: 'วิชาเสริมสร้างทักษะชีวิตและความสุขในการทำงาน',
            tools: ['Life Skills']
          }
        ]
      }
    ]
  }
];

export const SPECIALIZATION_TRACKS = [
  {
    id: 'ai-engineering',
    nameTh: 'สายงานวิศวกรรมปัญญาประดิษฐ์ (AI & Machine Learning Engineering)',
    focus: 'เน้นการเทรน ปรับแต่ง และ Implement โมเดล Deep Learning, Generative AI และ MLOps ระดับ Enterprise',
    popularRoles: ['AI Engineer', 'MLOps Engineer', 'Computer Vision Specialist', 'NLP Researcher']
  },
  {
    id: 'fullstack-cloud',
    nameTh: 'สายงานวิศวกรรมซอฟต์แวร์คลาวด์ (Cloud & Full-Stack Architecture)',
    focus: 'เน้นการสร้างสถาปัตยกรรมระบบเว็บ แอพพลิเคชัน Cloud Native และ Distributed Systems ที่รองรับผู้ใช้งานหลักล้าน',
    popularRoles: ['Full-Stack Developer', 'Cloud Solutions Architect', 'DevOps Specialist', 'API Platform Engineer']
  },
  {
    id: 'data-science',
    nameTh: 'สายงานวิทยาศาสตร์ข้อมูลและกลยุทธ์ (Data Science & Business Intelligence)',
    focus: 'เน้นการวิเคราะห์ข้อมูลเชิงลึก การจำลองโมเดลพยากรณ์เชิงธุรกิจ และการเปลี่ยน Data ให้เป็นมูลค่าทางธุรกิจ',
    popularRoles: ['Data Scientist', 'Data Engineer', 'Quantitative Analyst', 'Chief Data Officer Track']
  },
  {
    id: 'startup-product',
    nameTh: 'สายนวัตกรและผู้ประกอบการเทค (Tech Startup & Digital Product)',
    focus: 'เน้นการคิดค้นผลิตภัณฑ์ดิจิทัล การสร้างสตาร์ทอัป การบริหาร Product และการระดมทุน Venture Capital',
    popularRoles: ['Tech Founder', 'Technical Product Manager', 'AI Innovation Consultant', 'Venture Builder']
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'f1',
    nameTh: 'ศ.ดร.กานต์พิชชา รัตนเวชสาร',
    nameEn: 'Prof. Dr. Kanpitcha Rattanavejsarn',
    role: 'หัวหน้าสาขาวิชาปัญญาประดิษฐ์และนวัตกรรมดิจิทัล',
    education: ['Ph.D. in Computer Science & AI, Stanford University', 'M.Sc. in Computer Engineering, CMU'],
    specialty: ['Deep Reinforcement Learning', 'Generative Foundation Models', 'AI Governance'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    badge: 'Stanford Alumna'
  },
  {
    id: 'f2',
    nameTh: 'รศ.ดร.ธีรเดช มหาวิริยพงศ์',
    nameEn: 'Assoc. Prof. Dr. Theeradej Mahaviriyapong',
    role: 'รองคณบดีฝ่ายวิจัยและพันธมิตรอุตสาหกรรม',
    education: ['Ph.D. in Machine Learning, Imperial College London', 'B.Eng. (Honors) Chulalongkorn Univ.'],
    specialty: ['Computer Vision', 'Autonomous Perception', 'Edge AI Systems'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    badge: 'Former Tech Lead at DeepTech Lab'
  },
  {
    id: 'f3',
    nameTh: 'ผศ.ดร.ณภัทร วัฒนโกสินทร์',
    nameEn: 'Asst. Prof. Dr. Naphat Wattanakosin',
    role: 'ผู้เชี่ยวชาญด้านระบบคลาวด์และวิศวกรรมข้อมูล',
    education: ['Ph.D. in Distributed Systems, Univ. of Tokyo', 'AWS Certified Solutions Architect Fellow'],
    specialty: ['Cloud Native Architecture', 'MLOps & Distributed Pipelines', 'Vector Databases'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    badge: 'AWS Community Hero'
  },
  {
    id: 'f4',
    nameTh: 'ดร.พงศกร สันติเจริญ',
    nameEn: 'Dr. Pongsakorn Santicharoen',
    role: 'อาจารย์ประจำและผู้จัดการศูนย์บ่มเพาะนวัตกรรมสตาร์ทอัป',
    education: ['Ph.D. in Human-AI Interaction, KAIST', 'Serial Tech Entrepreneur'],
    specialty: ['Human-Centered AI', 'AI Product Management', 'Startup Growth Hacking'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    badge: 'Y Combinator Alumni Mentor'
  }
];

export const CAREER_PATHS: CareerPath[] = [
  {
    id: 'c1',
    roleTh: 'วิศวกรปัญญาประดิษฐ์และแมชชีนเลิร์นนิง',
    roleEn: 'AI & Machine Learning Engineer',
    startingSalary: '45,000 - 85,000 ฿',
    growthPotential: '150,000+ ฿ (Senior/Lead)',
    skills: ['PyTorch', 'Fine-Tuning LLMs', 'RAG', 'Vector DB', 'Python'],
    description: 'ออกแบบ เทรนโมเดล และติดตั้งโมเดล AI ลงในระบบโปรดักชันขององค์กรให้ใช้งานได้อย่างเสถียรและแม่นยำ',
    iconName: 'Cpu'
  },
  {
    id: 'c2',
    roleTh: 'วิศวกรฟูลสแต็กและนักพัฒนาซอฟต์แวร์สมัยใหม่',
    roleEn: 'Modern Full-Stack Developer',
    startingSalary: '38,000 - 70,000 ฿',
    growthPotential: '130,000+ ฿ (Senior)',
    skills: ['React', 'Next.js', 'Node.js/FastAPI', 'PostgreSQL', 'Docker'],
    description: 'พัฒนาเว็บและโมบายล์แอปพลิเคชันแบบครอบคลุมทั้งหน้าบ้านและหลังบ้าน เชื่อมต่อระบบอัจฉริยะแบบไร้รอยต่อ',
    iconName: 'Code'
  },
  {
    id: 'c3',
    roleTh: 'นักวิทยาศาสตร์ข้อมูลและนักวิเคราะห์เชิงกลยุทธ์',
    roleEn: 'Data Scientist & AI Strategist',
    startingSalary: '42,000 - 80,000 ฿',
    growthPotential: '140,000+ ฿ (Principal)',
    skills: ['Advanced Statistics', 'Predictive Modeling', 'BigQuery', 'Tableau', 'Spark'],
    description: 'เปลี่ยนข้อมูลมหาศาลให้เป็นข้อมูลเชิงลึกทางธุรกิจ (Insights) และสร้างโมเดลทำนายโอกาสเพื่อการตัดสินใจระดับสูง',
    iconName: 'BarChart3'
  },
  {
    id: 'c4',
    roleTh: 'วิศวกรเอ็มแอลออปส์และระบบคลาวด์',
    roleEn: 'MLOps & Cloud Infrastructure Engineer',
    startingSalary: '50,000 - 95,000 ฿',
    growthPotential: '160,000+ ฿ (Tech Lead)',
    skills: ['Kubernetes', 'CI/CD Pipelines', 'AWS/GCP', 'Model Monitoring', 'Terraform'],
    description: 'บริหารโครงสร้างพื้นฐานคลาวด์ การสเกลระบบ และทำให้โมเดล AI อัปเดตและรันได้ต่อเนื่อง 24/7 ไม่มีสะดุด',
    iconName: 'CloudLightning'
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 's1',
    name: 'ทุนเพชรนวัตกรรม AI (Full Ride Scholarship)',
    coverage: 'ยกเว้นค่าเล่าเรียนและค่าธรรมเนียม 100%',
    amount: 'มูลค่ากว่า 336,000 บาท ตลอดหลักสูตร 4 ปี',
    criteria: 'เกรดเฉลี่ยสะสม 3.50 ขึ้นไป หรือมีผลงานชนะเลิศการประกวดระดับประเทศ / มีโครงงานเด่น',
    seats: '10 ทุน / ปีการศึกษา',
    tag: 'ทุนเรียนฟรี 100%'
  },
  {
    id: 's2',
    name: 'ทุนความเป็นเลิศทางโค้ดดิ้ง (Tech Talent Scholarship)',
    coverage: 'ยกเว้นค่าเล่าเรียน 50% ตลอดหลักสูตร',
    amount: 'มูลค่า 168,000 บาท',
    criteria: 'ผ่านการอบรมค่าย สอวน. คอมพิวเตอร์ หรือมี Portfolio โครงงานซอฟต์แวร์หรือ AI ที่ใช้งานได้จริง',
    seats: '25 ทุน / ปีการศึกษา',
    tag: 'ทุนลดค่าเล่าเรียน 50%'
  },
  {
    id: 's3',
    name: 'ทุนสนับสนุนการเป็นผู้ประกอบการสตาร์ทอัป (Startup Seed Fund)',
    coverage: 'ทุนให้เปล่าสนับสนุนโปรเจกต์จบและเปิดบริษัท',
    amount: 'สนับสนุน 50,000 - 200,000 บาท ต่อทีม',
    criteria: 'ทีมโครงงานปี 3-4 ที่ผ่านการคัดเลือกเข้าศูนย์บ่มเพาะ และมี MVP พร้อมเปิดตัวในเชิงพาณิชย์',
    seats: '15 ทีม / ปีการศึกษา',
    tag: 'เงินสนับสนุนตั้งต้น'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'ไม่มีพื้นฐานการเขียนโปรแกรมมาก่อนเลย สามารถเรียนหลักสูตรนี้ได้หรือไม่?',
    answer: 'เรียนได้อย่างแน่นอน! หลักสูตรถูกออกแบบให้มีวิชาปรับพื้นฐาน (Bootcamp) ในช่วงก่อนเปิดเทอม และในชั้นปีที่ 1 จะเริ่มสอนตั้งแต่ตรรกะการคิดเชิงคำนวณ การเขียนภาษา Python ทีละขั้นตอน โดยมีทีมอาจารย์และรุ่นพี่ TA (Teaching Assistant) ดูแลประกบอย่างใกล้ชิด ขอเพียงมีความมุ่งมั่นและเปิดใจเรียนรู้สิ่งใหม่',
    category: 'study'
  },
  {
    question: 'หลักสูตรนี้แตกต่างจากวิทยาการคอมพิวเตอร์ (Computer Science) ทั่วไปอย่างไร?',
    answer: 'หลักสูตรทั่วไปมักเน้นทฤษฎีระบบคอมพิวเตอร์แบบดั้งเดิม แต่หลักสูตร AI & Digital Innovation ของเราเน้น Modern Tech Stack และการนำ Generative AI, Data Engineering และ Cloud มาประยุกต์ใช้สร้างผลิตภัณฑ์จริงตั้งแต่ปี 2 พร้อมเชื่อมโยงกับภาคธุรกิจจริงและมีวิชาทางด้าน Tech Entrepreneurship ครบวงจร',
    category: 'study'
  },
  {
    question: 'จำเป็นต้องซื้อคอมพิวเตอร์โน้ตบุ๊กสเปกแรงเพื่อเทรนโมเดล AI เองหรือไม่?',
    answer: 'ไม่จำเป็นต้องซื้อโน้ตบุ๊กราคาสูงเกินความจำเป็น ทางหลักสูตรมีห้องปฏิบัติการ AI Supercomputing Lab พร้อมคลัสเตอร์ GPU ประสิทธิภาพสูง (NVIDIA A100/H100) รวมถึง Cloud Credits (AWS, Google Cloud) ให้นิสิตใช้งานฟรีผ่านเบราว์เซอร์จากที่บ้านได้เลย โน้ตบุ๊กทั่วไปที่พิมพ์งานและเขียนโค้ดได้ก็เพียงพอ',
    category: 'study'
  },
  {
    question: 'สามารถกู้ยืมกองทุนเงินให้กู้ยืมเพื่อการศึกษา (กยศ. / กรอ.) ได้หรือไม่?',
    answer: 'สามารถกู้ยืมได้ 100% ตามระเบียบของกองทุน กยศ. และ กรอ. เนื่องจากเป็นหลักสูตรในสาขาวิชาที่เป็นความต้องการหลักและมีความชัดเจนของการผลิตกำลังคน ซึ่งได้รับสิทธิประโยชน์การกู้ยืมในวงเงินสูงสุด พร้อมระบบการผ่อนชำระแบบ 0% กับธนาคารพันธมิตร',
    category: 'finance'
  },
  {
    question: 'มีโอกาสไปแลกเปลี่ยนหรือฝึกงานในต่างประเทศหรือไม่?',
    answer: 'มีโครงการความร่วมมือกับมหาวิทยาลัยและสถาบันวิจัยพันธมิตรในประเทศญี่ปุ่น สิงคโปร์ ไต้หวัน และสหราชอาณาจักร โดยนิสิตสามารถเลือกไปทำสหกิจศึกษา (Co-op) หรือเข้าร่วมโครงการแลกเปลี่ยน 1 ภาคการศึกษา โดยมีทุนสนับสนุนการเดินทางจากคณะ',
    category: 'career'
  }
];
