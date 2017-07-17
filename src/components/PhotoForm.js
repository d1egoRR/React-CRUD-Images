import React from 'react';
import {findDOMNode} from 'react-dom';
import {Col, Row, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

export default class PhotoForm extends React.Component {
  handleSubmit() {
    const img = findDOMNode(this.refs.img).value;
    const caption = findDOMNode(this.refs.caption).value;

    if (img && caption) {
      const photo = {img, caption};
      this.props.handleAddPhoto(photo);
      this.resetFields();
    } else {
      alert('Ingresar Nombre de imagen y el Caption');
    }
  }

  resetFields() {
    findDOMNode(this.refs.img).value = '';
    findDOMNode(this.refs.caption).value = '';
  }

  render() {
    return(
      <Row>
        <Col xs={6} sm={6}>
          <Panel>
            <FormGroup controlId='Imagen'>
              <ControlLabel>Imagen</ControlLabel>
              <FormControl
                type='text'
                placeholder='Nombre de imagen'
                ref='img' />
            </FormGroup>
            <FormGroup controlId='caption'>
              <ControlLabel>Caption</ControlLabel>
              <FormControl
                type='text'
                placeholder='caption'
                ref='caption' />
            </FormGroup>
            <FormGroup controlId='submit'>
              <Button
                onClick={::this.handleSubmit}
                bsStyle={'primary'} >
                  Guardar
              </Button>
            </FormGroup>
          </Panel>
        </Col>
      </Row>
    );
  }
}