// import { Layout } from "antd";
// const {
//   Footer: { Footer },
// } = Layout;

import "./style.css";
import { Layout } from "antd";
import { Row, Col } from "antd";

const { Footer } = Layout;

function PageFooter() {
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
      <div className="display" style={{}}>
        <Row align={"top"} gutter={0} justify={"center"} wrap={false}>
          <Col span={20} order={0} offset={6} push={0} pull={0}>
            <div className="signed-out" style={{}}>
              <h1 className={false} style={{}}>
                You're signed out, Larry.
              </h1>
              <p className={false} style={{}}>
                You have been securely logged out of your account. Take care!
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Footer>
      <div className="hello" style={{}}>
          <Row align={"top"} gutter={0} justify={"start"} wrap={false}>
            <Col
              span={4}
              order={0}
              offset={4}
              push={0}
              pull={0}
              className="col"
            >
              <ul className="footer-ul-logo" style={{}}>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    FaceBook
                  </a>
                </li>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Twitter
                  </a>
                </li>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Instagram
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row align={"top"} gutter={0} justify={"start"} wrap={false}>
            <Col
              span={5}
              order={0}
              offset={4}
              push={0}
              pull={0}
              className="col"
            >
              <ul className="footer-ul" style={{}}>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Support
                  </a>
                </li>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Site Map
                  </a>
                </li>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Online Tracking & Advertisement
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              span={4}
              order={0}
              offset={0}
              push={0}
              pull={0}
              className="col"
            >
              <ul className="footer-ul" style={{}}>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Security
                  </a>
                </li>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Career
                  </a>
                </li>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Privacy
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              span={4}
              order={0}
              offset={0}
              push={0}
              pull={0}
              className="col"
            >
              <ul className="footer-ul" style={{}}>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Financial Education
                  </a>
                </li>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    Accessibility
                  </a>
                </li>
                <li className={false} style={{}}>
                  <a className={false} style={{}}>
                    CoBrowser
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              span={4}
              order={0}
              offset={0}
              push={0}
              pull={0}
              className="col"
            >
              <ul className="footer-ul" style={{}}>
                <li className={false} style={{}}>
                  U.S. Bank 800 Nicollet Mall Minneapolis MN 55402
                </li>
                <li className={false} style={{}}>
                  2021 U.S. Bank
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Footer>
    </>
  );
}
export default PageFooter;
