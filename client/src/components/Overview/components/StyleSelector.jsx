import React, { useState, useEffect } from 'react';
import sampleStyles from './sampleStyles';
import styled from 'styled-components';
import Socials from './Socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { SelectorContainer, ImageContainer, BadgeStyled } from './styles/StyledStyleSelector';
import { ProductInfo } from './styles/ProductInfoStyled';
import { SelectSize, SelectQuantity, AddCartButton, ErrorMsgStyled } from './styles/SelectSizeStyled';

function StyleSelector({ styles, product, index, changeGallery, changeStyle, addItem }) {
  const [currentSku, setSku] = useState({});
  const [quantityArr, setQuantityArr] = useState([]);
  const [quantity, setQuantity] = useState('Select Quantity');
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectIndex, setSelectIndex] = useState(0);
  const [error, setError] = useState(false);

  let prodSkus = styles[index].skus;

  useEffect(() => {
    generateOptions(currentSku.quantity || 1)
    setSelectedStyle(Object.keys(styles[0].skus)[0])
  }, [currentSku]);

  function generateOptions(num) {
    let html = [];
    for(let i = 1; i <= num; i++) {
      html.push(i);
    }
    setQuantityArr(html);
  }

  return(
    <SelectorContainer>
      <ProductInfo>
        <i>CATEGORY: {product.category.toUpperCase()} </i>
        <h2> {product.name} </h2>
        <span style={{color: styles[index].sale_price ? 'red' : 'black' }}>
          ${styles[index].sale_price ? `${styles[index].sale_price}` : styles[index].original_price}
        </span>

        <span style={{textDecoration: 'line-through', display: 'block'}}>
            {styles[index].sale_price ? `$${styles[index].original_price}` : ''}
        </span>
      </ProductInfo>

      <div>
        <span style={{fontWeight: 'bold'}}>STYLE > </span> {styles[index].name}
      </div> <br></br>
      <ImageContainer>
        {/* <BadgeStyled>
          <FontAwesomeIcon icon={faCheck} />
        </BadgeStyled> */}
        {styles.map((product, index) => {
          return <img
            className={index === selectIndex ? 'selectedSize' : ''}
            key={product.style_id}
            src={product.photos[0].thumbnail_url}
            onClick={() => {
              changeGallery(product);
              setSelectIndex(index);
              changeStyle(product, index);
            }
          }/>
        })}
      </ImageContainer>

      <SelectSize>
        {Object.keys(prodSkus).map((sku, id) => {
          return (
            <button className={sku === selectedSize ? 'selected' : ''} key={id} onClick={(e) => {
              setSelectedSize(sku);
              setSku(prodSkus[sku]);
            }
          }> {prodSkus[sku].size} </button>
          )
        })}
      </SelectSize>

      <ErrorMsgStyled className={error ? 'danger' : ''}>
        Please select a size and quantity before adding to cart.
      </ErrorMsgStyled>

      <SelectQuantity>
        <select name="selectQuantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        <option value="Select Quantity" disabled>Select Quantity</option>
          {quantityArr.map((line, index) => {
            if(line <= 15) {
              return <option key={index} value={index + 1}>{line}</option>
            }
          })}
          }
        </select>
      </SelectQuantity>

      <AddCartButton>
        <button onClick={(selectedSize !== 0 && quantity > 0) ? () => {addItem(selectedSize, quantity)} : () => {
          setError(true);
          setTimeout(() => {setError(false)}, 3000);
        }}>{quantityArr.length === 0 ? 'OUT OF STOCK' : 'ADD TO CART'}</button>
      </AddCartButton>
    </SelectorContainer>
  )
}

export default StyleSelector;