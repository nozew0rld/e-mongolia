import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import logo from "../img/logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const buttonLinkMap = [
    {
      buttonText: <FaFacebook className="w-[20px] h-[20px] text-[#6276A0] " />,
      link: "https://www.facebook.com/emongolia",
    },
    {
      buttonText: <FaTwitter className="w-[20px] h-[20px] text-[#6276A0]" />,
      link: "https://twitter.com/emnongoliamn",
    },
    {
      buttonText: (
        <RiInstagramFill className="w-[20px] h-[20px] text-[#6276A0]" />
      ),
      link: "https://www.instagram.com/emongolia.mn/",
    },
    {
      buttonText: <FaYoutube className="w-[20px] h-[20px] text-[#6276A0]" />,
      link: "https://www.youtube.com/channel/UCVqv_boa73KgDV0NyqbRRZw",
    },
  ];
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="mt-[50px] bg-[#FCFCFC] w-full h-[780px] border-solid border-[1px] border-[#EBEBEB]">
      <div className="mt-3">
        <div className="font-roboto ml-5">Холбоо барих</div>
        <div className="mt-5 ml-5 flex font-roboto text-sm font-[400] gap-3">
          <CiLocationOn className="w-[35px] h-[35px] " />
          Ш/х-785, Төв шуудан, Сүхбаатарын талбай 1, Чингэлтэй дүүрэг, УБ
          15160-0026.
        </div>
        <div className="mt-5 ml-5 flex font-roboto text-sm font-[400] gap-3">
          <IoCallOutline className="w-[20px] h-[20px]" />
          1111(2)
        </div>
        <div className="mt-6 ml-5 flex font-roboto text-sm font-[400] gap-3">
          <IoMailOutline className="w-[20px] h-[20px]" />
          info@e-mongolia.mn
        </div>
      </div>
      <div className="mt-3">
        <div className="font-roboto ml-5 mt-5">Цэснүүд</div>
        <div className="mt-5 ml-5 font-roboto font-light">Үйлчилгээнүүд</div>
        <div className="mt-5 ml-5 font-roboto font-light">
          Аялал, тийз захиалга
        </div>
        <div className="mt-5 ml-5 font-roboto font-light">
          Түгээмэл асуулт, хариулт
        </div>
        <div className="mt-5 ml-5 font-roboto font-light">
          Үйлчилгээний нөхцөл
        </div>
      </div>
      <div className="mt-3">
        <div className="font-roboto ml-5 mt-5">Вэб хандалтын тоо</div>
        <div className="mt-5 ml-5 font-roboto font-light">Өнөөдөр: -</div>
        <div className="mt-5 ml-5 font-roboto font-light">Энэ 7 хоног: -</div>
        <div className="mt-5 ml-5 font-roboto font-light">Энэ сар: -</div>
        <div className="mt-5 ml-5 font-roboto font-light">Нийт: 11,498,274</div>
      </div>
      <div className="mt-[50px] ml-5">
        <img src={logo} alt="" />
      </div>
      <div className="mt-5 ml-[250px] flex gap-3 ">
        {buttonLinkMap.map((item, index) => (
          <div className="" key={index} onClick={() => handleClick(item.link)}>
            {item.buttonText}
          </div>
        ))}
      </div>
      <div className="h-[1px] w-[350px] ml-5 bg-[#EBEBEB] mt-5"></div>
    </div>
  );
};

export default Footer;
