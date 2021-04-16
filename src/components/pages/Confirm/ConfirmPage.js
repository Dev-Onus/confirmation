import { Anchor, Button, Row, Col, Card } from "antd";
import "./style.css";
const { Link } = Anchor;

function Confirmation() {
  return (
    <div>
              <div className={false} style={{}}>

<Row align={"top"} gutter={0} justify={"center"} wrap={false}>
    <Col span={20} order={0} offset={6} push={0} pull={0}>
    <ul className="action-bar" style={{}}>
        <li className={false} style={{}}>
          <a href="" className={false} style={{}}>
            Log Out
          </a>
        </li>
        <li className={false} style={{}}>
          <a href="" className={false} style={{}}>
             Security
          </a>
        </li>
        <li className={false} style={{}}>
          <a href="" className={false} style={{}}>
             Need Help?
          </a>
        </li>
        <li className={false} style={{}}>
          <a href="" className={false} style={{}}>
          Locations
          </a>
        </li>
        <li className={false} style={{}}>
          <a href="" className={false} style={{}}>
          Messages
          </a>
        </li>
        <li className={false} style={{}}>
          <a href="" className={false} style={{}}>
          Hi, Larry 
          </a>
        </li>
      </ul>
   </Col>
   </Row>
   </div>
   <div className="main-header" style={{}}>

<Row align={"top"} gutter={0} justify={"center"} wrap={false}>
<Col span={20} order={0} offset={6} push={0} pull={0}>
<ul className={false} style={{}}>
<li className={false} style={{}}>
      <a href="" className={false} style={{}}>
      LOGO.
      </a>
    </li>
    <li className={false} style={{}}>
      <a href="" className={false} style={{}}>
      My Accounts
      </a>
    </li>
    <li className={false} style={{}}>
      <a href="" className={false} style={{}}>
      Transfers
      </a>
    </li> 
    <li className={false} style={{}}>
      <a href="" className={false} style={{}}>
         Bill Payments
      </a>
    </li>
    <li className={false} style={{}}>
      <a href="" className={false} style={{}}>
         Send Money
      </a>
    </li>
    <li className={false} style={{}}>
      <a href="" className={false} style={{}}>
        Customer Service
      </a>
    </li>
    
<li className={false} style={{}}>
      <a href="" className={false} style={{}}>
        Products & Service
      </a>
    </li>
   
    
   
    
  </ul>
</Col>
</Row>
</div>
    <div className="container" style={{}}>
      {/* <Anchor affix={false} bounds={5} offsetTop={0} showInkInFixed={false}>
        <Link href={"www.google.com"} title={"Back to Home"}></Link>
      </Anchor> */}
      <Row align={"top"} gutter={0} justify={"center"} wrap={false}>
        <Col span={12} order={0} offset={6} push={0} pull={0}>
          <div className={false} style={{}}>
            <h1 className="header" style={{}}>
              You're all set !
            </h1>
          </div>
          <Col span={16} order={0} offset={0} push={0} pull={0}>
            <Card
              bordered={true}
              hoverable={false}
              loading={false}
              size={"default"}
            >
              <p className={false} style={{}}>
                Test Biller 1 ...ruru
              </p>
              <p className={false} style={{}}>
                Ebill 1
              </p>
            </Card>
            <Card
              bordered={true}
              hoverable={false}
              loading={false}
              size={"default"}
            >
              <h2 className="start" style={{}}>
                PAYMENT SCHEDULED
              </h2>
              <h1 className="amount" style={{}}>
                {" "}
                $ 200.50
              </h1>
              <ul className="vertical" style={{}}>
                <li className={false} style={{}}>
                  On April 19
                </li>
                <li className={false} style={{}}>
                  Checking id: 1234qwert
                </li>
                <li className={false} style={{}}>
                  Confirmation : (AEKLMU)
                </li>
              </ul>
            </Card>
          </Col>
          <div className="button" style={{}}>
            <Col span={12} order={0} offset={8} push={0} pull={0}>
              <Button
                block={false}
                danger={false}
                disabled={false}
                ghost={false}
                htmlType={"button"}
                loading={false}
                size={"left"}
                type={"default"}
              >
                Set up autopay
              </Button>
              <span className={false} style={{ margin: 24 }}>
                <Button
                  block={false}
                  danger={false}
                  disabled={false}
                  ghost={false}
                  htmlType={"button"}
                  loading={false}
                  size={"middle"}
                  type={"primary"}
                >
                  Back to bills
                </Button>
              </span>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default Confirmation;
