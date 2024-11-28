import { ChevronLeft, ChevronRight } from 'lucide-react';
import { forwardRef } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';


export const DatePicker = forwardRef(
  ({ value, onChange, ...props }: CalendarProps, ref) => {
    const handleDateInputChange = (
      value: CalendarProps['value'],
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      if (!value) return onChange?.(null, event);

      const date = new Date(value as string | number | Date);
      const normalizedDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
      );

      onChange?.(normalizedDate, event);
    };

    return (
      <Calendar
        ref={ref}
        value={value}
        defaultValue={value}
        prevLabel={<ChevronLeft />}
        nextLabel={<ChevronRight />}
        onChange={handleDateInputChange}
        {...props}
      />
    );
  },
);
