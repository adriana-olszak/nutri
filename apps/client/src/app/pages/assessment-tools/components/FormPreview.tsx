import React from 'react';
import DOMPurify from 'dompurify';
import {Input, RadioGroup, RadioGroupItem, Textarea} from '@nutri/client-ui';

const sanitizeHtml = (html: string) => {
  return {
    __html: DOMPurify.sanitize(html)
  };
};

export const FormPreview = ({ formContent }) => {
  const renderQuestion = (question) => {
    switch (question.type) {
      case 'input':
        return <Input type="text" placeholder="Short answer" className="w-full p-2 border rounded" disabled />;
      case 'textarea':
        return <Textarea placeholder="Long answer" className="w-full p-2 border rounded" rows="3" disabled />;
      case 'multiSelect':
        return (
          <div>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="checkbox" id={`${question.id}-${index}`} disabled className="mr-2" />
                <label htmlFor={`${question.id}-${index}`}>{option}</label>
              </div>
            ))}
          </div>
        );
      case 'singleSelect':
        return (
          <RadioGroup>
            {question.options.map((option, index) => (
              <div key={index} className="flex gap-1 items-center text-sm">
                <RadioGroupItem value={option} />
                {option}

              </div>
            ))}
          </RadioGroup>
        );
      case 'date':
        return <input type="date" className="w-full p-2 border rounded" disabled />;
      case 'range':
        return <input type="range" className="w-full" disabled />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto rounded-lg">
      {formContent.map((section) => (
        <div key={section.id} className="mb-8 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
          {section.description && (
            <div
              className="text-gray-600 mb-4 prose max-w-none"
              dangerouslySetInnerHTML={sanitizeHtml(section.description)}
            />
          )}
          {section.questions.map((question) => (
            <div key={question.id} className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {question.question}
              </label>
              {question.description && (
                <p className="text-gray-500 text-sm mb-2">{question.description}</p>
              )}
              {renderQuestion(question)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

