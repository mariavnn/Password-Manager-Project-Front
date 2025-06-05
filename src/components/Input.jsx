import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

export default function Input({
  label,
  type = 'text',
  icon,
  bgColor = 'white',
  disabled,
  name,
  value,
  onChange,
  onBlur,
  placeholder = '',
}) {
  const typeIcon = (icon) => {
    switch (icon) {
      case 'email':
        return <MdEmail className="text-zinc-500" />;
      case 'user':
        return <FaUser className="text-zinc-500" />;
      default:
        return null;
    }
  };

  const backgroundClass = bgColor === 'gray' ? 'bg-zinc-700/70' : 'bg-white';
  const textColorClass = bgColor === 'gray' ? 'text-white' : 'text-gray-600';
  const iconSrc = typeIcon(icon);

  return (
    <div>
      <label htmlFor={name} className="block text-gray-300 mb-1 font-medium">
        {label}
      </label>
      <div
        className={`flex items-center ${backgroundClass} rounded-xl p-2 focus-within:ring-2 focus-within:ring-green-200`}
      >
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder || `Enter ${label}`}
          required
          className={`outline-none flex-1 bg-transparent ${textColorClass} placeholder-gray-400`}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {iconSrc}
      </div>
    </div>
  );
}
