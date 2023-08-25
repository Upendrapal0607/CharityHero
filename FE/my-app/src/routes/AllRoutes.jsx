import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from '../components/Checkout/Ckeckout';
import DonationDetails from "../pages/DonationDetails";
export default function AllRoutes(){
    return(
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/donait/:id" element={<DonationDetails/>} />
        </Routes>
        </>
    )
}