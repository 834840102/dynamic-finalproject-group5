import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LogoComponent from '../comps/LogoComponent';
import {useRouter} from 'next/router';

const HomeCont = styled
export default function Home() {
    const sub = "nothing sub";
    const big = "nothing big";
  return (
    <div>
        <div className="Logo">
            <LogoComponent />
        </div>
    </div>
  )
}
