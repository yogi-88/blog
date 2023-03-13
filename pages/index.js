import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
// import styles from '@/styles/global.css'


export default function header() {
  return (
    <div>
      <Header></Header>
    </div>
  )
}
