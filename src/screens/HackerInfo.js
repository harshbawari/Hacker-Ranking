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
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.log('Error in getting hacker list: ', err);
            });
    }
    
    return(
        <div>
            <Header />

            <div className="row align-items-center justify-content-center">
                {loading 
                    ? <div>
                        Loading...
                        </div>
                    : hacker ? <div key={hacker.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <Link to={`/hackers/${hacker.id}`}>
                            {//<CardImg width="100%" src={hacker.pic} alt={hacker.name} />
                            }
                                <h2>{hacker.name}</h2>
                        </Link>
                        <div>
                            <b>Location:</b> {hacker.location} <b>Education:</b> {hacker.education} <br />
                            <b>Followers:</b> {hacker.followers} <b>Following:</b> {hacker.following} 
                        </div>
                        <div className="">
                            <h3>Competitive Percentile</h3>
                            <div>
                                <table>
                                    <tr>
                                        <th>Topic</th>
                                        <th>Percentile</th>
                                    </tr>
                                    <tr>
                                        <td>Data Structures</td>
                                        <td>{hacker.competitivePercentile.dataStructures}</td>
                                    </tr>
                                    <tr>
                                        <td>Algorithms</td>
                                        <td>{hacker.competitivePercentile.algorithms}</td>
                                    </tr>
                                    <tr>
                                        <td>C++</td>
                                        <td>{hacker.competitivePercentile.cpp}</td>
                                    </tr>
                                    <tr>
                                        <td>Java</td>
                                        <td>{hacker.competitivePercentile.java}</td>
                                    </tr>
                                    <tr>
                                        <td>Python</td>
                                        <td>{hacker.competitivePercentile.python}</td>
                                    </tr>
                                    <tr>
                                        <td>HTML</td>
                                        <td>{hacker.competitivePercentile.html}</td>
                                    </tr>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>{hacker.competitivePercentile.javascript}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Card>
                </div> : null
                }
            </div>
        </div>
      );
}

export default HackerInfo;