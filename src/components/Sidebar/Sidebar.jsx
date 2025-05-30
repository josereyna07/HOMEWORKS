import MenuItem from './MenuItem';
import './Sidebar.css';

const menuData = {
  title: 'Root',
  children: [
    {
      title: 'Profile',
      link: '/profile'
    },
    {
      title: 'Messages',
      link: '/messages'
    },
    {
      title: 'Settings',
      link: '/settings',
      children: [
        {
          title: 'Account',
          link: '/settings/account'
        },
        {
          title: 'Profile',
          link: '/settings/profile'
        },
        {
          title: 'Security & Privacy',
          link: '/settings/security'
        },
        {
          title: 'Password',
          link: '/settings/password'
        },
        {
          title: 'Notification',
          link: '/settings/notification'
        }
      ]
    },
    {
      title: 'Help',
      link: '/help',
      children: [
        {
          title: "FAQ's",
          link: '/help/faqs'
        },
        {
          title: 'Submit a Ticket',
          link: '/help/ticket'
        },
        {
          title: 'Network Status',
          link: '/help/network'
        }
      ]
    },
    {
      title: 'Logout',
      link: '/logout'
    }
  ]
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      {menuData.children.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
