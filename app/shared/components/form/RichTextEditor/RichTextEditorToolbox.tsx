import { Editor } from "@tiptap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faItalic, faUnderline, faStrikethrough, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faLink } from "@fortawesome/free-solid-svg-icons";

const RichTextEditorToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap mb-2 text-black p-2 rounded shadow-sm border">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`mr-2 p-2 ${editor.isActive('bold') ? 'bg-gray-100 text-blue' : 'text-black'} rounded`}
        title="Bold"
      >
        <FontAwesomeIcon icon={faBold} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`mr-2 p-2 ${editor.isActive('italic') ? 'bg-gray-100 text-blue' : 'text-black'} rounded`}
        title="Italic"
      >
        <FontAwesomeIcon icon={faItalic} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`mr-2 p-2 ${editor.isActive('underline') ? 'bg-gray-100 text-blue' : 'text-black'} rounded`}
        title="Underline"
      >
        <FontAwesomeIcon icon={faUnderline} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`mr-2 p-2 ${editor.isActive('strike') ? 'bg-gray-100 text-blue' : 'text-black'} rounded`}
        title="Strikethrough"
      >
        <FontAwesomeIcon icon={faStrikethrough} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`mr-2 p-2 ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-100 text-blue' : 'text-black'} rounded`}
        title="Align Left"
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`mr-2 p-2 ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-100 text-blue' : 'text-black'} rounded`}
        title="Align Center"
      >
        <FontAwesomeIcon icon={faAlignCenter} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`mr-2 p-2 ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-100 text-blue' : 'text-black'} rounded`}
        title="Align Right"
      >
        <FontAwesomeIcon icon={faAlignRight} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={`mr-2 p-2 ${editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-100 text-blue' : 'text-black'} rounded`}
        title="Justify"
      >
        <FontAwesomeIcon icon={faAlignJustify} />
      </button>

      <button
        onClick={() => editor.chain().focus().setLink({ href: 'https://example.com' }).run()}
        className={`mr-2 p-2 ${editor.isActive('link') ? 'bg-gray-100 text-blue' : 'text-black'} rounded`}
        title="Insert Link"
      >
        <FontAwesomeIcon icon={faLink} />
      </button>

    </div>

  );
};

export { RichTextEditorToolbar };
