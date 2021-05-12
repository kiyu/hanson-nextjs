import { styles } from './styles.css';
import { FormEvent, useEffect, useState } from 'react';

interface Props {
  onChangeKeyword?: (v: string) => void;
}

export default function SearchWindow(props: Props): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');

  const onInput = (ev: FormEvent<HTMLInputElement>) => {
    const target = ev.target as HTMLInputElement;
    setInputValue(target.value);
  };

  //値が変わった時に実行する
  useEffect(() => {
    props.onChangeKeyword(inputValue);
    console.log(inputValue);
  }, [inputValue]);

  return (
    <>
      <div className="SearchWindow">
        <input type="text" name="keyword" className="SearchWindowInput" value={inputValue} onInput={onInput} />
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
