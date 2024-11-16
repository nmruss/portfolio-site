'use client'
import { useParams } from 'next/navigation'
import { useMemo, useEffect, useState } from 'react'
import projectData from '../../project_data.json'
import { Project } from "@/../types"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Detail(){
    const defaultContent:Project = useMemo(()=>{
        return {
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
    },[])
   
    const [content,setContent] = useState<Project>(defaultContent);

    const params = useParams<{shortname:string}>();
    const pathname = usePathname();

    useEffect(()=>{
        if(pathname !== '/'){
           window.scroll(0,0);
        }
    },[pathname])
    
    useEffect(()=>{
        const c = projectData.find(el => el.shortname == params.shortname);
        setContent(c || defaultContent);
    },[params.shortname, defaultContent])

    const renderTechnologies = ()=>
    {
        if(content.tech){
            let tList = "";
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
        const linkList:Array<React.JSX.Element> = [];
        if(content.links){
            content.links.forEach((l:string,ind:number)=>{
                linkList.push(<div key={l + ind}><Link className="hover:underline text-blue-600" rel="noopener noreferrer" target="_blank" href={l}>{l}</Link></div>);
            })
            if(linkList.length > 0)
            {
                return (
                    <div>
                        <b>Relevant Links:</b>
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
            <div className="flex justify-center align-middle flex-col mb-10">
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

                <div className="w-[100vw] max-w-[800px] mx-auto my-0">
                    <div className="pt-20">
                        {renderLinks()}
                    </div>
                    <div className="pt-5">
                        <b>Technologies: </b>{renderTechnologies()}
                    </div>
                </div>
                
                <div className="max-w-[800px] mx-auto my-0">
                    <div className="flex flex-col pt-20">
                        {content.images[0] ? <Image width={600} height={300} alt="additional content" className="border-2 border-zinc-500" src={content.images[0]}></Image> : <div></div>}
                    </div>
                </div>

                <div className="max-w-[800px] mx-auto my-0">
                    <div className="flex flex-col pt-10">
                    <Link href={'/'} className="hover:underline">&lt; back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}