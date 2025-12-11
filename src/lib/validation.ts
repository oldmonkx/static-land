// Validate Indian phone number (10 digits starting with 6-9)
export const isValidIndianPhone = (phone: string): boolean => {
  // Remove spaces and dashes
  let cleaned = phone.replace(/[\s-]/g, '');
  
  // Only strip country code if length > 10 (user included +91 or 91)
  if (cleaned.length > 10) {
    cleaned = cleaned.replace(/^(\+91|91)/, '');
  }
  
  // Must be exactly 10 digits starting with 6, 7, 8, or 9
  const indianPhoneRegex = /^[6-9]\d{9}$/;
  return indianPhoneRegex.test(cleaned);
};

// Clean phone number (remove prefix and formatting)
export const cleanIndianPhone = (phone: string): string => {
  let cleaned = phone.replace(/[\s-]/g, '');
  if (cleaned.length > 10) {
    cleaned = cleaned.replace(/^(\+91|91)/, '');
  }
  return cleaned;
};
