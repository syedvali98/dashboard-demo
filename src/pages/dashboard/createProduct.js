import { Button, Checkbox, Space, Col, DatePicker, Form, Input, message, Row, Segmented, Select, Steps, Switch, Tabs, TreeSelect, Typography, Upload, Collapse } from 'antd'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import Products from './products';

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Panel } = Collapse;

export default function CreateProduct() {
    const [step, setStep] = useState(0);
    const [addStep, setAddStep] = useState(10);
    const [tabKey, setTabKey] = useState('1');

    const basic = <></>
    const items = [
        {
            key: '1',
            label: `Basic Information`,
            children: ``,
        },
        {
            key: '2',
            label: `Advanced Information`,
            children: ``,
        },
    ];
    return (
        <Row>
            <Col span={24}>
                <Title level={3} style={{ marginTop: 0, marginBottom: 30 }}>Create Product</Title>
            </Col>
            <Col span={24}>
                <Row>
                    <Col span={24}>
                        <Tabs items={items} activeKey={tabKey} onChange={(a) => { setTabKey(a) }} />
                    </Col>
                </Row>
                {tabKey === '1' && <Row>
                    <Col span={6}>
                        <Steps
                            progressDot
                            current={step}
                            onChange={(a) => setStep(a)}
                            direction="vertical"
                            items={[
                                {
                                    title: 'General',
                                    description: 'Name & stuff',
                                },
                                {
                                    title: 'Price',
                                    description: 'Price of product',
                                },
                                {
                                    title: 'Inventory',
                                    description: 'This is a description.',
                                },
                                {
                                    title: 'Images',
                                    description: 'This is a description.',
                                },
                                {
                                    title: 'Downloads',
                                    description: 'This is a description.',
                                },
                                {
                                    title: 'SEO',
                                    description: 'This is a description.',
                                },
                            ]}
                        />
                    </Col>
                    <Col span={18}>
                        <Content stepKey={step} setStep={setStep} setTabKey={setTabKey} />
                    </Col>
                </Row>}
                {tabKey === '2' && <Row>
                    <Col span={6}>
                        <Steps
                            progressDot
                            current={addStep - 10}
                            onChange={(a) => setAddStep(10 + a)}
                            direction="vertical"
                            items={[
                                {
                                    title: 'Attributes',
                                    description: 'Attr & stuff',
                                },
                                {
                                    title: 'Options',
                                    description: 'Options',
                                },
                                {
                                    title: 'Related Products',
                                    description: 'This is a description.',
                                },
                            ]}
                        />
                    </Col>
                    <Col span={18}>
                        <Content stepKey={addStep} setStep={setAddStep} setTabKey={setTabKey} />
                    </Col>
                </Row>}
            </Col>
        </Row>
    )
}

const Content = ({ stepKey, setStep, setTabKey }) => {
    const [value, setValue] = useState();
    const [treeValue, setTreeValue] = useState();
    const [invTrack, setInvTrack] = useState(false)
    const [statusValue, setStatusValue] = useState('Draft');
    const [forms, setForms] = useState([{}]);
    const treeData = [
        {
            value: 'parent 1',
            title: 'parent 1',
            children: [
                {
                    value: 'parent 1-0',
                    title: 'parent 1-0',
                    children: [
                        {
                            value: 'leaf1',
                            title: 'my leaf',
                        },
                        {
                            value: 'leaf2',
                            title: 'your leaf',
                        },
                    ],
                },
                {
                    value: 'parent 1-1',
                    title: 'parent 1-1',
                    children: [
                        {
                            value: 'sss',
                            title: (
                                <b
                                    style={{
                                        color: '#08c',
                                    }}
                                >
                                    sss
                                </b>
                            ),
                        },
                    ],
                },
            ],
        },
    ];
    switch (stepKey) {
        case 0:
            return <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 1000,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={() => {
                    setStep(stepKey + 1)
                }}
                onFinishFailed={() => { }}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a product name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a product description!',
                        },
                    ]}
                >
                    <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: 300, marginBottom: 40 }} />
                </Form.Item>
                <Form.Item
                    label="Brand"
                    name="brand"
                    rules={[]}
                >
                    <Select
                        showSearch
                        placeholder="Select a brand"
                        optionFilterProp="children"
                        onChange={() => { }}
                        onSearch={() => { }}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Categories"
                    name="categories"
                    rules={[]}
                >
                    <TreeSelect
                        showSearch
                        style={{ width: '100%' }}
                        value={treeValue}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        placeholder="Please select"
                        allowClear
                        multiple
                        treeDefaultExpandAll
                        onChange={(a) => { setTreeValue(a) }}
                        treeData={treeData}
                    />
                </Form.Item>
                <Form.Item
                    label="Tax Class"
                    name="taxClass"
                    rules={[]}
                >
                    <Select
                        showSearch
                        placeholder="Select a tax class"
                        optionFilterProp="children"
                        onChange={() => { }}
                        onSearch={() => { }}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Tags"
                    name="tags"
                    rules={[]}
                >
                    <Select
                        showSearch
                        placeholder="Select tags"
                        optionFilterProp="children"
                        onChange={() => { }}
                        onSearch={() => { }}
                        mode="tags"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Product Type"
                    name="type"
                    rules={[]}
                >
                    <Switch checkedChildren="Virtual" unCheckedChildren="Physical" defaultChecked />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[]}
                >
                    <Segmented options={['Draft', 'Published']} value={statusValue} onChange={setStatusValue} />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 20,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>;
        case 1:
            return <Form
                name="price"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 1000,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={() => {
                    setStep(stepKey + 1)
                }}
                onFinishFailed={() => { }}
                autoComplete="off"
            >
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please input a product price!',
                        },
                    ]}
                >
                    <Input type='number' />
                </Form.Item>
                <Form.Item
                    label="Special Price"
                    name="specialPrice"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price Type"
                    name="priceType"
                    rules={[]}
                >
                    <Select
                        showSearch
                        placeholder="Select a Price Type"
                        optionFilterProp="children"
                        onChange={() => { }}
                        onSearch={() => { }}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'jack',
                                label: 'Fixed',
                            },
                            {
                                value: 'lucy',
                                label: 'Percent',
                            }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Special Price Duration"
                    name="specialPriceDuration"
                    rules={[]}
                >
                    <RangePicker showTime />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 20,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        case 2:
            return <Form
                name="inventory"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 1000,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={() => {
                    setStep(stepKey + 1)
                }}
                onFinishFailed={() => { }}
                autoComplete="off"
            >
                <Form.Item
                    label="SKU"
                    name="sku"
                    rules={[
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Inventory Management"
                    name="invManagement"
                    rules={[]}
                >
                    <Select
                        showSearch
                        placeholder="Select Inventory Tracking"
                        optionFilterProp="children"
                        onChange={(a) => {
                            if (a === 'jack') setInvTrack(true);
                            else setInvTrack(false);
                        }}
                        onSearch={() => { }}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'jack',
                                label: 'Track Inventory',
                            },
                            {
                                value: 'lucy',
                                label: 'Dont Track Inventory',
                            }
                        ]}
                    />
                </Form.Item>
                {invTrack && <Form.Item
                    label="Quantity"
                    name="qty"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter quantity!',
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>}
                <Form.Item
                    label="Stock Availability"
                    name="stockAvailability"
                    rules={[]}
                >
                    <Select
                        showSearch
                        placeholder="Select Stock Availability"
                        optionFilterProp="children"
                        onChange={(a) => {
                            if (a === 'jack') setInvTrack(true);
                            else setInvTrack(false);
                        }}
                        onSearch={() => { }}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'jack',
                                label: 'In Stock',
                            },
                            {
                                value: 'lucy',
                                label: 'Out of Stock',
                            }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 20,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        case 3:
            return <Form
                name="images"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 1000,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={() => {
                    setStep(stepKey + 1)
                }}
                onFinishFailed={() => { }}
                autoComplete="off"
            >
                <Form.Item label="Primary Image" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card" maxCount={1} accept="image/*">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item label="Additional Images" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card" accept="image/*">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 20,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        case 4:
            return <Form
                name="price"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 1000,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={() => {
                    setStep(stepKey + 1)
                }}
                onFinishFailed={() => { }}
                autoComplete="off"
            >
                <Form.Item label="Product File(s)" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card" accept="image/*">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 20,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        case 5:
            return <Form
                name="seo"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                style={{
                    maxWidth: 1000,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={() => {
                    message.success('Product Added Successfully!');
                    setStep(0)
                }}
                onFinishFailed={() => { }}
                autoComplete="off"
            >
                <Form.Item
                    label="Meta Title"
                    name="price"
                    rules={[
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Meta Description"
                    name="specialPrice"
                >
                    <TextArea rows={5} />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 20,
                    }}
                >
                    <Row gutter={[20, 20]}>
                        <Col>
                            <Button type="default" onClick={() => {
                                setTabKey('2')
                            }}>
                                Add Advance Information
                            </Button>
                        </Col>
                        <Col>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>

                </Form.Item>
            </Form>;
        case 10:
            return <Form
                name="dynamic_form_nest_item"
                onFinish={() => {
                    setStep(stepKey + 1)
                }}
                style={{
                    maxWidth: 600,
                }}
                autoComplete="off"
                initialValues={{ users: [{ attr: null, value: [] }] }}
            >
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }, idx) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex',
                                        marginBottom: 8,
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'attr']}
                                        label="Attribute"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Attribute',
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder="Select Attribute"
                                            style={{
                                                width: 200,
                                            }}
                                            onChange={() => { }}
                                            options={[
                                                {
                                                    label: 'Manager',
                                                    options: [
                                                        {
                                                            label: 'Jack',
                                                            value: 'jack',
                                                        },
                                                        {
                                                            label: 'Lucy',
                                                            value: 'lucy',
                                                        },
                                                    ],
                                                },
                                                {
                                                    label: 'Engineer',
                                                    options: [
                                                        {
                                                            label: 'yiminghe',
                                                            value: 'Yiminghe',
                                                        },
                                                    ],
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'value']}
                                        label="Value"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Value',
                                            },
                                        ]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Select Value"
                                            optionFilterProp="children"
                                            style={{ minWidth: "250px" }}
                                            onChange={() => { }}
                                            onSearch={() => { }}
                                            mode="tags"
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[
                                                {
                                                    value: 'jack',
                                                    label: 'Jack',
                                                },
                                                {
                                                    value: 'lucy',
                                                    label: 'Lucy',
                                                },
                                                {
                                                    value: 'tom',
                                                    label: 'Tom',
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                    {fields.length > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        case 11: return <Form
            name="dynamic_form_nest_item"
            onFinish={() => {
                setStep(stepKey + 1)
            }}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 20,
            }}
            style={{
                maxWidth: 1000,
            }}
            autoComplete="off">
            <Collapse defaultActiveKey={[1]} onChange={() => { }}>
                {forms.map((formObj, idx) => {
                    return <Panel header={`Option ${idx + 1}`} key={idx}>
                        <CustomPanel idx={idx} forms={forms} setForms={setForms} />
                    </Panel>
                })}
            </Collapse>
            <Row>
                <Col>
                    <Button onClick={() => {
                        setForms([...forms, {}])
                    }}>Add New Option</Button>
                </Col>
            </Row>
        </Form>
        case 12: return <Products />
        default:
            return <p>{`${stepKey}`}</p>
    }
}

const CustomPanel = ({ idx, forms, setForms }) => {
    const [selectValue, setSelectValue] = useState();
    const [childForms, setChildForms] = useState([{}]);
    const getItem = () => {
        switch (selectValue) {
            case 'field':
                return childForms.map((form, index) => <TextField forms={childForms} setForms={setChildForms} idx={index} />)
            case 'textarea':
                return childForms.map((form, index) => <TextField forms={childForms} setForms={setChildForms} idx={index} />)
            case 'checkbox':
                return childForms.map((form, index) => <SelectField forms={childForms} setForms={setChildForms} idx={index} />)
            case 'dropdown':
                return childForms.map((form, index) => <SelectField forms={childForms} setForms={setChildForms} idx={index} />)
            default:
                break;
        }
    }
    return <Row
        key={idx}

    >
        <Col span={8}>
            <Form.Item
                label="Name"
                rules={[
                    {
                        required: true,
                        message: 'Missing Attribute',
                    },
                ]}
            >
                <Input placeholder='Enter Option Name' />
            </Form.Item>
        </Col>
        <Col span={8}>
            <Form.Item
                label="Type"
                rules={[
                    {
                        required: true,
                        message: 'Missing Value',
                    },
                ]}
            >
                <Select
                    placeholder="Select Type"
                    onChange={(a) => { 
                        setChildForms([{}])
                        setSelectValue(a) }}
                    options={[
                        {
                            label: 'Text',
                            options: [
                                {
                                    label: 'Field',
                                    value: 'field',
                                },
                                {
                                    label: 'Textarea',
                                    value: 'textarea',
                                },
                            ],
                        },
                        {
                            label: 'Select',
                            options: [
                                {
                                    label: 'Dropdown',
                                    value: 'dropdown',
                                },
                                {
                                    label: 'Checkbox',
                                    value: 'checkbox',
                                },
                            ],
                        },
                    ]}
                />
            </Form.Item>
        </Col>
        <Col span={4}>
            <Form.Item
                label="Required"
                labelCol={{
                    span: 12,
                }}>
                <Switch defaultChecked onChange={() => { }} />
            </Form.Item>
        </Col>
        <Col span={2}>
            {forms.length > 1 && <MinusCircleOutlined onClick={() => {
                let arr = [...forms];
                arr.splice(idx, 1);
                setForms(arr);
            }} />}
        </Col>
        <Col span={24}>
            {getItem()}
            {(selectValue === 'dropdown' || selectValue === 'checkbox') &&
                <Button onClick={() => {
                    setChildForms([...childForms, {}])
                }}>Add New Row</Button>}
        </Col>
    </Row>
}

const TextField = ({ forms, setForms, idx }) => {
    return <Row
        key={idx}

    >
        <Col span={8}>
            <Form.Item
                label="Price"
                rules={[
                    {
                        required: true,
                        message: 'Missing Value',
                    },
                ]}
            >
                <Input placeholder='Enter Price' />
            </Form.Item>
        </Col>
        <Col span={6}>
            <Form.Item
                label="Price Type"
                labelCol={{
                    span: 10,
                }}>
                <Select
                    placeholder="Select Price Type"
                    onChange={() => { }}
                    options={[
                        {
                            label: 'Fixed',
                            value: 'jack',
                        },
                        {
                            label: 'Percent',
                            value: 'lucy',
                        },
                    ]}
                />
            </Form.Item>
        </Col>
    </Row>
}

const SelectField = ({ idx, forms, setForms }) => {
    return <Row
        key={idx}

    >
        <Col span={7}>
            <Form.Item
                label="Label"
                rules={[
                    {
                        required: true,
                        message: 'Missing Attribute',
                    },
                ]}
            >
                <Input placeholder='Enter Label Name' />
            </Form.Item>
        </Col>
        <Col span={7}>
            <Form.Item
                label="Price"
                rules={[
                    {
                        required: true,
                        message: 'Missing Value',
                    },
                ]}
            >
                <Input placeholder='Enter Price' />
            </Form.Item>
        </Col>
        <Col span={7}>
            <Form.Item
                label="Price Type"
                labelCol={{
                    span: 10,
                }}>
                <Select
                    placeholder="Select Price Type"
                    onChange={() => { }}
                    options={[
                        {
                            label: 'Fixed',
                            value: 'jack',
                        },
                        {
                            label: 'Percent',
                            value: 'lucy',
                        },
                    ]}
                />
            </Form.Item>
        </Col>
        <Col span={3}>
            {forms.length > 1 && <MinusCircleOutlined onClick={() => {
                let arr = [...forms];
                arr.splice(idx, 1);
                setForms(arr);
            }} 
            style={{marginLeft:10}}/>}
        </Col>
    </Row>
}