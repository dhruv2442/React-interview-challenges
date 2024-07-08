import { useState } from 'react';
import './accordian.css';

const Accordian = ({ project, setProject }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = [
    {
      id: 1,
      title: 'data 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      title: 'data 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      title: 'data 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
  return (
    <div className='AccordianWrapper'>
      <h1 className='AccordianTitle' onClick={() => setProject('Accordian')}>
        <span>Accordian</span>
        <span>
          {project == 'Accordian' ? (
            <i className='fa-solid fa-chevron-up'></i>
          ) : (
            <i className='fa-solid fa-chevron-down'></i>
          )}
        </span>
      </h1>
      <hr className='horizontalLine' />
      {project == 'Accordian' && (
        <div className='Accordians'>
          {data.map((ele) => {
            return (
              <SingleAccordian
                key={ele.id}
                selectedTab={selectedTab}
                changeTab={setSelectedTab}
                id={ele.id}
                title={ele.title}
                desc={ele.desc}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const SingleAccordian = ({ selectedTab, changeTab, title, desc, id }) => {
  const handleChange = () => {
    if (selectedTab == id) {
      changeTab(0);
    } else {
      changeTab(id);
    }
  };
  return (
    <div className='Accordian'>
      <div className='AccordianHead' onClick={handleChange}>
        <span className='heading'>
          <span>{selectedTab == id ? '🔽' : '▶️'}</span>
          {title}
        </span>
        <span>
          {selectedTab == id ? (
            <i className='fa-solid fa-chevron-up'></i>
          ) : (
            <i className='fa-solid fa-chevron-down'></i>
          )}
        </span>
      </div>

      {selectedTab == id && <p className='AccordianDesc'>{desc}</p>}
    </div>
  );
};

export default Accordian;
