import React from 'react'
// import styles from './styles.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por Kédma Costa: / {' '}
        <a className='hover:underline' href="#">www.megweb.ga</a>/ {' '}
        <a className='hover:underline' href="#">Linkedin</a> / {' '}
        <a className='hover:underline' href="#">Git</a>
        <div className='mt-4'>
          <img className='inline p-4' src="./logo_semana_fsm.png" alt="Full Stack Master" />
          <img className='inline p-4' src="./logo_devpleno.png" alt="Full Stack Master" />
        </div>
      </div>
    </div>
  )
}
export default Footer