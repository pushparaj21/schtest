import React, { useEffect, useState } from "react";
import style from "../css/ViewDataCard.module.css";

const monthArrayList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const ViewDataCard = ({ resp }) => {
  // const [updateData, setUpdatedData] = useState({
  //   months: new Set(),
  // });

  useEffect(() => console.log(resp[0].Name));

  const n = "shivam";
  const fatherName = "bhanu [ratap chandra sekhar yadav chandel bhadinde";
  const motherName = "bhanu [ratap chandra sekhar yadav chandel bhadinde";
  const rollNo = "11";
  const cls = "NUR";
  const year = "2019";

  // useEffect(() =>
  //   setUpdatedData({
  //     ...updateData,
  //     months: updateData["months"].add(months),
  //   })
  // );

  return (
    <div className={style.main}>
      {resp.map((item, index) => {
        const months = ["Jan", "Feb"];
        // const [months, setMonths] = useState({ ...resp.months });

        var monthsdata = new Set();
        months.forEach((itemdata) => monthsdata.add(itemdata));

        console.log("experiment", monthsdata);
        const disable = (element) => {
          console.log(months.indexOf(element));
          return months.indexOf(element) == -1 ? false : true;
        };
        const handleOnClickSubmit = (e) => {
          e.preventDefault();
          console.log(monthsdata);
        };
        return (
          <form className={style.innerMainBox} action="">
            <div className={style.title}>Submit Fees</div>
            <div className={style.schoolRelDt}>
              <div>
                <label htmlFor="Name">Name</label>
                <input
                  className={style.inputBox}
                  type="text"
                  name="Name"
                  id="Name"
                  // value={resp.Name}
                  value={item.Name}
                  disabled
                  // onChange={(e) => {
                  //   setRawData({ ...rawData, Name: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                  // }}
                />
              </div>
              <div>
                <label htmlFor="rollNo">Roll No:</label>{" "}
                <input
                  className={style.inputBox}
                  type="number"
                  name="rollNo"
                  id="rollNo"
                  disabled
                  value={item.rollNo}
                  // onChange={(e) => {
                  //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                  // }}
                />
              </div>
              <div>
                <label htmlFor="cls">Class</label>{" "}
                <input
                  className={style.inputBox}
                  type="text"
                  name="cls"
                  id="cls"
                  disabled
                  size="4"
                  value={item.cls}
                  // onChange={(e) => {
                  //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                  // }}
                />
              </div>
              <div>
                <label htmlFor="year">Year</label>{" "}
                <input
                  className={style.inputBox}
                  type="number"
                  name="year"
                  id="year"
                  disabled
                  value={item.year}
                  // onChange={(e) => {
                  //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                  // }}
                />
              </div>
            </div>
            <div className={style.personalInfo}>
              <div>
                <label htmlFor="FatherName">FatherName</label>{" "}
                <input
                  className={style.inputBox}
                  type="text"
                  name="FatherName"
                  id="FatherName"
                  disabled
                  value={item.fatherName}
                  // onChange={(e) => {
                  //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                  // }}
                />
              </div>
              <div>
                <label htmlFor="MotherName">MotherName</label>{" "}
                <input
                  className={style.inputBox}
                  type="text"
                  name="MotheraName"
                  id="MotheraName"
                  disabled
                  value={item.motherName}
                  // onChange={(e) => {
                  //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                  // }}
                />
              </div>
            </div>
            <div className={style.monthsToupdate}>Months</div>
            <div className={style.listMonth}>
              {months.map((element, i) => {
                return (
                  <div key={i}>
                    <input
                      type="checkbox"
                      name={element}
                      id={element}
                      checked
                      disabled={disable(element)}
                      value={element}
                    />
                    <label htmlFor={element}>{element}</label>
                  </div>
                );
              })}

              {monthArrayList.map((element, i) => {
                if (months.indexOf(element) === -1) {
                  // console.log("mil gya", months.indexOf(element));
                  return (
                    <div key={i}>
                      <input
                        type="checkbox"
                        name={element}
                        id={element}
                        value={element}
                        onChange={(e) => {
                          if (e.target.checked) {
                            // setUpdatedData({
                            //   ...updateData,
                            //   months: updateData["months"].add(e.target.value),
                            // });

                            monthsdata.add(e.target.value);
                          } else {
                            monthsdata.delete(e.target.value);
                            // updateData.months.delete(e.target.value);
                          }
                        }}
                      />
                      <label htmlFor={element}>{element}</label>
                    </div>
                  );
                }
              })}
            </div>
            <input
              className={style.submitBtn}
              // onClick={handleClickSubmit}
              // onClick={() => alert("onClick event")}
              type="submit"
              onClick={handleOnClickSubmit}
            />
          </form>
        );
      })}
    </div>
  );
};

export default ViewDataCard;

// 2ndimport React, { useEffect, useState } from "react";
import style from "../css/ViewDataCard.module.css";

const monthArrayList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const ViewDataCard = ({ resp }) => {
  // const [updateData, setUpdatedData] = useState({
  //   months: new Set(),
  // });

  useEffect(() => console.log(resp[0].Name));

  const handleOnClickSubmit = (e) => {
    e.preventDefault();
    console.log(monthsdata);
  };

  // const n = "shivam";
  // const fatherName = "bhanu [ratap chandra sekhar yadav chandel bhadinde";
  // const motherName = "bhanu [ratap chandra sekhar yadav chandel bhadinde";
  // const rollNo = "11";
  // const cls = "NUR";
  // const year = "2019";
  // const months = ["Jan", "Feb"];
  // const [months, setMonths] = useState({ ...resp.months });

  const monthsdata = new Set();
  resp[0].months.forEach((item) => monthsdata.add(item));

  console.log("experiment", monthsdata);

  // useEffect(() =>
  //   setUpdatedData({
  //     ...updateData,
  //     months: updateData["months"].add(months),
  //   })
  // );

  const disable = (element) => {
    // console.log(months.indexOf(element));
    return resp[0].months.indexOf(element) == -1 ? false : true;
  };

  return (
    <div className={style.main}>
      <form className={style.innerMainBox} action="">
        <div className={style.title}>Submit Fees</div>
        <div className={style.schoolRelDt}>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              className={style.inputBox}
              type="text"
              name="Name"
              id="Name"
              // value={resp.Name}
              value={resp[0].Name}
              disabled
              // onChange={(e) => {
              //   setRawData({ ...rawData, Name: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
              // }}
            />
          </div>
          <div>
            <label htmlFor="rollNo">Roll No:</label>{" "}
            <input
              className={style.inputBox}
              type="number"
              name="rollNo"
              id="rollNo"
              disabled
              value={resp[0].rollNo}
              // onChange={(e) => {
              //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
              // }}
            />
          </div>
          <div>
            <label htmlFor="cls">Class</label>{" "}
            <input
              className={style.inputBox}
              type="text"
              name="cls"
              id="cls"
              disabled
              size="4"
              value={resp[0].cls}
              // onChange={(e) => {
              //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
              // }}
            />
          </div>
          <div>
            <label htmlFor="year">Year</label>{" "}
            <input
              className={style.inputBox}
              type="number"
              name="year"
              id="year"
              disabled
              value={resp[0].year}
              // onChange={(e) => {
              //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
              // }}
            />
          </div>
        </div>
        <div className={style.personalInfo}>
          <div>
            <label htmlFor="FatherName">FatherName</label>{" "}
            <input
              className={style.inputBox}
              type="text"
              name="FatherName"
              id="FatherName"
              disabled
              value={resp[0].fatherName}
              // onChange={(e) => {
              //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
              // }}
            />
          </div>
          <div>
            <label htmlFor="MotherName">MotherName</label>{" "}
            <input
              className={style.inputBox}
              type="text"
              name="MotheraName"
              id="MotheraName"
              disabled
              value={resp[0].motherName}
              // onChange={(e) => {
              //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
              // }}
            />
          </div>
        </div>
        <div className={style.monthsToupdate}>Months</div>
        <div className={style.listMonth}>
          {resp[0].months.map((element, i) => {
            return (
              <div key={i}>
                <input
                  type="checkbox"
                  name={element}
                  id={element}
                  checked
                  disabled={disable(element)}
                  value={element}
                />
                <label htmlFor={element}>{element}</label>
              </div>
            );
          })}

          {monthArrayList.map((element, i) => {
            if (resp[0].months.indexOf(element) === -1) {
              // console.log("mil gya", months.indexOf(element));
              return (
                <div key={i}>
                  <input
                    type="checkbox"
                    name={element}
                    id={element}
                    value={element}
                    onChange={(e) => {
                      if (e.target.checked) {
                        // setUpdatedData({
                        //   ...updateData,
                        //   months: updateData["months"].add(e.target.value),
                        // });

                        monthsdata.add(e.target.value);
                      } else {
                        monthsdata.delete(e.target.value);
                        // updateData.months.delete(e.target.value);
                      }
                    }}
                  />
                  <label htmlFor={element}>{element}</label>
                </div>
              );
            }
          })}
        </div>
        <input
          className={style.submitBtn}
          // onClick={handleClickSubmit}
          // onClick={() => alert("onClick event")}
          type="submit"
          onClick={handleOnClickSubmit}
        />
      </form>
    </div>
  );
};

export default ViewDataCard;










// update
{/* {showData
        ? // <div>jldksa</div>
          resData.map((res, key) => {
            console.log("insider", res);
            <ViewDataCard key={key} resp={res} />;
          })
        : null} */}


// update page 

import React, { useState, useEffect } from "react";
import style from "../css/Update.module.css";
import ViewDataCard from "./ViewDataCard";

const cls = [
  "NUR",
  "LKG",
  "UKG",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

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

    setResData([]);
  };
  return (
    <>
      <form action="/userEntry" onSubmit={handeSubmit} method="GET">
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
      {showData ? <ViewDataCard resp={resData} /> : null}
    </>
  );
};

export default UpdateEntry;



// viewDataCard

import React, { useEffect, useState } from "react";
import style from "../css/ViewDataCard.module.css";

const monthArrayList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const ViewDataCard = ({ resp }) => {
  // return <div>hhhh</div>;
  const [updateData, setUpdatedData] = useState({
    months: new Set(),
  });

  // const monthsdata = new Set();
  // item.months.forEach((item) => {
  //   console.log("kitta baar chalega");
  //   monthsdata.add(item);
  // });
  // // code;
  // // useEffect(() => console.log(resp[0].Name));
  // const handleOnClickSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(monthsdata);
  // };
  // // const n = "shivam";
  // // const fatherName = "bhanu [ratap chandra sekhar yadav chandel bhadinde";
  // // const motherName = "bhanu [ratap chandra sekhar yadav chandel bhadinde";
  // // const rollNo = "11";
  // // const cls = "NUR";
  // // const year = "2019";
  // // const months = ["Jan", "Feb"];
  // // const [months, setMonths] = useState({ ...resp.months });
  // const monthsdata = new Set();
  // resp.map((itm, key) => itm.months.forEach((item) => monthsdata.add(item)));
  // console.log("experiment", monthsdata);

  // const disable = (element) => {
  //   // console.log(months.indexOf(element));
  //   return resp[0].months.indexOf(element) == -1 ? false : true;
  // };
  return resp.map((item, key) => {
    // // return <div>hhhh</div>;
    // const [updateData, setUpdatedData] = useState({
    //   months: new Set(),
    // });
    // // code;
    // useEffect(() => console.log(resp[0].Name));
    const handleOnClickSubmit = (e) => {
      e.preventDefault();
      console.log(monthsdata);
    };
    // // const n = "shivam";
    // // const fatherName = "bhanu [ratap chandra sekhar yadav chandel bhadinde";
    // // const motherName = "bhanu [ratap chandra sekhar yadav chandel bhadinde";
    // // const rollNo = "11";
    // // const cls = "NUR";
    // // const year = "2019";
    // // const months = ["Jan", "Feb"];
    // // const [months, setMonths] = useState({ ...resp.months });
    // const monthsdata = new Set();
    // resp[0].months.forEach((item) => monthsdata.add(item));
    // console.log("experiment", monthsdata);
    // // useEffect(() =>
    // //   setUpdatedData({
    // //     ...updateData,
    // //     months: updateData["months"].add(months),
    // //   })
    // // );
    // const disable = (element) => {
    //   // console.log(months.indexOf(element));
    //   return resp[0].months.indexOf(element) == -1 ? false : true;
    // };

    const monthsdata = new Set();
    item.months.forEach((item) => {
      monthsdata.add(item);
    });

    return (
      <div key={key} className={style.main}>
        <form className={style.innerMainBox} action="">
          <div className={style.title}>Submit Fees</div>
          <div className={style.schoolRelDt}>
            <div>
              <label htmlFor="Name">Name</label>
              <input
                className={style.inputBox}
                type="text"
                name="Name"
                id="Name"
                // value={resp.Name}
                value={item.Name}
                disabled
                // onChange={(e) => {
                //   setRawData({ ...rawData, Name: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                // }}
              />
            </div>
            <div>
              <label htmlFor="rollNo">Roll No:</label>{" "}
              <input
                className={style.inputBox}
                type="number"
                name="rollNo"
                id="rollNo"
                disabled
                value={item.rollNo}
                // onChange={(e) => {
                //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                // }}
              />
            </div>
            <div>
              <label htmlFor="cls">Class</label>{" "}
              <input
                className={style.inputBox}
                type="text"
                name="cls"
                id="cls"
                disabled
                size="4"
                value={item.cls}
                // onChange={(e) => {
                //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                // }}
              />
            </div>
            <div>
              <label htmlFor="year">Year</label>{" "}
              <input
                className={style.inputBox}
                type="number"
                name="year"
                id="year"
                disabled
                value={item.year}
                // onChange={(e) => {
                //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                // }}
              />
            </div>
          </div>
          <div className={style.personalInfo}>
            <div>
              <label htmlFor="FatherName">FatherName</label>{" "}
              <input
                className={style.inputBox}
                type="text"
                name="FatherName"
                id="FatherName"
                disabled
                value={item.fatherName}
                // onChange={(e) => {
                //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                // }}
              />
            </div>
            <div>
              <label htmlFor="MotherName">MotherName</label>{" "}
              <input
                className={style.inputBox}
                type="text"
                name="MotheraName"
                id="MotheraName"
                disabled
                value={item.motherName}
                // onChange={(e) => {
                //   setRawData({ ...rawData, fatherName: e.target.value }); //check for the spread operator , i think we can remove it because at once we have to take the only one value
                // }}
              />
            </div>
          </div>
          <div className={style.monthsToupdate}>Months</div>
          <div className={style.listMonth}>
            {item.months.map((element, i) => {
              return (
                <div key={i}>
                  <input
                    type="checkbox"
                    name={element}
                    id={element}
                    checked
                    disabled
                    value={element}
                  />
                  <label htmlFor={element}>{element}</label>
                </div>
              );
            })}
            {monthArrayList.map((element, i) => {
              if (item.months.indexOf(element) === -1) {
                // console.log("mil gya", months.indexOf(element));
                return (
                  <div key={i}>
                    <input
                      type="checkbox"
                      name={element}
                      id={element}
                      value={element}
                      onChange={(e) => {
                        if (e.target.checked) {
                          // setUpdatedData({
                          //   ...updateData,
                          //   months: updateData["months"].add(e.target.value),
                          // });
                          monthsdata.add(e.target.value);
                        } else {
                          monthsdata.delete(e.target.value);
                          // updateData.months.delete(e.target.value);
                        }
                      }}
                    />
                    <label htmlFor={element}>{element}</label>
                  </div>
                );
              }
            })}
          </div>
          <input
            className={style.submitBtn}
            // onClick={handleClickSubmit}
            // onClick={() => alert("onClick event")}
            type="submit"
            onClick={handleOnClickSubmit}
          />
        </form>
      </div>
    );
  });
};

export default ViewDataCard;


// use  viewdatacard



// import React, { useEffect, useState } from "react";
// import style from "../css/ViewDataCard1.module.css";
// import axios from "axios";
// import { useNavigate as useHistory } from "react-router-dom";
// import { monthArrayList, feesMap } from "./data";

// const ViewDataCard = ({ resp }) => {
//   const Navigate = useHistory();
//   const [dataToSend, setDataToSend] = useState({
//     monthsData: new Set(),
//     feesSubmit: "",
//   });

//   useEffect(() => {
//     console.log("hi its all right to be here");
//     setDataToSend({
//       ...dataToSend,

//       monthsData: resp.months.map((item, key) =>
//         dataToSend["monthsData"].add(item)
//       ),
//     });
//     console.log("look up here", dataToSend.monthsData instanceof Set);
//   }, []);

//   const handleOnClickSubmit = async (e) => {
//     console.log("id-->", resp._id);
//     console.log("added months-->", dataToSend["monthsData"]);
//     console.log(" fees updated-->", dataToSend["feesSubmit"]);

//     const res = await axios
//       .patch("/userEntry", {
//         _id: resp._id,
//         fees: parseInt(resp.fees) + parseInt(dataToSend["feesSubmit"]),
//         months: [...dataToSend["monthsData"]],
//       })
//       .then((item) => {
//         alert("data updated");
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Navigate(0); //navigate to same page
//     setDataToSend({
//       feesSubmit: 0,
//       monthsData: new Set(),
//     });
//   };

//   return (
//     <div className={style.main}>
//       <form
//         className={style.innerMainBox}
//         onSubmit={handleSubmit}
//         method="PATCH"
//       >
//         <div className={style.title}>Submit Fees</div>
//         <div className={style.schoolRelDt}>
//           <div>
//             <label htmlFor="Name">Name</label>
//             <input
//               className={style.inputBox}
//               type="text"
//               name="Name"
//               id="Name"
//               value={resp.Name}
//               disabled
//             />
//           </div>
//           <div>
//             <label htmlFor="rollNo">Roll No:</label>{" "}
//             <input
//               className={style.inputBox}
//               type="number"
//               name="rollNo"
//               id="rollNo"
//               disabled
//               value={resp.rollNo}
//             />
//           </div>
//           <div>
//             <label htmlFor="cls">Class</label>{" "}
//             <input
//               className={style.inputBox}
//               type="text"
//               name="cls"
//               id="cls"
//               disabled
//               size="4"
//               value={resp.cls}
//             />
//           </div>
//           <div>
//             <label htmlFor="year">Year</label>
//             <input
//               className={style.inputBox}
//               type="number"
//               name="year"
//               id="year"
//               disabled
//               value={resp.year}
//             />
//           </div>
//         </div>
//         <div className={style.personalInfo}>
//           <div>
//             <label htmlFor="FatherName">FatherName</label>{" "}
//             <input
//               className={style.inputBox}
//               type="text"
//               name="FatherName"
//               id="FatherName"
//               disabled
//               value={resp.fatherName}
//             />
//           </div>
//           <div>
//             <label htmlFor="MotherName">MotherName</label>{" "}
//             <input
//               className={style.inputBox}
//               type="text"
//               name="MotheraName"
//               id="MotheraName"
//               disabled
//               value={resp.motherName}
//             />
//           </div>
//         </div>
//         <div className={style.feeDetail}>
//           <div>
//             <label htmlFor="dues">Prev Dues</label>{" "}
//             <input
//               className={style.inputBox}
//               type="text"
//               name="dues"
//               id="dues"
//               disabled
//               value={feesMap[resp.cls] * resp.months.length - resp.fees}
//               // value={resp.fees}
//             />
//           </div>
//           <div>
//             <label htmlFor="feesSubmit">Submit Fees</label>{" "}
//             <input
//               className={style.inputBox}
//               type="number"
//               name="feesSubmit"
//               id="feesSubmit"
//               value={dataToSend.feesSubmit}
//               onChange={(e) => {
//                 // console.log(e.target.value);
//                 setDataToSend({ ...dataToSend, feesSubmit: e.target.value });
//               }}
//             />
//           </div>
//         </div>

//         <div className={style.monthsToupdate}>Months</div>
//         <div className={style.listMonth}>
//           {resp.months.map((element, i) => {
//             return (
//               <div key={i}>
//                 <input
//                   type="checkbox"
//                   name={element}
//                   id={element}
//                   checked
//                   disabled
//                   value={element}
//                 />
//                 <label htmlFor={element}>{element}</label>
//               </div>
//             );
//           })}
//           {monthArrayList.map((element, i) => {
//             if (resp.months.indexOf(element) === -1) {
//               // console.log("mil gya", months.indexOf(element));
//               return (
//                 <div key={i}>
//                   <input
//                     type="checkbox"
//                     name={element}
//                     id={element}
//                     value={element}
//                     onChange={(e) => {
//                       // console.log(
//                       //   "look up here 2",
//                       //   dataToSend.monthsData instanceof Set
//                       // );

//                       if (e.target.checked) {
//                         console.log(
//                           "look up here 2",
//                           dataToSend.monthsData instanceof Set
//                         );
//                         setDataToSend({
//                           ...dataToSend,
//                           monthsData: dataToSend["monthsData"].add(
//                             e.target.value
//                           ),
//                         });
//                       } else {
//                         console.log(
//                           "look up here 3",
//                           dataToSend.monthsData instanceof Set
//                         );
//                         dataToSend.monthsData.delete(e.target.value);
//                       }
//                     }}
//                   />
//                   <label htmlFor={element}>{element}</label>
//                 </div>
//               );
//             }
//           })}
//         </div>

//         <input
//           className={style.submitBtn}
//           type="submit"
//           onClick={handleOnClickSubmit}
//         />
//       </form>
//     </div>
//   );
// };

// export default ViewDataCard;