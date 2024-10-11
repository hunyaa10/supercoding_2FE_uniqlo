import React, { useState } from "react";
import OnSale from "../components/userProfile/selling/OnSale";
import SoldItems from "../components/userProfile/selling/SoldItems";

// style
import {
  Title,
  Warpper,
  TitleBox,
} from "../styles/userProfileStyle/userSellingStyle";

const Selling = () => {
  const [isSelling, setIsSelling] = useState(true);

  const handleSwitchMenu = (boolean) => {
    setIsSelling(boolean);
  };
  return (
    <Warpper>
      <TitleBox>
        <Title isActive={isSelling} onClick={() => handleSwitchMenu(true)}>
          판매중인 물품
        </Title>
        <Title isActive={!isSelling} onClick={() => handleSwitchMenu(false)}>
          판매완료된 물품
        </Title>
      </TitleBox>
      {isSelling ? (
        // {/* 판매중 */}
        <OnSale />
      ) : (
        // {/* 판매완료 */}
        <SoldItems />
      )}
    </Warpper>
  );
};

export default Selling;
