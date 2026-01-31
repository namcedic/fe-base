'use client';
import { useEffect, useState } from 'react';

import Image from '@root/components/image/img';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeButton, setActiveButton] = useState('all');
  const initialExtensionList = [
    {
      logo: './static/images/logo-devlens.svg',
      name: 'DevLens',
      description: 'Quickly inspect page layouts and visualize element boundaries.',
      isActive: true,
    },
    {
      logo: './static/images/logo-style-spy.svg',
      name: 'StyleSpy',
      description: 'Instantly analyze and copy CSS from any webpage element.',
      isActive: true,
    },
    {
      logo: './static/images/logo-speed-boost.svg',
      name: 'SpeedBoost',
      description: 'Optimizes browser resource usage to accelerate page loading.',
      isActive: false,
    },
    {
      logo: './static/images/logo-json-wizard.svg',
      name: 'JSONWizard',
      description: 'Formats, validates, and prettifies JSON responses in-browser.',
      isActive: true,
    },
    {
      logo: './static/images/logo-tab-master-pro.svg',
      name: 'TabMaster Pro',
      description: 'Organizes browser tabs into groups and sessions.',
      isActive: true,
    },
    {
      logo: './static/images/logo-viewport-buddy.svg',
      name: 'ViewportBuddy',
      description: 'Simulates various screen resolutions directly within the browser.',
      isActive: false,
    },
    {
      logo: './static/images/logo-markup-notes.svg',
      name: 'Markup Notes',
      description:
        'Enables annotation and notes directly onto webpages for collaborative debugging.',
      isActive: true,
    },
    {
      logo: './static/images/logo-grid-guides.svg',
      name: 'GridGuides',
      description: 'Overlay customizable grids and alignment guides on any webpage.',
      isActive: false,
    },
    {
      logo: './static/images/logo-palette-picker.svg',
      name: 'Palette Picker',
      description: 'Instantly extracts color palettes from any webpage.',
      isActive: true,
    },
    {
      logo: './static/images/logo-link-checker.svg',
      name: 'LinkChecker',
      description: 'Scans and highlights broken links on any page.',
      isActive: true,
    },
    {
      logo: './static/images/logo-dom-snapshot.svg',
      name: 'DOM Snapshot',
      description: 'Capture and export DOM structures quickly.',
      isActive: false,
    },
    {
      logo: './static/images/logo-console-plus.svg',
      name: 'ConsolePlus',
      description: 'Enhanced developer console with advanced filtering and logging.',
      isActive: true,
    },
  ];
  const [extensions, setExtensions] = useState(initialExtensionList);

  const handleSwitchButton = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAllButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;

    setActiveButton(value);
  };

  const handleToggleActive = (name: string, active: boolean) => {
    setExtensions((prev) =>
      prev.map((item) => (item?.name === name ? { ...item, isActive: active } : item))
    );
  };

  const handleRemoveExtension = (name: string) => {
    setExtensions((prev) => prev.filter((item) => item?.name !== name));
  };

  useEffect(() => {
    if (activeButton === 'all') {
      setExtensions(initialExtensionList);
    }
    if (activeButton === 'active') {
      setExtensions(initialExtensionList?.filter((item) => item.isActive));
    }
    if (activeButton === 'inactive') {
      setExtensions(initialExtensionList?.filter((item) => !item.isActive));
    }
  }, [activeButton, initialExtensionList]);

  return (
    <div className={`home-page ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <div className="container">
        <div className="extension">
          <div className="icon">
            <Image src="static/images/logo.svg" />
          </div>

          <button className="switch-button" type="button" onClick={handleSwitchButton}>
            <Image
              src={isDarkMode ? 'static/images/icon-sun.svg' : 'static/images/icon-moon.svg'}
            />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="extension-title">
          <div className="title"> Extension List</div>
          <div className="buttons">
            <button
              className={`button ${activeButton === 'all' ? 'all' : ''}`}
              type="button"
              value="all"
              onClick={handleAllButton}
            >
              All
            </button>
            <button
              className={`button ${activeButton === 'active' ? 'active' : ''}`}
              type="button"
              value="active"
              onClick={handleAllButton}
            >
              Active
            </button>
            <button
              className={`button ${activeButton === 'inactive' ? 'inactive' : ''}`}
              type="button"
              value="inactive"
              onClick={handleAllButton}
            >
              Inactive
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="extension-list flex w-full flex-wrap gap-2">
          {(extensions || [])
            // .filter((item) => {
            //   if (activeButton === 'active') {
            //     return item.isActive ? item : null;
            //   }
            //   if (activeButton === 'inactive') {
            //     return !item.isActive ? item : null;
            //   }
            //   return item;
            // })
            .map((item, index) => (
              <div className="extension-item flex flex-col justify-between" key={index}>
                <div className="extension-item-above flex gap-5 py-5">
                  <Image src={item.logo} alt={item.name} className="logo h-16 w-16" />
                  <div className="extension-item-content text-white">
                    <span className="text-lg">{item.name}</span>
                    <div className="extension-item-description text-xl">
                      <span>{item.description}</span>
                    </div>
                  </div>
                </div>
                <div className="extension-item-below flex w-full items-center justify-between">
                  <button
                    type="button"
                    className="remove-button text-base"
                    onClick={() => handleRemoveExtension(item.name)}
                  >
                    Remove
                  </button>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={item.isActive}
                      onChange={(e) => handleToggleActive(item.name, e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
