import { Popover } from "./styles/content";
import React from "react";
import * as md from "react-icons/md";
import { BsPersonDashFill, BsPersonPlusFill } from "react-icons/bs";

export default function CardPopover({ pop, title,isShow }) {
  return (
    <Popover pop={pop} isShow={isShow}>
      <span>
        <md.MdBookmark /> ذخیره کردن
      </span>
      <span>
        <BsPersonPlusFill /> دنبال کردن
      </span>
      <span>
        <md.MdShare /> اشتراک‌گذاری
      </span>
      <span>
        <md.MdFlag /> گزارش تخلف
      </span>
    </Popover>
  );
}
