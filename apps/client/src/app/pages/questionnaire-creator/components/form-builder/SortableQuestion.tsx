import React, { forwardRef, useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Question, questionTypes } from './types';
import {
  CircleIcon,
  GripHorizontal,
  Radio,
  SquareIcon,
  Trash2,
} from 'lucide-react';
import { Button, Input, Checkbox } from '@nutri/client-ui';
import { IconButton } from '@nutri/client-ui/icon-button';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useStores } from '../../../../hooks/useStore';
import {computed, set} from 'mobx';

interface SortableQuestionProps {
  question: Question;
  index: number;
  sectionId?: string | number;
}

export const SortableQuestionDraggable: React.FC<SortableQuestionProps> = ({
  question,
  index,
  sectionId,
}) => {
  return (
    <Draggable draggableId={question.id} index={index}>
      {(provided, snapshot) => (
        <SortableQuestion
          ref={provided.innerRef}
          question={question}
          index={index}
          sectionId={sectionId}
          draggableProps={provided.draggableProps}
          dragHandleProps={provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        />
      )}
    </Draggable>
  );
};

interface SortableQuestionInnerProps extends SortableQuestionProps {
  draggableProps: any;
  dragHandleProps: any;
  isDragging: boolean;
}

export const SortableQuestion = observer(
  forwardRef<HTMLDivElement, SortableQuestionInnerProps>(
    (
      {
        question,
        index,
        sectionId,
        draggableProps,
        dragHandleProps,
        isDragging,
      },
      ref,
    ) => {
      const { surveyId } = useParams();
      const { surveys } = useStores();
      const survey = surveys.value.get(surveyId ?? '');
      const options = computed(() => question.options.slice()).get();
      const [otherValue, setOtherValue] = useState('');

      const updateContent = (id: string, key: string, value: string) => {
        survey?.update((draft) => {
          for (let section of draft.structure) {
            for (let q of section.questions) {
              if (q.id === id) {
                (q as any)[key] = value;
                return draft;
              }
            }
          }
          return draft;
        });
      };

      const addOption = (id: string) => {
        survey?.update((draft) => {
          for (let section of draft.structure) {
            for (let q of section.questions) {
              if (q.id === id && 'options' in q) {
                q.options.push('');
                return draft;
              }
            }
          }
          return draft;
        });
      };

      const updateOption = (id: string, optionIndex: number, value: string) => {
        survey?.update((draft) => {
          for (let section of draft.structure) {
            for (let q of section.questions) {
              if (q.id === id && 'options' in q) {
                q.options[optionIndex] = value;
                return draft;
              }
            }
          }
          return draft;
        });
      };

      const deleteOption = (id: string, optionIndex: number) => {
        survey?.update((draft) => {
          for (const section of draft.structure) {
            const q = section.questions.find((q) => q.id === id);
            if (q && 'options' in q) {
              q.options.splice(optionIndex, 1);
              return draft;
            }
          }
          return draft;
        });
      };

      const toggleOtherOption = (id: string) => {
        survey?.update((draft) => {
          for (let section of draft.structure) {
            for (let q of section.questions) {
              if (q.id === id && 'options' in q) {
                q= {
                  ...q,
                }
                return draft;
              }
            }
          }
          return draft;
        });
      };

      return (
        <div
          ref={ref}
          {...draggableProps}
          className={`mb-4 p-1 border rounded-lg bg-white ${
            isDragging ? 'shadow-lg' : ''
          }`}
        >
          <div
            {...dragHandleProps}
            className="mr-2 w-full flex justify-center mb-1 cursor-move"
          >
            <GripHorizontal size={20} className="text-gray-400" />
          </div>

          <div className="flex items-center mb-2 text-sm px-2">
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
              onChange={(e) =>
                updateContent(question.id, 'type', e.target.value)
              }
              className="ml-2 p-2 border rounded-lg text-sm"
            >
              {questionTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {(question.type === 'multiSelect' ||
            question.type === 'singleSelect') && (
            <div className="px-2 mt-2 flex flex-col ">
              {options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="flex gap-1 items-center group"
                >
                  {question.type === 'singleSelect' ? (
                    <CircleIcon className="size-4 text-gray-400" />
                  ) : (
                    <SquareIcon className="size-4 text-gray-400" />
                  )}
                  <Input
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
                    size="xxs"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => {
                      deleteOption(question.id, optionIndex);
                    }}
                  />
                </div>
              ))}
              {question.hasOtherOption && (
                <div className="flex gap-1 items-center">
                  {question.type === 'singleSelect' ? (
                    <CircleIcon className="size-4 text-gray-400" />
                  ) : (
                    <SquareIcon className="size-4 text-gray-400" />
                  )}
                  <Input
                    type="text"
                    value={otherValue}
                    onChange={(e) => setOtherValue(e.target.value)}
                    placeholder="Other (please specify)"
                    variant="flushed"
                  />
                </div>
              )}
              <div className="mt-1 text-sm flex items-center gap-1">
                <Button
                  size="xs"
                  variant="ghost"
                  onClick={() => addOption(question.id)}
                  className="p-0"
                >
                  {question.type === 'singleSelect' ? (
                    <CircleIcon className="size-4 text-gray-400" />
                  ) : (
                    <SquareIcon className="size-4 text-gray-400" />
                  )}
                  + add option
                </Button>
                <span>or</span>

                {}
                <Button
                  size="xs"
                  variant="ghost"
                  onClick={() => toggleOtherOption(question.id)}
                  className="p-0"
                >
                  {question.hasOtherOption? 'Remove other' : 'Add other'}
                </Button>
              </div>
            </div>
          )}
        </div>
      );
    },
  ),
);

SortableQuestion.displayName = 'SortableQuestion';
