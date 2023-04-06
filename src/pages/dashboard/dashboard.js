import { Button, Col, Layout, Menu, Row, theme } from 'antd';
import React, { useEffect, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined, MailOutlined, SettingOutlined, AppstoreOutlined, DesktopOutlined
} from '@ant-design/icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default function Dashboard() {

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const nav = useNavigate()

  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Dashboard', '0'),
    getItem('Products', 'sub1', <MailOutlined />, [
      getItem('Catalog', '111'),
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4')
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    {
      type: 'divider',
    },
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getRoute = (key) => {
    switch (key) {
      case '0':
        return '/dashboard';
      case '111':
        return '/dashboard/products'
      default:
        return 'coming-soon';
    }
  }

  const location = useLocation();

  useEffect(() => {
    console.log(location)
    switch (location.pathname) {
      case '/dashboard':
        return setSelectedKeys(['0'])
      case '/dashboard/products':
        return setSelectedKeys(['111'])
      default:
        return setSelectedKeys([])
    }
  }, [location]);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <Row justify={collapsed ? "center" : "space-between"}>
            {!collapsed && <Col>
              <span style={{ fontSize: "20px" }}>Fleet Cart</span>
            </Col>}
            <Col style={{ alignSelf: "center" }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Col>
          </Row>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          items={items}
          selectedKeys={selectedKeys}
          onClick={(a) => {
            nav(getRoute(a.key))
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button type='ghost'><DesktopOutlined /> Visit Store</Button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
           
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
