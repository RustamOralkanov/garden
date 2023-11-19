import "./App.scss";
import Banner from "../banner/Banner";
import Filter from "../filter/Filter";
import Trim from "../trim/Trim";
import Features from "../features/Features";
import Quality from "../quality/Quality";
import Harmony from "../harmony/Harmony";
import Location from "../location/Location";
import AllInOne from "../all-in-one/AllInOne";

function App() {
    return (
        <>
            <Banner />
            <Filter />
            <Trim />
            <Features />
            <Quality />
            <Harmony />
            <Location />
            <AllInOne />
        </>
    );
}

export default App;
