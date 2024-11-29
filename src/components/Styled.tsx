import styled from "styled-components";
import Link from "next/link";
import { darkTheme } from "@/app/themes";
import { Offcanvas } from "react-bootstrap";
const banner = "/images/banner2_60x1920.png";
export const HeaderMain = styled.header`
  background: url(${banner}) center top no-repeat;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 9;
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0rem 1rem;
  @media (min-width: 992px) {
    display: block;
  }
  .navStyle a {
    padding: 4px 20px;
    &:last-child {
      border-right: none;
    }
  }
  .img-logo {
    height: 55px;
    padding: 10px;
  }
`;

export const HeaderMobile = styled.div`
  position: relative;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0rem 1rem;
  @media (min-width: 992px) {
    display: none;
  }
  .img-logo {
    height: 50px;
    padding: 10px;
  }
`;

export const NavLinkStyled = styled(Link)<{ current?: boolean }>`
  font-size: 14px;
  line-height: 18px;
  color: ${darkTheme.Black80};
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &.active {
    color: #0047c4;
    transition: all 0.5s ease;
  }
  @media (max-width: 992px) {
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    color: ${darkTheme.Black80};
    padding: 1rem 0;
    display: block;
  }
`;

export const TitleWarper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 1.5rem;
  cursor: pointer;

  span {
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    color: #fff;
    text-transform: uppercase;
  }
`;
export const MenuToggle = styled.button`
  background: transparent;
  border: none;
`;

export const StyleOffcanvas = styled(Offcanvas)`
  background: #ffc107;
  .img-logo {
    height: 38px;
  }
`;

export const TitleTextMain = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${darkTheme.Black80};
  @media (max-width: 991px) {
    font-weight: 600;
  }
`;

export const ButtonTextMain = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: ${darkTheme.Black80};
  background-color: transparent;
  border: 1px solid ${darkTheme.Black80};
  padding: 10px 80px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${darkTheme.Black80};
    color: white;
  }

  /* Responsive cho màn hình nhỏ */
  @media (max-width: 991px) {
    font-weight: 600;
  }
`;
export const ButtonContainer = styled.div`
  display: contents;
  justify-content: space-between; /* Căn giữa hoặc căn đều các nút */
  gap: 10px; /* Khoảng cách đồng đều giữa các nút */
  margin-bottom: 10px;
  // Khoang cach giua cac button xep theo chieu doc
  & > * {
    margin-bottom: 10px;
  }
`;
export const TitleTextBig = styled.div`
  font-size: 24px;
  color: ${darkTheme.Black80};
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 18px;
  }
  &.green {
    color: #6fce0e;
  }
  &.blue {
    color: #15c2f8;
  }
`;
export const TitleTextMedium = styled.div`
  font-size: 14px;
  color: ${darkTheme.Black80};
  @media (max-width: 991px) {
    font-size: 12px;
  }
`;
export const TitleTextMin = styled.div`
  font-size: 12px;
  color: ${darkTheme.Black80};
  @media (max-width: 991px) {
    font-size: 10px;
  }
`;

export const TitleLogo = styled.div`
  font-size: 14px;
  color: #fff;
  @media (max-width: 991px) {
    font-weight: 600;
    font-size: 12px;
  }
`;
export const TitleUnderLogo = styled.div`
  font-size: 10px;
  color: #fbd534;
`;

export const BoxRowBgColor = styled.div`
  background: #f2f2f2;
`;


