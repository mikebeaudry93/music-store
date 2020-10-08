import axios from "axios";
import url from "../utils/URL";

async function submitOrder({
  firstName,
  lastName,
  address,
  city,
  items,
  total,
  stripeTokenId,
  userToken,
}) {
  const response = await axios
    .post(
      `${url}/orders`,
      {
        firstName,
        lastName,
        address,
        city,
        items,
        total,
        stripeTokenId,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => console.log(error));
  return response;
}

export default submitOrder;
