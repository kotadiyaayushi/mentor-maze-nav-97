import { InputHTMLAttributes, forwardRef } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'date' | 'select';
  options?: { value: string; label: string }[];
}

const FormInput = forwardRef<HTMLInputElement | HTMLSelectElement, FormInputProps>(
  ({ label, error, type = 'text', options, className = '', ...props }, ref) => {
    const inputId = `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className="form-group">
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
        
        {type === 'select' && options ? (
          <select
            id={inputId}
            className={`form-select ${error ? 'border-error' : ''} ${className}`}
            ref={ref as React.Ref<HTMLSelectElement>}
            {...props}
          >
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={inputId}
            type={type}
            className={`form-input ${error ? 'border-error' : ''} ${className}`}
            ref={ref as React.Ref<HTMLInputElement>}
            {...props}
          />
        )}
        
        {error && <div className="form-error">{error}</div>}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;