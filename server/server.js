const doGet = () => 
  HtmlService.createTemplateFromFile("public/index.html")
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag(
      "viewport",
      'width=device-width, user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
      )
    .setTitle("Proyecto React and App Script")
    console.log(getDataJSON())