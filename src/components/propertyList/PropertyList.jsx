import React from 'react'
import './propertyList.css'

function PropertyList() {
    return (
        <div className='pList'>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/293888001.jpg?k=4f4b6fdf690f5a94b6807399de4060eafe3092a4ffb9a95879b91a7ab0eec5d1&o=&hp=1" alt="渡假村.jpg" className="pListImg" />
                <div className="pListTitles">
                    <h2>酒店 (Hotels)</h2>
                    <h3>2331 hotels</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/282182757.jpg?k=48ae68b4b1c1f3df4881c64d88566ecd0313b061d1c0bb1d9f535ae68d8348ed&o=&hp=1" alt="渡假村.jpg" className="pListImg" />
                <div className="pListTitles">
                    <h2>公寓 (Apartments)</h2>
                    <h3>2331 hotels</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/300555411.jpg?k=a972a817d9144c60b227f19854d30f73de4504d392122d9cadf8c4874a05449f&o=&hp=1" alt="渡假村.jpg" className="pListImg" />
                <div className="pListTitles">
                    <h2>度假型酒店 (Resorts)</h2>
                    <h3>2331 hotels</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/347678223.jpg?k=129b5e42720a6fb807c34e66e7dff6a0d2e94cb133b46cdc5500db4534135ec3&o=&hp=1" alt="渡假村.jpg" className="pListImg" />
                <div className="pListTitles">
                    <h2>別墅 (Villas)</h2>
                    <h3>2331 hotels</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/73345064.jpg?k=f31745d397604e4bbe1ed7894189a794296991e33e8e59cb190e9bbe61bcfddf&o=&hp=1" alt="渡假村.jpg" className="pListImg" />
                <div className="pListTitles">
                    <h2>小木屋 (Cabins)</h2>
                    <h3>2331 hotels</h3>
                </div>
            </div>
        </div>
    )
}

export default PropertyList