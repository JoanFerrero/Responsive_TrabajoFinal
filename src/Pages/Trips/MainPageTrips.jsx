import BarFilter from "./BarFilter";
import Map from "./Map";
import TripList from "./TripList";

const MainPageTrips = () => {
  return (
    <>
      <div className="flex">
        <div className="w-full min-[1220px]:w-1/2 overflow-hidden">
          <BarFilter />
          <TripList />
        </div>
        <div className="hidden  min-[1220px]:block w-1/2 h-screen overflow-hidden"> 
          <Map />
        </div>
      </div>
    </>
  )
}

export default MainPageTrips;