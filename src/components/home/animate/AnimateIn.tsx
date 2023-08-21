import {
  PropsWithChildren,
  useRef,
  FC,
  RefObject,
  useEffect,
  useState,
} from "react";
import useElementOnScreen from "../../../hooks/useElementOnScreen";
import "./AnimateIn.css";

export enum AnimateTypes {
  SLIDE_IN = "SLIDE_IN",
  FADE_IN = "FADE_IN",
}

export enum ElementPositionTypes {
  RIGHT = "RIGHT",
  LEFT = "LEFT",
}

export type AnimateProps = {
  type: AnimateTypes;
  childRef?: RefObject<Element>;
  elementPosition?: ElementPositionTypes;
};

const AnimateIn: FC<PropsWithChildren<AnimateProps>> = ({
  children,
  type,
  childRef,
  elementPosition,
}: any) => {
  const [classNames, setClassNames] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  // useEffect(() => {
  //   if (type === "right" && onScreen) {
  //     setClassNames("slide-in-right visible");
  //   } else if (type === "right" && !onScreen) {
  //     setClassNames("slide-in-right hidden");
  //   } else if (type === "left" && onScreen) {
  //     setClassNames("slide-in-left visible");
  //   } else if (type === "left" && !onScreen) {
  //     setClassNames("slide-in-left hidden");
  //   }
  // }, [onScreen]);

  console.log("onScreen:: ", onScreen);
  if (type === AnimateTypes.SLIDE_IN) {
    return (
      <div
        ref={ref}
        style={
          elementPosition === ElementPositionTypes.RIGHT
            ? {
                transform: onScreen ? "translateX(0%)" : "translateX(150%)",
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "0 2rem" : "none",
                transition: "1500ms ease-in-out",
                height: childRef ? childRef?.current?.height : "auto",
              }
            : {
                transform: onScreen ? "translateX(0%)" : "translateX(-150%)",
                opacity: onScreen ? 1 : 0,
                translate: onScreen ? "0 2rem" : "none",
                transition: "1500ms ease-in-out",
                height: childRef ? childRef?.current?.height : "auto",
              }
        }
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "1100ms ease-in-out",
        height: childRef ? childRef?.current?.height : "auto",
      }}
    >
      {children}
    </div>
  );
};

export default AnimateIn;
