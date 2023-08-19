//@ts-nocheck

import { colors } from "@/styles/defaultStyle";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
export const WandFrame = () => {
  // const wand = document.getElementById("wand");
  // const tiles = document.querySelectorAll(".tile");
  const wand = useRef();
  const tiles = useRef();

  const xy = (x, y) => ({ x, y });
  const px = (value) => `${value}px`;
  const deg = (value) => `${value}deg`;
  const clamp = (value, min, max) => Math.max(Math.min(value, max), min);

  const updateMouse = (mouseX, mouseY) => {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    const mouse = {
      position: xy(mouseX, mouseY),
      decimal: xy(mouseX / windowWidth, mouseY / windowHeight),
      // multiplier: xy(1.3, 0.4),
      multiplier: xy(1.3, 0.1),
      offset: xy(windowWidth * -0.15, windowHeight * 0.1),
      modifiedPosition: xy(0, 0),
    };

    mouse.modifiedPosition.x =
      mouse.position.x * mouse.multiplier.x + mouse.offset.x;
    mouse.modifiedPosition.y =
      mouse.position.y * mouse.multiplier.y + mouse.offset.y;

    return mouse;
  };

  const revealImages = (mouseX) => {
    console.table({
      tiles,
    });
    for (const tile of tiles.current.children) {
      const dimensions = tile.getBoundingClientRect(),
        relativeMouseX = mouseX - dimensions.left,
        mouseXAsDecimal = clamp(relativeMouseX / dimensions.width, 0, 1);

      const opacity = mouseXAsDecimal,
        blur = 1 - mouseXAsDecimal;

      tile.style.setProperty("--opacity", opacity);
      tile.style.setProperty("--blur", blur);
    }
  };

  const getWandStyles = (mouse) => ({
    left: px(mouse.modifiedPosition.x),
    top: px(mouse.modifiedPosition.y),
    rotate: deg(mouse.decimal.x * 20 - 10),
  });

  useEffect(() => {
    window.onmousemove = (e) => {
      const mouse = updateMouse(e.clientX, e.clientY),
        wandStyles = getWandStyles(mouse);

      wand.current.animate(wandStyles, { duration: 400, fill: "forwards" });

      revealImages(mouse.modifiedPosition.x);
    };
  }, []);

  return (
    <Container>
      <Wand id="wand" ref={wand}>
        <div className="cap" />
      </Wand>

      <Tiles ref={tiles}>
        <div className="tile">
          <i className="fa-solid fa-image"></i>
          <img src="https://assets.codepen.io/1468070/mousepad-tile-1.png?format=auto&quality=80" />
        </div>
        <div className="tile">
          <i className="fa-solid fa-image"></i>
          <img src="https://assets.codepen.io/1468070/mousepad-tile-4.png?format=auto&quality=80" />
        </div>
        <div className="tile">
          <i className="fa-solid fa-image"></i>
          <img src="https://assets.codepen.io/1468070/mousepad-tile-3.png?format=auto&quality=80" />
        </div>
      </Tiles>
    </Container>
  );
};

const Container = styled(Box)`
  /* background: rgb(2, 6, 23); */
  outline: 2px solid ${colors.brand.quaternary};
  border-radius: 1rem;
  min-height: 400px;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
`;

const Wand = styled.div`
  width: 10vmin;
  aspect-ratio: 1 / 10;
  background: linear-gradient(
    to right,
    rgb(26 24 28) 10%,
    rgb(42 40 44) 45% 55%,
    rgb(26 24 28) 90%
  );
  position: absolute;
  left: 5%;
  top: 20%;
  translate: -50%;
  rotate: -3deg;
  z-index: 100;
  border-radius: 3vmin;
  box-shadow: 0vmin 1vmin 4vmin rgb(0 0 0 / 80%);
  overflow: hidden;

  #wand > .cap {
    height: 20%;
    width: 100%;
    background: linear-gradient(
      to right,
      rgb(212 221 236) 10%,
      rgb(255 255 255) 45% 55%,
      rgb(212 221 236) 90%
    );
  }
`;

const Tiles = styled.div`
  display: flex;

  .tile {
    display: grid;
    place-items: center;
    width: 38vmin;
    aspect-ratio: 1;
    background-color: rgb(31, 41, 55);
    border-radius: 6vmin;
    box-shadow: 0vmin 3vmin 6vmin rgb(0 0 0 / 25%),
      inset 0vmin 0.5vmin 1vmin rgb(255 255 255 / 15%);
    position: relative;
    overflow: hidden;
  }

  .tile:nth-child(1) {
    rotate: 3deg;
    z-index: 3;
  }

  .tile:nth-child(2) {
    rotate: -2deg;
    z-index: 2;
  }

  .tile:nth-child(3) {
    rotate: 5deg;
    z-index: 1;
  }

  .tile:is(:nth-child(2), :nth-child(3)) {
    margin-left: -10vmin;
  }

  .tile > i {
    font-size: 15vmin;
    color: rgb(255 255 255 / 10%);
  }

  .tile > img {
    height: 100%;
    aspect-ratio: 1;
    position: absolute;
    left: 0px;
    top: 0px;
    object-fit: cover;
    opacity: var(--opacity);
    filter: blur(calc(var(--blur) * 10px));
  }
`;
