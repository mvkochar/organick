import React from 'react'
import "./css/Licenses.css"
import Newsletter from '../components/Newsletter/Newsletter'

const Licenses = () => {
    return (
        <>
            <main className='licenses-main'>
                <h1 className="licenses-title">Licenses</h1>
            </main>
            <div className="licenses-content d-f">
                <div className="licenses-content-item d-f jc-sb">
                    <h3 className="content-item-title">Icon & Graphics</h3>
                    <div>
                        <p className="content-item-desc">
                            Icons and Graphics are manually designed by the <span className='text-green'>VictorFlow</span>
                            Templates team. You may download these and edit them to fit your website without asking
                            for permission or providing credit.
                        </p>
                        <p className="content-item-desc" style={{ marginTop: "30px" }}>
                            Upon purchasing Software UI Kit Template our team grants you a nonexclusive,
                            worldwide copyright license to download, copy, modify, and use the icons.
                        </p>
                    </div>
                </div>
                <div className="licenses-content-item d-f jc-sb">
                    <h3 className="content-item-title">Photography</h3>
                    <div>
                        <p className="content-item-desc">
                            All images used in the Organick Webflow Template are licensed for free personal and commercial use.
                            If you'd like to use any specific image, you can check the licenses and download the images for
                            free on Unsplash, Pexels‍. And Freepik.
                        </p>
                        <p className="content-item-desc" style={{ marginTop: "30px" }}>
                            Upon purchasing Software UI Kit Template our team grants you a nonexclusive,
                            worldwide copyright license to download, copy, modify, and use the icons.
                        </p>
                        <div className="content-item-points d-f">
                            <dl>
                                <dt>Unsplash</dt>
                                <dd className='content-item-desc'>
                                    Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8,
                                    Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16,
                                    Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,
                                </dd>
                            </dl>
                            <dl>
                                <dt>Pixcel</dt>
                                <dd className='content-item-desc'>
                                    Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                                    Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14,
                                    Image 15, Image 16, Image 17,
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="licenses-content-item d-f jc-sb">
                    <h3 className="content-item-title">Font</h3>
                    <p className="content-item-desc">
                        Organick template uses free licensed Google Fonts. Please check 
                        <span className='text-bold'>Roboto</span>, <span className='text-bold'>Yellowtail </span> <br /> 
                         and <span className='text-bold'>Open Sans</span>.
                    </p>
                </div>
            </div>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default Licenses