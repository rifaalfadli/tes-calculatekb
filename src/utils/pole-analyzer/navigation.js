// ====================================================
// Function for Condition Input
// ====================================================
// FUNCTIONS: Go to Pole Input after Condition
export const conditionNext = (setIsExpandedCondition, setIsExpandedPole) => {
  // Close section condition
  setIsExpandedCondition(false);

  // Open section pole
  setIsExpandedPole(true);
};

// ====================================================
// Function for Pole Input
// ====================================================
// FUNCTION: Go to the next section tab
export const goToNextSection = (sections, activeTab, setActiveTab) => {
  const currentIndex = sections.findIndex((s) => s.id === activeTab);
  if (currentIndex < sections.length - 1) {
    setActiveTab(sections[currentIndex + 1].id);
  }
};

// FUNCTIONS: Go to Direct Object Input after Step Pole
export const stepPoleNext = (setIsExpandedPole, setIsExpandedDo) => {
  // Close step pole
  setIsExpandedPole(false);

  // Open direct Object
  setIsExpandedDo(true);
};

// ====================================================
// Function for Arm Input
// ====================================================
// FUNCTION: Go to the next arm tab
export const goToNextArm = (arms, activeTabArm, setActiveTabArm) => {
  const currentIndex = arms.findIndex((s) => s.idArm === activeTabArm);
  if (currentIndex < arms.length - 1) {
    setActiveTabArm(arms[currentIndex + 1].idArm);
  }
};
