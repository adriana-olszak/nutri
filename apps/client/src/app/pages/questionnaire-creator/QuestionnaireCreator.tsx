import React, { useState } from 'react';
import { Eye, Code, PenIcon } from 'lucide-react';
import { FormPreview } from './components/form-builder/FormPreview';
import { FormBuilder } from './components/form-builder';
import { Button } from '@nutri/client-ui';
import { cn } from '@nutri/client-utils';
import { observer } from 'mobx-react-lite';
import {useParams} from "react-router-dom";
import {useStores} from "../../hooks/useStore";

export const QuestionnaireCreator: React.FC = observer(() => {
  const {surveyId} = useParams()
  const {surveys} = useStores()
  const survey = surveys.value.get(surveyId ?? '')

  const [viewMode, setViewMode] = useState<'edit' | 'preview' | 'json'>('edit');

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg">
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Questionnaire Builder
        </h1>


        <div className="mb-4 flex justify-end">
          <Button
            onClick={() => setViewMode('edit')}
            className={cn('rounded-r-none', {
              'bg-blue-100': viewMode === 'edit',
            })}
            leftIcon={<PenIcon size={12}/>}
            colorScheme='blue'
          >
            Edit
          </Button>
          <Button
            onClick={() => setViewMode('preview')}
            className={cn('rounded-none border-r-0 border-l-0', {
              'bg-blue-100': viewMode === 'preview',
            })}
            leftIcon={<Eye size={12}/>}
            colorScheme='blue'
          >
            Preview
          </Button>
          <Button
            onClick={() => setViewMode('json')}
            className={cn('rounded-l-none', {
              'bg-blue-100': viewMode === 'json',
            })}
            leftIcon={<Code size={12}/>}
            colorScheme='blue'
          >
            JSON
          </Button>
        </div>

      </div>


      {viewMode === 'edit' && (
        <FormBuilder
        />
      )}

      {viewMode === 'preview' && <FormPreview formContent={survey?.value.structure}/>}

      {viewMode === 'json' && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            Form Structure
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
            {JSON.stringify(survey?.value.structure, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
});
