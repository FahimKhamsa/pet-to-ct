import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { RESULT_METRICS } from "../../data/constants";
import { BarChart4, Award, Ruler, Clock } from "lucide-react";

const Results: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "chart":
        return <BarChart4 size={28} className="text-primary-500" />;
      case "eye":
        return <Award size={28} className="text-primary-500" />;
      case "ruler":
        return <Ruler size={28} className="text-primary-500" />;
      case "clock":
        return <Clock size={28} className="text-primary-500" />;
      default:
        return <BarChart4 size={28} className="text-primary-500" />;
    }
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Results & Metrics"
          subtitle="Quantitative and qualitative evaluation of our PET-to-CT translation model"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RESULT_METRICS.map((metric, index) => (
            <Card key={metric.name} delay={index * 0.1} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary-50 p-2 rounded-lg">
                  {getIcon(metric.icon)}
                </div>
                <div className="text-3xl font-bold text-primary-600">
                  {metric.name === "Training Time"
                    ? `${metric.value}h`
                    : metric.value}
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 text-neutral-800">
                {metric.name}
              </h3>
              <p className="text-sm text-neutral-600">{metric.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">
              Strengths
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-neutral-700">
                  <span className="font-medium">Soft Tissue Accuracy:</span>{" "}
                  Excellent translation of soft tissue boundaries and density
                  variations.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-neutral-700">
                  <span className="font-medium">Noise Reduction:</span>{" "}
                  Generated CT images show reduced noise compared to direct
                  reconstructions.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-neutral-700">
                  <span className="font-medium">
                    Cross-sectional Consistency:
                  </span>{" "}
                  Maintaining structural integrity across different slices.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-neutral-700">
                  <span className="font-medium">Fast Inference:</span>{" "}
                  Generation time of less than 2 seconds per slice on standard
                  hardware.
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">
              Limitations
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-neutral-700">
                  <span className="font-medium">Bone Structure Detail:</span>{" "}
                  Fine details in bone structures are occasionally not preserved
                  accurately.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-neutral-700">
                  <span className="font-medium">Rare Pathologies:</span>{" "}
                  Translation accuracy decreases for uncommon pathological
                  findings not well-represented in training data.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-neutral-700">
                  <span className="font-medium">Boundary Artifacts:</span>{" "}
                  Occasional blurring at sharp tissue boundaries, particularly
                  between very different density tissues.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-neutral-700">
                  <span className="font-medium">Dataset Bias:</span> Performance
                  varies based on patient demographics represented in the
                  training dataset.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary-700 text-white p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">Clinical Significance</h3>
          <p className="mb-6">
            Our generated CT generation technique has several potential clinical
            applications that could significantly impact patient care:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-600 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-2">
                Reduced Radiation Exposure
              </h4>
              <p className="text-primary-100 text-sm">
                By eliminating the need for a separate CT scan, patients'
                overall radiation exposure can be reduced by up to 30%,
                particularly beneficial for pediatric patients and those
                requiring frequent monitoring.
              </p>
            </div>
            <div className="bg-primary-600 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Streamlined Workflow</h4>
              <p className="text-primary-100 text-sm">
                Imaging departments can improve efficiency by reducing the
                number of required scans, decreasing patient waiting times, and
                optimizing scanner utilization.
              </p>
            </div>
            <div className="bg-primary-600 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Cost Reduction</h4>
              <p className="text-primary-100 text-sm">
                Preliminary cost analysis indicates potential savings of
                approximately $300-500 per patient by eliminating redundant CT
                scans while maintaining diagnostic quality.
              </p>
            </div>
            <div className="bg-primary-600 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-2">
                Improved Patient Experience
              </h4>
              <p className="text-primary-100 text-sm">
                Less time spent in imaging departments, reduced anxiety from
                fewer procedures, and decreased overall discomfort, especially
                important for patients with mobility challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
