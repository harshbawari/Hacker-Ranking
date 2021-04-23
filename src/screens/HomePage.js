import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as APIURLS from '../API/APIURLS';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

import { } from 'reactstrap';

import Header from '../components/HeaderComponent';

function HomePage(props) {
    const [hackers, setHackers] = useState([]);

    useEffect(() => {
        get_hackers();
    }, []);

    const get_hackers = async () => {
        //Get from API
        axios.get(APIURLS.HACKER_LIST)
            .then((res) => {
                const hackers = res.data;
                console.log('List: ', hackers);
                setHackers(hackers);
            })
            .catch((err) => {
                console.log('Error in getting hacker list: ', err);
            });
    }

    const hacker_list = hackers.map((hacker) => {
        return(
            <div key={hacker.id} className="col-12 col-md-5 m-1">
                <Card>
                    <Link to={`/hackers/${hacker.id}`}>
                        <CardImg width="100%" src={hacker.pic} alt={hacker.name} />
                        <CardImgOverlay>
                            <CardTitle>{hacker.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
            </div>
        );
    })

    return(
        <div className="container-fluid">
            <Header />
            
            <div className="row">
                {hacker_list}
            </div>
        </div>
    );
}

export default HomePage;