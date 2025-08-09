"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import { riddaUtils } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CustomCursor from "@/components/CustomCursor";
const RiddaLayout = ({
  children,
  bodyClass = "ridda-body",
  header,
  footer,
  menus,
}) => {
  useEffect(() => {
    riddaUtils.animation();
    riddaUtils.fixedHeader();
    riddaUtils.scrollTop();
    document.querySelector("body").classList = bodyClass;
  }, []);

  return (
    <Fragment>
      <CustomCursor/>
      <EmbedPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} menus={menus} />
        {children}
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};
export default RiddaLayout;
