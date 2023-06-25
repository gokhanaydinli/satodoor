import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import pdf from "../Elements/satodoor_catalog.pdf";
import productPdf from "../Elements/satodoor_product.pdf";
import catalog from "../Elements/katalog-celik-kapi.pdf";
import book from "../book.svg";
import edit from "../edit.svg";
import video from "../video-camera.svg"

export default function Document() {
  const { t } = useTranslation();

  return (
    <Wrapper id="docs" className="container flexSpaceCenter">
      <div className="pdf-wrapper">
        <span className="pdf-container-title">{t("document.catalogTitle")}</span>
        <div className="pdf-container">
          <img alt='slider' style={{ width: '40px' }} src={book}></img>
          <a href={catalog}
            target="_blank"
            rel="noreferrer">
            {t("document.catalogLink")}
          </a>
        </div>
      </div>
      <div className="pdf-wrapper">
        <span className="pdf-container-title">{t("document.technicalTitle")}</span>
        <div className="pdf-container">
          <img alt='slider' style={{ width: '40px' }} src={edit}></img>
          <a href={productPdf}
            target="_blank"
            rel="noreferrer">
            {t("document.technicalLink")}
          </a>
        </div>
      </div>
      <div className="pdf-wrapper">
        <span className="pdf-container-title">{t("document.galleryTitle")}</span>
        <div className="pdf-container">
          <img alt='slider' style={{ width: '40px' }} src={video}></img>
          <a href={pdf}
            target="_blank"
            rel="noreferrer">
            {t("document.galleryLink")}
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;
