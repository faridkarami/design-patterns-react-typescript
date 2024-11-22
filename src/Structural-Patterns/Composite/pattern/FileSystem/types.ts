type File = {
  id: number;
  name: string;
  type: 'FILE';
};

type Folder = {
  id: number;
  name: string;
  type: 'FOLDER';
  children?: FileSystemItem[];
};

export type FileSystemItem = File | Folder;