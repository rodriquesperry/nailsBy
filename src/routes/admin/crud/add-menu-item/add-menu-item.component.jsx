import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import Menu from '../../../menu/menu.component';

import './add-menu-item.styles.scss';

const AddMenuItem = () => {
  return (
    <div className='main-container'>
      <div className='row'>
        <div className='col'>
          <h2 className='m-5'>Add Menu Item</h2>
        </div>
        <div className='col'>
          <h2 className='m-5'>Menu Item List</h2>
        </div>
      </div>
      <Container className='add-menu-item-container'>
        <Form className='add-menu-item-form col-10'>
          <Form.Group className='mb-3 ' controlId='categoryName'>
            <Form.Label>Category Name</Form.Label>
            <Form.Control type='text' placeholder='Enter category name' />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>
          <Form.Group className='mb-3 ' controlId='menuItemName'>
            <Form.Label>Menu Item Name</Form.Label>
            <Form.Control type='text' placeholder='Enter menu item name' />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='menuItemDescription'>
            <Form.Label>Menu Item Description</Form.Label>
            <Form.Control as='textarea' rows={8} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='menuItemPrice'>
            <Form.Label>Menu Item Price</Form.Label>
            <div className='col-3 add-menu-item-price'>
              <span className='menu-item-price-dollar-sign'>$</span>
              <Form.Control type='text' />
            </div>
          </Form.Group>

          <Button variant='custom' className='btn btn-menu' type='submit'>
            Submit
          </Button>
        </Form>
        <div className='menu-list'>
          <Menu />
        </div>
      </Container>
    </div>
  );
};

export default AddMenuItem;
