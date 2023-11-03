import { useState } from "react";
function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value
  
  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };
  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map(function(item) {
      return item.toUpperCase();
    });
    setResult(mapped.join(", "));
  };
  
  const handleReduce = function () {
      const reduced = array.reduce(function (acc, c) { 
          return acc + " + " + c;      
      });
      setResult(reduced);
  };

  const handlePush = function () {
    if (query==="") {
      alert("추가하시려는 값을 입력해주세요.");
      return false;
    }
    // array.push(query);  //setArray 안했는데 왜 바뀌지 원본?
    // const newArr = [...array];

    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

const handleSlice = function () {
  const newArr = array.slice(0, 4); //복사본을 반환
  setResult(newArr.join(", "));
  
};

const handleSplice = function () {
  const newArr = [...array];
  newArr.splice(3,1,"lime");
  setResult(newArr.join(", "));
};

const handleIndexOf = function () {
  const result = array.indexOf(query);
  setResult(result);
};

const handleIncludes = function () {
  const result = array.includes(query);
  setResult(`${result}`); //true, false 문자열로
};

const handleFind = function () {
  const result = array.find( function (item) {
    return item.includes(query);
  });
  setResult((result!==undefined) ? `${result}`:`Not Found`);
};

const handleSome = function () { //적어도 하나 이상 참이면 true
  const result = array.some((item)=> item.includes(query));
  setResult(`${result}`);
};

const handleEvery = function () {
  const result = array.every((item)=>item.length >= 2);
  setResult(`${result}`);
};

const handleSort = function () {
  array.sort();
  setResult(array.join(", ")); // ?? 
};

const handleJoin = function () {
  setResult(array.join(", "));
};

const divStyle = {
  textAlign : "center",
};

const borderStyle = {
  border : "1px solid red",
  margin : "20px"
}


  return (
    <div style={divStyle}>
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>

      </div>
      <div style={{
        border : "1px solid black",
        margin : "20px"
      }}>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div style={borderStyle}>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
export default App;