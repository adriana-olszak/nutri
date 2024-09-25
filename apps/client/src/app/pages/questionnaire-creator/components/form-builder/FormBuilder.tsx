import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import { SortableSection } from './SortableSection';
import { PlusCircle } from 'lucide-react';
import { Button } from '@nutri/client-ui';
import { useParams } from 'react-router-dom';
import { useStores } from '../../../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import { Section } from '@nutri/store/surveys/types';
import { action, computed } from 'mobx';

interface FormBuilderProps {}

export const FormBuilder: React.FC<FormBuilderProps> = observer(() => {
  const [viewMode, setViewMode] = useState<'edit' | 'preview' | 'json'>('edit');
  const { surveyId } = useParams();
  const { surveys } = useStores();
  const survey = surveys.value.get(surveyId ?? '');

  const surveyStructure = computed(() => survey?.value?.structure.slice()).get();

  const addSection = action((position?: number) => {
    if (!survey) return;

    const newSection: Section = {
      id: `${surveyId}-s${Date.now()}`,
      type: 'section',
      title: '',
      description: '',
      questions: [],
      hasDescription: false,
    };

    if (position === undefined) {
      survey.value.structure.push(newSection);
    } else {
      survey.value.structure.splice(position, 0, newSection);
    }
  });

  const toggleDescription = action((sectionId: string) => {
    if (!survey) return;

    const section = survey.value.structure.find(item => item.id === sectionId);
    if (section) {
      section.hasDescription = !section.hasDescription;
    }
  });

  const onDragEnd = action((result: DropResult) => {
    if (!survey) return;

    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (type === 'SECTION') {
      const [reorderedSection] = survey.value.structure.splice(source.index, 1);
      survey.value.structure.splice(destination.index, 0, reorderedSection);
    } else if (type === 'QUESTION') {
      const sourceSectionIndex = survey.value.structure.findIndex(
        section => `section-${section.id}` === source.droppableId
      );
      const destSectionIndex = survey.value.structure.findIndex(
        section => `section-${section.id}` === destination.droppableId
      );

      if (sourceSectionIndex !== -1 && destSectionIndex !== -1) {
        const sourceQuestions = survey.value.structure[sourceSectionIndex].questions;
        const [reorderedQuestion] = sourceQuestions.splice(source.index, 1);

        survey.value.structure[destSectionIndex].questions.splice(
          destination.index,
          0,
          reorderedQuestion
        );
      }
    }
  });

  if (!survey) return null;

  return (
    <div className="container mx-auto bg-white rounded-lg">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections" type="SECTION">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {surveyStructure?.map((section, index) => (
                <SortableSection
                  key={section.id}
                  section={section}
                  index={index}
                  surveyId={survey.id}
                  addSection={addSection}
                  toggleDescription={toggleDescription}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        onClick={() => addSection()}
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
            {JSON.stringify(survey.value.structure, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
});
