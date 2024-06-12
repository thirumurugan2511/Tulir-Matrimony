import React, { useEffect, useState } from 'react';
import './Searchlist.css';
import Navbar from '../Navbar/Navbar';

const Searchlist = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const profilesPerPage = 12;

    useEffect(() => {
        const fetchData = async () => {
            try {
                //('https://tulirmatrimony.com/controlapi/customerlist.php');
                 //http://localhost:8000/data/memlist
                const response = await fetch('http://localhost:8000/data/memlist');
                const result = await response.json();
                console.log(result);
                setData(result.body);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Calculate the profiles to display based on the current page
    const indexOfLastProfile = currentPage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    const currentProfiles = data.slice(indexOfFirstProfile, indexOfLastProfile);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / profilesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Navbar />
            <section className="speakers-section-three">
                <div className="auto-container">
                    <div className="row">
                        {currentProfiles.map((item, index) => (
                            <div key={index} className="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <a href="login" target="_blank">
                                                <img src={`data:image/jpeg;base64,${item.image}`} alt="Profile Loading.." />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name">
                                            <a href="login" target="_blank">{item.name}</a>
                                        </h4>
                                        <a href="login" target="_blank">
                                            <span className="designation">{item.age}</span>
                                            <span className="designation">{item.education}</span>
                                            <span className="designation">{item.occupaction}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div align="center" className="col-lg-12">
                        <ul className="styled-pagination" id="pagination">
                            <li className="setPage">Page {currentPage} of {pageNumbers.length}</li>
                            {pageNumbers.map(number => (
                                <li key={number} className={number === currentPage ? 'activee' : ''}>
                                    <a onClick={() => paginate(number)}>{number}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Searchlist;
