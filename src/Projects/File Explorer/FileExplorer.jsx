import { useState } from 'react';
import explorer from './data/FolderData';
import Folder from './components/Folder';
import useTraverseTree from './hooks/use-taverse-tree';
import './fileExplorer.css';

const FileExplorer = ({ project, setProject }) => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className='folderWrapper'>
      <h1
        className='FileExplorerTitle'
        onClick={() => setProject('File Explorer')}
      >
        <span> File Explorer </span>
        <span>
          {project == 'File Explorer' ? (
            <i className='fa-solid fa-chevron-up'></i>
          ) : (
            <i className='fa-solid fa-chevron-down'></i>
          )}
        </span>
      </h1>
      <hr className='horizontalLine' />
      {project == 'File Explorer' && (
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      )}
    </div>
  );
};

export default FileExplorer;
