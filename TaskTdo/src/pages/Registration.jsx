import { Button, Form, Input } from "antd";

const Registration = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className=" mx-auto  flex justify-center pt-12 pb-20 h-screen">
        <div className="bg-white rounded-md w-[30%] pr-5">
          <h1 className="text-center mt-3 font-semibold text-4xl text-blue-300 mb-10 ml-5">
            Registration Now
          </h1>
          <div className="w-[100px] h-[100px] bg-black rounded-full mx-auto mb-8"></div>
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
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

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

            <div className="flex pb-5">
              <label htmlFor="" style={{ marginLeft: "50px" }}>
                Profile
              </label>
              <input style={{ marginLeft: "50px" }} type="file" />
            </div>

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
    </>
  );
};

export default Registration;
