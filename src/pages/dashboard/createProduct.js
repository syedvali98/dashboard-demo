import { Col, Row, Tabs, Typography } from 'antd'
import React from 'react'

const { Title } = Typography;

export default function CreateProduct() {
    return (
        <Row>
            <Col span={24}>
                <Title level={3} style={{ marginTop: 0, marginBottom: 30 }}>Create Product</Title>
            </Col>
            <Col span={24}>
                <Tabs
                    tabPosition={'left'}
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of Tab ${id}`,
                        };
                    })}
                />
            </Col>
        </Row>
    )
}
