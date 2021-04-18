import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GoalBtn from '../comps/GoalBtn'

export default function Home() {
  return <div>
    <div className="logo">
      <LogoComponent />
      </div>
    <div className="text">
      <TextComponent />
      </div>
    <div className="btn">
      <GoalBtn />
      <GoalBtn />
      <GoalBtn />
    </div>
  </div>
}