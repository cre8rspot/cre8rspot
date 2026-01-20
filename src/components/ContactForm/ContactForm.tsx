import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import './ContactForm.css';

interface FormData {
  firstName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'This field is required';
    }
    // Only letters and spaces allowed, no numbers
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return 'Only letters and spaces are allowed';
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    
    // Check if it's a valid length (10-15 digits)
    if (digitsOnly.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (digitsOnly.length > 15) {
      return 'Phone number must not exceed 15 digits';
    }
    
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email is required';
    }
    
    // List of valid domain extensions
    const validDomains = [
      'com', 'org', 'net', 'edu', 'gov', 'mil', 'int', 'info', 'biz', 'name', 'pro',
      'co', 'io', 'me', 'tv', 'cc', 'ws', 'mobi', 'tel', 'travel', 'jobs', 'cat',
      // Country codes
      'in', 'uk', 'us', 'ca', 'au', 'de', 'fr', 'jp', 'cn', 'br', 'ru', 'it', 'es',
      'nl', 'se', 'no', 'dk', 'fi', 'be', 'ch', 'at', 'pl', 'cz', 'hu', 'ro', 'bg',
      'hr', 'si', 'sk', 'lt', 'lv', 'ee', 'ie', 'pt', 'gr', 'cy', 'mt', 'lu',
      // Common compound extensions
      'co.in', 'co.uk', 'com.au', 'co.za', 'com.br', 'co.jp', 'com.cn', 'co.kr'
    ];
    
    // Basic email format validation
    const basicEmailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.([a-z]{2,}|[a-z]{2,}\.[a-z]{2,})$/;
    if (!basicEmailRegex.test(email)) {
      return 'Please enter a valid email format (example@domain.com)';
    }
    
    // Extract domain extension
    const domainPart = email.split('@')[1];
    if (!domainPart) {
      return 'Please enter a valid email format (example@domain.com)';
    }
    
    // Get the extension (everything after the last dot, or compound extension)
    const parts = domainPart.split('.');
    let extension = '';
    
    if (parts.length >= 3) {
      // Check for compound extensions like co.uk, com.au
      extension = parts.slice(-2).join('.');
      if (!validDomains.includes(extension)) {
        extension = parts[parts.length - 1];
      }
    } else {
      extension = parts[parts.length - 1];
    }
    
    if (!validDomains.includes(extension)) {
      return 'Please use a valid domain extension (.com, .org, .in, etc.)';
    }
    
    return undefined;
  };

  // Handle input changes with validation
  const handleInputChange = (field: keyof FormData, value: string) => {
    let processedValue = value;

    // Process value based on field type
    if (field === 'firstName') {
      // Remove numbers and special characters, keep only letters and spaces
      processedValue = value.replace(/[^A-Za-z\s]/g, '');
    } else if (field === 'phone') {
      // Allow only numbers, spaces, hyphens, parentheses, and plus sign
      processedValue = value.replace(/[^0-9\s\-\(\)\+]/g, '');
    } else if (field === 'email') {
      // Convert to lowercase and remove spaces
      processedValue = value.toLowerCase().replace(/\s/g, '');
    }

    setFormData(prev => ({
      ...prev,
      [field]: processedValue
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    
    newErrors.firstName = validateName(formData.firstName);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.email = validateEmail(formData.email);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== undefined);
    
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, submit the data
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    
    // Reset form after successful submission
    setFormData({
      firstName: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="contact-form-container">
      <h3 className="contact-form-title">Ready to Build Something Exceptional?</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <div className="contact-form-field">
            <input
              type="text"
              placeholder="Your Name *"
              className={`contact-form-input ${errors.firstName ? 'error' : ''}`}
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>
          <div className="contact-form-field">
            <input
              type="tel"
              placeholder="Phone Number *"
              className={`contact-form-input ${errors.phone ? 'error' : ''}`}
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
        </div>
        <div className="contact-form-row">
          <div className="contact-form-field">
            <input
              type="email"
              placeholder="Email *"
              className={`contact-form-input ${errors.email ? 'error' : ''}`}
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="contact-form-field">
            <input
              type="text"
              placeholder="Subject"
              className="contact-form-input"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
            />
          </div>
        </div>
        <div className="contact-form-field">
          <textarea
            placeholder="Message"
            className="contact-form-input contact-form-textarea"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
          />
        </div>
        <div className="contact-form-actions">
          <button type="submit" className="contact-form-btn">
            Send Message
          </button>
          <button type="button" className="contact-form-btn-icon">
            <ArrowUpRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
