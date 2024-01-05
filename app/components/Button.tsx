import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  icon?: IconDefinition;
};

const Button = ({
  className = '',
  children,
  icon = faAngleRight,
}: ButtonProps) => {
  return (
    <button
      className={`${className} inline-flex justify-between text-slate-950 bg-green-200 hover:bg-green-200/80 py-2 px-3 rounded shadow w-[100px]`}
    >
      <span>{children}</span>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
export default Button;
