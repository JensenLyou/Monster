import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
import './App.less'

const App = (props) => {

  const { t } = useTranslation()

  return (
    <div className='AppContainer'>
      <Header />
      <div>

        <Alert className='alertWrapper' message={
          <Marquee pauseOnHover gradient={false}>
            {t('mention')}
          </Marquee>
        } closable={true} banner />
        {props.children}
      </div>
      <Footer className="footer" />
    </div >
  )
}

export default App;