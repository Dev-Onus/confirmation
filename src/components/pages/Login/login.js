import "./login.css";
import { Input, Row, Col, Checkbox, Button, Select } from "antd";
const { Option: SelectOption } = Select;

const Login = () => {
  return (
    <>
      <div className="classone" style={{}}>
        {" "}
        <Row
          className="row"
          style={{}}
          align={"top"}
          gutter={0}
          justify={"start"}
          wrap={false}
        >
          <Col
            className={"classname"}
            style={{}}
            span={6}
            order={0}
            offset={0}
            push={0}
            pull={0}
          > <p
              className={"classname"}
              style={{
                fontSize: "1.5rem",
              }}
            >
              Account Login
            </p>
            <p className={"classname"} style={{}}>
              Account type
            </p>
                  <Select
                    className={"classname"}
                    style={{ width: "35rem", borderBottom: "1px solid black" }}
                    allowClear={false}
                    autoClearSearchValue={true}
                    autoFocus={false}
                    bordered={false}
                    defaultActiveFirstOption={true}
                    disabled={false}
                    dropdownMatchSelectWidth={true}
                    filterOption={true}
                    labelInValue={false}
                    listHeight={"256"}
                    loading={false}
                    showArrow={true}
                    showSearch={false}
                    size={"middle"}
                    virtual={true}
                    
                  >
                    <SelectOption
                      className={"classname"}
                      style={{ fontSize: "1rem" }}
                    >
                      Online Banking
                    </SelectOption>
                    <SelectOption
                      className={"classname"}
                      style={{ fontSize: "1rem" }}
                    >
                      Online Investing
                    </SelectOption>
                  </Select>
                </Col>
             
        </Row>
        <Row
          className="row"
          style={{}}
          align={"top"}
          gutter={0}
          justify={"start"}
          wrap={false}
        >
          <Col
            className={"classname"}
            style={{}}
            span={8}
            order={0}
            offset={0}
            push={0}
            pull={0}
          >
            <Input
              className={"classname"}
              style={{
                borderBottom: "1px solid black",
                fontSize: "1rem",
                width: "35rem",
                color: "grey",
              }}
              allowClear={false}
              bordered={false}
              disabled={false}
              type={"text"}
              value={"Username"}
            ></Input>
            <Checkbox
              className="checkbox"
              style={{
                marginTop: "1rem",
                marginBottom:"0rem",
                fontSize: "1.1rem",
                color: "grey",
              }}
              autoFocus={false}
              checked={false}
              defaultChecked={false}
              disabled={false}
              intermediate={false}
            >
              Remember my username.
            </Checkbox>
          </Col>
        </Row>
        <Row
          className="row"
          style={{}}
          align={"top"}
          gutter={0}
          justify={"start"}
          wrap={false}
        >
          <Col
            className={"classname"}
            style={{}}
            span={1}
            order={0}
            offset={0}
            push={0}
            pull={0}
          >
            <Input
              className={"classname"}
              style={{
                borderBottom: "1px solid black",
                fontSize: "1rem",
                width: "35rem",
                color: "grey",
              }}
              allowClear={false}
              bordered={false}
              disabled={false}
              type={"text"}
              value={"Password"}
            ></Input>
          </Col>
        </Row>
        <Button
          className={"classname"}
          style={{
            marginTop: "2rem",
            backgroundColor: "#0a41c5",
            width: "560px",
            fontSize: "1rem",
            paddingBottom: "33px",
            paddingTop: "6px",
          }}
          block={false}
          danger={false}
          disabled={false}
          ghost={false}
          htmlType={"button"}
          loading={false}
          size={"middle"}
          type={"primary"}
        >
          Log in
        </Button>
        <Row
          className="row"
          style={{}}
          align={"top"}
          gutter={0}
          justify={"start"}
          wrap={false}
        >
          <Col
            className={"classname"}
            style={{}}
            span={12}
            order={0}
            offset={0}
            push={0}
            pull={0}
          >
            <a
              className={"classname"}
              style={{ color: "#0a41c5", fontWeight: "600" }}
            >
              Get login help ?
            </a>
            <a
              className={"classname"}
              style={{
                color: "black",
                textDecoration: "underline",
                color: "grey",
              }}
            >
              {" "}
              <p className={"classname"} style={{}}>
                Create a user and password
              </p>
            </a>

            <p className={"classname"} style={{ color: "grey" }}>
              State form customer ?{" "}
              <a
                className={"classname"}
                style={{
                  color: "black",
                  textDecoration: "underline",
                  color: "grey",
                }}
              >
                Sign up
              </a>{" "}
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Login;
