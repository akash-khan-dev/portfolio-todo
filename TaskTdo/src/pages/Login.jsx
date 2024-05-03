import { Button, Form, Input } from "antd";
const Login = () => {
  const onFinish = async (values) => {
    try {
      // const RegisterURL = "http://localhost:8000/api/v1/auth/registration";
      // const data = await axios.post(RegisterURL, {
      //   name: values.username,
      //   email: values.email,
      //   password: values.password,
      // });
      // toast.success(data.data.data.message, {
      //   position: "top-right",
      //   autoClose: 2000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      // });
    } catch (err) {
      // toast.error(err.response.data.message, {
      //   position: "top-right",
      //   autoClose: 2000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      // });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className=" mx-auto  flex justify-center pt-12 pb-20 h-screen">
        <div className="bg-white rounded-md w-[30%]">
          <h1 className="text-center mt-6 font-semibold text-4xl text-blue-300">
            Login Now
          </h1>
          <div className="w-[100px] h-[100px] bg-black rounded-full mx-auto mt-8 mb-8"></div>
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
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
