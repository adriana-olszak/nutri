import {useNavigate} from "react-router-dom";
import {ConditionalTooltip} from "@nutri/client-ui/conditional-tooltip";
import {useRef} from "react";

interface LinkCellProps {
  title:string
  href:string
}

export const LinkCell = ({ title, href }: LinkCellProps) => {
  const navigate = useNavigate();
  const linkRef = useRef<HTMLParagraphElement>(null);
  console.log(title)

  const handleNavigate = () => {
    navigate(href);
  };

  return (
    <ConditionalTooltip
      hasArrow
      align='start'
      side='bottom'
      targetRef={linkRef}
      label={title ?? ''}
    >
      <span className='inline'>
        <p
          role='button'
          ref={linkRef}
          onClick={handleNavigate}
          className='overflow-ellipsis overflow-hidden text-gray-700 font-medium no-underline hover:no-underline cursor-pointer'
        >
          {title ?? 'Unknown'}
        </p>
      </span>
    </ConditionalTooltip>
  );
};
