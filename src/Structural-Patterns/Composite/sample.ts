import { FileSystemItem } from './pattern/FileSystem/types';

const sample: FileSystemItem = {
  id: 1,
  name: 'root',
  type: 'FOLDER',
  children: [
    { id: 2, name: 'file-1.txt', type: 'FILE' },
    {
      id: 3,
      name: 'subFolder-1',
      type: 'FOLDER',
      children: [
        { id: 4, name: 'file-2.txt', type: 'FILE' },
        { id: 5, name: 'file-3.txt', type: 'FILE' },
      ],
    },
  ],
};

export default sample;
