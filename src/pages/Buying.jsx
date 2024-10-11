import React from "react";
import { UserTitle } from "../components/userProfile/UserTitle";

// style
import { Warpper } from "../styles/userProfileStyle/userBuyingStyle";
import PurchasedItems from "../components/userProfile/PurchasedItems";

const Buying = () => {
  return (
    <Warpper>
      <UserTitle>구매한 물품</UserTitle>
      <PurchasedItems />
    </Warpper>
  );
};

export default Buying;
