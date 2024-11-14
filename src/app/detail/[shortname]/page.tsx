'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState, Component } from 'react'
import projectData from '../../project_data.json'
import { Project } from "@/../types"
import Image from 'next/image';

export default function Detail(){
    let defaultContent:Project = {
        "id":0,
        "title": "",
        "thumbnail": "",
        "detail_header":"",
        "type":"",
        "role":"",
        "tech":[""],
        "summary":"",
        "links":[""],
        "images":[""],
        "shortname":"loading"
    }

    let [content,setContent] = useState<Project>(defaultContent);

    const params = useParams<{shortname:string}>();
    
    useEffect(()=>{
        let c = projectData.find(el => el.shortname == params.shortname);
        setContent(c || defaultContent);
    },[params.shortname])

    const renderTechnologies = ()=>
    {
        if(content.tech){
            let tList = "Technologies: ";
            content.tech.forEach((t:string,ind:number)=>{
                if(ind !== 0)
                    tList += ", " + t;
                else
                    tList += t;
            })
            return tList;
        } else {
            return "";
        }
    }

    const renderLinks = ()=>{
        let linkList:Array<React.JSX.Element> = [];
        if(content.links){
            content.links.forEach((l:string,ind:Number)=>{
                linkList.push(<div><a rel="noopener noreferrer" target="_blank" href={l}>{l}</a></div>);
            })
            if(linkList.length > 0)
            {
                return (
                    <div>
                        <b>Links:</b>
                        {linkList}
                    </div>
                );
            }
        }
        return "";
    }
    
    return(
        <div>
            <div className="flex justify-center">
                <div className="h-[50vh] w-[100vw] max-w-[800px] max-h-[400px] flex flex-col justify-center align-middle text-center" style={{backgroundImage:"url(" + content.detail_header + ")",backgroundPosition:'center', backgroundSize:'cover'}}>
                    <div className="max-w-[80%] mx-auto my-0">
                        <h1 className="text-white font-bold text-3xl" style={{textShadow:"1px 1px 5px black"}}>{content.title}</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center align-middle flex-col">
                <div className="max-w-[800px] mx-auto my-0">
                    <div className="flex flex-col pt-20">
                        <h3>{content.summary}</h3>
                    </div>
                </div>
                <div className="max-w-[800px] mx-auto my-0">
                    <div className="flex flex-col pt-5">
                        <Image width={20} height={20} alt="additional content" className="" src={'/img/down-chevron.svg'}></Image> 
                    </div>
                </div>
                <div className="max-w-[800px] mx-auto my-0">
                    <div className="flex flex-col pt-20">
                        {content.images[0] ? <Image width={600} height={300} alt="additional content" className="border-2 border-zinc-500" src={content.images[0]}></Image> : <div></div>}
                    </div>
                </div>
            </div>
        </div>
        // <Container fluid style={{"padding":0}} className="content-detail-container">
        //     <div className="detail-header-image" style={{backgroundImage:"url(" + content.detail_header + ")"}}>
        //         <div className="title">
        //             <h1>
        //                 {content.title}
        //             </h1>
        //         </div>
        //     </div>
        //     <Container className="detail-info-container">
        //         <Row>
        //             <Col xs={12}>
        //                 <h3>{content.summary}</h3>
        //             </Col>
        //             <Col xs={12}>
        //                 <div className="detail-image-container">
        //                     <img alt={content.shortname} src={content.images ? content.images[0] : "/img/content/loading_content_image.jpg"}/>
        //                 </div>
        //             </Col>
        //             <Col xs={12}>
        //                 <p>Role: {content.role}</p>
        //                 <p>Project Type: {content.type}</p>
        //                 <p>{renderTechnologies()}</p>
        //                 <p>{renderLinks()}</p>
        //             </Col>
        //         </Row>
        //     </Container>
        // </Container>
    );
}