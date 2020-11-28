import styles from "./index.module.scss";
import TextInput from "../components/TextInput";
import Link from "next/link";
import { Context } from './store'
import { useContext, useState } from 'react'

function storeInputInContext(input) {
  const context = useContext(Context)
  context.city = input
}

export default function Home() {
  const [input, setInput] = useState('');
  return (
    <div className={styles.centerAlign}>
      <TextInput question="What city are you from?" value={input} onInput={e => setInput(e.target.value)} />
      <Link href='age' onClick={storeInputInContext(input)}>
        <button>Submit</button>
      </Link>
    </div>
  );
}
