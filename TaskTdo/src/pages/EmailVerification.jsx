import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmailVerification = () => {
  const param = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    async function emailVerification() {
      const url = "http://localhost:8000/api/v1/auth/verification";
      // eslint-disable-next-line no-unused-vars
      const data = await axios.post(url, {
        token: param.token,
      });
    }
    emailVerification();
    navigate("/login");
  }, []);
  return <div>Loading....</div>;
};

export default EmailVerification;
