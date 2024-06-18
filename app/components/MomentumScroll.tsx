import React, { useEffect, useRef } from "react";

const MomentumScroll = ({ children }: { children: any }) => {
  const mainRef = useRef<HTMLDivElement>(null); // Ref for the main container

  useEffect(() => {
    const body = document.body;
    const main = mainRef.current;

    let sx = 0, // For scroll positions
      sy = 0;
    let dx = sx, // For container positions
      dy = sy;

    // Set the body height to the height of the main content
    if (main) {
      body.style.height = main.clientHeight + "px";

      // Set the main container to fixed position
      main.style.position = "fixed";
      main.style.top = "0";
      main.style.left = "0";
    }

    // Function to handle scroll and update scroll positions
    const easeScroll = () => {
      sx = window.pageXOffset;
      sy = window.pageYOffset;
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", easeScroll);

    // Animation frame function to render the effect
    const render = () => {
      dx = li({ a: dx, b: sx, n: 0.07 });
      dy = li({ a: dy, b: sy, n: 0.07 });

      dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;

      if (main) {
        main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
      }

      window.requestAnimationFrame(render);
    };

    // Start the animation
    window.requestAnimationFrame(render);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("scroll", easeScroll);
    };
  }, []);

  // Linear interpolation function
  const li = ({ a, b, n }: { a: number; b: number; n: number }) => {
    return (1 - n) * a + n * b;
  };

  return (
    <div id="main" ref={mainRef}>
      {children}
    </div>
  );
};

export default MomentumScroll;
