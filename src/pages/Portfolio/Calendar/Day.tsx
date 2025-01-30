import React from "react";


interface DayProps {
    jour: string;
    className: string
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;

}



function Day({jour,className, onClick} : DayProps ) {
    return (
        <div className={className} onClick={onClick}>
          {jour}
        </div>
      );
      }
  
  export default Day;