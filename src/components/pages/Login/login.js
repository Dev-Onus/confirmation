import "./login.css";
import { Input, Row, Col } from "antd";

const Login = () => {
  return (
    <>
      <div className="classone" style={{}}>
        {" "}
        <Row
          className={"classname"}
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
            <h1 className={"classname"} style={{}}>
              hello
            </h1>
            <p className={"classname"} style={{}}>
              hello
            </p>
            <Input
              className={"classname"}
              style={{
                borderBottom: "1px solid black",
                fontSize: "1rem",
                width: "35rem",
              }}
              allowClear={false}
              bordered={true}
              disabled={false}
              type={"text"}
              value={"sample"}
            ></Input>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Login;
