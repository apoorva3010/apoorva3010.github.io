import React, { Component } from 'react'
import homes from './home.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import axios from 'axios'
import LOGO from '../logo1.jpg';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { get } from 'https';
import Card from '../card/card';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export class home extends Component {
    
    state = {
        link: null,
        selectedMenu: null
    }

    
    async componentDidMount(){
        this.setState({
            link: null,
            selectedMenu: null
        });
    }

    handleClick = e => {
        this.setState({selectedMenu: e,
            link : e==1 ? 'https://api.openweathermap.org/data/2.5/group?id=1273294,1851632,1275339,1269515,1269639,1269743,1273491,1277333,1275004,1264527,1255634,1269321,1262180,1269633,1269843,1253405&appid=397adabd8e6500dcc06fad5a0c19511d'
            : e==2 ? 'https://api.openweathermap.org/data/2.5/group?id=2178896,2178933,2178982,2179466,2179538,2179581,2179631,2179639,2179670,2179682,2179756,2179780,2179794,2181818,2181872,2181997&appid=397adabd8e6500dcc06fad5a0c19511d'
                : e==3 ? 'https://api.openweathermap.org/data/2.5/group?id=2147714,2144551,2144127,2144129,2144131,2144139,2144144,2143833,2143824,2143839,2143875,2148955,2149001,2149056,2149132,2149172&appid=397adabd8e6500dcc06fad5a0c19511d'
                    : e==4 ? 'https://api.openweathermap.org/data/2.5/group?id=2012773,2012780,2012861,2012938,2012956,2012979,2013030,2013225,2013272,2014705,2014917,2014836,2014833,2016733,2016711,2021188&appid=397adabd8e6500dcc06fad5a0c19511d'
                        : 'https://api.openweathermap.org/data/2.5/group?id=1248749,1248991,1249145,1223738,1223648,1230613,1230089,1234633,1239593,1244596,1244397,1246924,1246321,1246007,1244713,1242835&appid=397adabd8e6500dcc06fad5a0c19511d'
        });
    }

    
    render() {
        const {link} = this.state;
        

        return (
            <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper ">
                        <a href="#"><img src={LOGO} style={{width:'60px', height:'55px',  marginLeft:"10px", marginTop: "5px"}}/></a>
                    </div>
                </nav>
            </div>
            <Sider style={{ overflow: 'auto', height: '70vh', position: 'fixed', left: 0, backgroundColor:'#424242', marginTop:'0.5%'}}>                <Menu mode="inline" style={{backgroundColor:'#424242', color:'white'}}>
                    <Menu.Item key="1" onClick={()=> this.handleClick(1)}>
                    India
                    </Menu.Item>
                    <Menu.Item key="2" onClick={()=> this.handleClick(2)}>
                    New Zealand
                    </Menu.Item>
                    <Menu.Item key="3" onClick={()=> this.handleClick(3)}>
                    Australia
                    </Menu.Item>
                    <Menu.Item key="4" onClick={()=> this.handleClick(4)}>
                    Russia
                    </Menu.Item>
                    <Menu.Item key="5" onClick={()=> this.handleClick(5)}>
                    Sri Lanka
                    </Menu.Item>
                   
                </Menu>
                </Sider>
                <div className="container">
                    {this.state.link===null? (
                        <div>
                        <br></br>
                        <h5 className="center"><i>Select a country</i></h5> 
                        <br></br>
                        <h6 className="center"><i> For temperatures more than 298K : <CheckCircleTwoTone twoToneColor="red" /></i></h6>
                        <br></br>
                        <h6 className="center"><i> For temperatures between 273K and 298K : <CheckCircleTwoTone twoToneColor="green" /></i></h6>
                        <br></br>
                        <h6 className="center"><i> For temperatures less than 273K : <CheckCircleTwoTone twoToneColor="blue" /></i></h6>
                        </div>
                        ) : <Card link = {this.state.link} />}
                </div>
            
            </div>
        )
    }
}

export default home
