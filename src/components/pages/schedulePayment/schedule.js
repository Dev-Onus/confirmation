import "./schedule.css";
import { Anchor, Button, Row, Col, Card } from "antd";

const { Link } = Anchor;

const Schedule = () => {
  return (
    <>
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
      <div className="block" style={{}}>
        <Anchor affix={false} bounds={5} offsetTop={0} showInkInFixed={false}>
          <Link href={"www.google.com"} title={"Back to Home"}></Link>
        </Anchor>
        <h1 className="main-heading" style={{}}>
          What would you like to do today?
        </h1>
        <div className={false} style={{}}>
          <Card
            className={"classname"}
            style={{}}
            bordered={true}
            hoverable={false}
            loading={false}
            size={"default"}
          >
            <a>
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
                  span={6}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                >
                  LOGO1
                </Col>
                <Col
                  className={"classname"}
                  style={{}}
                  span={16}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                >
                  <h3 className="" style={{}}>
                    Pay my bill.
                  </h3>
                  <p className={false} style={{}}>
                    Enter your bill details, save it and pay it when needed.
                  </p>
                </Col>
              </Row>
            </a>
          </Card>
          <Card
            className={"classname"}
            style={{}}
            bordered={true}
            hoverable={false}
            loading={false}
            size={"default"}
          >
            <a>
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
                  span={6}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                >
                  LOGO1
                </Col>
                <Col
                  className={"classname"}
                  style={{}}
                  span={16}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                >
                  <h3 className="" style={{}}>
                    Pay someone with Zelle.
                  </h3>
                  <p className={false} style={{}}>
                    A fast way to send money to people or companies you trust. All you need is a phone number or an email address.
                  </p>
                </Col>
              </Row>
            </a>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Schedule;
