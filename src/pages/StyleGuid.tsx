import React from 'react'
import './css/StyleGuid.css'
import Newsletter from '../components/Newsletter/Newsletter'
import ColorsItem from '../components/ColorsItem/ColorsItem'

const ColorsList: string[] = ['#274C5B', '#7EB693', '#EFD372', '#D4D4D4', '#F9F8F8', '#EFF6F1', '#525C60']

const StyleGuid = () => {
  return (
    <>
      <main className='guid-main'>
        <h1 className="guid-title">Style Guide</h1>
      </main>
      <div className="guid-content d-f">
        <div className="guid-content-item d-f">
          <h3 className="content-item-title">Color</h3>
          <div className="content-item-colors d-f">
            {
              ColorsList.map((elem) => {
                return (
                  <ColorsItem colorValue={elem} />
                )
              })
            }
          </div>
        </div>
        <div className="guid-content-item d-f">
          <h3 className="content-item-title">Text Styles</h3>
          <div className="content-item-fonts d-f">
            <h1>Display H1 Text</h1>
            <h2>Heading H2 Text</h2>
            <h3>Heading H3 Text</h3>
            <h4>Heading H4 Text</h4>
            <h5>Heading H5 Text</h5>
            <h6>Heading H6 Text</h6>
          </div>
        </div>
        <div className="guid-content-item d-f">
          <h3 className="content-item-title">Paragraph</h3>
          <p className="content-item-par">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley.established fact that a reader
            will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as opposed.
          </p>
        </div>
        <div className="guid-content-item d-f">
          <h3 className="content-item-title">List</h3>
          <ol className='content-item-list'>
            <li>Publishing packages and web page</li>
            <li>Content here, content here', making it look like readable</li>
            <li>Packages and web page</li>
          </ol>
        </div>
        <div className="guid-content-item d-f">
          <h3 className="content-item-title">Quotes</h3>
          <p className="content-item-quote">
            “The first rule of any organic used in a business is that nature applied to an efficient
            operation will magnify the efficiency. The second is that organic applied to an inefficient
            operation will magnify the health.”
          </p>
        </div>
        <div className="guid-content-item d-f">
          <h3 className="content-item-title">Button</h3>
          <div className="content-item-buttons d-f">
              <div><img src="/images/buttons/1.png" alt="buttons1" /></div>
              <div><img src="/images/buttons/2.png" alt="buttons2" /></div>
              <div><img src="/images/buttons/3.png" alt="buttons3" /></div>
              <div><img src="/images/buttons/4.png" alt="buttons4" /></div>
          </div>  
        </div>
      </div>
      <Newsletter />
      <div style={{ marginBottom: "120px" }}></div>
    </>
  )
}

export default StyleGuid