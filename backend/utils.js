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
