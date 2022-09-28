import React ,{useState} from 'react';
import "./stylesWebDev.css" ; 

const FirstPart = () => {
 const [displayParagraph, setDispalyParagraph] = useState(false) ; 

 const toggleParagraph = () => {
    setDispalyParagraph(prev => !prev) ;
 }
  return (
            <>
            <div className='Paragraph-web-1'>
                <div><h1 className="display-5 fw-bold paragraph-title" style={ {color:"black" }}>Web Development</h1></div>
            <div> 
            <p className='Paragraph-context-1'>Shamssoftware, a contracting organization with headquarters in Turkey, 
                offers Web development services to the demands of your business on the international market.
                 It produces the most effective technical solutions for your requirements thanks to its skilled staff, more than 15 years of web development experience,
                  and 100+ project experience. Knowledge management is essential to managerial tasks and operational procedures in today's enterprises.</p>
            </div>
            <div>
            <p className='Paragraph-context-1'> 
            The first step in developing web software is to work with a firm you can rely on to ensure that the development team will accept and comprehend your proposal. 
            Shamssoftware guarantees dedication, clean code, quick speed, and generally, 
            a website or web application that appeals to the eye, generates revenue, and doesn't require redesigning, rebuilding, or rearranging .
            </p>
            </div>
            <div>
            <p className='Paragraph-context-1'>Shams software is a comprehensive software application development 
                company that began with a small team of software ecosystem-trained engineers and analysts and is now expanding quickly.
            </p>
            </div>
            <div><p className='Paragraph-context-1'>With our corporate or organization-specific website/web application development services,
                   we develop solutions suitable for the business owner along with realistic and understandable procedures.
                  And produce a high-quality outcome according to the most precise schedule.
                </p>
              </div>
            <div>
                <p className='Paragraph-context-1'>
                 As a <b>Web Application Development Company</b>, we produce solutions for companies in the following fields of activity :
                </p>
                <ul className='Paragraph-list'>
                    <li>Retail and Omni-channel Business</li>
                    <li>3rd Party, 4th Party <b>Logistics Company</b></li>
                    <li><b>Startups</b> on E-Commerce</li>
                    <li>Financial Companies</li>
                    <li>Dentists</li>
                    <li>Production Processes</li>
                    <li>Quality Monitoring Documents</li>
                </ul>
            </div>
            <div>
                <p  className='Paragraph-context-1'>We keep open and reliable partnerships and maintain solid expertise, upgrading it to the latest technologies in software development.
                     Shamssoftware is a team of 10+ certified experts with comprehensive knowledge in:</p>
            </div>
            <div>
                <p className='Paragraph-context-1'>
                <ul className='Paragraph-list'>
                    <li> .Net</li>
                    <li>.Net Core</li>
                    <li> JavaScript</li>
                    <li>Python</li>
                    <li>Node.JS</li>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>  HTML</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                </ul>
                </p>
            </div>
            <div>
                <p  className='Paragraph-context-1'>The custom website development company Shamssoftware collaborates with emerging startups,
                 medium-sized companies, and small businesses. We provide:</p>
          
            <ul className='Paragraph-list'>
                    <li>Custom-made solutions for your business</li>
                    <li>A dedicated set of developers</li>
                    <li>High-quality and long-lasting code</li>
                    <li>Affordable prices</li>
                    <li>Full life-cycle development</li>
                    <li>Useful teamwork</li>
                </ul>
            </div>
                <div>
                    <h2 className="display-5 fw-bold paragraph-title2" style={ {color:"black" }}>Milestones of the Web Software Development process</h2>
                </div>

            <div>
                <p className='Paragraph-context-1'>Shamssoftware, a custom web development firm, guarantees that business ideas have more potential and may compete more effectively in the market.
                    Include Shamssoftware on your list of trustworthy partners.</p>
            </div>
            <div>
                <h3 className=" fw-bold paragraph-title3" style={ {color:"black" }}>Shamssoftware web software development processes and specific steps</h3>
            </div>
            <div>
            <p className='Paragraph-context-1'>
                We employ the most significant time and project management strategies to implement all-in-one web solutions for your company successfully.
                <br/><a className="a-link" onClick={toggleParagraph}>Display Context :</a>
                </p>
                <ul className='Paragraph-list'>
                    <li><b>Understanding clients, Project initiation and Requirement Analysis.</b> </li>
                    {displayParagraph && <p className='Paragraph-list-context1'>
                            We must analyze user needs and listen carefully to our stakeholders to develop correct and practical solutions.
                            For this, Shamssoftware initiates a discovery process and exchanges ideas with stakeholders.
                            Meetings are held together to improve and clarify requirements. <br/> 
                            Requirements are classified and documented by modules or structurally. Immediately after, the professional design team starts working on user experience and prototyping.
                            </p>
                            }
                            <li><b> Project Planning, Roadmap</b></li>
                    {displayParagraph && <p className='Paragraph-list-context1'>
                                        The focus is on planning the scope and controlling activities to see outcomes on schedule. We efficiently distribute the available resources, 
                                        present the team makeup, and calculate the optimal plan to fit the budget and desired time constraints.</p>}
                            <li><b> Agile Development</b> </li>
                    {displayParagraph && <p className='Paragraph-list-context1'>
                            Agile project management is crucial to our projects, in our opinion, because it enables timely testing of anticipated/sustainable outcomes. <br/>
                            At Shamssoftware, project managers and analysts constantly keep a vision on and regulate the openness of the development process and verify that the tasks are carried out correctly.<br/>
                            Discusses, tracks, and updates stakeholders on progress. It enables the client to manage adjustments and advancement processes.</p>}
                            <li><b> Quality Assurance Testing</b> </li>
                    {displayParagraph && <p className='Paragraph-list-context1'>
                                  Shamssoftware offers services for automation testing. 
                                  Quality Assurance engineers will carry out the required testing by the client's needs and the project's unique aspects.</p>}
                                        <li><b> Delivery</b> </li>
                    {displayParagraph && <p className='Paragraph-list-context1'>
                                Shamssoftware has improved every latest release and distribution function to speed up testing processes.
                                It offers the delivery criteria established inside the project or product procedures and pertinent documentation.</p>}
                                <li><b> Maintenance and Support</b>  </li>
                    {displayParagraph && <p className='Paragraph-list-context1'>
                    With the help of our team's troubleshooting, functionality updates, and post-release support, you can run your business with comfort at Shamssoftware.</p>}
                </ul>
            </div>
            <div>
                <h3 className=" fw-bold paragraph-title3" style={ {color:"black" }}>TECHNOLOGIES WE WORK WITH</h3>
            </div>
            <div>
            <div class="container ">
            <div class="col-12 col-sm-8">
                <div class="row">
                <div class="col-4">black</div>
                <div class="col-4">black</div>
                <div class="col-4">black</div>
                </div>
                <div class="row">
                <div class="col-4">black</div>
                <div class="col-4">black</div>
                <div class="col-4">black</div>
                </div>
                <div class="row">
                <div class="col-4">black</div>
                <div class="col-4">black</div>
                <div class="col-4">black</div>
                </div>
            </div>
            <div class="col-12 col-sm-4 text-danger">
                <div class="row">
                    <div class="col-4 col-sm-12">pink</div>
                    <div class="col-4 col-sm-12">pink</div>
                    <div class="col-4 col-sm-12">pink</div>
                </div>
            </div>
                </div>
            </div>
            <div>
                <h3 className=" fw-bold paragraph-title3" style={ {color:"black" }}>CONCLUSION</h3>
            </div>
            <div>
            <p className='Paragraph-context-1'>Shamssoftware, a company that develops websites, is available to those who want unique web applications. We offer the most high-quality, economical custom web programming services. Experience in the company and complete project management support encourage trust and productive collaboration. 
            So, be ready to work with actual masters when you use an outsourcing company to accomplish a vital aim.</p>
            <p className='Paragraph-context-1'>Everything is done at a high level, from filling out the contact form on our website to presenting the final findings. 
             Please get in touch with us and share details about the project concept and your expectations for the intended outcome. The most powerful technologies and our extensive knowledge will enable your idea to materialize into a successful enterprise.</p>
            </div>
            </div>
     
            </>
  );
};

export default FirstPart;