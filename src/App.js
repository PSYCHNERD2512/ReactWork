import React, { useState, useRef } from "react";
import "./App.css";
const Footer = () => {
  const [dataset, setDataset] = useState([
    {
      id: 1,
      title: "Home",
      url: "",
      subcat: [
        // {
        //   id: 2,
        //   title: "Registration",
        //   author: "registration",
        //   subcat: [
        //     {
        //       id: 3,
        //       title: "Reg2",
        //       author: "reg2",
        //       subcat: [
        //         {
        //           id: 4,
        //           title: "Hospital",
        //           url: "https://asc.iitb.ac.in/acadmenu/",
        //         },
        //         {
        //           id: 5,
        //           title: "Main Gate",
        //           url: "https://newtestasc.iitb.ac.in/academic/timetable/viewTimetable.jsp",
        //         },
        //       ],
        //     },
        //     {
        //       id: 6,
        //       title: "Course",
        //       author: "typicode",
        //     },
        //   ],
        // },
        // {
        //   id: 7,
        //   title: "Personal",
        //   url: "https://newtestasc.iitb.ac.in/academic/CourseRegistration/Common/newallCourse.jsp",
        // },
      ],
    },
    {
      id: 8,
      title: "Academic",
      url: "",
      subcat: [
        // {
        //   id: 9,
        //   title: "Registration",
        //   url: "https://newtestasc.iitb.ac.in/acadmenu/first_page_after_login.jsp",
        // },
        // {
        //   id: 10,
        //   title: "Personal",
        //   author: "typicode",
        // },
      ],
    },
    {
      id: 11,
      title: "Facility",
      url: "",
      subcat: [
        // {
        //   id: 12,
        //   title: "Hospital",
        //   author: "typicode",
        // },
        // {
        //   id: 13,
        //   title: "Main Gate",
        //   author: "typicode",
        // },
      ],
    },
    {
      id: 14,
      title: "Forms",
      url: "",
      subcat: [
        // {
        //   id: 15,
        //   title: "some comment",
        //   author: "1",
        // },
      ],
    },
  ]);

  const [selectedId, setSelectedId] = useState("1");
  const indicatorRef = useRef(null);

  const setUpSubCat = (id, url, order) => {
    setSelectedId(id);
    movePointer(order);
  };

  const movePointer = (order) => {
    const percent = 100 / dataset.length;
    const newOrder = order * percent + "vw";
    indicatorRef.current.style.transform = "translateX(" + newOrder + ")";
  };

  const toggleExpansion = () => {};

  const renderSubcategories = (subcat) => {
    if (!subcat || subcat.length === 0) {
      return null;
    }

    return (
      <ul>
        {subcat.map((item) => (
          <li key={item.id}>
            <a href={item.url} onClick={() => setUpSubCat(item.id, item.url)}>
              {item.title}
            </a>
            {renderSubcategories(item.subcat)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="footer">
      <div className="but-wrapper">
        <div className="circle" ref={indicatorRef}></div>
        {dataset.map((ds, index) => (
          <div
            key={index}
            className={`foot_button ${
              ds["id"] === selectedId ? "selected" : ""
            }`}
            onClick={() => setUpSubCat(ds["id"], ds["url"], index)}
          >
            {ds["id"] === selectedId && (
              <div
                className="material-icons selected-icon"
                onClick={toggleExpansion}
              ></div>
            )}
            <div className="icon">
              <div className="icon-svg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_221_1020)" fill="#747D88">
                    <path
                      d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                      fill="#747D88"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_221_1020">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="text">{ds["title"]}</div>
            {renderSubcategories(ds.subcat)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
