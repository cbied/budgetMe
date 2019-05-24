import React, { Component } from 'react';
import { Jumbotron, Container, Button, CardBody, Card, CardText, CardTitle, CardSubtitle, Collapse } from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

class JumbotronHome extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
// fix Tips and Info
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid className="jumbo">
            <h1 className="display-3">Welcome to BudgetUp!</h1>
            <p className="lead">We're here to help you keep track of your money!</p>
            <p className="lead">
            <Button outline color="secondary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Tips and Info</Button>
              <Collapse isOpen={this.state.collapse}>
                <Card >
                  <CardBody className='d-inline-flex mb-4'>
                  <Card>
                    <CardBody>
                      <CardTitle>Start By:</CardTitle>
                      <CardSubtitle><b>Adding your bank balance</b></CardSubtitle>
                      <CardText>Add you bank balance under the <b>Paycheck</b> tab on the Budget page: Click <b>add balance</b> button to get there</CardText>
                      <Link to="/Budget" target="_top"><Button>Add Balance</Button></Link>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <CardTitle>Pay yourself fist!</CardTitle>
                      <CardText>Before you pay your bills, before you go out to dinner with friends, set up an automatic transfer to your retirement account <br/> Check out this article below</CardText>
                      <Link to="https://www.investopedia.com/terms/p/payyourselffirst.asp" target="_blank"><Button>Article</Button></Link>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <CardTitle>Check out your budget</CardTitle>
                      <CardText>Add what you expect to pay for a category during the course of a month. Update the list from month to month</CardText>
                      <Link to="/Contact" target="_top"><Button>Add Balance</Button></Link>
                    </CardBody>
                  </Card>
                  </CardBody>
                </Card>
              </Collapse>
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
  
};

export default JumbotronHome;