

export const sendData = async (startBoard, finalBoard) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        start: startBoard.join(""),
        end: finalBoard.join(""),
      }),
    };
    // const response = await axios.post(
    //   "http://127.0.0.1:8000/solve/hello/",
    //   JSON.stringify({ start: startBoard.join(""), end: finalBoard.join("") })
    // );
    // console.log(response);
    // return response;
    const response = await fetch(
      "http://kreem96.pythonanywhere.com/reem/solve/",
      requestOptions
    );
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};
