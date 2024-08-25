import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Section } from './types';
import { SortableSection } from './SortableSection';
import { SortableQuestion } from './SortableQuestion';
import { PlusCircle } from 'lucide-react';
import { Button } from '@nutri/client-ui';

interface FormBuilderProps {
  onSetFormContent: Dispatch<SetStateAction<Section[]>>;
  formContent: Section[];
}

export const FormBuilder: React.FC<FormBuilderProps> = ({
  formContent,
  onSetFormContent,
}) => {
  const [viewMode, setViewMode] = useState<'edit' | 'preview' | 'json'>('edit');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const toggleDescription = (sectionId: string) => {
    onSetFormContent(formContent.map(item =>
      item.id === sectionId
        ? { ...item, hasDescription: !item.hasDescription }
        : item
    ));
  };
  const addSection = (position?: number) => {
    const newSection: Section = {
      id: `s${Date.now()}`,
      type: 'section',
      title: '',
      description: '',
      questions: [],
      hasDescription:false
    };

    onSetFormContent(prevContent => {
      if (position === undefined) {
        return [...prevContent, newSection];
      } else {
        const newContent = [...prevContent];
        newContent.splice(position, 0, newSection);
        return newContent;
      }
    });
  };

  const addQuestion = (sectionId: string) => {
    onSetFormContent(
      formContent.map((item) =>
        item.id === sectionId
          ? {
              ...item,
              questions: [
                ...item.questions,
                {
                  id: `q${Date.now()}`,
                  type: 'input',
                  question: '',
                  description: '',
                  options: [],
                },
              ],
            }
          : item,
      ),
    );
  };

  const updateContent = (id: string, key: string, value: string) => {
    onSetFormContent(
      formContent.map((item) => {
        if (item.id === id) {
          return { ...item, [key]: value };
        }
        if (item.type === 'section') {
          return {
            ...item,
            questions: item.questions.map((q) =>
              q.id === id ? { ...q, [key]: value } : q,
            ),
          };
        }
        return item;
      }),
    );
  };

  const addOption = (id: string) => {
    onSetFormContent(
      formContent.map((item) => {
        if (item.type === 'section') {
          return {
            ...item,
            questions: item.questions.map((q) =>
              q.id === id ? { ...q, options: [...q.options, ''] } : q,
            ),
          };
        }
        return item;
      }),
    );
  };

  const updateOption = (id: string, optionIndex: number, value: string) => {
    onSetFormContent(
      formContent.map((item) => {
        if (item.type === 'section') {
          return {
            ...item,
            questions: item.questions.map((q) => {
              if (q.id === id) {
                const newOptions = [...q.options];
                newOptions[optionIndex] = value;
                return { ...q, options: newOptions };
              }
              return q;
            }),
          };
        }
        return item;
      }),
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      onSetFormContent((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        if (oldIndex !== -1 && newIndex !== -1) {
          return arrayMove(items, oldIndex, newIndex);
        }

        // Handle moving questions within or between sections
        const updatedItems = [...items];
        let sourceSection: number | undefined,
          targetSection: number | undefined;
        let sourceIndex: number | undefined, targetIndex: number | undefined;

        for (let i = 0; i < updatedItems.length; i++) {
          if (updatedItems[i].type === 'section') {
            sourceIndex = updatedItems[i].questions.findIndex(
              (q) => q.id === active.id,
            );
            if (sourceIndex !== -1) {
              sourceSection = i;
              break;
            }
          }
        }

        for (let i = 0; i < updatedItems.length; i++) {
          if (updatedItems[i].type === 'section') {
            targetIndex = updatedItems[i].questions.findIndex(
              (q) => q.id === over?.id,
            );
            if (targetIndex !== -1) {
              targetSection = i;
              break;
            }
          }
        }

        if (
          sourceSection !== undefined &&
          targetSection !== undefined &&
          sourceIndex !== undefined &&
          targetIndex !== undefined
        ) {
          const [movedQuestion] = updatedItems[sourceSection].questions.splice(
            sourceIndex,
            1,
          );
          updatedItems[targetSection].questions.splice(
            targetIndex,
            0,
            movedQuestion,
          );
        }

        return updatedItems;
      });
    }
  };

  return (
    <div className="container mx-auto bg-white rounded-lg">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={formContent.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {formContent.map((section, index) => (
            <SortableSection
              key={section.id}
              section={section}
              updateContent={updateContent}
              addQuestion={addQuestion}
              addSection={addSection}
              toggleDescription={toggleDescription}
              index={index}
            >
              <SortableContext
                items={section.questions.map((q) => q.id)}
                strategy={verticalListSortingStrategy}
              >
                {section.questions.map((question) => (
                  <SortableQuestion
                    key={question.id}
                    question={question}
                    updateContent={updateContent}
                    addOption={addOption}
                    updateOption={updateOption}
                  />
                ))}
              </SortableContext>
            </SortableSection>
          ))}
        </SortableContext>
      </DndContext>
      <Button
        onClick={() =>addSection()}
        size="xs"
        leftIcon={<PlusCircle className="size-4" />}
      >
        Add Section
      </Button>
      {viewMode === 'json' && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            Form Structure
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
            {JSON.stringify(formContent, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
