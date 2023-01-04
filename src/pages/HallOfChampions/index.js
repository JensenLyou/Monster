import { Modal } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Rogue from '../../assets/images/Rogue.png'
import './index.less'
import { changeName, payTribute } from '../../utils/setupWallet'

const HallOfChampions = () => {
  const [changeNameModal, setChangeNameModal] = useState(false)
  const [payModal, setPayModal] = useState(false)
  const [changeNameOrcId, setChangeNameOrcId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [payTributeOrcId, setPayTributeOrcId] = useState('')
  const [payTributeValue, setPayTributeValue] = useState('')

  const { t } = useTranslation()


  const inputFocusStyle = (span) => {
    span.style.top = '0px'
    span.style.fontSize = '10px'
    span.style.color = 'rgb(144, 202, 249)'
  }

  const inputBlurStyle = (span) => {
    span.style.top = '25px'
    span.style.fontSize = '16px'
    span.style.color = 'rgba(255, 255, 255, 0.7)'
  }

  const handleCloseChangeName = () => {
    const firstSpan = document.getElementsByClassName('firstSpan')[0];
    const secondSpan = document.getElementsByClassName('secondSpan')[0];
    const thirdSpan = document.getElementsByClassName('thirdSpan')[0];
    setChangeNameModal(false);
    setChangeNameOrcId('')
    setFirstName('')
    setLastName('')
    inputBlurStyle(firstSpan)
    inputBlurStyle(secondSpan)
    inputBlurStyle(thirdSpan)
  }

  const handleClosePayTribute = () => {
    const firstSpan = document.getElementsByClassName('firstSpan')[1];
    const secondSpan = document.getElementsByClassName('secondSpan')[1];
    setPayModal(false)
    setPayTributeOrcId('')
    setPayTributeValue('')
    inputBlurStyle(firstSpan)
    inputBlurStyle(secondSpan)
  }



  return (
    <>
      <div className="hallOfChampionsWrapper">
        <h1>{t('header.hallOfChampions')}</h1>
        <img src={Rogue} />
        <div className="yourChampions">
          <h1>{t('hallOfChampions.yourChampions')}</h1>
          <h2>
            {t('hallOfChampions.connectDes')}
          </h2>
          <div className="btnWrapper">
            <button
              className="changeNameBtn"
              onClick={() => {
                setChangeNameModal(true)
              }}
            >
              {t('hallOfChampions.changeName')}
            </button>
            <button
              className="payBtn"
              onClick={() => {
                setPayModal(true)
              }}
            >
              {t('hallOfChampions.payTribute')}
            </button>
          </div>
        </div>
        <div className="allChampions">
          <h1>{t('hallOfChampions.allChampions')}</h1>
        </div>
      </div>
      <Modal
        visible={changeNameModal}
        onCancel={() => {
          handleCloseChangeName()
        }}
        footer={null}
        maskClosable={true}
        closable={false}
        wrapClassName="modalClass"
        centered
      >
        <div>
          <h1>{t('hallOfChampions.changeNameTitle')}</h1>
          <h4>
            {t('hallOfChampions.changeNameDes')}
          </h4>
          <span className='firstSpan'>Orc #</span>
          <input
            value={changeNameOrcId}
            onChange={(e) => {
              setChangeNameOrcId(e.target.value)
            }}
            onFocus={() => {
              const span = document.getElementsByClassName('firstSpan')[0];
              inputFocusStyle(span)
            }}
            onBlur={() => {
              if (changeNameOrcId.length === 0) {
                const span = document.getElementsByClassName('firstSpan')[0];
                inputBlurStyle(span)
              }
            }}
          />
          <span className='secondSpan'>Champion First Name</span>
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            onFocus={() => {
              const span = document.getElementsByClassName('secondSpan')[0];
              inputFocusStyle(span)
            }}
            onBlur={() => {
              if (firstName.length === 0) {
                const span = document.getElementsByClassName('secondSpan')[0];
                inputBlurStyle(span)
              }
            }}
          />
          <span className='thirdSpan'>Champion Last Name</span>
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            onFocus={() => {
              const span = document.getElementsByClassName('thirdSpan')[0];
              inputFocusStyle(span)
            }}
            onBlur={() => {
              if (lastName.length === 0) {
                const span = document.getElementsByClassName('thirdSpan')[0];
                inputBlurStyle(span)
              }
            }}
          />
          <p>{t('hallOfChampions.changeNameDes1')}</p>
        </div>
        <div className="btnWrapper">
          <button
            className="greyBtn"
            onClick={() => {
              handleCloseChangeName()
            }}
          >
            {t('hallOfChampions.cancel')}
          </button>
          <button
            className="blueBtn"
            onClick={async () => {
              try {
                await changeName(changeNameOrcId, firstName, lastName)
              } catch (error) {
                console.log('error:', error)
              } finally {
                handleCloseChangeName()
              }
            }}
          >
            {t('hallOfChampions.changeNameBtn')}
          </button>
        </div>
      </Modal>

      <Modal
        visible={payModal}
        onCancel={() => {
          handleClosePayTribute()
        }}
        footer={null}
        maskClosable={true}
        closable={false}
        wrapClassName="modalClass"
        centered
      >
        <div>
          <h1>{t('hallOfChampions.payTributeTitle')}</h1>
          <h4>{t('hallOfChampions.payTributeDes')}</h4>
          <span className='firstSpan'>Orc #</span>
          <input
            onChange={(e) => {
              setPayTributeOrcId(e.target.value)
            }}
            onFocus={() => {
              const span = document.getElementsByClassName('firstSpan')[1];
              inputFocusStyle(span)
            }}
            onBlur={() => {
              if (payTributeOrcId.length === 0) {
                const span = document.getElementsByClassName('firstSpan')[1];
                inputBlurStyle(span)
              }
            }}
          />
          <span className='secondSpan'>ZUG</span>
          <input
            onChange={(e) => {
              setPayTributeValue(e.target.value)
            }}
            onFocus={() => {
              const span = document.getElementsByClassName('secondSpan')[1];
              inputFocusStyle(span)
            }}
            onBlur={() => {
              if (payTributeValue.length !== 0) {
                const span = document.getElementsByClassName('secondSpan')[1];
                inputBlurStyle(span)
              }
            }}
          />
        </div>
        <div className="btnWrapper">
          <button
            className="greyBtn"
            onClick={() => {
              handleClosePayTribute()
            }}
          >
            {t('hallOfChampions.cancel')}
          </button>
          <button
            className="blueBtn"
            onClick={async () => {
              try {
                await payTribute(payTributeOrcId, payTributeValue)
              } catch (error) {
                console.log('error:', error)
              } finally {
                handleClosePayTribute()
              }
            }}
          >
            {t('hallOfChampions.payTribute')}
          </button>
        </div>
      </Modal>
    </>
  )
}

export default HallOfChampions
