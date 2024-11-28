import { IconButton } from '@nutri/client-ui/icon-button';
import { X } from 'lucide-react';

interface ClearFilterProps {
  onClearFilter: () => void;
}

export const ClearFilter = ({ onClearFilter }: ClearFilterProps) => {
  return (
    <IconButton
      size='xs'
      variant='outline'
      onClick={onClearFilter}
      colorScheme='gray'
      aria-label='clear filter selected'
      icon={<X className='text-gray-500' />}
      className=' bg-white border-[1px] border-grayModern-300 focus:outline-none'
    />
  );
};
