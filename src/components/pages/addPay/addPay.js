import { Button, Typography, Card, Radio, Input } from "antd";
import "./addPay.css";

const { Title } = Typography;

const { Group: RadioGroup, Button: RadioButton } = Radio;
const { Group: InputGroup } = Input;

const addPayComponent = () => {
  return (
    <>
      <div className={"containers"}>
        <Title
          className={"classname"}
          style={{ color: "#0c2074", fontWeight: "bold" }}
          code={false}
          copyable={false}
          delete={false}
          disabled={false}
          editable={false}
          ellipsis={false}
          level={2}
          mark={false}
          underline={false}
        >
          Add & Pay
        </Title>
        <Title
          className={"classname"}
          code={false}
          copyable={false}
          delete={false}
          disabled={false}
          editable={false}
          ellipsis={false}
          level={5}
          mark={false}
          underline={false}
        >
          DETAILS
        </Title>
        <Card
          className={"site-card-border-less-wrapper"}
          bordered={true}
          hoverable={false}
          loading={false}
          size={"default"}
        >
          <div className={"classname"}>
            <Title
              className={"classname"}
              code={false}
              copyable={false}
              delete={false}
              disabled={false}
              editable={false}
              ellipsis={false}
              level={5}
              mark={false}
              underline={false}
            >
              Who would you like to pay?
            </Title>
            <RadioGroup
              className={"classname"}
              defaultValue="a"
              buttonStyle={"solid"}
              disabled={false}
              optionType={"default"}
            >
              <RadioButton
                className={"classname"}
                style={{ width: "225px" }}
                autoFocus={false}
                checked={false}
                defaultChecked={false}
                disabled={false}
                value="a"
              >
                Company
              </RadioButton>
              <RadioButton
                className={"classname"}
                style={{ width: "225px" }}
                autoFocus={false}
                checked={false}
                defaultChecked={false}
                disabled={false}
                value="b"
              >
                Person
              </RadioButton>
            </RadioGroup>
          </div>
          <div className={"classname"}>
            <Input
              className={"classname"}
              style={{
                borderBottom: "1px solid grey",
                fontSize: "1rem",
                width: "500px",
                paddingTop: "20px",
              }}
              allowClear={false}
              bordered={false}
              disabled={false}
              type={"text"}
              placeholder={"Company name"}
            ></Input>
            <Input
              className={"classname"}
              style={{
                borderBottom: "1px solid grey",
                fontSize: "1rem",
                width: "500px",
                paddingTop: "20px",
              }}
              allowClear={false}
              bordered={false}
              disabled={false}
              type={"text"}
              placeholder={"Account number"}
            ></Input>
            <Input
              className={"classname"}
              style={{
                borderBottom: "1px solid grey",
                fontSize: "1rem",
                width: "500px",
                paddingTop: "20px",
              }}
              allowClear={false}
              bordered={false}
              disabled={false}
              type={"text"}
              placeholder={"Bill nickname"}
            ></Input>
          </div>
        </Card>
        <Title
          className={"classname"}
          style={{ paddingTop: "20px" }}
          code={false}
          copyable={false}
          delete={false}
          disabled={false}
          editable={false}
          ellipsis={false}
          level={5}
          mark={false}
          underline={false}
        >
          CONTACT INFO
        </Title>
        <Card
          className={"site-card-border-less-wrapper"}
          bordered={true}
          hoverable={false}
          loading={false}
          size={"default"}
        >
          <div className={"classname"}>
            <Input
              className={"classname"}
              style={{
                borderBottom: "1px solid grey",
                fontSize: "1rem",
                width: "500px",
                paddingTop: "20px",
              }}
              allowClear={false}
              bordered={false}
              disabled={false}
              type={"text"}
              placeholder={"Merchant's phone number"}
            ></Input>
            <Input
              className={"classname"}
              style={{
                borderBottom: "1px solid grey",
                fontSize: "1rem",
                width: "500px",
                paddingTop: "20px",
              }}
              allowClear={false}
              bordered={false}
              disabled={false}
              type={"text"}
              placeholder={"Merchant's street address"}
            ></Input>
            <Input
              className={"classname"}
              style={{
                borderBottom: "1px solid grey",
                fontSize: "1rem",
                width: "500px",
                paddingTop: "20px",
              }}
              allowClear={false}
              bordered={false}
              disabled={false}
              type={"text"}
              placeholder={"Apt. / Unit / Suite (optional)"}
            ></Input>
            <InputGroup
              className={"classname"}
              style={{}}
              compact={false}
              size={"default"}
            >
              <Input
                className={"classname"}
                style={{
                  borderBottom: "1px solid grey",
                  fontSize: "1rem",
                  width: "40%",
                  paddingTop: "20px",
                  marginRight: "10px",
                }}
                allowClear={false}
                bordered={false}
                disabled={false}
                type={"text"}
                placeholder={"City"}
              ></Input>
              <Input
                className={"classname"}
                style={{
                  borderBottom: "1px solid grey",
                  fontSize: "1rem",
                  width: "23%",
                  paddingTop: "20px",
                  marginRight: "10px",
                }}
                allowClear={false}
                bordered={false}
                disabled={false}
                type={"text"}
                placeholder={"State"}
              ></Input>
              <Input
                className={"classname"}
                style={{
                  borderBottom: "1px solid grey",
                  fontSize: "1rem",
                  width: "25%",
                  paddingTop: "20px",
                  paddingRight: "10px",
                }}
                allowClear={false}
                bordered={false}
                disabled={false}
                type={"text"}
                placeholder={"ZIP code"}
              ></Input>
            </InputGroup>
          </div>
        </Card>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "20px",
          }}
        >
          <Button
            style={{ marginRight: "20px" }}
            block={false}
            danger={false}
            disabled={false}
            ghost={true}
            htmlType={"button"}
            loading={false}
            size={"large"}
            type={"primary"}
          >
            Cancel
          </Button>
          <Button
            style={{}}
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
            Add Bill
          </Button>
        </div>
      </div>
    </>
  );
};
export default addPayComponent;
