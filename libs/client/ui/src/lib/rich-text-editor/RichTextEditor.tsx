import React from 'react';
import { useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

import { IconButton } from '..';
import { Tooltip } from '@nutri/client-ui';
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  X,
  Trash,
  Pilcrow,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  Quote,
  Minus,
  CornerDownLeft,
  Undo,
  Redo,
} from 'lucide-react';

// todo fix ts and add variables management

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="control-group flex flex-wrap justify-between gap-1 px-1 border-b border-gray-200">
      <div className='flex gap-1'>
        <Tooltip label='Bold' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleBold().run()}
            isDisabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'bg-gray-100 rounded-none' : ''}
            icon={<Bold className="size-4" />}
            aria-label="Toggle bold"

          />
        </Tooltip>

        <Tooltip label='Italic' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isDisabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'bg-gray-100 rounded-none' : ''}
            icon={<Italic className="size-4" />}
            aria-label="Toggle italic"

          />
        </Tooltip>

        <Tooltip label='Strike' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isDisabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'bg-gray-100 rounded-none' : ''}
            icon={<Strikethrough className="size-4" />}
            aria-label="Toggle strikethrough"
          />
        </Tooltip>

        <Tooltip label='Code' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleCode().run()}
            isDisabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive('code') ? 'bg-gray-100 rounded-none' : ''}
            icon={<Code className="size-4" />}
            aria-label="Toggle code"
          />
        </Tooltip>

        <Tooltip label='Clear marks' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
            icon={<X className="size-4" />}
            aria-label="Clear all marks"
          />
        </Tooltip>

        <Tooltip label='Clear nodes' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().clearNodes().run()}
            icon={<Trash className="size-4" />}
            aria-label="Clear all nodes"
          />
        </Tooltip>

        <Tooltip label='Paragraph' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive('paragraph') ? 'bg-gray-100 rounded-none' : ''}
            icon={<Pilcrow className="size-4" />}
            aria-label="Set paragraph"
          />
        </Tooltip>

        <Tooltip label='Heading 1' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'bg-gray-100 rounded-none' : ''}
            icon={<Heading1 className="size-4" />}
            aria-label="Toggle heading 1"
          />
        </Tooltip>

        <Tooltip label='Heading 2' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-100 rounded-none' : ''}
            icon={<Heading2 className="size-4" />}
            aria-label="Toggle heading 2"
          />
        </Tooltip>

        <Tooltip label='Heading 3' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'bg-gray-100 rounded-none' : ''}
            icon={<Heading3 className="size-4" />}
            aria-label="Toggle heading 3"
          />
        </Tooltip>

        <Tooltip label='Heading 4' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={editor.isActive('heading', { level: 4 }) ? 'bg-gray-100 rounded-none' : ''}
            icon={<Heading4 className="size-4" />}
            aria-label="Toggle heading 4"
          />
        </Tooltip>

        <Tooltip label='Heading 5' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={editor.isActive('heading', { level: 5 }) ? 'bg-gray-100 rounded-none' : ''}
            icon={<Heading5 className="size-4" />}
            aria-label="Toggle heading 5"
          />
        </Tooltip>

        <Tooltip label='Heading 6' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
            className={editor.isActive('heading', { level: 6 }) ? 'bg-gray-100 rounded-none' : ''}
            icon={<Heading6 className="size-4" />}
            aria-label="Toggle heading 6"
          />
        </Tooltip>

        <Tooltip label='Bullet list' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'bg-gray-100 rounded-none' : ''}
            icon={<List className="size-4" />}
            aria-label="Toggle bullet list"
          />
        </Tooltip>

        <Tooltip label='Ordered list' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'bg-gray-100 rounded-none' : ''}
            icon={<ListOrdered className="size-4" />}
            aria-label="Toggle ordered list"
          />
        </Tooltip>

        <Tooltip label='Code block' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? 'bg-gray-100 rounded-none' : ''}
            icon={<Code className="size-4" />}
            aria-label="Toggle code block"
          />
        </Tooltip>

        <Tooltip label='Blockquote' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'bg-gray-100 rounded-none' : ''}
            icon={<Quote className="size-4" />}
            aria-label="Toggle blockquote"
          />
        </Tooltip>

        <Tooltip label='Horizontal rule' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            icon={<Minus className="size-4" />}
            aria-label="Insert horizontal rule"
          />
        </Tooltip>

        <Tooltip label='Hard break' side="top">
          <IconButton
            variant='ghost'
            onClick={() => editor.chain().focus().setHardBreak().run()}
            icon={<CornerDownLeft className="size-4" />}
            aria-label="Insert hard break"
          />
        </Tooltip>

      </div>




      <div className='flex'>
        <Tooltip label='Undo' side="top">
          <IconButton
            onClick={() => editor.chain().focus().undo().run()}
            isDisabled={!editor.can().chain().focus().undo().run()}
            icon={<Undo className="size-4" />}
            aria-label="Undo"
            className='rounded-none '
            variant='ghost'

          />
        </Tooltip>

        <Tooltip label='Redo' side="top">
          <IconButton
            onClick={() => editor.chain().focus().redo().run()}
            isDisabled={!editor.can().chain().focus().redo().run()}
            icon={<Redo className="size-4" />}
            aria-label="Redo"
            className='rounded-none '
            variant='ghost'
          />
        </Tooltip>
      </div>



    </div>
  );
};
interface TiptapEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const RichTextEditor: React.FC<TiptapEditorProps> = ({
  value,
  onChange,
  placeholder = 'Enter your text here...',
  className = '',
}) => {
  const editor = useEditor({
    extensions: [StarterKit, Link, Image],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none',
      },
    },
  });

  return (
    <div
      className={`tiptap-editor border border-gray-200 rounded-md ${className}`}
    >
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} className="p-4" />
    </div>
  );
};
