import React, {useEffect, useState} from "react";

import axios from "axios";

export default function Home(props){
        const [data, setData] = useState([])
        const [num, setNum] = useState(0)
        
        useEffect(() => {
            axios.get("http://127.0.0.1:8000/characters/")
            .then((responce) => {
                setData(responce.data.map(obj => obj.text))
                setNum(responce.data.length)
            })
            
        }, [])

        const [Article, setArticle] = useState([])
        const [item, setItem] = useState(['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'])
        const [index, setIndex] = useState(0)
        const [fetch, setFetch] = useState(true)


        useEffect( () => {

            if (item.length !== 0) {
                setTimeout(() => {
                    setArticle([...Article, item[0]])
                }, 200)
                setItem(item.slice(1, item.length))
            }else {
                if (Article.length !== 0) {
                    if (fetch){
                        setFetch(false)
                        setTimeout(() =>{setArticle([...Article])}, 1000)
                        
                    }else{
                    setTimeout(() => {
                        setArticle(Article.slice(0, Article.length-1))
                    }, 100)
                }
                }else{
                    setFetch(true)
                    
                    setItem(data[index].split(""))
                    let indexTemp = Math.floor(Math.random() * num)
                    if (index === indexTemp) {
                        while (indexTemp === index) {
                            indexTemp = Math.floor(Math.random() * num)
                        }
                    }
                    setIndex(indexTemp)
                    setArticle("")
                    
                }
                
            }

        }, [Article])


        return(
            
            <div className="Home">
                <div className="Home-width">
                    <div className="text-1">Hello my name is</div>
                    <div className="text-2">JustGimli</div>
                    <div className="text-3">
                        And I am
                        <span className="changedText">  {Article}</span>
                        <span className="Cursor" id="cursor">|</span> 
                    </div>
                    
                </div>
            </div>
        )
}