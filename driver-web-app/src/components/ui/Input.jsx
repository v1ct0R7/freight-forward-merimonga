// components/ui/Input/Input.jsx
import Label from "./Label";

function Input({
                   label,
                   icon: Icon,
                   value,
                   onChange,
                   placeholder,
                   type = "text",
                   required,
               }) {
    return (
        <div>
            {label && <Label>{label}</Label>}
            <div className="relative flex items-center">
                {Icon && (
                    <Icon
                        size={24}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue"
                    />
                )}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="w-full border border-light-blue bg-lighter-blue rounded-lg px-3 py-2 pl-10 text-lg focus:outline-none focus:border-dark-blue"
                />
            </div>
        </div>
    );
}

export default Input;
