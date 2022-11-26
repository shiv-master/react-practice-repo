import './scss/Items.scss'

const Items = () => {
    return (
        <>
        <div className="containerBox">
            <h5>Dictionary</h5>
            <div>It contains all information.</div>
        </div>
        <div className='parent'>
            parent
            <div className='child child1'>one</div>
            <div className='child child2'>two</div>
            <div className='child child3'>three</div>
        </div>
        <div className='grid_container'>
            <div className='grid_item grid_item1'>grid item1 Lorem ipsum dolor sit amet.</div>
            <div className='grid_item grid_item2'>grid item2</div>
            <div className='grid_item grid_item3'>grid item3</div>
            <div className='grid_item grid_item4'>grid item4</div>
            <div className='grid_item grid_item5'>grid item5</div>
        </div>
        </>
    )
}

export default Items