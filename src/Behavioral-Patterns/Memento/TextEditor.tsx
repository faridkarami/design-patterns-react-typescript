import { useRef, useState } from 'react';
import Editor from './pattern/classes/editor.class';
import Caretaker from './pattern/classes/caretaker.class';

const TextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState<string>('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const editorRef = useRef(new Editor());
  const caretakerRef = useRef(new Caretaker());

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newState = e.target.value;
    setEditorState(newState);
    editorRef.current.setState(newState);
  };

  const saveState = () => {
    caretakerRef.current.addMemento(editorRef.current.saveStateToMemento());
    setHistoryIndex(caretakerRef.current['mementoList'].length - 1);
  };

  const restoreState = () => {
    if (historyIndex > -1) {
      const memento = caretakerRef.current.getMemento(historyIndex);
      editorRef.current.restoreStateFromMemento(memento);
      setEditorState(editorRef.current.getState());
    }
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      const memento = caretakerRef.current.getMemento(historyIndex - 1);
      editorRef.current.restoreStateFromMemento(memento);
      setEditorState(editorRef.current.getState());
    }
  };

  return (
    <div>
      <textarea
        value={editorState}
        onChange={handleChange}
        rows={4}
        cols={50}
        placeholder='Type something...'
      ></textarea>
      <div>
        <button onClick={saveState}>Save State</button>
        <button onClick={restoreState}>Restore State</button>
        <button onClick={undo}>Undo</button>
      </div>
      <p>Current Editor State:</p>
      <pre>{editorState}</pre>
    </div>
  );
};

export default TextEditor;
