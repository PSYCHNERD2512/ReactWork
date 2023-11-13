import React from "react";
import axios from "axios";

export default function Footer() {
  //defines initial data
  data = () => {
    return {
      nav_data: {
        id: 0,
        subcat: {},
        title: "",
        url: "",
      },
      dataset: [],
      selectedId: "1",
    };
  };

  const [data, setData] = React.useState({
    nav_data: {
      id: 0,
      subcat: {},
      title: "",
      url: "",
    },
    dataset: [],
    selectedId: 1,
  });
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newtestasc.iitb.ac.in/vue/nav.json"
        );
        setData({ ...data, dataset: response.data["navigation"] });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  methods: return (
    <div class="footer">
      <div class="but-wrapper">
        <div class="circle" ref="indicator"></div>

        {dataset.map((ds, index) => (
          <div
            key={index}
            className={`footbutton ${
              ds["id"] === selectedId ? "selected" : ""
            }`}
            onClick={() => setUpSubCat(ds["id"], ds["url"], index)}
          >
            {ds["id"] == selectedId && (
              <div class="material-icons selected-icon">
                keyboard_double_arrow_up
              </div>
            )}
            <div class="icon">
              <img src="../assets/logos/home.svg" alt="Home" />
            </div>
            <div class="text">{ds["title"]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
