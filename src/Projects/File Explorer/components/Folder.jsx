import { useState } from 'react';

const Folder = ({ handleInsertNode = () => {}, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div
        className='FolderParent'
        style={{ marginTop: '5px', width: explorer.name == 'root' && '98%' }}
      >
        <div
          className='folder'
          onClick={() => setExpand((prev) => !prev)}
          style={{ borderBottom: expand && '1px solid grey' }}
        >
          <span className='FolderTitle'>📁 {explorer.name}</span>
          <span className='btns'>
            <button
              className='button'
              onClick={(e) => handleNewFolder(e, true)}
            >
              <i className='fa-solid fa-folder-plus'></i> Add Folder
            </button>
            <button
              className='button'
              onClick={(e) => handleNewFolder(e, false)}
            >
              <i className='fa-solid fa-file-circle-plus'></i> File
            </button>
          </span>
        </div>
        {expand && (
          <div style={{ paddingLeft: '25px' }}>
            {showInput.visible && (
              <div className='inputContainer'>
                <span>{showInput.isFolder ? '📁' : '📄'}</span>
                <input
                  type='text'
                  className='inputContainer__input'
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                  onKeyDown={onAddFolder}
                  autoFocus
                />
              </div>
            )}
            {explorer.items.map((exp) => {
              return (
                <Folder
                  explorer={exp}
                  key={exp.id}
                  handleInsertNode={handleInsertNode}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  } else {
    return <span className='file'>📄{explorer.name}</span>;
  }
};

export default Folder;
