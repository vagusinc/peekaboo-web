import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { TextAlign } from '@tiptap/extension-text-align';
import { Link } from '@tiptap/extension-link';
import { Underline } from '@tiptap/extension-underline';
import { Placeholder } from '@tiptap/extension-placeholder';
import { RichTextEditorToolbar } from "./RichTextEditorToolbox";

interface RichTextEditorProps {
  classNameLabel?: string;
  classNameInput?: string;
  value?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: (value: string) => void;
  fullHeight?: boolean;
}

const RichTextEditor = ({
  classNameLabel,
  classNameInput,
  value = '',
  name,
  label,
  placeholder,
  onChange,
  fullHeight = false,
}: RichTextEditorProps) => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: true }),
      Underline,
      Placeholder.configure({
        placeholder,
        emptyEditorClass: "is-editor-empty",
        showOnlyCurrent: true,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
    editorProps: {
      attributes: {
        class: "Prose",
        "data-placeholder": placeholder || "Type something ...",
      },
    },
  });

  const handleClick = () => {
    if (editor) {
      editor.chain().focus().run();
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={name} className={classNameLabel || 'text-black'}>
          {label.split('*')[0]}
          {label.includes('*') && <span className="text-red">*</span>}
        </label>
      )}
      <div
        className={classNameInput || "custom-input"}
        onClick={handleClick}
        tabIndex={0}
        role="textbox"
        onKeyDown={handleClick}
      >
        {editor && (
          <>
            <RichTextEditorToolbar editor={editor} />
            <div className={`p-2 min-h-[5rem] ${fullHeight ? 'max-h-full' : 'max-h-[8rem]'} cursor-text border rounded-md overflow-auto`}>
              <EditorContent editor={editor} className="Prose" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { RichTextEditor };