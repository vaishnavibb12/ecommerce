import React, { useState } from "react";
import "../css/Story.css";
import girl from "../assets/girls.jpg";
import { GrDeliver } from "react-icons/gr";
import flash from "../assets/flash1.png";

function Story() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const checkboxes = [
    { id: 1, label: "Mouse", image: flash },
    { id: 2, label: "Keyboard", image: flash },
    { id: 3, label: "Jacket", image: flash },
    { id: 4, label: "Speaker", image: flash },
  ];

  const handleCheckboxChange = (id) => {
    if (selectedCheckboxes.includes(id)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== id));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, id]);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="acor">
              <p>Home /</p>
              <p>Story /</p>
            </div>
          </div>
        </div>
        <div class="row our-story">
          <div class="col-md-6">
            <div className="hjk">
              <h2>Our Story</h2>
              <p>
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data and
                service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3.5 million customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast rate. Exclusive offers a diverse assortment in
                categories ranging from consumer.
              </p>
            </div>
            <div></div>
            <h4>Multiple Products</h4>
            <div className="jkkjjk">
              {checkboxes.map((checkbox) => (
                <div
                  key={checkbox.id}
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <input
                    type="checkbox"
                    id={`checkbox-${checkbox.id}`}
                    checked={selectedCheckboxes.includes(checkbox.id)}
                    onChange={() => handleCheckboxChange(checkbox.id)}
                  />
                  &nbsp;
                  <label htmlFor={`checkbox-${checkbox.id}`}>
                    {checkbox.label}
                  </label>
                </div>
              ))}
            </div>
            <div>
              <div className="open-box">
                {checkboxes.map(
                  (checkbox) =>
                    selectedCheckboxes.includes(checkbox.id) && (
                      <img
                        key={checkbox.id}
                        src={checkbox.image}
                        alt={checkbox.label}
                        style={{
                          width: "200px",
                          height: "200px",
                          marginRight: "10px",
                        }}
                      />
                    )
                )}
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div className="dsf">
              <img src={girl} alt="" />
            </div>
          </div>
        </div>

        <div class="row stats">
          <div class="col-md-3">
            <div class="stat-card">
              <div className="av-container">
                <div className="av">
                  <GrDeliver />
                </div>
              </div>
              <h3>10.5k</h3>
              <p>Sellers active on our site</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-card">
              <div className="av-container">
                <div className="av">
                  <GrDeliver />
                </div>
              </div>
              <h3>33k</h3>
              <p>Monthly Product Sales</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-card">
              <div className="av-container">
                <div className="av">
                  <GrDeliver />
                </div>
              </div>
              <h3>45.5k</h3>
              <p>Customer active on our site</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-card">
              <div className="av-container">
                <div className="av">
                  <GrDeliver />
                </div>
              </div>
              <h3>25k</h3>
              <p>Annual gross sales in our site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
