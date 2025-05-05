import {
  TeamMember,
  ResultMetric,
  ImageComparison,
  MethodStep,
  NavItem,
} from "../types";

export const PROJECT_TITLE =
  "Image-to-Image Translation for Generated CT Generation from PET Scans using GANs";
export const PROJECT_SUBTITLE =
  "Advancing medical imaging through deep learning";
export const INSTITUTION = "Islamic University of Technology";
export const COURSE = "EEE 4709";
export const SUBMISSION_DATE = "March 21, 2025";

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Methodology", href: "/methodology" },
  { name: "Results", href: "/results" },
  { name: "Gallery", href: "/gallery" },
  { name: "Ethics", href: "/ethics" },
  { name: "Future Work", href: "/future-work" },
  { name: "Code", href: "/code" },
  { name: "Report", href: "/report" },
];

export const GROUP_NUMBER = "C10";

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Mohammad Emon", id: "200021332" },
  { name: "Tashfin Ajwad", id: "200021335" },
  { name: "Shaheed Rahman", id: "200021336" },
  { name: "Al Mahee Khan", id: "200021342" },
  { name: "MD Arefin Rabbi Emon" },
];

export const RESULT_METRICS: ResultMetric[] = [
  {
    name: "PSNR",
    value: 20.99,
    description:
      "Peak Signal-to-Noise Ratio, measuring image reconstruction quality",
    icon: "chart",
  },
  {
    name: "SSIM",
    value: 0.696,
    description:
      "Structural Similarity Index, measuring perceptual image similarity",
    icon: "eye",
  },
  {
    name: "MAE",
    value: 0.084,
    description: "Mean Absolute Error, measuring average absolute difference",
    icon: "ruler",
  },
  {
    name: "Training Time",
    value: 48.5,
    description: "Hours of model training on specialized GPU hardware",
    icon: "clock",
  },
];

export const GALLERY_IMAGES: ImageComparison[] = [
  {
    id: "case1",
    title: "Scenario 1",
    petImage: "/pet_1.png",
    generatedCTImage: "/gct_1.png",
    realCTImage: "/act_1.png",
    description:
      "Brain scan showing excellent soft tissue translation but some limitations in fine structure details.",
  },
  {
    id: "case2",
    title: "Scenario 2",
    petImage: "/pet_2.png",
    generatedCTImage: "/gct_2.png",
    realCTImage: "/act_2.png",
    description:
      "Thoracic region demonstrating the model's ability to translate major organ boundaries.",
  },
  {
    id: "case3",
    title: "Scenario 3",
    petImage: "/pet_3.png",
    generatedCTImage: "/gct_3.png",
    realCTImage: "/act_3.png",
    description:
      "Abdominal scan showing good contrast in soft tissue regions but challenges in bone structures.",
  },
  {
    id: "case4",
    title: "Scenario 4",
    petImage: "/pet_4.png",
    generatedCTImage: "/gct_4.png",
    realCTImage: "/act_4.png",
    description:
      "Pelvic scan demonstrating accurate bone structure representation and soft tissue differentiation.",
  },
  {
    id: "case5",
    title: "Scenario 5",
    petImage: "/pet_5.png",
    generatedCTImage: "/gct_5.png",
    realCTImage: "/act_5.png",
    description:
      "Chest scan showing detailed lung tissue translation and cardiac structure preservation.",
  },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    id: 1,
    title: "Data Collection & Preprocessing",
    description:
      "Collection of paired PET-CT scans from anonymized medical datasets, followed by normalization, resizing to 256×256, and data augmentation.",
    icon: "database",
  },
  {
    id: 2,
    title: "U-Net Generator Architecture",
    description:
      "Implementation of a modified U-Net with skip connections for the generator component, optimized for medical image translation.",
    icon: "cpu",
  },
  {
    id: 3,
    title: "PatchGAN Discriminator",
    description:
      "Development of a PatchGAN discriminator that classifies if image patches are real or generated at multiple scales.",
    icon: "brain",
  },
  {
    id: 4,
    title: "Multi-Component Loss Function",
    description:
      "Integration of adversarial loss (for realism), L1 loss (for pixel accuracy), and SSIM loss (for structural similarity).",
    icon: "chart",
  },
  {
    id: 5,
    title: "Training & Optimization",
    description:
      "Model training using PyTorch on NVIDIA A100 GPU with Adam optimizer, learning rate of 0.0002, and batch size of 4.",
    icon: "flask",
  },
  {
    id: 6,
    title: "Validation & Testing",
    description:
      "Rigorous validation on a separate dataset with quantitative metrics (PSNR, SSIM) and qualitative analysis.",
    icon: "microscope",
  },
];

export const FUTURE_WORK = [
  "Enhanced loss functions incorporating perceptual and gradient-based components",
  "Integration of attention mechanisms to focus on clinically relevant features",
  "Expansion to 3D volumetric translation for complete anatomical context",
  "Clinical validation studies with radiologists to assess diagnostic value",
  "Exploration of multi-modal fusion with additional imaging modalities (MRI, ultrasound)",
  "Development of uncertainty estimation for identifying potential translation errors",
];
