export interface TeamMember {
  name: string;
  id?: string;
  role?: string;
  photo?: string;
  description?: string;
}

export interface ResultMetric {
  name: string;
  value: number;
  description: string;
  icon: string;
}

export interface ImageComparison {
  id: string;
  title: string;
  petImage: string;
  generatedCTImage: string;
  realCTImage: string;
  description: string;
}

export interface MethodStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}
