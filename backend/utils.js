module.exports.buildInfoHTML = function (data) {
  return data.map((info, index) => ({
    _id: info._id,
    html: `
        <p style="
          color: ${index % 2 ? "#000" : "#fff"};
          background-color: ${index % 2 ? "#fff" : "#000"};
        ">
          ${info.payload}
        </p>
      `,
  }));
};

module.exports.bodyFromReq = function (req) {
  return new Promise((resolve, reject) => {
    try {
      const chunks = [];
      req.on("data", (chunk) => chunks.push(chunk));
      req.on("end", () => {
        const data = JSON.parse(Buffer.concat(chunks).toString());
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};
