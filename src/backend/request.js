const getAllParticipants = async (cb) => {
  // You can await here
  let result = await fetch("http://localhost:3001/get", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  result = await result.json();

  let uniqueRes = {};
  if (result && result.length > 0) {
    result.forEach((element) => {
      uniqueRes[element.name + element.choice] = element;
    });
  }
  cb(uniqueRes);
};

const addOrUpdateParticipant = async (participant, cb) => {
  let result = await fetch("http://localhost:3001/addOrUpdate", {
    method: "post",
    body: JSON.stringify(participant),
    headers: {
      "Content-Type": "application/json",
    },
  });
  result = await result.json();
  cb();
  console.warn(result);
};

export { getAllParticipants, addOrUpdateParticipant };
