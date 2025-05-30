import { useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="menu-item">
      <div 
        className={`menu-title ${hasChildren ? 'has-children' : ''} ${isOpen ? 'open' : ''}`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <span>{item.title}</span>
        {hasChildren && <span className="arrow">{isOpen ? '▼' : '▶'}</span>}
      </div>
      {hasChildren && isOpen && (
        <div className="submenu">
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    children: PropTypes.array
  }).isRequired
};

export default MenuItem;
