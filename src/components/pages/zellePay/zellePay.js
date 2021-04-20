import { Col, Row } from "antd";
import "./zellePay.css";

const ZellePay = () => {
  return (
    <>
      <Row align={"top"} gutter={0} justify={"center"} wrap={false}>
        <Col span={20} order={0} offset={6} push={0} pull={0}>
          <ul className="action-bar" style={{}}>
            <li className={false} style={{}}>
              <a className={false} style={{}}>
                Log Out
              </a>
            </li>
            <li className={false} style={{}}>
              <a className={false} style={{}}>
                Security
              </a>
            </li>
            <li className={false} style={{}}>
              <a className={false} style={{}}>
                Need Help?
              </a>
            </li>
            <li className={false} style={{}}>
              <a className={false} style={{}}>
                Locations
              </a>
            </li>
            <li className={false} style={{}}>
              <a className={false} style={{}}>
                Messages
              </a>
            </li>
            <li className={false} style={{}}>
              <a className={false} style={{}}>
                Hi, Larry
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <div className="main-header" style={{}}>
        <Row align={"top"} gutter={0} justify={"center"} wrap={false}>
          <Col span={20} order={0} offset={6} push={0} pull={0}>
            <ul className={false} style={{}}>
              <li className={false} style={{}}>
                <a className={false} style={{}}>
                  LOGO.
                </a>
              </li>
              <li className={false} style={{}}>
                <a className={false} style={{}}>
                  My Accounts
                </a>
              </li>
              <li className={false} style={{}}>
                <a className={false} style={{}}>
                  Transfers
                </a>
              </li>
              <li className={false} style={{}}>
                <a className={false} style={{}}>
                  Bill Payments
                </a>
              </li>
              <li className={false} style={{}}>
                <a className={false} style={{}}>
                  Send Money
                </a>
              </li>
              <li className={false} style={{}}>
                <a className={false} style={{}}>
                  Customer Service
                </a>
              </li>

              <li className={false} style={{}}>
                <a className={false} style={{}}>
                  Products & Service
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      <div className="container" style={{}}>
        <div className="main" style={{}}>
          <h1 className={false} style={{}}>
            Send Money with Zelle
          </h1>
          <Row
            className={"classname"}
            style={{}}
            align={"top"}
            gutter={0}
            justify={"start"}
            wrap={false}
          >
            <Col
              className="second"
              style={{}}
              span={12}
              order={0}
              offset={0}
              push={0}
              pull={0}
            >
              <h3 className={false} style={{}}>
                With U.S. Bank and Zelle you can send or receive money safely
                and securely in minutes
              </h3>
            </Col>
          </Row>
          <Row
            className={"classname"}
            style={{}}
            align={"top"}
            gutter={0}
            justify={"start"}
            wrap={false}
          >
            <Col
              className="second-col-one"
              style={{}}
              span={12}
              order={0}
              offset={0}
              push={0}
              pull={0}
            >
              <h2 className={false} style={{}}>
                Send Money
              </h2>
            </Col>
          </Row>
          <Row
            className={"classname"}
            style={{}}
            align={"top"}
            gutter={0}
            justify={"start"}
            wrap={false}
          >
            <Col
              className="second-col-two"
              style={{}}
              span={12}
              order={0}
              offset={0}
              push={0}
              pull={0}
            >
              <h2 className={false} style={{}}>
                Request Money
              </h2>
            </Col>
          </Row>
          <Row
            className={"classname"}
            style={{}}
            align={"top"}
            gutter={0}
            justify={"start"}
            wrap={false}
          >
            <Col
              className="second-col-three"
              style={{}}
              span={12}
              order={0}
              offset={0}
              push={0}
              pull={0}
            >
              <h2 className={false} style={{}}>
                Split the bill
              </h2>
            </Col>
          </Row>
          <Row
            className={"classname"}
            style={{}}
            align={"top"}
            gutter={0}
            justify={"start"}
            wrap={false}
          >
            <Col
              className="last-col"
              style={{}}
              span={5}
              order={0}
              offset={0}
              push={0}
              pull={0}
            >
              <h3 className={false} style={{}}>
                Activity
              </h3>
            </Col>
            <Col
              className=""
              style={{}}
              span={2}
              order={0}
              offset={0}
              push={0}
              pull={0}
            ></Col>
            <Col
              className="last-col"
              style={{}}
              span={5}
              order={0}
              offset={0}
              push={0}
              pull={0}
            >
              <h3 className={false} style={{}}>
                Enroll to receive
              </h3>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ZellePay;
