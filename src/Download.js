
const imageUrl = "https://images.unsplash.com/photo-1670918346745-248c1a10b79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODE3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzIwMzQ1MzU&ixlib=rb-4.0.3&q=80&w=400";

function Download (){
    return (
        <div>
            hii download

            <a href={imageUrl} download>
                                  <img src={imageUrl} alt="img"/>
                              </a>)
        </div>
    )
}

export default Download;