import { Anchor, Button, Tabs, Typography, Card } from "antd";

const { Link } = Anchor;

function Confirmation() {
  return (
    <div className={false} style={{}}>
      <Anchor affix={false} bounds={5} offsetTop={0} showInkInFixed={false}>
        <Link href={"www.google.com"} title={"Back to Home"}></Link>
      </Anchor>
      <div className={false} style={{}}>
        <h1 className={false} style={{}}>
          You're all set !
        </h1>
      </div>
      <Card bordered={true} hoverable={false} loading={false} size={"default"}>
        <p className={false} style={{}}>
          Test Biller 1 ...ruru
        </p>
        <p className={false} style={{}}>
          Ebill 1
        </p>
      </Card>
      <Card bordered={true} hoverable={false} loading={false} size={"default"}>
        <h2 className={false} style={{}}>
          PAYMENT SCHEDULED
        </h2>
        <h1 className={false} style={{}}>
          {" "}
          $ 200.50
        </h1>
        <ul className={false} style={{}}>
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
      <Button
        block={false}
        danger={false}
        disabled={false}
        ghost={false}
        htmlType={"button"}
        loading={false}
        size={"left"}
        type={"primary"}
      >
        One
      </Button>
      <span className={false} style={{}}>
        <Button
          block={false}
          danger={false}
          disabled={false}
          ghost={false}
          htmlType={"button"}
          loading={false}
          size={"middle"}
          type={"default"}
        >
          Two
        </Button>
      </span>
    </div>
  );
}

export default Confirmation;
