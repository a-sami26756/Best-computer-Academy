export type CourseCategory = 'ai' | 'computer' | 'tuition';
export type CourseLevelTier = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  duration: string;
  level: string;
  levelTier: CourseLevelTier;
  description: string;
  monthlyFee: number;
  totalFee: number;
  curriculum: string[];
  skillsLearned: string[];
  schedule: string;
  prerequisites: string;
  popular?: boolean;
  featured?: boolean;
  iconName: string;
  softwareOrTools?: string[];
}

export interface Testimonial {
  id: string;
  studentName: string;
  courseTaken: string;
  year: string;
  rating: number;
  feedback: string;
  achievement: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'tuition' | 'computer' | 'fee';
}

export interface AdmissionApplication {
  id: string;
  studentName: string;
  fatherName: string;
  phone: string;
  email?: string;
  address: string;
  educationLevel: string;
  selectedCourseId: string;
  selectedCourseTitle: string;
  shift: 'Morning' | 'Afternoon' | 'Evening' | 'Weekend';
  notes?: string;
  submittedAt: string;
  status: 'Pending Verification' | 'Approved' | 'Reviewing';
  tokenNumber: string;
}

export interface AcademyInfo {
  name: string;
  shortName: string;
  tagline: string;
  establishedYear: number;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  displayWhatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    area: string;
    fullAddress: string;
    landmark: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionUrl: string;
  };
  officeHours: {
    weekdays: string;
    sunday: string;
  };
  currencySymbol: string;
  currencyCode: string;
  socialLinks: {
    facebook: string;
    youtube: string;
    instagram: string;
    whatsapp: string;
  };
}
