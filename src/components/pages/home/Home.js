import { Anchor, Button, Tabs, Typography, Divider, Calendar } from "antd";

const { Link } = Anchor;

const { TabPane } = Tabs;

const { Title, Paragraph, Text } = Typography;

const HomeComponent = () => {
  return (
    <>
      <div className={false} style={{}}>
        <Anchor affix={false} bounds={5} offsetTop={0} showInkInFixed={false}>
          <Link href={"www.google.com"} title={"Back to Home"}></Link>
        </Anchor>
        <div className={false} style={{}}>
          <h1 className={false} style={{}}>
            Your Items
          </h1>
          <Button
            block={false}
            danger={false}
            disabled={false}
            ghost={false}
            htmlType={"button"}
            loading={false}
            size={"middle"}
            type={"text"}
          >
            + Add Items
          </Button>
          <Button
            block={false}
            danger={false}
            disabled={false}
            ghost={false}
            htmlType={"button"}
            loading={false}
            size={"large"}
            type={"primary"}
          >
            Pay Multiple Items
          </Button>
        </div>
        <div className={false} style={{}}>
          <Tabs
            animated={"{ inkBar: true, tabPane: false }"}
            centered={false}
            defaultActiveKey={"1"}
            hideAdd={false}
            moreIcon={"<EllipsisOutlined />"}
            size={"default"}
            tabPosition={"top"}
            type={"line"}
          >
            <TabPane forceRender={false} key={"1"} tab={"To Pay"}>
              <Typography>
                <Title
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
                  Coming up Later
                </Title>
                <Paragraph
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
                  <div className={false} style={{}}>
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
                      Test Item 1
                    </Text>
                  </div>
                  <Paragraph
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
                    Make a payment on April
                  </Paragraph>
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
                    $250.00
                  </Text>
                </Paragraph>
                <Divider
                  dashed={false}
                  orientation={"center"}
                  plain={true}
                  type={"horizontal"}
                ></Divider>
              </Typography>
            </TabPane>
            <TabPane forceRender={false} key={"2"} tab={"Activity Calender"}>
              <Typography>
                <Title
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
                  Overview
                </Title>
                <Calendar
                  fullscreen={true}
                  locale={"default"}
                  mode={"month"}
                ></Calendar>
              </Typography>
            </TabPane>
          </Tabs>
          <Divider
            dashed={false}
            orientation={"center"}
            plain={true}
            type={"horizontal"}
          ></Divider>
        </div>
      </div>
    </>
  );
};
export default HomeComponent;
