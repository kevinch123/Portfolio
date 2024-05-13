import { useTranslation } from 'react-i18next';
import React from 'react';

const Footer = () => {
  const { t } = useTranslation();


  return (
    <footer className='flex flex-row items-center justify-between p-1 bg-app-white'>
      <p>{t('hi')}</p>
    </footer>
  );
};

export default Footer;
