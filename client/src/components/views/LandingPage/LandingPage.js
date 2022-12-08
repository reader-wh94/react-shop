import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios';
import {Icon, Col, Row, Card, Button} from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';

function LandingPage() {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        axios.post('/api/product/products')
            .then(response => {
                if(response.data.success) {
                    setProducts(response.data.productInfo)
                } else {
                    alert("상품들을 가져오는데 실패 했습니다.")
                }
            })

    }, [])

    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={3} xs={24} key={index}>
            <Card
                cover={<ImageSlider  images={product.images}/>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })

    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>

            <div style={{ textAlign: 'center' }}>
                <h2>Let's Travel AnyWhere <Icon type='rocket' /></h2>

            </div>
            
            { /* Filter */}

            {/* Search */}

            {/* Cards */}

            <Row gutter={[16, 16]}>
                {renderCards}
            </Row>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button>더보기</Button>

            </div>


        </div>
    )
}

export default LandingPage
