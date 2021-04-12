import ConfirmationRouter from './components/confirmationRouter';
import Toolbar from './components/Header/Toolbar';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <>
    
    <Layout>
       <Header> <Toolbar /> </Header>
        <Content>
        Text sample
        <ConfirmationRouter />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
</>
  );
}

export default App;
