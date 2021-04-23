import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as APIURLS from '../API/APIURLS';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

import Header from '../components/HeaderComponent';

function HackerInfo(props) {
    const [loading, setLoading] = useState(true);

    const hackerId = props.match.params.hackerId;

    const [hacker, setHacker] = useState();

    useEffect(() => {
        get_hackers();

        setLoading(false);
    }, []);

    const get_hackers = async () => {
        //Get from API
        axios.get(APIURLS.HACKER_LIST)
            .then((res) => {
                const hackers = res.data;
                
                const curHacker = hackers.find((h) => h.id == hackerId );

                setHacker(curHacker);
            })
            .catch((err) => {
                console.log('Error in getting hacker list: ', err);
            });
    }
    
    return(
        <div>
            <Header />

            <div className="col-12 col-md-5 m1">
                {loading 
                    ? <Card>

                    </Card>
                    : hacker ? <Card>
                    <CardImg top src={hacker.pic} alt={hacker.name} />
                    <CardBody>
                        <CardTitle>{hacker.name}</CardTitle>
                        <CardText>{hacker.name}</CardText>
                    </CardBody>
                </Card> : null
                }
            </div>
        </div>
      );
}

export default HackerInfo;