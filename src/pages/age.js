import styles from "./index.module.scss";
import TextInput from "../components/TextInput";
import Link from "next/link";
import { Context } from './store'
import { useContext, useState } from 'react'

function storeInputInContext(input) {
  const context = useContext(Context)
  context.age = input
}

export default function Home() {
  const [input, setInput] = useState('');
  return (
    <div className={styles.centerAlign}>
      <TextInput question="How old are you?" value={input} onInput={e => setInput(e.target.value)} />
      <Link href='thanks' onClick={storeInputInContext(input)}>
        <button>Submit</button>
      </Link>
    </div>
  );
}
