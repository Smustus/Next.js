import Link from "next/link";

interface ButtonProps {
  btnText: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  btnText = '',
  onClick,
  className = 'inline-block p-3 m-2 bg-stone-700 text-white rounded  hover:text-stone-300 hover:bg-stone-600 hover:text-focus-visible:outline-dotted focus-visible:text-stone-400 focus-visible:rounded drop-shadow-lg w-fit h-fit font-semibold',
  type = 'button',
  disabled = false,
  href
}) => {

  if(href) {
    return (
      <Link href={href} className={`${className}`}>
          {btnText}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {btnText}
    </button>
  );
};

export default Button;