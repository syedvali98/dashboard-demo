import { Card, Col, Row, theme, Button, Checkbox, Form, Input, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

export default function Login() {

    const nav = useNavigate();

    const {
        token: { loginBgColor },
    } = theme.useToken();

    const onFinish = (values) => {
        console.log('Success:', values);
        localStorage.setItem('token', true);
        nav("/dashboard")
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row style={{ height: "100vh", background: "#f1f3f7" }} justify="center" align={"middle"}>
            <Col>
                <Card bordered={false} style={{ boxShadow: "0 1px 8px rgba(0,0,0,.15)", borderRadius: 2 }}>
                    <div style={{ height: 80, position: "absolute", top: 0, left: 0, right: 0, background: "#001529" }}>
                        <div class="reflection"></div>
                    </div>
                    <Card style={{ width: "100%", padding: "0 15px 0", borderRadius: 2 }}>
                        <Title style={{ textAlign: "center", marginTop: 5 }} level={3}>Fleet Cart</Title>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            style={{
                                maxWidth: 600,
                                marginTop: '15px'
                            }}
                            initialValues={{
                                remember: true,
                                username: 'admin@email.com',
                                password: '123456'
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
                                        message: 'Please input your username!',
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
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 0,
                                    span: 24,
                                }}
                            >
                                <Button type="primary" htmlType="submit" size='large' style={{ padding: "0 50px", margin: "0 auto", display: "list-item" }}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Card>
            </Col>
        </Row>
    )
}
