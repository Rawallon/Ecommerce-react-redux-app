import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col, Row } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/FormLoader';
import FormGroup from '../../components/FormGroup';
import {
  listUserByIdAdmin,
  updateUserProfileAdmin,
} from '../../actions/userAction';
import { LinkContainer } from 'react-router-bootstrap';
import {
  listProductDetails,
  updateProductAdmin,
} from '../../actions/productActions';

export function EditProducts({
  match,
  userInfo,
  history,
  productDetails,
  listProductDetails,
  updateProductAdmin,
}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [countStock, setCountStock] = useState('');

  const [message, setMessage] = useState({});
  const itemId = match.params.id;
  const { error, loading } = productDetails;

  useEffect(() => {
    if (itemId) {
      listProductDetails(itemId);
    }
  }, []);

  useEffect(() => {
    if (!userInfo?._id) history.push('/login');
    if (!userInfo?.isAdmin) history.push('/profile');
    if (!itemId) history.push('./');

    if (productDetails.product && itemId) fillFields();
  }, [history, userInfo, productDetails, itemId]);

  function fillFields() {
    const selProd = productDetails.product;
    setName(selProd.name);
    setPrice(selProd.price);
    setCategory(selProd.category);
    setBrand(selProd.brand);
    setDescription(selProd.description);
    setCountStock(selProd.countInStock);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (
      name.length === 0 ||
      price.length === 0 ||
      category.length === 0 ||
      brand.length === 0 ||
      description.length === 0 ||
      countStock.length === 0
    ) {
      setMessage({
        name: name.length === 0,
        price: price.length === 0,
        category: category.length === 0,
        brand: brand.length === 0,
        description: description.length === 0,
        countStock: countStock.length === 0,
      });
      return;
    }

    updateProductAdmin(itemId, {
      _id: itemId,
      name,
      price,
      category,
      brand,
      description,
      countInStock: countStock,
    });
  }

  return (
    <Row>
      <Col>
        <h2>Edit Product</h2>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <FormGroup
            name="name"
            type="text"
            value={name}
            onChange={setName}
            isInvalid={!!message['name']}
          />
          <FormGroup
            name="price"
            type="number"
            value={price}
            onChange={setPrice}
            isInvalid={!!message['price']}
          />
          <FormGroup
            name="category"
            type="text"
            value={category}
            onChange={setCategory}
            isInvalid={!!message['category']}
          />
          <FormGroup
            name="brand"
            type="text"
            value={brand}
            onChange={setBrand}
            isInvalid={!!message['brand']}
          />
          <FormGroup
            name="countStock"
            type="number"
            label="Count in stock"
            value={countStock}
            onChange={setCountStock}
            isInvalid={!!message['countStock']}
          />
          <FormGroup
            name="description"
            type="textarea"
            value={description}
            onChange={setDescription}
            isInvalid={!!message['description']}
            textarea
          />
          <Row>
            <Col>
              <LinkContainer to="./">
                <Button type="submit" variant="outline-secondary" block>
                  Back
                </Button>
              </LinkContainer>
            </Col>
            <Col>
              <Button type="submit" variant="outline-success" block>
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  productDetails: state.productDetails,
});

const mapDispatchToProps = { listProductDetails, updateProductAdmin };

export default connect(mapStateToProps, mapDispatchToProps)(EditProducts);
