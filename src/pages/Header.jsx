import React, { useState } from 'react'
import { useEffect } from 'react'

function Header({ setMovies }) {

    const [search, setsearch] = useState("")
    const [record, setrecord] = useState([])

    useEffect(() => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
    }, [])

    useEffect(() => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const serch = all.filter(val => (val.Title).toLowerCase().includes(search.toLowerCase()))
        setrecord(serch)
        console.log(all.Title);
    }, [search])



    const general = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.item === "general"
        })
        setrecord(ans)
    }

    const favourite = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.item === "favourite"
        })
        setrecord(ans)
    }

    const Upcoming = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.item === "upcoming"
        })
        setrecord(ans)
    }

    const trending = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.item === "trending"
        })
        setrecord(ans)
    }

    const action = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "action"
        })
        setrecord(ans)
    }

    const adventure = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "adventure"
        })
        setrecord(ans)
    }

    const comedy = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "comedy"
        })
        setrecord(ans)
    }

    const crime = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "crime"
        })
        setrecord(ans)
    }

    const drama = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "drama"
        })
        setrecord(ans)
    }

    const family = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "family"
        })
        setrecord(ans)
    }

    const history = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "history"
        })
        setrecord(ans)
    }

    const romance = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "romance"
        })
        setrecord(ans)
    }

    const thriller = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
        const ans = all.filter((val) => {
            return val.category === "thriller"
        })
        setrecord(ans)
    }

    const all = () => {
        let all = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        setrecord(all)
    }



    return (
        <>
            <div className="row">
                <div >
                    <div style={{ background: "black", padding: "40px", width: "100vw" }}>
                        <div style={{ justifyContent: "center", display: "flex" }}>
                            <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" style={{ width: "400px", height: "40px", padding: "15px", border: "1px solid black", borderRadius: "10px", marginTop: "68px" }} placeholder='Search Movies' />
                        </div>
                        <div style={{ width: "100vw", paddingTop: "60px", display: "flex", flexWrap: "wrap", margin: "auto" }} className='px-5 justify-content-center'>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px", }} className='px-3 mb-2' onClick={all}>All</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px" }} className='px-3' onClick={action}>Action</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px" }} className='px-3' onClick={adventure}>Adventure</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px" }} className='px-3' onClick={comedy} >Comedy</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px" }} className='px-3' onClick={crime}>Crime</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px" }} className='px-3' onClick={drama}>Drama</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px" }} className='px-3' onClick={family}>Family</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px" }} onClick={history}>History</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px" }} onClick={romance}>Romance</button>
                            <button style={{ marginRight: "10px", width: "100px", border: "0px", background: "#f8f9fa", borderRadius: "10px", color: "black", fontWeight: "700", height: "30px" }} onClick={thriller}>Thriller</button>
                        </div>
                    </div>

                    {/* card  */}

                    <div style={{ marginTop: "10px", width: "100vw", display: "flex", flexWrap: "wrap",justifyContent:"center" }}>
                        {
                            record && record.map((val) => {
                                return (
                                    <div className="card m-2" style={{ width: '18rem' }}>
                                        <img src={val.Poster} style={{ height: "200px", objectFit: "contain" }} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{val.Title}</h5>
                                            <p className="card-text">Year :- <strong>{val.Year}</strong></p>
                                            <p className="card-text">imdbID :- <strong>{val.imdbID}</strong></p>
                                            <p className="card-text">Type :- <strong>{val.Type}</strong></p>
                                            <a href="#" className="btn btn-primary" style={{ background: "black" }}>Book Ticket</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>



                </div>

            </div>
        </>
    )
}

export default Header