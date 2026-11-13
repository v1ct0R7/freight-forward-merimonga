// components/ui/Label/Label.jsx

function Label({ children, htmlFor }) {
    return (
        <label htmlFor={htmlFor} className="text-md font-semibold text-black">
            {children}
        </label>
    );
}

export default Label;
