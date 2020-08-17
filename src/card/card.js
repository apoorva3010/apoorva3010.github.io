import React, {Component} from 'react';
import axios from 'axios';
import { get } from 'https';
import {Col, Card, Spin, Row} from 'antd';
import { getData } from '../api';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

export default class card extends Component{
    constructor(props) {
        super(props);
        this.state = {
          link: this.props.link
        };
      }

      async fetchDataAndSetState(link){
          var {data} = await getData(link);

          this.setState({
              data: data.list
          });

      }

      async componentDidMount(){
          await this.fetchDataAndSetState(
              this.state.link
          );
      };

      async componentDidUpdate(prevProps, prevState){
        if(prevProps.link !== this.props.link){
            this.fetchDataAndSetState(this.props.link);
        }
      }
    
      render(){

        const {data} = this.state;
        const showdata = (
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="center" style={{marginLeft: '150px', marginTop : "20px"}}>
                {data!==undefined ? (data.map((item,index) => (
                    <Col key={index} xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card  style={{ width: 'auto', margin: '10px', backgroundColor: 'rgba(224, 218, 202)', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} bordered={true}>
                            <h6>{item.name} </h6>
                            <p>Current Temperature: {item.main.temp}K  &nbsp;&nbsp; <CheckCircleTwoTone twoToneColor={item.main.temp>298 ? "red" : 273<item.main.temp<298 ? "green" : "blue" }/>
                                </p>
                        </Card>
                    </Col>

                ))) : 
                
                (
                    <div  className="container center">
                        <Spin size='large'/>
                    </div>
                )}
            </Row>
        )

          return(
            <div className="center">
                {showdata}
            </div>
          );
      }
}

