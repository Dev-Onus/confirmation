import { Row, Col, Anchor, Typography, Card, Button, Divider } from "antd";
const { Link } = Anchor;

const { Title, Text } = Typography;

const CheckoutComponent = () => {
  return (
    <>
      <Row align={"top"} gutter={0} justify={"start"} wrap={false}>
        <Col span={12} order={0} offset={6} push={0} pull={0}>
          <Anchor affix={true} bounds={5} offsetTop={0} showInkInFixed={false}>
            <Link href={"#"} title={"BACK TO DASHBOARD"}></Link>
          </Anchor>
          <Title
            code={false}
            copyable={false}
            delete={false}
            disabled={false}
            editable={false}
            ellipsis={false}
            level={4}
            mark={false}
            underline={false}
          >
            BILL DETAILS
          </Title>
          <div className={false}>
            <span className={false} style={{color:"blue"}}>Test Biller 1 ...ruru</span>
            <span className={false}>
              <Text
                style={{ float: "right" }}
                code={false}
                copyable={false}
                delete={false}
                disabled={false}
                editable={true}
                ellipsis={false}
                keyboard={false}
                mark={false}
                strong={false}
                underline={false}
              >
                Edit
              </Text>
            </span>
          </div>
          <div className={false}>
            <Title
              code={false}
              copyable={false}
              delete={false}
              disabled={false}
              editable={false}
              ellipsis={false}
              level={4}
              mark={false}
              underline={false}
            >
              CURRENT BILL
            </Title>
            <Card
              bordered={true}
              hoverable={false}
              loading={false}
              size={"default"}
            >
              <div className={false}>
                <span className={false}>
                  <Title
                  
                    code={false}
                    copyable={false}
                    delete={false}
                    disabled={false}
                    editable={false}
                    ellipsis={false}
                    level={4}
                    mark={false}
                    underline={false}
                    type={"secondary"}
                  >
                    $250.00
                  </Title>
                  <span className={false} style={{ float: "right" }}>
                    <Text
                      code={false}
                      copyable={false}
                      delete={false}
                      disabled={true}
                      editable={false}
                      ellipsis={false}
                      keyboard={false}
                      mark={false}
                      strong={false}
                      underline={false}
                      
                    >
                      Make a payment by, May 13
                    </Text>
                  </span>
                </span>
              </div>
            </Card>
          </div>
          <Title
            code={false}
            copyable={false}
            delete={false}
            disabled={false}
            editable={false}
            ellipsis={false}
            level={4}
            mark={false}
            underline={false}
          >
            UPCOMING PAYMENTS
          </Title>
          <Card
            bordered={true}
            hoverable={false}
            loading={false}
            size={"default"}
          >
            <div className={false}>
              <Title
                code={false}
                copyable={false}
                delete={false}
                disabled={false}
                editable={false}
                ellipsis={false}
                level={4}
                mark={false}
                underline={false}
              >
                April 19, 2021
              </Title>
              <Text
                code={false}
                copyable={false}
                delete={false}
                disabled={true}
                editable={false}
                ellipsis={false}
                keyboard={false}
                mark={false}
                strong={false}
                underline={false}
              >
                Processing
              </Text>
            </div>
          </Card>
          <Title
            code={false}
            copyable={false}
            delete={false}
            disabled={false}
            editable={false}
            ellipsis={false}
            level={4}
            mark={false}
            underline={false}
          >
            PAYMENT SETTINGS
          </Title>
          <Row align={"top"} gutter={8} justify={"start"} wrap={false}>
            <Col span={12} order={0} offset={0} push={0} pull={0}>
              <Card
                bordered={true}
                hoverable={false}
                loading={false}
                size={"default"}
              >
                <div className={false}>
                  <Title
                    code={false}
                    copyable={false}
                    delete={false}
                    disabled={false}
                    editable={false}
                    ellipsis={false}
                    level={4}
                    mark={false}
                    underline={false}
                  >
                    Autopay
                  </Title>
                  <Text
                    code={false}
                    copyable={false}
                    delete={false}
                    disabled={true}
                    editable={false}
                    ellipsis={false}
                    keyboard={false}
                    mark={false}
                    strong={false}
                    underline={false}
                  >
                    Set up now
                  </Text>
                </div>
              </Card>
            </Col>
            <Col span={12} order={0} offset={0} push={0} pull={0}>
              <Card
                bordered={true}
                hoverable={false}
                loading={false}
                size={"default"}
              >
                <div className={false}>
                  <Title
                    code={false}
                    copyable={false}
                    delete={false}
                    disabled={false}
                    editable={false}
                    ellipsis={false}
                    level={4}
                    mark={false}
                    underline={false}
                  >
                    Digital bills
                  </Title>
                  <Text
                    code={false}
                    copyable={false}
                    delete={false}
                    disabled={false}
                    editable={false}
                    ellipsis={false}
                    keyboard={false}
                    mark={false}
                    strong={false}
                    underline={false}
                  >
                    On
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
          <Title
            code={false}
            copyable={false}
            delete={false}
            disabled={false}
            editable={false}
            ellipsis={false}
            level={4}
            mark={false}
            underline={false}
          >
            PAST PAYMENTS
          </Title>
          <Text
            code={false}
            copyable={false}
            delete={false}
            disabled={false}
            editable={false}
            ellipsis={false}
            keyboard={false}
            mark={false}
            strong={false}
            underline={false}
          >
            April 15 2021
          </Text>
          <Divider />
          <Button
            style={{ float: "right" }}
            className="buttons"
            block={false}
            danger={false}
            disabled={false}
            ghost={false}
            htmlType={"button"}
            loading={false}
            size={"large"}
            type={"primary"}
          >
            Make a payment
          </Button>
          <Button
            style={{ float: "right" }}
            block={false}
            danger={false}
            disabled={false}
            ghost={true}
            htmlType={"button"}
            loading={false}
            size={"large"}
            type={"primary"}
          >
            Back to bills
          </Button>
          
        </Col>
      </Row>
    </>
  );
};
export default CheckoutComponent;
