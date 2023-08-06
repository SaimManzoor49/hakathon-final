import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { BiCategoryAlt } from 'react-icons/bi';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { MdOutlineDeliveryDining } from 'react-icons/md';
// import CategoryForm from '../../components/Dashboard/Category';
import Categories from './Categories';
import { useAuth } from '../../context/AuthContext';
import ManageProducts from '../../components/Dashboard/ManageProducts';
import AddProduct from '../../components/Dashboard/AddProduct';
import Orders from '../../components/Dashboard/Orders';
const { Header, Sider, Content } = Layout;



const Dash = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [componentToShow, setComponentToShow] = useState("categories");
  const {
    token: { colorBgContainer },
  } = theme.useToken();



  const {user } = useAuth()
  console.log(user)


  
  return (
    <Layout style={{ height:'100vh'}} >
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <BiCategoryAlt />,
              label: 'Add Category',
              onClick:()=>{setComponentToShow("categories")}
              
            },
            {
              key: '2',
              icon: <MdOutlineProductionQuantityLimits />,
              label: 'Manage Products',
              onClick:()=>{setComponentToShow("manageProducts")}
            },
            {
              key: '3',
              icon: <AiOutlineAppstoreAdd />,
              label: 'Add new Product',
              onClick:()=>{setComponentToShow("addProducts")}
            },
            {
              key: '4',
              icon: <MdOutlineDeliveryDining />,
              label: 'Orders',
              onClick:()=>{setComponentToShow("orders")}
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >

          {
            componentToShow == 'categories' && <Categories /> 
          }
           {
           componentToShow == 'manageProducts' && <ManageProducts /> 
           } 
           {
           componentToShow == 'addProducts' && <AddProduct /> 
           } 
           {
           componentToShow == 'orders' && <Orders /> 
           } 




          
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dash;