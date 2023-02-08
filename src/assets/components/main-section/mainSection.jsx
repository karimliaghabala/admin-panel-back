import React,{useState} from 'react'
import './mainSection.css'
import {Link} from 'react-router-dom'

const MainSection = () => {
    const [forumData, setForumData] = useState({
        texth1:"",
        text:"",
        country:"",
        composition:"",
        denomination:"",
        quality:"",
        year:"",
        weight:"",
        link1:"",
        link2:"",
        textshort:"",
        price:""
      })
      const getDataBasa = (e)=>{
        e.preventDefault()
        alert("Send...")
        fetch("https://excample-api.vercel.app/",{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify(forumData)
        })}
    return (
        <div className="home-container">
            <h1>Admin Panel</h1>
                <form  className='container' onSubmit={getDataBasa}>
                    <div className="left">
                        <label className='block'> Coin name
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, texth1:  e.target.value})}} />
                        </label>
                        <label className='block'> Issuing Country
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, country:  e.target.value})}} />
                        </label>
                        <label className='block'> Composition
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, composition:  e.target.value})}} />
                        </label>
                        <label className='block'> Quality
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, quality:  e.target.value})}} />
                        </label>
                        <label className='block'> Denomination
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, denomination:  e.target.value})}} />
                        </label>
                        <label className='block'> Year
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, year:  e.target.value})}} />
                        </label>
                    </div>
                    <div className="main">
                        <p>Short description</p>
                        <textarea cols="50" rows="8" onChange={(e)=>{setForumData({...forumData, textshort:  e.target.value})}}></textarea>
                        <p>Long description</p>
                        <textarea cols="50" rows="9" onChange={(e)=>{setForumData({...forumData, text:  e.target.value})}}></textarea>
                        <label className='block'> Weight
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, weight:  e.target.value})}} />
                        </label>
                        <label className='block'> Price
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, price:  e.target.value})}} />
                        </label>
                    </div>
                    <div className="right">
                        <label className='block'> Link to obverse image
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, link1:  e.target.value})}} />
                        </label>
                        <label className='block'> Link to reverse image
                            <input className='block' type="text" onChange={(e)=>{setForumData({...forumData, link2:  e.target.value})}} />
                        </label>
                        <div className='btn'>
                            <input type="submit" value="Save" />
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
        </div>
    )
}

export default MainSection