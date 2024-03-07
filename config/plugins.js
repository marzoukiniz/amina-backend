module.exports = ({ env }) => ({
    
    email: {
      config: {
        provider: "sendmail",
        settings: {
          defaultFrom: "dzirinizar007@gmail.com",
          defaultReplyTo: "dzirinizar007@gmail.com",
          testAddress: "dzirinizar007@gmail.com",
        },
      },
    },
    
  });