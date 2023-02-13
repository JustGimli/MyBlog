import React, {useEffect, useState} from "react";



export default function Home(props){
        const data = ["generate", "thin", "easy to use", "tihon on place", "where is my mind"] // fetch from  server

        const [Article, setArticle] = useState([])
        const [item, setItem] = useState(['g','e', 'r', 't'])
        const [num, setNum] = useState(() => {
            return data.length
        })
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
                    const index = Math.floor(Math.random() * num)
                    setItem(data[index].split(""))
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