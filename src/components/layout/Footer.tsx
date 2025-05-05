import React from "react";
import { motion } from "framer-motion";
import { Brain, Users, ExternalLink } from "lucide-react";
import {
  INSTITUTION,
  COURSE,
  SUBMISSION_DATE,
  NAV_ITEMS,
  TEAM_MEMBERS,
} from "../../data/constants";
import { Link, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (location.pathname === href) {
      // If clicking on the current page's nav item, animate scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // If navigating to a different page, instant scroll to top
      window.scrollTo(0, 0);
    }
  };
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Brain size={28} className="text-primary-400" />
              <span className="font-bold text-xl">PET-to-CT Translation</span>
            </div>
            <p className="text-neutral-300 mb-4 text-sm">
              Advancing medical imaging through deep learning technologies to
              improve clinical workflows and patient outcomes.
            </p>
            <div className="text-xs text-neutral-400">
              <p>{INSTITUTION}</p>
              <p>{COURSE}</p>
              <p>Submission: {SUBMISSION_DATE}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:ml-12"
          >
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 flex items-center gap-1"
                    onClick={() => handleNavClick(item.href)}
                  >
                    <ExternalLink size={14} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Team Members</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-300">
                <Users
                  size={18}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-medium">Supervisor:</p>
                  <p>{TEAM_MEMBERS[4].name}</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-neutral-300">
                <Users
                  size={18}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-medium">Team Members:</p>
                  <ul className="list-disc pl-4 space-y-1 mt-1">
                    {TEAM_MEMBERS.slice(0, 4).map((member) => (
                      <li key={member.name}>{member.name}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-6 text-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} PET-to-CT GAN Translation Project. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
