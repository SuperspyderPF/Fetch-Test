import React, {useEffect, useState} from 'react'

const Fetch = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random").then((resp) => resp.json()).then((apiData)=> {
            setData(apiData.message)
        })
    }, [])
  return (
    <div>
        show {data}
      
    </div>
  )
}

export default Fetch
