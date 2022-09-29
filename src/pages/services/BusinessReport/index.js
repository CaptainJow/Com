import React ,{useState} from 'react';
import "../WebDevComp/stylesWebDev.css" ; 

const BusinessReport = () => {
 const [displayParagraph, setDispalyParagraph] = useState(false) ; 

 const toggleParagraph = () => {
    setDispalyParagraph(prev => !prev) ;
 }
  return (
            <>
            <div className='Paragraph-web-1'>
                <div><h1 className="display-5 fw-bold paragraph-title" style={ {color:"black" }}>Business Intelligence & Report Development</h1></div>
            <div> 
            <p className='Paragraph-context-1'>To put it briefly,
             Business Intelligence can be described as a set of processes that allow you to make the most of your data.
              It is a combination of various analytics and reporting solutions.
             It includes, but is not limited to, data mining, data analysis, data visualization, and critical performance indicators.</p>
            </div>
            <div>
                <p className='Paragraph-context-1'> 
                Shamssoftware has over ten years of experience in BI solutions, with around 25 BI projects successfully executed around the Middle East and Turkey. 
                Combined with more than ten years of providing IT services, our extensive knowledge, qualified specialists, strong competencies in data analysis and machine learning, 
                innovation culture, and best practices – all ensure the highest project implementation standards.
                Shams provides value-added business intelligence consultancy to our clients. We analyze and discuss their business requirements and listen to their needs and plans.
                </p>
            </div>
            <div>
                <p className='Paragraph-context-1'>After a careful analysis, we deliver real value, always ensuring that we talk and use the language of our clients.
                                            The team of Shamssoftware consists of IT professionals and business-specific consulting experts,
                                            who leverage their combined skills to plan, design, and execute the solution to fulfill and implement the customer objectives.
                </p>
              </div>
            <div>
                <p className='Paragraph-context-1'>
                We have consolidated our years of experience, knowledge, and expertise to provide business-oriented solutions. We are dedicated to delivering the best business intelligence solutions exceeding expectations in each project.
                 Our consultants worked on many large-scale projects regionally and implemented state-of-the-art solutions in different industries in the Middle East and Turkey.
                </p>
            </div>
            <div>
                <p className='Paragraph-context-1'>
                Design, build, test, document, implement, train, and manage. Each project is unique, depending on the purpose it is to serve.
                 Often projects are designed with a lot of customizations upfront. We believe in standardization by default and customize where necessary.
                </p>
            </div>
            <div>
                <p  className='Paragraph-context-1'>Our extensive knowledge across various business domains helps you get the project delivered efficiently, quickly, and reliably. 
                Furthermore, we use remote working technology wherever required. Therefore, we can provide solutions in the complete Middle East and Turkey.
                 We are an independent company and can select whatever technology best suits your infrastructure, skills, experience, and requirements.</p>
            </div>
            <div>
            <p className='Paragraph-context-1'>
            Data integrity and preparation are fundamental to successfully analyzing your data. We will ensure your data layer is in top condition and ready to be mined.
             Our consultants will advise you on which techniques best fit the business need. Whether you want to improve your cross and upsell, reduce churn, 
             or make an accurate forecast, we are here to assist. With our excellent experience in cross-industry,
             we have dealt with all kinds of questions and engaged with various stakeholders in different roles to ensure our deliverables meet your goals.
                </p>
            </div>
            </div>
     
            </>
  );
};

export default BusinessReport;
