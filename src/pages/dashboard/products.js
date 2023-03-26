import { Col, Row, Table, Input, Space, Button } from 'antd'
import React, { useRef, useState } from 'react'
import { TeamOutlined, DollarOutlined, ShoppingCartOutlined, DropboxOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';

export default function Products() {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const nav = useNavigate();
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
    const data = [
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
        {
            key: '11',
            name: 'John Brown',
            age: 32,
            address: 23,
        },
        {
            key: '12',
            name: 'Joe Black',
            age: 42,
            address: 67,
        },
        {
            key: '13',
            name: 'Jim Green',
            age: 32,
            address: 65,
        },
        {
            key: '14',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '15',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '16',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '21',
            name: 'John Brown',
            age: 32,
            address: 23,
        },
        {
            key: '22',
            name: 'Joe Black',
            age: 42,
            address: 67,
        },
        {
            key: '23',
            name: 'Jim Green',
            age: 32,
            address: 65,
        },
        {
            key: '24',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '25',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '26',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '31',
            name: 'John Brown',
            age: 32,
            address: 23,
        },
        {
            key: '32',
            name: 'Joe Black',
            age: 42,
            address: 67,
        },
        {
            key: '33',
            name: 'Jim Green',
            age: 32,
            address: 65,
        },
        {
            key: '34',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '35',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '36',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '41',
            name: 'John Brown',
            age: 32,
            address: 23,
        },
        {
            key: '42',
            name: 'Joe Black',
            age: 42,
            address: 67,
        },
        {
            key: '43',
            name: 'Jim Green',
            age: 32,
            address: 65,
        },
        {
            key: '44',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '45',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '46',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '51',
            name: 'John Brown',
            age: 32,
            address: 23,
        },
        {
            key: '52',
            name: 'Joe Black',
            age: 42,
            address: 67,
        },
        {
            key: '53',
            name: 'Jim Green',
            age: 32,
            address: 65,
        },
        {
            key: '54',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '55',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '56',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '61',
            name: 'John Brown',
            age: 32,
            address: 23,
        },
        {
            key: '62',
            name: 'Joe Black',
            age: 42,
            address: 67,
        },
        {
            key: '63',
            name: 'Jim Green',
            age: 32,
            address: 65,
        },
        {
            key: '64',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '65',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '66',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '71',
            name: 'John Brown',
            age: 32,
            address: 23,
        },
        {
            key: '72',
            name: 'Joe Black',
            age: 42,
            address: 67,
        },
        {
            key: '73',
            name: 'Jim Green',
            age: 32,
            address: 65,
        },
        {
            key: '74',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '75',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '76',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '81',
            name: 'John Brown',
            age: 32,
            address: 23,
        },
        {
            key: '82',
            name: 'Joe Black',
            age: 42,
            address: 67,
        },
        {
            key: '83',
            name: 'Jim Green',
            age: 32,
            address: 65,
        },
        {
            key: '84',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '85',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
        {
            key: '86',
            name: 'Jim Red',
            age: 32,
            address: 89,
        },
    ];
    const columns = [
        {
            title: 'ID',
            dataIndex: 'name',
            key: 'name',
            width: '10%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Thumbnail',
            dataIndex: 'age',
            key: 'age',
            width: '10%',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Name',
            dataIndex: 'age',
            key: 'age',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Price',
            dataIndex: 'age',
            key: 'age',
            width: '10%',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Status',
            dataIndex: 'age',
            key: 'age',
            width: '10%',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Created',
            dataIndex: 'address',
            key: 'address',
            width: '10%',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.address - b.address,
            sortDirections: ['descend', 'ascend'],
        },
    ];
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const createProd = () => {
        nav('/dashboard/products/create-product');
    }
    return (
        <Row justify={"space-between"}>
            <Col>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Delete
                </Button>
            </Col>
            <Col>
                <Button type="primary" onClick={createProd}>
                    Create Product
                </Button>
            </Col>
            <Col span={24} style={{ marginTop: 10 }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    rowSelection={rowSelection} />
            </Col>
        </Row>
    )
}
