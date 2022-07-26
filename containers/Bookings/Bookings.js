import React, { Component } from "react";

import "./Bookings.css";
import locations from "../../assets/data/locations";
import Select from "../Select/Select";

// import ButtonGlow from "../../components/Buttons/ButtonGlow";
// import Booking from "./Booking/Booking";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: null, //current location selected
      location: null, //objecct
      dateName: null, //current Date selected
      date: null, //array of objects with KVP date: and time:
      timeName: null, //current time selected in 2400hrs;
      time: null, //array of objects with KVP time:, timeLabel: and slots:
      slotName: null, //current slot selected as first/second/third/fourth
      slot: null, //array of objects with KVP slot:, slotLabel and first:/second:/third:/fourth:
      booking: null, //array of objects having first to fourth all the objects as elements depending upon the slot selected
      shouldShowInputFields: false, //If false button wont be shown and vice versa
    };

    //Date Select Ref for setting value to null if previous/parent Select changes
    this.dateRef = null;
    this.setDateRef = (element) => {
      this.dateRef = element;
    };

    this.timeRef = null;
    this.setTimeRef = (element) => {
      this.timeRef = element;
    };

    this.slotRef = null;
    this.setSlotRef = (element) => {
      this.slotRef = element;
    };
  }
  //location array class object
  location = locations.map((l) => {
    return {
      id: l.id,
      label: l.label,
      name: l.name,
    };
  });

  locationChangeHandler = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({ locationName: value });
    locations.forEach((l) => {
      if (l.name === value) {
        this.setState({ location: l, date: l.date });
      }
    });
    // console.log(this.dateRef);
    if (this.dateRef) this.dateRef.selectedIndex = 0;
    if (this.timeRef) this.timeRef.selectedIndex = 0;
    if (this.slotRef) this.slotRef.selectedIndex = 0;
    this.setState({ shouldShowInputFields: false });
  };

  dateChangeHandler = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({ dateName: value });
    this.state.date.forEach((d) => {
      if (d.date === value) {
        this.setState({ time: d.time });
        // console.log(d.time);
      }
    });
    if (this.timeRef) this.timeRef.selectedIndex = 0;
    if (this.slotRef) this.slotRef.selectedIndex = 0;
    this.setState({ shouldShowInputFields: false });
  };

  timeChangeHandler = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({ timeName: value });
    this.state.time.forEach((t) => {
      if (t.time === value) {
        this.setState({ slot: t.slots });
        // console.log(t.slots);
      }
    });
    if (this.slotRef) this.slotRef.selectedIndex = 0;
    this.setState({ shouldShowInputFields: false });
  };
  // creating a booking array of objects depending upon the slot selected
  slotChangeHandler = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({ slotName: value });
    if (value === "first") {
      const [first] = this.state.slot;
      let tempArr = [];
      /* console.log("temparr", first);
      console.log(first.first);
      console.log("temp array final", tempArr); */
      tempArr.push(first.first);
      this.setState({ booking: tempArr });
    }
    if (value === "second") {
      const [first, second] = this.state.slot;
      let tempArr = [];
      tempArr.push(first.first);
      tempArr.push(second.second);
      // console.log(tempArr);
      this.setState({ booking: tempArr });
    }
    if (value === "third") {
      const [first, second, third] = this.state.slot;
      let tempArr = [];
      tempArr.push(first.first);
      tempArr.push(second.second);
      tempArr.push(third.third);
      // console.log(tempArr);
      this.setState({ booking: tempArr });
    }
    if (value === "fourth") {
      const [first, second, third, fourth] = this.state.slot;
      let tempArr = [];
      tempArr.push(first.first);
      tempArr.push(second.second);
      tempArr.push(third.third);
      tempArr.push(fourth.fourth);
      // console.log(tempArr);
      this.setState({ booking: tempArr });
    }

    console.log("[Slot Change Handler]", this.state.slot);
    this.setState({ shouldShowInputFields: true });
  };

  parkingSpaceHandler = (event, id) => {
    //No need to extract event.target.value
    console.log(id);
    const len = this.state.booking.length;
    if (len === 1) {
      let [first] = this.state.booking;
      first.forEach((f) => {
        if (f.id === id.id) {
          f.available = false;
        }
      });
      /*       
      const newArr = [];
      newArr.push(first);
      console.log(first);
      this.setState({ booking: newArr }, () => console.log(this.state.booking));
      console.log(this.state.location); 
      */
      /* location.date.forEach((d) => {
        if (d.date === this.state.dateName) {
          d.time.forEach((t) => {
            if (t.time === this.state.timeName) {
              t.slots.forEach((s) => {
                if (s.slot === this.state.slotName) {
                  s.first.forEach((f) => {
                    if (f.id === id.id) {
                      f.available = false;
                    }
                  });
                }
              });
            }
          });
        }
      }); */

      /* locations.forEach((l) => {
        if (l.name === this.state.location.name) {
          l = this.state.location;
          console.log(locations);
        }
      }); */
    }
    if (len === 2) {
      let [, second] = this.state.booking;
      second.forEach((s) => {
        if (s.id === id.id) {
          s.available = false;
        }
      });
      // console.log(second);
      // this.setState((prevState) => (prevState[1] = second));
    }
    if (len === 3) {
      let [, , third] = this.state.booking;
      third.forEach((t) => {
        if (t.id === id.id) {
          t.available = false;
        }
      });
      // this.setState((prevState) => (prevState[2] = third));
    }
    if (len === 4) {
      let [, , , fourth] = this.state.booking;
      fourth.forEach((fo) => {
        if (fo.id === id.id) {
          fo.available = false;
        }
      });
      // this.setState((prevState) => (prevState[3] = fourth));
    }
  };

  render() {
    //Making Date Array
    let date = null;
    if (this.state.locationName) {
      date = this.state.location.date.map((d, index) => {
        return {
          id: "#" + index,
          label: d.date,
          name: d.date,
        };
      });
    }
    // console.log(date);

    //Storing Select in DateSelect using Date Array
    let dateSelect = (
      <select className="disable">
        <option>Choose a date</option>
      </select>
    );
    if (date) {
      dateSelect = (
        <Select
          refHandler={this.setDateRef}
          array={date}
          changed={(event) => this.dateChangeHandler(event)}
        >
          Choose a date
        </Select>
      );
    }

    //Making Time Array
    let time = null;
    if (this.state.time) {
      time = this.state.time.map((t, index) => {
        return {
          id: "##" + index,
          label: t.timeLabel,
          name: t.time,
        };
      });
      // console.log(time);
    }

    //Storing Select in TimeSelect using Time Array
    let timeSelect = (
      <select className="disable">
        <option>Choose time</option>
      </select>
    );
    if (time) {
      timeSelect = (
        <Select
          refHandler={this.setTimeRef}
          array={time}
          changed={(event) => this.timeChangeHandler(event)}
        >
          Choose time
        </Select>
      );
    }

    //Making Slots Array
    let slot = null;
    if (this.state.slot) {
      slot = this.state.slot.map((s, index) => {
        return {
          id: "###" + index,
          label: s.slotLabel,
          name: s.slot,
        };
      });
    }

    //Storing Select in SlotSelect using Slot Array
    let slotSelect = (
      <select className="disable">
        <option>Choose a slot</option>
      </select>
    );
    if (slot) {
      slotSelect = (
        <Select
          refHandler={this.setSlotRef}
          array={slot}
          changed={(event) => this.slotChangeHandler(event)}
        >
          Choose a slot
        </Select>
      );
    }

    //Showing available parking spaces
    let availableParkingSpaces = [];
    if (this.state.booking) {
      const len = this.state.booking.length;
      // console.log(len);
      if (len === 1) {
        let [first] = this.state.booking;
        // console.log(first);
        first.forEach((f) => {
          if (f.available) {
            availableParkingSpaces.push(f);
          }
        });
      }
      if (len === 2) {
        let [, second] = this.state.booking;
        for (let i = 0; i < second.length; i++) {
          // if (second[i].id === second[i].id) {
          if (second[i].available) {
            availableParkingSpaces.push(second[i]);
          }
          //}
        }
      }
      if (len === 3) {
        let [, , third] = this.state.booking;
        for (let i = 0; i < third.length; i++) {
          if (third[i].available) {
            availableParkingSpaces.push(third[i]);
          }
        }
      }
      if (len === 4) {
        let [, , , fourth] = this.state.booking;
        for (let i = 0; i < fourth.length; i++) {
          if (fourth[i].available) {
            availableParkingSpaces.push(fourth[i]);
          }
        }
      }

      // console.log(availableParkingSpaces);
    }
    var showInputFields = null;
    showInputFields = availableParkingSpaces.map((ps, index) => {
      return (
        <tr
          className=""
          key={"####" + index}
          onClick={(event) => this.parkingSpaceHandler(event, ps)}
        >
          <td>{ps.level}</td>
          <td>{ps.spot}</td>
        </tr>
      );
    });

    // this.setState({ showButton: showButton });
    return (
      <div>
        <h1>
          <span className="bookings-title">B</span>ookings
        </h1>
        <Select
          array={this.location}
          changed={(event) => this.locationChangeHandler(event)}
        >
          Select a locaiton
        </Select>
        {dateSelect}
        {timeSelect}
        {slotSelect}
        <br />
        <br />
        {this.state.shouldShowInputFields ? (
          <table className="table">
            <thead>
              <tr>
                <th>Level No.</th>
                <th>Spot No.</th>
              </tr>
            </thead>
            <tbody>{showInputFields}</tbody>
          </table>
        ) : (
          <h2>Wanna go somewhere? Park ahead of time!</h2>
        )}
      </div>
    );
  }
}
export default Bookings;
