import React from 'react';
import {findDOMNode} from 'react-dom';
import {MenuItem, InputGroup, Image, DropdownButton, Col, Row, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {getImagesPhoto} from '../api/utils';

export default class PhotoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [{}],
      img: ''
    }
  }

  componentDidMount() {
    getImagesPhoto(images => {
      this.setState({images: images});
    });
  }

  handleSelect(img) {
    this.setState({
      img: '/images/photos/' + img
    });
  }

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
    this.setState({img: ''});
    findDOMNode(this.refs.caption).value = '';
  }

  render() {
    const imgList = this.state.images.map(function(imgArr, i) {
      return(
        <MenuItem
          key={i}
          eventKey={imgArr.name}
          onClick={this.handleSelect.bind(this, imgArr.name)}>
            {imgArr.name}
        </MenuItem>
      )
    }, this);

    return(
      <Row>
        <Col xs={6} sm={6}>
          <Panel>
            <FormGroup controlId='Imagen'>
              <InputGroup>
                <FormControl type="text" value={this.state.img} ref="img"/>
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title="Seleccionar imagen"
                  bsStyle="primary">
                  {imgList}
                </DropdownButton>
              </InputGroup>
            </FormGroup>

            <FormGroup controlId='imgPhoto'>
              <Image src={this.state.img} responsive/>
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