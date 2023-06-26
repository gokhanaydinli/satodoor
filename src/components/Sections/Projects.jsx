import React, { useState } from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import { useTranslation } from "react-i18next";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/varyap-yangin.jpeg";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/tuzla-insaat.jpeg";
import ProjectImg6 from "../../assets/img/projects/6.png";
import Tuzla from "../../assets/img/projects/tuzla-tutom.jpeg"
import Varyap from "../../assets/img/projects/varyap-yangin2.jpeg"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const { t } = useTranslation();

  const handleProjectClick = (projectId) => {
    setActiveProject(projectId);
  };

  const handleModalClose = () => {
    setActiveProject(null);
  };

  const renderModalContent = () => {
    if (activeProject === 1) {
      return (
        <>
          <h2>{t("eczacibasi.Kanyon")}</h2>
          <p>{t("eczacibasi.KanyonDesc")}</p>
        </>
      );
    } else if (activeProject === 2) {
      return (
        <div className="modal-project">
          <h2>{t("isBankasi.Kuleler")}</h2>
          <img src={Varyap}/>
          <p>{t("isBankasi.KulelerDesc")}</p>
        </div>
      );
    } else if (activeProject === 3) {
      return (
        <>
          <h2>{t("siseCam.title")}</h2>
          <p>{t("siseCam.siseCamDesc")}</p>
        </>
      );
    } else if (activeProject === 4) {
      return (
        <>
          <h2>{t("ibb.MetroUlasim")}</h2>
          <p>{t("ibb.MetroUlasimDesc")}</p>
        </>
      );
    } else if (activeProject === 5) {
      return (
        <div className="modal-project">
          <h2>{t("isBankasi2.title")}</h2>
          <img src={Tuzla}/>
          <p>{t("isBankasi2.description")}</p>
        </div>
      );
    } else if (activeProject === 6) {
      return (
        <>
          <h2>{t("ibbMetro.title")}</h2>
          <p>{t("ibbMetro.description")}</p>
        </>
      );
    }
  };

  return (
    <Wrapper id="projects">
      <div className="whiteBg" style={{ marginTop: "48px", marginBottom: "48px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t("projects.Title")}</h1>
            <p className="font16">
              {t("projects.description1")}
              <br />
              {t("projects.description2")}
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title={t("eczacibasi.Kanyon")}
                text={t("eczacibasi.KanyonDesc")}
                action={() => handleProjectClick(1)}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title={t("isBankasi.Kuleler")}
                text={t("isBankasi.KulelerDesc")}
                action={() => handleProjectClick(2)}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title={t("siseCam.title")}
                text={t("siseCam.siseCamDesc")}
                action={() => handleProjectClick(3)}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title={t("ibb.MetroUlasim")}
                text={t("ibb.MetroUlasimDesc")}
                action={() => handleProjectClick(4)}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title={t("isBankasi2.title")}
                text={t("isBankasi2.description")}
                action={() => handleProjectClick(5)}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title={t("ibbMetro.title")}
                text={t("ibbMetro.description")}
                action={() => handleProjectClick(6)}
              />
            </div>
          </div>
        </div>
      </div>

      {activeProject && (
        <ModalWrapper>
          <ModalContent>
            {renderModalContent()}
            <button class="modal-button" onClick={handleModalClose}>{t("X")}</button>
          </ModalContent>
        </ModalWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index:999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  position:relative;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;
