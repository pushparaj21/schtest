import React, { useEffect, useState } from "react";
import style from "../css/ViewDataCard1.module.css";
import axios from "axios";
import { useNavigate as useHistory } from "react-router-dom";
import { monthArrayList, feesMap } from "./data";

const ViewDataCard = ({ resp }) => {
  const Navigate = useHistory();
  const [dataToSend, setDataToSend] = useState({
    monthsData: new Set(),
    feesSubmit: 0,
  });
  useEffect(() => {
    console.log("hi its all right to be here", resp, "resp ka fees", resp.fees);
    resp.months.map((item) => dataToSend["monthsData"].add(item));
    // dataToSend["feesSubmit"] = resp.fees;

    // setDataToSend({ ...dataToSend, feesSubmit: resp.fees });

    // setDataToSend({
    //   ...dataToSend,
    //   monthsData: new Set(
    //     resp.months.map((item) => dataToSend["monthsData"].add(item))
    //   ),
    // });
  }, []);
  const handleOnClickSubmit = async (e) => {
    // console.log(
    //   "feeSubmitted",
    //   eval(parseInt(dataToSend["feesSubmit"]) + parseInt(resp.fees))
    // );
    const res = await axios
      .patch("/userEntry", {
        _id: resp._id,
        months: [...dataToSend["monthsData"]],
        fees: eval(parseInt(dataToSend["feesSubmit"]) + parseInt(resp.fees)),
      })
      .then((item) => {
        alert("data updated");
        Navigate(0); //navigate to same page
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataToSend({
      feesSubmit: 0,
      monthsData: new Set(),
    });
  };
  return (
    <div className={style.main}>
      <form
        className={style.innerMainBox}
        onSubmit={handleSubmit}
        method="PATCH"
      >
        <div className={style.title}>Submit Fees</div>
        <div className={style.schoolRelDt}>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              className={style.inputBox}
              type="text"
              name="Name"
              id="Name"
              value={resp.Name}
              disabled
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
              value={resp.rollNo}
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
              value={resp.cls}
            />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input
              className={style.inputBox}
              type="number"
              name="year"
              id="year"
              disabled
              value={resp.year}
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
              value={resp.fatherName}
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
              value={resp.motherName}
            />
          </div>
        </div>
        <div className={style.feeDetail}>
          <div>
            <label htmlFor="dues">Prev Dues</label>{" "}
            <input
              className={style.inputBox}
              type="text"
              name="dues"
              id="dues"
              disabled
              value={feesMap[resp.cls] * resp.months.length - resp.fees}
              // value={resp.fees}
            />
          </div>
          <div>
            <label htmlFor="feesSubmit">Submit Fees</label>{" "}
            <input
              className={style.inputBox}
              type="number"
              name="feesSubmit"
              id="feesSubmit"
              required
              value={dataToSend.feesSubmit}
              onChange={(e) => {
                // console.log(
                //   "before setting",
                //   dataToSend["feesSubmit"] instanceof Number,
                //   "numbe?",
                //   dataToSend["feesSubmit"]
                // );
                // const prevVal = parseInt(resp.fees) + parseInt(e.target.value);
                // console.log(
                //   "pre",
                //   prevVal,
                //   "from",
                //   parseInt(resp.fees) instanceof Number,
                //   "Feew is number?",
                //   resp.fees
                // );
                setDataToSend({
                  ...dataToSend,
                  feesSubmit: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={style.monthsToupdate}>Months</div>
        <div className={style.listMonth}>
          {Array.from(
            monthArrayList.map((element, i) => {
              if (resp.months.indexOf(element) === -1) {
                return (
                  <div key={i}>
                    <input
                      type="checkbox"
                      name={element}
                      id={element}
                      value={element}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setDataToSend({
                            ...dataToSend,
                            monthsData: dataToSend["monthsData"].add(
                              e.target.value
                            ),
                          });
                        } else {
                          // monthsdata.delete(e.target.value);
                          setDataToSend({
                            ...dataToSend,
                            monthsData: dataToSend["monthsData"].delete(
                              e.target.value
                            ),
                          });
                        }
                      }}
                    />
                    <label htmlFor={element}>{element}</label>
                  </div>
                );
              } else {
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
              }
            })
          )}
        </div>
        <input
          className={style.submitBtn}
          type="submit"
          onClick={handleOnClickSubmit}
        />
      </form>
    </div>
  );
};

export default ViewDataCard;

//  <form className={style.innerMainBox} onSubmit={handleSubmit} method="PATCH">
//    <div className={style.title}>Submit Fees</div>
//    <div className={style.schoolRelDt}>
//      <div>
//        <label htmlFor="Name">Name</label>
//        <input
//          className={style.inputBox}
//          type="text"
//          name="Name"
//          id="Name"
//          value={item.Name}
//          disabled
//        />
//      </div>
//      <div>
//        <label htmlFor="rollNo">Roll No:</label>{" "}
//        <input
//          className={style.inputBox}
//          type="number"
//          name="rollNo"
//          id="rollNo"
//          disabled
//          value={item.rollNo}
//        />
//      </div>
//      <div>
//        <label htmlFor="cls">Class</label>{" "}
//        <input
//          className={style.inputBox}
//          type="text"
//          name="cls"
//          id="cls"
//          disabled
//          size="4"
//          value={item.cls}
//        />
//      </div>
//      <div>
//        <label htmlFor="year">Year</label>
//        <input
//          className={style.inputBox}
//          type="number"
//          name="year"
//          id="year"
//          disabled
//          value={item.year}
//        />
//      </div>
//    </div>
//    <div className={style.personalInfo}>
//      <div>
//        <label htmlFor="FatherName">FatherName</label>{" "}
//        <input
//          className={style.inputBox}
//          type="text"
//          name="FatherName"
//          id="FatherName"
//          disabled
//          value={item.fatherName}
//        />
//      </div>
//      <div>
//        <label htmlFor="MotherName">MotherName</label>{" "}
//        <input
//          className={style.inputBox}
//          type="text"
//          name="MotheraName"
//          id="MotheraName"
//          disabled
//          value={item.motherName}
//        />
//      </div>
//    </div>
//    <div className={style.feeDetail}>
//      <div>
//        <label htmlFor="dues">Prev Dues</label>{" "}
//        <input
//          className={style.inputBox}
//          type="text"
//          name="dues"
//          id="dues"
//          disabled
//          value={feesMap[item.cls] * item.months.length - item.fees}
//          // value={item.fees}
//        />
//      </div>
//      <div>
//        <label htmlFor="feesSubmit">Submit Fees</label>{" "}
//        <input
//          className={style.inputBox}
//          type="number"
//          name="feesSubmit"
//          id="feesSubmit"
//          value={feeSubmitted}
//          onChange={(e) => {
//            // console.log(e.target.value);
//            setfeeSubmit(e.target.value);
//          }}
//        />
//      </div>
//    </div>

//    <div className={style.monthsToupdate}>Months</div>
//    <div className={style.listMonth}>
//      {item.months.map((element, i) => {
//        return (
//          <div key={i}>
//            <input
//              type="checkbox"
//              name={element}
//              id={element}
//              checked
//              disabled
//              value={element}
//            />
//            <label htmlFor={element}>{element}</label>
//          </div>
//        );
//      })}
//      {monthArrayList.map((element, i) => {
//        if (item.months.indexOf(element) === -1) {
//          // console.log("mil gya", months.indexOf(element));
//          return (
//            <div key={i}>
//              <input
//                type="checkbox"
//                name={element}
//                id={element}
//                value={element}
//                onChange={(e) => {
//                  if (e.target.checked) {
//                    monthsdata.add(e.target.value);
//                  } else {
//                    monthsdata.delete(e.target.value);
//                  }
//                }}
//              />
//              <label htmlFor={element}>{element}</label>
//            </div>
//          );
//        }
//      })}
//    </div>

//    <input
//      className={style.submitBtn}
//      type="submit"
//      onClick={handleOnClickSubmit}
//    />
//  </form>;
