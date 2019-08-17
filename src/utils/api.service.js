import axios from "axios";

export default async message => {
  try {
    const { data } = await axios.post(
      "https://dialogflowbotexample.azurewebsites.net/api/DialogFlowbot?code=f32Fai1aFoi/HcU3yLq9eNm7bZwpbI7gRpF4j/QMJF9WlcM2BXRjaw==",
      { message }
    );
    return {
      user: "bot",
      message: data.fulfillmentText
    };
  } catch (err) {
    console.log(err);
    return {
      user: "bot",
      message: "src/util/api.service.js try catch has failed"
    };
  }
};
