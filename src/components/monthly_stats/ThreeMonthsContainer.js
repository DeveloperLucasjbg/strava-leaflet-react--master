import MonthStats from "./MonthStats";
import "./index.css";

const ThreeMonthsContainer = () => {
  let monhts = [
    {
      id: 1,
      month: "enero",
      time: 111,
      distance: 111,
      elevation: 111,
    },

    {
      id: 2,
      month: "febrero",
      time: 222,
      distance: 222,
      elevation: 222,
    },

    {
      id: 3,
      month: "marzo",
      time: 333,
      distance: 333,
      elevation: 333,
    },
  ];
  return (
    <div className='MonthlyGrid'>
      {monhts.map((el, index) => {
        return <MonthStats key={index} month={el.month} time={el.time} distance={el.distance} elecation={el.elevation} />;
      })}
    </div>
  );
};

export default ThreeMonthsContainer;
