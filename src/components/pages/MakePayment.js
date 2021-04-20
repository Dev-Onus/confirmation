import {
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Radio,
  Input,
  Select,
  Button,
} from "antd";
const { Title, Paragraph } = Typography;
const { Group: RadioGroup } = Radio;
const { Option: SelectOption } = Select;
const MakePayment = () => {
  return (
    <>
      <Row
        align={"top"}
        gutter={0}
        justify={"start"}
        wrap={false}
        style={{ backgroundColor: "#eaeaea" }}
      >
        <Col
          span={1}
          order={0}
          offset={0}
          push={0}
          pull={0}
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={6}
          xxl={0}
        ></Col>

        <Col
          span={12}
          order={0}
          offset={0}
          push={0}
          pull={0}
          xs={20}
          sm={16}
          md={12}
          lg={8}
          xl={12}
          xxl={0}
        >
          <div className={false} style={{}}>
            <h1
              className={false}
              style={{ color: "#0c2074", fontWeight: "bold", padding: "20px" }}
            >
              Make a payment.
            </h1>
            <Card
              bordered={true}
              hoverable={false}
              loading={false}
              size={"default"}
              style={{ borderRadius: "0.8rem", marginBottom: "20px" }}
            >
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
                Test Biller .....
              </Title>
              <span className={false} style={{}}>
                Ebill1
              </span>
              <Divider
                dashed={false}
                orientation={"center"}
                plain={true}
                type={"horizontal"}
              ></Divider>
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
                  style={{ fontSize: "1rem" }}
                  span={8}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                  xs={20}
                  sm={8}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={0}
                >
                  Pay this amount
                </Col>
                <Col
                  className={"classname"}
                  style={{ fontSize: "1rem" }}
                  span={8}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                  xs={20}
                  sm={8}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={0}
                >
                  <RadioGroup
                    className={"classname"}
                    style={{}}
                    autoFocus={"outline"}
                    disabled={false}
                    optionType={"default"}
                  >
                    <Radio
                      className={"classname"}
                      style={{
                        display: "block",
                        height: "30px",
                        lineHeight: "30px",
                        fontSize: "1rem",
                        marginBottom: "1rem",
                      }}
                      autoFocus={false}
                      checked={true}
                      defaultChecked={false}
                      disabled={false}
                    >
                      Amount due
                    </Radio>
                    <Radio
                      className={"classname"}
                      style={{
                        display: "block",
                        height: "30px",
                        lineHeight: "30px",
                        fontSize: "1rem",
                        marginBottom: "1rem",
                      }}
                      autoFocus={false}
                      checked={false}
                      defaultChecked={false}
                      disabled={false}
                    >
                      Minimum
                    </Radio>
                    <Radio
                      className={"classname"}
                      style={{
                        display: "block",
                        height: "30px",
                        lineHeight: "30px",
                        fontSize: "1rem",
                        marginBottom: "1rem",
                      }}
                      autoFocus={false}
                      checked={false}
                      defaultChecked={false}
                      disabled={false}
                    >
                      Current
                    </Radio>
                    <Radio
                      className={"classname"}
                      style={{
                        display: "block",
                        height: "30px",
                        lineHeight: "30px",
                        position: "relative",
                      }}
                      autoFocus={false}
                      checked={false}
                      defaultChecked={false}
                      disabled={false}
                    >
                      <Input
                        className={"classname"}
                        style={{
                          borderBottom: "1px solid black",
                          position: "absolute",
                          color: "blue",
                          fontSize: "1rem",
                          width: "11rem",
                        }}
                        allowClear={false}
                        bordered={false}
                        disabled={false}
                        type={"text"}
                        value={"$0.00"}
                      ></Input>
                    </Radio>
                  </RadioGroup>
                </Col>

                <Col
                  className={"classname"}
                  style={{ fontSize: "1rem" }}
                  span={8}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                  xs={20}
                  sm={8}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={0}
                >
                  <Paragraph
                    className={"classname"}
                    style={{ fontSize: "1rem", paddingBottom: "0.5rem" }}
                    code={false}
                    copyable={false}
                    delete={false}
                    disabled={false}
                    editable={false}
                    ellipsis={false}
                    mark={false}
                    strong={false}
                    underline={false}
                  >
                    $250.00
                  </Paragraph>
                  <Paragraph
                    className={"classname"}
                    style={{ fontSize: "1rem", paddingBottom: "0.5rem" }}
                    code={false}
                    copyable={false}
                    delete={false}
                    disabled={false}
                    editable={false}
                    ellipsis={false}
                    mark={false}
                    strong={false}
                    underline={false}
                  >
                    $250.00
                  </Paragraph>
                  <Paragraph
                    className={"classname"}
                    style={{ fontSize: "1rem", paddingBottom: "0.5rem" }}
                    code={false}
                    copyable={false}
                    delete={false}
                    disabled={false}
                    editable={false}
                    ellipsis={false}
                    mark={false}
                    strong={false}
                    underline={false}
                  >
                    $250.00
                  </Paragraph>
                </Col>
              </Row>
              <Divider
                dashed={false}
                orientation={"center"}
                plain={true}
                type={"horizontal"}
              ></Divider>
              <Row
                className={"classname"}
                style={{}}
                align={"top"}
                gutter={"0"}
                justify={"start"}
                wrap={false}
              >
                <Col
                  className={"classname"}
                  style={{ fontSize: "1rem" }}
                  span={8}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                  xs={20}
                  sm={8}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={0}
                >
                  Pay from
                </Col>
                <Col
                  className={"classname"}
                  style={{}}
                  span={16}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                  xs={20}
                  sm={16}
                  md={16}
                  lg={16}
                  xl={16}
                  xxl={0}
                >
                  <Select
                    className={"classname"}
                    style={{ width: "25rem", borderBottom: "1px solid black" }}
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
                      sample text
                    </SelectOption>
                  </Select>
                </Col>
              </Row>
              <Divider
                dashed={false}
                orientation={"center"}
                plain={true}
                type={"horizontal"}
              ></Divider>
              <Row
                className={"classname"}
                style={{}}
                align={"top"}
                gutter={"0"}
                justify={"start"}
                wrap={"false"}
              >
                <Col
                  className={"classname"}
                  style={{ fontSize: "1rem" }}
                  span={8}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                  xs={20}
                  sm={8}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={0}
                >
                  Note
                </Col>
                <Col
                  className={"classname"}
                  style={{}}
                  span={16}
                  order={0}
                  offset={0}
                  push={0}
                  pull={0}
                  xs={20}
                  sm={16}
                  md={16}
                  lg={16}
                  xl={16}
                  xxl={0}
                >
                  <Input
                    className={"classname"}
                    style={{
                      borderBottom: "1px solid black",
                      fontSize: "1rem",
                      width: "25rem",
                    }}
                    allowClear={false}
                    bordered={false}
                    disabled={false}
                    type={"text"}
                    value={"sample"}
                  ></Input>
                  <div className={"classname"} style={{}}>
                    <span
                      className={"classname"}
                      style={{ color: "#6e6e6e", fontSize: ".75rem" }}
                    >
                      34 characters remaining
                    </span>
                  </div>
                </Col>
              </Row>
            </Card>
            <Typography className={"classname"} style={{}}>
              <Paragraph
                className={"classname"}
                style={{ fontSize: ".75rem", color: "#636466" }}
                code={false}
                copyable={false}
                delete={false}
                disabled={false}
                editable={false}
                ellipsis={false}
                mark={false}
                strong={false}
                underline={false}
              >
                Payments made after midnight (12AM) on weekdays, weekends or
                holidays will be processed by the end of the next business day.
                The cutoff time is based on the time zone where you opened your
                account.
              </Paragraph>
            </Typography>
            <div className={"classname"} style={{ clear: "both" }}>
              <div className={"classname"} style={{ float: "right" }}>
                <Button
                  className={"classname"}
                  style={{
                    color: "#0a41c5",
                    marginRight: "1rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                  block={false}
                  danger={false}
                  disabled={false}
                  ghost={false}
                  htmlType={"button"}
                  loading={false}
                  size={"middle"}
                  type={"text"}
                >
                  Cancel
                </Button>
                <Button
                  className={"classname"}
                  style={{
                    backgroundColor: "#0a41c5",
                    width: "120px",
                    borderRadius: "5px",
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
                  Pay $0.40
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col
          span={0}
          order={0}
          offset={0}
          push={0}
          pull={0}
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={6}
          xxl={0}
        ></Col>
      </Row>
    </>
  );
};
export default MakePayment;
