import PropTypes from "prop-types";
import React from "react";
import { withTranslation } from "../../i18n";
import sipgateLogo from "../assets/logo_sipgate.svg";
import zdfLogo from "../assets/logo_zdf.svg";
import regierungLogo from "../assets/logo_bundesregierung.svg";
import hackathonLogo from "../assets/logo_hackathon.png";
import solutionEnablerLogo from "../assets/logo_solution_enabler.png";
import bagsoLogo from "../assets/logo_bagso.png";
import vodafoneLogo from "../assets/logo_vodafone.png";
import {
  Heading,
  Logos,
  LogoWrapper,
  Logo,
  Wrapper,
} from "./styles/Partners.styles";

const Partners = ({ t }) => (
  <>
    <Wrapper>
      <Logos>
        <Heading>{t("initiatedBy")}:</Heading>
        <LogoWrapper>
          <Logo href="https://www.bundesregierung.de" logoWidth={120}>
            <img src={regierungLogo} alt="Bundesregierung" width="120" />
          </Logo>
          <Logo href="https://wirvsvirus.org" logoWidth={120}>
            <img src={hackathonLogo} alt="WirVsVirus" width="120" />
          </Logo>
        </LogoWrapper>
      </Logos>

      <Logos>
        <Heading>{t("supportedBy")}:</Heading>
        <LogoWrapper>
          <Logo href="https://wirvsvirus.org/solution-enabler/" logoWidth={120}>
            <img
              src={solutionEnablerLogo}
              alt="Solution Enabler Program"
              width="120"
            />
          </Logo>
          <Logo href="https://www.zdf.de" logoWidth={90}>
            <img src={zdfLogo} alt="ZDF" width="90" />
          </Logo>
          <Logo href="https://www.sipgate.de" logoWidth={120}>
            <img src={sipgateLogo} alt="Sipgate" width="120" />
          </Logo>
          <Logo href="https://www.bagso.de" logoWidth={120}>
            <img src={bagsoLogo} alt="bagso" width="120" />
          </Logo>
          <Logo href="https://www.vodafone-institut.de" logoWidth={120}>
            <img src={vodafoneLogo} alt="vodafone" width="120" />
          </Logo>
        </LogoWrapper>
      </Logos>
    </Wrapper>
  </>
);

Partners.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("home")(Partners);
