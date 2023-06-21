import { verify } from "crypto";
import Navbar from "../components/Atoms/Navbar";
import OtpForm from "../components/Atoms/OTPVerification";

const Verify = () => (
  <div>
    <Navbar></Navbar>
    <OtpForm></OtpForm>
  </div>
);

export default Verify;
