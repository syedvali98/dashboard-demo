import { Card, Col, Row, Statistic, Input, Space, Button, Table } from 'antd'
import React, { useRef, useState } from 'react'
import { TeamOutlined, DollarOutlined, ShoppingCartOutlined, DropboxOutlined, SearchOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/plots';
import data from "../../utils/data/chart.json"
import Highlighter from 'react-highlight-words';

export default function Home() {
    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'sales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
    };
    const keywordData = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 23,
        },
        {
            key: '2',
            name: 'Joe Black',
            age: 42,
            address: 67,
        },
        {
            key: '3',
            name: 'Jim Green',
            age: 32,
            address: 65,
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '5',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '6',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
    ];
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Keywords',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Results',
            dataIndex: 'age',
            key: 'age',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Hits',
            dataIndex: 'address',
            key: 'address',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.address - b.address,
            sortDirections: ['descend', 'ascend'],
        },
    ];
    const orderColumns = [
        {
            title: 'OrderId',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Customer',
            dataIndex: 'age',
            key: 'age',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Status',
            dataIndex: 'address',
            key: 'address',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.address - b.address,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Total',
            dataIndex: 'age',
            key: 'age',
            ...getColumnSearchProps('age'),
        },
    ];
    const reviewColumns = [
        {
            title: 'Product',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Customer',
            dataIndex: 'age',
            key: 'age',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Rating',
            dataIndex: 'address',
            key: 'address',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.address - b.address,
            sortDirections: ['descend', 'ascend'],
        }
    ];
    return (
        <div>
            <Row gutter={16}>
                <Col span={6}>
                    <Card bordered={false} style={{ boxShadow: "0 1px 8px rgba(0,0,0,.15)" }}>
                        <Statistic
                            title="Total Sales"
                            value={"2,691,970.86"}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<DollarOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false} style={{ boxShadow: "0 1px 8px rgba(0,0,0,.15)" }}>
                        <Statistic
                            title="Total Orders"
                            value={1617}
                            precision={0}
                            valueStyle={{ color: 'red' }}
                            prefix={<ShoppingCartOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false} style={{ boxShadow: "0 1px 8px rgba(0,0,0,.15)" }}>
                        <Statistic
                            title="Total Products"
                            value={125}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<DropboxOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false} style={{ boxShadow: "0 1px 8px rgba(0,0,0,.15)" }}>
                        <Statistic
                            title="Total Customers"
                            value={527}
                            precision={0}
                            valueStyle={{ color: 'orange' }}
                            prefix={<TeamOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={15}>
                    <Card title="Sales Analytics" bordered={false} style={{ boxShadow: "0 1px 8px rgba(0,0,0,.15)", marginTop: 20 }}>
                        <Line {...config} />
                    </Card>
                </Col>
                <Col span={9}>
                    <Card title="Latest Search Terms" bordered={false} style={{ boxShadow: "0 1px 8px rgba(0,0,0,.15)", marginTop: 20 }}>
                        <Table columns={columns} dataSource={keywordData} pagination={{ position: ['none', 'none'] }} />
                    </Card>
                </Col>
                <Col span={15}>
                    <Card title="Latest Orders" bordered={false} style={{ boxShadow: "0 1px 8px rgba(0,0,0,.15)", marginTop: 20 }}>
                    <Table columns={orderColumns} dataSource={keywordData} pagination={{ position: ['none', 'none'] }} />
                    </Card>
                </Col>
                <Col span={9}>
                    <Card title="Latest Reviews" bordered={false} style={{ boxShadow: "0 1px 8px rgba(0,0,0,.15)", marginTop: 20 }}>
                        <Table columns={reviewColumns} dataSource={[]} pagination={{ position: ['none', 'none'] }} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
