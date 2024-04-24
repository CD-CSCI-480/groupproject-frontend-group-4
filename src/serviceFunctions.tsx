import { useState,useEffect } from "react"
import axios from "axios"
import { Media } from "./types"
export type urlParams = {
    url:string
}
export type sectonType = {
    title:string,
    data:Media[]
}

function getListfromFromBackend({url}:urlParams) {
    const [media,setMedia] = useState([]);
    useEffect(()=>{
        const fetchItems =async () => {
            try {
                const response = await axios.get(url)
                setMedia(response.data);
            } catch (error) {
                console.error("Error getting data",error);
            }
    };
    fetchItems();
},[]);
return media;
}

export function initSection(sections:sectonType[],url:urlParams[]) {
    for(let i =0;i<sections.length;i++) {
        sections[i].data = getListfromFromBackend(url[i]);
    }
}