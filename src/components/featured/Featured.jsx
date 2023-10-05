
import './featured.css'

function Featured() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/85115609.jpg?k=b5bc8239f4a08d9d5210e99e7ea125d102fbfb230548326c68fd951cbb144b31&o=&hp=1" alt="渡假村.jpg" className='featuredImg' />
                <div className="featuredTitles">
                    <h2>Dublin</h2>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/86383994.jpg?k=318c042126b5497b8e7091dd7a5ba159cafea6ac2693d1b4ff2f8388e5b50da5&o=&hp=1" alt="渡假村.jpg" className='featuredImg' />
                <div className="featuredTitles">
                    <h2>Reno</h2>
                    <h2>456 properties</h2>
                </div>

            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/290949238.jpg?k=25b5e222be6e102b6595ab3373b6c60d3b21acf3745cba84ff16e7cc99bea96d&o=&hp=1" alt="渡假村.jpg" className='featuredImg' />
                <div className="featuredTitles">
                    <h2>Austin</h2>
                    <h2>789 properties</h2>
                </div>

            </div>
        </div>
    )
}


export default Featured