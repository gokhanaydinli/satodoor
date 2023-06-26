import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const PhoneNumber = ({ number }) => {
  const handlePhoneClick = () => {
    const cleanedPhoneNumber = number.replace(/\D/g, '');
    window.location.href = `tel:${cleanedPhoneNumber}`;
  };

  return (
    <p className="font13" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
      {number}
    </p>
  );
};

const EmailLink = ({ email }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <p className="font13" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
      {email}
    </p>
  );
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
          <HeaderInfo style={{ padding: '0 48px' }}>
            <h1 className="font40 extraBold">{t("contact.Title")}</h1>
            <p className="font14">
              {t("contact.Description1")}
              <br />
              {t("contact.Description2")}
            </p>
            <br /><br />
            <p className="font20">
              {t("contact.PhoneNumber")}<br />
              <PhoneNumber number="(0212) 565 35 35" />
            </p><br /><br />
            <p className="font20">
              {t("contact.EmailAddress")}<br />
              <EmailLink email="info@satodoor.com.tr" />
            </p>
          </HeaderInfo>
          <div>
            <iframe allowFullScreen="" className="map" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.448808325875!2d28.90752061541801!3d41.037313425586376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba63b71879e1%3A0x578f25414b8194be!2s%C5%9Eato%20Door!5e0!3m2!1str!2str!4v1673370633075!5m2!1str!2str" style={{ border: '0', width: '600px', marginTop: '80px', marginBottom: '80px' }}></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
