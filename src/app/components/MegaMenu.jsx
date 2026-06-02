import React, { useState } from "react";
import { Shield, Cloud, Database, Lock } from "lucide-react";

const menuData = {
  trending: [
    { title: "Data Science", desc: "Learn ML, AI & analytics", icon: Database },
    { title: "Penetration Testing", desc: "Ethical hacking mastery", icon: Shield },
    { title: "Cloud Security", desc: "Secure cloud infra", icon: Cloud },
  ],
  idam: [
    { title: "SailPoint", desc: "Identity governance", icon: Lock },
    { title: "CyberArk", desc: "Privileged access mgmt", icon: Shield },
    { title: "Okta", desc: "Authentication & SSO", icon: Cloud },
  ],
  certification: [
    { title: "AWS Certification", desc: "Amazon cloud certs", icon: Cloud },
    { title: "Azure Certification", desc: "Microsoft cloud", icon: Database },
    { title: "Google Cloud", desc: "GCP certification", icon: Cloud },
  ],
  explore: [
    { title: "AI & ML", desc: "Future tech skills", icon: Database },
    { title: "Blockchain", desc: "Web3 & crypto", icon: Shield },
    { title: "DevOps", desc: "CI/CD pipelines", icon: Cloud },
  ],
  corporate: [
    { title: "Enterprise Training", desc: "Upskill teams", icon: Database },
    { title: "Workshops", desc: "Hands-on sessions", icon: Shield },
    { title: "Team Upskilling", desc: "Growth programs", icon: Cloud },
  ],
  lms: [
    { title: "LMS Setup", desc: "Learning platform", icon: Database },
    { title: "Custom LMS", desc: "Tailored solution", icon: Cloud },
    { title: "Tracking System", desc: "Monitor progress", icon: Shield },
  ],
};

export default function MegaMenu() {
  const [activeTab, setActiveTab] = useState("trending");

  const tabs = [
    { key: "trending", label: "Trending Courses", tag: "TOP" },
    { key: "idam", label: "IDAM & PAM", tag: "TOP" },
    { key: "certification", label: "Certifications", tag: "TOP" },
    { key: "explore", label: "Explore", tag: "NEW" },
    { key: "corporate", label: "Corporate", tag: "FREE" },
    { key: "lms", label: "LMS", tag: "LMS" },
  ];

  return (
    <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

      <div className="w-[1050px] bg-white shadow-2xl rounded-2xl p-6 border border-gray-200">

        <div className="flex gap-6">

          {/* LEFT */}
          <div className="w-1/4">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all
                  ${
                    activeTab === tab.key
                      ? "bg-blue-50 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">
                      {tab.tag}
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      {tab.label}
                    </span>
                  </div>

                  {activeTab === tab.key && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="w-3/4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
              {activeTab} Courses
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {menuData[activeTab].map((item, index) => {
                const Icon = item.icon;

                return (
                  
                  <div
                    key={index}
                    className="group p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer bg-white"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100">
                        <Icon size={18} className="text-blue-600" />
                      </div>
                      <h4 className="font-medium text-gray-800 group-hover:text-blue-600">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}