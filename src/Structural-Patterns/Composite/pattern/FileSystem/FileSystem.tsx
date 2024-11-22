import { FileSystemProps } from "./FileSystem.props";

const FileSystem: React.FC<FileSystemProps> = ({ item }) => {
  if (item.type === 'FILE') {
    return <div style={{ borderLeft: '1px solid #fff' }}>📄 {item.name}</div>;
  }

  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>📂 {item.name}</div>
      <div style={{ paddingLeft: '20px' }}>
        {item.children?.map((child) => (
          <FileSystem key={child.id} item={child} />
        ))}
      </div>
    </div>
  );
};

export default FileSystem;