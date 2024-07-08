/* eslint-disable react/prop-types */
import { useState } from 'react';
import './TrelloBoard.css';
const Categories = ['To Do', 'In Progress', 'Completed'];
const TrelloBoard = ({ project, setProject }) => {
  const [data, setData] = useState([]);

  return (
    <div className='TrelloBoardWrapper'>
      <h1
        className='TrelloBoardTitle'
        onClick={() => setProject('Trello Board')}
      >
        <span> Trello Board </span>
        <span>
          {project == 'Trello Board' ? (
            <i className='fa-solid fa-chevron-up'></i>
          ) : (
            <i className='fa-solid fa-chevron-down'></i>
          )}
        </span>
      </h1>
      <hr className='horizontalLine' />
      {project == 'Trello Board' && (
        <div className='Boards'>
          {Categories.map((category, index) => {
            return (
              <Board
                category={category}
                key={index}
                data={data.filter((dt) => dt.category === category)}
                setData={setData}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const Board = ({ category, data, setData }) => {
  const [editValue, setEditValue] = useState('');
  const [categoryNew, setCategory] = useState(category);
  const [mode, setMode] = useState('V');
  const handleSave = () => {
    if (editValue.trim() != '') {
      setData((olddata) => [
        ...olddata,
        { id: Date.now(), task: editValue, category: categoryNew },
      ]);
      setMode('V');
      setEditValue('');
      setCategory(category);
    } else {
      alert('Please Enter Task');
    }
  };
  const handleCancle = () => {
    setMode('V');
  };
  return (
    <div className='board'>
      <div className='boardTitle'>
        <span className='mainTitle'>{category}</span>
        <button onClick={() => setMode('E')}>Add Task</button>
      </div>
      {mode == 'E' && (
        <div className='tasks'>
          <div className='task'>
            <span>
              <input
                value={editValue}
                placeholder='Enter Task'
                onChange={(e) => setEditValue(e.target.value)}
              />
              <select
                value={categoryNew}
                onChange={(e) => setCategory(e.target.value)}
              >
                {Categories.map((catg, index) => {
                  return (
                    <option key={index} value={catg}>
                      {catg}
                    </option>
                  );
                })}
              </select>
            </span>
            <span className='actions'>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancle}>Cancle</button>
            </span>
          </div>
        </div>
      )}
      <div className='tasks'>
        {data.map((dt) => {
          return <Task key={dt.id} data={dt} setData={setData} />;
        })}
      </div>
    </div>
  );
};

const Task = ({ data, setData }) => {
  const [editValue, setEditValue] = useState(data.task);
  const [category, setCategory] = useState(data.category);
  const [mode, setMode] = useState('V');
  const handleEdit = () => {
    setMode('E');
  };
  const handleCancle = () => {
    setMode('V');
  };
  const handleDelete = () => {
    setData((olddata) => olddata.filter((dt) => dt.id != data.id));
  };
  const handleSave = () => {
    if (editValue.trim() != '') {
      setData((olddata) =>
        olddata.map((dt) => {
          if (dt.id != data.id) return dt;
          else {
            return { ...dt, task: editValue, category: category };
          }
        })
      );
      setMode('V');
    } else {
      alert('Please Enter Task');
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setEditValue(e.target.value);
  };
  return (
    <div className='task'>
      {mode == 'V' && (
        <>
          <span>{data.task}</span>
          <span className='actions'>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </span>
        </>
      )}
      {mode == 'E' && (
        <>
          <span>
            <input value={editValue} onChange={(e) => handleChange(e)} />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {Categories.map((catg, index) => {
                return (
                  <option key={index} value={catg}>
                    {catg}
                  </option>
                );
              })}
            </select>
          </span>

          <span className='actions'>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancle}>Cancle</button>
          </span>
        </>
      )}
    </div>
  );
};

export default TrelloBoard;
