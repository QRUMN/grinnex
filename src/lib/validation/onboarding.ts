import { z } from 'zod';

const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
const zipCodeRegex = /^\d{5}(-\d{4})?$/;

export const onboardingSchema = z.object({
  pestType: z.string().min(1, 'Please select a pest type'),
  clientType: z.enum(['residential', 'commercial']),
  fullName: z.string()
    .min(2, 'Full name is required')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z.string()
    .email('Invalid email address')
    .toLowerCase(),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  phone: z.string()
    .regex(phoneRegex, 'Phone number must be in format (XXX) XXX-XXXX'),
  address: z.string()
    .min(5, 'Valid street address required')
    .regex(/^[a-zA-Z0-9\s,.-]+$/, 'Invalid characters in address'),
  city: z.string()
    .min(2, 'City is required')
    .regex(/^[a-zA-Z\s.-]+$/, 'City can only contain letters, spaces, periods, and hyphens'),
  state: z.string()
    .length(2, 'Please use two-letter state code')
    .regex(/^[A-Z]{2}$/, 'State must be a valid two-letter code'),
  zipCode: z.string()
    .regex(zipCodeRegex, 'ZIP code must be in format XXXXX or XXXXX-XXXX'),
  propertySize: z.string().min(1, 'Property size is required'),
  problemArea: z.string()
    .min(5, 'Please specify the problem area')
    .max(200, 'Problem area description is too long'),
  pestProblem: z.string()
    .min(10, 'Please describe the pest problem')
    .max(500, 'Problem description is too long'),
  preferredDate: z.string()
    .refine((date) => {
      if (!date) return true;
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Preferred date cannot be in the past'),
  additionalNotes: z.string()
    .max(1000, 'Additional notes are too long')
    .optional(),
  isAddressVerified: z.boolean()
    .refine((val) => val === true, 'Please select a verified address from the suggestions'),
});