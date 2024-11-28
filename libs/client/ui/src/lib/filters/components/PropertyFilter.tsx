import { Button } from '@nutri/client-ui';

interface PropertyFilterInterface {
  name: string;
}

export const PropertyFilter = ({ name }: PropertyFilterInterface) => {
  return (
    <Button
      size='xs'
      variant='outline'
      colorScheme='grayModern'
      className='cursor-not-allowed font-normal bg-white focus:bg-white hover:bg-white'
    >
      {name || 'Property'}
    </Button>
  );
};
