import React ,{useState} from 'react';
import "../WebDevComp/stylesWebDev.css" ; 

const FirstPart = () => {
 const [displayParagraph, setDispalyParagraph] = useState(false) ; 

 const toggleParagraph = () => {
    setDispalyParagraph(prev => !prev) ;
 }
  return (
            <>
            <div className='Paragraph-web-1'>
                <div><h1 className="display-5 fw-bold paragraph-title" style={ {color:"black" }}>Database Development Services</h1></div>
            <div> 
            <p className='Paragraph-context-1'>Shamssoftware offers assistance with database system architecture and development procedures
             as part of the software development process through its expert workforce.</p>
            </div>
            <div>
                <h3 className=" fw-bold paragraph-title3" style={ {color:"black" }}>SQL Relational Database Solutions</h3>
            </div>
            <div>
            <p className='Paragraph-context-1'> 
            Shamssoftware uses current technologies to produce secure, trying-to-cut solutions for your organization.
            </p>
            </div>
            <div>
                <h3 className=" fw-bold paragraph-title3" style={ {color:"black" }}>Data Consistency</h3>
            </div>
            <div><p className='Paragraph-context-1'>We offer solutions that assure data consistency across networks, 
                    databases, software, and other systems. Consistent data is essential for making proper business decisions.
                </p>
              </div>
              <div>
                <h3 className=" fw-bold paragraph-title3" style={ {color:"black" }}>Autonomous Processes</h3>
            </div>
            <div>
                <p className='Paragraph-context-1'>
                Minimize your manual effort with an efficient architecture with correctly defined rules.
                 You can complete all tasks thanks to automatic backup processes, accurate and complete update tracking, security measures, and authorization architecture.
                 Shamssoftware creates a database infrastructure for you autonomously and with almost zero operation error.
                </p>
            </div>
            <div>
                <h3 className=" fw-bold paragraph-title3" style={ {color:"black" }}>Database Concurrency</h3>
            </div>
            <div>
                <p className='Paragraph-context-1'>
                Concurrency Control in a Database Management System is a method of controlling concurrent processes that do not conflict.
                 It ensures that Database transactions are carried out concurrently and precisely to produce accurate results without jeopardizing the data integrity of the database.
                </p>
            </div>
            <div>
                <p  className='Paragraph-context-1'>Shamssoftware's database can support numerous users and processes running simultaneously within the project.
                 It also uses top-notch security solutions to maintain data security and consistency.</p>
            </div>
                <div>
                    <h2 className="display-5 fw-bold paragraph-title2" style={ {color:"black" }}>Tools</h2>
                </div>
                <div class="container">
                <div class="row">
                <div class=" col-md-3 col-6 col-code">
                    <img width="45" height="45" src="assets/img/grid/microsoftSQL.png" alt="Microsoft SQL"/>
                    <span className='span-title'> Microsoft SQL </span>
                </div>
                <div class=" col-md-3 col-6 col-code">
                    <img width="45" height="45" src="assets/img/grid/mysql.svg" alt="MySQL"/>
                    <span className='span-title'> MySQL</span>
                </div>
                <div class=" col-md-3 col-6 col-code">
                     <img width="45" height="45" src="assets/img/grid/mongodb.svg" alt="MongoDB"/>
                     <span className='span-title'> MongoDB</span>
                </div>
                <div class=" col-md-3 col-6 col-code">
                     <img width="45" height="45" src="assets/img/grid/plsql.png" alt="PLSQL"/>
                     <span className='span-title'> PL-SQL</span>
                </div>
                </div>
                <div class="row">
                <div class=" col-md-4 col-6 col-code">
                    <img width="45" height="45" src="assets/img/grid/redis.svg" alt="Redis"/>
                    <span className='span-title'> Redis</span>
                </div>
                <div class="col-md-4 col-6 col-code">
                    <img width="45" height="45" src="assets/img/grid/firebase.svg" alt="FireBase"/>
                    <span className='span-title'> FireBase</span>
                </div>
                <div class="col-md-4 col-6 col-code">
                     <img width="45" height="45" src="assets/img/grid/postgresql.svg" alt="PostGreSQL"/>
                     <span className='span-title'> PostGreSQL</span>
                </div>
                </div>
            </div>
            <div>
                <h3 className=" fw-bold paragraph-title3" style={ {color:"black" }}>Performance, Optimization, and Procedures</h3>
            </div>
            <div>
            <p className='Paragraph-context-1'>
                      Shamssoftware selects to establish each data relationship in the projects we work
                       on while using an optimized architecture for the data structure that will expand over time.
                </p>
            </div>
            <div>
            <p className='Paragraph-context-1'>
                    The most crucial component of a sustainable structure is performance tuning, an issue that is difficult to predict at first.
                    For the convenience of user operations and maintenance costs,
                    a database developer or DBA must regularly review the data architecture and optimize the processing times.
            </p>
            </div>
            <div>
                <p className='Paragraph-context-1'>
                    It takes more than just sound engineering to create a database that works with your software;
                    you also need to make the ideal database solution for your particular software product.
                </p>
            </div>
            <div>
                <p className='Paragraph-context-1'>
                From small projects to enterprise-grade systems and big data solutions that need a rock-solid database architecture to be reliable, 
                we provide custom database development services for data-driven software (web, mobile, internal, and more).
                </p>
            </div>
             
            <div>
                <h3 className=" fw-bold paragraph-title3" style={ {color:"black" }}>Database Migration</h3>
            </div>
            <div>
            <p className='Paragraph-context-1'>Your digital business depends on data, so updating your systems is crucial.
             Our database solution specialists assist with various migrations, from servers to the cloud,
              between different database systems, or to an entirely different architecture. </p>
            <p className='Paragraph-context-1'>We make sure your workflow is unbroken,
             and your data integrity is protected throughout the process of implementing your custom database development solutions for your peace of mind.</p>
            </div>
            </div>
     
            </>
  );
};

export default FirstPart;
