import { useRef, useState, useEffect } from 'react';

import { IconButton } from '@nutri/client-ui/icon-button';
import { PenIcon } from 'lucide-react';
import { Input } from '@nutri/client-ui';
import {ConditionalTooltip} from "@nutri/client-ui/conditional-tooltip";

interface EditableCellProps {
  id: string;
  value: string;
}

export const EditableCell = ({ id, value }: EditableCellProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [metaKey, setMetaKey] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isHovered && isEdit) {
      inputRef.current?.focus();
    }
  }, [isHovered, isEdit]);

  if (!value?.length)
    return (
      <div
        className="flex items-center"
        onBlur={() => setIsEdit(false)}
        onDoubleClick={() => setIsEdit(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyUp={() => metaKey && setMetaKey(false)}
        onClick={(e) => {
          if (e.metaKey) setIsEdit(true);
        }}
        onKeyDown={(e) => {
          if (e.metaKey) {
            setMetaKey(true);
          }
        }}
      >
        {!isEdit ? (
          <p
            className="text-lavender-400"
            data-test="organization-Editable-in-all-orgs-table"
          >
            Unknown
          </p>
        ) : (
          <Input
            size="xs"
            ref={inputRef}
            variant="unstyled"
            placeholder="Unknown"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                inputRef.current?.blur();
              }

              if (e.key === 'Escape') {
                inputRef.current?.blur();
              }
            }}
            onBlur={(e) => {
              console.log('TEST');
            }}
          />
        )}
        {isHovered && !isEdit && (
          <IconButton
            size="xxs"
            variant="ghost"
            aria-label="edit"
            className="ml-3 rounded-[5px]"
            onClick={() => setIsEdit(!isEdit)}
            icon={<PenIcon className="text-lavender-500" />}
          />
        )}
      </div>
    );

  return (
    <div
      className="flex items-center px-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isEdit ? (
        <Input
          size="xs"
          ref={inputRef}
          variant="unstyled"
          placeholder="Unknown"
          value={value}
          onBlur={() => setIsEdit(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              inputRef.current?.blur();
            }

            if (e.key === 'Escape') {
              inputRef.current?.blur();
            }
          }}
          onChange={(e) => {
            const value = e.target.value;

            console.log('v', value);
          }}
        />
      ) : (
        <ConditionalTooltip
          hasArrow
          align='start'
          side='bottom'
          targetRef={linkRef}
          label={value ?? ''}
        >
        <p
          ref={linkRef}
          onDoubleClick={() => setIsEdit(true)}
          onKeyUp={() => metaKey && setMetaKey(false)}
          className="text-gray-700 cursor-default truncate"
          onClick={(e) => {
            if (e.metaKey) setIsEdit(true);
          }}
          onKeyDown={(e) => {
            if (e.metaKey) {
              setMetaKey(true);
            }
          }}
        >
          {value ?? 'Unknown'}
        </p>
        </ConditionalTooltip>
      )}
      {isHovered && !isEdit && (
        <>
          <IconButton
            size="xxs"
            variant="ghost"
            aria-label="edit"
            className="ml-3 rounded-[5px]"
            onClick={() => setIsEdit(!isEdit)}
            icon={<PenIcon className="text-lavender-500" />}
          />
        </>
      )}
    </div>
  );
};
