
import { useState } from 'react';

export default function SideBar({ isOpen }) {
  const [menuItem, setMenuItem] = useState([{
    id: 1,
    name: 'Dashboard',
    active: true,
    link: '/admin/',
    icon: <i class="bi bi-speedometer2 ms-3"></i>,
  },
  {
    id: 2,
    name: 'My Store',
    active: false,
    link: '/admin/stores',
    icon: <i class="bi bi-shop ms-3"></i>,
  },
  {
    id: 3,
    name: 'Message',
    active: false,
    link: '/admin/messages',
    icon: <i class="bi bi-envelope ms-3"></i>,
  },
  ]);

  const onMenuClick = (id) => {
    setMenuItem(menuItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: true,
        };
      }
      return {
        ...item,
        active: false,
      };
    }));
  }

  return (
    <section id="sidebar" class={`${isOpen ? `` : `hide`}`}>
      <a href="#" class="brand">
      <i class="bi bi-emoji-smile-fill mx-4"></i>
        <span class="text">AdminHub</span>
      </a>
      <ul class="side-menu top ">
        {menuItem.map((item) =>
          <li class={item.active ? `active` : ``} onClick={() => { onMenuClick(item.id) }}>
            <a href={item.link}>

              {item.icon}

              <span class="text ms-2">{item.name}</span>
            </a>
          </li>
        )}

      </ul>
      <ul class="side-menu">
        <li>
          <a href="/admin/setting" className=''>
            <i class="bi bi-gear ms-2"></i>
            <span class="text ms-3">Setting</span>
          </a>
        </li>

        <li>
          <a href="/login" class="logout">
            <i class="bi bi-box-arrow-left ms-2"></i>
            <span class="text ms-3">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
}