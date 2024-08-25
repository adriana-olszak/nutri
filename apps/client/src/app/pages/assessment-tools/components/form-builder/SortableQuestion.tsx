import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { Question, questionTypes } from './types';
import { useSortable } from '@dnd-kit/sortable';
import {CircleIcon, GripHorizontal, GripVertical, Trash, Trash2} from 'lucide-react';
import { Button, Input, Textarea } from '@nutri/client-ui';
import { IconButton } from '@nutri/client-ui/icon-button';

interface SortableQuestionProps {
  question: Question;
  updateContent: (id: string, key: string, value: string) => void;
  addOption: (id: string) => void;
  updateOption: (id: string, optionIndex: number, value: string) => void;
}

export const SortableQuestion: React.FC<SortableQuestionProps> = ({
  question,
  updateContent,
  addOption,
  updateOption,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: question.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="mb-4 p-1 border rounded-lg bg-white"
    >
      <div
        {...attributes}
        {...listeners}
        className="mr-2 w-full flex justify-center mb-1 cursor-move"
      >
        <GripHorizontal size={20} className="text-gray-400" />
      </div>

      <div className="flex items-center mb-2 tex-sm px-2">
        <Input
          type="text"
          value={question.question}
          onChange={(e) =>
            updateContent(question.id, 'question', e.target.value)
          }
          placeholder="Enter question"
        />

        <select
          value={question.type}
          onChange={(e) => updateContent(question.id, 'type', e.target.value)}
          className="ml-2 p-2 border rounded-lg text-sm"
        >
          {questionTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/*<div className="px-2">*/}
      {/*  <Textarea*/}
      {/*    value={question.description}*/}
      {/*    onChange={(e) => updateContent(question.id, 'description', e.target.value)}*/}
      {/*    placeholder="Enter question description"*/}
      {/*    className="w-full p-2 border rounded-lg"*/}
      {/*    rows={1}*/}
      {/*  />*/}
      {/*</div>*/}

      {(question.type === 'multiSelect' ||
        question.type === 'singleSelect') && (
        <div className="px-2 mt-2 flex flex-col gap-1">
          {question.options.map((option, optionIndex) => (
            <div className="flex gap-1 items-center group">
              <CircleIcon className="size-4 text-gray-400" />
              <Input
                key={optionIndex}
                type="text"
                value={option}
                variant="flushed"
                onChange={(e) =>
                  updateOption(question.id, optionIndex, e.target.value)
                }
                placeholder={`Option ${optionIndex + 1}`}
              />

              <IconButton
                aria-label="Delete option"
                icon={<Trash2 />}
                size='xxs'
                variant='ghost'
                className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                onClick={(e) =>
                  updateOption(question.id, optionIndex, e.target.value)
                }
              />
            </div>
          ))}
          <div className="mt-1 text-sm flex items-center gap-1">
            <Button
              size="xs"
              variant="ghost"
              onClick={() => addOption(question.id)}
              className="p-0"
            >
              <CircleIcon className="size-4 text-gray-400" />+ add option
            </Button>
            <span>or</span>
            <Button
              size="xs"
              variant="ghost"
              onClick={() => addOption(question.id)}
              className="p-0"
            >
              add other
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
