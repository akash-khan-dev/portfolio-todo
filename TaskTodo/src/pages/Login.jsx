import { Button, Form, Input } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { userInfo } from "../ReduxFeature/Slice/UserSlice";
const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      const loginURL = "http://localhost:8000/api/v1/auth/login";
      const data = await axios.post(loginURL, {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("user", JSON.stringify(data.data.user));
      dispatch(userInfo(data.data.user));

      toast.success(data.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate(`/`);
      }, 2000);
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <ToastContainer />
      <div className=" mx-auto flex justify-center pt-28 mb-20 h-[100%]  ">
        <div className="bg-white rounded-md w-[30%] ">
          <h1 className="text-center mt-8 font-semibold text-4xl text-blue-300">
            Login Now
          </h1>
          <div className="w-[100px] h-[100px] bg-black rounded-full mx-auto mt-8 mb-8 overflow-hidden">
            <img
              src="../../public/images/avatar.png"
              className="w-[100%] h-[100%] object-cover"
              alt="avatar"
            />
          </div>
          <div className="mr-10">
            <Form
              name="basic"
              labelCol={{
                span: 6,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 20,
                }}
              >
                <Button className="mb-3" type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div className="text-center mb-16">
              <p>
                Don’t have an account ?{" "}
                <Link className="text-red-500" to={"/registration"}>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
