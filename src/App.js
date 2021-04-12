import RouterData from "./components/Router";
import Toolbar from "./components/Header/Toolbar";
import { Layout, Menu, Breadcrumb } from "antd";
import "./App.scss";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <>
      <RouterData />
      {/* <Layout>
        <Header>
          {" "}
          <Toolbar />{" "}
        </Header>
        <Content>
          Text sample
          <Router />
        </Content>
        <Footer>Footer</Footer>
      </Layout> */}
    </>
  );
}

export default App;
