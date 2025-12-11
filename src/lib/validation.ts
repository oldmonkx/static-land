// Validate Indian phone number (10 digits starting with 6-9)
export const isValidIndianPhone = (phone: string): boolean => {
  // Remove spaces, dashes, and country code prefix
  const cleaned = phone.replace(/[\s-]/g, '').replace(/^(\+91|91)/, '');
  
  // Must be exactly 10 digits starting with 6, 7, 8, or 9
  const indianPhoneRegex = /^[6-9]\d{9}$/;
  return indianPhoneRegex.test(cleaned);
};

// Clean phone number (remove prefix and formatting)
export const cleanIndianPhone = (phone: string): string => {
  return phone.replace(/[\s-]/g, '').replace(/^(\+91|91)/, '');
};
