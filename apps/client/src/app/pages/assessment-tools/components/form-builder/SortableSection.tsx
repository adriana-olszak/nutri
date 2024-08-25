import React, { FC } from 'react';
import { SortableSectionProps } from './types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  GripHorizontal,
  GripVertical,
  Heading1Icon,
  PlusCircle,
  Rows2Icon,
} from 'lucide-react';
import {Button, Input, Textarea, Tooltip} from '@nutri/client-ui';
import { IconButton } from '@nutri/client-ui/icon-button';
import {RichTextEditor} from "@nutri/client-ui/rich-text-editor";

export const SortableSection: FC<SortableSectionProps> = ({
  section,
  updateContent,
  addQuestion,
  children,
  addSection,
  toggleDescription,
  index,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  //wojtek was here 23.08.2024
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="mb-6 px-4 pt-1 pb-3 border-l-2 border-blue-500  group/section relative pr-16"
    >
      <div
        {...attributes}
        {...listeners}
        className="mr-2 cursor-move w-full flex justify-center mb-1"
      >
        <GripHorizontal size={20} className="text-gray-400" />
      </div>
      <div className="flex items-center mb-2">
        <Input
          type="text"
          value={section.title}
          onChange={(e) => updateContent(section.id, 'title', e.target.value)}
          placeholder="Enter section title"
        />
      </div>

      {section.hasDescription && (
        <RichTextEditor
          value={section.description}
          onChange={(value) => updateContent(section.id, 'description', value)}
          placeholder="Enter section description"
          className="w-full mb-4"
        />
      )}
      <div className="">{children}</div>

      {/*todo extract to design system as a group button*/}
      <div className="absolute flex flex-col right-0 top-[20%] opacity-0 group-hover/section:opacity-100 transition-opacity duration-300">
        <Tooltip label='Add question' side='left'>
          <IconButton
            aria-label="Add question"
            icon={<PlusCircle className='size-4' />}
            colorScheme="lavender"
            className="b-l rounded-b-none"
            size="xs"
            onClick={() => addQuestion(section.id)}
          />
        </Tooltip>
        <Tooltip label='Add description' side='left'>

          <IconButton
            isDisabled={section.hasDescription}
            aria-label={section.hasDescription ? "Edit description" : "Add description"}
            icon={<Heading1Icon className='size-4' />}
            colorScheme='lavender'
            className='rounded-none border-t-0 border-b-0'
            onClick={() => toggleDescription(section.id)}
          />
        </Tooltip>
        <Tooltip label='Add section' side='left'>

        <IconButton
          aria-label="Add section"
          icon={<Rows2Icon className='size-4' />}
          colorScheme="lavender"
          className="b-l rounded-t-none"
          size="xs"
          onClick={() => addSection(index + 1)}
        />
        </Tooltip>
      </div>

      <Button
        onClick={() => addQuestion(section.id)}
        size="xs"
        className="opacity-0 group-hover:opacity-100"
        leftIcon={<PlusCircle className="size-4" />}
      >
        Add Question
      </Button>
    </div>
  );
};
