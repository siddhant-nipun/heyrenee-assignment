import { React, useState } from "react";
import Appbar from "../sdk/components/Appbar";
import PatientDemographics from "../sdk/components/SidebarMenu/PatientDemographics";
import PatientDemo from "../sdk/components/SidebarMenu/PatientDemo";
import HealthLiteracy from "../sdk/components/SidebarMenu/HealthLiteracy";
import styles from "../styles/Home.module.scss";
export default function Index() {
  const [OpenMenu, setopenMenu] = useState(<PatientDemo />);
  return (
    <div className={styles.wholeContainer}>
      <Appbar />
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.sidebarContainer}>
            <div className={styles.wrapper}>
              <a href="#" onClick={() => setopenMenu(<PatientDemo />)}>
                Patient Demographics
              </a>
              <a href="#" onClick={() => setopenMenu(<HealthLiteracy />)}>
                Health Literacy
              </a>
              <a href="#" onClick={() => setopenMenu(<PatientDemographics />)}>
                Tech Literacy
              </a>
              <a href="#" onClick={() => setopenMenu(<PatientDemographics />)}>
                Records Review
              </a>
              <a href="#" onClick={() => setopenMenu(<HealthLiteracy />)}>
                Health Review
              </a>
              <a href="#" onClick={() => setopenMenu(<PatientDemographics />)}>
                SDOH Review
              </a>
              <a href="#" onClick={() => setopenMenu(<HealthLiteracy />)}>
                Satisfaction
              </a>
              <a href="#" onClick={() => setopenMenu(<PatientDemographics />)}>
                Care Circle
              </a>
              <a href="#" onClick={() => setopenMenu(<HealthLiteracy />)}>
                Settings
              </a>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>{OpenMenu}</div>
      </div>
    </div>
  );
}
