import React from "react";
import Background from "../assets/img/pexels-recep-fatih-kaya-10094979.jpg";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
  Spinner,
  Label,
} from "reactstrap";
function Login() {
  return (
    <>
      <Container lg={6}>
        <Col className="mx-auto" md="6">
          <Card>
            <CardHeader></CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label>Username</Label>
                  <Input name="username" type="username" />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input name="password" type="password" />
                </FormGroup>
                <div className="text-center">
                  <Button className="btn-fill " type="submit" color="info">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
        {/* <Card className="text-center border-0">
          <div className="bg-secondary shadow h-100 text-center py-lg-5">
            <CardHeader className="bg-transparent pb-3 pt-5">
              <h1>Welcome to Pusoy All Star!</h1>
            </CardHeader>

            <CardBody className="">
              <Form role="form">
                <FormGroup>
                  <InputGroup>
                    <Input
                      placeholder="Username"
                      className="pl-3"
                      type="email"
                      autoComplete="new-username"
                      minLength={5}
                      required
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup>
                    <Input
                      className="pl-3"
                      placeholder="Password"
                      autoComplete="password"
                      required
                      aria-describedby="showPasswordEye"
                      maxLength={6}
                    />
                  </InputGroup>
                </FormGroup>

                <Row>
                  <Col lg="6" md="6">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                  </Col>
                  <Col lg="6" md="6">
                    <a href="/auth/settings/forgetpassword">
                      <small>Forget Password?</small>
                    </a>
                  </Col>
                </Row>

                <Button className="my-4" color="primary" type="submit" outline>
                  Sign in
                </Button>
              </Form>

              <div className="text-center text-muted mb-4">
                <small>Don't have an account ?</small>
              </div>
              <a className="info" href="">
                <b>Sign up</b>
              </a>
            </CardBody>
          </div>
        </Card> */}
      </Container>
    </>
  );
}

export default Login;
