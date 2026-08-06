/**
 * Single source of truth for the industries we name publicly.
 * Consumed by the homepage IndustrySpecializations grid and by the industry
 * dropdown in ContactForm, so the two lists cannot drift apart.
 */
export const industryNames = [
  "Ecommerce",
  "Healthcare",
  "Real Estate",
  "Media",
  "AI Software",
  "Oil & Gas",
  "Manufacturing",
  "Travel & Hospitality",
  "Insurance",
  "Security",
  "Finance",
  "Education",
  "Logistic",
  "Sports",
  "Food",
  "Agritech"
] as const;

export type IndustryName = (typeof industryNames)[number];
