import React from 'react'
import { Container} from 'react-bootstrap'
import './SupplierDashboard.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Cards from '../Cards/Cards'

const items = [
    {
        title : "asd",
        desc : "kughzzzzzzzzzzj"
    },
    {
        title : "khg",
        desc : "khjjkn"
    }
]

const SupplierDashboard = () => {
    return (
        <Container className="dashboard">
            <Row className="banner">
                <Col xs={8}>
                    <h2>
                        Existing products
                    </h2>
                </Col>
                <Col xs={4} className="button-box">
                    <Button variant="primary">Edit Profile</Button>
                    <Button variant="primary">Add Product</Button>
                </Col>
            </Row>
            <hr/>
            <div className="card-box">
                {/* <Cards title="Card Title" desc="woof"/> 
                Minaiy Mouse */}
                {
                    items.map((item) =>
                        <div>
                            <Cards title={item.title} desc={item.desc}/>
                            <br />
                        </div>
                    )
                }

            </div>
        </Container>
    )
}

export default SupplierDashboard
