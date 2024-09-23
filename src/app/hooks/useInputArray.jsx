import { useCallback, useState } from "react";
export const useInputArray = () => {
  const [array, setArray] = useState([]);
  const [text, setText] = useState("");
  const hundleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      //5文字以上入力したらアラート出してリターンで文字数制御
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim()); //スペース打たせない制御。他にも色々ある
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します。");
        return prevArray;
      }
      return [...prevArray, text]; //スプレッド構文→MDN見て学習　破壊的メソッドは基本的に使ってはいけないため
    });
  }, [text]);
  return { array, text, hundleChange, handleAdd };
};
