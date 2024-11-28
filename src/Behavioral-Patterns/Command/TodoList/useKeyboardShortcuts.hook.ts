import { useEffect } from 'react';

const useKeyboardShortcuts = (
  handleAdd: () => void,
  handleUndo: () => void,
  handleRedo: () => void
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleAdd();
      }

      if (event.ctrlKey && event.key === 'z') {
        event.preventDefault();
        handleUndo();
      } else if (event.ctrlKey && event.shiftKey && event.key === 'Z') {
        event.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleAdd, handleUndo, handleRedo]);
};

export default useKeyboardShortcuts;
