import React, { FC, useCallback, useEffect } from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import {
  GripHorizontal,
  Heading1Icon,
  PlusCircle,
  Rows2Icon,
} from 'lucide-react';
import { Button, Input, Tooltip } from '@nutri/client-ui';
import { IconButton } from '@nutri/client-ui/icon-button';
import { RichTextEditor } from '@nutri/client-ui/rich-text-editor';
import { SortableQuestionDraggable } from './SortableQuestion';
import { Section, Question } from '@nutri/store/surveys/types';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../../hooks/useStore';
import { computed } from 'mobx';

interface SortableSectionProps {
  section: Section;
  index: number;
  surveyId: string;
  addSection: (position: number) => void;
  toggleDescription: (sectionId: string) => void;
}

export const SortableSection: FC<SortableSectionProps> = observer(
  ({ section, index, surveyId, addSection, toggleDescription }) => {
    const { surveys } = useStores();
    const survey = surveys.value.get(surveyId);
    const questions = computed(() => {
      const currentSection = survey?.value.structure.find(
        (s) => s.id === section.id,
      );
      return currentSection?.questions || [];
    }).get();

    console.log(questions.length);

    const updateContent = useCallback(
      (key: string, value: string) => {
        console.log('Updating section content', {
          sectionId: section.id,
          key,
          value,
        });
        survey?.update((draft) => {
          const sectionIndex = draft.structure.findIndex(
            (s) => s.id === section.id,
          );
          if (sectionIndex !== -1) {
            draft.structure[sectionIndex][key] = value;
          }
          return draft;
        });
      },
      [survey, section.id],
    );

    const addQuestion = useCallback(() => {
      if (!survey) {
        return;
      }

      survey.update((draft) => {

        const sectionIndex = draft.structure.findIndex(
          (s) => s.id === section.id,
        );

        if (sectionIndex !== -1) {
          const newQuestion: Question = {
            id: `q${Date.now()}`,
            type: 'input',
            question: '',
            description: '',
            options: [],
          };


          if (!draft.structure[sectionIndex].questions) {
            draft.structure[sectionIndex].questions = [];
          }

          draft.structure[sectionIndex].questions.push(newQuestion);

        } else {
          console.error('Section not found in draft', {
            sectionId: section.id,
          });
        }

        return draft;
      });
    }, [survey, section.id, surveyId]);

    return (
      <Draggable draggableId={section.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className={`mb-6 px-4 pt-1 pb-3 border-l-2 border-blue-500 group/section relative pr-16 bg-white ${
              snapshot.isDragging ? 'shadow-lg' : ''
            }`}
          >
            <div
              {...provided.dragHandleProps}
              className="mr-2 cursor-move w-full flex justify-center mb-1"
            >
              <GripHorizontal size={20} className="text-gray-400" />
            </div>
            <div className="flex items-center mb-2">
              <Input
                type="text"
                value={section.title}
                onChange={(e) => updateContent('title', e.target.value)}
                placeholder="Enter section title"
              />
            </div>

            {section.hasDescription && (
              <RichTextEditor
                value={section.description}
                onChange={(value) => updateContent('description', value)}
                placeholder="Enter section description"
                className="w-full mb-4"
              />
            )}

            <Droppable droppableId={`section-${section.id}`} type="QUESTION">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`${
                    snapshot.isDraggingOver ? 'bg-lavender-50' : ''
                  }`}
                >
                  {questions?.map((question, questionIndex) => (
                    <SortableQuestionDraggable
                      key={question.id}
                      question={question}
                      index={questionIndex}
                      sectionId={section.id}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <div className="absolute flex flex-col right-0 top-[20%] opacity-0 group-hover/section:opacity-100 transition-opacity duration-300">
              <Tooltip label="Add question" side="left">
                <IconButton
                  aria-label="Add question"
                  icon={<PlusCircle className="size-4" />}
                  colorScheme="lavender"
                  className="b-l rounded-b-none"
                  size="xs"
                  onClick={addQuestion}
                />
              </Tooltip>
              <Tooltip label="Add description" side="left">
                <IconButton
                  isDisabled={section.hasDescription}
                  aria-label={
                    section.hasDescription
                      ? 'Edit description'
                      : 'Add description'
                  }
                  icon={<Heading1Icon className="size-4" />}
                  colorScheme="lavender"
                  className="rounded-none border-t-0 border-b-0"
                  onClick={() => toggleDescription(section.id)}
                />
              </Tooltip>
              <Tooltip label="Add section" side="left">
                <IconButton
                  aria-label="Add section"
                  icon={<Rows2Icon className="size-4" />}
                  colorScheme="lavender"
                  className="b-l rounded-t-none"
                  size="xs"
                  onClick={() => addSection(index + 1)}
                />
              </Tooltip>
            </div>

            <Button
              onClick={addQuestion}
              size="xs"
              className="opacity-0 group-hover:opacity-100"
              leftIcon={<PlusCircle className="size-4" />}
            >
              Add Question
            </Button>
          </div>
        )}
      </Draggable>
    );
  },
);
