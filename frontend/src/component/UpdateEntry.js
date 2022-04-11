import React, { useState, useEffect } from "react";
import style from "../css/Update.module.css";
import ViewDataCard from "./ViewDataCard";
import { cls, feesMap } from "./data";

// const UpdateEntry = () => {
//   const [getQueryData, setQueryData] = useState({
//     rollNo: "",
//     year: "",
//     cls: "",
//   });

//   // to take data
//   const [resData, setResData] = useState([]);

//   // to show the data
//   const [showData, setShowData] = useState(false);

//   useEffect(() => {
//     if (!resData.length || resData == undefined) {
//       setShowData(false);
//       return;
//     }
//     // console.log("from Update page", resData.length);
//     setShowData(true);
//     console.log("from useEffect", resData);

//     // <DataCard response={resData} />;
//   }, [resData]);

//   const handleClickSubmit = async (e) => {
//     // to get data
//     const { rollNo, year, cls } = getQueryData;

//     const url = `/userEntry/?year=${year}&cls=${cls}&rollNo=${rollNo}`;

//     // console.log(url);

//     const res = await fetch(url, {
//       method: "GET",
//       header: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });

//     const response = await res.json();

//     setResData(response.obj);
//   };

//   const handeSubmit = (e) => {
//     e.preventDefault();

//     setQueryData({
//       rollNo: "",
//       year: "",
//       cls: "",
//     });

//     setResData([]);
//   };
//   return (
//     <>
//       <form onSubmit={handeSubmit} method="GET">
//         <div className={style.container}>
//           <div className={style.box}>
//             <label htmlFor="class">class</label>
//             <select
//               type="number"
//               name="class"
//               id="class"
//               required
//               value={getQueryData.cls}
//               onChange={(e) =>
//                 setQueryData({ ...getQueryData, cls: e.target.value })
//               }
//               //   placeholder="select"
//             >
//               <option value="" hidden>
//                 Select
//               </option>
//               {cls.map((element, i) => (
//                 <option key={i} className={style.opt} value={element}>
//                   {element}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className={style.box}>
//             <label htmlFor="year">year</label>
//             <input
//               type="number"
//               value={getQueryData.year}
//               placeholder="year"
//               name="year"
//               id="year"
//               min="1900"
//               max="2099"
//               onChange={(e) =>
//                 setQueryData({ ...getQueryData, year: e.target.value })
//               }
//               required
//             />
//           </div>
//           <div className={style.box}>
//             <label htmlFor="year">Roll No:</label>
//             <input
//               type="number"
//               name="Roll Number"
//               id="Roll Number"
//               required
//               value={getQueryData.rollNo}
//               placeholder="enter"
//               onChange={(e) =>
//                 setQueryData({ ...getQueryData, rollNo: e.target.value })
//               }
//             />
//           </div>
//         </div>
//         <div className={style.submitDiv}>
//           <input
//             className={style.submitBtn}
//             type="submit"
//             value="submit"
//             onClick={handleClickSubmit}
//           />
//         </div>
//       </form>
//       {/* {console.log(resData[0])} */}
//       {showData ? <ViewDataCard resp={resData[0]} /> : null}
//     </>
//   );
// };

// export default UpdateEntry;

const UpdateEntry = () => {
  const [getQueryData, setQueryData] = useState({
    rollNo: "",
    year: "",
    cls: "",
  });

  // to take data
  const [resData, setResData] = useState([]);

  // to show the data
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (!resData.length) {
      setShowData(false);
      return;
    }
    console.log("from Update page", resData.length);
    setShowData(true);
    console.log(resData);

    // <DataCard response={resData} />;
  }, [resData]);

  const handleClickSubmit = async (e) => {
    // to get data
    const { rollNo, year, cls } = getQueryData;

    const url = `/userEntry/?year=${year}&cls=${cls}&rollNo=${rollNo}`;

    // console.log(url);

    const res = await fetch(url, {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();

    setResData(response.obj);
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    // console.log(getQueryData);
    // setShowData(!showData);
    // console.log(showData);
    setQueryData({
      rollNo: "",
      year: "",
      cls: "",
    });

    // setResData([]);
  };
  return (
    <>
      <form onSubmit={handeSubmit} method="GET">
        <div className={style.container}>
          <div className={style.box}>
            <label htmlFor="class">class</label>
            <select
              type="number"
              name="class"
              id="class"
              required
              value={getQueryData.cls}
              onChange={(e) =>
                setQueryData({ ...getQueryData, cls: e.target.value })
              }
              //   placeholder="select"
            >
              <option value="" hidden>
                Select
              </option>
              {cls.map((element, i) => (
                <option key={i} className={style.opt} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </div>
          <div className={style.box}>
            <label htmlFor="year">year</label>
            <input
              type="number"
              value={getQueryData.year}
              placeholder="year"
              name="year"
              id="year"
              min="1900"
              max="2099"
              onChange={(e) =>
                setQueryData({ ...getQueryData, year: e.target.value })
              }
              required
            />
          </div>
          <div className={style.box}>
            <label htmlFor="year">Roll No:</label>
            <input
              type="number"
              name="Roll Number"
              id="Roll Number"
              required
              value={getQueryData.rollNo}
              placeholder="enter"
              onChange={(e) =>
                setQueryData({ ...getQueryData, rollNo: e.target.value })
              }
            />
          </div>
        </div>
        <div className={style.submitDiv}>
          <input
            className={style.submitBtn}
            type="submit"
            value="submit"
            onClick={handleClickSubmit}
          />
        </div>
      </form>
      {showData ? <ViewDataCard resp={resData[0]} /> : null}
    </>
  );
};

export default UpdateEntry;
