import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 860px) {
    margin-top: 2rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 960px) {
    background-color: #b95d5b;
    position: absolute;
    top: 6rem;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    z-index: 10;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media (max-width: 960px) {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f9efe4;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #23394d;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 960px) {
    width: 100%;

    div {
      width: 30%;
      justify-content: center;

      svg {
        display: flex;
      }
    }
  }

  @media (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      fill: #b95d5b;
      margin-right: 0.5rem;
    }
  }
`;
